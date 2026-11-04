"use client";

import React, { useEffect, useState } from "react";
import { assetPath } from "@/config/site";
import { SloganMark } from "@/components/layout/PageHero";

const SLIDES = [
  {
    id: "guven",
    src: "/images/hero-one-on-one.jpg",
    alt: "Kadın öğretmen ve kız öğrenci birebir ders çalışırken",
    slogan: (
      <>
        Eğitimde Güvenin, Başarıda <SloganMark>Uzmanlığın Adresi</SloganMark>
      </>
    ),
  },
  {
    id: "tecrube",
    src: "/images/exam-strategy-notebook.jpg",
    alt: "Birebir ders sırasında defter üzerinde çalışan eller",
    slogan: (
      <>
        <span className="whitespace-nowrap"><SloganMark>33 Yıllık Tecrübe</SloganMark>,</span> Birebir ve Özel Çözümler, Yüz Yüze ve Online Eğitim
      </>
    ),
  },
  {
    id: "sinir",
    src: "/images/istanbul-home-tutoring.jpg",
    alt: "Evde yüz yüze birebir ders",
    slogan: (
      <>
        Eğitimde <SloganMark>Sınır Tanımıyoruz</SloganMark>
      </>
    ),
  },
  {
    id: "dunya",
    src: "/images/programs-global-study.jpg",
    alt: "Birebir ders çalışan öğrenci",
    slogan: (
      <>
        Değişen Dünyaya <SloganMark>AYBARİst&apos;in Gücüyle</SloganMark> Hazırlanın
      </>
    ),
  },
  {
    id: "online",
    src: "/images/online-interactive-lesson.jpg",
    alt: "Kadın öğretmenin kız öğrenciyle canlı online dersi",
    slogan: (
      <>
        Online Canlı Dersler ile Yüz Yüze Özel Ders Modellerini <SloganMark>Bir Arada</SloganMark> Sunuyoruz
      </>
    ),
  },
];

export default function HomeSloganSlider() {
  const [index, setIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % SLIDES.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="relative z-10 overflow-hidden rounded-2xl bg-cobalt-950 shadow-studio">
      <div
        className={`flex ${reduceMotion ? "" : "transition-transform duration-700 ease-out"}`}
        style={{
          width: `${SLIDES.length * 100}%`,
          transform: `translateX(-${(index * 100) / SLIDES.length}%)`,
        }}
      >
        {SLIDES.map((slide, slideIndex) => (
          <div
            key={slide.id}
            className="flex shrink-0 flex-col"
            style={{ width: `${100 / SLIDES.length}%` }}
            aria-hidden={slideIndex !== index}
          >
            <div className="relative aspect-[16/10] sm:aspect-[4/3]">
              <img
                src={assetPath(slide.src)}
                alt={slide.alt}
                width={1200}
                height={900}
                decoding="async"
                fetchPriority={slideIndex === 0 ? "high" : undefined}
                loading={slideIndex === 0 ? "eager" : "lazy"}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute left-3 top-3 flex gap-1.5" aria-hidden="true">
                {SLIDES.map((dotSlide, dot) => (
                  <span
                    key={dotSlide.id}
                    className={`h-1.5 rounded-full ${dot === index ? "w-5 bg-white" : "w-1.5 bg-white/50"}`}
                  />
                ))}
              </div>
            </div>
            <p className="px-4 py-3 pr-16 text-balance text-sm font-extrabold leading-snug tracking-tight text-white sm:pr-4 sm:text-base">
              {slide.slogan}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
