"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Target,
  BookOpen,
  GraduationCap,
  Languages,
  FileCheck2,
  Palette,
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { programCategories, programsIntro } from "@/data/content";
import { getWhatsAppUrl } from "@/config/site";
import { NextChapterBanner } from "@/components/motion/Primitives";
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

export default function ProgramExplorer() {
  const [activeCatId, setActiveCatId] = useState<string>(
    programCategories[0].id
  );

  // URL #hash ile açıldığında ilgili kategoriyi seç
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

  const handleSelectCategory = (catId: string) => {
    setActiveCatId(catId);
    if (typeof window !== "undefined") {
      window.history.replaceState(
        null,
        "",
        `${window.location.pathname}#${catId}`
      );
      // Yalnızca mobilde ve öğe görünüm dışındaysa yukarı kaydır (masaüstünde kasmayı sıfırlar!)
      const el = document.getElementById("secili-kategori");
      if (el && window.innerWidth < 768) {
        const rect = el.getBoundingClientRect();
        if (rect.top < 60 || rect.top > window.innerHeight) {
          scrollToSection("secili-kategori", 20);
        }
      }
    }
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

  const ActiveIcon = CATEGORY_ICONS[activeCategory.id] || BookOpen;

  return (
    <section className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-12 lg:py-16">
      {/* Kategori Seçici — Mobilde Yatay Akıcı Kaydırma, Masaüstünde 6'lı Şık Segment Çubuğu */}
      <div className="mb-8">
        <div className="text-center sm:text-left mb-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-crimson-600">
            Müfredat & Alanlar
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-ink tracking-tight mt-1">
            İncelemek İstediğiniz Alanı Seçin
          </h2>
        </div>

        {/* Yatay Kaydırılabilir / Grid Buton Çubuğu */}
        <div className="flex sm:grid sm:grid-cols-3 lg:grid-cols-6 gap-2.5 overflow-x-auto no-scrollbar pb-2 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0">
          {programCategories.map((cat, idx) => {
            const Icon = CATEGORY_ICONS[cat.id] || BookOpen;
            const isActive = cat.id === activeCategory.id;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleSelectCategory(cat.id)}
                className={`shrink-0 sm:shrink min-h-[48px] sm:min-h-[58px] px-4 py-2.5 rounded-xl border text-left transition-all duration-200 flex items-center gap-2.5 sm:gap-3 cursor-pointer ${
                  isActive
                    ? "bg-cobalt-700 text-white border-cobalt-700 shadow-sm ring-2 ring-cobalt-700/25"
                    : "bg-white text-ink border-cobalt-900/10 hover:border-cobalt-700/40 hover:bg-cobalt-50/50"
                }`}
              >
                <span
                  className={`h-7 w-7 sm:h-8 sm:w-8 rounded-lg flex items-center justify-center shrink-0 ${
                    isActive
                      ? "bg-crimson-600 text-white"
                      : "bg-cobalt-50 text-cobalt-700"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                </span>

                <span className="text-xs sm:text-[13px] font-bold whitespace-nowrap leading-tight">
                  <span className="opacity-70 mr-1">0{idx + 1}.</span>
                  {cat.shortTitle}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Seçili Kategori Müfredat Vitrini */}
      <div id="secili-kategori" className="scroll-mt-24">
        <div className="bg-white rounded-2xl border border-cobalt-900/10 shadow-sm p-6 sm:p-8 lg:p-10">
          {/* Kategori Başlığı ve Özeti */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-cobalt-900/10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cobalt-50 text-cobalt-800 text-xs font-extrabold mb-3">
                <span className="h-2 w-2 rounded-full bg-crimson-600" />
                <span>
                  0{activeIndex + 1} / 0{programCategories.length} · {activeCategory.shortTitle}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">
                {activeCategory.title}
              </h3>

              {activeCategory.tagline && (
                <p className="text-base sm:text-lg font-bold text-cobalt-700 mt-2">
                  {activeCategory.tagline}
                </p>
              )}

              {activeCategory.summary && (
                <p className="text-[15px] sm:text-base text-ink-muted mt-2.5 leading-relaxed">
                  {activeCategory.summary}
                </p>
              )}
            </div>

            <div className="hidden lg:flex flex-col items-center justify-center h-20 w-20 rounded-2xl bg-cobalt-50 text-cobalt-700 border border-cobalt-900/10 shrink-0">
              <ActiveIcon className="h-8 w-8 text-cobalt-700" />
            </div>
          </div>

          {/* Program Kartları */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            {activeCategory.items.map((item, idx) => {
              const whatsappHref = getWhatsAppUrl(
                `Merhaba, AYBAR AKADEMİ "${item.title}" programı hakkında bilgi almak ve 30 dakikalık ücretsiz tanışma seansı planlamak istiyorum.`
              );

              if (item.featured) {
                return (
                  <div
                    key={idx}
                    className="md:col-span-2 rounded-2xl bg-gradient-to-br from-cobalt-900 to-cobalt-950 text-white p-6 sm:p-8 border border-cobalt-800 shadow-md"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-crimson-600 text-white text-xs font-bold">
                        <Sparkles className="h-3 w-3" />
                        Özel Program
                      </span>
                    </div>

                    <h4 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
                      {item.title}
                    </h4>

                    {item.leaderNote && (
                      <p className="mt-2 text-base font-bold text-cobalt-200">
                        {item.leaderNote}
                      </p>
                    )}

                    {item.description && (
                      <p className="mt-2 text-[15px] sm:text-base text-cobalt-100/90 leading-relaxed max-w-3xl">
                        {item.description}
                      </p>
                    )}

                    {item.subjects.length > 0 && (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {item.subjects.map((sub, sIdx) => (
                          <span
                            key={sIdx}
                            className="rounded-lg bg-white/10 border border-white/15 px-3 py-1 text-xs sm:text-sm font-semibold text-white"
                          >
                            {sub}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="mt-6 pt-5 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <span className="text-xs sm:text-sm text-cobalt-200">
                        30 dakikalık ücretsiz tanışma seansıyla öğrenme stilinizi birlikte belirleyelim.
                      </span>
                      <a
                        href={whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-crimson-600 hover:bg-crimson-700 text-white px-5 py-2.5 text-sm font-bold shadow-sm transition-all whitespace-nowrap"
                      >
                        <span>WhatsApp ile Bilgi Al</span>
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                );
              }

              return (
                <div
                  key={idx}
                  className="rounded-xl bg-paper hover:bg-white border border-cobalt-900/10 hover:border-cobalt-700/40 p-5 sm:p-6 flex flex-col justify-between transition-all"
                >
                  <div>
                    <h4 className="text-lg sm:text-xl font-extrabold text-ink tracking-tight">
                      {item.title}
                    </h4>

                    {item.leaderNote && (
                      <p className="text-sm font-bold text-cobalt-700 mt-1">
                        {item.leaderNote}
                      </p>
                    )}

                    {item.description && (
                      <p className="text-[14.5px] sm:text-[15px] text-ink-muted mt-2 leading-relaxed">
                        {item.description}
                      </p>
                    )}

                    {item.subjects.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {item.subjects.map((sub, sIdx) => {
                          const isSpecial =
                            sub.includes("KOÇLUK") || sub.includes("LGS") || sub.includes("TYT");
                          return (
                            <span
                              key={sIdx}
                              className={`rounded-md px-2.5 py-1 text-xs font-semibold ${
                                isSpecial
                                  ? "bg-crimson-50 text-crimson-700 border border-crimson-200"
                                  : "bg-white border border-cobalt-900/10 text-ink-muted"
                              }`}
                            >
                              {sub}
                            </span>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-cobalt-900/10">
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-between w-full text-xs sm:text-sm font-bold text-cobalt-700 hover:text-crimson-600 transition-colors"
                    >
                      <span>Bu Program İçin Danışma Planlayın</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Kategori Alt Geçiş Barı */}
          <div className="mt-10 pt-6 border-t border-cobalt-900/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            {prevCat ? (
              <button
                type="button"
                onClick={() => handleSelectCategory(prevCat.id)}
                className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-bold border border-cobalt-900/15 bg-white text-cobalt-900 hover:bg-cobalt-50 transition-colors cursor-pointer"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Önceki Alan: {prevCat.shortTitle}</span>
              </button>
            ) : <div />}

            {nextCat ? (
              <button
                type="button"
                onClick={() => handleSelectCategory(nextCat.id)}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-cobalt-900 hover:bg-cobalt-800 text-white px-5 py-2.5 text-xs sm:text-sm font-bold transition-colors cursor-pointer"
              >
                <span>Sonraki Alan: {nextCat.shortTitle}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            ) : (
              <Link
                href="/egitim-modelimiz"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-crimson-600 hover:bg-crimson-700 text-white px-5 py-2.5 text-xs sm:text-sm font-bold transition-colors"
              >
                <span>Eğitim Modelimizi İnceleyin</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Kapanış Alıntısı & Sonraki Bölüm Bannerı */}
      <div className="mt-12 rounded-2xl bg-paper p-6 sm:p-8 border border-cobalt-900/10 text-center max-w-3xl mx-auto">
        <p className="text-base sm:text-lg font-medium text-ink leading-relaxed">
          “{programsIntro.closing}”
        </p>
      </div>

      <NextChapterBanner
        title="Eğitim Modelimizi Keşfedin"
        description="VIP Süreç Yönetimi, eğitim koçluğu ve aile-veli-okul köprüsü modelimizi adım adım inceleyin."
        href="/egitim-modelimiz"
        buttonLabel="Eğitim Modelimiz"
      />
    </section>
  );
}
