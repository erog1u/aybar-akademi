"use client";

import React from "react";
import Link from "next/link";
import { BookOpen, Compass, ShieldCheck, MapPin, ArrowUpRight } from "lucide-react";
import { assetPath, getWhatsAppUrl } from "@/config/site";
import {
  founderMessage,
  aboutContent,
  programsIntro,
} from "@/data/content";
import {
  MaskedLines,
  Reveal,
  PhotoFrame,
  SectionHeader,
  MagneticLink,
  NextChapterBanner,
} from "@/components/motion/Primitives";
import { AybarInstitutionalSeal } from "@/components/brand/AybarCrest";

const GUIDED_SECTIONS = [
  {
    badge: "01 · ÖZEL DERS",
    title: "Eğitim Programlarımız",
    description:
      "İlkokuldan üniversiteye, ulusal sınavlardan dünya dillerine ve sanat eğitimlerine birebir özel derslerimiz.",
    href: "/egitim-programlarimiz",
    icon: BookOpen,
  },
  {
    badge: "02 · VIP SÜREÇ",
    title: "Eğitim Modelimiz",
    description:
      "Kişiye özel kurgulanmış VIP Süreç Yönetimi, eğitim koçluğu ve aile-veli-okul köprüsü.",
    href: "/egitim-modelimiz",
    icon: Compass,
  },
  {
    badge: "03 · TAM ÖĞRENME",
    title: "Neden Farklıyız?",
    description:
      "30 dakikalık ücretsiz tanışma seansından kişiye özel hata defterine fark yaratan 5 standart ilkemiz.",
    href: "/neden-farkliyiz",
    icon: ShieldCheck,
  },
  {
    badge: "04 · KURUMSAL",
    title: "Hakkımızda",
    description:
      "33 yıllık köklü eğitim deneyimimiz, İstanbul’un tüm ilçelerinde yüz yüze ve tüm Türkiye’de online eğitim.",
    href: "/hakkimizda",
    icon: MapPin,
  },
] as const;

