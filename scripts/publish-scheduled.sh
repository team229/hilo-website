#!/usr/bin/env bash
# Publish scheduled HiLo blog posts whose date has arrived.
# Reads scheduled/manifest.tsv: <YYYY-MM-DD>\t<slug>
# For each due item: move markdown into src/content/blog, add sitemap entry,
# commit + push, build, deploy to Bunny, purge CDN.
# Idempotent: an item is removed from the manifest once published.
set -euo pipefail

SITE_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$SITE_DIR"

MANIFEST="scheduled/manifest.tsv"
LOG="scheduled/publish.log"
TODAY="${TODAY:-$(date +%F)}"
export PATH="$HOME/.nvm/versions/node/v22.23.2/bin:$PATH"

log() { echo "[$(date '+%F %T')] $*" | tee -a "$LOG"; }

[ -f "$MANIFEST" ] || { echo "no manifest"; exit 0; }

DUE=()
while IFS=$'\t' read -r pubdate slug; do
  [ -z "${pubdate:-}" ] && continue
  [[ "$pubdate" == \#* ]] && continue
  if [[ "$pubdate" > "$TODAY" ]]; then
    log "skip $slug (due $pubdate)"
    continue
  fi
  SRC="scheduled/${pubdate}-${slug}.md"
  if [ ! -f "$SRC" ]; then
    log "warn: $slug due $pubdate but staged file missing"
    continue
  fi
  DUE+=("$pubdate|$slug")
done < "$MANIFEST"

if [ ${#DUE[@]} -eq 0 ]; then
  log "nothing due on $TODAY"
  exit 0
fi

# Load deploy credentials
set -a
# shellcheck disable=SC1091
. /home/ec2-user/Clickboostmedia/websites/.env
set +a

for item in "${DUE[@]}"; do
  pubdate="${item%%|*}"; slug="${item#*|}"
  SRC="scheduled/${pubdate}-${slug}.md"
  DEST="src/content/blog/${slug}.md"

  if [ -f "$DEST" ]; then
    log "already published: $slug"
    mv "$SRC" "scheduled/published-$(basename "$SRC")"
    continue
  fi

  log "publishing $slug ($pubdate)"
  mv "$SRC" "$DEST"

  python3 - "$slug" "$pubdate" <<'PY'
import sys, re
slug, pubdate = sys.argv[1], sys.argv[2]
p = 'public/sitemap.xml'
s = open(p).read()
url = f'https://www.hiloheatingandair.com/blogs/{slug}'
if url in s:
    print('sitemap already has', slug); raise SystemExit
entry = f'  <url>\n    <loc>{url}</loc>\n    <lastmod>{pubdate}</lastmod>\n  </url>\n'
s = s.replace('</urlset>', entry + '</urlset>')
open(p, 'w').write(s)
print('sitemap entry added for', slug)
PY
done

git add -A
git commit -m "chore: publish scheduled posts for $TODAY [agent]" || log "nothing to commit"
git push "https://x-access-token:${GITHUB_TOKEN}@github.com/team229/hilo-website.git" main
npm run build
cd ..
bash scripts/bunny/deploy.sh hiloheatingandair.com --purge

# Drop published rows from the manifest
cd "$SITE_DIR"
grep -v -F -f <(for i in "${DUE[@]}"; do echo "${i%%|*}	${i#*|}"; done) "$MANIFEST" > "${MANIFEST}.tmp" || true
mv "${MANIFEST}.tmp" "$MANIFEST"
log "done: ${#DUE[@]} post(s) published on $TODAY"
