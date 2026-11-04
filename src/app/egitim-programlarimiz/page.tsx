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
            Değişen Dünyaya <SloganMark>AYBARİst&apos;in Gücüyle</SloganMark> Hazırlanın
          </>
        }
        subtitle={programsIntro.lead}
        media={
          <PhotoFrame
            src={assetPath("/images/programlar-tahta.jpg")}
            alt="Kara tahtaya tebeşirle yazılmış slogan: Değişen Dünyaya AYBARİst'in Gücüyle Hazırlanın"
            aspectClass="aspect-[16/10]"
            priority
          />
        }
      />

      <ProgramExplorer />
    </div>
  );
}
