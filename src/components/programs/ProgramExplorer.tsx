"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Target,
  BookOpen,
  GraduationCap,
  Languages,
  FileCheck2,
  Palette,
  ArrowUpRight,
  ArrowLeft,
  ArrowUp,
} from "lucide-react";
import { programCategories, programsIntro } from "@/data/content";
import { assetPath, getWhatsAppUrl } from "@/config/site";
import {
  LUXURY_EASE,
  Reveal,
  NextChapterBanner,
} from "@/components/motion/Primitives";
import { scrollToSection } from "@/lib/scroll";

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

const CATEGORY_PHOTOS: Record<string, string> = {
  "sinav-hazirlik": "/images/exam-strategy-notebook.jpg",
  "okula-takviye": "/images/maarif-student.jpg",
  "universite-akademik": "/images/university-academic-seminar.jpg",
  "dunya-dilleri": "/images/world-languages-study.jpg",
  "ulusal-dil-sinavlari": "/images/programs-global-study.jpg",
  "yasam-beceri-sanat": "/images/arts-music-studio.jpg",
};

export default function ProgramExplorer() {
  const [activeCatId, setActiveCatId] = useState<string>(
    programCategories[0].id
  );

  // URL #hash ile açıldığında ilgili kategoriyi seç ve doğrudan okuma alanına kaydır
  useEffect(() => {
    const syncFromHash = () => {
      const rawHash = window.location.hash.replace(/^#/, "");
      if (rawHash && programCategories.some((c) => c.id === rawHash)) {
        setActiveCatId(rawHash);
        setTimeout(() => scrollToSection("secili-kategori", 14), 80);
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

  const handleSelectCategory = (
    catId: string,
    scrollTarget: "secili-kategori" | "alan-secimi" = "secili-kategori"
  ) => {
    setActiveCatId(catId);
    if (typeof window !== "undefined") {
      window.history.replaceState(
        null,
        "",
        `${window.location.pathname}#${catId}`
      );
    }
    // Tıklanınca kullanıcıyı yeni açılan başlığın tam üstüne yumuşakça çıkarır
    scrollToSection(scrollTarget, 14);
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

  const categoryPhoto =
    CATEGORY_PHOTOS[activeCategory.id] || "/images/programs-global-study.jpg";

  return (
    <>
      <section className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14 lg:py-18">
        {/* Adım 1 — 6 Eğitim Alanı Seçici */}
        <div id="alan-secimi" className="scroll-mt-24">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {programCategories.map((cat, idx) => {
              const Icon = CATEGORY_ICONS[cat.id] || BookOpen;
              const isActive = cat.id === activeCategory.id;

              return (
                <button
                  key={cat.id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => handleSelectCategory(cat.id, "secili-kategori")}
                  className={`relative rounded-2xl p-4 sm:p-5 border text-left transition-all duration-200 flex flex-col justify-between min-h-[100px] cursor-pointer active:scale-[0.98] ${
                    isActive
                      ? "bg-cobalt-700 text-white border-cobalt-700 shadow-studio"
                      : "bg-white text-ink border-cobalt-900/12 hover:border-cobalt-700 hover:-translate-y-0.5 hover:shadow-card"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 w-full">
                    <span
                      className={`h-9 w-9 sm:h-10 sm:w-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isActive
                          ? "bg-crimson-600 text-white shadow-sm"
                          : "bg-cobalt-50 text-cobalt-700"
                      }`}
                    >
                      <Icon className="h-[18px] w-[18px] sm:h-5 sm:w-5" />
                    </span>

                    <span
                      className={`text-xs font-extrabold px-2.5 py-0.5 rounded-full ${
                        isActive
                          ? "bg-white/15 text-white"
                          : "bg-paper-warm text-cobalt-800"
                      }`}
                    >
                      0{idx + 1}
                    </span>
                  </div>

                  <div className="mt-3">
                    <span className="sm:hidden text-[15px] font-extrabold leading-snug block">
                      {cat.shortTitle}
                    </span>
                    <span className="hidden sm:block text-base sm:text-[17px] font-extrabold leading-snug">
                      {cat.title}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Adım 2 — Seçili Kategori Detayı (Anında Açılır, Kasma Yapmaz!) */}
        <div id="secili-kategori" className="mt-8 scroll-mt-24">
          <motion.div
            key={activeCategory.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.32, ease: LUXURY_EASE }}
            className="bg-white rounded-2xl border border-cobalt-900/12 shadow-studio p-5 sm:p-8 lg:p-10 will-change-transform"
          >
            {/* Görselli Kategori Başlık Kartı */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center pb-7 border-b border-cobalt-900/10">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full bg-crimson-50 border border-crimson-200 px-3.5 py-1 text-xs sm:text-[13px] font-extrabold text-crimson-700 mb-3">
                  <span className="h-2 w-2 rounded-full bg-crimson-600" />
                  <span>
                    Bölüm {activeIndex + 1} / {programCategories.length}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-[2.1rem] font-extrabold text-ink tracking-tight leading-tight">
                  {activeCategory.title}
                </h2>

                {activeCategory.tagline && (
                  <p className="text-base sm:text-lg font-extrabold text-cobalt-700 mt-2 leading-snug">
                    {activeCategory.tagline}
                  </p>
                )}

                {activeCategory.summary && (
                  <p className="text-[15.5px] sm:text-base text-ink-muted mt-2.5 leading-relaxed max-w-2xl">
                    {activeCategory.summary}
                  </p>
                )}
              </div>

              <div className="lg:col-span-5">
                <div className="overflow-hidden rounded-xl border border-cobalt-900/10 bg-cobalt-50 aspect-[16/9]">
                  <img
                    src={assetPath(categoryPhoto)}
                    alt={activeCategory.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Ders ve Program Kartları (100% Birebir Müşteri İçeriği) */}
            <div className="mt-7 grid grid-cols-1 md:grid-cols-2 gap-5">
              {activeCategory.items.map((item, idx) => {
                const whatsappHref = getWhatsAppUrl(
                  `Merhaba, AYBAR AKADEMİ "${item.title}" birebir özel ders programı hakkında bilgi almak istiyorum.`
                );

                if (item.featured) {
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.32,
                        delay: idx * 0.04,
                        ease: LUXURY_EASE,
                      }}
                      className="md:col-span-2 rounded-2xl bg-gradient-to-br from-cobalt-900 to-cobalt-950 text-white p-6 sm:p-8 border border-cobalt-800 shadow-card"
                    >
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-crimson-600 text-white text-xs font-extrabold mb-3">
                        Bahadır Aybar Liderliğinde Özel Program
                      </div>

                      <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight leading-snug text-white">
                        {item.title}
                      </h3>

                      {item.leaderNote && (
                        <p className="mt-2.5 text-[15.5px] sm:text-base font-bold text-cobalt-200 leading-snug">
                          {item.leaderNote}
                        </p>
                      )}

                      {item.description && (
                        <p className="mt-2.5 text-[15px] sm:text-base text-cobalt-50/95 leading-relaxed max-w-3xl">
                          {item.description}
                        </p>
                      )}

                      {item.subjects.length > 0 && (
                        <div className="mt-5 flex flex-wrap gap-2">
                          {item.subjects.map((sub, sIdx) => (
                            <span
                              key={sIdx}
                              className="rounded-lg bg-white/12 border border-white/15 px-3.5 py-1.5 text-sm font-semibold text-white break-words"
                            >
                              {sub}
                            </span>
                          ))}
                        </div>
                      )}

                      <div className="mt-6 pt-5 border-t border-white/15">
                        <a
                          href={whatsappHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 min-h-[46px] w-full sm:w-auto rounded-xl bg-crimson-600 hover:bg-crimson-700 active:scale-[0.98] text-white px-5 py-2.5 text-sm sm:text-[15px] font-bold shadow-crimson transition-all"
                        >
                          <span>WhatsApp ile Bilgi Al</span>
                          <ArrowUpRight className="h-4 w-4 shrink-0" />
                        </a>
                      </div>
                    </motion.div>
                  );
                }

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: Math.min(idx * 0.03, 0.2),
                      ease: LUXURY_EASE,
                    }}
                    className="rounded-2xl bg-paper hover:bg-white border border-cobalt-900/12 hover:border-cobalt-700/60 hover:shadow-card p-5 sm:p-6 flex flex-col justify-between transition-all"
                  >
                    <div>
                      <h3 className="text-lg sm:text-xl font-extrabold text-cobalt-950 tracking-tight leading-snug">
                        {item.title}
                      </h3>

                      {item.leaderNote && (
                        <p className="text-[15px] font-bold text-cobalt-700 mt-1.5 leading-snug">
                          {item.leaderNote}
                        </p>
                      )}

                      {item.description && (
                        <p className="text-[15.5px] font-medium text-ink-muted mt-2 leading-relaxed">
                          {item.description}
                        </p>
                      )}

                      {item.subjects.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {item.subjects.map((sub, sIdx) => (
                            <span
                              key={sIdx}
                              className={`rounded-lg px-3 py-1.5 text-sm font-semibold break-words ${
                                sub.includes("KOÇLUK")
                                  ? "bg-crimson-600 text-white font-extrabold shadow-sm"
                                  : "bg-white border border-cobalt-900/12 text-ink"
                              }`}
                            >
                              {sub}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="mt-5 pt-3.5 border-t border-cobalt-900/10">
                      <a
                        href={whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-between w-full min-h-[40px] text-sm font-extrabold text-cobalt-700 hover:text-crimson-600 transition-colors"
                      >
                        <span>Detaylı Bilgi Al</span>
                        <ArrowUpRight className="h-4 w-4 shrink-0" />
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Yönlendirmeli Önceki / Yukarı / Sonraki Barı (Otomatik Yukarı Çıkarır!) */}
            <div className="mt-8 pt-6 border-t border-cobalt-900/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <div className="flex flex-col sm:flex-row gap-2.5">
                {prevCat && (
                  <button
                    type="button"
                    onClick={() =>
                      handleSelectCategory(prevCat.id, "secili-kategori")
                    }
                    className="inline-flex items-center justify-center gap-2 min-h-[46px] rounded-xl border border-cobalt-900/15 bg-white hover:border-cobalt-700 hover:bg-cobalt-50 px-5 py-2.5 text-sm sm:text-[15px] font-bold text-ink transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="h-4 w-4 shrink-0" />
                    <span>Önceki: {prevCat.shortTitle}</span>
                  </button>
                )}

                <button
                  type="button"
                  onClick={() => scrollToSection("alan-secimi", 16)}
                  className="inline-flex items-center justify-center gap-2 min-h-[46px] rounded-xl border border-cobalt-900/12 bg-paper hover:bg-cobalt-50 px-4 py-2.5 text-sm font-bold text-cobalt-800 transition-colors cursor-pointer"
                >
                  <ArrowUp className="h-4 w-4 shrink-0" />
                  <span>Tüm Alanlara Çık</span>
                </button>
              </div>

              {nextCat ? (
                <button
                  type="button"
                  onClick={() =>
                    handleSelectCategory(nextCat.id, "secili-kategori")
                  }
                  className="inline-flex items-center justify-center min-h-[48px] rounded-xl bg-crimson-600 hover:bg-crimson-700 active:scale-[0.98] text-white px-6 py-3 text-sm sm:text-[15px] font-extrabold text-center shadow-crimson transition-all cursor-pointer"
                >
                  Sonraki Eğitim Alanı: {nextCat.shortTitle} →
                </button>
              ) : (
                <Link
                  href="/egitim-modelimiz"
                  className="inline-flex items-center justify-center min-h-[48px] rounded-xl bg-crimson-600 hover:bg-crimson-700 text-white px-6 py-3 text-sm sm:text-[15px] font-extrabold text-center shadow-crimson transition-colors"
                >
                  Eğitim Modelimizi İnceleyin →
                </Link>
              )}
            </div>
          </motion.div>
        </div>

        {/* Birebir Kapanış Cümlesi */}
        <Reveal className="mt-10">
          <div className="rounded-2xl bg-gradient-to-r from-cobalt-900 to-cobalt-800 text-white p-6 sm:p-8 shadow-card border-l-4 border-crimson-500">
            <p className="font-serif italic text-lg sm:text-xl text-white leading-relaxed max-w-4xl">
              “{programsIntro.closing}”
            </p>
          </div>
        </Reveal>
      </section>

      <NextChapterBanner
        title="VIP Süreç Yönetimi ve Bütüncül Rehberlik Platformu"
        description="Aybar Akademi Eğitim Modelini 4 adımda keşfedin."
        href="/egitim-modelimiz"
        buttonLabel="Eğitim Modelimiz"
      />
    </>
  );
}
