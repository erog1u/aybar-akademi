import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni ve Çerezler",
  description:
    "AYBARİst AKADEMİ kişisel verilerin işlenmesi hakkında aydınlatma metni ve çerez bilgilendirmesi.",
  alternates: { canonical: "/kvkk/" },
};

const RIGHTS = [
  "Kişisel verilerinizin işlenip işlenmediğini öğrenme ve işlenmişse bilgi talep etme",
  "İşlenme amacını ve amaca uygun kullanılıp kullanılmadığını öğrenme",
  "Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme",
  "Eksik veya yanlış işlenmişse düzeltilmesini isteme",
  "KVKK md. 7 kapsamında silinmesini veya yok edilmesini isteme",
  "Düzeltme, silme ve yok etme işlemlerinin aktarılan üçüncü kişilere bildirilmesini isteme",
  "Yalnız otomatik sistemlerle analiz edilmesi sonucunda aleyhinize çıkan bir sonuca itiraz etme",
  "Kanuna aykırı işleme nedeniyle zarara uğramanız hâlinde zararın giderilmesini talep etme",
];

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-extrabold text-ink">{title}</h2>
      <div className="mt-3 space-y-3 text-base leading-relaxed text-ink-muted">{children}</div>
    </section>
  );
}

export default function KvkkPage() {
  return (
    <div className="bg-paper text-ink">
      <Breadcrumbs items={[{ label: "KVKK ve Çerezler", href: "/kvkk" }]} />
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        <h1 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          KVKK Aydınlatma Metni ve Çerezler
        </h1>
        <p className="mt-3 text-sm text-ink-muted">Son güncelleme: 8 Kasım 2026</p>

        <Block title="Veri sorumlusu">
          <p>
            6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında veri sorumlusu{" "}
            {siteConfig.name}&apos;dir (Kurucu: {siteConfig.founder.name}).
          </p>
          <p>Adres: {siteConfig.contact.address}</p>
          <p>Telefon: {siteConfig.contact.phoneDisplay}</p>
          <p>E-posta: {siteConfig.contact.email}</p>
        </Block>

        <Block title="Hangi bilgileri alıyoruz?">
          <p>
            Hızlı Teklif formunda öğrenci ve veli adı soyadı, öğrencinin sınıf düzeyi ya da yaşı, ilçe veya semt,
            ders tercihi ve iletişim numarası istenir.
          </p>
          <p>
            Gönder düğmesine bastığınızda form bilgileri, size dönüş yapabilmemiz için Cloudflare altyapısında
            kaydedilir ve yalnız kurumun yönetim panelinde görünür. Aynı anda bilgiler WhatsApp bağlantısına yazılır ve
            WhatsApp&apos;ta mesaj olarak açılır. Bu sırada bilgiler, mesajı göndermeniz beklenmeden WhatsApp&apos;a
            (Meta) iletilebilir. WhatsApp, telefon ya da e-posta ile
            paylaştığınız diğer bilgiler de bize bu yollarla ulaşır.
          </p>
          <p>Öğrenci 18 yaşından küçükse formu veli doldurmalıdır.</p>
        </Block>

        <Block title="Yorumlar">
          <p>
            Ana sayfadaki yorum formunda adınız soyadınız, veli ya da öğrenci olduğunuz, puanınız ve yorumunuz istenir.
            Adınız kaydedilmeden önce ad ve soyadın baş harfi biçimine çevrilir (ör. &quot;Ayşe K.&quot;). E-posta veya
            telefon istenmez.
          </p>
          <p>
            Yorumlar, onayınıza dayanarak (KVKK md. 5/1) gönderildiği anda sitede herkese açık yayınlanır. Telefon,
            e-posta, bağlantı veya uygunsuz ifade içeren yorumlar otomatik olarak yayına alınmaz. Kurum bir yorumu
            yalnızca belirli sebeplerle gizleyebilir; gizlenen yorumun yerinde gizlenme sebebi görünür. Yorum kayıtları
            Cloudflare altyapısında saklanır.
            Aynı bağlantıdan kısa sürede çok sayıda yorum gönderilmesini önlemek için IP adresinizden üretilen tek yönlü
            bir kod en çok 30 gün tutulur.
          </p>
          <p>
            Yorumunuzun kaldırılmasını istediğinizde {siteConfig.contact.email} adresine veya {siteConfig.contact.phoneDisplay}{" "}
            numarasına yazabilirsiniz. 18 yaşından küçükseniz yorumu veliniz göndermelidir.
          </p>
        </Block>

        <Block title="Neden ve hangi hukuki sebeple işliyoruz?">
          <p>
            Bilgileriniz talebinizi yanıtlamak, eğitim programları hakkında bilgi ve teklif vermek ve sizinle iletişim
            kurmak için işlenir. Hukuki sebepler KVKK md. 5/2 kapsamında bir sözleşmenin kurulması veya ifasıyla
            doğrudan ilgili olması, hukuki yükümlülükler ve meşru menfaattir. Veriler site formu, WhatsApp, telefon ve
            e-posta yoluyla toplanır.
          </p>
        </Block>

        <Block title="Kimlere aktarılabilir?">
          <p>
            Form bilgileri ve WhatsApp mesajları WhatsApp (Meta) hizmeti üzerinden iletilir. Bu hizmetin altyapısı yurt
            dışında olabilir. WhatsApp kullanmak istemezseniz bize telefonla ulaşabilirsiniz.
          </p>
          <p>
            Site Cloudflare altyapısında barındırılır. Bu altyapı, bağlantı ve güvenlik için IP adresi gibi teknik
            bilgileri işleyebilir ve yurt dışında olabilir. Sitenin teknik işleri Eroğlu Solutions tarafından yapılır.
          </p>
          <p>
            E-postalar Google Workspace üzerinden iletilir. Haritayı açarsanız adres sorgusu ve IP adresiniz Google&apos;a
            ulaşır. Google&apos;ın altyapısı yurt dışında olabilir.
          </p>
          <p>Kanunen zorunlu olduğunda bilgiler yetkili kurumlarla paylaşılabilir.</p>
        </Block>

        <Block title="Ne kadar saklıyoruz?">
          <p>Kişisel veriler işlenme amacının gerektirdiği ve mevzuatın öngördüğü süre kadar saklanır.</p>
          <p>
            Sitede kaydedilen teklif formları en çok 1 yıl sonra silinir. Kötüye kullanımı önlemek için IP adresinden
            üretilen tek yönlü kod form kaydında en çok 2 gün tutulur.
          </p>
        </Block>

        <Block title="Haklarınız (KVKK md. 11)">
          <ul className="list-disc space-y-2 pl-5">
            {RIGHTS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>
            Başvurunuzu yukarıdaki adrese yazılı olarak iletebilirsiniz. Başvurular KVKK md. 13 ve Veri Sorumlusuna
            Başvuru Usul ve Esasları Hakkında Tebliğ&apos;e göre değerlendirilir.
          </p>
        </Block>

        <Block title="Çerezler">
          <p>Bu site reklam veya analiz çerezi kullanmaz.</p>
          <p>
            Hangi sayfanın kaç kez açıldığı, çerez kullanılmadan ve kişisel veri tutulmadan, yalnız günlük toplam sayı
            olarak kaydedilir.
          </p>
          <p>Cloudflare, ziyaretçiye güvenlik sorgusu gösterirse bunun için kısa süreli bir çerez kullanabilir.</p>
          <p>
            İletişim sayfasındaki harita yalnız &quot;Haritayı göster&quot; düğmesine bastığınızda yüklenir. Harita
            Google tarafından sunulur ve Google kendi çerezlerini kullanabilir. WhatsApp ve Google Haritalar
            bağlantıları kendi gizlilik koşullarına tabidir.
          </p>
        </Block>
      </div>
    </div>
  );
}
