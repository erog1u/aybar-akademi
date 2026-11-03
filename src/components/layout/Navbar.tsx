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

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
      }
    };
    if (mobileOpen) {
      document.body.classList.add("menu-open");
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.classList.remove("menu-open");
    }
    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileOpen]);

  return (
    <>
      {/* Erişilebilirlik (a11y): Ekran okuyucu ve klavye gezintisi için doğrudan içeriğe atlama bağlantısı */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2.5 focus:bg-cobalt-700 focus:text-white focus:rounded-lg focus:font-bold focus:shadow-2xl focus:ring-2 focus:ring-white focus:outline-none transition-all"
      >
        Ana İçeriğe Atla
      </a>

      {/* Saf bg-white (backdrop-blur yok -> %100 akıcı 120fps kaydırma ve anında tıklama!) */}
      <header className="sticky top-0 z-50 h-16 lg:h-20 bg-white lg:bg-white/95 lg:backdrop-blur-md border-b border-cobalt-900/10 relative">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-6 xl:px-10 h-full flex items-center justify-between gap-2 xl:gap-4">
          {/* Sol: Logo ve Kurumsal İsim */}
          <Link
            href="/"
            prefetch={true}
            className="group min-w-0 shrink-0 focus-visible:ring-2 focus-visible:ring-cobalt-600 focus-visible:outline-none rounded-lg"
          >
            <AybarBrandLockup variant="light" />
          </Link>

          {/* Orta: Masaüstü Navigasyon */}
          <nav
            aria-label="Ana Menü"
            className="hidden lg:flex items-center gap-0.5 xl:gap-1"
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
                  className={`px-2.5 xl:px-3.5 py-2 rounded-lg text-[13px] xl:text-[14.5px] font-bold transition-colors whitespace-nowrap focus-visible:ring-2 focus-visible:ring-cobalt-600 focus-visible:outline-none ${
                    isActive
                      ? "bg-cobalt-700 text-white shadow-sm"
                      : "text-ink hover:text-cobalt-700 hover:bg-cobalt-50"
                  }`}
                >
                  {shortLabel ? (
                    <>
                      <span className="hidden xl:inline">{item.label}</span>
                      <span className="inline xl:hidden">{shortLabel}</span>
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
              className="hidden lg:inline-flex items-center justify-center bg-crimson-600 hover:bg-crimson-700 active:scale-[0.98] text-white px-3 xl:px-4 py-2 xl:py-2.5 rounded-lg text-xs xl:text-sm font-bold transition-all whitespace-nowrap shadow-sm focus-visible:ring-2 focus-visible:ring-crimson-600 focus-visible:outline-none"
            >
              <span className="hidden xl:inline">Ücretsiz Tanışma Seansı</span>
              <span className="inline xl:hidden">Ücretsiz Tanışma</span>
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

      {/* Donanım Hızlandırmalı CSS Mobil Çekmece — JS animasyon gecikmesi yok, %100 anında tepki */}
      <div
        className={`fixed inset-0 z-[89] bg-cobalt-950/60 backdrop-blur-xs transition-opacity duration-300 ease-out touch-none ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
        onTouchMove={(e) => {
          if (mobileOpen) e.preventDefault();
        }}
        aria-hidden="true"
      />

      <aside
        id="mobile-drawer"
        className={`fixed inset-y-0 right-0 z-[90] w-full max-w-[340px] sm:max-w-sm bg-white text-ink border-l border-cobalt-900/10 shadow-2xl flex flex-col justify-between overflow-y-auto overscroll-contain transition-transform duration-300 ease-out will-change-transform transform-gpu ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ WebkitOverflowScrolling: "touch" }}
        aria-label="Mobil Menü Çekmecesi"
      >
        <div>
          <div className="h-16 px-4 sm:px-5 border-b border-cobalt-900/10 flex items-center justify-between gap-2">
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

          <nav
            aria-label="Mobil Menü Linkleri"
            className="p-4 sm:p-5 space-y-1.5"
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
                  className={`flex items-center justify-between py-3.5 px-4 rounded-xl text-base font-bold transition-all touch-manipulation ${
                    isActive
                      ? "bg-cobalt-950 text-white shadow-md border-l-4 border-crimson-600 pl-3.5"
                      : "text-ink hover:bg-cobalt-50 hover:text-cobalt-700"
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

        <div className="p-5 border-t border-cobalt-900/10 bg-paper-warm space-y-2.5 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="w-full min-h-[48px] rounded-xl bg-crimson-600 hover:bg-crimson-700 active:scale-95 text-white py-3.5 px-5 text-[15px] font-bold inline-flex items-center justify-center gap-2 shadow-sm transition-all touch-manipulation"
          >
            <span>WhatsApp ile İletişime Geç</span>
            <ArrowUpRight className="h-4 w-4 shrink-0" />
          </a>
          <a
            href={siteConfig.contact.phoneHref}
            onClick={() => setMobileOpen(false)}
            className="w-full min-h-[48px] rounded-xl bg-white border border-cobalt-900/15 hover:border-cobalt-700 active:scale-95 text-ink py-3.5 px-5 text-[15px] font-bold inline-flex items-center justify-center gap-2 transition-all touch-manipulation"
          >
            <Phone className="h-4 w-4 text-cobalt-700 shrink-0" />
            <span>{siteConfig.contact.phoneDisplay}</span>
          </a>
        </div>
      </aside>
    </>
  );
}
