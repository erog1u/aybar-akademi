"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Target,
  BookOpen,
  GraduationCap,
  Languages,
  FileCheck2,
  Palette,
  ArrowUpRight,
  ArrowLeft,
} from "lucide-react";
import { programCategories, programsIntro } from "@/data/content";
import { getWhatsAppUrl } from "@/config/site";
import { LUXURY_EASE, NextChapterBanner } from "@/components/motion/Primitives";

const CATEGORY_ICONS: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  "sinav-hazirlik": Target,
  "okula-takviye": BookOpen,
  "universite-akademik": GraduationCap,
  "dunya-dilleri": Languages,
  "ulusal-dil-sinavlari": FileCheck2,
  "yasam-beceri-sanat": Palette,
};

export default function ProgramExplorer() {
  const [activeCatId, setActiveCatId] = useState<string>(
    programCategories[0].id
  );

  // Sync active category with URL #hash on mount and browser navigation
  useEffect(() => {
    const syncFromHash = () => {
      const rawHash = window.location.hash.replace(/^#/, "");
      if (rawHash && programCategories.some((c) => c.id === rawHash)) {
        setActiveCatId(rawHash);
      }
    };

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    window.addEventListener("popstate", syncFromHash);
    return () => {
      window.removeEventListener("hashchange", syncFromHash);
      window.removeEventListener("popstate", syncFromHash);
    };
  }, []);

  const scrollDetailsIntoView = (mode: "mobile-if-needed" | "always") => {
    if (typeof window === "undefined") return;
    requestAnimationFrame(() => {
      const el = document.getElementById("secili-kategori");
      if (!el) return;

      if (mode === "always") {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }

      if (window.innerWidth < 1024) {
        const rect = el.getBoundingClientRect();
        if (rect.top > window.innerHeight * 0.55 || rect.top < 96) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  };

  const handleSelectCategory = (
    catId: string,
    scrollMode: "mobile-if-needed" | "always" = "mobile-if-needed"
  ) => {
    setActiveCatId(catId);
    if (typeof window !== "undefined") {
      window.history.replaceState(
        null,
        "",
        `${window.location.pathname}#${catId}`
      );
    }
    scrollDetailsIntoView(scrollMode);
  };

  const resolvedIndex = programCategories.findIndex(
    (c) => c.id === activeCatId
  );
  const activeIndex = resolvedIndex >= 0 ? resolvedIndex : 0;
  const activeCategory = programCategories[activeIndex];
  const prevCat = activeIndex > 0 ? programCategories[activeIndex - 1] : null;
  const nextCat =
    activeIndex < programCategories.length - 1
      ? programCategories[activeIndex + 1]
      : null;

  return (
    <>
      <section className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14 lg:py-18">
        {/* Guided Step 1 — Category Cards */}
        <div id="alan-secimi" className="scroll-mt-28">
          <div className="mb-5 sm:mb-6">
            <h2 className="text-xl sm:text-2xl font-extrabold text-ink tracking-tight">
              İlgilendiğiniz Eğitim Alanını Seçin
            </h2>
            <p className="mt-1.5 text-[15px] sm:text-base text-ink-muted leading-relaxed">
              İncelemek istediğiniz alana dokunun; ilgili ders ve programlar
              hemen aşağıda açılır.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {programCategories.map((cat) => {
              const Icon = CATEGORY_ICONS[cat.id] || BookOpen;
              const isActive = cat.id === activeCategory.id;

              return (
                <button
                  key={cat.id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() =>
                    handleSelectCategory(cat.id, "mobile-if-needed")
                  }
                  className={`rounded-xl p-4 sm:p-5 border text-left transition-all flex flex-col justify-between min-h-[96px] cursor-pointer ${
                    isActive
                      ? "bg-cobalt-700 text-white border-cobalt-700 shadow-md ring-2 ring-cobalt-700/25"
                      : "bg-white text-ink border-cobalt-900/12 hover:border-cobalt-700"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 w-full">
                    <span
                      className={`h-9 w-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                        isActive
                          ? "bg-white/15 text-white"
                          : "bg-cobalt-50 text-cobalt-700"
                      }`}
                    >
                      <Icon className="h-[18px] w-[18px] sm:h-5 sm:w-5" />
                    </span>

                    <span
                      className={`text-xs font-semibold ${
                        isActive ? "text-cobalt-100" : "text-ink-subtle"
                      }`}
                    >
                      {cat.items.length} Program
                    </span>
                  </div>

                  <div className="mt-3">
                    <span className="sm:hidden text-[15px] font-bold leading-snug block">
                      {cat.shortTitle}
                    </span>
                    <span className="hidden sm:block text-base font-bold leading-snug">
                      {cat.title}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Guided Step 2 — Active Category Programs */}
        <div
          id="secili-kategori"
          className="mt-8 scroll-mt-32 lg:scroll-mt-28"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.24, ease: LUXURY_EASE }}
              className="bg-white rounded-2xl border border-cobalt-900/12 shadow-card p-6 sm:p-8 lg:p-10"
            >
              {/* Category Header */}
              <div>
                <div className="inline-flex items-center rounded-full bg-cobalt-50 border border-cobalt-700/15 px-3.5 py-1 text-xs sm:text-[13px] font-bold text-cobalt-700 mb-3">
                  Alan {activeIndex + 1} / {programCategories.length}
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-ink tracking-tight leading-tight">
                  {activeCategory.title}
                </h2>

                {activeCategory.tagline && (
                  <p className="text-base sm:text-lg font-semibold text-cobalt-700 mt-1.5 leading-snug">
                    {activeCategory.tagline}
                  </p>
                )}

                {activeCategory.summary && (
                  <p className="text-[15.5px] sm:text-base text-ink-muted mt-2 leading-relaxed max-w-3xl">
                    {activeCategory.summary}
                  </p>
                )}
              </div>

              {/* Programs Grid */}
              <div className="mt-7 grid grid-cols-1 md:grid-cols-2 gap-5">
                {activeCategory.items.map((item, idx) => {
                  const whatsappHref = getWhatsAppUrl(
                    `Merhaba, AYBAR AKADEMİ "${item.title}" birebir özel ders programı hakkında bilgi almak istiyorum.`
                  );

                  if (item.featured) {
                    return (
                      <div
                        key={idx}
                        className="md:col-span-2 rounded-xl bg-cobalt-900 text-white p-6 sm:p-8"
                      >
                        <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight leading-snug">
                          {item.title}
                        </h3>

                        {item.leaderNote && (
                          <p className="mt-2 text-[15.5px] sm:text-base font-semibold text-cobalt-200 leading-snug">
                            {item.leaderNote}
                          </p>
                        )}

                        {item.description && (
                          <p className="mt-2.5 text-[15px] sm:text-base text-cobalt-50/90 leading-relaxed max-w-3xl">
                            {item.description}
                          </p>
                        )}

                        <div className="mt-5 flex flex-wrap gap-2">
                          {item.subjects.map((sub, sIdx) => (
                            <span
                              key={sIdx}
                              className="rounded-lg bg-white/12 px-3.5 py-1.5 text-sm font-medium text-white break-words"
                            >
                              {sub}
                            </span>
                          ))}
                        </div>

                        <div className="mt-6 pt-5 border-t border-white/15">
                          <a
                            href={whatsappHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 min-h-[44px] w-full sm:w-auto rounded-lg bg-crimson-600 hover:bg-crimson-700 text-white px-5 py-2.5 text-sm sm:text-[15px] font-bold shadow-crimson transition-colors"
                          >
                            <span>WhatsApp ile Bilgi Al</span>
                            <ArrowUpRight className="h-4 w-4 shrink-0" />
                          </a>
                        </div>
                      </div>
                    );
                  }

                  return (
                    <div
                      key={idx}
                      className="rounded-xl bg-paper border border-cobalt-900/10 p-5 sm:p-6 flex flex-col justify-between"
                    >
                      <div>
                        <h3 className="text-lg sm:text-xl font-extrabold text-ink tracking-tight leading-snug">
                          {item.title}
                        </h3>

                        {item.leaderNote && (
                          <p className="text-[15px] font-semibold text-cobalt-700 mt-1.5 leading-snug">
                            {item.leaderNote}
                          </p>
                        )}

                        {item.description && (
                          <p className="text-[15px] text-ink-muted mt-1.5 leading-relaxed">
                            {item.description}
                          </p>
                        )}

                        <div className="mt-4 flex flex-wrap gap-2">
                          {item.subjects.map((sub, sIdx) => (
                            <span
                              key={sIdx}
                              className={`rounded-md px-3 py-1.5 text-sm font-medium break-words ${
                                sub.includes("KOÇLUK")
                                  ? "bg-crimson-600 text-white font-bold"
                                  : "bg-white border border-cobalt-900/10 text-ink"
                              }`}
                            >
                              {sub}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-5 pt-3.5 border-t border-cobalt-900/10">
                        <a
                          href={whatsappHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-between w-full min-h-[40px] text-sm font-bold text-cobalt-700 hover:text-crimson-600 transition-colors"
                        >
                          <span>Bu Program İçin Bilgi Alın</span>
                          <ArrowUpRight className="h-4 w-4 shrink-0" />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Guided Next / Previous Category Bar */}
              <div className="mt-8 pt-6 border-t border-cobalt-900/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                {prevCat ? (
                  <button
                    type="button"
                    onClick={() => handleSelectCategory(prevCat.id, "always")}
                    className="inline-flex items-center justify-center gap-2 min-h-[46px] rounded-lg border border-cobalt-900/15 bg-white hover:border-cobalt-700 hover:bg-cobalt-50 px-5 py-2.5 text-sm sm:text-[15px] font-bold text-ink transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="h-4 w-4 shrink-0" />
                    <span>Önceki Alan: {prevCat.shortTitle}</span>
                  </button>
                ) : (
                  <div className="hidden sm:block" />
                )}

                {nextCat ? (
                  <button
                    type="button"
                    onClick={() => handleSelectCategory(nextCat.id, "always")}
                    className="inline-flex items-center justify-center min-h-[46px] rounded-lg bg-cobalt-700 hover:bg-cobalt-900 text-white px-6 py-3 text-sm sm:text-[15px] font-bold text-center shadow-sm transition-colors cursor-pointer"
                  >
                    Sonraki Eğitim Alanı: {nextCat.shortTitle} →
                  </button>
                ) : (
                  <Link
                    href="/egitim-modelimiz"
                    className="inline-flex items-center justify-center min-h-[46px] rounded-lg bg-crimson-600 hover:bg-crimson-700 text-white px-6 py-3 text-sm sm:text-[15px] font-bold text-center shadow-crimson transition-colors"
                  >
                    Eğitim Modelimizi İnceleyin →
                  </Link>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Closing Verbatim Quote */}
        <div className="rounded-2xl bg-cobalt-50 border border-cobalt-900/10 p-6 sm:p-8 mt-10">
          <p className="font-serif italic text-lg sm:text-xl text-cobalt-950 leading-relaxed max-w-4xl">
            “{programsIntro.closing}”
          </p>
        </div>
      </section>

      {/* Next Page Banner */}
      <NextChapterBanner
        title="Eğitim Modelimizi Keşfedin"
        description="VIP Süreç Yönetimi ve bütüncül rehberlik yaklaşımımızı adım adım inceleyin."
        href="/egitim-modelimiz"
        buttonLabel="Eğitim Modelimiz"
      />
    </>
  );
}
