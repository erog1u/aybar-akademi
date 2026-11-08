import React from "react";
import { assetPath } from "@/config/site";
import { founderMessage, siteImages } from "@/data/content";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import PageHero, { SloganMark } from "@/components/layout/PageHero";


export default function KurucuPage() {
  return (
    <div className="bg-paper text-ink">
      <Breadcrumbs items={[{ label: "Kurucumuzun Mesajı", href: "/kurucumuzun-mesaji" }]} />
      <PageHero
        eyebrow="Kurucumuzun Mesajı"
        title={
          <>
            Online Canlı Dersler ile <SloganMark>Yüz Yüze Özel Ders</SloganMark> Modellerini Bir Arada Sunuyoruz
          </>
        }
        media={
          <img
            src={assetPath(siteImages.founder.src)}
            alt={siteImages.founder.alt}
            width={1152}
            height={864}
            decoding="async"
            fetchPriority="high"
            className="h-auto w-full rounded-2xl bg-white object-contain"
          />
        }
      />
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="text-lg font-bold leading-relaxed text-ink sm:text-xl">
            {founderMessage.salutation}
          </p>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-muted sm:text-base">
            {founderMessage.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8 border-t border-cobalt-900/10 pt-6">
            <p className="text-ink">{founderMessage.closing}</p>
            <p className="mt-3 font-brand text-lg font-extrabold text-cobalt-950">{founderMessage.author}</p>
            <p className="text-sm font-bold text-crimson-700">Kurucu</p>
          </div>
        </div>
      </section>
    </div>
  );
}
