"use client";

import React from "react";
import { whyDifferentContent } from "@/data/content";
import { assetPath, getWhatsAppUrl } from "@/config/site";
import { PhotoFrame, NextChapterBanner } from "@/components/motion/Primitives";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import PageHero, { SectionHeading, SloganMark } from "@/components/layout/PageHero";

export default function NedenFarkliyizPage() {
  return (
    <div className="bg-paper text-ink">
      <Breadcrumbs items={[{ label: "Neden Farklıyız?", href: "/neden-farkliyiz" }]} />

      <PageHero
        eyebrow="Neden Farklıyız?"
        title={
          <>
            AYBARİst AKADEMİ&apos;de <SloganMark>Fark Yaratan</SloganMark> Standart İlkeler
          </>
        }
        subtitle={whyDifferentContent.lead}
        actions={
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-xl bg-crimson-600 px-5 text-sm font-extrabold text-white hover:bg-crimson-700 sm:text-base"
          >
            Bilgi Al
          </a>
        }
        media={
          <PhotoFrame
            src={assetPath("/images/istanbul-home-tutoring.jpg")}
            alt="Evde yüz yüze birebir ders"
            aspectClass="aspect-[16/10] sm:aspect-[4/3]"
            priority
          />
        }
      />

      <section id="ilkeler" className="py-12 sm:py-16">
        <div className="mx-auto max-w-[1380px] space-y-10 px-4 sm:px-6 lg:px-10">
          {whyDifferentContent.principles.map((principle) => (
            <article key={principle.step} id={`ilke-${principle.step}`} className="scroll-mt-24">
              <SectionHeading>{principle.title}</SectionHeading>
              <div className="mt-5 space-y-5">
                {principle.items.map((item) => (
                  <div key={item.title}>
                    <h3 className="text-lg font-bold leading-snug text-cobalt-950 sm:text-xl">{item.title}</h3>
                    <p className="mt-1 text-[15px] leading-relaxed text-ink-muted sm:text-base">{item.detail}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}

          <article>
            <SectionHeading>{whyDifferentContent.pedagogicalOutcome.title}</SectionHeading>
            <p className="mt-4 max-w-4xl text-base leading-relaxed text-ink-muted sm:text-lg">
              {whyDifferentContent.pedagogicalOutcome.body}
            </p>
          </article>
        </div>
      </section>

      <NextChapterBanner
        title="İletişim"
        description="Her öğrencimizin kendi zirvesine ulaşmasını sağlamak en büyük gurur kaynağımızdır"
        href="/iletisim"
        buttonLabel="İletişim"
      />
    </div>
  );
}
