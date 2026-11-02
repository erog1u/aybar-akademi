"use client";

import React from "react";
import { Check, ShieldCheck, Compass, Target, Users } from "lucide-react";
import { educationModelContent } from "@/data/content";
import { getWhatsAppUrl } from "@/config/site";
import {
  MaskedLines,
  Reveal,
  SectionHeader,
  MagneticLink,
  NextChapterBanner,
  SpotlightCard,
} from "@/components/motion/Primitives";
import { AybarCrestEmblem } from "@/components/brand/AybarCrest";

export default function EgitimModelimizPage() {
  const icons = [ShieldCheck, Compass, Target, Users];

  return (
    <div className="bg-paper text-ink overflow-x-clip">
      {/* 1. Cobalt Studio Hero */}
      <section className="relative studio-hero text-white border-b border-white/15 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -bottom-20 text-white/[0.06]"
        >
          <AybarCrestEmblem variant="watermark" className="h-[460px] w-[460px]" />
        </div>

        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 py-16 lg:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-crimson-600 text-white text-xs font-bold mb-6 shadow-crimson">
                <Check className="h-3.5 w-3.5" />
                <span>{educationModelContent.eyebrow}</span>
              </div>

              <MaskedLines
                as="h1"
                immediate
                className="text-3xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tightest leading-[1.06]"
                lines={[
                  "VIP Süreç Yönetimi ve",
                  <span key="hl" className="font-serif italic font-medium text-cobalt-200">
                    Bütüncül Rehberlik Platformu
                  </span>,
                ]}
              />

              <p className="mt-6 text-base sm:text-lg text-cobalt-50/95 leading-relaxed max-w-2xl">
                {educationModelContent.lead}
              </p>

              <div className="mt-8">
                <MagneticLink
                  href={getWhatsAppUrl()}
                  external
                  variant="crimson"
                >
                  30 Dk Ücretsiz Tanışma Seansı Planla
                </MagneticLink>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white p-3 border border-white/25 shadow-studio">
                <div className="aspect-[4/3] overflow-hidden bg-cobalt-900">
                  <img
                    src="/images/vip-mentorship.jpg"
                    alt="Aybar Akademi VIP Süreç Yönetimi"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. All 4 Education Model Pillars (Verbatim) */}
      <section className="py-20 lg:py-26">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 space-y-12">
          {educationModelContent.sections.map((sec, idx) => {
            const Icon = icons[idx % icons.length];
            const isDark = idx % 2 === 1;

            return (
              <Reveal key={idx}>
                <div
                  className={`border shadow-card p-6 sm:p-10 lg:p-12 ${
                    isDark
                      ? "bg-cobalt-950 text-white border-cobalt-900"
                      : "bg-white text-ink border-cobalt-900/15"
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    {/* Left Title Column */}
                    <div className="lg:col-span-5">
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-crimson-600 text-white text-xs font-bold mb-4">
                        <Icon className="h-3.5 w-3.5" />
                        <span>0{idx + 1}. Bölüm</span>
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tightest leading-tight">
                        {sec.title}
                      </h2>

                      <p
                        className={`mt-4 text-sm sm:text-base leading-relaxed ${
                          isDark ? "text-cobalt-100/90" : "text-ink-muted"
                        }`}
                      >
                        {sec.intro}
                      </p>
                    </div>

                    {/* Right Points Grid */}
                    <div className="lg:col-span-7 grid grid-cols-1 gap-4">
                      {sec.points.map((pt, pIdx) => (
                        <SpotlightCard
                          key={pIdx}
                          glowColor={
                            isDark
                              ? "rgba(56, 139, 255, 0.2)"
                              : "rgba(0, 68, 181, 0.08)"
                          }
                          className={`p-5 sm:p-6 border ${
                            isDark
                              ? "bg-cobalt-900/60 border-white/12"
                              : "bg-paper border-cobalt-900/10"
                          }`}
                        >
                          <div className="flex items-start gap-3.5">
                            <span className="mt-2 h-2 w-2 bg-crimson-600 shrink-0" />
                            <div>
                              <h3 className="text-base sm:text-lg font-extrabold tracking-tight">
                                {pt.label}
                              </h3>
                              <p
                                className={`mt-1.5 text-sm leading-relaxed ${
                                  isDark
                                    ? "text-cobalt-100/90"
                                    : "text-ink-muted"
                                }`}
                              >
                                {pt.text}
                              </p>
                            </div>
                          </div>
                        </SpotlightCard>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Next Subpage Navigator */}
      <NextChapterBanner
        title="Aybar Akademi Neden Farklı? 5 Standart İlkemizi Görün"
        description="İlk ders öncesi 30 dk keşif seansından Ters Yüz Sınıf ve Dijital Hata Defteri tekniğine kadar fark yaratan sistemimiz."
        href="/neden-farkliyiz"
        buttonLabel="Neden Farklıyız Sayfasını Aç"
      />
    </div>
  );
}
