import React from "react";

/**
 * AYBAR AKADEMİ — Lüks Kurumsal Sayfa Geçiş Mimarisi
 * --------------------------------------------------
 * Her sayfa değişiminde (Next.js template her rotada baştan render edilir):
 * 1. Üstte 3px ışıltılı lazer ilerleme çizgisi akar.
 * 2. Yeni sayfa içeriği pürüzsüzce yukarı süzülerek (float-in) belirir.
 * Ağır tam ekran perde bloke etmeleri tamamen kaldırılmıştır.
 * Sıfır tıklama engeli (pointer-events-none), sıfır donma, 120Hz GPU hızlandırma.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* 1. Üst Işıltılı Lazer İlerleme Çizgisi — Tıklamada anında akar, donma hissi yaratmaz */}
      <div
        className="page-laser-bar fixed top-0 left-0 right-0 h-[3px] z-[99] bg-gradient-to-r from-cobalt-600 via-crimson-500 to-amber-300 shadow-[0_0_12px_rgba(220,27,46,0.6)] pointer-events-none"
        aria-hidden="true"
      />

      {/* 2. Sayfa İçeriği Akıcı Yükseliş Sarmalayıcısı — Metinleri bozmaz, sıfır donma */}
      <div className="page-transition w-full max-w-full">{children}</div>
    </>
  );
}
