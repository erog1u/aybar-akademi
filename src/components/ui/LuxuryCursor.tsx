"use client";

import React, { useEffect, useRef, useState } from "react";

/**
 * AYBAR AKADEMİ — Belirgin, Sade & Animasyonlu Lüks İmleç
 * --------------------------------------------------------
 * 1. BELİRGİN & NET (42px -> 68px):
 *    - Sayfada asla kaybolmaz; 42px dinlenme boyutu, 2px net konturu ve
 *      12px parlak mücevher çekirdeğiyle hem beyaz hem koyu kobalt zeminlerde
 *      yüksek kontrastla net biçimde görünür.
 * 
 * 2. SADE & ZARİF:
 *    - Göz yoran hedef artıları, vizör çizgileri veya radar işaretleri yoktur.
 *    - İki uyumlu geometrik çember: İpeksi dış halka ve merkez odak noktası.
 * 
 * 3. AKICI ANİMASYONLAR:
 *    - Buton, link ve kartların üzerine gelindiğinde pürüzsüz yaylanmayla (68px) genişler.
 *    - Tıklamada (mousedown) anlık elastik mekanik sıkışma (tactile snap) hissi verir.
 * 
 * 4. SIFIR GECİKME (0ms Latency):
 *    - Donanım koordinatlarına kilitlidir (translate3d + translate(-50%, -50%)).
 *    - Hiçbir arkadan sürüklenme (lag/lerp) gecikmesi yoktur.
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
        // Konum 0ms anlıktır. Sadece boyut ve opaklık pürüzsüz yaylanma ile genişler
        transition:
          "opacity 0.2s ease, width 0.26s cubic-bezier(0.16, 1, 0.3, 1), height 0.26s cubic-bezier(0.16, 1, 0.3, 1)",
        width: isHovered ? "68px" : "42px",
        height: isHovered ? "68px" : "42px",
      }}
      aria-hidden="true"
    >
      {/* BELİRGİN & SADE LÜKS DIŞ HALKA */}
      <div
        className={`w-full h-full rounded-full flex items-center justify-center transition-all duration-200 ease-out relative ${
          isActive
            ? "scale-80 bg-crimson-600/25 border-2 border-crimson-600 shadow-[0_0_24px_rgba(220,27,46,0.6)]"
            : isHovered
            ? "scale-100 bg-crimson-600/12 backdrop-blur-[2px] border-2 border-crimson-600 shadow-[0_0_26px_rgba(220,27,46,0.45),0_4px_16px_rgba(0,43,122,0.3)]"
            : "scale-100 bg-white/15 backdrop-blur-[1px] border-2 border-cobalt-900/90 shadow-[0_4px_18px_rgba(0,43,122,0.35),0_0_0_1px_rgba(255,255,255,0.7)]"
        }`}
      >
        {/* Beyaz Yüksek Kontrast İç Çember (Koyu zeminlerde netlik için) */}
        <div
          className={`absolute inset-[1px] rounded-full border transition-colors duration-200 pointer-events-none ${
            isHovered ? "border-white/40" : "border-white/80"
          }`}
        />

        {/* MERKEZ BELİRGİN ODAK ÇEKİRDEĞİ (12px Parlak Mücevher) */}
        <div
          className={`rounded-full transition-all duration-200 pointer-events-none relative z-10 flex items-center justify-center ${
            isActive
              ? "w-2.5 h-2.5 bg-crimson-600 scale-90 ring-2 ring-white shadow-md"
              : isHovered
              ? "w-3 h-3 bg-crimson-600 scale-90 ring-2 ring-white shadow-[0_0_10px_rgba(220,27,46,0.8)]"
              : "w-3 h-3 bg-crimson-600 ring-2 ring-white shadow-[0_2px_6px_rgba(0,0,0,0.35)]"
          }`}
        >
          {/* Merkezde 1.5px Mikro Pırlanta Nokta */}
          <span className="w-1 h-1 rounded-full bg-white pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
