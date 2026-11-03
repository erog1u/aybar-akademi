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
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export default function NedenFarkliyizPage() {
  const principles = whyDifferentContent.principles;

  return (
    <div className="bg-paper text-ink">
      <Breadcrumbs items={[{ label: "Neden Farklıyız?" }]} />

      {/* 1. Canlı ve Ferah Cobalt Hero */}
      <section className="studio-hero text-white border-b border-white/15 overflow-hidden py-12 sm:py-16 lg:py-20 relative">
        <div className="absolute top-1/4 left-0 sm:left-10 w-80 h-80 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/12 border border-white/25 text-white text-xs sm:text-[13px] font-bold tracking-wider uppercase mb-5 shadow-sm backdrop-blur-xs">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="radar-beacon absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                </span>
                <span>{whyDifferentContent.eyebrow}</span>
              </div>

              <MaskedLines
                as="h1"
                className="text-[2.05rem] sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.12] text-white"
                lines={[
                  "Eğitimde Fark Yaratan",
                  <span
                    key="why-crimson-box"
                    className="relative inline-flex items-center px-4 sm:px-6 py-1 sm:py-1.5 rounded-2xl bg-crimson-600 text-white font-extrabold shadow-crimson animate-crimson-box overflow-hidden mt-1 sm:mt-2"
                  >
                    <span className="relative z-10">5 Temel Standart.</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-light-sweep pointer-events-none" />
                  </span>,
                ]}
              />

              <p className="mt-5 text-base sm:text-lg text-cobalt-50 leading-relaxed max-w-2xl">
                {whyDifferentContent.lead}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3.5">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-crimson-600 hover:bg-crimson-700 text-white px-6 py-3.5 text-sm sm:text-base font-extrabold shadow-crimson transition-all active:scale-[0.98]"
                >
                  <span>Ücretsiz Tanışma Seansı Planla</span>
                  <ArrowRight className="h-4 w-4 text-white" />
                </a>
                <a
                  href="#ilkeler"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white px-6 py-3.5 text-sm sm:text-base font-bold transition-all"
                >
                  <span>5 Standart İlkeyi İncele</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 w-full relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/30 via-indigo-400/20 to-sky-300/30 rounded-3xl blur-2xl animate-gentle-glow pointer-events-none" />
              <div className="absolute -top-3 sm:-top-3.5 right-3 sm:right-4 z-20 inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-crimson-600 text-white font-black text-[10.5px] sm:text-xs shadow-crimson animate-float-slow">
                <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
                <span>Kişiye Özel Hata Defteri</span>
              </div>
              <PhotoFrame
                src={assetPath("/images/exam-strategy-notebook.jpg")}
                alt={whyDifferentContent.headline}
                aspectClass="aspect-[16/10] sm:aspect-[4/3]"
                priority
                className="relative z-10 shadow-studio"
                caption={
                  <div className="flex items-center justify-between text-xs font-bold text-cobalt-950 px-1">
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="h-4 w-4 text-cobalt-700" />
                      Kişiselleştirilmiş Strateji
                    </span>
                    <span className="text-cobalt-700 font-extrabold">Özel Hata Defteri</span>
                  </div>
                }
              />
            </div>
          </div>

          {/* Hero Tabanı: 5 Standart İlke Özeti (Mobilde Asla Sıkışmayan Orantılı Düzen) */}
          <div className="mt-10 pt-8 border-t border-white/15 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="p-3.5 sm:p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-3.5">
              <span className="font-brand text-2xl sm:text-3xl font-extrabold text-white">01</span>
              <div className="text-xs sm:text-[13px] text-cobalt-100 leading-snug">
                <strong className="text-white block font-bold">İlk Tanışma</strong>
                Öğrenme stili ve önyargı analizi
              </div>
            </div>
            <div className="p-3.5 sm:p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-3.5">
              <span className="font-brand text-2xl sm:text-3xl font-extrabold text-white">02</span>
              <div className="text-xs sm:text-[13px] text-cobalt-100 leading-snug">
                <strong className="text-white block font-bold">Yenilikçi Yöntem</strong>
                Flipped classroom & active recall
              </div>
            </div>
            <div className="p-3.5 sm:p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-3.5">
              <span className="font-brand text-2xl sm:text-3xl font-extrabold text-white">03</span>
              <div className="text-xs sm:text-[13px] text-cobalt-100 leading-snug">
                <strong className="text-white block font-bold">Hata Defteri</strong>
                Eksikleri sıfırlama tekniği
              </div>
            </div>
            <div className="p-3.5 sm:p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-3.5">
              <span className="font-brand text-2xl sm:text-3xl font-extrabold text-white">04</span>
              <div className="text-xs sm:text-[13px] text-cobalt-100 leading-snug">
                <strong className="text-white block font-bold">Veli İletişimi</strong>
                Her ders sonu şeffaf rapor
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobil Hızlı İlke Atlama Çubuğu (Mobilde PC ile Eşit Konfor ve Zenginlik) */}
      <div className="lg:hidden sticky top-[var(--header-offset,64px)] z-30 bg-white/95 backdrop-blur-md border-b border-cobalt-900/10 px-4 py-2.5 flex items-center gap-2 overflow-x-auto no-scrollbar shadow-xs transition-[top] duration-200 ease-out">
        <span className="text-[11px] font-black uppercase text-crimson-600 shrink-0 pr-1 border-r border-cobalt-900/10">
          İlkeler:
        </span>
        {principles.map((p, pIdx) => (
          <a
            key={p.step}
            href={`#ilke-${p.step}`}
            className="shrink-0 px-3 py-1.5 rounded-lg bg-paper border border-cobalt-900/10 text-xs font-bold text-ink active:scale-95 hover:bg-crimson-50 hover:text-crimson-700 hover:border-crimson-300 transition-colors flex items-center gap-1.5"
          >
            <span className="font-mono text-[11px] text-crimson-600 font-extrabold">0{pIdx + 1}</span>
            <span className="whitespace-nowrap">{p.title.split(" ")[0]}</span>
          </a>
        ))}
      </div>

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

          {/* 5 İlke Kartları — Canlı Kırmızı Vurgulu ve Prestijli Düzen */}
          <div className="space-y-6 sm:space-y-8">
            {principles.map((p, pIdx) => (
              <div
                key={p.step}
                id={`ilke-${p.step}`}
                className="rounded-2xl bg-white border border-cobalt-900/10 shadow-sm p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:border-crimson-500/50 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden group scroll-mt-24"
              >
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-crimson-600 via-cobalt-600 to-crimson-600 opacity-100" />
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                  {/* Sol Başlık Kolonu */}
                  <div className="lg:col-span-4">
                    <div className="flex items-center gap-2.5 mb-3">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-crimson-600 text-white text-xs font-black shadow-crimson group-hover:scale-105 transition-transform">
                        0{pIdx + 1}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-crimson-700 bg-crimson-50 px-2.5 py-0.5 rounded-full border border-crimson-200/50">
                        <span className="h-1.5 w-1.5 rounded-full bg-crimson-600 animate-pulse" />
                        <span>Standart İlke</span>
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-extrabold text-ink tracking-tight leading-snug group-hover:text-cobalt-950 transition-colors">
                      {p.title}
                    </h3>
                  </div>

                  {/* Sağ Maddeler — Kutu İçinde Kutu Değil, Ferah 2 Kolonlu Liste */}
                  <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                    {p.items.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-crimson-600 shrink-0 mt-0.5" />
                        <div>
                          <h4 className="text-[15px] sm:text-base font-bold text-cobalt-950 leading-snug">
                            {item.title}
                          </h4>
                          <p className="text-[14px] sm:text-[15px] text-ink-muted leading-relaxed mt-1.5">
                            {item.detail}
                          </p>
                        </div>
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
            <p className="text-base sm:text-lg text-cobalt-100 font-medium leading-relaxed mt-4 max-w-4xl">
              {whyDifferentContent.pedagogicalOutcome.body}
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
