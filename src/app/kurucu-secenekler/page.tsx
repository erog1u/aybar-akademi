"use client";

import React, { useState } from "react";
import { assetPath } from "@/config/site";

const OPTIONS = [
  {
    id: "traverten-1",
    title: "Tasarım 1: Lüks Traverten Doğal Taş Duvar & Gizli Tavan Işığı",
    tag: "Çıtasız & Şeritsiz Yeni Mimari Duvar",
    src: "/images/founder-yeni-traverten-tas-duvar.webp",
    badge: "🏆 1. TAVSİYE (Yeni Mimari Duvar & Ultra Canlı)",
    description:
      "Arka plandaki ahşap çıtalar ve dikey sarı LED şeritleri tamamen kaldırılarak yerine lüks açık bej traverten doğal mermer plaka duvar ve tavandan süzülen gizli mimari tavan ışığı yerleştirilmiştir. Kristal netliğinde 8K canlı renkler, arkada sol tarafta boy hizasına yükselen canlı ve gür iğne yapraklı salon çam ağacı, zengin koyu çikolata kahverengi ahşap masa, siyah takım elbise ceketi ve duvarda temiz 3D AYBARİst AKADEMİ logosu.",
  },
  {
    id: "tul-2",
    title: "Tasarım 2: Tül Perdeli Ferah Pencere Işığı & Çam Ağacı",
    tag: "Doğal Gün Işığı & Koyu Maun Masa",
    src: "/images/founder-yeni-cam-agaci-tul-perde.webp",
    badge: "☀️ Ferah & Aydınlık",
    description:
      "Sağda tül perdeli mimari yüksek pencereden süzülen yumuşak gün ışığı, arkada sol tarafta gür yapraklı gerçek çam ağacı ve ciltli kitaplar, derin koyu kahverengi masa, siyah ceketli Bahadır Bey portresi ve temiz 3D duvar logosu.",
  },
  {
    id: "cam-3",
    title: "Tasarım 3: Modern Cam Cepheli Maslak/Levent Kule Stili",
    tag: "Geniş Cam Cephe & Şehir Işığı",
    src: "/images/founder-yeni-cam-agaci-cam-cephe.webp",
    badge: "🏢 Kurumsal Plaza Tasarımı",
    description:
      "Sağda tavandan tabana panoramik modern cam cephe, seramik saksıda sağlıklı yeşil dağ çamı, sol rafta altın varaklı külliyat, zengin koyu kahverengi ceviz masa dokusu ve siyah takım elbise.",
  },
  {
    id: "jaluzi-4",
    title: "Tasarım 4: Ahşap Jaluzili Sıcak Pencere Işığı & Çam Ağacı",
    tag: "Ahşap Jaluzi & Zengin Akustik Doku",
    src: "/images/founder-yeni-cam-agaci-jaluzi.webp",
    badge: "🍂 Sıcak & Klasik Duruş",
    description:
      "Sağda ahşap jaluzilerden süzülen sıcak yatay ışık çizgileri, arkada sol tarafta heybetli yeşil çam ağacı, zengin kitap dizilimi, masanın tamamını gösteren koyu kahverengi ceviz masa ve siyah takım elbiseli kurucu portresi.",
  },
];

export default function KurucuSeceneklerPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="bg-paper text-ink min-h-screen py-10 sm:py-14">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 space-y-8">
        <div>
          <span className="text-xs font-bold tracking-wider uppercase text-crimson-600 bg-crimson-50 px-3 py-1 rounded-full border border-crimson-200">
            Nihai Müşteri Revizyonu (Yeni Duvar & Işık Tasarımı)
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-cobalt-950 mt-3 tracking-tight">
            Kurucumuz Bahadır Aybar — 4 Farklı Duvar & Çam Ağacı Tasarımı
          </h1>
          <p className="mt-2 text-base text-ink-muted max-w-3xl leading-relaxed">
            Müşterimizin tüm talepleri eksiksiz uygulandı: <strong>İnce çıtalar ve dikey sarı LED çizgileri kaldırılarak yeni lüks duvar tasarımı</strong>, <strong>kristal netliğinde ve canlı renkler</strong>, arkada <strong>gerçek salon çam ağacı</strong>, <strong>arkada solda kitaplar</strong>, masanın tamamının kadrajda göründüğü <strong>koyu kahverengi masa</strong>, <strong>siyah ceket</strong> ve <strong>slogansız temiz 3D AYBARİst AKADEMİ logosu</strong>.
          </p>
        </div>

        {/* Seçim Butonları */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {OPTIONS.map((opt, idx) => (
            <button
              key={opt.id}
              onClick={() => setActiveTab(idx)}
              className={`p-3.5 sm:p-4 rounded-2xl border text-left transition-all ${
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
            Tüm Tasarımları Birlikte İnceleyin:
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
