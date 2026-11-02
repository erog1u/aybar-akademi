"use client";

import React from "react";
import Link from "next/link";
import {
  BookOpen,
  Compass,
  ShieldCheck,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import { assetPath, getWhatsAppUrl } from "@/config/site";
import {
  founderMessage,
  aboutContent,
  programsIntro,
} from "@/data/content";
import {
  MaskedLines,
  PhotoFrame,
  SectionHeader,
  MagneticLink,
  NextChapterBanner,
} from "@/components/motion/Primitives";
import { AybarInstitutionalSeal } from "@/components/brand/AybarCrest";
import FaqSection from "@/components/faq/FaqSection";

const GUIDED_SECTIONS = [
  {
    badge: "01",
    title: "Eğitim Programlarımız",
    description:
      "İlkokuldan üniversiteye sınav hazırlık, okula takviye, 11 dünya dili ve sanat derslerimiz.",
    href: "/egitim-programlarimiz",
    icon: BookOpen,
  },
  {
    badge: "02",
    title: "Eğitim Modelimiz",
    description:
      "Kişiye özel VIP Süreç Yönetimi, eğitim koçluğu ve aile-veli-okul köprüsü modelimiz.",
    href: "/egitim-modelimiz",
    icon: Compass,
  },
  {
    badge: "03",
    title: "Neden Farklıyız?",
    description:
      "30 dakikalık ücretsiz tanışma seansından öğrenciye özel hata defterine 5 standart ilkemiz.",
    href: "/neden-farkliyiz",
    icon: ShieldCheck,
  },
  {
    badge: "04",
    title: "Hakkımızda",
    description:
      "33 yıllık köklü deneyimimiz, İstanbul 39 ilçe yüz yüze ve 81 il canlı online eğitim ağımız.",
    href: "/hakkimizda",
    icon: MapPin,
  },
] as const;

export default function HomePage() {
  return (
    <div className="bg-paper text-ink">
      {/* 1. Ferah ve Güçlü Cobalt Hero */}
      <section className="studio-hero text-white py-12 sm:py-16 lg:py-20 border-b border-white/15 overflow-hidden">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Sol Sütun */}
            <div className="lg:col-span-6 min-w-0">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/12 border border-white/25 px-4 py-1.5 text-xs sm:text-sm font-bold text-white mb-6 max-w-full">
                <span className="h-2 w-2 rounded-full bg-crimson-500 shrink-0" />
                <span>33 Yıllık Köklü Eğitim Deneyimi · %100 Maarif Uyumu</span>
              </div>

              <MaskedLines
                as="h1"
                className="text-[2.15rem] sm:text-5xl lg:text-[3.75rem] font-extrabold tracking-tight leading-[1.12]"
                lines={[
                  "Her Öğrenciye",
                  <span key="ayni-egitim" className="text-cobalt-200">
                    Aynı Eğitim Değil,
                  </span>,
                  <span
                    key="dogru-egitim"
                    className="inline-block bg-crimson-600 text-white px-4 py-1 rounded-xl shadow-crimson"
                  >
                    Doğru Eğitim.
                  </span>,
                ]}
              />

              <p className="mt-6 text-base sm:text-lg text-cobalt-100 leading-relaxed max-w-2xl">
                33 yıllık köklü eğitim deneyimimiz ve yeni nesil Maarif Modeline hâkim uzman kadromuzla, kitlesel kalıpları bir kenara bırakıyoruz. İlkokuldan üniversiteye her öğrencimizin anlama hızına, eksiklerine ve hedeflerine özel kurgulanmış <strong className="text-white font-bold">birebir VIP özel ders</strong> ve <strong className="text-white font-bold">eğitim koçluğu</strong> sunuyoruz.
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm text-cobalt-200">
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-crimson-500" />
                  <strong className="text-white font-bold">İstanbul:</strong> 39 İlçede Evinizde Yüz Yüze
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <strong className="text-white font-bold">Tüm Türkiye:</strong> 81 İlde Canlı Online
                </span>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3.5">
                <MagneticLink
                  href={getWhatsAppUrl()}
                  external
                  variant="crimson"
                >
                  Ücretsiz Tanışma Seansı
                </MagneticLink>
                <MagneticLink
                  href="/egitim-programlarimiz"
                  variant="outline-light"
                >
                  Eğitim Programlarımız
                </MagneticLink>
              </div>
            </div>

            {/* Sağ Sütun — Doğru Oranlanmış Görsel Stüdyo Kartı */}
            <div className="lg:col-span-6 min-w-0">
              <PhotoFrame
                src={assetPath("/images/hero-one-on-one.jpg")}
                alt="AYBAR AKADEMİ Birebir Özel Ders"
                aspectClass="aspect-[4/3]"
                priority
                caption={
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs sm:text-[13px] font-bold">
                    <span className="text-cobalt-950 flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-crimson-600" />
                      Birebir VIP Özel Ders
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-cobalt-50 text-cobalt-800">
                      Kişiye Özel Yol Haritası
                    </span>
                  </div>
                }
              />
            </div>
          </div>

          {/* Hero Tabanı: 4 Kurumsal Güven Sütunu (Sıfır Anlatım Bozukluğu, Net ve Güçlü) */}
          <div className="mt-12 pt-8 border-t border-white/15 grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center gap-3.5">
              <span className="font-brand text-2xl sm:text-3xl font-extrabold text-white">33 Yıl</span>
              <div className="text-xs sm:text-[13px] text-cobalt-100 leading-snug">
                <strong className="text-white block font-bold">Köklü Deneyim</strong>
                Çeyrek asrı aşan uzman kadro
              </div>
            </div>
            <div className="flex items-center gap-3.5">
              <span className="font-brand text-2xl sm:text-3xl font-extrabold text-white">%100</span>
              <div className="text-xs sm:text-[13px] text-cobalt-100 leading-snug">
                <strong className="text-white block font-bold">Maarif Modeli</strong>
                Yeni nesil beceri temelli
              </div>
            </div>
            <div className="flex items-center gap-3.5">
              <span className="font-brand text-2xl sm:text-3xl font-extrabold text-white">İstanbul</span>
              <div className="text-xs sm:text-[13px] text-cobalt-100 leading-snug">
                <strong className="text-white block font-bold">39 İlçede Yüz Yüze</strong>
                Evinizin konforunda özel ders
              </div>
            </div>
            <div className="flex items-center gap-3.5">
              <span className="font-brand text-2xl sm:text-3xl font-extrabold text-crimson-400">81 İl</span>
              <div className="text-xs sm:text-[13px] text-cobalt-100 leading-snug">
                <strong className="text-white block font-bold">Canlı Online Eğitim</strong>
                Tüm Türkiye’de kesintisiz erişim
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Canlı, Şık ve Prestijli 4 Bölüm Yönlendirmesi */}
      <section className="py-14 sm:py-20 bg-paper border-b border-cobalt-900/10">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">
          <SectionHeader
            eyebrow="BÖLÜMLERİMİZ"
            title="İncelemek İstediğiniz Alanı Seçin"
            subtitle="İhtiyacınız olan bölüme doğrudan geçerek detayları inceleyebilirsiniz."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {GUIDED_SECTIONS.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white border border-cobalt-900/10 shadow-sm hover:border-cobalt-700/50 hover:shadow-card hover:-translate-y-1 transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="h-12 w-12 rounded-xl bg-cobalt-50 text-cobalt-700 group-hover:bg-cobalt-700 group-hover:text-white flex items-center justify-center shrink-0 transition-colors shadow-sm">
                        <Icon className="h-6 w-6" />
                      </span>
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-paper-warm text-[11px] font-extrabold tracking-wider text-cobalt-800">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-extrabold text-ink group-hover:text-cobalt-700 transition-colors tracking-tight">
                      {item.title}
                    </h3>

                    <p className="mt-2.5 text-sm sm:text-[14.5px] text-ink-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-5 mt-4 border-t border-cobalt-900/5 flex items-center justify-between text-xs sm:text-sm font-bold text-cobalt-700 group-hover:text-crimson-600 transition-colors">
                    <span>Bölümü İncele</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. 33 Yıllık Deneyim & Çözümlerimiz (Kız Fotoğrafı Yerine Tam Alakalı Mentorluk Fotoğrafı) */}
      <section className="py-14 sm:py-20 bg-white border-b border-cobalt-900/10">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Sol Sütun — Deneyimli Öğretmen & Maarif Modeli Mentorluk Fotoğrafı */}
            <div className="lg:col-span-5 lg:sticky lg:top-24">
              <PhotoFrame
                src={assetPath("/images/maarif-academic-mentorship.jpg")}
                alt="AYBAR AKADEMİ 33 Yıllık Köklü Eğitim Deneyimi ve Maarif Modeli Mentorluk"
                aspectClass="aspect-[4/3]"
                caption={
                  <div className="flex items-center justify-between text-xs font-bold text-cobalt-950 px-1">
                    <span className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-crimson-600 animate-pulse" />
                      Türkiye Yüzyılı Maarif Modeli
                    </span>
                    <span className="text-crimson-600 font-extrabold">Alanında Uzman Kadro</span>
                  </div>
                }
              />
              <div className="mt-4 p-4 rounded-xl bg-cobalt-950 text-white border border-cobalt-800 text-xs sm:text-sm text-center font-bold shadow-sm">
                İstanbul’un 39 İlçesinde Evinizde Yüz Yüze · 81 İlde Canlı Online
              </div>
            </div>

            {/* Sağ Sütun — Zengin, Ferah ve Nitelikli Çözüm Listesi */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 mb-2.5">
                <span className="h-2 w-2 rounded-full bg-crimson-600 inline-block" />
                <span className="text-xs font-bold tracking-wider uppercase text-cobalt-700">
                  {aboutContent.eyebrow}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-ink">
                {aboutContent.headline}
              </h2>

              <p className="mt-4 text-base text-ink-muted leading-relaxed">
                Eğitim yalnızca ders anlatmaktan ibaret değildir; doğru rehberlik, sürekli takip ve disiplinli bir çalışma ortamı başarının vazgeçilmez unsurlarıdır.
              </p>

              {/* Çözümler: Zengin, Numaralandırılmış Şık Çözüm Kartları */}
              <div className="mt-8 space-y-4">
                {aboutContent.solutions.map((solution, sIdx) => (
                  <div
                    key={solution.index}
                    className="p-5 sm:p-6 rounded-2xl bg-paper border border-cobalt-900/10 shadow-sm hover:border-cobalt-700/40 hover:bg-white transition-all flex items-start gap-4"
                  >
                    <span
                      className={`inline-flex items-center justify-center h-8 px-3 rounded-lg text-xs font-extrabold shrink-0 mt-0.5 ${
                        sIdx === 0
                          ? "bg-crimson-600 text-white"
                          : "bg-cobalt-700 text-white"
                      }`}
                    >
                      {solution.index}
                    </span>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-ink">
                        {solution.title}
                      </h3>
                      <p className="mt-1.5 text-sm sm:text-base text-ink-muted leading-relaxed">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <MagneticLink href="/hakkimizda" variant="cobalt">
                  Hakkımızda Sayfasını İncele
                </MagneticLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Kurucumuzun Mesajı (Bahadır AYBAR) — Metni Bölmeden, Vurucu Cümleleri Vurgulayarak */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Sol Kurumsal Mühür */}
            <div className="lg:col-span-4 lg:sticky lg:top-24">
              <div className="p-6 rounded-2xl bg-paper border border-cobalt-900/10 text-center">
                <div className="flex justify-center">
                  <AybarInstitutionalSeal variant="light" />
                </div>
                <div className="mt-5 pt-4 border-t border-cobalt-900/10">
                  <div className="font-brand text-lg font-extrabold tracking-wide text-cobalt-950">
                    {founderMessage.author}
                  </div>
                  <div className="mt-0.5 text-xs font-bold text-crimson-600">
                    {founderMessage.role}
                  </div>
                </div>
              </div>
            </div>

            {/* Sağ Kurucu Mektubu — Orijinal Metin Eksiksiz, Vurucu Yerler Vurgulu, Kutusuz ve Saygın */}
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cobalt-50 mb-3">
                <span className="h-2 w-2 rounded-full bg-crimson-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-cobalt-800">
                  {founderMessage.eyebrow}
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-extrabold text-ink leading-snug">
                {founderMessage.salutation}
              </h2>

              <div className="mt-6 space-y-4 text-[15px] sm:text-base text-ink-muted leading-relaxed">
                <p>
                  Eğitim, bireyin içindeki potansiyeli keşfetme, onu en doğru şekilde işleme ve geleceğe güvenle taşıma yolculuğudur. Bu yolculuğun her aşamasında,{" "}
                  <strong className="text-cobalt-950 font-bold">
                    her bireyin öğrenme hızının, ilgi alanlarının ve hedeflerinin benzersiz olduğuna
                  </strong>{" "}
                  inanıyoruz. İşte tam da bu yüzden, kitlesel ve tek düze eğitim kalıplarını bir kenara bırakarak,{" "}
                  <strong className="text-crimson-600 font-extrabold">
                    birebir eğitime dayalı, kişiye özel ve “VIP” standartlarında bir öğrenme modeli
                  </strong>{" "}
                  inşa ettik.
                </p>

                <p>
                  Kurumumuz, ilkokul çağındaki bir çocuğun okul destek derslerinden,{" "}
                  <strong className="text-cobalt-950 font-bold">
                    LGS, YKS, KPSS ve ALES gibi hayatın dönüm noktası sayılan akademik sınavlara kadar
                  </strong>{" "}
                  çok geniş bir yelpazede eğitim ve koçluk hizmeti sunmaktadır. Sadece akademik başarıyı değil; çocuklardan yetişkinlere kadar her yaş grubunun kişisel gelişimini de önemsiyoruz. Bu doğrultuda, dünya vatandaşı bireyler yetiştiren yabancı dil eğitimlerimizden, ruhu ve bedeni besleyen spor ve sanat programlarımıza kadar{" "}
                  <strong className="text-cobalt-950 font-bold">
                    hayatın her alanına dokunan zengin bir içerik
                  </strong>{" "}
                  sağlıyoruz.
                </p>

                <p>
                  Günümüz dünyasının getirdiği esneklik ve hız ihtiyacının farkındayız. Bu nedenle, öğrencilerimizin konforunu ön planda tutarak,{" "}
                  <strong className="text-cobalt-950 font-bold">
                    teknolojik olanaklarla donatılmış online canlı dersler ile samimi ve odaklanmayı artıran yüz yüze özel ders modellerini
                  </strong>{" "}
                  bir arada sunuyoruz. Zaman ve mekân sınırlarını ortadan kaldırarak,{" "}
                  <strong className="text-cobalt-950 font-bold">
                    alanında uzman, dinamik ve tecrübeli öğretmen kadromuzu
                  </strong>{" "}
                  doğrudan sizin hedeflerinize yönlendiriyoruz.
                </p>

                <p>
                  Bizim için eğitim; sadece az sayıda öğrenciye klasik anlamda ders vermek değil,{" "}
                  <strong className="text-cobalt-950 font-bold">
                    her bir öğrencimizin mentörlüğünü üstlenmek, onun kaygılarını yönetmek, eksiklerini nokta atışı tespit etmek
                  </strong>{" "}
                  ve başarıya giden yolda en güçlü yol arkadaşı olmaktır. Geliştirdiğimiz güçlü takip sistemleri ve kişiselleştirilmiş programlar sayesinde,{" "}
                  <strong className="text-crimson-600 font-extrabold">
                    her öğrencimizin kendi zirvesine ulaşmasını sağlamak
                  </strong>{" "}
                  en büyük gurur kaynağımızdır.
                </p>

                <p className="text-cobalt-950 font-bold text-base sm:text-lg pt-2 border-t border-cobalt-900/10">
                  “Geleceği tesadüflere değil, doğru planlanmış bir eğitime emanet etmek isteyen herkesi, bu ayrıcalıklı ve başarı odaklı eğitim dünyasına davet ediyorum.”
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-cobalt-900/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <p className="text-xs sm:text-sm text-ink-muted">
                    {founderMessage.closing}
                  </p>
                  <div className="font-brand text-base sm:text-lg font-extrabold text-cobalt-950 mt-1">
                    {founderMessage.author}
                  </div>
                  <div className="text-xs font-semibold text-cobalt-700">
                    {founderMessage.role}
                  </div>
                </div>

                <MagneticLink
                  href={getWhatsAppUrl()}
                  external
                  variant="crimson"
                >
                  Ücretsiz Tanışma Seansı
                </MagneticLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sıkça Sorulan Sorular — Maarif Modeli ve VIP Birebir Süreç Standartları */}
      <FaqSection />

      <NextChapterBanner
        title={programsIntro.headline}
        description={programsIntro.closing}
        href="/egitim-programlarimiz"
        buttonLabel="Eğitim Programlarımız"
      />
    </div>
  );
}
