"use client";

import React from "react";
import Link from "next/link";
import { Check, ArrowRight, Sparkles, Compass } from "lucide-react";
import { educationModelContent, whyDifferentContent } from "@/data/content";
import { assetPath, getWhatsAppUrl } from "@/config/site";
import {
  MaskedLines,
  Reveal,
  PhotoFrame,
  NextChapterBanner,
} from "@/components/motion/Primitives";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export default function EgitimModelimizPage() {
  const sections = educationModelContent.sections;

  return (
    <div className="bg-paper text-ink">
      <Breadcrumbs items={[{ label: "Eğitim Modelimiz" }]} />

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
                <span>{educationModelContent.eyebrow}</span>
              </div>

              <MaskedLines
                as="h1"
                className="text-[2.05rem] sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.12] text-white"
                lines={[educationModelContent.headline]}
              />

              <p className="mt-5 text-base sm:text-lg text-cobalt-50 leading-relaxed max-w-2xl">
                {educationModelContent.lead}
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
                  href="#model-asamalari"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white px-6 py-3.5 text-sm sm:text-base font-bold transition-all"
                >
                  <span>4 Aşamalı Modeli İncele</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 w-full relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/30 via-indigo-400/20 to-sky-300/30 rounded-3xl blur-2xl animate-gentle-glow pointer-events-none" />
              <div className="absolute -top-3.5 right-4 z-20 hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-crimson-600 text-white font-black text-xs shadow-crimson animate-float-slow">
                <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
                <span>Bütüncül VIP Sistem</span>
              </div>
              <PhotoFrame
                src={assetPath("/images/vip-mentorship.jpg")}
                alt={educationModelContent.headline}
                aspectClass="aspect-[16/10] sm:aspect-[4/3]"
                priority
                className="relative z-10 shadow-studio"
                caption={
                  <div className="flex items-center justify-between text-xs font-bold text-cobalt-950 px-1">
                    <span className="flex items-center gap-1.5">
                      <Compass className="h-4 w-4 text-cobalt-700" />
                      VIP Süreç Yönetimi
                    </span>
                    <span className="text-cobalt-700 font-extrabold">Birebir Koçluk</span>
                  </div>
                }
              />
            </div>
          </div>

          {/* Hero Tabanı: 4 Aşamalı Model Şeridi (Mobilde Asla Sıkışmayan Orantılı Düzen) */}
          <div className="mt-10 pt-8 border-t border-white/15 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="p-3.5 sm:p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-3.5">
              <span className="font-brand text-2xl sm:text-3xl font-extrabold text-white">01</span>
              <div className="text-xs sm:text-[13px] text-cobalt-100 leading-snug">
                <strong className="text-white block font-bold">VIP Süreç</strong>
                Kişiye özel yol haritası
              </div>
            </div>
            <div className="p-3.5 sm:p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-3.5">
              <span className="font-brand text-2xl sm:text-3xl font-extrabold text-white">02</span>
              <div className="text-xs sm:text-[13px] text-cobalt-100 leading-snug">
                <strong className="text-white block font-bold">Eğitim Koçluğu</strong>
                Zaman ve sınav stratejisi
              </div>
            </div>
            <div className="p-3.5 sm:p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-3.5">
              <span className="font-brand text-2xl sm:text-3xl font-extrabold text-white">03</span>
              <div className="text-xs sm:text-[13px] text-cobalt-100 leading-snug">
                <strong className="text-white block font-bold">Temel Taşlar</strong>
                Birebir tam öğrenme modeli
              </div>
            </div>
            <div className="p-3.5 sm:p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-3.5">
              <span className="font-brand text-2xl sm:text-3xl font-extrabold text-white">04</span>
              <div className="text-xs sm:text-[13px] text-cobalt-100 leading-snug">
                <strong className="text-white block font-bold">Güçlü Köprü</strong>
                Aile, veli ve okul iş birliği
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Dört Temel Aşama — Mimari ve Ferah Düzen (Kutucuk Yığını Yok!) */}
      <section id="model-asamalari" className="py-12 sm:py-16 lg:py-24 scroll-mt-20">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Sol Sütun — Masaüstünde Sabit Model Rehberi */}
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <div className="rounded-2xl bg-white p-6 sm:p-7 border border-cobalt-900/10 shadow-sm">
                <span className="text-xs font-extrabold uppercase tracking-widest text-crimson-600">
                  Bütüncül Sistem
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-ink tracking-tight mt-1">
                  Modelin 4 Temel Ayağı
                </h2>
                <p className="mt-2 text-sm text-ink-muted leading-relaxed">
                  Ezberci kalıpları yıkan, kişiye özel kurgulanmış adımlarla başarıyı tesadüfe bırakmıyoruz.
                </p>

                {/* Hızlı Atlama Menüsü */}
                <nav className="mt-6 space-y-2 border-t border-cobalt-900/10 pt-5">
                  {sections.map((sec, idx) => (
                    <a
                      key={sec.code}
                      href={`#asama-${sec.code}`}
                      className="group flex items-center justify-between p-2.5 rounded-xl hover:bg-cobalt-50 transition-colors text-xs sm:text-sm font-bold text-ink"
                    >
                      <span className="flex items-center gap-2.5">
                        <span className="h-6 w-6 rounded-md bg-cobalt-100 group-hover:bg-cobalt-700 group-hover:text-white text-cobalt-800 flex items-center justify-center text-xs font-extrabold transition-colors">
                          0{idx + 1}
                        </span>
                        <span>{sec.shortTitle}</span>
                      </span>
                      <ArrowRight className="h-3.5 w-3.5 text-cobalt-400 group-hover:translate-x-1 group-hover:text-cobalt-700 transition-all" />
                    </a>
                  ))}
                </nav>

                <div className="mt-6 pt-5 border-t border-cobalt-900/10">
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-cobalt-900 hover:bg-cobalt-800 text-white py-3 px-4 text-xs sm:text-sm font-bold transition-colors"
                  >
                    <span>30 Dk Ücretsiz Tanışma Planla</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Sağ Sütun — 4 Aşamanın Akıcı ve Prestijli Okuma Alanı */}
            <div className="lg:col-span-8 space-y-8 sm:space-y-12">
              {sections.map((sec, idx) => (
                <article
                  key={sec.code}
                  id={`asama-${sec.code}`}
                  className="rounded-2xl bg-white p-6 sm:p-9 lg:p-10 border border-cobalt-900/10 shadow-sm scroll-mt-24"
                >
                  {/* Aşama Başlık Alanı */}
                  <div className="flex items-start justify-between gap-4 pb-6 border-b border-cobalt-900/10">
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-crimson-50 text-crimson-700 text-xs font-black mb-3 border border-crimson-200/50">
                        <span className="h-2 w-2 rounded-full bg-crimson-600" />
                        <span>Aşama 0{idx + 1}</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl lg:text-[1.75rem] font-extrabold text-ink tracking-tight leading-snug">
                        {sec.title}
                      </h3>
                    </div>

                    <span className="hidden sm:block font-brand text-4xl lg:text-5xl font-black text-crimson-600/15 select-none shrink-0">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Vurgulu Giriş Cümlesi */}
                  {sec.intro ? (
                    <div className="mt-5 p-4 sm:p-5 rounded-xl bg-paper-warm border-l-4 border-crimson-600">
                      <p className="text-[15px] sm:text-base font-semibold text-cobalt-950 leading-relaxed">
                        {sec.intro}
                      </p>
                    </div>
                  ) : null}

                  {/* Maddeler — Ferah, Şık ve Kutusuz Liste */}
                  <div className="mt-6 space-y-5">
                    {sec.points.map((pt, pIdx) => (
                      <div
                        key={pIdx}
                        className="flex items-start gap-3.5 pb-4 border-b border-cobalt-900/5 last:border-none last:pb-0"
                      >
                        {pt.label ? (
                          <>
                            <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-crimson-600 text-white text-xs font-black shadow-crimson">
                              {pIdx + 1}
                            </span>
                            <div className="min-w-0">
                              <h4 className="text-base sm:text-lg font-bold text-ink leading-snug">
                                {pt.label}
                              </h4>
                              <p className="text-[14.5px] sm:text-[15.5px] text-ink-muted mt-1 leading-relaxed">
                                {pt.text}
                              </p>
                            </div>
                          </>
                        ) : (
                          <>
                            <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cobalt-700 text-white shadow-sm">
                              <Check className="h-3 w-3 stroke-[3]" />
                            </span>
                            <p className="text-base sm:text-[16.5px] font-semibold text-ink leading-relaxed">
                              {pt.text}
                            </p>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Bütüncül Başarı Ekosistemi — 4 Yönlü Destek Modeli */}
      <section className="py-14 sm:py-20 bg-cobalt-950 text-white border-t border-cobalt-900 overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cobalt-700/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              BÜTÜNCÜL SİSTEM
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mt-1.5">
              4 Yönlü Başarı Ekosistemi
            </h2>
            <p className="mt-3 text-sm sm:text-base text-cobalt-200 leading-relaxed">
              Öğrenciyi merkezine alan, koçluk ve aile iş birliğiyle desteklenen kusursuz bir başarı köprüsü.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-crimson-500/60 hover:bg-white/10 hover:-translate-y-2 transition-all duration-300 group">
              <div className="h-10 w-10 rounded-xl bg-crimson-600 text-white flex items-center justify-center font-black text-sm mb-4 shadow-crimson group-hover:scale-105 transition-transform">
                01
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Uzman Branş Öğretmeni</h3>
              <p className="text-xs sm:text-sm text-cobalt-200 leading-relaxed">
                Maarif Modeline hâkim uzmanlıkla, öğrencinin anlama hızına göre birebir anlatım ve Active Recall teknikleri.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-crimson-500/60 hover:bg-white/10 hover:-translate-y-2 transition-all duration-300 group">
              <div className="h-10 w-10 rounded-xl bg-crimson-600 text-white flex items-center justify-center font-black text-sm mb-4 shadow-crimson group-hover:scale-105 transition-transform">
                02
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Eğitim Koçu & Mentorluk</h3>
              <p className="text-xs sm:text-sm text-cobalt-200 leading-relaxed">
                Zaman yönetimi, sınav stratejisi ve kaygı kontrolüyle motivasyonu sürekli zirvede tutan profesyonel rehberlik.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-crimson-500/60 hover:bg-white/10 hover:-translate-y-2 transition-all duration-300 group">
              <div className="h-10 w-10 rounded-xl bg-crimson-600 text-white flex items-center justify-center font-black text-sm mb-4 shadow-crimson group-hover:scale-105 transition-transform">
                03
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Şeffaf Veli İletişimi</h3>
              <p className="text-xs sm:text-sm text-cobalt-200 leading-relaxed">
                Her ders bitiminde WhatsApp üzerinden detaylı ders sonu raporu ve aylık periyotlarla somut net artış analizleri.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-crimson-500/60 hover:bg-white/10 hover:-translate-y-2 transition-all duration-300 group">
              <div className="h-10 w-10 rounded-xl bg-crimson-600 text-white flex items-center justify-center font-black text-sm mb-4 shadow-crimson group-hover:scale-105 transition-transform">
                04
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Okul & Sınav Uyumu</h3>
              <p className="text-xs sm:text-sm text-cobalt-200 leading-relaxed">
                Okul yazılı sınavları, LGS/YKS/KPSS takvimi ve MEB kazanımlarıyla %100 eşzamanlı ve planlı ilerleyiş.
              </p>
            </div>
          </div>
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
