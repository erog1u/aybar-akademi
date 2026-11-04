"use client";

import React from "react";
import { aboutContent, programsIntro } from "@/data/content";
import { assetPath } from "@/config/site";
import { PhotoFrame, NextChapterBanner } from "@/components/motion/Primitives";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import PageHero, { SectionHeading, SloganMark } from "@/components/layout/PageHero";

export default function HakkimizdaPage() {
  return (
    <div className="bg-paper text-ink">
      <Breadcrumbs items={[{ label: "Hakkımızda", href: "/hakkimizda" }]} />

      <PageHero
        eyebrow="Hakkımızda"
        title={
          <>
            Eğitimde <SloganMark>Sınır Tanımıyoruz</SloganMark>
          </>
        }
        media={
          <PhotoFrame
            src={assetPath("/images/maarif-academic-mentorship.jpg")}
            alt="Erkek öğretmenin kız öğrenciye ders anlattığı birebir çalışma"
            aspectClass="aspect-[16/10] sm:aspect-[4/3]"
            priority
          />
        }
      >
        <p>{aboutContent.introParagraphs[0]}</p>
        <p>{aboutContent.introParagraphs[1]}</p>
      </PageHero>

      <section className="border-b border-cobalt-900/10 bg-paper py-12 sm:py-16">
        <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-10">
          <SectionHeading>{aboutContent.solutionsIntro}</SectionHeading>
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {aboutContent.solutions.map((sol) => (
              <article
                key={sol.title}
                className="rounded-2xl border border-cobalt-900/10 bg-white p-6 sm:p-7"
              >
                <h3 className="text-xl font-extrabold leading-snug tracking-tight text-cobalt-950 sm:text-2xl">
                  {sol.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-muted sm:text-base">
                  {sol.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-12 sm:py-16">
        <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-10">
          <SectionHeading>
            Eğitimde Sınır Tanımıyoruz
          </SectionHeading>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {aboutContent.reachItems.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-cobalt-900/10 bg-white p-6 sm:p-8"
              >
                <h3 className="text-2xl font-extrabold leading-[1.2] tracking-tight text-cobalt-950 sm:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-ink-muted">{item.description}</p>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-base leading-relaxed text-ink sm:text-lg">
            {aboutContent.closingParagraph}
          </p>
        </div>
      </section>

      <NextChapterBanner
        title={programsIntro.headline}
        description={programsIntro.closing}
        href="/egitim-programlarimiz"
        buttonLabel="Eğitim Programlarımız"
      />
    </div>
  );
}
