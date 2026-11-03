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
  const isNavigatingRef = React.useRef(false);
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

    // iOS Safari + Android Chrome body scroll lock:
    // Ekranın mevcut kaydırma pikselini kaydet ve sayfayı dondur
    scrollYRef.current = window.scrollY;
    prevPathRef.current = window.location.pathname;

    document.documentElement.style.overflow = "hidden";
    document.body.classList.add("menu-open");
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollYRef.current}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";

    // 3. Escape tuşu ile menüyü kapat
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    // 4. Ekran masaüstü boyutuna genişlerse menüyü otomatik kapat
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);

    // 5. Arka plan karartmasına dokunulduğunda sayfa kaymasını kesin olarak engelle (non-passive listener)
    const backdropEl = backdropRef.current;
    const preventTouch = (e: TouchEvent) => {
      e.preventDefault();
    };
    if (backdropEl) {
      backdropEl.addEventListener("touchmove", preventTouch, { passive: false });
    }

    return () => {
      document.body.classList.remove("menu-open");
      document.documentElement.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      document.body.style.overflow = "";

      // Eğer menü içinden başka bir sayfaya geçildiyse tepeye sıfırla, aynı sayfada kapatıldıysa eski konumu koru
      const isRouteChanged =
        isNavigatingRef.current || window.location.pathname !== prevPathRef.current;

      if (isRouteChanged) {
        window.scrollTo(0, 0);
        isNavigatingRef.current = false;
      } else {
        window.scrollTo(0, scrollYRef.current);
      }

      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
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
        <div className="max-w-[1380px] mx-auto px-3 sm:px-6 lg:px-4 xl:px-6 2xl:px-8 h-full flex items-center justify-between gap-1.5 sm:gap-2 xl:gap-4">
          {/* Sol: Logo ve Kurumsal İsim */}
          <Link
            href="/"
            prefetch={true}
            className="group min-w-0 shrink focus-visible:ring-2 focus-visible:ring-cobalt-600 focus-visible:outline-none rounded-lg py-1"
          >
            <AybarBrandLockup variant="light" compactOnMobile={true} />
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

          {/* Sağ: CTA & Mobil Menü Butonları (Mobilde Tam Oturan, Sıfır Taşmalı Mimari) */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
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

            {/* Mobil Hızlı Tanışma Aksiyonu */}
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="lg:hidden min-h-[38px] px-2.5 sm:px-3 rounded-lg bg-crimson-600 active:scale-95 text-white text-xs font-bold inline-flex items-center justify-center gap-1 shadow-sm touch-manipulation whitespace-nowrap shrink-0"
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
              className="lg:hidden min-h-[38px] px-2.5 sm:px-3 rounded-lg bg-cobalt-950 active:scale-95 text-white text-xs font-bold inline-flex items-center justify-center gap-1.5 transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-cobalt-600 focus-visible:outline-none shadow-sm touch-manipulation whitespace-nowrap shrink-0"
            >
              <Menu className="h-4 w-4 shrink-0" />
              <span>Menü</span>
            </button>
          </div>
        </div>
      </header>

      {/* 1. Donanım Hızlandırmalı Arka Plan Karartması (60-120 FPS Blur Overlay) */}
      <div
        ref={backdropRef}
        className={`fixed inset-0 z-[89] bg-cobalt-950/65 transition-opacity duration-300 ease-out touch-none will-change-[opacity] ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          transform: "translateZ(0)",
        }}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* 2. Donanım Hızlandırmalı Mobil Menü Paneli (Mobilde Tam Ekran, Tablette Sağdan Açılan Panel) */}
      <aside
        id="mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-hidden={!mobileOpen}
        aria-label="Mobil Menü Çekmecesi"
        className={`fixed inset-0 sm:inset-y-0 sm:left-auto sm:right-0 sm:w-[380px] sm:max-w-sm z-[90] bg-white text-ink sm:border-l sm:border-cobalt-900/10 shadow-2xl flex flex-col h-full h-dvh transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform transform-gpu ${
          mobileOpen ? "translate-x-0" : "translate-x-full pointer-events-none"
        }`}
        style={{
          WebkitOverflowScrolling: "touch",
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
        }}
      >
        {/* A. SABİT TEPE BARI — Asla kaybolmaz, kaydırmadan etkilenmez */}
        <div
          className="h-16 px-4 sm:px-5 border-b border-cobalt-900/10 flex items-center justify-between gap-2 shrink-0 bg-white/95 backdrop-blur-md z-10"
          style={{
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
          }}
        >
          <Link
            href="/"
            prefetch={true}
            onClick={() => {
              if (pathname !== "/") {
                isNavigatingRef.current = true;
              }
              setMobileOpen(false);
            }}
            className="min-w-0 focus-visible:ring-2 focus-visible:ring-cobalt-600 focus-visible:outline-none rounded-lg"
            aria-label="Aybar Akademi Ana Sayfa"
          >
            <AybarBrandLockup variant="light" compactOnMobile={true} />
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            aria-label="Menüyü Kapat"
            className="h-11 w-11 min-h-[44px] min-w-[44px] rounded-lg bg-paper-warm hover:bg-cobalt-50 active:scale-95 text-ink flex items-center justify-center shrink-0 transition-all cursor-pointer touch-manipulation focus-visible:ring-2 focus-visible:ring-cobalt-600 focus-visible:outline-none"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* B. KAYDIRILABİLİR İÇERİK ALANI — Sadece bu alan kayar; başlık ve alt butonlar her an sabittir */}
        <div
          className="flex-1 overflow-y-auto overscroll-contain p-4 sm:p-5 space-y-2"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
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
                  onClick={() => {
                    if (item.href !== pathname) {
                      isNavigatingRef.current = true;
                    }
                    setMobileOpen(false);
                  }}
                  className={`flex items-center justify-between py-3.5 px-4 min-h-[50px] rounded-xl text-base font-bold transition-all touch-manipulation active:scale-[0.98] ${
                    isActive
                      ? "bg-cobalt-950 text-white shadow-md border-l-4 border-crimson-600 pl-3.5"
                      : "text-ink hover:bg-cobalt-50 hover:text-cobalt-700 bg-paper/60 active:bg-cobalt-100"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`text-xs font-mono font-bold ${
                        isActive ? "text-crimson-400" : "text-ink-subtle"
                      }`}
                    >
                      0{idx + 1}
                    </span>
                    <span>{item.label}</span>
                  </div>
                  <ArrowUpRight
                    className={`h-4 w-4 shrink-0 transition-transform ${
                      isActive ? "text-crimson-400" : "text-ink-subtle"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>
        </div>

        {/* C. SABİT TABAN BARI — Başparmak Erişim Bölgesi (Thumb Zone): WhatsApp ve Telefon Tek Elle Zahmetsizce Erişilebilir */}
        <div
          className="p-4 sm:p-5 border-t border-cobalt-900/10 bg-paper/95 backdrop-blur-md shrink-0 space-y-2.5 shadow-lg z-10"
          style={{
            paddingBottom: "max(1.25rem, calc(1rem + env(safe-area-inset-bottom, 0px)))",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
          }}
        >
          {/* WhatsApp Aksiyonu */}
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="w-full min-h-[50px] rounded-xl bg-crimson-600 hover:bg-crimson-700 active:scale-[0.98] text-white py-3.5 px-5 text-[15px] font-bold inline-flex items-center justify-center gap-2.5 shadow-crimson transition-all touch-manipulation select-none"
            aria-label="WhatsApp ile 30 Dakikalık Ücretsiz Tanışma Seansı Başlat"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 fill-current shrink-0"
              aria-hidden="true"
            >
              <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.15 1.6 5.95L0 24l6.33-1.66a11.87 11.87 0 0 0 5.73 1.46h.01c6.55 0 11.89-5.34 11.89-11.9 0-3.18-1.24-6.17-3.44-8.42ZM12.07 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.76.98 1-3.66-.24-.38a9.85 9.85 0 0 1-1.51-5.25c0-5.45 4.44-9.89 9.9-9.89 2.64 0 5.13 1.03 7 2.9a9.83 9.83 0 0 1 2.9 7c0 5.45-4.44 9.89-9.89 9.89Zm5.43-7.41c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.65.08-.3-.15-1.25-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35Z" />
            </svg>
            <span>WhatsApp ile İletişime Geç</span>
            <ArrowUpRight className="h-4 w-4 shrink-0 opacity-80" />
          </a>

          {/* Telefonla Doğrudan Arama Aksiyonu */}
          <a
            href={siteConfig.contact.phoneHref}
            onClick={() => setMobileOpen(false)}
            className="w-full min-h-[50px] rounded-xl bg-white border border-cobalt-900/15 hover:border-cobalt-700 active:scale-[0.98] text-ink py-3.5 px-5 text-[15px] font-bold inline-flex items-center justify-center gap-2.5 transition-all touch-manipulation shadow-xs select-none"
            aria-label={`Telefonla Hemen Ara: ${siteConfig.contact.phoneDisplay}`}
          >
            <div className="h-7 w-7 rounded-lg bg-cobalt-50 text-cobalt-700 flex items-center justify-center shrink-0">
              <Phone className="h-4 w-4" />
            </div>
            <span className="text-cobalt-950">Hemen Ara: {siteConfig.contact.phoneDisplay}</span>
          </a>
        </div>
      </aside>
    </>
  );
}
