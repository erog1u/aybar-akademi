"use client";

import React from "react";
import Link from "next/link";
import { PhotoFrame } from "@/components/motion/Primitives";
import PageHero, { SectionHeading, SloganMark } from "@/components/layout/PageHero";
import HomeSloganSlider from "@/components/home/HomeSloganSlider";
import { QuoteRequestSection } from "@/components/forms/QuickQuoteForm";
import { assetPath } from "@/config/site";
import BrandText from "@/components/brand/BrandText";

const YELPAZE = [
  <>
    <strong className="font-bold text-ink">Sınav Hazırlık: LGS ve YKS (TYT-AYT)</strong> odaklı nokta atışı <strong className="font-bold text-ink">koçluk</strong> ve <strong className="font-bold text-ink">birebir özel ders</strong> programları
  </>,
  <>
    <strong className="font-bold text-ink">Okul Destek Takviyeleri:</strong> İlkokuldan üniversiteye kadar tüm sınıflarda okul başarısını artıran özel dersler (Maarif Modeline uyumlu yeni nesil özel dersler)
  </>,
  <>
    <strong className="font-bold text-ink">Kariyer Sınavları: KPSS ve ALES</strong> hazırlığa yönelik özel dersler
  </>,
  <>
    <strong className="font-bold text-ink">Yabancı Dil ve Kişisel Gelişim:</strong> Çocuklar ve yetişkinler için yabancı dil programları, <strong className="font-bold text-ink">sürücü eğitimleri</strong>, <strong className="font-bold text-ink">sanat</strong> ile <strong className="font-bold text-ink">spor</strong> branşları ile ilgili birebir özel dersler
  </>,
];

export default function HomePage() {
  return (
    <div className="bg-paper text-ink">
      <PageHero
        title={
          <>
            Eğitimde Güvenin,<br />Başarıda <SloganMark>Uzmanlığın Adresi</SloganMark>
          </>
        }
        subtitle="33 Yıllık Tecrübe, Birebir ve Özel Çözümler, Yüz Yüze ve Online Eğitim"
        wideMedia
        actions={
          <>
            <Link
              href="#teklif"
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-crimson-600 px-5 text-sm font-extrabold text-white hover:bg-crimson-700 sm:text-base"
            >
              Hemen Hızlı Teklif Alın!
            </Link>
            <Link
              href="/egitim-programlarimiz"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/30 px-5 text-sm font-bold text-white hover:bg-white/10 sm:text-base"
            >
              Eğitim Programlarımız
            </Link>
          </>
        }
        media={<HomeSloganSlider />}
      />

      <QuoteRequestSection />

      <section className="border-b border-cobalt-900/10 bg-paper py-12 sm:py-16">
        <div className="mx-auto grid max-w-[1380px] grid-cols-1 items-start gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-5">
            <PhotoFrame
              src={assetPath("/images/hero-one-on-one.jpg")}
              alt="Kadın öğretmen ve kız öğrenci birebir ders çalışırken"
              aspectClass="aspect-[4/3]"
            />
          </div>
          <div className="lg:col-span-7">
            <p className="text-base leading-relaxed text-ink-muted">
              Her öğrencinin öğrenme hızı, potansiyeli ve hedefleri parmak izi gibi tektir. <BrandText>AYBARİst AKADEMİ</BrandText> olarak; 33 yıllık köklü birikimimiz ve alanında uzman ve yeni nesil Maarif Modeline hâkim öğretmen kadromuzla, ezberci yaklaşımlardan uzak, tamamen öğrenciye özel eğitim modelleri sunuyoruz.
            </p>
            <p className="mt-3 text-base leading-relaxed text-ink-muted">
              Amacımız yalnızca sınavlara hazırlamak değil; öğrencinin öğrenme tutkusunu canlandırmak ve onu hedeflerine en sağlam adımlarla ulaştırmaktır.
            </p>
            <div className="mt-8">
              <SectionHeading>
                Geniş Eğitim Yelpazemiz
              </SectionHeading>
            </div>
            <ul className="mt-5 space-y-3 text-base leading-relaxed text-ink-muted">
              {YELPAZE.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
            <div className="mt-8">
              <SectionHeading>
                Kesintisiz Eğitim: Yüz Yüze ve Online Seçeneği
              </SectionHeading>
            </div>
            <ul className="mt-5 space-y-3 text-base leading-relaxed text-ink-muted">
              <li>
                <strong className="font-bold text-ink">İstanbul Geneli Yüz Yüze Eğitim:</strong> Şehrin dilediğiniz noktasında, uzman öğretmenlerimizle bire bir yüz yüze ders imkanı.
              </li>
              <li>
                <strong className="font-bold text-ink">Türkiye Geneli Online Eğitim:</strong> Nerede olursanız olun, dijital platformlar üzerinden sınırsız ve kaliteli canlı dersler.
              </li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
}
