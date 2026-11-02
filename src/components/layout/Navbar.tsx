"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";
import { siteConfig, getWhatsAppUrl } from "@/config/site";
import { LUXURY_EASE } from "@/components/motion/Primitives";
import { AybarBrandLockup } from "@/components/brand/AybarCrest";

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
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-cobalt-950 text-white border-b border-white/10 text-xs">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 h-9 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 overflow-hidden">
            <span className="px-2 py-0.5 bg-crimson-600 text-white text-[10px] font-bold tracking-wider shrink-0">
              %100 UYUMLU
            </span>
            <span className="text-[11px] sm:text-xs font-medium text-cobalt-100 truncate">
              Yeni Nesil Maarif Modeli · 33 Yıllık Eğitim Deneyimi
            </span>
          </div>

          <div className="hidden md:flex items-center gap-5 shrink-0 text-[11px] text-cobalt-200 font-medium">
            <span>İstanbul 39 İlçe Yüz Yüze</span>
            <span className="text-crimson-500">·</span>
            <span>Tüm Türkiye Online</span>
            <a
              href={siteConfig.contact.phoneHref}
              className="inline-flex items-center gap-1.5 text-white font-semibold hover:text-crimson-500 transition-colors pl-4 border-l border-white/15"
            >
              <Phone className="h-3.5 w-3.5 text-crimson-500" />
              <span>{siteConfig.contact.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header — Prominent Navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 border-b ${
          scrolled
            ? "bg-white/98 backdrop-blur-xl border-cobalt-900/15 shadow-md"
            : "bg-white border-cobalt-900/12"
        }`}
      >
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 h-20 flex items-center justify-between gap-4">
          {/* Vector Brand Lockup (No PNG box) */}
          <Link href="/" className="group shrink-0">
            <AybarBrandLockup variant="light" />
          </Link>

          {/* Prominent Desktop Navigation Rail (Visible on all screens >= 1024px) */}
          <nav
            aria-label="Ana Menü"
            className="hidden lg:flex items-center gap-1 bg-cobalt-50/90 border border-cobalt-900/12 p-1.5"
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
                  className={`relative px-3.5 xl:px-4 py-2 text-[13px] xl:text-sm font-bold tracking-tight transition-colors whitespace-nowrap ${
                    isActive
                      ? "text-white"
                      : "text-cobalt-950 hover:text-cobalt-700 hover:bg-white/70"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-nav-indicator"
                      className="absolute inset-0 bg-cobalt-700 shadow-sm"
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

          {/* Right CTA + Mobile Menu Button */}
          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-crimson-600 hover:bg-cobalt-900 text-white px-4 xl:px-5 py-3 text-xs font-extrabold tracking-tight transition-colors duration-300 shadow-crimson"
            >
              <span>Ücretsiz Tanışma Dersi</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Menüyü Aç"
              className="lg:hidden inline-flex items-center gap-2 px-3.5 h-11 bg-cobalt-900 text-white text-xs font-bold"
            >
              <Menu className="h-4 w-4" />
              <span>MENÜ</span>
            </button>
          </div>
        </div>

        {/* Always-Visible Mobile & Tablet Quick-Access Menu Strip (< 1024px) */}
        <div className="lg:hidden border-t border-cobalt-900/10 bg-paper-warm overflow-x-auto">
          <div className="px-4 py-2 flex items-center gap-1.5 min-w-max">
            {siteConfig.navigation.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-1.5 text-xs font-bold whitespace-nowrap transition-colors border ${
                    isActive
                      ? "bg-cobalt-700 text-white border-cobalt-700"
                      : "bg-white text-cobalt-950 border-cobalt-900/12 hover:border-cobalt-700"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Scroll Progress Line */}
        <motion.div
          style={{ scaleX }}
          className="origin-left h-[2.5px] bg-crimson-600 w-full"
        />
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-[70] bg-cobalt-950/65 backdrop-blur-sm"
            />
            <motion.aside
              data-lenis-prevent
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: LUXURY_EASE }}
              className="fixed top-0 right-0 bottom-0 z-[80] w-full max-w-sm bg-cobalt-950 text-white border-l border-white/15 flex flex-col justify-between overflow-y-auto"
            >
              <div>
                <div className="p-5 border-b border-white/12 flex items-center justify-between">
                  <AybarBrandLockup variant="dark" />
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
                  {siteConfig.navigation.map((item) => {
                    const isActive =
                      item.href === "/"
                        ? pathname === "/"
                        : pathname.startsWith(item.href);

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`flex items-center justify-between px-6 py-4 transition-colors ${
                          isActive
                            ? "bg-crimson-600 text-white"
                            : "text-white hover:bg-white/5"
                        }`}
                      >
                        <span className="text-base font-bold tracking-tight">
                          {item.label}
                        </span>
                        <ArrowUpRight className="h-4 w-4 opacity-80" />
                      </Link>
                    );
                  })}
                </nav>
              </div>

              <div className="p-6 space-y-3 bg-cobalt-900/60">
                <p className="text-sm text-cobalt-100 leading-relaxed">
                  İlk derse başlamadan önce 30 dakikalık ücretsiz tanışma seansı
                  için hemen ulaşın.
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
                  className="w-full inline-flex items-center justify-center gap-2 border border-white/20 text-white py-3 px-5 text-xs font-semibold"
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
