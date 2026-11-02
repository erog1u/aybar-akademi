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

echo "==> 2. Publishing protected out/ to erog1u/aybar-akademi (gh-pages branch)..."
DEPLOY_TMP="/tmp/aybar-gh-pages-deploy"
rm -rf "$DEPLOY_TMP"
mkdir -p "$DEPLOY_TMP"
cp -R out/. "$DEPLOY_TMP/"

cd "$DEPLOY_TMP"
git init -b gh-pages
git add -A
git commit -m "deploy: AYBAR AKADEMİ protected preview CDN build (Eroğlu Solutions)"
TOKEN=$(gh auth token)
git push --force "https://erog1u:${TOKEN}@github.com/erog1u/aybar-akademi.git" gh-pages:gh-pages

echo "==> 3. Restoring local server build..."
cd "$PROJECT_DIR"
rm -rf .next
npm run build

echo "==> DEPLOY SCRIPT FINISHED!"
