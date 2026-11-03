"use client";

import React, { useEffect, useRef, useState } from "react";

/**
 * AYBAR AKADEMİ — Sade & Animasyonlu Lüks İmleç (Minimalist Animated Cursor)
 * -------------------------------------------------------------------------
 * 1. SADE & ZARİF TASARIM:
 *    - Göz yoran vizör çizgileri, radar işaretleri veya karmaşa tamamen kaldırıldı.
 *    - Temiz, minimalist iki katmanlı geometri: İncecik dış halka ve keskin merkez odak noktası.
 * 
 * 2. AKICI ANİMASYONLAR:
 *    - Dinlenme (32px) -> Hover (56px) geçişi ipeksi bir yaylanma (spring) ile genişler.
 *    - Hover durumunda arka planda hafif cam buğusu ve kobalt/kırmızı ton geçişi oluşur.
 *    - Tıklamada (mousedown) yay gibi elastik sıkışma (tactile click snap) gerçekleşir.
 * 
 * 3. SIFIR GECİKME (0ms Latency):
 *    - Fare konumu donanım koordinatlarına doğrudan kilitlidir (translate3d + translate(-50%, -50%)).
 *    - Konumda hiçbir lerp / arkadan sürüklenme gecikmesi yoktur.
 * 
 * 4. YÜKSEK KONTRAST:
 *    - Hem bembeyaz sayfa zemininde hem koyu kobalt alanlarda net, seçilebilir ve asil.
 */
export default function LuxuryCursor() {
  const [enabled, setEnabled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isInput, setIsInput] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorRef = useRef<HTMLDivElement>(null);
  const isHoveredRef = useRef(false);
  const isInputRef = useRef(false);
  const isVisibleRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Yalnızca fiziksel fareye sahip masaüstü ekranlarda aktifleştir
    const isFinePointer = window.matchMedia(
      "(pointer: fine) and (hover: hover)"
    ).matches;

    if (!isFinePointer) return;

    setEnabled(true);
    document.body.classList.add("has-custom-pointer");

    const onMouseMove = (e: MouseEvent) => {
      // 0ms Gecikmesiz Donanım Konumlandırma
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }

      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        setIsVisible(true);
      }

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = Boolean(
        target.closest(
          "a, button, [role='button'], [role='link'], [role='tab'], summary, .cursor-pointer, [data-cursor-hover], label[for]"
        )
      );

      const textElement = Boolean(
        target.closest("input, textarea, [contenteditable='true'], select")
      );

      if (interactive !== isHoveredRef.current) {
        isHoveredRef.current = interactive;
        setIsHovered(interactive);
      }

      if (textElement !== isInputRef.current) {
        isInputRef.current = textElement;
        setIsInput(textElement);
      }
    };

    const onMouseDown = () => setIsActive(true);
    const onMouseUp = () => setIsActive(false);

    const onMouseLeave = () => {
      isVisibleRef.current = false;
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      isVisibleRef.current = true;
      setIsVisible(true);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      document.body.classList.remove("has-custom-pointer");
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 pointer-events-none z-[999999] will-change-transform ${
        isVisible && !isInput ? "opacity-100" : "opacity-0"
      }`}
      style={{
        // Konum 0ms anlıktır. Sadece boyut ve opaklık animasyonludur.
        transition:
          "opacity 0.2s ease, width 0.26s cubic-bezier(0.16, 1, 0.3, 1), height 0.26s cubic-bezier(0.16, 1, 0.3, 1)",
        width: isHovered ? "56px" : "32px",
        height: isHovered ? "56px" : "32px",
      }}
      aria-hidden="true"
    >
      {/* SADE VE ANİMASYONLU HALKA */}
      <div
        className={`w-full h-full rounded-full flex items-center justify-center transition-all duration-200 ease-out relative ${
          isActive
            ? "scale-75 bg-crimson-600/20 border-[1.5px] border-crimson-600 shadow-[0_0_16px_rgba(220,27,46,0.4)]"
            : isHovered
            ? "scale-100 bg-crimson-600/10 backdrop-blur-[2px] border-[1.5px] border-crimson-600/80 shadow-[0_0_20px_rgba(220,27,46,0.35)]"
            : "scale-100 bg-slate-900/5 backdrop-blur-[1px] border-[1.5px] border-slate-900/60 shadow-[0_2px_8px_rgba(0,0,0,0.18)]"
        }`}
      >
        {/* Beyaz İnce İç Vurgu (Koyu zeminlerde mükemmel kontrast sağlar) */}
        <div
          className={`absolute inset-0 rounded-full border transition-colors duration-200 pointer-events-none ${
            isHovered ? "border-white/30" : "border-white/60"
          }`}
        />

        {/* MERKEZ ODAK NOKTASI (Minimal & Keskin) */}
        <div
          className={`rounded-full transition-all duration-200 pointer-events-none ${
            isActive
              ? "w-2.5 h-2.5 bg-crimson-600 scale-90 ring-1 ring-white"
              : isHovered
              ? "w-2 h-2 bg-crimson-600/60 scale-75 ring-1 ring-white/80"
              : "w-2 h-2 bg-crimson-600 ring-1.5 ring-white shadow-sm"
          }`}
        />
      </div>
    </div>
  );
}
