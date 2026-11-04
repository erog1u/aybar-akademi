"use client";

import React, { useState } from "react";
import { assetPath } from "@/config/site";

const OPTIONS = [
  {
    id: "orijinal",
    title: "Mevcut Durum: Orijinal Sitedeki Fotoğraf",
    tag: "Referans Görsel",
    src: "/images/founder-bahadir.webp",
    badge: "📌 Orijinal Fotoğraf",
    description:
      "Sitede şu anda yayında olan fotoğraf: Sol arka rafta ZZ salon bitkisi, siyah/beyaz 4 adet kitap ve yeşil yosun topu. AYBARİst AKADEMİ duvar logosu ve ahşap çıtalar orijinal hali.",
  },
  {
    id: "secenek-1",
    title: "Seçenek 1: Lüks Beyaz Orkide & Klasik Ciltli Külliyat",
    tag: "Doğal Beyaz Phalaenopsis",
    src: "/images/founder-secenek-1-orkide.webp",
    badge: "🌸 Beyaz Orkide",
    description:
      "Arka plan oda, akustik ceviz çıtalar, dikey LED aydınlatma, 3D AYBARİst AKADEMİ logosu, Bahadır Bey ve masa materyalleri %100 aynı kalmıştır. Sol taraftaki bitki yerine doğal açmış beyaz orkide ve pirinç detaylı lüks klasik ciltli kitaplar yerleştirilmiştir.",
  },
  {
    id: "secenek-2",
    title: "Seçenek 2: Barış Çiçeği (Spathiphyllum) & Çağdaş Ciltler",
    tag: "Lüks Antrasit Saksı & Beyaz Çiçekler",
    src: "/images/founder-secenek-2-baris-cicegi.webp",
    badge: "🌿 Barış Çiçeği (En Doğal)",
    description:
      "Arka plan oda, logo ve kişi birebir korunmuştur. Rafta antrasit mat seramik saksıda taze beyaz çiçekli Barış Çiçeği, pirinç kitap tutacaklı seçkin akademik ciltler ('Business Ethics', 'Educational Leadership') yer alır. Son derece gerçekçi, dengeli ve kurumsal.",
  },
  {
    id: "secenek-3",
    title: "Seçenek 3: Şeffaf Cam Vazoda Taze Beyaz Güller & Okaliptüs",
    tag: "Su Yansımalı Kristal Cam Vazo",
    src: "/images/founder-secenek-3-cam-vazo-gul.webp",
    badge: "🌹 Cam Vazo & Beyaz Gül",
    description:
      "Arka plan ve tüm materyaller birebir korunmuştur. Sol konsol rafına su dolu şeffaf silindirik cam vazoda taze açmış beyaz güller ve taze okaliptüs dalları eklenmiştir. Işık kırılmaları ve cam yansımaları stüdyo fotoğrafı doğallığındadır.",
  },
  {
    id: "secenek-4",
    title: "Seçenek 4: Minyatür Japon Bonsai Ağacı & Zengin Kütüphane",
    tag: "Sırlı Seramik Tabak & Canlı Bonsai",
    src: "/images/founder-secenek-4-bonsai.webp",
    badge: "🪴 Canlı Bonsai Sanatı",
    description:
      "Arka plan ve tüm unsurlar birebir korunmuştur. Arka rafta yeşil kadife yosun zeminli, yaşayan heykelsi Japon Bonsai ağacı ve sağ rafta altın varak sırtlı prestijli kütüphane kitapları yer almaktadır. Zamansız, asil ve sofistike.",
  },
];

