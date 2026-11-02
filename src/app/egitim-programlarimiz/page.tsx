"use client";

import React from "react";
import { programsIntro } from "@/data/content";
import { assetPath } from "@/config/site";
import { MaskedLines, Reveal, PhotoFrame } from "@/components/motion/Primitives";
import ProgramExplorer from "@/components/programs/ProgramExplorer";

export default function EgitimProgramlarimizPage() {
  return (
    <div className="bg-paper text-ink">
      {/* Canlı Cobalt Başlık Alanı */}
      <section className="studio-hero text-white py-12 sm:py-16 lg:py-20 border-b border-white/15 overflow-hidden">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <Reveal immediate y={10}>
                <div className="inline-flex items-center gap-2 rounded-full bg-white/12 border border-white/25 px-4 py-1.5 text-xs sm:text-[13px] font-bold tracking-[0.06em] text-white mb-5">
                  <span className="h-2 w-2 rounded-full bg-crimson-500 shrink-0" />
                  <span>{programsIntro.eyebrow}</span>
                </div>
              </Reveal>

              <MaskedLines
                as="h1"
                immediate
                className="text-[2rem] sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.12] text-white"
                lines={[programsIntro.headline]}
              />

              <Reveal immediate delay={0.12} y={12}>
                <p className="mt-5 text-[15.5px] sm:text-lg text-cobalt-50/95 leading-relaxed">
                  {programsIntro.lead}
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <PhotoFrame
                src={assetPath("/images/programs-global-study.jpg")}
                alt={programsIntro.headline}
                aspectClass="aspect-[16/10]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <ProgramExplorer />
    </div>
  );
}
