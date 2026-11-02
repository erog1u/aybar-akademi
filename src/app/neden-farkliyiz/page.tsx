"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  LayoutList,
  SlidersHorizontal,
} from "lucide-react";
import { whyDifferentContent } from "@/data/content";
import { assetPath } from "@/config/site";
import {
  MaskedLines,
  Reveal,
  PhotoFrame,
  NextChapterBanner,
  LUXURY_EASE,
} from "@/components/motion/Primitives";
import { scrollToSection } from "@/lib/scroll";

const PRINCIPLE_SHORT_LABELS = [
  "1. İlk Tanışma",
  "2. Yenilikçi Yöntemler",
  "3. Teknoloji & Materyal",
  "4. Veli İletişimi",
  "5. Mentorluk",
];

const PRINCIPLE_PHOTOS = [
  "/images/istanbul-home-tutoring.jpg",
  "/images/hero-one-on-one.jpg",
  "/images/exam-strategy-notebook.jpg",
  "/images/model-coaching-bridge.jpg",
  "/images/university-academic-seminar.jpg",
];

export default function NedenFarkliyizPage() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [showAll, setShowAll] = useState<boolean>(false);

  const principles = whyDifferentContent.principles;
  const currentPrinciple = principles[activeIdx];
  const nextLabel =
    activeIdx < principles.length - 1
      ? PRINCIPLE_SHORT_LABELS[activeIdx + 1]
      : null;

  const goToPrinciple = (idx: number, scrollTarget = "ilke-karti") => {
    setActiveIdx(idx);
    scrollToSection(scrollTarget, 14);
  };

  const toggleViewMode = () => {
    setShowAll((prev) => !prev);
    scrollToSection("ilke-bolumu", 14);
  };

  return (
    <div className="bg-paper text-ink">
      {/* 1. Fotoğraflı ve Vurucu Cobalt Başlık Alanı */}
      <section className="studio-hero text-white border-b border-white/15 overflow-hidden py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <Reveal immediate y={10}>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/12 border border-white/25 text-white text-xs sm:text-[13px] font-bold tracking-wider uppercase mb-5">
                  <span className="h-2 w-2 rounded-full bg-crimson-500" />
                  <span>{whyDifferentContent.eyebrow}</span>
                </div>
              </Reveal>

              <MaskedLines
                as="h1"
                immediate
                className="text-[2.1rem] sm:text-4xl lg:text-5xl font-extrabold tracking-tightest leading-[1.12] text-white"
                lines={[whyDifferentContent.headline]}
              />

              <Reveal immediate delay={0.12} y={12}>
                <p className="mt-5 text-base sm:text-lg text-cobalt-50/95 leading-relaxed">
                  {whyDifferentContent.lead}
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <PhotoFrame
                src={assetPath("/images/exam-strategy-notebook.jpg")}
                alt={whyDifferentContent.headline}
                aspectClass="aspect-[4/3]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Adım Adım 5 Standart İlke (Fotoğraflı + Yukarı Kaydırmalı) */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div
          id="ilke-bolumu"
          className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 scroll-mt-24"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-ink">
                {whyDifferentContent.principlesHeading}
              </h2>
              {!showAll && (
                <div className="mt-2 flex items-center gap-3">
                  <span className="text-xs font-extrabold text-crimson-600 uppercase tracking-wider">
                    İlke {activeIdx + 1} / {principles.length}
                  </span>
                  <div className="w-36 h-1.5 rounded-full bg-cobalt-100 overflow-hidden">
                    <motion.div
                      className="h-full bg-crimson-600 rounded-full"
                      initial={false}
                      animate={{
                        width: `${((activeIdx + 1) / principles.length) * 100}%`,
                      }}
                      transition={{ duration: 0.32, ease: LUXURY_EASE }}
                    />
                  </div>
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={toggleViewMode}
              className="inline-flex items-center justify-center gap-2 self-start sm:self-auto rounded-xl px-4 py-2.5 text-sm font-bold border border-cobalt-900/15 bg-white text-cobalt-900 hover:bg-cobalt-50 transition-colors min-h-[44px] cursor-pointer"
            >
              {showAll ? (
                <>
                  <SlidersHorizontal className="h-4 w-4 text-cobalt-700" />
                  <span>Adım Adım İncele</span>
                </>
              ) : (
                <>
                  <LayoutList className="h-4 w-4 text-cobalt-700" />
                  <span>Tüm İlkeleri Alt Alta Gör</span>
                </>
              )}
            </button>
          </div>

          {/* 5 İlke Seçici Butonlar */}
          {!showAll && (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3 mb-7">
              {principles.map((p, idx) => {
                const isActive = activeIdx === idx;
                return (
                  <button
                    key={p.step}
                    type="button"
                    onClick={() => goToPrinciple(idx, "ilke-karti")}
                    className={`rounded-2xl p-3.5 sm:p-4 border text-left transition-all duration-200 min-h-[58px] cursor-pointer active:scale-[0.98] ${
                      idx === 4 ? "col-span-2 sm:col-span-1" : ""
                    } ${
                      isActive
                        ? "bg-cobalt-700 text-white border-cobalt-700 shadow-studio"
                        : "bg-white text-ink border-cobalt-900/12 hover:border-cobalt-700 hover:-translate-y-0.5 hover:shadow-card"
                    }`}
                  >
                    <span className="block text-sm sm:text-[15px] font-extrabold leading-snug">
                      {PRINCIPLE_SHORT_LABELS[idx]}
                    </span>
                  </button>
                );
              })}
            </div>
          )}

          {/* Tekil Yönlendirmeli İlke Görünümü */}
          {!showAll ? (
            <div id="ilke-karti" className="scroll-mt-24">
              <motion.article
                key={currentPrinciple.step}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.32, ease: LUXURY_EASE }}
                className="bg-white rounded-2xl border border-cobalt-900/12 shadow-studio p-5 sm:p-8 lg:p-10 will-change-transform"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Sol Sütun: İlgili İlke Fotoğrafı + Başlık */}
                  <div className="lg:col-span-5">
                    <div className="overflow-hidden rounded-2xl border border-cobalt-900/10 bg-cobalt-50 aspect-[4/3]">
                      <img
                        src={assetPath(PRINCIPLE_PHOTOS[activeIdx])}
                        alt={currentPrinciple.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="mt-5 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-crimson-600 text-white text-xs sm:text-[13px] font-extrabold">
                      {activeIdx + 1}. Standart İlke
                    </div>

                    <h3 className="mt-3 text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-ink leading-snug">
                      {currentPrinciple.title}
                    </h3>
                  </div>

                  {/* Sağ Sütun: Birebir Maddeler */}
                  <div className="lg:col-span-7 space-y-4">
                    {currentPrinciple.items.map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: idx * 0.05,
                          ease: LUXURY_EASE,
                        }}
                        className="rounded-2xl bg-paper hover:bg-white border border-cobalt-900/12 hover:border-cobalt-700/50 p-5 sm:p-6 transition-all"
                      >
                        <h4 className="text-lg sm:text-xl font-extrabold text-cobalt-950 leading-snug">
                          {item.title}
                        </h4>
                        <p className="mt-2 text-[15.5px] sm:text-base text-ink-muted leading-relaxed">
                          {item.detail}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Alt Geçiş Barı — Tıklanınca Otomatik Yukarı Çıkarır */}
                <div className="mt-8 pt-6 border-t border-cobalt-900/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <button
                    type="button"
                    disabled={activeIdx === 0}
                    onClick={() => {
                      if (activeIdx > 0)
                        goToPrinciple(activeIdx - 1, "ilke-bolumu");
                    }}
                    className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm sm:text-[15px] font-bold border transition-colors min-h-[46px] ${
                      activeIdx === 0
                        ? "border-cobalt-900/10 text-ink-muted/40 bg-paper cursor-not-allowed"
                        : "border-cobalt-900/15 text-cobalt-900 bg-white hover:bg-cobalt-50 cursor-pointer"
                    }`}
                  >
                    <ArrowLeft className="h-4 w-4" />
                    <span>Önceki İlke</span>
                  </button>

                  {nextLabel ? (
                    <button
                      type="button"
                      onClick={() =>
                        goToPrinciple(activeIdx + 1, "ilke-bolumu")
                      }
                      className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-crimson-600 hover:bg-crimson-700 active:scale-[0.98] text-white px-6 py-3 text-sm sm:text-[15px] font-extrabold transition-all shadow-crimson min-h-[48px] cursor-pointer"
                    >
                      <span>Sonraki İlke: {nextLabel}</span>
                      <ArrowRight className="h-4 w-4 shrink-0" />
                    </button>
                  ) : (
                    <Link
                      href="/iletisim"
                      className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-crimson-600 hover:bg-crimson-700 text-white px-6 py-3 text-sm sm:text-[15px] font-extrabold transition-colors shadow-crimson min-h-[48px]"
                    >
                      <span>Ücretsiz Tanışma Seansı Planlayın</span>
                      <ArrowRight className="h-4 w-4 shrink-0" />
                    </Link>
                  )}
                </div>
              </motion.article>
            </div>
          ) : (
            /* Tüm İlkeleri Alt Alta Görünüm */
            <div className="space-y-7">
              {principles.map((p, pIdx) => (
                <Reveal key={p.step}>
                  <article className="bg-white rounded-2xl border border-cobalt-900/12 shadow-card p-6 sm:p-8 lg:p-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-start">
                      <div className="lg:col-span-4">
                        <div className="overflow-hidden rounded-xl border border-cobalt-900/10 bg-cobalt-50 aspect-[16/10] mb-4">
                          <img
                            src={assetPath(PRINCIPLE_PHOTOS[pIdx])}
                            alt={p.title}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="px-3 py-1 rounded-full bg-crimson-600 text-white text-xs font-extrabold">
                          {pIdx + 1}. İlke
                        </span>
                        <h3 className="mt-2.5 text-xl sm:text-2xl font-extrabold tracking-tight text-ink">
                          {p.title}
                        </h3>
                      </div>

                      <div className="lg:col-span-8 space-y-4">
                        {p.items.map((item, idx) => (
                          <div
                            key={idx}
                            className="rounded-xl bg-paper border border-cobalt-900/10 p-5 sm:p-6"
                          >
                            <h4 className="text-lg sm:text-xl font-extrabold text-cobalt-950 leading-snug">
                              {item.title}
                            </h4>
                            <p className="mt-2 text-base text-ink-muted leading-relaxed">
                              {item.detail}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          )}

          {/* Birebir Pedagojik Sonuç Vurgu Bloğu */}
          <Reveal className="mt-10">
            <div className="rounded-2xl bg-gradient-to-br from-cobalt-900 to-cobalt-950 text-white p-7 sm:p-10 shadow-studio border-l-4 border-crimson-500">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-crimson-600 text-white text-xs font-extrabold mb-3">
                Tam Öğrenme Sistemi
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                {whyDifferentContent.pedagogicalOutcome.title}
              </h3>
              <p className="mt-4 text-base sm:text-[17px] text-cobalt-100/95 leading-relaxed max-w-4xl">
                {whyDifferentContent.pedagogicalOutcome.body}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <NextChapterBanner
        title="Ücretsiz Tanışma Seansı Planlayın"
        description="İlk derse başlamadan önce gerçekleştirdiğimiz 30 dakikalık ücretsiz keşif seansı için bizimle iletişime geçin."
        href="/iletisim"
        buttonLabel="İletişim"
      />
    </div>
  );
}
