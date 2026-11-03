import React from "react";
import { siteConfig, getWhatsAppUrl, SITE_URL } from "@/config/site";

export default function JsonLd() {
  const baseUrl = SITE_URL;

  const educationalOrganizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": `${baseUrl}/#organization`,
    name: siteConfig.name,
    legalName: "AYBARİst AKADEMİ",
    url: baseUrl,
    logo: `${baseUrl}/images/logo-seal.png`,
    description:
      "33 yıllık köklü eğitim deneyimi ve yeni nesil Maarif Modeline hâkim uzman kadrosuyla, İstanbul’un tüm ilçelerinde evinizde yüz yüze ve tüm Türkiye’de canlı online birebir özel ders kurumu.",
    founder: {
      "@type": "Person",
      name: siteConfig.founder.name,
      jobTitle: siteConfig.founder.role,
    },
    areaServed: [
      {
        "@type": "City",
        name: "İstanbul",
        description: "İstanbul’un tüm ilçelerinde evinizde yüz yüze birebir özel ders",
      },
      {
        "@type": "Country",
        name: "Türkiye",
        description: "Tüm Türkiye’de canlı online eğitim",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.contact.phoneHref.replace("tel:", ""),
      contactType: "customer service",
      availableLanguage: ["tr"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address,
      addressLocality: "Bakırköy",
      addressRegion: "İstanbul",
      addressCountry: "TR",
    },
    sameAs: [getWhatsAppUrl()],
  };


  const coursesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "Course",
        position: 1,
        name: "Sınav Hazırlık Özel Ders Programları (YKS, LGS, KPSS, ALES)",
        description:
          "Kişiye özel stratejilerle eksikleri avantaja dönüştüren birebir sınav hazırlık ve koçluk programı.",
        provider: {
          "@type": "EducationalOrganization",
          name: siteConfig.name,
        },
      },
      {
        "@type": "Course",
        position: 2,
        name: "Okula Takviye Programları (İlkokul, Ortaokul, Lise)",
        description:
          "Yeni nesil Maarif Modeline tam uyumlu, okul derslerinde tam öğrenmeyi sağlayan birebir destek.",
        provider: {
          "@type": "EducationalOrganization",
          name: siteConfig.name,
        },
      },
      {
        "@type": "Course",
        position: 3,
        name: "Üniversite Düzeyi & Akademik Dersler (Bahadır Aybar)",
        description:
          "Felsefe, Sosyoloji ve Psikoloji bölümlerinde kurucu Bahadır Aybar liderliğinde ileri düzey akademik mentorluk.",
        provider: {
          "@type": "EducationalOrganization",
          name: siteConfig.name,
        },
      },
      {
        "@type": "Course",
        position: 4,
        name: "Dünya Dilleri & Uluslararası Sertifikasyon",
        description:
          "Dünya ile Konuşun, Sınırları Kaldırın! Yabancı dil eğitiminde sadece konuşmayı değil, kariyerinizi şekillendirecek küresel sınavları hedefliyoruz.",
        provider: {
          "@type": "EducationalOrganization",
          name: siteConfig.name,
        },
      },
      {
        "@type": "Course",
        position: 5,
        name: "Türkiye Özelindeki Ulusal Yabancı Dil Sınavları (YDT, YDS)",
        description: "Türkiye özelindeki ulusal yabancı dil sınavları: YDT ve YDS.",
        provider: {
          "@type": "EducationalOrganization",
          name: siteConfig.name,
        },
      },
      {
        "@type": "Course",
        position: 6,
        name: "Yaşam, Beceri ve Sanat Odaklı Eğitimler",
        description:
          "Yüzme spor dersleri, direksiyon eğitimi ve dans/müzik sanat akademisi birebir programları.",
        provider: {
          "@type": "EducationalOrganization",
          name: siteConfig.name,
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(educationalOrganizationSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(coursesSchema),
        }}
      />
    </>
  );
}
