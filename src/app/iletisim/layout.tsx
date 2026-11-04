import type { Metadata } from "next";
import { SITE_URL } from "@/config/site";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "AYBARİst AKADEMİ iletişim: telefon ve WhatsApp 0543 976 67 34, Bakırköy/İstanbul. Yüz yüze ve online birebir özel ders için bilgi alın.",
  alternates: {
    canonical: "/iletisim/",
  },
  openGraph: {
    title: "İletişim | AYBARİst AKADEMİ",
    description:
      "AYBARİst AKADEMİ iletişim: telefon ve WhatsApp 0543 976 67 34, Bakırköy/İstanbul. Yüz yüze ve online birebir özel ders için bilgi alın.",
    url: `${SITE_URL}/iletisim/`,
  },
};

export default function IletisimLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
