"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X, Phone, ArrowUpRight, Sparkles } from "lucide-react";
import { siteConfig, getWhatsAppUrl } from "@/config/site";
import { LUXURY_EASE } from "@/components/motion/Primitives";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 32,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top Institutional Micro-Ledger Bar */}
      <div className="bg-cobalt-950 text-white border-b border-white/10 text-[11px]">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 h-9 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 overflow-hidden">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-crimson-600 text-white font-mono text-[10px] font-semibold tracking-[0.14em] shrink-0">
              %100 UYUMLU
            </span>
            <span className="font-mono tracking-[0.12em] text-cobalt-100 truncate">
              TÜRKİYE YÜZYILI YENİ NESİL MAARİF MODELİ · 33 YILLIK AKADEMİK DENEYİM
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6 shrink-0 font-mono tracking-[0.1em] text-cobalt-200">
            <span>İSTANBUL 39 İLÇE YÜZ YÜZE</span>
            <span className="text-crimson-500">·</span>
            <span>81 İL CANLI ONLINE</span>
            <a
              href={siteConfig.contact.phoneHref}
              className="inline-flex items-center gap-1.5 text-white hover:text-crimson-500 transition-colors pl-3 border-l border-white/15"
            >
              <Phone className="h-3 w-3 text-crimson-500" />
              <span>{siteConfig.contact.phoneDisplay}</span>
            </a>
            <Link
              href="/onizleme"
              className="hidden lg:inline-flex items-center gap-1 text-[10px] px-2 py-0.5 border border-white/20 text-cobalt-200 hover:bg-white hover:text-cobalt-950 transition-colors"
            >
              <span>CİHAZ ÖNİZLEME</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Sticky Architectural Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 border-b ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl border-cobalt-900/12 shadow-sm"
            : "bg-paper/95 backdrop-blur-md border-cobalt-900/10"
        }`}
      >
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 h-20 flex items-center justify-between gap-6">
          {/* Brand Crest & Editorial Lockup */}
          <Link href="/" className="group flex items-center gap-3.5 shrink-0">
            <div className="relative h-12 w-12 sm:h-13 sm:w-13 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <img
                src={siteConfig.logos.emblem}
                alt={siteConfig.name}
                className="h-12 w-12 object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg sm:text-[1.22rem] tracking-tight text-cobalt-900 leading-none">
                {siteConfig.name}
              </span>
              <span className="font-mono text-[10px] tracking-[0.15em] text-ink-muted mt-1.5">
                EĞİTİM · YAYINCILIK · DANIŞMANLIK
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Rail */}
          <nav className="hidden xl:flex items-center border border-cobalt-900/10 bg-paper-warm/70 p-1">
            {siteConfig.navigation.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 text-[13px] font-semibold tracking-tight transition-colors ${
                    isActive
                      ? "text-white"
                      : "text-ink-muted hover:text-cobalt-800"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-nav-indicator"
                      className="absolute inset-0 bg-cobalt-700"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 32,
                      }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-crimson-500" />
                    )}
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Right Action Cluster */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 bg-crimson-600 hover:bg-cobalt-900 text-white px-5 py-3 text-xs font-bold tracking-[0.04em] transition-colors duration-300"
            >
              <span>30 DK ÜCRETSİZ TANIŞMA</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Menüyü Aç"
              className="xl:hidden inline-flex items-center justify-center h-11 w-11 border border-cobalt-900/15 text-cobalt-900 hover:bg-cobalt-50 transition-colors"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile Hamburger Only */}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Menüyü Aç"
            className="sm:hidden inline-flex items-center justify-center h-11 w-11 border border-cobalt-900/15 text-cobalt-900"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>

        {/* Live Scroll Progress Razor Line */}
        <motion.div
          style={{ scaleX }}
          className="origin-left h-[2px] bg-crimson-600 w-full"
        />
      </header>

      {/* Mobile Full-Height Architectural Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-[70] bg-cobalt-950/60 backdrop-blur-sm"
            />
            <motion.aside
              data-lenis-prevent
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease: LUXURY_EASE }}
              className="fixed top-0 right-0 bottom-0 z-[80] w-full max-w-md bg-cobalt-950 text-white border-l border-white/15 flex flex-col justify-between overflow-y-auto"
            >
              <div>
                <div className="p-6 border-b border-white/12 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={siteConfig.logos.emblem}
                      alt={siteConfig.name}
                      className="h-11 w-11 object-contain"
                    />
                    <div>
                      <div className="font-serif font-bold text-base text-white">
                        {siteConfig.name}
                      </div>
                      <div className="font-mono text-[10px] tracking-[0.14em] text-cobalt-200">
                        VIP BİREBİR EĞİTİM
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setMobileOpen(false)}
                    aria-label="Menüyü Kapat"
                    className="h-10 w-10 border border-white/20 flex items-center justify-center text-white hover:bg-white/10"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <nav className="divide-y divide-white/10 border-b border-white/10">
                  {siteConfig.navigation.map((item, idx) => {
                    const isActive =
                      item.href === "/"
                        ? pathname === "/"
                        : pathname.startsWith(item.href);

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`flex items-center justify-between px-6 py-4.5 transition-colors ${
                          isActive
                            ? "bg-cobalt-700 text-white"
                            : "text-cobalt-100 hover:bg-white/5"
                        }`}
                      >
                        <div className="flex items-center gap-4 py-1">
                          <span className="font-mono text-xs text-crimson-500">
                            0{idx + 1}
                          </span>
                          <span className="text-lg font-bold tracking-tight">
                            {item.label}
                          </span>
                        </div>
                        <ArrowUpRight className="h-4 w-4 opacity-70" />
                      </Link>
                    );
                  })}
                </nav>
              </div>

              <div className="p-6 space-y-4 bg-cobalt-900/60">
                <div className="font-mono text-[11px] tracking-[0.15em] text-cobalt-200">
                  ÜCRETSİZ KEŞİF SEANSI & İLETİŞİM
                </div>
                <p className="text-sm text-cobalt-100/85 leading-relaxed">
                  İlk derse başlamadan önce 30 dakikalık ücretsiz tanışma ve
                  öğrenme stili analizi için hemen ulaşın.
                </p>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-crimson-600 hover:bg-crimson-700 text-white py-3.5 px-5 text-sm font-bold"
                >
                  <span>WhatsApp ile Bilgi Alın</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href={siteConfig.contact.phoneHref}
                  className="w-full inline-flex items-center justify-center gap-2 border border-white/20 text-white py-3 px-5 font-mono text-xs"
                >
                  <Phone className="h-3.5 w-3.5 text-crimson-500" />
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
