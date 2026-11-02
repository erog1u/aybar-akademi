"use client";

import React from "react";
import Image from "next/image";
import { Check, Sparkles, ArrowDown } from "lucide-react";
import { programsIntro } from "@/data/content";
import { MaskedLines } from "@/components/motion/Primitives";
import ProgramExplorer from "@/components/programs/ProgramExplorer";
import { AybarCrestEmblem } from "@/components/brand/AybarCrest";

export default function EgitimProgramlarimizPage() {
  return (
    <div className="bg-paper text-ink">
      {/* Cobalt Studio Hero */}
      <section className="relative studio-hero text-white border-b border-white/15 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -bottom-20 text-white/[0.06]"
        >
          <AybarCrestEmblem variant="watermark" className="h-[520px] w-[520px]" />
        </div>

        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column (lg:col-span-7) */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-crimson-600 text-white text-xs sm:text-sm font-bold mb-6 shadow-crimson">
                <Check className="h-4 w-4" />
                <span>{programsIntro.eyebrow}</span>
              </div>

              <MaskedLines
                as="h1"
                immediate
                className="text-[2.15rem] sm:text-5xl lg:text-[3.6rem] font-extrabold tracking-tightest leading-[1.06] max-w-3xl"
                lines={[
                  "Bizzat Size Özel Tasarlanmış",
                  <span key="hl" className="font-serif italic font-medium text-cobalt-200">
                    Başarı Odaklı Eğitim Programlarımız
                  </span>,
                ]}
              />

              <p className="mt-6 text-base sm:text-lg lg:text-xl text-cobalt-50/95 leading-relaxed max-w-2xl">
                {programsIntro.lead}
              </p>

              {/* Two Guided CTAs */}
              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
                <a
                  href="#program-sihirbazi"
                  className="min-h-[48px] inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-crimson-600 hover:bg-crimson-700 text-white text-sm sm:text-base font-bold shadow-crimson transition-all duration-300 group"
                >
                  <Sparkles className="h-4 w-4 text-white group-hover:rotate-12 transition-transform" />
                  <span>Bana Uygun Programı Bul (3 Adım)</span>
                </a>
                <a
                  href="#tum-katalog"
                  className="min-h-[48px] inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/25 text-white text-sm sm:text-base font-bold transition-all duration-300"
                >
                  <span>Tüm Kataloğu İncele</span>
                  <ArrowDown className="h-4 w-4 text-cobalt-200" />
                </a>
              </div>
            </div>

            {/* Right Column (lg:col-span-5) — Framed Studio Visual Card */}
            <div className="lg:col-span-5">
              <div className="border border-white/20 bg-cobalt-950/75 backdrop-blur-md shadow-studio p-3 sm:p-4">
                {/* Top Status Strip */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/15 text-xs sm:text-sm font-bold text-white">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-crimson-500 animate-pulse" />
                    <span className="tracking-wide">6 Ana Akademik Alan · %100 Birebir VIP</span>
                  </div>
                  <span className="text-[11px] font-mono text-cobalt-300 uppercase tracking-wider hidden sm:inline">
                    Canlı & Yüz Yüze
                  </span>
                </div>

                {/* Framed Studio Image */}
                <div className="relative aspect-[16/10] overflow-hidden border border-white/15 bg-cobalt-900">
                  <Image
                    src="/images/programs-global-study.jpg"
                    alt="AYBAR AKADEMİ Birebir Özel Ders ve VIP Eğitim Programları"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    priority
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cobalt-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-xs font-semibold">
                    <span className="bg-cobalt-900/90 backdrop-blur-sm px-2.5 py-1 border border-white/15">
                      Uzman Eğitmen Kadrosu
                    </span>
                    <span className="bg-crimson-600/95 backdrop-blur-sm px-2.5 py-1">
                      Kişiye Özel Müfredat
                    </span>
                  </div>
                </div>

                {/* Bottom 3-Step Visual Mini-Flow */}
                <div className="grid grid-cols-3 divide-x divide-white/15 bg-cobalt-900/90 border border-white/15 mt-3">
                  <div className="py-2.5 px-2 text-center">
                    <span className="block text-[10.5px] font-mono font-bold text-crimson-300">
                      1. SEVİYE ANALİZİ
                    </span>
                    <span className="text-xs sm:text-[13px] font-bold text-white mt-0.5 block leading-tight">
                      Öğrenme Stili
                    </span>
                  </div>
                  <div className="py-2.5 px-2 text-center">
                    <span className="block text-[10.5px] font-mono font-bold text-cobalt-300">
                      2. ÖZEL PROGRAM
                    </span>
                    <span className="text-xs sm:text-[13px] font-bold text-white mt-0.5 block leading-tight">
                      Birebir Müfredat
                    </span>
                  </div>
                  <div className="py-2.5 px-2 text-center">
                    <span className="block text-[10.5px] font-mono font-bold text-emerald-300">
                      3. TAM ÖĞRENME
                    </span>
                    <span className="text-xs sm:text-[13px] font-bold text-white mt-0.5 block leading-tight">
                      Garantili Başarı
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom 4 Summary Strip */}
        <div className="border-t border-white/15 bg-cobalt-950/90 backdrop-blur-md relative z-10">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-2 lg:grid-cols-4">
            {[
              {
                value: "6",
                suffix: " Alan",
                title: "6 Ana Eğitim Alanı",
                detail: "Sınav, Okul, Lisans, Dil & Yaşam",
                borderClass: "border-r border-white/15 border-b lg:border-b-0",
              },
              {
                value: "11",
                suffix: " Dil",
                title: "11 Dünya Dili",
                detail: "IELTS, TOEFL, Almanca, YDT & YDS",
                borderClass: "border-b lg:border-b-0 lg:border-r border-white/15",
              },
              {
                value: "1 – 12",
                suffix: " + Lisans",
                title: "İlkokuldan Üniversiteye",
                detail: "Tüm Kademelerde Birebir Destek",
                borderClass: "border-r border-white/15",
              },
              {
                value: "30",
                suffix: " Dk",
                title: "30 Dk Ücretsiz Keşif",
                detail: "Öğrenme Stili & Hedef Belirleme",
                borderClass: "",
              },
            ].map((stat, i) => (
              <div
                key={i}
                className={`py-5 sm:py-6 px-4 sm:px-6 lg:first:pl-0 lg:last:pr-0 ${stat.borderClass}`}
              >
                <div className="font-serif font-bold text-3xl sm:text-4xl lg:text-[2.6rem] text-white tracking-tight">
                  <span>{stat.value}</span>
                  <span className="text-base sm:text-lg font-normal text-cobalt-200 ml-1.5">
                    {stat.suffix}
                  </span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white mt-1.5">
                  {stat.title}
                </div>
                <div className="text-xs sm:text-sm text-cobalt-200/90 mt-0.5">
                  {stat.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProgramExplorer />
    </div>
  );
}
