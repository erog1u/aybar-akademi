"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";
import { siteConfig, getWhatsAppUrl } from "@/config/site";
import { AybarBrandLockup } from "@/components/brand/AybarCrest";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);
  const backdropRef = React.useRef<HTMLDivElement>(null);
  const scrollYRef = React.useRef(0);
  const prevPathRef = React.useRef(pathname);
  const lastScrollY = React.useRef(0);
  const accumulatedUp = React.useRef(0);
  const accumulatedDown = React.useRef(0);

  useEffect(() => {
    setMobileOpen(false);
    setHeaderVisible(true);
    document.documentElement.classList.remove("header-hidden");
    accumulatedUp.current = 0;
    accumulatedDown.current = 0;
  }, [pathname]);

  // Akıllı ve Hassas Kaydırma Yönü Tespiti (Akümülatif Delta ile 120Hz/60Hz Uyumlu):
  // - Aşağı kaydırırken (içerik okunurken) üst çubuk akıcı şekilde gizlenir.
  // - Yukarı doğru en ufak harekette (toplam 6px bile yeterli!) çubuk anında ve HIZLA geri gelir.
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY;

          // 1. Sayfa tepe noktasındayken (ilk 50px) çubuk daima görünür
          if (currentY <= 50) {
            setHeaderVisible(true);
            setHasScrolled(false);
            document.documentElement.classList.remove("header-hidden");
            accumulatedUp.current = 0;
            accumulatedDown.current = 0;
          } else {
            setHasScrolled(true);

            const delta = currentY - lastScrollY.current;

            if (delta < 0) {
              // Yukarı kaydırma (parmak aşağı çekildiğinde)
              accumulatedUp.current += Math.abs(delta);
              accumulatedDown.current = 0;

              // En ufak yukarı kaydırma hareketinde (6px birikince) çubuk ANINDA belirsin!
              if (accumulatedUp.current >= 6) {
                setHeaderVisible(true);
                document.documentElement.classList.remove("header-hidden");
              }
            } else if (delta > 0) {
              // Aşağı kaydırma (içerik okunurken)
              accumulatedDown.current += delta;
              accumulatedUp.current = 0;

              // Kullanıcı bilinçli olarak aşağı kaydırdığında (24px birikince) çubuk gizlensin
              if (accumulatedDown.current >= 24 && currentY > 60) {
                setHeaderVisible(false);
                document.documentElement.classList.add("header-hidden");
              }
            }
          }

          lastScrollY.current = Math.max(0, currentY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.documentElement.classList.remove("header-hidden");
    };
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    // iOS Safari + Chrome kusursuz kaydırma kilidi (Body Scroll Lock):
    // 1. Ekranın mevcut kaydırma pikselini kaydet ve sayfayı dondur
    scrollYRef.current = window.scrollY;
    prevPathRef.current = window.location.pathname;

    document.documentElement.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollYRef.current}px`;
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";

    // 2. Escape tuşu ile menüyü kapat
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    // 3. Arka plan karartmasına dokunulduğunda sayfa kaymasını kesin olarak engelle (non-passive listener)
    const backdropEl = backdropRef.current;
    const preventTouch = (e: TouchEvent) => {
      e.preventDefault();
    };
    if (backdropEl) {
      backdropEl.addEventListener("touchmove", preventTouch, { passive: false });
    }

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";

      // Eğer aynı sayfadaysa eski kaydırma konumuna dön, rota değiştiyse en tepeye git
      if (window.location.pathname === prevPathRef.current) {
        window.scrollTo(0, scrollYRef.current);
      } else {
        window.scrollTo(0, 0);
      }

      window.removeEventListener("keydown", handleKeyDown);
      if (backdropEl) {
        backdropEl.removeEventListener("touchmove", preventTouch);
      }
    };
  }, [mobileOpen]);

  const isHeaderShowing = mobileOpen || headerVisible;

  return (
    <>
      {/* Erişilebilirlik (a11y): Ekran okuyucu ve klavye gezintisi için doğrudan içeriğe atlama bağlantısı */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2.5 focus:bg-cobalt-700 focus:text-white focus:rounded-lg focus:font-bold focus:shadow-2xl focus:ring-2 focus:ring-white focus:outline-none transition-all"
      >
        Ana İçeriğe Atla
      </a>

      {/* Akıllı Akıcı Üst Çubuk (Aşağı kaydırınca gizlenir, yukarı kaydırınca HIZLA geri gelir) */}
      <header
        className={`sticky top-0 z-50 h-16 lg:h-20 bg-white/95 backdrop-blur-md border-b border-cobalt-900/10 transition-transform duration-200 ease-out will-change-transform transform-gpu ${
          isHeaderShowing
            ? "translate-y-0"
            : "-translate-y-full pointer-events-none"
        } ${hasScrolled ? "shadow-md" : "shadow-none"}`}
      >
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-4 xl:px-6 2xl:px-8 h-full flex items-center justify-between gap-2 xl:gap-4">
          {/* Sol: Logo ve Kurumsal İsim */}
          <Link
            href="/"
            prefetch={true}
            className="group min-w-0 shrink-0 focus-visible:ring-2 focus-visible:ring-cobalt-600 focus-visible:outline-none rounded-lg py-1"
          >
            <AybarBrandLockup variant="light" />
          </Link>

          {/* Orta: Masaüstü Navigasyon (Her Ekran Genişliğinde Taşmayan & Ferah Mimari) */}
          <nav
            aria-label="Ana Menü"
            className="hidden lg:flex items-center gap-1 xl:gap-1.5"
          >
            {siteConfig.navigation.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              const compactLabels: Record<string, string> = {
                "/egitim-programlarimiz": "Programlar",
                "/egitim-modelimiz": "Modelimiz",
                "/neden-farkliyiz": "Farkımız",
              };
              const shortLabel = compactLabels[item.href];

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  prefetch={true}
                  className={`px-2.5 xl:px-3 py-1.5 xl:py-2 rounded-lg text-[13px] xl:text-[13.5px] 2xl:text-[14px] font-bold transition-colors whitespace-nowrap focus-visible:ring-2 focus-visible:ring-cobalt-600 focus-visible:outline-none ${
                    isActive
                      ? "bg-cobalt-700 text-white shadow-sm"
                      : "text-ink hover:text-cobalt-700 hover:bg-cobalt-50"
                  }`}
                >
                  {shortLabel ? (
                    <>
                      <span className="hidden 2xl:inline">{item.label}</span>
                      <span className="inline 2xl:hidden">{shortLabel}</span>
                    </>
                  ) : (
                    item.label
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Sağ: CTA & Mobil Menü Butonları (Mobilde de Canlı Kırmızı Tanışma Butonu) */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Masaüstü CTA */}
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center justify-center bg-crimson-600 hover:bg-crimson-700 active:scale-[0.98] text-white px-3.5 xl:px-4 py-2 xl:py-2.5 rounded-lg text-xs xl:text-sm font-bold transition-all whitespace-nowrap shadow-sm focus-visible:ring-2 focus-visible:ring-crimson-600 focus-visible:outline-none"
            >
              <span className="hidden 2xl:inline">Ücretsiz Tanışma Seansı</span>
              <span className="inline 2xl:hidden">Ücretsiz Tanışma</span>
            </a>

            {/* Mobil Hızlı Tanışma Aksiyonu (Mobilde PC ile Eşit Zenginlik) */}
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="lg:hidden h-10 px-3 rounded-lg bg-crimson-600 active:scale-95 text-white text-xs font-bold inline-flex items-center gap-1.5 shadow-crimson"
              aria-label="30 Dk Ücretsiz Tanışma Seansı"
            >
              <span>Tanışma</span>
            </a>

            {/* Mobil Menü Butonu */}
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Menüyü Aç"
              aria-expanded={mobileOpen}
              aria-controls="mobile-drawer"
              className="lg:hidden h-10 px-3 rounded-lg bg-cobalt-950 active:scale-95 text-white text-xs sm:text-sm font-bold inline-flex items-center gap-1.5 transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-cobalt-600 focus-visible:outline-none shadow-sm touch-manipulation"
            >
              <Menu className="h-4 w-4" />
              <span>Menü</span>
            </button>
          </div>
        </div>
      </header>

      {/* 1. Donanım Hızlandırmalı Arka Plan Karartması */}
      <div
        ref={backdropRef}
        className={`fixed inset-0 z-[89] bg-cobalt-950/70 backdrop-blur-xs transition-opacity duration-300 ease-out touch-none ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* 2. Donanım Hızlandırmalı Mobil Menü Paneli (Mobilde Tam Ekran, Tablette Sağdan Açılan Panel) */}
      <aside
        id="mobile-drawer"
        className={`fixed inset-0 sm:inset-y-0 sm:left-auto sm:right-0 sm:w-[380px] sm:max-w-sm z-[90] bg-white text-ink sm:border-l sm:border-cobalt-900/10 shadow-2xl flex flex-col h-full h-dvh transition-transform duration-300 ease-out will-change-transform transform-gpu ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ WebkitOverflowScrolling: "touch" }}
        aria-label="Mobil Menü Çekmecesi"
      >
        {/* A. SABİT TEPE BARI — Asla kaybolmaz, kaydırmadan etkilenmez */}
        <div className="h-16 px-4 sm:px-5 border-b border-cobalt-900/10 flex items-center justify-between gap-2 shrink-0 bg-white z-10">
          <div className="min-w-0">
            <AybarBrandLockup variant="light" />
          </div>
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            aria-label="Menüyü Kapat"
            className="h-11 w-11 rounded-lg bg-paper-warm hover:bg-cobalt-50 active:scale-95 text-ink flex items-center justify-center shrink-0 transition-all cursor-pointer touch-manipulation"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* B. KAYDIRILABİLİR İÇERİK ALANI — Sadece bu alan kayar; başlık ve alt butonlar her an sabittir */}
        <div className="flex-1 overflow-y-auto overscroll-contain p-4 sm:p-5 space-y-2">
          <nav
            aria-label="Mobil Menü Linkleri"
            className="space-y-1.5"
          >
            {siteConfig.navigation.map((item, idx) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  prefetch={true}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center justify-between py-3.5 px-4 rounded-xl text-base font-bold transition-all touch-manipulation active:scale-[0.99] ${
                    isActive
                      ? "bg-cobalt-950 text-white shadow-md border-l-4 border-crimson-600 pl-3.5"
                      : "text-ink hover:bg-cobalt-50 hover:text-cobalt-700 bg-paper/60"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className={`text-xs font-mono font-bold ${isActive ? "text-crimson-400" : "text-ink-subtle"}`}>
                      0{idx + 1}
                    </span>
                    <span>{item.label}</span>
                  </div>
                  <ArrowUpRight
                    className={`h-4 w-4 shrink-0 ${
                      isActive ? "text-crimson-400" : "text-ink-subtle"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>
        </div>

        {/* C. SABİT TABAN BARI — WhatsApp ve Telefon her zaman parmak ucunda */}
        <div className="p-4 sm:p-5 border-t border-cobalt-900/10 bg-paper shrink-0 space-y-2.5 pb-[max(1rem,env(safe-area-inset-bottom))]">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="w-full min-h-[48px] rounded-xl bg-crimson-600 hover:bg-crimson-700 active:scale-95 text-white py-3.5 px-5 text-[15px] font-bold inline-flex items-center justify-center gap-2 shadow-crimson transition-all touch-manipulation"
          >
            <span>WhatsApp ile İletişime Geç</span>
            <ArrowUpRight className="h-4 w-4 shrink-0" />
          </a>
          <a
            href={siteConfig.contact.phoneHref}
            onClick={() => setMobileOpen(false)}
            className="w-full min-h-[48px] rounded-xl bg-white border border-cobalt-900/15 hover:border-cobalt-700 active:scale-95 text-ink py-3.5 px-5 text-[15px] font-bold inline-flex items-center justify-center gap-2 transition-all touch-manipulation shadow-xs"
          >
            <Phone className="h-4 w-4 text-cobalt-700 shrink-0" />
            <span>{siteConfig.contact.phoneDisplay}</span>
          </a>
        </div>
      </aside>
    </>
  );
}
