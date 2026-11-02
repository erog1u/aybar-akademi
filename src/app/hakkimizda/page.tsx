"use client";

import React from "react";
import { MapPin, Globe2, Check } from "lucide-react";
import { siteConfig, getWhatsAppUrl } from "@/config/site";
import { aboutContent } from "@/data/content";
import {
  MaskedLines,
  Reveal,
  SectionHeader,
  MagneticLink,
  NextChapterBanner,
  SpotlightCard,
} from "@/components/motion/Primitives";
import {
  AybarCrestEmblem,
  AybarInstitutionalSeal,
} from "@/components/brand/AybarCrest";

export default function HakkimizdaPage() {
  return (
    <div className="bg-paper text-ink">
      {/* 1. Cobalt Studio Hero */}
      <section className="relative studio-hero text-white border-b border-white/15 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -bottom-20 text-white/[0.06]"
        >
          <AybarCrestEmblem variant="watermark" className="h-[460px] w-[460px]" />
        </div>

        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-22 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-crimson-600 text-white text-xs font-bold mb-6 shadow-crimson">
                <Check className="h-3.5 w-3.5" />
                <span>33 Yıllık Köklü Eğitim Deneyimi</span>
              </div>

              <MaskedLines
                as="h1"
                immediate
                className="text-[2.15rem] sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tightest leading-[1.06]"
                lines={[
                  "Hakkımızda:",
                  "Çeyrek Asrı Aşan",
                  <span key="s" className="font-serif italic font-medium text-cobalt-200">
                    Akademik Disiplin ve Güven
                  </span>,
                ]}
              />

              <div className="mt-7 space-y-4 text-base sm:text-lg text-cobalt-50/95 leading-relaxed">
                {aboutContent.introParagraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>

            {/* Integrated Vector Seal & 3-Pillar Summary Strip */}
            <div className="lg:col-span-5 w-full">
              <div className="bg-white text-ink p-5 sm:p-8 border border-white/25 shadow-studio flex flex-col items-center text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-cobalt-50 border border-cobalt-700/20 text-cobalt-800 text-[11px] font-bold uppercase tracking-wider mb-5">
                  <Check className="h-3.5 w-3.5 text-crimson-600" />
                  <span>Resmi Kurumsal Mühür</span>
                </div>

                <div className="w-full flex justify-center py-2">
                  <AybarInstitutionalSeal variant="light" />
                </div>

                {/* Crisp 3-Pillar Summary Strip */}
                <div className="mt-6 pt-5 border-t border-cobalt-900/10 w-full grid grid-cols-3 divide-x divide-cobalt-900/10 text-center">
                  <div className="px-1.5 sm:px-2">
                    <div className="font-serif font-bold text-lg sm:text-2xl text-cobalt-800">
                      {siteConfig.experienceYears} Yıl
                    </div>
                    <div className="text-xs sm:text-[13px] text-ink-muted mt-1 font-semibold leading-tight">
                      Deneyim
                    </div>
                  </div>
                  <div className="px-1.5 sm:px-2">
                    <div className="font-serif font-bold text-lg sm:text-2xl text-crimson-600">
                      %100
                    </div>
                    <div className="text-xs sm:text-[13px] text-ink-muted mt-1 font-semibold leading-tight">
                      Maarif Uyum
                    </div>
                  </div>
                  <div className="px-1.5 sm:px-2">
                    <div className="font-serif font-bold text-lg sm:text-2xl text-cobalt-900">
                      39 + 81
                    </div>
                    <div className="text-xs sm:text-[13px] text-ink-muted mt-1 font-semibold leading-tight">
                      İlçe + 81 İl
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Sunduğumuz Çözümler (Verbatim) */}
      <section className="py-14 sm:py-20 lg:py-24">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">
          <SectionHeader
            eyebrow="SUNDUĞUMUZ ÇÖZÜMLER"
            title="Potansiyeli Zirveye Taşıyan Bireysel Yaklaşım"
            subtitle={aboutContent.solutionsIntro}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {aboutContent.solutions.map((sol, idx) => (
              <Reveal key={sol.index} delay={idx * 0.08} className="h-full flex flex-col">
                <SpotlightCard
                  glowColor="rgba(0, 68, 181, 0.1)"
                  className="h-full bg-white border border-cobalt-900/15 p-6 sm:p-8 shadow-card flex flex-col justify-between"
                >
                  <div>
                    <span className="inline-block px-3 py-1 bg-cobalt-700 text-white text-xs font-bold mb-5 shadow-sm">
                      {sol.index}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-ink leading-snug">
                      {sol.title}
                    </h3>
                    <p className="mt-4 text-[15px] sm:text-base text-ink-muted leading-relaxed">
                      {sol.description}
                    </p>
                  </div>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Eğitimde Sınır Tanımıyoruz (Verbatim) */}
      <section className="py-14 sm:py-20 lg:py-24 bg-paper-tint border-y border-cobalt-900/12">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">
          <SectionHeader
            eyebrow="HİZMET AĞIMIZ"
            title={aboutContent.reachHeadline}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-cobalt-900 text-white p-7 sm:p-10 border border-cobalt-900 shadow-studio">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-crimson-600 text-white text-xs sm:text-[13px] font-extrabold mb-5 shadow-crimson">
                <MapPin className="h-4 w-4" />
                <span>Yüz Yüze Özel Ders</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tightest">
                {aboutContent.reachItems[0].title}
              </h3>
              <p className="mt-3.5 text-[15px] sm:text-base text-cobalt-100/95 leading-relaxed">
                {aboutContent.reachItems[0].description}
              </p>
            </div>

            <div className="bg-white text-ink p-7 sm:p-10 border border-cobalt-900/15 shadow-card">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-cobalt-700 text-white text-xs sm:text-[13px] font-extrabold mb-5 shadow-sm">
                <Globe2 className="h-4 w-4" />
                <span>Canlı Online Eğitim</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tightest text-ink">
                {aboutContent.reachItems[1].title}
              </h3>
              <p className="mt-3.5 text-[15px] sm:text-base text-ink-muted leading-relaxed">
                {aboutContent.reachItems[1].description}
              </p>
            </div>
          </div>

          {/* Closing Verbatim Paragraph */}
          <div className="mt-10 bg-white border-l-4 border-crimson-600 border-y border-r border-cobalt-900/12 p-6 sm:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <p className="font-serif italic text-lg sm:text-xl text-cobalt-950 leading-relaxed max-w-4xl">
              “{aboutContent.closingParagraph}”
            </p>
            <div className="shrink-0">
              <MagneticLink href={getWhatsAppUrl()} external variant="crimson">
                Bizimle İletişime Geçin
              </MagneticLink>
            </div>
          </div>
        </div>
      </section>

      {/* Prominent Next Subpage Navigator */}
      <NextChapterBanner
        title="Birebir Özel Ders ve Eğitim Programlarımızı İnceleyin"
        description="İlkokuldan üniversiteye, YKS ve LGS'den 11 dünya diline kadar tüm birebir eğitim programlarımız."
        href="/egitim-programlarimiz"
        buttonLabel="Eğitim Programlarımızı Aç"
      />
    </div>
  );
}
