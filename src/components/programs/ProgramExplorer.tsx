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
      {/* Kategori Seçici — Sade ve Şık Segment Çubuğu */}
      <div className="mb-10">
        <div className="text-center sm:text-left mb-4">
          <span className="text-xs font-bold uppercase tracking-widest text-crimson-600">
            Eğitim Alanları
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-ink tracking-tight mt-1">
            İncelemek İstediğiniz Alanı Seçin
          </h2>
        </div>

        {/* 6 Alan İçin Sade Butonlar (Aşırı Kutu Görünümü Olmadan) */}
        <div className="flex sm:grid sm:grid-cols-3 lg:grid-cols-6 gap-2.5 overflow-x-auto no-scrollbar pb-2 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0">
          {programCategories.map((cat, idx) => {
            const Icon = CATEGORY_ICONS[cat.id] || BookOpen;
            const isActive = cat.id === activeCategory.id;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleSelectCategory(cat.id)}
                className={`shrink-0 sm:shrink min-h-[46px] px-3.5 py-2 rounded-xl text-left transition-all duration-200 flex items-center gap-2.5 cursor-pointer ${
                  isActive
                    ? "bg-cobalt-700 text-white shadow-sm"
                    : "bg-white text-ink hover:bg-cobalt-50 border border-cobalt-900/10"
                }`}
              >
                <Icon className={`h-4 w-4 shrink-0 ${isActive ? "text-white" : "text-cobalt-700"}`} />
                <span className="text-xs sm:text-[13px] font-bold whitespace-nowrap">
                  <span className="opacity-60 mr-1">0{idx + 1}.</span>
                  {cat.shortTitle}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Kategori Başlığı ve Özeti — Kutu İçine Sıkıştırmadan Doğrudan Sayfa Zemininde */}
      <div id="secili-kategori" className="scroll-mt-24">
        <div className="pb-6 border-b border-cobalt-900/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-cobalt-50 text-cobalt-800 text-xs font-bold mb-2">
              <span className="h-1.5 w-1.5 rounded-full bg-crimson-600" />
              <span>0{activeIndex + 1} / 0{programCategories.length} · {activeCategory.shortTitle}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">
              {activeCategory.title}
            </h3>

            {activeCategory.tagline && (
              <p className="text-sm sm:text-base font-bold text-cobalt-700 mt-1">
                {activeCategory.tagline}
              </p>
            )}

            {activeCategory.summary && (
              <p className="text-sm sm:text-base text-ink-muted mt-2 max-w-3xl leading-relaxed">
                {activeCategory.summary}
              </p>
            )}
          </div>

          <div className="hidden lg:flex h-14 w-14 rounded-xl bg-cobalt-50 text-cobalt-700 items-center justify-center shrink-0">
            <ActiveIcon className="h-6 w-6" />
          </div>
        </div>

        {/* Program Listesi — Aşırı Kutucuk Olmadan Ferah İki Sütunlu Düzen */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {activeCategory.items.map((item, idx) => {
            if (item.featured) {
              return (
                <div
                  key={idx}
                  className="md:col-span-2 rounded-2xl bg-cobalt-950 text-white p-6 sm:p-8 border border-cobalt-800"
                >
                  <div className="flex items-center gap-1.5 text-xs font-bold text-crimson-400 mb-2">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>Özel Program</span>
                  </div>

                  <h4 className="text-xl sm:text-2xl font-extrabold text-white">
                    {item.title}
                  </h4>

                  {item.leaderNote && (
                    <p className="mt-1.5 text-sm sm:text-base font-bold text-cobalt-200">
                      {item.leaderNote}
                    </p>
                  )}

                  {item.description && (
                    <p className="mt-2 text-sm sm:text-base text-cobalt-100/90 leading-relaxed max-w-3xl">
                      {item.description}
                    </p>
                  )}

                  {item.subjects.length > 0 && (
                    <div className="mt-4 pt-3 border-t border-white/10 text-xs sm:text-sm text-cobalt-200 leading-relaxed">
                      <strong className="text-white font-bold mr-1.5">Kapsanan Dersler:</strong>
                      {item.subjects.join(", ")}
                    </div>
                  )}

                  <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <span className="text-xs text-cobalt-200">
                      Bahadır Aybar liderliğinde 30 dakikalık ücretsiz tanışma seansı planlayın.
                    </span>
                    <a
                      href={getWhatsAppUrl(`Merhaba, AYBAR AKADEMİ "${item.title}" programı hakkında bilgi almak istiyorum.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-crimson-600 hover:bg-crimson-700 text-white px-5 py-2.5 text-xs sm:text-sm font-bold shadow-sm transition-colors whitespace-nowrap"
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
                className="p-5 sm:p-6 rounded-2xl bg-white border border-cobalt-900/10 shadow-sm hover:border-cobalt-700/40 hover:shadow-card hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-ink">
                    {item.title}
                  </h4>

                  {item.leaderNote && (
                    <p className="text-xs sm:text-sm font-bold text-cobalt-700 mt-1">
                      {item.leaderNote}
                    </p>
                  )}

                  {item.description && (
                    <p className="text-sm text-ink-muted mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  )}

                  {item.subjects.length > 0 && (
                    <div className="mt-4 pt-3 border-t border-cobalt-900/5 text-xs sm:text-[13px] text-ink-muted leading-relaxed">
                      <strong className="text-cobalt-950 font-bold mr-1">Dersler:</strong>
                      {item.subjects.map((sub, sIdx) => {
                        const isCoaching = sub.includes("KOÇLUK");
                        return (
                          <span key={sIdx}>
                            {sIdx > 0 && ", "}
                            {isCoaching ? (
                              <span className="inline-block px-1.5 py-0.5 rounded bg-crimson-50 text-crimson-700 font-extrabold text-[11px] sm:text-xs">
                                {sub}
                              </span>
                            ) : (
                              <span className="text-ink-base font-medium">{sub}</span>
                            )}
                          </span>
                        );
                      })}
                    </div>
                  )}
                </div>

                <div className="mt-5 pt-3.5 border-t border-cobalt-900/10">
                  <a
                    href={getWhatsAppUrl(`Merhaba, AYBAR AKADEMİ "${item.title}" programı hakkında bilgi almak istiyorum.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full text-xs sm:text-sm font-bold text-cobalt-700 hover:text-crimson-600 transition-colors group"
                  >
                    <span>Bu Program İçin Danışma Planlayın</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Kategori Alt Sayfalama Butonları */}
        <div className="mt-10 pt-6 border-t border-cobalt-900/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          {prevCat ? (
            <button
              type="button"
              onClick={() => handleSelectCategory(prevCat.id)}
              className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-bold border border-cobalt-900/15 bg-white text-cobalt-900 hover:bg-cobalt-50 transition-colors cursor-pointer"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Önceki: {prevCat.shortTitle}</span>
            </button>
          ) : <div />}

          {nextCat ? (
            <button
              type="button"
              onClick={() => handleSelectCategory(nextCat.id)}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-cobalt-900 hover:bg-cobalt-800 text-white px-5 py-2.5 text-xs sm:text-sm font-bold transition-colors cursor-pointer"
            >
              <span>Sonraki: {nextCat.shortTitle}</span>
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

      {/* Kapanış Alıntısı */}
      <div className="mt-12 text-center max-w-2xl mx-auto text-sm text-ink-muted">
        <p>“{programsIntro.closing}”</p>
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
