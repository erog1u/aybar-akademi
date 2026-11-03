import type { Metadata } from "next";
import { SITE_URL } from "@/config/site";

export const metadata: Metadata = {
  title: "Eğitim Modelimiz",
  description:
    "Ezberci değil; bütüncül, birebir ve kişiye özel VIP eğitim modeli. VIP Süreç Yönetimi, eğitim koçluğu, tam öğrenme modeli ve veli-okul köprüsü standartlarımız.",
  alternates: {
    canonical: "/egitim-modelimiz/",
  },
  openGraph: {
    title: "Eğitim Modelimiz | AYBARİst AKADEMİ",
    description:
      "Ezberci değil; bütüncül, birebir ve kişiye özel VIP eğitim modeli. 4 aşamalı metodoloji ve 4 yönlü başarı ekosistemi.",
    url: `${SITE_URL}/egitim-modelimiz/`,
  },
};

export default function EgitimModelimizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
