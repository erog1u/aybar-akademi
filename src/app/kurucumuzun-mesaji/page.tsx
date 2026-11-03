import React from "react";
import { assetPath } from "@/config/site";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import PageHero from "@/components/layout/PageHero";

const PARAGRAPHS = [
  "Eğitim, bireyin içindeki potansiyeli keşfetme, onu en doğru şekilde işleme ve geleceğe güvenle taşıma yolculuğudur. Bu yolculuğun her aşamasında, her bireyin öğrenme hızının, ilgi alanlarının ve hedeflerinin benzersiz olduğuna inanıyoruz. İşte tam da bu yüzden, kitlesel ve tek düze eğitim kalıplarını bir kenara bırakarak, birebir eğitime dayalı, kişiye özel ve \"VIP\" standartlarında bir öğrenme modeli inşa ettik.",
  "Kurumumuz, ilkokul çağındaki bir çocuğun okul destek derslerinden, LGS, YKS, KPSS ve ALES gibi hayatın dönüm noktası sayılan akademik sınavlara kadar çok geniş bir yelpazede eğitim ve koçluk hizmeti sunmaktadır. Sadece akademik başarıyı değil; çocuklardan yetişkinlere kadar her yaş grubunun kişisel gelişimini de önemsiyoruz. Bu doğrultuda, dünya vatandaşı bireyler yetiştiren yabancı dil eğitimlerimizden, ruhu ve bedeni besleyen spor ve sanat programlarımıza kadar hayatın her alanına dokunan zengin bir içerik sağlıyoruz.",
  "Günümüz dünyasının getirdiği esneklik ve hız ihtiyacının farkındayız. Bu nedenle, öğrencilerimizin konforunu ön planda tutarak, teknolojik olanaklarla donatılmış online canlı dersler ile samimi ve odaklanmayı artıran yüz yüze özel ders modellerini bir arada sunuyoruz. Zaman ve mekan sınırlarını ortadan kaldırarak, alanında uzman, dinamik ve tecrübeli öğretmen kadromuzu doğrudan sizin hedeflerinize yönlendiriyoruz.",
  "Bizim için eğitim; sadece az sayıda öğrenciye klasik anlamda ders vermek değil, her bir öğrencimizin mentörlüğünü üstlenmek, onun kaygılarını yönetmek, eksiklerini nokta atışı tespit etmek ve başarıya giden yolda en güçlü yol arkadaşı olmaktır. Geliştirdiğimiz güçlü takip sistemleri ve kişiselleştirilmiş programlar sayesinde, her öğrencimizin kendi zirvesine ulaşmasını sağlamak en büyük gurur kaynağımızdır.",
  "Geleceği tesadüflere değil, doğru planlanmış bir eğitime emanet etmek isteyen herkesi, bu ayrıcalıklı ve başarı odaklı eğitim dünyasına davet ediyorum.",
];

export default function KurucuPage() {
  return (
    <div className="bg-paper text-ink">
      <Breadcrumbs items={[{ label: "Kurucumuzun Mesajı" }]} />
      <PageHero
        eyebrow="Kurucumuzun Mesajı"
        title="Online canlı dersler ile yüzyüze özel ders modellerini birarada sunuyoruz."
        media={
          <img
            src={assetPath("/images/founder-bahadir.webp")}
            alt="AYBARİst Akademi kurucusu Bahadır Aybar"
            width={1152}
            height={864}
            decoding="async"
            fetchPriority="high"
            className="h-auto w-full rounded-2xl bg-white object-contain"
          />
        }
      />
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="text-lg font-bold leading-relaxed text-ink sm:text-xl">
            Değerli Öğrencilerimiz, Kıymetli Velilerimiz ve Hayat Boyu Öğrenmeyi İlke Edinen Eğitim Dostlarımız,
          </p>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-muted sm:text-base">
            {PARAGRAPHS.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8 border-t border-cobalt-900/10 pt-6">
            <p className="text-ink">Sevgi, saygı ve başarı dileklerimle...</p>
            <p className="mt-3 font-brand text-lg font-extrabold text-cobalt-950">Bahadır AYBAR</p>
            <p className="text-sm font-bold text-crimson-700">Kurucu</p>
          </div>
        </div>
      </section>
    </div>
  );
}
