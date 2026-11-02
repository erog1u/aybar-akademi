"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";
import { siteConfig, getWhatsAppUrl } from "@/config/site";
import { LUXURY_EASE } from "@/components/motion/Primitives";
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
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileOpen]);

  return (
    <>
      {/* Mobilde saf bg-white (backdrop-blur yok -> %100 akıcı 120fps kaydırma!) */}
      <header className="sticky top-0 z-50 h-16 lg:h-20 bg-white lg:bg-white/95 lg:backdrop-blur-md border-b border-cobalt-900/10 relative">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-6 xl:px-10 h-full flex items-center justify-between gap-2 xl:gap-4">
          {/* Left: Brand Lockup */}
          <Link href="/" className="group min-w-0 shrink-0">
            <AybarBrandLockup variant="light" />
          </Link>

          {/* Center: Clean Desktop Navigation with Sliding Active Pill */}
          <nav
            aria-label="Ana Menü"
            className="hidden lg:flex items-center gap-0.5 xl:gap-1"
          >
            {siteConfig.navigation.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              // 1024px-1280px arasında sığması için kısaltılmış etiketler
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
                  className={`relative px-2 xl:px-3.5 py-2 rounded-lg text-[13px] xl:text-[14.5px] font-semibold transition-colors whitespace-nowrap ${
                    isActive
                      ? "text-white"
                      : "text-ink hover:text-cobalt-700 hover:bg-cobalt-50"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="desktop-nav-active"
                      transition={{ duration: 0.28, ease: LUXURY_EASE }}
                      className="absolute inset-0 rounded-lg bg-cobalt-700 shadow-sm -z-10"
                    />
                  )}
                  <span className="relative z-10">
                    {shortLabel ? (
                      <>
                        <span className="hidden xl:inline">{item.label}</span>
                        <span className="inline xl:hidden">{shortLabel}</span>
                      </>
                    ) : (
                      item.label
                    )}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Right: Desktop CTA & Mobile Menu Trigger */}
          <div className="flex items-center shrink-0">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center justify-center bg-crimson-600 hover:bg-crimson-700 active:scale-[0.98] text-white px-3 xl:px-4 py-2 xl:py-2.5 rounded-lg text-xs xl:text-sm font-bold transition-all whitespace-nowrap shadow-sm"
            >
              <span className="hidden xl:inline">Ücretsiz Tanışma Seansı</span>
              <span className="inline xl:hidden">Ücretsiz Tanışma</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Menüyü Aç"
              aria-expanded={mobileOpen}
              className="lg:hidden h-11 px-4 rounded-lg bg-cobalt-900 active:scale-95 text-white text-sm font-bold inline-flex items-center gap-2 transition-transform"
            >
              <Menu className="h-4 w-4" />
              <span>Menü</span>
            </button>
          </div>
        </div>
      </header>

      {/* Clean Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-[89] bg-cobalt-950/55"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.26, ease: LUXURY_EASE }}
              className="fixed top-0 right-0 bottom-0 z-[90] w-full max-w-sm bg-white text-ink border-l border-cobalt-900/10 shadow-2xl flex flex-col justify-between overflow-y-auto will-change-transform"
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
                    className="h-11 w-11 rounded-lg bg-paper-warm hover:bg-cobalt-50 text-ink flex items-center justify-center shrink-0 transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <nav
                  aria-label="Mobil Menü"
                  className="p-4 sm:p-5 space-y-1.5"
                >
                  {siteConfig.navigation.map((item) => {
                    const isActive =
                      item.href === "/"
                        ? pathname === "/"
                        : pathname.startsWith(item.href);

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`flex items-center justify-between py-3.5 px-4 rounded-xl text-base font-bold transition-colors ${
                          isActive
                            ? "bg-cobalt-700 text-white shadow-sm"
                            : "text-ink hover:bg-cobalt-50 hover:text-cobalt-700"
                        }`}
                      >
                        <span>{item.label}</span>
                        <ArrowUpRight
                          className={`h-4 w-4 shrink-0 ${
                            isActive ? "text-white/90" : "text-ink-subtle"
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
                  className="w-full min-h-[48px] rounded-xl bg-crimson-600 hover:bg-crimson-700 text-white py-3.5 px-5 text-[15px] font-bold inline-flex items-center justify-center gap-2 shadow-sm transition-colors"
                >
                  <span>WhatsApp ile İletişime Geç</span>
                  <ArrowUpRight className="h-4 w-4 shrink-0" />
                </a>
                <a
                  href={siteConfig.contact.phoneHref}
                  className="w-full min-h-[48px] rounded-xl bg-white border border-cobalt-900/15 hover:border-cobalt-700 text-ink py-3.5 px-5 text-[15px] font-bold inline-flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="h-4 w-4 text-cobalt-700 shrink-0" />
                  <span>{siteConfig.contact.phoneDisplay}</span>
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
