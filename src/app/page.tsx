"use client";

import React from "react";
import Link from "next/link";
import { BookOpen, Compass, ShieldCheck, MapPin } from "lucide-react";
import { assetPath, getWhatsAppUrl } from "@/config/site";
import {
  founderMessage,
  aboutContent,
  programsIntro,
} from "@/data/content";
import {
  MaskedLines,
  Reveal,
  SectionHeader,
  MagneticLink,
  NextChapterBanner,
} from "@/components/motion/Primitives";
import { AybarInstitutionalSeal } from "@/components/brand/AybarCrest";

const GUIDED_SECTIONS = [
  {
    title: "Eğitim Programlarımız",
    description:
      "İlkokuldan üniversiteye sınav hazırlık, okula takviye, 11 dünya dili ve sanat özel derslerimiz.",
    href: "/egitim-programlarimiz",
    icon: BookOpen,
  },
  {
    title: "Eğitim Modelimiz",
    description:
      "Kişiye özel VIP Süreç Yönetimi, eğitim koçluğu ve aile-okul iş birliği modelimiz.",
    href: "/egitim-modelimiz",
    icon: Compass,
  },
  {
    title: "Neden Farklıyız?",
    description:
      "30 dakikalık ücretsiz tanışma seansından kişiye özel hata defterine 5 standart ilkemiz.",
    href: "/neden-farkliyiz",
    icon: ShieldCheck,
  },
  {
    title: "Hakkımızda & Hizmet Ağımız",
    description:
      "33 yıllık köklü eğitim deneyimimiz, İstanbul yüz yüze ve tüm Türkiye online ders imkânımız.",
    href: "/hakkimizda",
    icon: MapPin,
  },
] as const;

