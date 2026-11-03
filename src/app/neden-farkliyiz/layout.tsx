import type { Metadata } from "next";
import { SITE_URL } from "@/config/site";

export const metadata: Metadata = {
  title: "Neden Farklıyız?",
  description:
    "Aybar Akademi; özel derste sıradan bilgi aktarımını değil, bilimsel temelli bir süreç yönetimini, kişiye özel mühendislik yaklaşımını ve bütüncül rehberliği standart hale getirir.",
  alternates: {
    canonical: "/neden-farkliyiz/",
  },
  openGraph: {
    title: "Neden Farklıyız? | AYBARİst AKADEMİ",
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
