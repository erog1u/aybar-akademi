import React from "react";

/**
 * AYBAR AKADEMİ — Lüks Kurumsal Sayfa Geçiş Mimarisi
 * --------------------------------------------------
 * Her sayfa değişiminde (Next.js template her rotada baştan render edilir):
 * 1. Üstte 3px ışıltılı lazer ilerleme çizgisi akar.
 * 2. Donanım hızlandırmalı Kobalt & Kırmızı çift katmanlı perde akıcı şekilde açılır.
 * 3. Yeni sayfa içeriği pürüzsüzce yukarı süzülerek (float-in) belirir.
 * Sıfır tıklama engeli (pointer-events-none), 120Hz GPU hızlandırma.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* 1. Üst Işıltılı Lazer İlerleme Çizgisi */}
      <div
        className="page-laser-bar fixed top-0 left-0 right-0 h-[3px] z-[99] bg-gradient-to-r from-cobalt-600 via-crimson-500 to-amber-300 shadow-[0_0_12px_rgba(220,27,46,0.6)] pointer-events-none"
        aria-hidden="true"
      />

      {/* 2. Çift Katmanlı Lüks Kurumsal Perde (Açılış & Geçiş Efekti) */}
      <div
        className="fixed inset-0 z-[98] pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        {/* Arka Katman: Canlı Kırmızı İpek Perde */}
        <div className="page-shutter-crimson absolute inset-0 bg-crimson-600" />
        {/* Ön Katman: Asil Derin Kobalt Perde */}
        <div className="page-shutter-cobalt absolute inset-0 bg-cobalt-950 flex items-center justify-center">
          <div className="h-9 w-9 rounded-full border-2 border-white/20 border-t-crimson-500 animate-spin opacity-40" />
        </div>
      </div>

      {/* 3. Sayfa İçeriği Akıcı Yükseliş Sarmalayıcısı */}
      <div className="page-transition w-full max-w-full">{children}</div>
    </>
  );
}
