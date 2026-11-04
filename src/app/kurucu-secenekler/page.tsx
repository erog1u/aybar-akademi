"use client";

import React, { useState } from "react";
import { assetPath } from "@/config/site";

const OPTIONS = [
  {
    id: "4k-traverten",
    title: "Tasarım 1 (4K Ultra HD): Traverten Mermer Duvar & Canlı İfade",
    tag: "3840 x 2867 • 4K UHD Stüdyo Master",
    src: "/images/founder-4k-traverten-canli.webp",
    fullJpg: "/images/founder-4k-traverten-canli.jpg",
    badge: "🏆 1. TAVSİYE (4K Ultra HD • Canlı & Çıtasız)",
    description:
      "Arka plandaki dikey ahşap çıtalar ve sarı LED çizgileri tamamen kaldırılmış; İtalyan lüks açık bej traverten doğal taş plaka duvar ve tavandan süzülen gizli mimari ışık yerleştirilmiştir. Canlı ve güler yüzlü 4K stüdyo portresi, arkada boy hizasına yükselen canlı ve gür iğne yapraklı gerçek salon çam ağacı, zengin koyu çikolata kahverengi ahşap masa ve İtalyan kesim siyah takım elbise ceketi.",
  },
  {
    id: "4k-tul",
    title: "Tasarım 2 (4K Ultra HD): Tül Perdeli Yüksek Mimari Pencere",
    tag: "3840 x 2867 • Doğal Gün Işığı",
    src: "/images/founder-4k-tul-perde.webp",
    fullJpg: "/images/founder-4k-tul-perde.jpg",
    badge: "☀️ 4K Ferah & Aydınlık",
    description:
      "Sağda tül perdeli mimari yüksek pencereden süzülen yumuşak gün ışığı, arkada sol tarafta gür yapraklı gerçek çam ağacı ve ciltli kitaplar, derin koyu kahverengi masa, siyah ceketli Bahadır Bey portresi ve temiz 3D duvar logosu.",
  },
  {
    id: "4k-cam-cephe",
    title: "Tasarım 3 (4K Ultra HD): Modern Cam Cepheli Maslak Kule Stili",
    tag: "3840 x 2867 • Kurumsal Plaza",
    src: "/images/founder-4k-cam-cephe.webp",
    fullJpg: "/images/founder-4k-cam-cephe.jpg",
    badge: "🏢 4K Plaza Kule Tasarımı",
    description:
      "Sağda tavandan tabana panoramik modern cam cephe, seramik saksıda sağlıklı yeşil dağ çamı, sol rafta altın varaklı külliyat, zengin koyu kahverengi ceviz masa dokusu ve siyah takım elbise.",
  },
  {
    id: "4k-jaluzi",
    title: "Tasarım 4 (4K Ultra HD): Ahşap Jaluzili Sıcak Pencere Işığı",
    tag: "3840 x 2867 • Sıcak Işık Çizgileri",
    src: "/images/founder-4k-jaluzi.webp",
    fullJpg: "/images/founder-4k-jaluzi.jpg",
    badge: "🍂 4K Sıcak & Klasik Duruş",
    description:
      "Sağda ahşap jaluzilerden süzülen sıcak yatay ışık çizgileri, arkada sol tarafta heybetli yeşil çam ağacı, zengin kitap dizilimi, masanın tamamını gösteren koyu kahverengi ceviz masa ve siyah takım elbiseli kurucu portresi.",
  },
];

export default function KurucuSeceneklerPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const activeOption = OPTIONS[activeTab];

  return (
    <div className="bg-paper text-ink min-h-screen py-10 sm:py-14">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 space-y-8">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold tracking-wider uppercase text-crimson-600 bg-crimson-50 px-3 py-1 rounded-full border border-crimson-200">
              Gerçek 4K Ultra HD Çözünürlük (3840 × 2867)
            </span>
            <span className="text-xs font-bold tracking-wider uppercase text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Canlı Renkler & Çıtasız Yeni Mimari Duvar
            </span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-cobalt-950 mt-3 tracking-tight">
            Kurucumuz Bahadır Aybar — 4K Ultra HD Master Fotoğraflar
          </h1>
          <p className="mt-2 text-base text-ink-muted max-w-3xl leading-relaxed">
            Müşterimizin tüm talepleri <strong>3840 × 2867 gerçek 4K Ultra HD çözünürlükte</strong> hazırlanmıştır: <strong>Ahşap çıtalar ve dikey sarı çizgiler kaldırılmış</strong>, yerine lüks traverten taş duvar yerleştirilmiş, arkada <strong>gerçek gür salon çam ağacı</strong>, <strong>koyu kahverengi masa</strong>, <strong>siyah takım elbise</strong> ve <strong>canlı stüdyo ışığı</strong> uygulanmıştır.
          </p>
        </div>

        {/* Seçim Butonları */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {OPTIONS.map((opt, idx) => (
            <button
              key={opt.id}
              onClick={() => {
                setActiveTab(idx);
                setIsZoomed(false);
              }}
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

        {/* Büyük 4K Önizleme Kartı */}
        <div className="bg-white rounded-3xl border border-cobalt-900/10 p-4 sm:p-6 shadow-xl space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-2 border-b border-cobalt-900/10">
            <div>
              <span className="text-xs font-bold text-crimson-600 uppercase tracking-wider block">
                {activeOption.badge}
              </span>
              <h2 className="text-lg sm:text-xl font-extrabold text-cobalt-950">
                {activeOption.title}
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsZoomed(!isZoomed)}
                className="px-3.5 py-2 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-cobalt-950 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                {isZoomed ? "🔍 Normal Boyuta Dön" : "🔎 4K %100 Yakınlaştır"}
              </button>
              <a
                href={assetPath(activeOption.fullJpg)}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl text-xs font-bold bg-crimson-600 hover:bg-crimson-700 text-white transition-colors shadow-sm flex items-center gap-1.5"
              >
                📥 Orijinal 4K Dosyayı Aç (3840×2867)
              </a>
            </div>
          </div>

          {/* Görüntü Çerçevesi */}
          <div
            className={`relative rounded-2xl overflow-hidden bg-black shadow-inner transition-all ${
              isZoomed ? "max-h-[85vh] overflow-auto cursor-grab" : "aspect-[4/3]"
            }`}
          >
            <img
              src={assetPath(activeOption.src)}
              alt={activeOption.title}
              className={`transition-all duration-300 ${
                isZoomed
                  ? "w-[240%] max-w-none h-auto translate-x-[-25%] translate-y-[-10%]"
                  : "w-full h-full object-cover"
              }`}
            />
            {isZoomed && (
              <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-lg border border-white/20">
                🔎 4K Piksel Detayı: Gözler, ten dokusu, takım kumaşı ve ahşap damarları
              </div>
            )}
          </div>

          <div className="p-4 rounded-xl bg-cobalt-50/70 border border-cobalt-900/10">
            <p className="text-sm text-ink-muted leading-relaxed">
              {activeOption.description}
            </p>
          </div>
        </div>

        {/* 4K Kartlar Karşılaştırma */}
        <div>
          <h3 className="text-xl font-extrabold text-cobalt-950 mb-4">
            4 Farklı 4K Konsepti Karşılaştırın:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {OPTIONS.map((opt, idx) => (
              <div
                key={opt.id}
                onClick={() => {
                  setActiveTab(idx);
                  setIsZoomed(false);
                }}
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
                    4K UHD
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
