import type { Metadata } from "next";
import { SITE_URL } from "@/config/site";

export const metadata: Metadata = {
  title: "Eğitim Modelimiz",
  description:
    "AYBARİst AKADEMİ Eğitim Modeli; ezberci kalıpları yıkan, kişiye özel kurgulanmış VIP Süreç Yönetimi ve alanında uzman eğitmen kadrosuyla öğrencileri potansiyellerinin zirvesine taşıyan, Maarif Modeline uyumlu, bütüncül bir rehberlik ve başarı platformudur.",
  alternates: {
    canonical: "/egitim-modelimiz/",
  },
  openGraph: {
    title: "Eğitim Modelimiz | AYBARİst AKADEMİ",
    description:
      "AYBARİst AKADEMİ Eğitim Modeli; ezberci kalıpları yıkan, kişiye özel kurgulanmış VIP Süreç Yönetimi ve alanında uzman eğitmen kadrosuyla öğrencileri potansiyellerinin zirvesine taşıyan, Maarif Modeline uyumlu, bütüncül bir rehberlik ve başarı platformudur.",
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
