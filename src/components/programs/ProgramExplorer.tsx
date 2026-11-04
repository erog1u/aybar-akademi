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
  Search,
  X,
} from "lucide-react";
import { programCategories, programsIntro } from "@/data/content";
import { getWhatsAppUrl } from "@/config/site";
import { scrollToSection } from "@/lib/scroll";
import { NextChapterBanner } from "@/components/motion/Primitives";
import BrandText from "@/components/brand/BrandText";

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

// Türkçe İ/ı: "ingilizce" İngilizce'yi, "MATEMATİK" Matematik'i bulsun
const normalizeSearch = (s: string) => s.toLocaleLowerCase("tr").replace(/ı/g, "i");

export default function ProgramExplorer() {
  const [activeCatId, setActiveCatId] = useState<string>(
    programCategories[0].id
  );
  const [searchQuery, setSearchQuery] = useState<string>("");

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
    setSearchQuery("");
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

  // Canlı Arama Filtresi (Cancan & Kullanılabilirlik)
  const normalizedQuery = normalizeSearch(searchQuery.trim());
  const searchResults = normalizedQuery
    ? programCategories.flatMap((cat) =>
        cat.items
          .filter(
            (item) =>
              normalizeSearch(item.title).includes(normalizedQuery) ||
              (item.description && normalizeSearch(item.description).includes(normalizedQuery)) ||
              item.subjects.some((s) => normalizeSearch(s).includes(normalizedQuery))
          )
          .map((item) => ({ ...item, categoryTitle: cat.shortTitle }))
      )
    : null;

  return (
    <section className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-12 lg:py-16">
      {/* Kategori Seçici & Canlı Arama Çubuğu */}
      <div className="mb-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-5">
          <div>
            <h2 className="flex max-w-4xl items-start gap-3 text-balance text-2xl font-extrabold leading-[1.4] tracking-tight text-cobalt-950 sm:text-3xl lg:text-4xl">
              <span className="mt-[0.45em] h-2.5 w-2.5 shrink-0 rounded-full bg-crimson-600" aria-hidden="true" />
              <span>
                Sizin İçin Hazırladığımız Başarı Odaklı Eğitim Programlarımız
              </span>
            </h2>
          </div>

          {/* Anında Arama Kutusu (iOS Auto-Zoom Korumalı & Doğru Sanal Klavye) */}
          <div className="w-full sm:w-72 relative">
            <Search className="h-4 w-4 text-cobalt-700 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="search"
              inputMode="search"
              autoComplete="off"
              autoCapitalize="none"
              spellCheck="false"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Ders, sınav veya program ara..."
              className="w-full h-12 min-h-[48px] pl-10 pr-10 rounded-xl bg-white border border-cobalt-900/15 focus:outline-none focus:border-cobalt-700 text-base sm:text-sm text-ink placeholder:text-ink-subtle shadow-sm transition-all touch-manipulation"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-1 top-1/2 -translate-y-1/2 text-ink-muted hover:text-ink min-h-[48px] min-w-[48px] inline-flex items-center justify-center p-2 rounded-lg touch-manipulation"
                title="Aramayı Temizle"
                aria-label="Aramayı Temizle"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        {/* 6 Alan İçin Şık ve Ferah Mikro-Kart Mimarisi (PC ve Mobilde Sıfır Taşma) */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3 pt-1">
          {programCategories.map((cat) => {
            const Icon = CATEGORY_ICONS[cat.id] || BookOpen;
            const isActive = !searchQuery && cat.id === activeCategory.id;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleSelectCategory(cat.id)}
                className={`group p-3 sm:p-3.5 rounded-2xl text-left transition-all duration-300 flex flex-col justify-between min-h-[88px] sm:min-h-[96px] gap-2.5 cursor-pointer relative overflow-hidden select-none active:scale-[0.98] ${
                  isActive
                    ? "bg-crimson-600 text-white shadow-crimson ring-2 ring-crimson-400/50"
                    : "bg-white text-ink hover:bg-cobalt-50 hover:border-crimson-300/60 hover:-translate-y-0.5 border border-cobalt-900/10 shadow-sm"
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-light-sweep pointer-events-none" />
                )}
                {/* 1. Kat (Üst Satır): Sol İkon Kutusu, Sağ Program Sayısı Rozeti */}
                <div className="flex items-center justify-between w-full relative z-10 gap-2">
                  <div className={`h-7 w-7 sm:h-8 sm:w-8 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                    isActive ? "bg-white/20 text-white" : "bg-cobalt-50 text-cobalt-700 group-hover:bg-crimson-50 group-hover:text-crimson-600"
                  }`}>
                    <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </div>
                  <span className={`text-xs font-extrabold px-2 sm:px-2.5 py-0.5 rounded-full whitespace-nowrap shrink-0 transition-colors ${
                    isActive ? "bg-white/25 text-white" : "bg-cobalt-50 text-cobalt-700 group-hover:bg-crimson-50 group-hover:text-crimson-700"
                  }`}>
                    {cat.items.length} Program
                  </span>
                </div>
                {/* 2. Kat (Alt Satır): Alan Adı — Ferah, Kalın ve Net */}
                <div className="relative z-10 w-full min-w-0">
                  <span className="text-xs sm:text-[13px] font-extrabold leading-snug tracking-tight block break-words">
                    {cat.shortTitle}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Arama Sonuçları Görünümü veya Seçili Kategori */}
      {searchResults ? (
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-cobalt-900/10">
            <div className="text-sm sm:text-base font-bold text-ink">
              <strong className="text-cobalt-700 font-extrabold mr-1">“{searchQuery}”</strong> için {searchResults.length} sonuç bulundu
            </div>
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="text-xs font-bold text-crimson-600 hover:underline"
            >
              Filtreyi Temizle
            </button>
          </div>

          {searchResults.length === 0 ? (
            <div className="text-center py-12 rounded-2xl bg-white border border-cobalt-900/10 p-6">
              <p className="text-ink-muted text-sm sm:text-base">
                Aramanızla eşleşen program bulunamadı. Lütfen farklı bir arama terimi deneyin veya doğrudan kategorileri inceleyin.
              </p>
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cobalt-700 text-white text-xs sm:text-sm font-bold shadow-sm"
              >
                Tüm Programları Göster
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {searchResults.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl bg-white border border-cobalt-900/10 shadow-sm hover:border-cobalt-700/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-cobalt-50 text-cobalt-700 text-xs font-extrabold mb-2">
                      {item.categoryTitle}
                    </span>
                    <h4 className="text-lg sm:text-xl font-bold text-ink">
                      <BrandText>{item.title}</BrandText>
                    </h4>
                    {item.description && (
                      <p className="text-sm text-ink-muted mt-2 leading-relaxed">
                        <BrandText>{item.description}</BrandText>
                      </p>
                    )}
                  </div>
                  <div className="mt-5 pt-3.5 border-t border-cobalt-900/10">
                    <a
                      href={getWhatsAppUrl(`Merhaba, AYBARİst AKADEMİ "${item.title}" programı hakkında bilgi almak istiyorum.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-between w-full text-xs sm:text-sm font-bold text-cobalt-700 hover:text-crimson-600 transition-colors group"
                    >
                      <span>WhatsApp ile Bilgi Al</span>
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        /* Kategori Başlığı ve Özeti — Kutu İçine Sıkıştırmadan Doğrudan Sayfa Zemininde */
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

            <div className="hidden lg:flex h-14 w-14 rounded-2xl bg-gradient-to-br from-cobalt-50 to-cobalt-100 text-cobalt-700 items-center justify-center shrink-0 shadow-sm border border-cobalt-900/10">
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
                  className="md:col-span-2 rounded-2xl bg-cobalt-950 text-white p-6 sm:p-8 border border-cobalt-800 relative overflow-hidden shadow-card"
                >
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-crimson-600 via-cobalt-400 to-crimson-600" />
                  <h4 className="text-xl sm:text-2xl font-extrabold text-white">
                    <BrandText>{item.title}</BrandText>
                  </h4>

                  {item.leaderNote && (
                    <p className="brand-on-dark mt-1.5 text-sm sm:text-base font-bold text-cobalt-200">
                      <BrandText>{item.leaderNote}</BrandText>
                    </p>
                  )}

                  {item.description && (
                    <p className="mt-2 text-sm sm:text-base text-cobalt-100/90 leading-relaxed max-w-3xl">
                      <BrandText>{item.description}</BrandText>
                    </p>
                  )}

                  {item.subjects.length > 0 && (
                    <div className="mt-4 pt-3 border-t border-white/10 text-xs sm:text-sm text-cobalt-200 leading-relaxed">
                      <strong className="text-white font-bold mr-1.5">Kapsanan Dersler:</strong>
                      {item.subjects.join(", ")}
                    </div>
                  )}

                  <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-end gap-4">
                    <a
                      href={getWhatsAppUrl(`Merhaba, AYBARİst AKADEMİ "${item.title}" programı hakkında bilgi almak istiyorum.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-crimson-600 hover:bg-crimson-700 active:scale-95 text-white px-5 py-2.5 text-xs sm:text-sm font-bold shadow-crimson transition-all whitespace-nowrap"
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
                className="p-5 sm:p-6 rounded-2xl bg-white border border-cobalt-900/10 shadow-sm hover:border-crimson-500/40 hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
              >
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-crimson-600 via-cobalt-600 to-crimson-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-ink group-hover:text-cobalt-950 transition-colors">
                    <BrandText>{item.title}</BrandText>
                  </h4>

                  {item.leaderNote && (
                    <p className="text-xs sm:text-sm font-bold text-cobalt-700 mt-1">
                      <BrandText>{item.leaderNote}</BrandText>
                    </p>
                  )}

                  {item.description && (
                    <p className="text-sm text-ink-muted mt-2 leading-relaxed">
                      <BrandText>{item.description}</BrandText>
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
                              <span className="inline-block px-1.5 py-0.5 rounded bg-crimson-50 text-crimson-700 font-extrabold text-xs sm:text-xs border border-crimson-200/50">
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
                    href={getWhatsAppUrl(`Merhaba, AYBARİst AKADEMİ "${item.title}" programı hakkında bilgi almak istiyorum.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full text-xs sm:text-sm font-bold text-cobalt-700 hover:text-crimson-600 transition-colors group/link"
                  >
                    <span>Bilgi Al</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
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
              onClick={() => {
                handleSelectCategory(prevCat.id);
                scrollToSection("secili-kategori");
              }}
              className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 min-h-[44px] text-xs sm:text-sm font-bold border border-cobalt-900/15 bg-white text-cobalt-900 hover:bg-cobalt-50 transition-colors cursor-pointer"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Önceki: {prevCat.shortTitle}</span>
            </button>
          ) : <div />}

          {nextCat ? (
            <button
              type="button"
              onClick={() => {
                handleSelectCategory(nextCat.id);
                scrollToSection("secili-kategori");
              }}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-cobalt-900 hover:bg-cobalt-800 text-white px-5 py-2.5 min-h-[44px] text-xs sm:text-sm font-bold transition-colors cursor-pointer"
            >
              <span>Sonraki: {nextCat.shortTitle}</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          ) : (
            <Link
              href="/egitim-modelimiz"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-crimson-600 hover:bg-crimson-700 text-white px-5 py-2.5 min-h-[44px] text-xs sm:text-sm font-bold transition-colors"
            >
              <span>Eğitim Modelimiz</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>
      </div>
      )}

      {/* Kapanış Alıntısı */}
      <div className="mt-12 text-center max-w-2xl mx-auto text-sm text-ink-muted">
        <p>“{programsIntro.closing}”</p>
      </div>

      <NextChapterBanner
        title="Eğitim Modelimiz"
        description="AYBARİst AKADEMİ Eğitim Modeli; ezberci kalıpları yıkan, kişiye özel kurgulanmış VIP Süreç Yönetimi ve alanında uzman eğitmen kadrosuyla öğrencileri potansiyellerinin zirvesine taşıyan, Maarif Modeline uyumlu, bütüncül bir rehberlik ve başarı platformudur."
        href="/egitim-modelimiz"
        buttonLabel="Eğitim Modelimiz"
      />
    </section>
  );
}
