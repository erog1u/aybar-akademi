#!/usr/bin/env zsh
# Canlı yayın. CLOUDFLARE_API_TOKEN ve CLOUDFLARE_ACCOUNT_ID ortamda olmalı.
set -euo pipefail
setopt null_glob
cd "$(dirname "$0")/.."

git pull --no-edit origin main
rm -rf .next out
NEXT_PUBLIC_SITE_URL=https://aybaristakademi.com npm run -s build:production

# Seçenek galerisi, iç stüdyo ve kullanılmayan kurucu fotoğrafları canlıya çıkmaz.
rm -rf out/kurucu-secenekler out/kurucu-secenekler.* out/onizleme out/onizleme.* out/_next/static/chunks/app/kurucu-secenekler out/_next/static/chunks/app/onizleme
find out/images -name 'founder-*' ! -name 'founder-bahadir.*' -delete

npx -y wrangler@3 pages deploy out --project-name=aybar-akademi --branch=main --commit-dirty=true
