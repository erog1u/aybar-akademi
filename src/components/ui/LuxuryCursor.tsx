"use client";

import React, { useEffect, useRef, useState } from "react";

/**
 * AYBAR AKADEMİ — Belirgin, İri & Sıfır Gecikmeli Lüks İmleç (Zero-Delay Horizon Cursor)
 * ---------------------------------------------------------------------------------------
 * 1. SIFIR GECİKME (0ms Latency):
 *    - Fare hareketi doğrudan donanım koordinatlarıyla senkronizedir (translate3d + translate(-50%, -50%)).
 *    - Lerp veya yapay gecikme içermez; fiziksel farenin gittiği anında oradadır.
 *    - Mousemove esnasında gereksiz React render'ları tetiklenmez.
 * 
 * 2. İRİ & BELİRGİN TASARIM (52px -> 88px):
 *    - Dinlenme durumu 52px: Sayfada net, belirgin ve prestijli görünür, asla kaybolmaz.
 *    - Hover durumu 88px: Buton, link ve kartlarda manyetik ve lüks bir vizör gibi genişler.
 *    - Hem koyu kobalt (#002B7A) hem kar beyazı zeminlerde çift konturlu yüksek kontrast.
 * 
 * 3. HASSAS VİZÖR & MÜCEVHER ÇEKİRDEK:
 *    - Merkezde 12px Aybar Kırmızısı (#DC1B2E), beyaz halka ve altın ışıltılı odak noktası.
 *    - 4 köşeli İsviçre kronometresi / optik vizör çizgileriyle (cardinal ticks) zanaatkar estetiği.
 *    - Tıklamada (mousedown) anlık mekanik geri bildirim (snap scale).
 * 
 * 4. GÜVENLİ & MOBİL DOSTU:
 *    - Dokunmatik ekranlarda (iOS / Android) kesinlikle devre dışıdır, sıfır işlemci yükü.
 *    - Metin girişlerinde (input/textarea) kusursuzca gizlenir, standart metin imleci devreye girer.
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

    // Yalnızca hassas fiziksel fare işaretçisi olan masaüstü cihazlarda çalıştır
    const isFinePointer = window.matchMedia(
      "(pointer: fine) and (hover: hover)"
    ).matches;

    if (!isFinePointer) return;

    setEnabled(true);
    document.body.classList.add("has-custom-pointer");

    const onMouseMove = (e: MouseEvent) => {
      // 1. SIFIR GECİKME: Donanım koordinatlarını doğrudan DOM transformuna aktar
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }

      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        setIsVisible(true);
      }

      // 2. Etkileşimli öğe kontrolü (Sadece durum değiştiğinde React state güncelle)
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
        // Koordinat hareketi 0ms anlıktır (transform transition'a dahil edilmez!)
        // Sadece boyut ve opaklık pürüzsüz yaylanma ile genişler
        transition:
          "opacity 0.22s ease, width 0.28s cubic-bezier(0.16, 1, 0.3, 1), height 0.28s cubic-bezier(0.16, 1, 0.3, 1)",
        width: isHovered ? "88px" : "52px",
        height: isHovered ? "88px" : "52px",
      }}
      aria-hidden="true"
    >
      {/* DIŞ ÇERÇEVE — Lüks Optik Çerçeve & Çift Konturlu Belirginlik */}
      <div
        className={`w-full h-full rounded-full relative flex items-center justify-center transition-all duration-200 ease-out ${
          isActive
            ? "scale-85 bg-crimson-600/30 border-2 border-crimson-600 shadow-[0_0_28px_rgba(220,27,46,0.6)]"
            : isHovered
            ? "scale-100 bg-cobalt-950/15 backdrop-blur-[2px] border-2 border-crimson-600 shadow-[0_0_32px_rgba(220,27,46,0.5),0_6px_20px_rgba(0,43,122,0.4)]"
            : "scale-100 bg-white/10 backdrop-blur-[1px] border-[1.5px] border-cobalt-800/80 shadow-[0_4px_22px_rgba(0,43,122,0.35),0_0_12px_rgba(255,255,255,0.7)]"
        }`}
      >
        {/* Beyaz Yüksek Kontrast Güvenlik Çemberi (Koyu zeminlerde netlik için) */}
        <div
          className={`absolute inset-0 rounded-full border pointer-events-none transition-colors duration-200 ${
            isHovered
              ? "border-crimson-400/40"
              : "border-white/70"
          }`}
        />

        {/* Hover Halosu (İnteraktif öğelerin üzerinde açılan zarif dalga) */}
        {isHovered && (
          <div className="absolute -inset-1.5 rounded-full border border-crimson-500/30 animate-pulse pointer-events-none" />
        )}

        {/* 4 KARDİNAL VİZÖR İŞARETİ (Swiss Chronograph / Horology Viewfinder Ticks) */}
        {/* Kuzey (Üst) */}
        <span
          className={`absolute top-1 left-1/2 -translate-x-1/2 rounded-full transition-all duration-200 pointer-events-none ${
            isHovered
              ? "w-1 h-2 bg-crimson-500 shadow-[0_0_6px_#dc1b2e]"
              : "w-0.5 h-1.5 bg-cobalt-800 shadow-[0_0_2px_#ffffff]"
          }`}
        />
        {/* Güney (Alt) */}
        <span
          className={`absolute bottom-1 left-1/2 -translate-x-1/2 rounded-full transition-all duration-200 pointer-events-none ${
            isHovered
              ? "w-1 h-2 bg-crimson-500 shadow-[0_0_6px_#dc1b2e]"
              : "w-0.5 h-1.5 bg-cobalt-800 shadow-[0_0_2px_#ffffff]"
          }`}
        />
        {/* Batı (Sol) */}
        <span
          className={`absolute left-1 top-1/2 -translate-y-1/2 rounded-full transition-all duration-200 pointer-events-none ${
            isHovered
              ? "w-2 h-1 bg-crimson-500 shadow-[0_0_6px_#dc1b2e]"
              : "w-1.5 h-0.5 bg-cobalt-800 shadow-[0_0_2px_#ffffff]"
          }`}
        />
        {/* Doğu (Sağ) */}
        <span
          className={`absolute right-1 top-1/2 -translate-y-1/2 rounded-full transition-all duration-200 pointer-events-none ${
            isHovered
              ? "w-2 h-1 bg-crimson-500 shadow-[0_0_6px_#dc1b2e]"
              : "w-1.5 h-0.5 bg-cobalt-800 shadow-[0_0_2px_#ffffff]"
          }`}
        />

        {/* MERKEZ MÜCEVHER ODAK NOKTASI (0ms Hassas Tıklama Çekirdeği) */}
        <div
          className={`rounded-full relative z-20 pointer-events-none transition-all duration-150 flex items-center justify-center ${
            isActive
              ? "w-3 h-3 bg-crimson-600 ring-2 ring-white shadow-md scale-90"
              : isHovered
              ? "w-4 h-4 bg-crimson-600 ring-2 ring-white ring-offset-1 ring-offset-crimson-200 shadow-[0_0_12px_rgba(220,27,46,0.9)]"
              : "w-3.5 h-3.5 bg-crimson-600 ring-2 ring-white shadow-[0_2px_8px_rgba(0,0,0,0.35)]"
          }`}
        >
          {/* Merkez Mikro Pırlanta Odak Parıltısı (1.5px net tıklama referansı) */}
          <span className="w-1 h-1 rounded-full bg-white shadow-sm pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
