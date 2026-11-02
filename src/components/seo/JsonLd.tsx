import React from "react";
import { siteConfig, getWhatsAppUrl } from "@/config/site";

export default function JsonLd() {
  const baseUrl = "https://erog1u.github.io/aybar-akademi";

  const educationalOrganizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": `${baseUrl}/#organization`,
    name: siteConfig.name,
    legalName: "AYBAR AKADEMİ",
    url: baseUrl,
    logo: `${baseUrl}/images/aybar-crest-emblem.png`,
    description:
      "33 yıllık köklü eğitim deneyimi ve yeni nesil Maarif Modeline hâkim uzman kadrosuyla, İstanbul’un 39 ilçesinde evinizde yüz yüze ve tüm Türkiye’de canlı online birebir VIP özel ders kurumu.",
    founder: {
      "@type": "Person",
      name: siteConfig.founder.name,
      jobTitle: siteConfig.founder.role,
    },
    areaServed: [
      {
        "@type": "City",
        name: "İstanbul",
        description: "39 İlçede Evinizde Yüz Yüze Birebir Özel Ders",
      },
      {
        "@type": "Country",
        name: "Türkiye",
        description: "81 İlde Kesintisiz Canlı Online Eğitim",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.contact.phoneHref.replace("tel:", ""),
      contactType: "customer service",
      availableLanguage: ["tr", "en"],
      contactOption: "TollFree",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "İstanbul",
      addressCountry: "TR",
    },
    sameAs: [getWhatsAppUrl()],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "İlk tanışma seansı nasıl gerçekleşir ve ücretli midir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "İlk gün ve ilk derse özgü olarak ders başlamadan önce 30 dakikalık ücretsiz bir keşif seansı yapılır. Bu süreçte öğrencinin akademik altyapısı, görsel/işitsel/kinestetik öğrenme stili ve derse karşı geliştirdiği zihinsel önyargılar saptanır.",
        },
      },
      {
        "@type": "Question",
        name: "Özel dersler hangi şehirlerde ve hangi formatlarda verilmektedir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "İstanbul’un 39 ilçesinde öğrencinin ev konforunda birebir yüz yüze; tüm Türkiye’de (81 ilde) ise kesintisiz canlı interaktif online eğitim modellerimizle sunulmaktadır.",
        },
      },
      {
        "@type": "Question",
        name: "Kişiye özel Hata Defteri tekniği nedir ve nasıl uygulanır?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Öğrencinin ödevlerde, denemelerde ya da yazılı sınavlarda takıldığı soru tipleri dijital bir hata defterine işlenir. Sınav öncesinde genel tekrar yerine yalnızca bu hata havuzu eritilir; hatalar sıfırlanır ve kalıcı net artışı sağlanır.",
        },
      },
      {
        "@type": "Question",
        name: "Veliler ders ve gelişim sürecinden nasıl haberdar edilir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Her dersin bitiminde veliye WhatsApp üzerinden ders içeriği, öğrencinin durumu ve ödev takibini içeren profesyonel ders sonu raporu iletilir. Ayrıca aylık periyotlarla deneme/yazılı sınav puanları ve odaklanma süresi gelişimini gösteren performans değerlendirmesi sunulur.",
        },
      },
      {
        "@type": "Question",
        name: "Yeni Nesil Türkiye Yüzyılı Maarif Modeli ile dersler nasıl uyumludur?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Öğretmen kadromuz yeni nesil Maarif Modeline tam hâkimdir. Kitlesel ve ezberci kalıpları yıkan, öğrencinin aktif katılımını (Flipped Classroom) ve kalıcı öğrenmesini (Active Recall) sağlayan modern pedagojik standartlar uygulanır.",
        },
      },
      {
        "@type": "Question",
        name: "Bahadır Aybar bizzat hangi dersleri vermektedir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Kurucumuz Bahadır Aybar; KPSS Eğitim Bilimleri (Öğretmen Adayları) ile Üniversite düzeyinde Felsefe, Sosyoloji ve Psikoloji bölümlerinin tüm akademik derslerini ve mentorluk programlarını bizzat yürütmektedir.",
        },
      },
    ],
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
        name: "Dünya Dilleri & Uluslararası Sertifikasyon (11 Dünya Dili)",
        description:
          "IELTS, TOEFL, Goethe, DELF gibi uluslararası sınavlara ve küresel iletişime hazırlayan özel dil dersleri.",
        provider: {
          "@type": "EducationalOrganization",
          name: siteConfig.name,
        },
      },
      {
        "@type": "Course",
        position: 5,
        name: "Türkiye Özelindeki Ulusal Yabancı Dil Sınavları (YDT, YDS)",
        description:
          "YDT ve YDS sınavlarında hedef odaklı gramer, kelime ve soru çözüm stratejileriyle başarı eğitimi.",
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
          __html: JSON.stringify(faqSchema),
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
