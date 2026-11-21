import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import BrandText from "@/components/brand/BrandText";
import { PhotoFrame } from "@/components/motion/Primitives";
import { assetPath, getWhatsAppUrl, siteConfig, SITE_URL } from "@/config/site";
import { sssItems, sssSlogan, plainAnswer } from "@/data/sss";

const TITLE = "Sık Sorulan Sorular";
const DESC =
  "AYBARİst AKADEMİ hakkında sık sorulan sorular: birebir özel ders, online ve yüz yüze dersler, öğretmenler, sınav hazırlık, yabancı dil, ders süresi ve kayıt.";

export const metadata: Metadata = {
  title: "SSS (Sık Sorulan Sorular)",
  description: DESC,
  alternates: { canonical: "/sss/" },
  openGraph: { title: `${TITLE} | AYBARİst AKADEMİ`, description: DESC, url: `${SITE_URL}/sss/` },
};

const IMAGES = [
  { src: "/images/sss-universite-ogrencileri.jpg", alt: "Ellerinde AYBARİst AKADEMİ defteri tutan iki üniversite öğrencisi" },
  { src: "/images/sss-ortaokul-ogrencileri.jpg", alt: "Bahçede AYBARİst AKADEMİ defterleriyle gülümseyen iki öğrenci" },
];

/** [metin](/adres/) işaretlerini bağlantıya çevirir, marka adını boyar. */
function Answer({ text }: { text: string }) {
  const parts: React.ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(/\[([^\]]+)\]\(([^)]+)\)/g)) {
    parts.push(<BrandText key={`t${last}`}>{text.slice(last, m.index)}</BrandText>);
    parts.push(
      <Link key={`l${m.index}`} href={m[2]} className="font-semibold text-cobalt-700 underline underline-offset-2 hover:text-cobalt-900">
        {m[1]}
      </Link>
    );
    last = m.index! + m[0].length;
  }
  parts.push(<BrandText key="end">{text.slice(last)}</BrandText>);
  return <>{parts}</>;
}

export default function SssPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: sssItems.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: plainAnswer(i.a) },
    })),
  };

  return (
    <div className="bg-paper text-ink">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs items={[{ label: "SSS", href: "/sss" }]} />

      <header className="border-b border-cobalt-900/10 bg-white">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-4 pb-10 pt-8 text-center sm:px-6 sm:pb-14 sm:pt-12">
          <img
            src={siteConfig.logos.full}
            alt="AYBARİst AKADEMİ logosu"
            width={640}
            height={614}
            fetchPriority="high"
            className="h-auto w-40 sm:w-52"
          />
          <p className="mt-6 max-w-3xl text-balance text-xl font-bold leading-snug text-cobalt-950 sm:text-2xl lg:text-[28px]">
            <BrandText>{sssSlogan.before}</BrandText>
            <strong className="font-extrabold text-crimson-600">{sssSlogan.emphasis}</strong>
            {sssSlogan.after}
          </p>
          <h1 className="mt-8 text-sm font-extrabold uppercase tracking-[0.14em] text-cobalt-700 sm:text-base">
            <BrandText>AYBARİst AKADEMİ</BrandText> SSS (Sık Sorulan Sorular)
          </h1>
        </div>
      </header>

      <section className="py-10 sm:py-14">
        <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-12 lg:px-10">
          <div className="lg:hidden">
            <PhotoFrame src={assetPath(IMAGES[0].src)} alt={IMAGES[0].alt} aspectClass="aspect-[16/9]" />
          </div>

          <div className="space-y-3">
            {sssItems.map((item, i) => (
              <details
                key={i}
                className="group rounded-2xl border border-cobalt-900/10 bg-white shadow-sm open:border-cobalt-700/30 open:shadow-md"
              >
                <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-4 py-3.5 text-left text-base font-bold leading-snug text-cobalt-950 hover:bg-cobalt-50/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt-700 sm:px-5 sm:text-[17px] [&::-webkit-details-marker]:hidden">
                  <span><BrandText>{item.q}</BrandText></span>
                  <span
                    aria-hidden="true"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cobalt-50 text-lg font-bold text-cobalt-700 transition-transform duration-200 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <div className="px-4 pb-5 text-[15px] leading-relaxed text-ink-muted sm:px-5 sm:text-base">
                  <Answer text={item.a} />
                </div>
              </details>
            ))}
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-5">
              {IMAGES.map((img) => (
                <PhotoFrame key={img.src} src={assetPath(img.src)} alt={img.alt} aspectClass="aspect-[4/3]" />
              ))}
            </div>
          </aside>

          <div className="lg:hidden">
            <PhotoFrame src={assetPath(IMAGES[1].src)} alt={IMAGES[1].alt} aspectClass="aspect-[16/9]" />
          </div>
        </div>
      </section>

      <section className="border-t border-cobalt-900/10 bg-white py-10 sm:py-12">
        <div className="mx-auto flex max-w-3xl flex-col items-center px-4 text-center sm:px-6">
          <h2 className="text-xl font-extrabold text-cobalt-950 sm:text-2xl">Sorunuzun cevabını bulamadınız mı?</h2>
          <p className="mt-2 text-ink-muted">Bizi arayın ya da WhatsApp üzerinden yazın.</p>
          <div className="mt-5 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-crimson-600 px-6 font-extrabold text-white hover:bg-crimson-700"
            >
              WhatsApp ile Yazın
            </a>
            <a
              href={siteConfig.contact.phoneHref}
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-cobalt-900/20 bg-white px-6 font-extrabold text-cobalt-950 hover:bg-cobalt-50"
            >
              {siteConfig.contact.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
