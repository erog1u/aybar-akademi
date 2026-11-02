"use client";

import React from "react";
import Link from "next/link";
import {
  BookOpen,
  Compass,
  ShieldCheck,
  MapPin,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
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
      "İlkokuldan üniversiteye sınav hazırlık, okula takviye, 11 dünya dili ve sanat derslerimiz.",
    href: "/egitim-programlarimiz",
    icon: BookOpen,
  },
  {
    badge: "02 · VIP SÜREÇ",
    title: "Eğitim Modelimiz",
    description:
      "Kişiye özel VIP Süreç Yönetimi, eğitim koçluğu ve aile-veli-okul köprüsü modelimiz.",
    href: "/egitim-modelimiz",
    icon: Compass,
  },
  {
    badge: "03 · TAM ÖĞRENME",
    title: "Neden Farklıyız?",
    description:
      "30 dakikalık ücretsiz tanışma seansından öğrenciye özel hata defterine 5 standart ilkemiz.",
    href: "/neden-farkliyiz",
    icon: ShieldCheck,
  },
  {
    badge: "04 · KURUMSAL",
    title: "Hakkımızda",
    description:
      "33 yıllık köklü deneyimimiz, İstanbul 39 ilçe yüz yüze ve 81 il canlı online eğitim ağımız.",
    href: "/hakkimizda",
    icon: MapPin,
  },
] as const;

