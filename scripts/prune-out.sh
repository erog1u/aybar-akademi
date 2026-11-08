#!/usr/bin/env zsh
# Canlıya çıkmaması gereken iç sayfa ve fotoğraf seçeneklerini out/ klasöründen siler.
set -euo pipefail
setopt null_glob
cd "$(dirname "$0")/.."
rm -rf out/kurucu-secenekler out/kurucu-secenekler.* out/onizleme out/onizleme.* out/_next/static/chunks/app/kurucu-secenekler out/_next/static/chunks/app/onizleme
find out/images -name 'founder-*' ! -name 'founder-bahadir.*' -delete
