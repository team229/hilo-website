#!/usr/bin/env bash
# Bunny Storage API — Deploy hiloheatingandair.com (native, not S3)
# Delegates to root unified deployer which handles both BUNNY_* and legacy AWS_* vars (auto-mapped)
# Old S3 behavior preserved only via AWS_* fallback inside scripts/bunny/deploy.sh
set -euo pipefail
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"
exec bash "$ROOT/scripts/bunny/deploy.sh" "hiloheatingandair.com" "$@"