export default function KurucuSeceneklerPage() {
  const [activeTab, setActiveTab] = useState(2); // Seçenek 2 veya 3 varsayılan aktif

  return (
    <div className="bg-paper text-ink min-h-screen py-10 sm:py-14">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 space-y-8">
        <div>
          <span className="text-xs font-bold tracking-wider uppercase text-crimson-600 bg-crimson-50 px-3 py-1 rounded-full border border-crimson-200">
            %100 Gerçekçi & Orijinal Oda Birebir Korunmuş Tasarımlar
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-cobalt-950 mt-3 tracking-tight">
            Kurucumuz Bahadır Aybar — Raf Çiçek & Kitap Seçenekleri
          </h1>
          <p className="mt-2 text-base text-ink-muted max-w-3xl leading-relaxed">
            Arka plandaki <strong>ahşap akustik çıtalar, dikey LED aydınlatma, 3D ışıklı AYBARİst AKADEMİ logosu</strong>, Bahadır Bey&apos;in yüzü, saçları, lacivert ceketi ve masadaki tüm materyaller (deri sümen, defter, kalem, masa isimliği) <strong>%100 orijinal haliyle korunmuştur</strong>. Sadece arka raftaki çiçek/bitki ve kitaplar gerçekçi fotoğraf dokusuyla 4 farklı şık seçenek olarak yenilenmiştir.
          </p>
        </div>

        {/* Seçim Butonları */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4">
          {OPTIONS.map((opt, idx) => (
            <button
              key={opt.id}
              onClick={() => setActiveTab(idx)}
              className={`p-3 sm:p-4 rounded-2xl border text-left transition-all ${
                activeTab === idx
                  ? "bg-cobalt-950 text-white border-cobalt-950 shadow-xl scale-[1.02]"
                  : "bg-white text-ink border-cobalt-900/10 hover:border-crimson-600 hover:shadow-md"
              }`}
            >
              <span className={`text-xs font-bold block ${activeTab === idx ? "text-crimson-400" : "text-crimson-600"}`}>
                {opt.badge}
              </span>
              <span className="font-extrabold text-xs sm:text-sm block mt-1 leading-snug">
                {opt.title.split(":")[0]}
              </span>
              <span className={`text-[11px] block mt-1 line-clamp-1 ${activeTab === idx ? "text-cobalt-200" : "text-ink-muted"}`}>
                {opt.tag}
              </span>
            </button>
          ))}
        </div>

        {/* Büyük Önizleme */}
        <div className="bg-white rounded-2xl border border-cobalt-900/10 p-4 sm:p-6 shadow-lg space-y-4">
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 shadow-inner">
            <img
              src={assetPath(OPTIONS[activeTab].src)}
              alt={OPTIONS[activeTab].title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4 sm:p-5 rounded-xl bg-cobalt-50/70 border border-cobalt-900/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-crimson-600 block">
                {OPTIONS[activeTab].badge}
              </span>
              <h3 className="font-extrabold text-lg sm:text-xl text-cobalt-950 mt-0.5">
                {OPTIONS[activeTab].title}
              </h3>
              <p className="mt-1 text-sm text-ink-muted max-w-3xl leading-relaxed">
                {OPTIONS[activeTab].description}
              </p>
            </div>
          </div>
        </div>

        {/* Tüm Seçenekler Yan Yana Kartlar */}
        <div>
          <h2 className="text-xl font-extrabold text-cobalt-950 mb-4">
            Tüm Tasarımları Birlikte Karşılaştırın:
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {OPTIONS.map((opt, idx) => (
              <div
                key={opt.id}
                onClick={() => setActiveTab(idx)}
                className={`bg-white rounded-2xl border overflow-hidden cursor-pointer transition-all hover:shadow-xl ${
                  activeTab === idx
                    ? "border-crimson-600 ring-2 ring-crimson-600 shadow-lg scale-[1.02]"
                    : "border-cobalt-900/10 hover:border-crimson-500/60"
                }`}
              >
                <div className="aspect-[4/3] relative">
                  <img
                    src={assetPath(opt.src)}
                    alt={opt.title}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-2.5 left-2.5 bg-cobalt-950/85 text-white text-[10px] font-bold px-2 py-0.5 rounded-md backdrop-blur-xs">
                    {opt.badge.split(" ")[0]} {opt.title.split(":")[0]}
                  </span>
                </div>
                <div className="p-3.5 space-y-1">
                  <span className="text-[11px] font-bold text-crimson-600 block">
                    {opt.tag}
                  </span>
                  <h4 className="font-extrabold text-xs text-cobalt-950 line-clamp-1">
                    {opt.title}
                  </h4>
                  <p className="text-[11px] text-ink-muted line-clamp-2 leading-relaxed">
                    {opt.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
