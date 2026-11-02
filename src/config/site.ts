/**
 * AYBAR AKADEMİ — Merkezi Site Ayarları
 * -------------------------------------------------------------
 * Telefon numarası, WhatsApp hattı veya logo görseli değiştiğinde
 * yalnızca bu dosyadaki ilgili alanları güncellemeniz yeterlidir.
 * Tüm sayfalar, üst menü, alt bilgi ve sabit WhatsApp butonu
 * otomatik olarak buradan beslenir.
 */

export const siteConfig = {
  name: "AYBAR AKADEMİ",
  legalSubtitle: "Eğitim · Yayıncılık · Danışmanlık",
  motto: "Bilginin Kaynağı, Başarının Mimarı",
  experienceYears: 33,
  founder: {
    name: "Bahadır AYBAR",
    role: "AYBAR AKADEMİ Kurucusu",
  },
  logos: {
    // Üst menü ve kompakt alanlar için dairesel arma (şeffaf arka planlı)
    emblem: "/images/logo-emblem.png",
    // Kurdeleli tam kurumsal logo (şeffaf arka planlı)
    full: "/images/logo-full.png",
    // Orijinal yüklenen dosya yedeği
    original: "/images/logo-original.jpg",
  },
  contact: {
    // Telefon numarası netleştiğinde buradan değiştirin:
    phoneDisplay: "0 (532) 000 00 00",
    phoneHref: "tel:+905320000000",
    // WhatsApp numarasını başında + olmadan ülke koduyla yazın (örn: 905321234567)
    whatsappNumber: "905320000000",
    whatsappDefaultMessage:
      "Merhaba, Aybar Akademi birebir özel ders programları ve 30 dakikalık ücretsiz tanışma seansı hakkında bilgi almak istiyorum.",
    email: "iletisim@aybarakademi.com",
    locations: {
      faceToFaceTitle: "İstanbul’un Tüm İlçelerinde",
      faceToFaceDetail:
        "39 ilçenin tamamında, evinizin konforunda, güvenli ve verimli bir ortamda birebir yüz yüze özel ders hizmeti.",
      onlineTitle: "Tüm Türkiye’de Online",
      onlineDetail:
        "81 ilde coğrafi sınırları ortadan kaldıran, interaktif ve yüksek verimli canlı online birebir eğitim modelleri.",
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
