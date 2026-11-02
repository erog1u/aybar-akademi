import React from "react";

/**
 * İpeksi pürüzsüzlükte (silky smooth), GPU hızlandırmalı sayfa geçiş sarmalayıcısı.
 * Her rota değişiminde 0.32s zarif donanım geçişi çalıştırır; tıklamaları bloke etmez.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-transition w-full max-w-full">{children}</div>;
}
