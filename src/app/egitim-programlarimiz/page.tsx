"use client";

import React from "react";
import { Check } from "lucide-react";
import { programsIntro } from "@/data/content";
import { MaskedLines } from "@/components/motion/Primitives";
import ProgramExplorer from "@/components/programs/ProgramExplorer";
import { AybarCrestEmblem } from "@/components/brand/AybarCrest";

export default function EgitimProgramlarimizPage() {
  return (
    <div className="bg-paper text-ink overflow-x-clip">
      {/* Cobalt Studio Hero */}
      <section className="relative studio-hero text-white border-b border-white/15 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -bottom-20 text-white/[0.06]"
        >
          <AybarCrestEmblem variant="watermark" className="h-[460px] w-[460px]" />
        </div>

        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 py-16 lg:py-22 relative z-10">
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
      </section>

      <ProgramExplorer />
    </div>
  );
}
