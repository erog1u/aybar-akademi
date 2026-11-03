"use client";

import React, { useEffect, useRef, useState } from "react";

/**
 * AYBAR AKADEMİ — Belirgin & Prestijli Lüks İmleç (Signature Magnetic Cursor)
 * --------------------------------------------------------------------------
 * - Hem açık (beyaz) hem de koyu (kobalt) zeminlerde %100 belirgin (mix-blend-mode: difference).
 * - Merkezde sıfır gecikmeli (0ms) keskin hassas nokta (tıklama hissi kusursuz).
 * - Arkasında akıcı lerp fizik motoruyla süzülen 34px belirgin halka.
 * - Buton ve bağlantıların üzerine gelindiğinde zarifçe 54px'e genişler (Hover State).
 * - Tıklamada (active) anında elastik olarak toparlanır ve geri bildirim verir.
 * - Dokunmatik ekranlarda ve mobil cihazlarda kesinlikle gizlenir.
 */
export default function LuxuryCursor() {
  const [enabled, setEnabled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isText, setIsText] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const mouseX = useRef(-100);
  const mouseY = useRef(-100);
  const ringX = useRef(-100);
  const ringY = useRef(-100);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Yalnızca masaüstü / hassas fare işaretçisine sahip cihazlarda aktifleştir
    const isFinePointer = window.matchMedia(
      "(pointer: fine) and (hover: hover)"
    ).matches;

    if (!isFinePointer) return;

    setEnabled(true);

    const onMouseMove = (e: MouseEvent) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;

      if (!isVisible) {
        setIsVisible(true);
        ringX.current = e.clientX;
        ringY.current = e.clientY;
      }

      // Merkez noktayı sıfır gecikmeyle anında taşı
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      // Hedef öğenin interaktif olup olmadığını kontrol et
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isInteractive = Boolean(
        target.closest(
          "a, button, [role='button'], input, textarea, select, .cursor-pointer, [data-cursor-hover]"
        )
      );

      const isInput = Boolean(
        target.closest("input, textarea, [contenteditable='true']")
      );

      setIsHovered(isInteractive && !isInput);
      setIsText(isInput);
    };

    const onMouseDown = () => setIsActive(true);
    const onMouseUp = () => setIsActive(false);

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    // 120Hz / 60Hz Pürüzsüz Donanım Takip Döngüsü (Lerp)
    let rafId: number;
    const render = () => {
      // Halka için çevik ve akışkan lerp katsayısı (0.28: Ne hantal kalır ne de yapay titrer)
      ringX.current += (mouseX.current - ringX.current) * 0.28;
      ringY.current += (mouseY.current - ringY.current) * 0.28;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX.current}px, ${ringY.current}px, 0)`;
      }

      rafId = requestAnimationFrame(render);
    };
    rafId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [isVisible]);

  if (!enabled) return null;

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-[9999] transition-opacity duration-300 ${
        isVisible && !isText ? "opacity-100" : "opacity-0"
      }`}
      style={{ mixBlendMode: "difference" }}
      aria-hidden="true"
    >
      {/* 1. Merkez Keskin Odak Noktası (0ms anlık tepki) */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white will-change-transform pointer-events-none"
        style={{
          width: isHovered ? "4px" : "6px",
          height: isHovered ? "4px" : "6px",
          transition: "width 0.2s ease, height 0.2s ease",
        }}
      />

      {/* 2. Belirgin Lüks Takip Halkası (Aura) */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white will-change-transform pointer-events-none flex items-center justify-center transition-all duration-200 ease-out"
        style={{
          width: isHovered ? "52px" : "32px",
          height: isHovered ? "52px" : "32px",
          backgroundColor: isHovered ? "rgba(255, 255, 255, 0.15)" : "transparent",
          transform: `translate3d(${ringX.current}px, ${ringY.current}px, 0) scale(${
            isActive ? 0.75 : isHovered ? 1.08 : 1
          })`,
          boxShadow: isHovered
            ? "0 0 20px rgba(255, 255, 255, 0.4)"
            : "0 0 10px rgba(255, 255, 255, 0.2)",
        }}
      />
    </div>
  );
}
