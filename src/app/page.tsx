"use client";

import React from "react";
import Link from "next/link";
import { PhotoFrame } from "@/components/motion/Primitives";
import PageHero, { SectionHeading, SloganMark } from "@/components/layout/PageHero";
import HomeSloganSlider from "@/components/home/HomeSloganSlider";
import { QuoteRequestSection } from "@/components/forms/QuickQuoteForm";
import { assetPath } from "@/config/site";
import RichText from "@/components/brand/RichText";
import { homeContent, siteImages } from "@/data/content";
import ReviewsSection from "@/components/home/ReviewsSection";

export default function HomePage() {
  return (
    <div className="bg-paper text-ink">
      <PageHero
        title={
          <>
            Eğitimde Güvenin,<br />Başarıda <SloganMark>Uzmanlığın Adresi</SloganMark>
          </>
        }
        subtitle={homeContent.heroSubtitle}
        wideMedia
        actions={
          <>
            <Link
              href="#teklif"
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-crimson-600 px-5 text-sm font-extrabold text-white hover:bg-crimson-700 sm:text-base"
            >
              Hemen Hızlı Teklif Alın!
            </Link>
            <Link
              href="/egitim-programlarimiz"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/30 px-5 text-sm font-bold text-white hover:bg-white/10 sm:text-base"
            >
              Eğitim Programlarımız
            </Link>
          </>
        }
        media={<HomeSloganSlider />}
      />

      <ReviewsSection />

      <QuoteRequestSection />

      <section className="border-b border-cobalt-900/10 bg-paper py-12 sm:py-16">
        <div className="mx-auto grid max-w-[1380px] grid-cols-1 items-start gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-5">
            <PhotoFrame
              src={assetPath(siteImages.home.src)}
              alt={siteImages.home.alt}
              aspectClass="aspect-[4/3]"
            />
          </div>
          <div className="lg:col-span-7">
            {homeContent.introParagraphs.map((paragraph, i) => (
              <p key={i} className={`${i ? "mt-3 " : ""}text-base leading-relaxed text-ink-muted`}>
                <RichText text={paragraph} />
              </p>
            ))}
            <div className="mt-8">
              <SectionHeading>{homeContent.rangeHeading}</SectionHeading>
            </div>
            <ul className="mt-5 space-y-3 text-base leading-relaxed text-ink-muted">
              {homeContent.rangeItems.map((line, i) => (
                <li key={i}><RichText text={line} /></li>
              ))}
            </ul>
            <div className="mt-8">
              <SectionHeading>{homeContent.formatHeading}</SectionHeading>
            </div>
            <ul className="mt-5 space-y-3 text-base leading-relaxed text-ink-muted">
              {homeContent.formatItems.map((line, i) => (
                <li key={i}><RichText text={line} /></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
}
