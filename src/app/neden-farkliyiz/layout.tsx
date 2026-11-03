import type { Metadata } from "next";
import { SITE_URL } from "@/config/site";

export const metadata: Metadata = {
  title: "Neden Farklıyız?",
  description:
    "Eğitimde fark yaratan 5 temel standart: 30 dk ücretsiz tanışma seansı, Flipped Classroom & Active Recall, kişiye özel Hata Defteri, şeffaf ders sonu raporu ve kurucu güvencesi.",
  alternates: {
    canonical: "/neden-farkliyiz/",
  },
  openGraph: {
    title: "Neden Farklıyız? | AYBAR AKADEMİ",
    description:
      "Her öğrenciye standart olarak uyguladığımız, rastlantılara yer bırakmayan 5 aşamalı başarı metodolojimiz ve kişiye özel Hata Defteri tekniğimiz.",
    url: `${SITE_URL}/neden-farkliyiz/`,
  },
};

export default function NedenFarkliyizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
