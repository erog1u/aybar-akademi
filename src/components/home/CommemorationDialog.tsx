"use client";

import { useEffect, useRef, useState } from "react";
import { assetPath } from "@/config/site";

// Özel gün kutusu: günü gelince (İstanbul saati) ana sayfa açılınca oturum başına bir kez gösterilir.
// Önizleme: adres sonuna ?10kasim ya da ?ogretmenler eklenir.
type Day = {
  date: string; // AA-GG
  /** Yalnız o yıl için ek günler (YYYY-AA-GG). */
  extra?: string[];
  preview: string;
  img: string;
  alt: string;
  width: number;
  height: number;
  title: string;
  showTitle: boolean;
  /** Görseldeki logo hatalıysa üstüne güncel logo konur (yüzde konumlar). */
  seal?: { left: string; top: string; width: string };
};

const DAYS: Day[] = [
  {
    date: "11-10",
    preview: "10kasim",
    img: "/images/10-kasim.jpg",
    alt: "Mustafa Kemal Atatürk portresi. Üzerinde: Bizler emanetini nesillerden nesillere aktarıp, sonsuza kadar korumaya and içtik. Sen rahat uyu.",
    width: 880,
    height: 947,
    title: "Ulu Önder Mustafa Kemal Atatürk'ü saygı ve özlemle anıyoruz.",
    showTitle: true,
  },
  {
    date: "11-24",
    extra: ["2026-11-23"], // Taha 23.11.2026: hemen yayında olsun
    preview: "ogretmenler",
    img: "/images/ogretmenler-gunu.jpg",
    alt: "Mustafa Kemal Atatürk sınıfta kara tahtanın önünde öğrencilerle. Üzerinde: Bir öğretmen, binlerce hayata dokunur; Öğretmenler Günümüz kutlu olsun.",
    width: 1043,
    height: 1008,
    title: "24 Kasım Öğretmenler Günümüz kutlu olsun.",
    showTitle: false,
    seal: { left: "40.6%", top: "1%", width: "20.2%" },
  },
];

const today = () =>
  new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Istanbul", year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date());

export default function CommemorationDialog() {
  const ref = useRef<HTMLDialogElement>(null);
  const [day, setDay] = useState<Day | null>(null);

  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const preview = DAYS.find((d) => q.has(d.preview));
    const d = preview ?? DAYS.find((x) => today().endsWith(x.date) || !!x.extra?.includes(today()));
    if (!d) return;
    const key = `aybar-ozel-gun-${d.date}`;
    try {
      if (!preview && sessionStorage.getItem(key)) return;
      sessionStorage.setItem(key, "1");
    } catch {}
    setDay(d);
  }, []);

  useEffect(() => {
    if (day) ref.current?.showModal();
  }, [day]);

  const close = () => ref.current?.close();
  if (!day) return null;

  return (
    <dialog
      ref={ref}
      aria-labelledby="ozel-gun-baslik"
      onClick={(e) => e.target === e.currentTarget && close()}
      className="m-auto w-[min(92vw,440px)] overflow-hidden rounded-2xl bg-white p-0 shadow-2xl backdrop:bg-black/70"
    >
      <div className="relative">
        <img src={assetPath(day.img)} alt={day.alt} width={day.width} height={day.height} className="block h-auto w-full" />
        {day.seal && (
          <img
            src={assetPath("/images/logo-seal.png")}
            alt=""
            className="absolute aspect-square rounded-full bg-white"
            style={day.seal}
          />
        )}
      </div>
      <div className="px-5 py-4 text-center">
        <p id="ozel-gun-baslik" className={day.showTitle ? "text-base font-extrabold text-ink" : "sr-only"}>
          {day.title}
        </p>
        <button
          type="button"
          onClick={close}
          autoFocus
          className={`${day.showTitle ? "mt-4" : ""} min-h-11 w-full rounded-xl bg-cobalt-700 font-bold text-white`}
        >
          Kapat
        </button>
      </div>
    </dialog>
  );
}
