/**
 * AYBAR AKADEMİ — Merkezi Site Ayarları
 * -------------------------------------------------------------
 * Telefon numarası, WhatsApp hattı veya logo görseli değiştiğinde
 * yalnızca bu dosyadaki ilgili alanları güncellemeniz yeterlidir.
 * Tüm sayfalar, üst menü, alt bilgi ve sabit WhatsApp butonu
 * otomatik olarak buradan beslenir.
 */

export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";
export const IS_PREVIEW_MODE = process.env.NEXT_PUBLIC_PREVIEW_MODE === "true";

export function assetPath(p: string): string {
  if (!p.startsWith("/")) return p;
  if (BASE_PATH && p.startsWith(`${BASE_PATH}/`)) return p;
  return `${BASE_PATH}${p}`;
}

export const siteConfig = {
  name: "AYBAR AKADEMİ",
  legalSubtitle: "Eğitim · Yayıncılık · Danışmanlık",
  motto: "Bilginin Kaynağı, Başarının Mimarı",
  experienceYears: 33,
  founder: {
    name: "Bahadır AYBAR",
    role: "AYBAR AKADEMİ Kurucusu",
  },
  agency: {
    name: "Eroğlu Solutions",
    url: "https://eroglusolutions.com",
  },
  logos: {
    emblem: assetPath("/images/logo-emblem.png"),
    full: assetPath("/images/logo-full.png"),
    original: assetPath("/images/logo-original.jpg"),
  },
  contact: {
    // Telefon numarası netleştiğinde buradan değiştirin:
    phoneDisplay: "0 (532) 000 00 00",
    phoneHref: "tel:+905320000000",
    // WhatsApp numarasını başında + olmadan ülke koduyla yazın (örn: 905321234567)
    whatsappNumber: "905320000000",
    whatsappDefaultMessage:
      "Merhaba, AYBAR AKADEMİ birebir özel ders programları ve 30 dakikalık ücretsiz tanışma seansı hakkında bilgi almak istiyorum.",
    email: "iletisim@aybarakademi.com",
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
    { label: "Eğitim Programlarımız", href: "/egitim-programlarimiz" },
    { label: "Eğitim Modelimiz", href: "/egitim-modelimiz" },
    { label: "Neden Farklıyız?", href: "/neden-farkliyiz" },
    { label: "İletişim", href: "/iletisim" },
  ],
} as const;

export function getWhatsAppUrl(customMessage?: string): string {
  const text = encodeURIComponent(
    customMessage || siteConfig.contact.whatsappDefaultMessage
  );
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${text}`;
}
