import React from "react";
import { assetPath } from "@/config/site";
import { PhotoFrame } from "@/components/motion/Primitives";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

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
      <section className="studio-hero border-b border-white/15 py-12 text-white sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-[1380px] grid-cols-1 items-center gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-10">
          <div className="lg:col-span-7">
            <p className="mb-4 text-xs font-bold tracking-wider text-cobalt-100">KURUCUMUZUN MESAJI</p>
            <h1 className="max-w-3xl text-[1.55rem] font-extrabold leading-[1.2] sm:text-4xl lg:text-5xl">
              Online canlı dersler ile yüzyüze özel ders modellerini birarada sunuyoruz.
            </h1>
          </div>
          <div className="lg:col-span-5">
            <PhotoFrame
              src={assetPath("/images/founder-bahadir.jpg")}
              alt="Kurucu Bahadır AYBAR çalışma masasında"
              aspectClass="aspect-[16/10]"
              priority
            />
          </div>
        </div>
      </section>
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="text-lg font-bold leading-relaxed text-ink sm:text-xl">
            Değerli Öğrencilerimiz, Kıymetli Velilerimiz ve Hayat Boyu Öğrenmeyi İlke Edinen Eğitim Dostlarımız,
          </p>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-muted sm:text-base">
            {PARAGRAPHS.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
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
