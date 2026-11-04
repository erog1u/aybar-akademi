/**
 * AYBARİst AKADEMİ — Merkezi Site Ayarları
 * -------------------------------------------------------------
 * Telefon numarası, WhatsApp hattı veya logo görseli değiştiğinde
 * yalnızca bu dosyadaki ilgili alanları güncellemeniz yeterlidir.
 * Tüm sayfalar, üst menü, alt bilgi ve sabit WhatsApp butonu
 * otomatik olarak buradan beslenir.
 */

import { buildSafeWhatsAppUrl } from "@/lib/security";

export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";
export const IS_PREVIEW_MODE = process.env.NEXT_PUBLIC_PREVIEW_MODE === "true";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (IS_PREVIEW_MODE
    ? "https://erog1u.github.io/aybar-akademi"
    : "https://aybaristakademi.com");

export function assetPath(p: string): string {
  if (!p.startsWith("/")) return p;
  if (BASE_PATH && p.startsWith(`${BASE_PATH}/`)) return p;
  return `${BASE_PATH}${p}`;
}

export const siteConfig = {
  name: "AYBARİst AKADEMİ",
  legalSubtitle: "Eğitim · Yayıncılık · Danışmanlık",
  experienceYears: 33,
  founder: {
    name: "Bahadır AYBAR",
    role: "Kurucu",
  },
  agency: {
    name: "Eroğlu Solutions",
    url: "https://eroglusolutions.com",
  },
  logos: {
    emblem: assetPath("/images/logo-seal.png"),
    full: assetPath("/images/logo-full.png"),
    original: assetPath("/images/logo-original.jpg"),
  },
  contact: {
    // Telefon numarası netleştiğinde buradan değiştirin (veya NEXT_PUBLIC_PHONE_DISPLAY env değişkeni ile verin):
    phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY || "0543 976 67 34",
    phoneHref: process.env.NEXT_PUBLIC_PHONE_HREF || "tel:+905439766734",
    // WhatsApp numarasını başında + olmadan ülke koduyla yazın (örn: 905439766734)
    whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "905439766734",
    whatsappDefaultMessage:
      "Merhaba, AYBARİst AKADEMİ birebir özel ders programları hakkında bilgi almak istiyorum.",
    address:
      "Carousel AVM - Workinton, Zeytinlik Mah. Fişekhane Cad. No:5 İçkapı No:17 Bakırköy/İstanbul",
    // Boşken e-posta satırı görünmez; yönlendirme kurulunca iletisim@aybaristakademi.com yazın.
    email: process.env.NEXT_PUBLIC_EMAIL || "",
    locations: {
      faceToFaceTitle: "İstanbul’un Tüm İlçelerinde",
      faceToFaceDetail:
        "Evinizin konforunda, güvenli ve verimli bir ortamda birebir yüz yüze özel ders hizmeti sağlıyoruz.",
      onlineTitle: "Tüm Türkiye’de",
      onlineDetail:
        "Teknolojinin tüm imkânlarını kullanarak, coğrafi sınırları ortadan kaldıran, interaktif ve yüksek verimli online eğitim modellerimizle yanınızdayız.",
    },
  },
  navigation: [
    { label: "Ana Sayfa", href: "/" },
    { label: "Hakkımızda", href: "/hakkimizda" },
    { label: "Kurucumuzun Mesajı", href: "/kurucumuzun-mesaji" },
    { label: "Eğitim Programlarımız", href: "/egitim-programlarimiz" },
    { label: "Eğitim Modelimiz", href: "/egitim-modelimiz" },
    { label: "Neden Farklıyız?", href: "/neden-farkliyiz" },
    { label: "İletişim", href: "/iletisim" },
  ],
} as const;

export function getWhatsAppUrl(customMessage?: string): string {
  return buildSafeWhatsAppUrl(
    siteConfig.contact.whatsappNumber,
    customMessage || siteConfig.contact.whatsappDefaultMessage
  );
}
