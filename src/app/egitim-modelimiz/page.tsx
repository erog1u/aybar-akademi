"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowLeft, ArrowRight } from "lucide-react";
import { educationModelContent, whyDifferentContent } from "@/data/content";
import { assetPath } from "@/config/site";
import {
  MaskedLines,
  Reveal,
  PhotoFrame,
  NextChapterBanner,
  LUXURY_EASE,
} from "@/components/motion/Primitives";
import { scrollToSection } from "@/lib/scroll";

export default function EgitimModelimizPage() {
  const [activeStage, setActiveStage] = useState<number>(0);

  const sections = educationModelContent.sections;
  const currentSec = sections[activeStage];
  const nextSec =
    activeStage < sections.length - 1 ? sections[activeStage + 1] : null;

  const goToStage = (idx: number, scrollTarget = "model-icerik") => {
    setActiveStage(idx);
    scrollToSection(scrollTarget, 14);
  };

  return (
    <div className="bg-paper text-ink">
      {/* 1. Canlı Cobalt Başlık Alanı */}
      <section className="studio-hero text-white border-b border-white/15 overflow-hidden py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <Reveal immediate y={10}>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/12 border border-white/25 text-white text-xs sm:text-[13px] font-bold tracking-wider uppercase mb-5">
                  <span className="h-2 w-2 rounded-full bg-crimson-500" />
                  <span>{educationModelContent.eyebrow}</span>
                </div>
              </Reveal>

              <MaskedLines
                as="h1"
                immediate
                className="text-[2.05rem] sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.12] text-white"
                lines={[educationModelContent.headline]}
              />

              <Reveal immediate delay={0.12} y={12}>
                <p className="mt-5 text-base sm:text-lg text-cobalt-50/95 leading-relaxed max-w-2xl">
                  {educationModelContent.lead}
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-5 w-full">
              <PhotoFrame
                src={assetPath("/images/vip-mentorship.jpg")}
                alt={educationModelContent.headline}
                aspectClass="aspect-[4/3]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Adım Adım Yönlendirmeli 4 Model Başlığı */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">
          {/* Üst 4 Adım Seçici + Canlı İlerleme Çubuğu */}
          <div id="model-secici" className="scroll-mt-24 mb-7">
            <div className="flex items-center justify-between gap-4 mb-3">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-cobalt-700">
                Adım {activeStage + 1} / {sections.length}
              </span>
              <div className="flex-1 max-w-xs h-2 rounded-full bg-cobalt-100 overflow-hidden">
                <motion.div
                  className="h-full bg-crimson-600 rounded-full"
                  initial={false}
                  animate={{
                    width: `${((activeStage + 1) / sections.length) * 100}%`,
                  }}
                  transition={{ duration: 0.35, ease: LUXURY_EASE }}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {sections.map((sec, idx) => {
                const isActive = activeStage === idx;
                return (
                  <button
                    key={sec.code}
                    type="button"
                    onClick={() => goToStage(idx, "model-icerik")}
                    className={`rounded-2xl p-4 border text-left transition-all duration-200 min-h-[64px] cursor-pointer active:scale-[0.98] ${
                      isActive
                        ? "bg-cobalt-700 text-white border-cobalt-700 shadow-studio"
                        : "bg-white text-ink border-cobalt-900/12 hover:border-cobalt-700 hover:-translate-y-0.5 hover:shadow-card"
                    }`}
                  >
                    <span
                      className={`inline-block text-xs font-extrabold px-2 py-0.5 rounded-md mb-1.5 ${
                        isActive
                          ? "bg-crimson-600 text-white"
                          : "bg-cobalt-50 text-cobalt-700"
                      }`}
                    >
                      0{idx + 1}
                    </span>
                    <span className="block text-sm sm:text-[15px] font-extrabold leading-snug">
                      {sec.shortTitle}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Seçili Başlık Kartı (Tıklanınca Buraya Yukarı Kaydırır!) */}
          <div id="model-icerik" className="scroll-mt-24">
            <motion.div
              key={activeStage}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.32, ease: LUXURY_EASE }}
              className="bg-white rounded-2xl border border-cobalt-900/12 shadow-studio p-5 sm:p-8 lg:p-10 will-change-transform"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                {/* Sol Sütun: Başlık & Giriş */}
                <div className="lg:col-span-5">
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-cobalt-900 to-cobalt-950 text-white shadow-card border border-cobalt-800 mb-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-crimson-600 text-white text-xs font-extrabold mb-3">
                      <span>0{activeStage + 1}. Aşama</span>
                    </div>
                    <div className="font-brand text-3xl font-extrabold tracking-wide text-white">
                      0{activeStage + 1}
                    </div>
                    <div className="mt-1 text-sm font-semibold text-cobalt-200">
                      {currentSec.shortTitle}
                    </div>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-ink leading-snug">
                    {currentSec.title}
                  </h2>

                  {currentSec.intro ? (
                    <p className="mt-3.5 text-[15.5px] sm:text-base text-ink-muted leading-relaxed">
                      {currentSec.intro}
                    </p>
                  ) : null}
                </div>

                {/* Sağ Sütun: Birebir Maddeler */}
                <div className="lg:col-span-7 space-y-4">
                  {currentSec.points.map((pt, pIdx) => (
                    <motion.div
                      key={pIdx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: pIdx * 0.05,
                        ease: LUXURY_EASE,
                      }}
                      className="rounded-2xl bg-paper hover:bg-white border border-cobalt-900/12 hover:border-cobalt-700/50 p-5 sm:p-6 transition-all"
                    >
                      {pt.label ? (
                        <div className="flex items-start gap-3.5">
                          <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cobalt-700 text-white text-xs font-extrabold">
                            0{pIdx + 1}
                          </span>
                          <div>
                            <h3 className="text-lg sm:text-xl font-extrabold text-cobalt-950 leading-snug">
                              {pt.label}
                            </h3>
                            <p className="text-[15.5px] sm:text-base text-ink-muted mt-1.5 leading-relaxed">
                              {pt.text}
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-start gap-3.5">
                          <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-crimson-600 text-white">
                            <Check className="h-4 w-4" />
                          </span>
                          <p className="text-base sm:text-[17px] font-medium text-ink leading-relaxed">
                            {pt.text}
                          </p>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Alt Geçiş Barı — Tıklanınca Yeni Başlığın Üstüne Yukarı Çıkarır */}
              <div className="mt-8 pt-6 border-t border-cobalt-900/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <button
                  type="button"
                  disabled={activeStage === 0}
                  onClick={() => {
                    if (activeStage > 0) goToStage(activeStage - 1, "model-secici");
                  }}
                  className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm sm:text-[15px] font-bold border transition-colors min-h-[46px] ${
                    activeStage === 0
                      ? "border-cobalt-900/10 text-ink-muted/40 bg-paper cursor-not-allowed"
                      : "border-cobalt-900/15 text-cobalt-900 bg-white hover:bg-cobalt-50 cursor-pointer"
                  }`}
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span>Önceki Başlık</span>
                </button>

                {nextSec ? (
                  <button
                    type="button"
                    onClick={() => goToStage(activeStage + 1, "model-secici")}
                    className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-crimson-600 hover:bg-crimson-700 active:scale-[0.98] text-white px-6 py-3 text-sm sm:text-[15px] font-extrabold transition-all shadow-crimson min-h-[48px] cursor-pointer"
                  >
                    <span>Sonraki Başlık: {nextSec.shortTitle}</span>
                    <ArrowRight className="h-4 w-4 shrink-0" />
                  </button>
                ) : (
                  <Link
                    href="/neden-farkliyiz"
                    className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-crimson-600 hover:bg-crimson-700 text-white px-6 py-3 text-sm sm:text-[15px] font-extrabold transition-colors shadow-crimson min-h-[48px]"
                  >
                    <span>Neden Farklıyız? (5 Standart İlke)</span>
                    <ArrowRight className="h-4 w-4 shrink-0" />
                  </Link>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <NextChapterBanner
        title={whyDifferentContent.headline}
        description={whyDifferentContent.lead}
        href="/neden-farkliyiz"
        buttonLabel="Neden Farklıyız?"
      />
    </div>
  );
}
