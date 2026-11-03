"use client";

import React, { useEffect, useRef, useState } from "react";

/**
 * AYBAR AKADEMİ — Özel Lüks İnteraktif Fare İmleci (Smooth Interactive Cursor)
 * --------------------------------------------------------------------------
 * - Merkezde hassas kırmızı nokta (bg-crimson-600)
 * - Arkasından akışkan lerp/fizik ile süzülen prestijli kobalt halka (border-cobalt-600/50)
 * - Link ve butonlarda (hover) zarifçe genişler (scale-150, yarı saydam kırmızı/kobalt parıltı)
 * - Tıklamada (active) hafifçe içeriye doğru elastik küçülür
 * - Yalnızca masaüstü hassas işaretçilerde (pointer: fine) aktiftir;
 *   dokunmatik ekranlarda ve mobilde (@media (pointer: coarse)) kesinlikle devre dışıdır.
 */
export default function SmoothCursor() {
  const [enabled, setEnabled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isTextInput, setIsTextInput] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  // Koordinat ve fizik değişkenleri (React re-render döngüsünü tetiklemeden 120Hz/60Hz RAF ile işlenir)
  const targetX = useRef(-100);
  const targetY = useRef(-100);
  const ringX = useRef(-100);
  const ringY = useRef(-100);
  const hasMoved = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Yalnızca masaüstü fare / trackpad kullanıcılarında aktifleştir
    const checkPointerSupport = () => {
      const hasFinePointer = window.matchMedia("(pointer: fine) and (hover: hover)").matches;
      const isCoarse = window.matchMedia("(pointer: coarse)").matches;
      return hasFinePointer && !isCoarse;
    };

    if (!checkPointerSupport()) {
      return;
    }

    setEnabled(true);

    // Medya sorgusu değişikliklerini dinle (Örn: harici ekran takılması, geliştirici araçları simülasyonu)
    const mqlFine = window.matchMedia("(pointer: fine) and (hover: hover)");
    const mqlCoarse = window.matchMedia("(pointer: coarse)");
    const handleMediaChange = () => {
      setEnabled(checkPointerSupport());
    };

    mqlFine.addEventListener?.("change", handleMediaChange);
    mqlCoarse.addEventListener?.("change", handleMediaChange);

    return () => {
      mqlFine.removeEventListener?.("change", handleMediaChange);
      mqlCoarse.removeEventListener?.("change", handleMediaChange);
      document.body.classList.remove("has-smooth-cursor");
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    // Masaüstünde varsayılan imleci gizle (metin alanları hariç)
    if (!isTextInput && isVisible) {
      document.body.classList.add("has-smooth-cursor");
    } else {
      document.body.classList.remove("has-smooth-cursor");
    }

    return () => {
      document.body.classList.remove("has-smooth-cursor");
    };
  }, [enabled, isTextInput, isVisible]);

  useEffect(() => {
    if (!enabled) return;

    // Mouse Hareketi Takibi
    const handleMouseMove = (e: MouseEvent) => {
      targetX.current = e.clientX;
      targetY.current = e.clientY;

      if (!hasMoved.current) {
        hasMoved.current = true;
        ringX.current = e.clientX;
        ringY.current = e.clientY;
        setIsVisible(true);
      }

      // Etkileşimli element tespiti (Link, Buton, Menü öğeleri)
      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = Boolean(
          target.closest(
            'a, button, [role="button"], [role="link"], input[type="submit"], input[type="button"], select, summary, .cursor-pointer, [data-cursor-hover]'
          )
        );
        setIsHovered(isInteractive);

        const isText = Boolean(
          target.closest(
            'input[type="text"], input[type="email"], input[type="tel"], input[type="password"], input[type="search"], input[type="number"], textarea, [contenteditable="true"]'
          )
        );
        setIsTextInput(isText);
      }
    };

    // Tıklama Durumu
    const handleMouseDown = (e: MouseEvent) => {
      if (e.button === 0) {
        setIsActive(true);
      }
    };

    const handleMouseUp = () => {
      setIsActive(false);
    };

    // Pencere Terk / Giriş Durumu
    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleWindowBlur = () => {
      setIsVisible(false);
    };

    const handleWindowFocus = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown, { passive: true });
    window.addEventListener("mouseup", handleMouseUp, { passive: true });
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("blur", handleWindowBlur);
    window.addEventListener("focus", handleWindowFocus);

    // 120Hz/60Hz Donanım Lerp Fizik Döngüsü (Akıcı Süzülme)
    let rafId: number;
    const lerpFactor = 0.16; // İpeksi ve ataletli takip katsayısı

    const render = () => {
      // Halka takibi için doğrusal interpolasyon (Lerp)
      ringX.current += (targetX.current - ringX.current) * lerpFactor;
      ringY.current += (targetY.current - ringY.current) * lerpFactor;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX.current}px, ${ringY.current}px, 0)`;
      }

      // Merkez kırmızı nokta anlık tepki verir
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${targetX.current}px, ${targetY.current}px, 0)`;
      }

      rafId = requestAnimationFrame(render);
    };

    rafId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("blur", handleWindowBlur);
      window.removeEventListener("focus", handleWindowFocus);
    };
  }, [enabled]);

  // Cihaz mobil veya dokunmatik ise hiçbir DOM öğesi oluşturma
  if (!enabled) return null;

  // Görünürlük ve opaklık kuralları
  const showElements = isVisible && !isTextInput;

  // Halka ölçekleme ve görsel stil varyasyonları
  let ringScaleClass = "scale-100";
  if (isHovered && isActive) {
    ringScaleClass = "scale-125";
  } else if (isHovered) {
    ringScaleClass = "scale-150";
  } else if (isActive) {
    ringScaleClass = "scale-80";
  }

  // Nokta ölçekleme
  let dotScaleClass = "scale-100";
  if (isActive) {
    dotScaleClass = "scale-125";
  } else if (isHovered) {
    dotScaleClass = "scale-75";
  }

  return (
    <aside
      aria-hidden="true"
      className="smooth-cursor-root pointer-events-none fixed inset-0 z-[99999] overflow-hidden select-none"
    >
      {/* 1. SÜZÜLEN KOBALT / KIRMIZI HALKA (Trailing Fluid Ring) */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 will-change-transform"
        style={{ transform: "translate3d(-100px, -100px, 0)" }}
      >
        <div
          className={`absolute -top-[18px] -left-[18px] w-9 h-9 rounded-full origin-center transition-[transform,background-color,border-color,box-shadow,opacity] duration-200 ease-out ${
            showElements ? "opacity-100" : "opacity-0"
          } ${ringScaleClass} ${
            isHovered
              ? "border border-crimson-500/80 bg-crimson-500/15 shadow-[0_0_22px_rgba(220,27,46,0.35)] backdrop-blur-[0.5px]"
              : "border border-cobalt-600/50 bg-cobalt-600/5 shadow-[0_0_12px_rgba(15,83,214,0.18)]"
          }`}
        />
      </div>

      {/* 2. MERKEZ ZARİF KIRMIZI NOKTA (Direct Center Dot) */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 will-change-transform"
        style={{ transform: "translate3d(-100px, -100px, 0)" }}
      >
        <div
          className={`absolute -top-1 -left-1 w-2 h-2 rounded-full origin-center transition-[transform,opacity] duration-150 ease-out bg-crimson-600 shadow-[0_0_8px_rgba(220,27,46,0.85)] ${
            showElements ? "opacity-100" : "opacity-0"
          } ${dotScaleClass}`}
        />
      </div>
    </aside>
  );
}
