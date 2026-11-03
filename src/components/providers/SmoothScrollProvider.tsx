"use client";

import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

/**
 * AYBAR AKADEMİ — Ultra Akışkan ve Pürüzsüz Donanım Kaydırma (Smooth Scroll)
 * --------------------------------------------------------------------------
 * Hem bilgisayarda (fare tekerleği & trackpad) hem de akıllı telefonlarda (iOS & Android)
 * ödüllü Awwwards / Apple siteleri kalitesinde ataletli, ipeksi ve kesintisiz
 * kaydırma deneyimi sunar.
 *
 * Global Anchor Click Interceptor:
 * Sayfa içindeki tüm `#hash` bağlantılarına veya hedef linklere tıklandığında
 * ani ışınlanma yerine ipeksi, ataletli ve zarif bir Lenis kaydırması sağlar.
 */
export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Simülatör stüdyo sayfasında iç içe scroll oluşmaması için pasif bırak
    if (pathname === "/onizleme" || pathname?.startsWith("/onizleme/")) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      syncTouch: true, // Telefonda ve dokunmatik cihazlarda pürüzsüz akışkan ivmelenme
      syncTouchLerp: 0.08,
      touchMultiplier: 1.15,
      wheelMultiplier: 1,
      autoResize: true,
    });

    lenisRef.current = lenis;

    // Donanım 120Hz/60Hz RAF Döngüsü
    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Menü açılıp kapandığında scroll kilitleme için pencereye bağla
    window.__lenis = lenis;

    // --------------------------------------------------------------------------
    // GLOBAL ANCHOR CLICK INTERCEPTOR
    // Sitede tıklanan her #hash ve sayfa içi hedef linki ipeksi bir şekilde kaydırır
    // --------------------------------------------------------------------------
    const handleAnchorClick = (e: MouseEvent) => {
      // Değiştirici tuşlar (cmd, ctrl, shift, alt) veya sağ tık ile açılan sekmeleri engelleme
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
        return;
      }

      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      let targetHash: string | null = null;

      if (href.startsWith("#")) {
        targetHash = href;
      } else {
        try {
          const url = new URL(href, window.location.href);
          if (
            url.origin === window.location.origin &&
            url.pathname === window.location.pathname &&
            url.hash
          ) {
            targetHash = url.hash;
          }
        } catch {
          // Geçersiz URL durumunda varsayılan tarayıcı akışına bırak
        }
      }

      if (!targetHash || targetHash === "#") {
        if (targetHash === "#") {
          e.preventDefault();
          lenis.scrollTo(0, { offset: 0, duration: 1.25 });
        }
        return;
      }

      // Hash id ve seçici çözümleme (Türkçe karakter veya URI kodlamalarını destekler)
      const cleanId = decodeURIComponent(targetHash.replace(/^#/, ""));
      const targetElement =
        document.getElementById(cleanId) ||
        document.querySelector(targetHash);

      if (targetElement) {
        e.preventDefault();
        lenis.scrollTo(targetElement as HTMLElement, {
          offset: -85,
          duration: 1.25,
        });

        // URL çubuğunu ışınlanma yapmadan güncelle
        if (window.history.pushState) {
          window.history.pushState(null, "", targetHash);
        }
      }
    };

    document.addEventListener("click", handleAnchorClick, { capture: true });

    // Sayfa doğrudan bir #hash ile açıldıysa yumuşakça kaydır
    if (window.location.hash) {
      const initialCleanId = decodeURIComponent(window.location.hash.replace(/^#/, ""));
      const initialTarget =
        document.getElementById(initialCleanId) ||
        document.querySelector(window.location.hash);

      if (initialTarget) {
        setTimeout(() => {
          lenis.scrollTo(initialTarget as HTMLElement, {
            offset: -85,
            duration: 1.25,
          });
        }, 180);
      }
    }

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", handleAnchorClick, { capture: true });
      lenis.destroy();
      lenisRef.current = null;
      delete window.__lenis;
    };
  }, [pathname]);

  // Rota değişimlerinde eğer hash yoksa en üste konumlan, hash varsa hedefe kaydır
  useEffect(() => {
    if (!lenisRef.current) return;

    if (window.location.hash) {
      const cleanId = decodeURIComponent(window.location.hash.replace(/^#/, ""));
      const targetElement =
        document.getElementById(cleanId) ||
        document.querySelector(window.location.hash);

      if (targetElement) {
        const timer = setTimeout(() => {
          lenisRef.current?.scrollTo(targetElement as HTMLElement, {
            offset: -85,
            duration: 1.25,
          });
        }, 120);
        return () => clearTimeout(timer);
      }
    }

    lenisRef.current.scrollTo(0, { immediate: true });
  }, [pathname]);

  return <>{children}</>;
}
