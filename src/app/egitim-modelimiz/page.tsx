"use client";

import React from "react";
import { educationModelContent, whyDifferentContent } from "@/data/content";
import { assetPath, getWhatsAppUrl } from "@/config/site";
import { PhotoFrame, NextChapterBanner } from "@/components/motion/Primitives";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import PageHero, { SectionHeading, SloganMark } from "@/components/layout/PageHero";

export default function EgitimModelimizPage() {
  return (
    <div className="bg-paper text-ink">
      <Breadcrumbs items={[{ label: "Eğitim Modelimiz", href: "/egitim-modelimiz" }]} />

      <PageHero
        eyebrow="Eğitim Modelimiz"
        title={
          <>
            Eğitim <SloganMark>Modelimiz</SloganMark>
          </>
        }
        subtitle={educationModelContent.lead}
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
            src={assetPath("/images/model-coaching-bridge.jpg")}
            alt="Eğitim modelimiz birebir ders görseli"
            aspectClass="aspect-[16/10] sm:aspect-[4/3]"
            priority
          />
        }
      />

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-[1380px] space-y-12 px-4 sm:px-6 lg:px-10">
          {educationModelContent.sections.map((sec) => (
            <article key={sec.code} id={`asama-${sec.code}`} className="scroll-mt-24">
              <SectionHeading>{sec.title}</SectionHeading>
              {sec.intro ? (
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-muted sm:text-lg">
                  {sec.intro}
                </p>
              ) : null}
              <div className="mt-6 space-y-5">
                {sec.points.map((pt) => (
                  <div key={pt.label || pt.text}>
                    {pt.label ? (
                      <h3 className="text-lg font-bold leading-snug text-ink sm:text-xl">{pt.label}</h3>
                    ) : null}
                    <p className="mt-1 text-[15px] leading-relaxed text-ink-muted sm:text-base">{pt.text}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
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