export default function HomePage() {
  return (
    <div className="bg-paper text-ink">
      {/* 1. Clean, Breathing Cobalt Hero */}
      <section className="studio-hero text-white py-12 sm:py-16 lg:py-20 border-b border-white/15">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column */}
            <div className="lg:col-span-6 min-w-0">
              <div className="inline-flex items-center rounded-full bg-white/12 border border-white/25 px-4 py-1.5 text-xs sm:text-sm font-semibold text-white mb-6">
                Yeni Nesil Maarif Modeline Hâkim Uzman Kadro
              </div>

              <MaskedLines
                as="h1"
                immediate
                className="text-[2.25rem] sm:text-5xl lg:text-[3.6rem] font-extrabold tracking-tightest leading-[1.1]"
                lines={[
                  "Her Öğrenciye",
                  "Aynı Eğitim Değil,",
                  <span
                    key="dogru-egitim"
                    className="inline-block bg-crimson-600 text-white px-3.5 py-0.5 rounded-md mt-1"
                  >
                    Doğru Eğitim.
                  </span>,
                ]}
              />

              <p className="mt-5 text-base sm:text-lg text-cobalt-50/95 leading-relaxed">
                {aboutContent.introParagraphs[0]}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3.5">
                <MagneticLink
                  href={getWhatsAppUrl()}
                  external
                  variant="crimson"
                >
                  Ücretsiz Tanışma Seansı
                </MagneticLink>
                <MagneticLink
                  href="/egitim-programlarimiz"
                  variant="outline-light"
                >
                  Eğitim Programlarımız
                </MagneticLink>
              </div>
            </div>

            {/* Right Column — Single Clean White-Framed Photograph */}
            <div className="lg:col-span-6 min-w-0">
              <Reveal delay={0.1}>
                <div className="bg-white p-2.5 sm:p-3.5 rounded-2xl shadow-studio">
                  <img
                    src={assetPath("/images/hero-one-on-one.jpg")}
                    alt="AYBAR AKADEMİ Birebir Özel Ders"
                    className="w-full aspect-[4/3] object-cover rounded-xl"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Adım Adım Keşfedin: Temel Bölümlerimiz */}
      <section className="py-14 sm:py-20 bg-white border-b border-cobalt-900/10">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">
          <SectionHeader
            eyebrow="TEMEL BÖLÜMLERİMİZ"
            title="Neyi İncelemek İstersiniz?"
            subtitle="İhtiyacınız olan bölüme tek dokunuşla geçerek detayları sade ve anlaşılır şekilde inceleyebilirsiniz."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {GUIDED_SECTIONS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.href} delay={idx * 0.06} className="h-full">
                  <Link
                    href={item.href}
                    className="group h-full p-6 rounded-2xl border border-cobalt-900/12 bg-paper hover:border-cobalt-700 hover:shadow-card transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="h-11 w-11 rounded-xl bg-cobalt-50 border border-cobalt-900/10 text-cobalt-700 flex items-center justify-center mb-5 group-hover:bg-cobalt-700 group-hover:text-white transition-colors">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-extrabold tracking-tight text-ink group-hover:text-cobalt-800 transition-colors">
                        {item.title}
                      </h3>
                      <p className="mt-2.5 text-sm sm:text-[15px] text-ink-muted leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-cobalt-900/10">
                      <span className="inline-flex items-center text-sm font-bold text-cobalt-700 group-hover:text-crimson-600 transition-colors">
                        İncele →
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Sunduğumuz Çözümler & Maarif Modeli Uyumu */}
      <section className="py-14 sm:py-20 bg-paper border-b border-cobalt-900/10">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Visual Card */}
            <div className="lg:col-span-5 lg:sticky lg:top-24">
              <Reveal>
                <div className="rounded-2xl bg-white p-3 sm:p-4 border border-cobalt-900/10 shadow-card">
                  <img
                    src={assetPath("/images/maarif-student.jpg")}
                    alt="AYBAR AKADEMİ Yeni Nesil Maarif Modeline Uyumlu Özel Ders"
                    className="w-full aspect-[4/3] sm:aspect-[4/4.2] object-cover rounded-xl"
                  />
                  <div className="pt-4 pb-1.5 px-1.5">
                    <div className="text-xs sm:text-[13px] font-extrabold tracking-wide text-crimson-600">
                      {aboutContent.reachHeadline}
                    </div>
                    <p className="mt-1 text-sm sm:text-[15px] font-bold text-cobalt-900 leading-snug">
                      İstanbul’un Tüm İlçelerinde Yüz Yüze · Tüm Türkiye’de Canlı Online
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Solutions Column */}
            <div className="lg:col-span-7">
              <Reveal>
                <div className="inline-flex items-center gap-2.5 mb-3">
                  <span className="h-2 w-2 bg-crimson-600 inline-block" />
                  <span className="text-xs sm:text-[13px] font-extrabold tracking-[0.12em] uppercase text-cobalt-700">
                    {aboutContent.eyebrow}
                  </span>
                </div>

                <h2 className="text-[1.8rem] sm:text-4xl lg:text-[2.65rem] font-extrabold tracking-tightest leading-[1.12] text-ink">
                  33 Yıllık Köklü Eğitim Deneyimi
                </h2>

                <p className="mt-4 text-base sm:text-lg text-ink-muted leading-relaxed">
                  {aboutContent.introParagraphs[1]}
                </p>

                <p className="mt-5 text-[15px] sm:text-base font-semibold text-ink leading-relaxed">
                  {aboutContent.solutionsIntro}
                </p>
              </Reveal>

              <div className="mt-6 space-y-4">
                {aboutContent.solutions.map((solution, idx) => (
                  <Reveal key={solution.index} delay={idx * 0.06}>
                    <div className="rounded-xl bg-white p-5 border border-cobalt-900/10">
                      <div className="flex items-start gap-3.5">
                        <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cobalt-50 text-cobalt-700 font-mono text-xs font-semibold border border-cobalt-900/10 mt-0.5">
                          {solution.index}
                        </span>
                        <div>
                          <h3 className="text-base sm:text-lg font-extrabold tracking-tight text-ink">
                            {solution.title}
                          </h3>
                          <p className="mt-1.5 text-sm sm:text-[15px] text-ink-muted leading-relaxed">
                            {solution.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              <div className="mt-7">
                <Link
                  href="/hakkimizda"
                  className="inline-flex items-center min-h-[44px] text-sm sm:text-base font-bold text-cobalt-700 hover:text-crimson-600 transition-colors"
                >
                  Hakkımızda Sayfasının Tamamını Gör →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Kurucumuzun Mesajı (Bahadır AYBAR) */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Institutional Seal Card */}
            <div className="lg:col-span-4 lg:sticky lg:top-24">
              <Reveal>
                <div className="rounded-2xl bg-paper p-7 border border-cobalt-900/10 text-center">
                  <div className="flex justify-center">
                    <AybarInstitutionalSeal variant="light" />
                  </div>
                  <div className="mt-6 pt-5 border-t border-cobalt-900/10">
                    <div className="text-xl font-extrabold tracking-tight text-ink">
                      {founderMessage.author}
                    </div>
                    <div className="mt-1 text-sm font-medium text-ink-muted">
                      {founderMessage.role}
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Editorial Letter */}
            <div className="lg:col-span-8">
              <Reveal>
                <div className="inline-flex items-center gap-2.5 mb-4">
                  <span className="h-2 w-2 bg-crimson-600 inline-block" />
                  <span className="text-xs sm:text-[13px] font-extrabold tracking-[0.12em] uppercase text-cobalt-700">
                    {founderMessage.eyebrow}
                  </span>
                </div>

                <p className="text-lg sm:text-xl font-bold text-ink leading-snug">
                  {founderMessage.salutation}
                </p>

                <div className="mt-6 text-[15.5px] sm:text-[17px] leading-relaxed text-ink-muted space-y-4">
                  {founderMessage.paragraphs.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-cobalt-900/10">
                  <p className="font-serif italic text-base sm:text-lg text-ink">
                    {founderMessage.closing}
                  </p>
                  <div className="mt-3">
                    <div className="text-base sm:text-lg font-extrabold text-cobalt-900">
                      {founderMessage.author}
                    </div>
                    <div className="text-sm font-medium text-ink-muted">
                      {founderMessage.role}
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Next Chapter Banner */}
      <NextChapterBanner
        title="Eğitim Programlarımızı İnceleyin"
        description={programsIntro.closing}
        href="/egitim-programlarimiz"
        buttonLabel="Eğitim Programlarımız"
      />
    </div>
  );
}
