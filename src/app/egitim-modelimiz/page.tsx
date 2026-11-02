"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowLeft, ArrowRight } from "lucide-react";
import { educationModelContent, whyDifferentContent } from "@/data/content";
import { assetPath } from "@/config/site";
import { NextChapterBanner, LUXURY_EASE } from "@/components/motion/Primitives";
import { AybarCrestEmblem } from "@/components/brand/AybarCrest";

const STAGE_IMAGES = [
  assetPath("/images/hero-one-on-one.jpg"),
  assetPath("/images/vip-mentorship.jpg"),
  assetPath("/images/maarif-student.jpg"),
  assetPath("/images/model-coaching-bridge.jpg"),
];

export default function EgitimModelimizPage() {
  const [activeStage, setActiveStage] = useState<number>(0);

  const sections = educationModelContent.sections;
  const currentSec = sections[activeStage];
  const nextSec =
    activeStage < sections.length - 1 ? sections[activeStage + 1] : null;

  return (
    <div className="bg-paper text-ink">
      {/* 1. Clean Cobalt Header */}
      <section className="relative studio-hero text-white border-b border-white/15 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -bottom-20 text-white/[0.06]"
        >
          <AybarCrestEmblem variant="watermark" className="h-[440px] w-[440px]" />
        </div>

        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/12 border border-white/20 text-white text-xs sm:text-[13px] font-bold tracking-wider uppercase mb-5">
                <span className="h-2 w-2 rounded-full bg-crimson-500" />
                <span>{educationModelContent.eyebrow}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tightest leading-[1.12] text-white">
                {educationModelContent.headline}
              </h1>

              <p className="mt-5 text-base sm:text-lg text-cobalt-50/95 leading-relaxed max-w-2xl">
                {educationModelContent.lead}
              </p>
            </div>

            <div className="lg:col-span-5 w-full">
              <div className="bg-white p-2.5 sm:p-3 rounded-2xl border border-white/25 shadow-studio">
                <img
                  src={assetPath("/images/vip-mentorship.jpg")}
                  alt={educationModelContent.headline}
                  className="w-full aspect-[4/3] object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Guided 4-Step Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">
          {/* 4-Step Selector Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
            {sections.map((sec, idx) => {
              const isActive = activeStage === idx;
              return (
                <button
                  key={sec.code}
                  type="button"
                  onClick={() => setActiveStage(idx)}
                  className={`rounded-xl p-4 border text-left transition-all min-h-[56px] cursor-pointer ${
                    isActive
                      ? "bg-cobalt-700 text-white border-cobalt-700 shadow-md"
                      : "bg-white text-ink border-cobalt-900/12 hover:border-cobalt-700/40 hover:bg-cobalt-50/50"
                  }`}
                >
                  <span className="block text-sm sm:text-[15px] font-extrabold leading-snug">
                    {idx + 1}. {sec.shortTitle}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Step Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStage}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: LUXURY_EASE }}
              className="bg-white rounded-2xl border border-cobalt-900/12 shadow-card p-6 sm:p-8 lg:p-10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                {/* Left Column: Stage Photo + Title + Optional Intro */}
                <div className="lg:col-span-5">
                  <div className="overflow-hidden rounded-xl border border-cobalt-900/10 bg-paper-warm">
                    <img
                      src={STAGE_IMAGES[activeStage]}
                      alt={currentSec.title}
                      onError={(e) => {
                        e.currentTarget.src = assetPath("/images/vip-mentorship.jpg");
                      }}
                      className="w-full aspect-[4/3] object-cover rounded-xl"
                    />
                  </div>

                  <h2 className="mt-6 text-2xl sm:text-3xl font-extrabold tracking-tightest text-ink leading-snug">
                    {currentSec.title}
                  </h2>

                  {currentSec.intro ? (
                    <p className="mt-3.5 text-[15.5px] sm:text-base text-ink-muted leading-relaxed">
                      {currentSec.intro}
                    </p>
                  ) : null}
                </div>

                {/* Right Column: Verbatim Points */}
                <div className="lg:col-span-7 space-y-4">
                  {currentSec.points.map((pt, pIdx) => (
                    <div
                      key={pIdx}
                      className="rounded-xl bg-paper border border-cobalt-900/10 p-5"
                    >
                      {pt.label ? (
                        <div>
                          <h3 className="text-lg font-extrabold text-ink leading-snug">
                            {pt.label}
                          </h3>
                          <p className="text-[15.5px] sm:text-base text-ink-muted mt-1.5 leading-relaxed">
                            {pt.text}
                          </p>
                        </div>
                      ) : (
                        <div className="flex items-start gap-3.5">
                          <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cobalt-700 text-white">
                            <Check className="h-3.5 w-3.5" />
                          </span>
                          <p className="text-base sm:text-[17px] text-ink leading-relaxed">
                            {pt.text}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Guided Bottom Bar */}
              <div className="mt-8 pt-6 border-t border-cobalt-900/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <button
                  type="button"
                  disabled={activeStage === 0}
                  onClick={() => {
                    if (activeStage > 0) setActiveStage(activeStage - 1);
                  }}
                  className={`inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm sm:text-[15px] font-bold border transition-colors min-h-[46px] ${
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
                    onClick={() => setActiveStage(activeStage + 1)}
                    className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-cobalt-700 hover:bg-cobalt-800 text-white px-6 py-3 text-sm sm:text-[15px] font-bold transition-colors shadow-sm min-h-[46px] cursor-pointer"
                  >
                    <span>Sonraki Başlık: {nextSec.shortTitle}</span>
                    <ArrowRight className="h-4 w-4 shrink-0" />
                  </button>
                ) : (
                  <Link
                    href="/neden-farkliyiz"
                    className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-crimson-600 hover:bg-crimson-700 text-white px-6 py-3 text-sm sm:text-[15px] font-bold transition-colors shadow-crimson min-h-[46px]"
                  >
                    <span>Neden Farklıyız? (5 Standart İlke)</span>
                    <ArrowRight className="h-4 w-4 shrink-0" />
                  </Link>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* 3. Next Chapter Banner */}
      <NextChapterBanner
        title={whyDifferentContent.headline}
        description={whyDifferentContent.lead}
        href="/neden-farkliyiz"
        buttonLabel="Neden Farklıyız?"
      />
    </div>
  );
}
