"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { whyDifferentContent } from "@/data/content";
import { assetPath, getWhatsAppUrl } from "@/config/site";
import {
  MaskedLines,
  Reveal,
  PhotoFrame,
  NextChapterBanner,
} from "@/components/motion/Primitives";

export default function NedenFarkliyizPage() {
  const principles = whyDifferentContent.principles;

  return (
    <div className="bg-paper text-ink">
      {/* 1. Canlı ve Ferah Cobalt Hero */}
      <section className="studio-hero text-white border-b border-white/15 overflow-hidden py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <Reveal immediate y={10}>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/12 border border-white/25 text-white text-xs sm:text-[13px] font-bold tracking-wider uppercase mb-5">
                  <span className="h-2 w-2 rounded-full bg-crimson-500" />
                  <span>{whyDifferentContent.eyebrow}</span>
                </div>
              </Reveal>

              <MaskedLines
                as="h1"
                immediate
                className="text-[2.05rem] sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.12] text-white"
                lines={[whyDifferentContent.headline]}
              />

              <Reveal immediate delay={0.12} y={12}>
                <p className="mt-5 text-base sm:text-lg text-cobalt-50 leading-relaxed max-w-2xl">
                  {whyDifferentContent.lead}
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3.5">
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-crimson-600 hover:bg-crimson-700 text-white px-6 py-3.5 text-sm sm:text-base font-bold shadow-crimson transition-all"
                  >
                    <span>30 Dk Ücretsiz Tanışma Planlayın</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="#ilkeler"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white px-6 py-3.5 text-sm sm:text-base font-bold transition-all"
                  >
                    <span>5 Standart İlkeyi İncele</span>
                  </a>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-5 w-full">
              <PhotoFrame
                src={assetPath("/images/exam-strategy-notebook.jpg")}
                alt={whyDifferentContent.headline}
                aspectClass="aspect-[16/10] sm:aspect-[4/3]"
                priority
                caption={
                  <div className="flex items-center justify-between text-xs font-bold text-cobalt-950 px-1">
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="h-4 w-4 text-crimson-600" />
                      Kişiselleştirilmiş Strateji
                    </span>
                    <span className="text-crimson-600 font-extrabold">Özel Hata Defteri</span>
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. 5 Standart İlke — Ferah, Şeffaf ve Kusursuz Okuma Mimarisi */}
      <section id="ilkeler" className="py-12 sm:py-16 lg:py-24 scroll-mt-20">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <span className="text-xs font-extrabold uppercase tracking-widest text-crimson-600">
              Standart Kalite İlkelerimiz
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-ink tracking-tight mt-1.5">
              {whyDifferentContent.principlesHeading}
            </h2>
            <p className="mt-3 text-base text-ink-muted leading-relaxed">
              Her öğrenciye standart olarak uyguladığımız, rastlantılara yer bırakmayan 5 aşamalı başarı metodolojimiz.
            </p>
          </div>

          {/* 5 İlke Kartları — Kutucuk Karmaşası Olmadan Temiz Düzen */}
          <div className="space-y-6 sm:space-y-8">
            {principles.map((p, pIdx) => (
              <div
                key={p.step}
                className="rounded-2xl bg-white border border-cobalt-900/10 shadow-sm p-6 sm:p-8 lg:p-10 transition-all hover:border-cobalt-700/30"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                  {/* Sol Başlık Kolonu */}
                  <div className="lg:col-span-4">
                    <div className="flex items-center gap-2.5 mb-3">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-crimson-600 text-white text-xs font-extrabold shadow-sm">
                        0{pIdx + 1}
                      </span>
                      <span className="text-xs font-extrabold uppercase tracking-wider text-cobalt-700">
                        Standart İlke
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-extrabold text-ink tracking-tight leading-snug">
                      {p.title}
                    </h3>
                  </div>

                  {/* Sağ Maddeler — 2 Kolonlu Ferah Düzen */}
                  <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {p.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="rounded-xl bg-paper/70 hover:bg-paper border border-cobalt-900/5 p-4 sm:p-5 transition-colors"
                      >
                        <div className="flex items-start gap-2.5 mb-2">
                          <CheckCircle2 className="h-4 w-4 text-crimson-600 shrink-0 mt-0.5" />
                          <h4 className="text-[15px] sm:text-base font-bold text-cobalt-950 leading-snug">
                            {item.title}
                          </h4>
                        </div>
                        <p className="text-[14px] sm:text-[15px] text-ink-muted leading-relaxed pl-6">
                          {item.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pedagojik Sonuç Vurgu Bloğu (Birebir Müşteri Metni) */}
          <div className="mt-12 sm:mt-16 rounded-2xl bg-gradient-to-br from-cobalt-950 to-cobalt-900 text-white p-7 sm:p-10 shadow-md border-l-4 border-crimson-500">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold mb-3">
              <Sparkles className="h-3 w-3 text-crimson-400" />
              <span>Kalıcı Pedagojik Kazanım</span>
            </span>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-white">
              {whyDifferentContent.pedagogicalOutcome.title}
            </h3>
            <p className="font-serif italic text-base sm:text-lg text-cobalt-100/95 leading-relaxed mt-4 max-w-4xl">
              “{whyDifferentContent.pedagogicalOutcome.body}”
            </p>
            <div className="mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <span className="text-xs sm:text-sm text-cobalt-200">
                Aybar Akademi ile başarı şansa değil, kanıtlanmış pedagojik sisteme emanettir.
              </span>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-crimson-600 hover:bg-crimson-700 text-white px-5 py-2.5 text-sm font-bold shadow-sm whitespace-nowrap transition-colors"
              >
                <span>Ücretsiz Keşif Seansı Planla</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <NextChapterBanner
        title="Ücretsiz Tanışma Seansı Planlayın"
        description="İlk derse başlamadan önce gerçekleştirdiğimiz 30 dakikalık ücretsiz keşif seansı için bizimle hemen iletişime geçin."
        href="/iletisim"
        buttonLabel="İletişim"
      />
    </div>
  );
}