export default function HomePage() {
  return (
    <div className="bg-paper text-ink">
      {/* 1. Ferah, Güçlü ve Modern Cobalt Hero */}
      <section className="studio-hero text-white py-12 sm:py-16 lg:py-20 border-b border-white/15 overflow-hidden">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Sol Sütun */}
            <div className="lg:col-span-6 min-w-0">
              <Reveal immediate y={10}>
                <div className="inline-flex items-center gap-2 rounded-full bg-white/12 border border-white/25 px-4 py-1.5 text-xs sm:text-sm font-bold text-white mb-6 max-w-full">
                  <span className="h-2 w-2 rounded-full bg-crimson-500 shrink-0" />
                  <span>33 Yıllık Köklü Eğitim Deneyimi · %100 Maarif Uyumu</span>
                </div>
              </Reveal>

              <MaskedLines
                as="h1"
                immediate
                className="text-[2.15rem] sm:text-5xl lg:text-[3.75rem] font-extrabold tracking-tight leading-[1.08]"
                lines={[
                  "Her Öğrenciye",
                  <span key="ayni-egitim" className="text-cobalt-200">
                    Aynı Eğitim Değil,
                  </span>,
                  <span
                    key="dogru-egitim"
                    className="inline-block bg-crimson-600 text-white px-4 py-1 rounded-xl mt-1.5 shadow-crimson animate-shimmer"
                  >
                    Doğru Eğitim.
                  </span>,
                ]}
              />

              <Reveal immediate delay={0.14} y={12}>
                <p className="mt-6 text-base sm:text-lg text-cobalt-100 leading-relaxed max-w-xl">
                  Öğrencinin anlama hızına ve hedeflerine özel kurgulanmış{" "}
                  <strong className="text-white font-extrabold">birebir VIP özel ders</strong> ve{" "}
                  <strong className="text-white font-extrabold">eğitim koçluğu</strong>; İstanbul’un tüm ilçelerinde evinizde yüz yüze, tüm Türkiye’de canlı online.
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

            {/* Sağ Sütun — Doğru Oranlanmış Görsel Stüdyo Kartı */}
            <div className="lg:col-span-6 min-w-0">
              <PhotoFrame
                src={assetPath("/images/hero-one-on-one.jpg")}
                alt="AYBAR AKADEMİ Birebir Özel Ders"
                aspectClass="aspect-[4/3]"
                priority
                caption={
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs sm:text-[13px] font-bold">
                    <span className="text-cobalt-950">
                      İstanbul’un 39 İlçesinde Yüz Yüze
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-crimson-50 text-crimson-700">
                      Tüm Türkiye’de Canlı Online
                    </span>
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Temiz ve Ferah Yönlendirme Kartları */}
      <section className="py-12 sm:py-16 bg-white border-b border-cobalt-900/10">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">
          <SectionHeader
            eyebrow="HIZLI KEŞİF"
            title="İncelemek İstediğiniz Bölümü Seçin"
            subtitle="İhtiyacınız olan alana doğrudan geçerek detayları inceleyebilirsiniz."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {GUIDED_SECTIONS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.href} delay={idx * 0.05} className="h-full">
                  <Link
                    href={item.href}
                    className="group h-full rounded-2xl border border-cobalt-900/10 bg-paper hover:bg-white hover:border-cobalt-700 hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between p-6"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <span className="h-11 w-11 rounded-xl bg-cobalt-50 text-cobalt-700 group-hover:bg-cobalt-700 group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                          <Icon className="h-5 w-5" />
                        </span>
                        <span className="px-2.5 py-0.5 rounded-md bg-cobalt-50 text-cobalt-900 text-xs font-bold">
                          {item.badge}
                        </span>
                      </div>

                      <h3 className="text-lg font-extrabold text-ink group-hover:text-cobalt-700 transition-colors">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm text-ink-muted leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-cobalt-900/10 flex items-center justify-between text-xs sm:text-sm font-bold text-cobalt-700 group-hover:text-crimson-600 transition-colors">
                      <span>İncele</span>
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. 33 Yıllık Deneyim & Çözümlerimiz */}
      <section className="py-14 sm:py-20 bg-paper border-b border-cobalt-900/10">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Sol Sütun — Doğru Oranlanmış Portre Görsel (Kız Öğrenci) */}
            <div className="lg:col-span-5 space-y-5 lg:sticky lg:top-24">
              <PhotoFrame
                src={assetPath("/images/maarif-student.jpg")}
                alt={aboutContent.headline}
                aspectClass="aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4]"
                objectPosition="object-top"
                caption={
                  <div className="flex items-center justify-between text-xs font-bold text-cobalt-950 px-1">
                    <span className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-crimson-600" />
                      Türkiye Yüzyılı Maarif Modeli
                    </span>
                    <span className="text-crimson-600 font-extrabold">%100 Uyum</span>
                  </div>
                }
              />

              <Reveal delay={0.08}>
                <div className="rounded-2xl bg-cobalt-950 text-white p-5 sm:p-6 shadow-sm border border-cobalt-800">
                  <div className="text-xs font-bold uppercase tracking-wider text-crimson-400 mb-2">
                    Eğitimde Sınır Tanımıyoruz
                  </div>
                  <div className="space-y-2.5 text-sm leading-relaxed text-cobalt-100">
                    <div>
                      <strong className="text-white block font-bold">
                        {aboutContent.reachItems[0].title}
                      </strong>
                      <span className="text-cobalt-200 text-xs sm:text-sm">
                        {aboutContent.reachItems[0].description}
                      </span>
                    </div>
                    <div className="pt-2 border-t border-white/10">
                      <strong className="text-white block font-bold">
                        {aboutContent.reachItems[1].title}
                      </strong>
                      <span className="text-cobalt-200 text-xs sm:text-sm">
                        {aboutContent.reachItems[1].description}
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Sağ Sütun — Temiz ve Net Çözümler */}
            <div className="lg:col-span-7">
              <Reveal>
                <div className="inline-flex items-center gap-2 mb-2.5">
                  <span className="h-2 w-2 rounded-full bg-crimson-600 inline-block" />
                  <span className="text-xs font-bold tracking-wider uppercase text-cobalt-700">
                    {aboutContent.eyebrow}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-ink">
                  {aboutContent.headline}
                </h2>

                <p className="mt-4 text-base sm:text-lg text-ink-muted leading-relaxed">
                  Eğitim yalnızca ders anlatmaktan ibaret değildir; doğru rehberlik, sürekli takip ve disiplinli bir çalışma ortamı başarının vazgeçilmez unsurlarıdır.
                </p>
              </Reveal>

              <div className="mt-6 space-y-3.5">
                {aboutContent.solutions.map((solution, idx) => (
                  <Reveal key={solution.index} delay={idx * 0.05}>
                    <div className="rounded-xl bg-white p-5 border border-cobalt-900/10 hover:border-cobalt-700/40 transition-colors">
                      <div className="flex items-start gap-3.5">
                        <span
                          className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-extrabold ${
                            idx === 0
                              ? "bg-crimson-600 text-white"
                              : "bg-cobalt-700 text-white"
                          }`}
                        >
                          {solution.index}
                        </span>
                        <div>
                          <h3 className="text-base sm:text-lg font-bold text-ink">
                            {solution.title}
                          </h3>
                          <p className="mt-1 text-sm text-ink-muted leading-relaxed">
                            {solution.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={0.12} className="mt-6">
                <MagneticLink href="/hakkimizda" variant="cobalt">
                  Hakkımızda Sayfasını İncele
                </MagneticLink>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Kurucumuzun Mesajı (Bahadır AYBAR) — Sade, Prestijli ve Göz Yormayan Düzen */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Sol Kurumsal Mühür */}
            <div className="lg:col-span-4 lg:sticky lg:top-24">
              <Reveal>
                <div className="rounded-2xl bg-paper p-6 sm:p-7 border border-cobalt-900/10 text-center">
                  <div className="flex justify-center">
                    <AybarInstitutionalSeal variant="light" />
                  </div>
                  <div className="mt-5 pt-4 border-t border-cobalt-900/10">
                    <div className="font-brand text-lg font-extrabold tracking-wide text-cobalt-950">
                      {founderMessage.author}
                    </div>
                    <div className="mt-0.5 text-xs font-bold text-crimson-600">
                      {founderMessage.role}
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Sağ Kurucu Mektubu — Sözleri Bölmeden, Vurucu Noktaları Vurgulayarak Sunan Prestijli Düzen */}
            <div className="lg:col-span-8">
              <Reveal>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cobalt-50 mb-3">
                  <span className="h-2 w-2 rounded-full bg-crimson-600" />
                  <span className="text-xs font-bold tracking-wider uppercase text-cobalt-800">
                    {founderMessage.eyebrow}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-extrabold text-ink leading-snug">
                  {founderMessage.salutation}
                </h2>

                <div className="mt-5 space-y-4 text-sm sm:text-base text-ink-muted leading-relaxed">
                  <p>
                    Eğitim, bir öğrencinin yalnızca akademik başarısını değil;{" "}
                    <strong className="text-cobalt-950 font-bold">
                      hayata bakışını, karakterini ve geleceğini inşa eden
                    </strong>{" "}
                    en kıymetli süreçtir.
                  </p>

                  <div className="p-4 sm:p-5 rounded-xl bg-cobalt-50 border-l-4 border-cobalt-700 text-cobalt-950">
                    <p className="font-bold text-base sm:text-[17px] mb-1">
                      “33 yıllık eğitim yolculuğumda edindiğim en önemli tecrübe şudur: Her öğrencinin öğrenme hızı, ilgi alanı ve potansiyeli farklıdır.”
                    </p>
                    <p className="text-sm sm:text-base text-cobalt-900 font-medium">
                      Bu nedenle tek tip bir eğitim yaklaşımıyla her öğrencide aynı başarıyı yakalamak mümkün değildir.
                    </p>
                  </div>

                  <p>
                    Aybar Akademi olarak yola çıkarken temel amacımız;{" "}
                    <strong className="text-cobalt-950 font-bold">
                      öğrencinin seviyesini doğru tespit eden, eksiklerini nokta atışı belirleyen
                    </strong>{" "}
                    ve ona en uygun yöntemle rehberlik eden güvenilir bir eğitim modeli sunmaktı.
                  </p>

                  <p>
                    Yeni nesil Maarif Modelinin gerektirdiği beceri temelli yaklaşıma hâkim uzman kadromuzla, öğrencilerimizi sadece sınavlara değil;{" "}
                    <strong className="text-crimson-600 font-extrabold">
                      analitik düşünebilen, problem çözebilen ve özgüveni yüksek bireyler
                    </strong>{" "}
                    olarak geleceğe hazırlıyoruz.
                  </p>
                </div>

                {/* Vurucu Kapanış Alıntısı */}
                <div className="mt-6 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-cobalt-950 to-cobalt-900 text-white shadow-sm border-l-4 border-crimson-500">
                  <p className="text-base sm:text-lg font-medium leading-relaxed text-white">
                    “{founderMessage.paragraphs[4]}”
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-cobalt-900/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <p className="text-xs sm:text-sm text-ink-muted">
                      {founderMessage.closing}
                    </p>
                    <div className="font-brand text-base sm:text-lg font-extrabold text-cobalt-950 mt-1">
                      {founderMessage.author}
                    </div>
                    <div className="text-xs font-semibold text-cobalt-700">
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