export default function HomePage() {
  return (
    <div className="bg-paper text-ink">
      {/* 1. Canlı, Vurucu ve Ferah Cobalt Hero */}
      <section className="studio-hero text-white py-12 sm:py-16 lg:py-20 border-b border-white/15 overflow-hidden">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Sol Sütun */}
            <div className="lg:col-span-6 min-w-0">
              <Reveal immediate y={10}>
                <div className="inline-flex items-center gap-2 rounded-full bg-white/12 border border-white/25 px-4 py-1.5 text-xs sm:text-sm font-bold text-white mb-6 max-w-full">
                  <span className="h-2 w-2 rounded-full bg-crimson-500 shrink-0" />
                  <span className="sm:hidden">33 Yıllık Köklü Eğitim Deneyimi</span>
                  <span className="hidden sm:inline">33 Yıllık Köklü Eğitim Deneyimi · Maarif Modeline Hâkim Kadro</span>
                </div>
              </Reveal>

              <MaskedLines
                as="h1"
                immediate
                className="text-[2.05rem] sm:text-5xl lg:text-[3.65rem] font-extrabold tracking-tight leading-[1.08]"
                lines={[
                  "Her Öğrenciye",
                  "Aynı Eğitim Değil,",
                  <span
                    key="dogru-egitim"
                    className="inline-block bg-crimson-600 text-white px-4 py-1 rounded-xl mt-1.5 shadow-crimson"
                  >
                    Doğru Eğitim.
                  </span>,
                ]}
              />

              <Reveal immediate delay={0.14} y={12}>
                <p className="mt-6 text-base sm:text-lg text-cobalt-50 leading-relaxed">
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
              </Reveal>
            </div>

            {/* Sağ Sütun — Görsel Stüdyo Kartı */}
            <div className="lg:col-span-6 min-w-0">
              <PhotoFrame
                src={assetPath("/images/hero-one-on-one.jpg")}
                alt="AYBAR AKADEMİ Birebir Özel Ders"
                aspectClass="aspect-[4/3]"
                priority
                caption={
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs sm:text-[13px] font-bold">
                    <span className="text-cobalt-900">
                      İstanbul’un Tüm İlçelerinde Yüz Yüze
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-crimson-50 text-crimson-700">
                      Tüm Türkiye’de Online Eğitim
                    </span>
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Fotoğraflı ve Akıcı Yönlendirme Kartları */}
      <section className="py-14 sm:py-20 bg-white border-b border-cobalt-900/10">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">
          <SectionHeader
            eyebrow="HIZLI KEŞİF"
            title={
              <>
                İncelemek İstediğiniz{" "}
                <span className="text-cobalt-700">Bölümü Seçin</span>
              </>
            }
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {GUIDED_SECTIONS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.href} delay={idx * 0.05} className="h-full">
                  <Link
                    href={item.href}
                    className="group h-full rounded-2xl border border-cobalt-900/12 bg-paper hover:bg-white hover:border-cobalt-700 hover:shadow-studio hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden p-6 sm:p-7"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-5">
                        <span className="h-12 w-12 rounded-xl bg-cobalt-50 text-cobalt-700 group-hover:bg-crimson-600 group-hover:text-white flex items-center justify-center shrink-0 transition-colors shadow-sm">
                          <Icon className="h-6 w-6" />
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-cobalt-50 text-cobalt-900 text-xs font-extrabold tracking-wider">
                          {item.badge}
                        </span>
                      </div>

                      <h3 className="text-xl font-extrabold tracking-tight text-ink group-hover:text-cobalt-800 transition-colors">
                        {item.title}
                      </h3>

                      <p className="mt-2.5 text-[15px] text-ink-muted leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-5 mt-4 border-t border-cobalt-900/10 flex items-center justify-between text-sm font-extrabold text-cobalt-700 group-hover:text-crimson-600 transition-colors">
                      <span>Sayfayı İncele</span>
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Vurucu Cümle + Çift Fotoğraf + Sunduğumuz Çözümler */}
      <section className="py-14 sm:py-20 bg-paper border-b border-cobalt-900/10">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Sol Sütun — Zengin Çift Görsel Kompozisyonu */}
            <div className="lg:col-span-5 space-y-5 lg:sticky lg:top-24">
              <PhotoFrame
                src={assetPath("/images/maarif-student.jpg")}
                alt={aboutContent.headline}
                aspectClass="aspect-[4/3]"
              />

              <Reveal delay={0.08}>
                <div className="rounded-2xl bg-cobalt-900 text-white p-6 shadow-studio border border-cobalt-800">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-crimson-600 text-white text-xs font-extrabold tracking-wide mb-4">
                    {aboutContent.reachHeadline}
                  </div>
                  <div className="space-y-3 text-sm sm:text-[15px] leading-relaxed text-cobalt-100">
                    <div className="p-3.5 rounded-xl bg-white/[0.08] border border-white/10">
                      <strong className="text-white block font-bold mb-1">
                        {aboutContent.reachItems[0].title}
                      </strong>
                      <span>{aboutContent.reachItems[0].description}</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white/[0.08] border border-white/10">
                      <strong className="text-white block font-bold mb-1">
                        {aboutContent.reachItems[1].title}
                      </strong>
                      <span>{aboutContent.reachItems[1].description}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Sağ Sütun — Öne Çıkarılmış Vurucu Cümle & 3 Çözüm */}
            <div className="lg:col-span-7">
              <Reveal>
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="h-2 w-2 rounded-full bg-crimson-600 inline-block" />
                  <span className="text-xs sm:text-[13px] font-extrabold tracking-[0.1em] uppercase text-cobalt-700">
                    {aboutContent.eyebrow}
                  </span>
                </div>

                <h2 className="text-[1.85rem] sm:text-4xl lg:text-[2.65rem] font-extrabold tracking-tight leading-[1.12] text-ink">
                  {aboutContent.headline}
                </h2>

                {/* Vurucu Cümle Bloğu (Birebir Müşteri Metni) */}
                <div className="mt-6 rounded-2xl bg-gradient-to-br from-cobalt-700 to-cobalt-950 text-white p-6 sm:p-7 shadow-card border-l-4 border-crimson-500">
                  <p className="text-base sm:text-[17.5px] font-semibold leading-relaxed text-white">
                    {aboutContent.introParagraphs[1]}
                  </p>
                </div>

                <p className="mt-6 text-[15.5px] sm:text-base font-bold text-cobalt-900 leading-relaxed">
                  {aboutContent.solutionsIntro}
                </p>
              </Reveal>

              <div className="mt-5 space-y-4">
                {aboutContent.solutions.map((solution, idx) => (
                  <Reveal key={solution.index} delay={idx * 0.06}>
                    <div className="group rounded-2xl bg-white p-5 sm:p-6 border border-cobalt-900/12 hover:border-cobalt-700 hover:shadow-card transition-all">
                      <div className="flex items-start gap-4">
                        <span
                          className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-extrabold shadow-sm ${
                            idx === 0
                              ? "bg-crimson-600 text-white"
                              : "bg-cobalt-700 text-white"
                          }`}
                        >
                          {solution.index}
                        </span>
                        <div>
                          <h3 className="text-lg sm:text-xl font-extrabold tracking-tight text-ink group-hover:text-cobalt-800 transition-colors">
                            {solution.title}
                          </h3>
                          <p className="mt-1.5 text-[15px] sm:text-base text-ink-muted leading-relaxed">
                            {solution.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={0.15} className="mt-7">
                <MagneticLink href="/hakkimizda" variant="cobalt">
                  Hakkımızda Sayfasını İncele
                </MagneticLink>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Kurucumuzun Mesajı (Bahadır AYBAR) */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Sol Kurumsal Mühür & Portre/Akademi Kartı */}
            <div className="lg:col-span-4 lg:sticky lg:top-24">
              <Reveal>
                <div className="rounded-2xl bg-paper p-7 border border-cobalt-900/12 shadow-card text-center">
                  <div className="flex justify-center">
                    <AybarInstitutionalSeal variant="light" />
                  </div>
                  <div className="mt-6 pt-5 border-t border-cobalt-900/10">
                    <div className="font-brand text-xl font-extrabold tracking-wide text-cobalt-950">
                      {founderMessage.author}
                    </div>
                    <div className="mt-1 text-sm font-semibold text-crimson-600">
                      {founderMessage.role}
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Sağ Kurucu Mektubu (Birebir Metin + Vurgulu Kapanış Daveti) */}
            <div className="lg:col-span-8">
              <Reveal>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cobalt-50 border border-cobalt-700/15 mb-4">
                  <span className="h-2 w-2 rounded-full bg-crimson-600 inline-block" />
                  <span className="text-xs sm:text-[13px] font-extrabold tracking-[0.1em] uppercase text-cobalt-800">
                    {founderMessage.eyebrow}
                  </span>
                </div>

                <p className="text-lg sm:text-2xl font-extrabold text-cobalt-950 leading-snug">
                  {founderMessage.salutation}
                </p>

                <div className="mt-6 text-[15.5px] sm:text-[17px] leading-relaxed text-ink-muted space-y-4">
                  {founderMessage.paragraphs.slice(0, 4).map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>

                {/* Vurucu Son Paragraf Vurgusu (Birebir Müşteri Cümlesi) */}
                <div className="mt-6 rounded-2xl bg-crimson-50 border-l-4 border-crimson-600 p-5 sm:p-6">
                  <p className="font-serif italic text-base sm:text-lg font-medium text-cobalt-950 leading-relaxed">
                    “{founderMessage.paragraphs[4]}”
                  </p>
                </div>

                <div className="mt-7 pt-6 border-t border-cobalt-900/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <p className="font-serif italic text-base sm:text-lg text-ink">
                      {founderMessage.closing}
                    </p>
                    <div className="mt-2 font-brand text-base sm:text-lg font-extrabold tracking-wide text-cobalt-950">
                      {founderMessage.author}
                    </div>
                    <div className="text-sm font-semibold text-cobalt-700">
                      {founderMessage.role}
                    </div>
                  </div>

                  <MagneticLink
                    href={getWhatsAppUrl()}
                    external
                    variant="crimson"
                  >
                    Ücretsiz Tanışma Seansı
                  </MagneticLink>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <NextChapterBanner
        title={programsIntro.headline}
        description={programsIntro.closing}
        href="/egitim-programlarimiz"
        buttonLabel="Eğitim Programlarımız"
      />
    </div>
  );
}
