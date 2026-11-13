#!/usr/bin/env python3
"""Regenerate public/sitemap.xml from the actual route tree.

Rules:
- Include every .astro page under src/pages, except:
  * pages whose frontmatter declares `redirect:` (legacy URL stubs)
  * pages marked robots="noindex"
  * 404 and thank-you
- Include every markdown post in src/content/blog.
- lastmod = last git commit date for that source file (falls back to the file's
  frontmatter date for posts, then to today).
- Deterministic ordering: home, services, service areas, blog index, posts, misc.
"""
import os
import re
import subprocess
from datetime import date
from typing import Optional

BASE = "https://www.hiloheatingandair.com"
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(ROOT)

SKIP = {"/404", "/thank-you", "/landing"}


def git_date(path: str) -> Optional[str]:
    try:
        out = subprocess.run(
            ["git", "log", "-1", "--format=%cs", "--", path],
            capture_output=True, text=True, timeout=10,
        ).stdout.strip()
        return out or None
    except Exception:
        return None


def frontmatter(path: str) -> str:
    try:
        text = open(path, encoding="utf-8").read()
    except OSError:
        return ""
    if not text.startswith("---"):
        return ""
    end = text.find("\n---", 3)
    return text[3:end] if end != -1 else ""


def collect_pages():
    pages = []
    for root, _dirs, files in os.walk("src/pages"):
        for name in files:
            if not name.endswith(".astro"):
                continue
            full = os.path.join(root, name)
            fm = frontmatter(full)
            if "redirect:" in fm:
                continue
            if 'robots="noindex' in fm:
                continue
            route = full[len("src/pages"):]
            route = route.replace("/index.astro", "").replace(".astro", "")
            route = route.rstrip("/") or "/"
            if "[" in route:
                continue
            if route in SKIP:
                continue
            lastmod = git_date(full) or date.today().isoformat()
            pages.append((route, lastmod))
    return pages


def collect_posts():
    posts = []
    for name in sorted(os.listdir("src/content/blog")):
        if not name.endswith(".md"):
            continue
        full = os.path.join("src/content/blog", name)
        fm = frontmatter(full)
        m = re.search(r"^date:\s*(\d{4}-\d{2}-\d{2})", fm, re.M)
        lastmod = m.group(1) if m else (git_date(full) or date.today().isoformat())
        posts.append((f"/blogs/{name[:-3]}", lastmod))
    return posts


def priority(route: str) -> tuple:
    if route == "/":
        return (0, route)
    if route == "/services":
        return (1, route)
    if route.startswith("/services/"):
        return (2, route)
    if route == "/service-areas":
        return (3, route)
    if route.startswith("/service-areas/"):
        return (4, route)
    if route == "/blogs":
        return (5, route)
    if route.startswith("/blogs/"):
        # newest first within posts
        return (6, route)
    return (7, route)


def main():
    entries = collect_pages() + collect_posts()
    # Static HTML page kept in public/ (human-readable sitemap)
    if os.path.exists("public/sitemap.html"):
        entries.append(("/sitemap.html", git_date("public/sitemap.html") or date.today().isoformat()))

    seen = set()
    unique = []
    for route, lastmod in entries:
        if route in seen:
            continue
        seen.add(route)
        unique.append((route, lastmod))

    def group(route: str) -> int:
        if route == "/":
            return 0
        if route == "/services":
            return 1
        if route.startswith("/services/"):
            return 2
        if route == "/service-areas":
            return 3
        if route.startswith("/service-areas/"):
            return 4
        if route == "/blogs":
            return 5
        if route.startswith("/blogs/"):
            return 6
        return 7

    posts = {r: d for r, d in unique if r.startswith("/blogs/")}

    def sort_key(item):
        route, _ = item
        if route in posts:
            # newest first
            return (group(route), tuple(-int(x) for x in posts[route].split("-")), route)
        return (group(route), (0,), route)

    ordered = sorted(unique, key=sort_key)

    lines = ['<?xml version="1.0" encoding="UTF-8"?>',
             '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
    for route, lastmod in ordered:
        loc = BASE + route
        lines.append("  <url>")
        lines.append(f"    <loc>{loc}</loc>")
        lines.append(f"    <lastmod>{lastmod}</lastmod>")
        lines.append("  </url>")
    lines.append("</urlset>")

    with open("public/sitemap.xml", "w", encoding="utf-8") as fh:
        fh.write("\n".join(lines) + "\n")

    print(f"wrote {len(ordered)} urls")


if __name__ == "__main__":
    main()
