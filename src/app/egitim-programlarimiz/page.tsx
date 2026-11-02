"use client";

import React from "react";
import { Check } from "lucide-react";
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
          <AybarCrestEmblem variant="watermark" className="h-[460px] w-[460px]" />
        </div>

        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-22 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-crimson-600 text-white text-xs font-bold mb-6 shadow-crimson">
            <Check className="h-3.5 w-3.5" />
            <span>{programsIntro.eyebrow}</span>
          </div>

          <MaskedLines
            as="h1"
            immediate
            className="text-3xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tightest leading-[1.06] max-w-4xl"
            lines={[
              "Bizzat Size Özel Tasarlanmış",
              <span key="hl" className="font-serif italic font-medium text-cobalt-200">
                Başarı Odaklı Eğitim Programlarımız
              </span>,
            ]}
          />

          <p className="mt-6 text-base sm:text-lg text-cobalt-50/95 leading-relaxed max-w-3xl">
            {programsIntro.lead}
          </p>
        </div>

        {/* Bottom 4 Summary Strip */}
        <div className="border-t border-white/15 bg-cobalt-950/85 backdrop-blur-md relative z-10">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-2 lg:grid-cols-4">
            {[
              {
                value: "6",
                suffix: " Alan",
                title: "6 Ana Eğitim Alanı",
                detail: "Sınav, Okul, Lisans, Dil & Yaşam",
                borderClass: "border-r border-white/12 border-b lg:border-b-0",
              },
              {
                value: "11",
                suffix: " Dil",
                title: "11 Dünya Dili",
                detail: "IELTS, TOEFL, Almanca, YDT & YDS",
                borderClass: "border-b lg:border-b-0 lg:border-r border-white/12",
              },
              {
                value: "1 – 12",
                suffix: " + Lisans",
                title: "İlkokuldan Üniversiteye",
                detail: "Tüm Kademelerde Birebir Destek",
                borderClass: "border-r border-white/12",
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
                className={`py-5 px-4 sm:px-6 lg:first:pl-0 lg:last:pr-0 ${stat.borderClass}`}
              >
                <div className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
                  <span>{stat.value}</span>
                  <span className="text-base sm:text-lg font-normal text-cobalt-200 ml-1">
                    {stat.suffix}
                  </span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-white mt-1">
                  {stat.title}
                </div>
                <div className="text-[11px] sm:text-xs text-cobalt-200/90 mt-0.5">
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
