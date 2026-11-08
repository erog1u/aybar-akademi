#!/usr/bin/env zsh
# Canlı yayın. CLOUDFLARE_API_TOKEN ve CLOUDFLARE_ACCOUNT_ID ortamda olmalı.
set -euo pipefail
setopt null_glob
cd "$(dirname "$0")/.."

git pull --no-edit origin main
rm -rf .next out
NEXT_PUBLIC_SITE_URL=https://aybaristakademi.com npm run -s build:production

zsh scripts/prune-out.sh

npx -y wrangler@4 pages deploy out --project-name=aybar-akademi --branch=main --commit-dirty=true
