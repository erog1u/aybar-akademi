import type { Metadata } from "next";
import { SITE_URL } from "@/config/site";

export const metadata: Metadata = {
  title: "Kurucumuzun Mesajı",
  description:
    "Online canlı dersler ile yüz yüze özel ders modellerini bir arada sunuyoruz. Kurucu Bahadır AYBAR'ın mesajı.",
  alternates: { canonical: "/kurucumuzun-mesaji/" },
  openGraph: {
    title: "Kurucumuzun Mesajı | AYBARİst AKADEMİ",
    description:
      "Online canlı dersler ile yüz yüze özel ders modellerini bir arada sunuyoruz.",
    url: `${SITE_URL}/kurucumuzun-mesaji/`,
  },
};

export default function KurucuLayout({ children }: { children: React.ReactNode }) {
  return children;
}
