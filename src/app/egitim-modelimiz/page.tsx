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
      <section className="studio-hero text-white border-b border-white/15 overflow-hidden py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/12 border border-white/25 text-white text-xs sm:text-[13px] font-bold tracking-wider uppercase mb-5">
                <span className="h-2 w-2 rounded-full bg-crimson-500" />
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
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-crimson-600 hover:bg-crimson-700 text-white px-6 py-3.5 text-sm sm:text-base font-bold shadow-crimson transition-all"
                >
                  <span>Ücretsiz Tanışma Seansı Planla</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#model-asamalari"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white px-6 py-3.5 text-sm sm:text-base font-bold transition-all"
                >
                  <span>4 Aşamalı Modeli İncele</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 w-full">
              <PhotoFrame
                src={assetPath("/images/vip-mentorship.jpg")}
                alt={educationModelContent.headline}
                aspectClass="aspect-[16/10] sm:aspect-[4/3]"
                priority
                caption={
                  <div className="flex items-center justify-between text-xs font-bold text-cobalt-950 px-1">
                    <span className="flex items-center gap-1.5">
                      <Compass className="h-4 w-4 text-crimson-600" />
                      VIP Süreç Yönetimi
                    </span>
                    <span className="text-cobalt-700 font-extrabold">Birebir Koçluk</span>
                  </div>
                }
              />
            </div>
          </div>

          {/* Hero Tabanı: 4 Aşamalı Model Şeridi */}
          <div className="mt-10 pt-8 border-t border-white/15 grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center gap-3.5">
              <span className="font-brand text-2xl sm:text-3xl font-extrabold text-white">01</span>
              <div className="text-xs sm:text-[13px] text-cobalt-100 leading-snug">
                <strong className="text-white block font-bold">VIP Süreç</strong>
                Kişiye özel yol haritası
              </div>
            </div>
            <div className="flex items-center gap-3.5">
              <span className="font-brand text-2xl sm:text-3xl font-extrabold text-white">02</span>
              <div className="text-xs sm:text-[13px] text-cobalt-100 leading-snug">
                <strong className="text-white block font-bold">Eğitim Koçluğu</strong>
                Zaman ve sınav stratejisi
              </div>
            </div>
            <div className="flex items-center gap-3.5">
              <span className="font-brand text-2xl sm:text-3xl font-extrabold text-white">03</span>
              <div className="text-xs sm:text-[13px] text-cobalt-100 leading-snug">
                <strong className="text-white block font-bold">Temel Taşlar</strong>
                Birebir tam öğrenme modeli
              </div>
            </div>
            <div className="flex items-center gap-3.5">
              <span className="font-brand text-2xl sm:text-3xl font-extrabold text-crimson-400">04</span>
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
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cobalt-50 text-cobalt-800 text-xs font-extrabold mb-3">
                        <span className="h-2 w-2 rounded-full bg-crimson-600" />
                        <span>Aşama 0{idx + 1}</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl lg:text-[1.75rem] font-extrabold text-ink tracking-tight leading-snug">
                        {sec.title}
                      </h3>
                    </div>

                    <span className="hidden sm:block font-brand text-4xl lg:text-5xl font-extrabold text-cobalt-900/15 select-none shrink-0">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Vurgulu Giriş Cümlesi */}
                  {sec.intro ? (
                    <div className="mt-5 p-4 sm:p-5 rounded-xl bg-paper-warm border-l-4 border-cobalt-700">
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
                            <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-cobalt-100 text-cobalt-800 text-xs font-extrabold">
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
                            <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-crimson-600 text-white">
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

      <NextChapterBanner
        title={whyDifferentContent.headline}
        description={whyDifferentContent.lead}
        href="/neden-farkliyiz"
        buttonLabel="Neden Farklıyız?"
      />
    </div>
  );
}
