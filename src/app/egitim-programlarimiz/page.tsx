"use client";

import React from "react";
import { programsIntro } from "@/data/content";
import { assetPath } from "@/config/site";
import { PhotoFrame } from "@/components/motion/Primitives";
import ProgramExplorer from "@/components/programs/ProgramExplorer";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import PageHero, { SloganMark } from "@/components/layout/PageHero";

export default function EgitimProgramlarimizPage() {
  return (
    <div className="bg-paper text-ink">
      <Breadcrumbs items={[{ label: "Eğitim Programlarımız", href: "/egitim-programlarimiz" }]} />

      <PageHero
        eyebrow="Eğitim Programlarımız"
        title={
          <>
            Değişen Dünyaya AYBARİst&apos;in <SloganMark>Gücüyle</SloganMark> Hazırlanın
          </>
        }
        subtitle={programsIntro.lead}
        media={
          <PhotoFrame
            src={assetPath("/images/programs-global-study.jpg")}
            alt="Birebir ders çalışan öğrenci"
            aspectClass="aspect-[16/10]"
            priority
          />
        }
      />

      <ProgramExplorer />
    </div>
  );
}
