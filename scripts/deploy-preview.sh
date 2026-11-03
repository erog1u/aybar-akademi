#!/usr/bin/env zsh
set -euo pipefail

cd "$(dirname "$0")/.."
PROJECT_DIR="$(pwd)"

echo "==> 1. Building protected static preview export for GitHub Pages CDN (/aybar-akademi)..."
rm -rf .next out
STATIC_EXPORT=true NEXT_PUBLIC_BASE_PATH="/aybar-akademi" NEXT_PUBLIC_PREVIEW_MODE="true" npm run build

# Ensure _next/ assets are served directly by Fastly CDN without Jekyll filtering
touch out/.nojekyll
printf "User-agent: *\nDisallow: /\n" > out/robots.txt

echo "==> 2. Publishing protected out/ to erog1u/aybar-akademi (gh-pages branch with asset retention)..."
DEPLOY_TMP="/tmp/aybar-gh-pages-deploy"
rm -rf "$DEPLOY_TMP"
TOKEN=$(gh auth token)

# Mevcut gh-pages dalını çekerek eski CSS ve JS dosyalarını koru (sıfır kesinti / zero-downtime)
git clone --depth 1 --branch gh-pages "https://erog1u:${TOKEN}@github.com/erog1u/aybar-akademi.git" "$DEPLOY_TMP" 2>/dev/null || mkdir -p "$DEPLOY_TMP"

# Yeni derlenen dosyaları eskisinin üzerine yaz (yeni HTML'ler güncellenir, eski CSS'ler 404 vermez)
cp -R out/. "$DEPLOY_TMP/"

cd "$DEPLOY_TMP"
if [ ! -d ".git" ]; then
  git init -b gh-pages
  git remote add origin "https://erog1u:${TOKEN}@github.com/erog1u/aybar-akademi.git"
fi

git config user.name "Taha eren eroğlu"
git config user.email "tahaereneroglu@gmail.com"
git add -A
git commit -m "deploy: AYBAR AKADEMİ preview build (zero-downtime assets)" || true
git push origin gh-pages

echo "==> 3. Restoring local server build..."
cd "$PROJECT_DIR"
rm -rf .next
npm run build

echo "==> DEPLOY SCRIPT FINISHED!"
