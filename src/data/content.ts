export interface ProgramItem {
  title: string;
  leaderNote?: string;
  description?: string;
  subjects: string[];
  featured?: boolean;
}

export interface ProgramCategory {
  id: string;
  code: string;
  shortTitle: string;
  title: string;
  tagline?: string;
  summary?: string;
  items: ProgramItem[];
}

export const founderMessage = {
  eyebrow: "KURUCUMUZUN MESAJI",
  salutation:
    "Değerli Öğrencilerimiz, Kıymetli Velilerimiz ve Hayat Boyu Öğrenmeyi İlke Edinen Eğitim Dostlarımız,",
  paragraphs: [
    "Eğitim, bireyin içindeki potansiyeli keşfetme, onu en doğru şekilde işleme ve geleceğe güvenle taşıma yolculuğudur. Bu yolculuğun her aşamasında, her bireyin öğrenme hızının, ilgi alanlarının ve hedeflerinin benzersiz olduğuna inanıyoruz. İşte tam da bu yüzden, kitlesel ve tek düze eğitim kalıplarını bir kenara bırakarak, birebir eğitime dayalı, kişiye özel ve “VIP” standartlarında bir öğrenme modeli inşa ettik.",
    "Kurumumuz, ilkokul çağındaki bir çocuğun okul destek derslerinden, LGS, YKS, KPSS ve ALES gibi hayatın dönüm noktası sayılan akademik sınavlara kadar çok geniş bir yelpazede eğitim ve koçluk hizmeti sunmaktadır. Sadece akademik başarıyı değil; çocuklardan yetişkinlere kadar her yaş grubunun kişisel gelişimini de önemsiyoruz. Bu doğrultuda, dünya vatandaşı bireyler yetiştiren yabancı dil eğitimlerimizden, ruhu ve bedeni besleyen spor ve sanat programlarımıza kadar hayatın her alanına dokunan zengin bir içerik sağlıyoruz.",
    "Günümüz dünyasının getirdiği esneklik ve hız ihtiyacının farkındayız. Bu nedenle, öğrencilerimizin konforunu ön planda tutarak, teknolojik olanaklarla donatılmış online canlı dersler ile samimi ve odaklanmayı artıran yüz yüze özel ders modellerini bir arada sunuyoruz. Zaman ve mekân sınırlarını ortadan kaldırarak, alanında uzman, dinamik ve tecrübeli öğretmen kadromuzu doğrudan sizin hedeflerinize yönlendiriyoruz.",
    "Bizim için eğitim; sadece az sayıda öğrenciye klasik anlamda ders vermek değil, her bir öğrencimizin mentorluğunu üstlenmek, onun kaygılarını yönetmek, eksiklerini nokta atışı tespit etmek ve başarıya giden yolda en güçlü yol arkadaşı olmaktır. Geliştirdiğimiz güçlü takip sistemleri ve kişiselleştirilmiş programlar sayesinde, her öğrencimizin kendi zirvesine ulaşmasını sağlamak en büyük gurur kaynağımızdır.",
    "Geleceği tesadüflere değil, doğru planlanmış bir eğitime emanet etmek isteyen herkesi, bu ayrıcalıklı ve başarı odaklı eğitim dünyasına davet ediyorum.",
  ],
  closing: "Sevgi, saygı ve başarı dileklerimle.",
  author: "Bahadır AYBAR",
  role: "AYBARİst AKADEMİ Kurucusu",
};

export const aboutContent = {
  eyebrow: "HAKKIMIZDA",
  introParagraphs: [
    "AYBARİst AKADEMİ, 33 yıllık köklü eğitim deneyimini, alanında uzman ve profesyonel, yeni nesil Maarif Modeline hâkim öğretmen kadrosuyla birleştiren çağdaş bir eğitim kurumudur.",
    "Eğitimde çeyrek asrı aşan bu güçlü tecrübemizle, her öğrencimizi hayallerindeki geleceğe sevgi, ilgi ve akademik disiplinle hazırlıyoruz. Bizim için başarı bir tesadüf değil; doğru yönlendirme, kesintisiz takip ve doğru yöntemlerle kazanılan kalıcı bir alışkanlıktır.",
  ],
  solutionsIntro:
    "Öğrencilerimizin potansiyelini zirveye taşımak ve eğitim yolculuğunda fark yaratmak adına sunduğumuz çözümler:",
  solutions: [
    {
      index: "01",
      title: "Kişiye Özgü Bireyselleştirilmiş Program",
      description:
        "Her öğrencinin öğrenme hızı, algı dünyası ve ihtiyaçları farklıdır. AYBARİst AKADEMİ'de eğitim, standart kalıplarla değil, öğrencinin eksiklerine ve hedeflerine özel hazırlanan bireysel programlarla yürütülür.",
    },
    {
      index: "02",
      title: "Sürekli Performans Takibi ve Sınav Analizleri",
      description:
        "Gelişimi şansa bırakmıyoruz. Düzenli olarak gerçekleştirdiğimiz performans takipleri ve detaylı sınav analizleri sayesinde, öğrencinin zorlandığı noktaları (problemleri) anında saptıyor, nokta atışı müdahalelerle sorunu hızla gideriyoruz.",
    },
    {
      index: "03",
      title: "Alanında Uzman ve Profesyonel Kadro",
      description:
        "Derslerimizi, sadece branşına hâkim değil, aynı zamanda öğrenciyle doğru iletişim kurabilen, motivasyonu yüksek ve tecrübeli uzman öğretmenlerimizle yürütüyoruz.",
    },
  ],
  reachHeadline: "Eğitimde Sınır Tanımıyoruz",
  reachItems: [
    {
      title: "İstanbul’un Tüm İlçelerinde",
      description:
        "Evinizin konforunda, güvenli ve verimli bir ortamda birebir yüz yüze özel ders hizmeti sağlıyoruz.",
    },
    {
      title: "Tüm Türkiye’de",
      description:
        "Teknolojinin tüm imkânlarını kullanarak, coğrafi sınırları ortadan kaldıran, interaktif ve yüksek verimli online eğitim modellerimizle yanınızdayız.",
    },
  ],
  closingParagraph:
    "Başarıyı zirveye taşıyan eğitim yolculuğunda sağlam bir temel atmak, eksikleri hızla kapatmak, güvenli ve emin adımlarla hedefinize ulaşmak için doğru adrestesiniz. Başarıya giden bu yolda AYBARİst AKADEMİ ailesi olarak her an yanınızda olmaktan gurur duyuyoruz.",
};

export const programsIntro = {
  eyebrow: "AYBARİst AKADEMİ’DE ÖZEL DERS",
  headline: "Sizin İçin Hazırladığımız Başarı Odaklı Eğitim Programlarımız",
  lead: "AYBARİst AKADEMİ'de geleceğinizi şansa bırakmayın; eğitimi uzmanından, bizzat size özel tasarlanmış bir programla alın. Alanında profesyonel, vizyoner kadromuzla ilkokuldan üniversiteye, ulusal sınavlardan uluslararası kariyer basamaklarına kadar her yaş grubuna ve her seviyeye uygun, tamamen birebir özel derslerimizle başarıyı bir hedef olmaktan çıkarıp sizi zirveye taşıyan bir standart haline getiriyoruz.",
  closing:
    "Hedefiniz ne olursa olsun, birebir öğrenme modeli ve uzman kadromuzla başarıya giden en kısa ve etkili yolu birlikte inşa ediyoruz.",
};

export const programCategories: ProgramCategory[] = [
  {
    id: "sinav-hazirlik",
    code: "01",
    shortTitle: "Sınav Hazırlık",
    title: "Sınav Hazırlık Öğrencileri",
    tagline: "Hayallerinizdeki Üniversite ve Liseler İçin Zirveye Yolculuk.",
    summary:
      "Sınav maratonunda kitlesel eğitimlerin kalabalığında kaybolmayın. Kişiye özel stratejilerle, eksiklerinizi avantaja dönüştürüyoruz.",
    items: [
      {
        title: "YKS (TYT - AYT)",
        subjects: [
          "Matematik",
          "Geometri",
          "Fizik",
          "Kimya",
          "Biyoloji",
          "Türk Dili ve Edebiyatı",
          "Tarih",
          "Coğrafya",
          "Felsefe",
          "Psikoloji",
          "Sosyoloji",
          "Mantık",
          "YKS KOÇLUK",
        ],
      },
      {
        title: "LGS",
        subjects: [
          "Matematik",
          "Fen Bilgisi",
          "Türkçe",
          "Sosyal Bilgiler",
          "İngilizce",
          "LGS KOÇLUK",
        ],
      },
      {
        title: "KPSS (Genel Yetenek - Genel Kültür)",
        subjects: ["Türkçe", "Matematik", "Tarih", "Coğrafya", "Vatandaşlık"],
      },
      {
        title: "KPSS Eğitim Bilimleri (Öğretmen Adayları İçin)",
        featured: true,
        leaderNote:
          "AYBARİst AKADEMİ Kurucusu Bahadır Aybar Liderliğinde Tüm Eğitim Bilimleri Birebir Özel Dersleri.",
        description:
          "Tüm Eğitim Bilimleri dersleri bizzat kurumumuzun kurucusu Bahadır Aybar tarafından yüksek akademik standartlarda verilmektedir.",
        subjects: [
          "Eğitim Psikolojisi",
          "Eğitimde Öğretim Yöntem ve Teknikleri",
          "Ölçme ve Değerlendirme",
          "Program Geliştirme",
          "Rehberlik ve Özel Eğitim",
          "Sınıf Yönetimi",
        ],
      },
      {
        title: "ALES",
        subjects: [
          "Türkçe",
          "Sözel Mantık",
          "Matematik",
          "Geometri",
          "Sayısal Mantık",
        ],
      },
    ],
  },
  {
    id: "okula-takviye",
    code: "02",
    shortTitle: "Okula Takviye",
    title: "Okula Takviye Programları",
    tagline: "Okul Sıralarında Tam Öğrenme ve Kusursuz Başarı.",
    summary:
      "Her sınıf düzeyinde yeni nesil Maarif Modeline tam uyumlu, kalıcı öğrenmeyi sağlayan KOÇLUK desteği.",
    items: [
      {
        title: "İlkokul Düzeyi (1 - 4. Sınıflar)",
        subjects: [
          "Türkçe",
          "Matematik",
          "Hayat Bilgisi ve Sosyal Bilgiler",
          "Fen Bilgisi",
          "İngilizce",
        ],
      },
      {
        title: "Ortaokul Düzeyi (5 - 8. Sınıflar)",
        subjects: [
          "Türkçe",
          "Matematik",
          "Fen Bilgisi",
          "T.C. İnkılâp Tarihi ve Atatürkçülük",
          "Sosyal Bilgiler",
          "İngilizce",
        ],
      },
      {
        title: "Lise Düzeyi (9 - 12. Sınıflar)",
        subjects: [
          "Türk Dili ve Edebiyatı",
          "Matematik ve Geometri",
          "Fizik",
          "Kimya",
          "Biyoloji",
          "Tarih",
          "Coğrafya",
          "Felsefe",
          "Psikoloji",
          "Sosyoloji",
          "Mantık",
        ],
      },
    ],
  },
  {
    id: "universite-akademik",
    code: "03",
    shortTitle: "Üniversite ve Akademik",
    title: "Üniversite Düzeyi ve Akademik Dersler",
    items: [
      {
        title:
          "AYBARİst AKADEMİ Kurucusu Bahadır Aybar'ın Liderliğinde İleri Düzey Akademik Mentorluk ve Birebir Özel Dersler",
        featured: true,
        description:
          "Felsefe, Sosyoloji ve Psikoloji bölümlerinde öğrenim gören üniversite öğrencilerine yönelik tüm akademik dersler bizzat kurucumuz Bahadır AYBAR tarafından yüksek akademik standartlarda verilmektedir.",
        subjects: ["Felsefe", "Sosyoloji", "Psikoloji"],
      },
    ],
  },
  {
    id: "dunya-dilleri",
    code: "04",
    shortTitle: "Dünya Dilleri",
    title: "Dünya Dilleri ve Uluslararası Sertifikasyon",
    tagline: "Dünya ile Konuşun, Sınırları Kaldırın!",
    summary:
      "Yabancı dil eğitiminde sadece konuşmayı değil, kariyerinizi şekillendirecek küresel sınavları hedefliyoruz.",
    items: [
      {
        title: "İngilizce",
        subjects: [
          "IELTS",
          "TOEFL iBT",
          "Cambridge English Exams (CPE, CAE, FCE)",
        ],
      },
      {
        title: "Almanca",
        subjects: ["Goethe-Zertifikat", "TestDaF", "telc Deutsch"],
      },
      {
        title: "Fransızca",
        subjects: ["DELF", "DALF", "TCF / TEF"],
      },
      {
        title: "Rusça",
        subjects: ["TORFL / TRKI"],
      },
      {
        title: "İtalyanca",
        subjects: ["CELI", "CILS", "TOLC"],
      },
      {
        title: "İspanyolca",
        subjects: ["DELE", "SIELE"],
      },
      {
        title: "Arapça",
        subjects: ["ALPT (Arabic Language Proficiency Test)"],
      },
      {
        title: "Felemenkçe",
        subjects: ["CNaVT", "Staatsexamen NT2"],
      },
      {
        title: "Çince",
        subjects: ["HSK", "HSKK (Speaking Test)"],
      },
      {
        title: "Japonca",
        subjects: ["JLPT"],
      },
      {
        title: "Portekizce",
        subjects: ["CAPLE", "Celpe-Bras"],
      },
    ],
  },
  {
    id: "ulusal-dil-sinavlari",
    code: "05",
    shortTitle: "YDT ve YDS",
    title: "Türkiye Özelindeki Ulusal Yabancı Dil Sınavları",
    items: [
      {
        title: "YDT",
        subjects: ["İngilizce", "Almanca", "Fransızca", "Rusça", "Arapça"],
      },
      {
        title: "YDS",
        subjects: [
          "İngilizce",
          "Almanca",
          "Fransızca",
          "Arapça",
          "Rusça",
          "İspanyolca",
          "İtalyanca",
          "Çince",
          "Hollandaca",
          "Japonca",
          "Portekizce",
        ],
      },
    ],
  },
  {
    id: "yasam-beceri-sanat",
    code: "06",
    shortTitle: "Yaşam, Beceri ve Sanat",
    title: "Yaşam, Beceri ve Sanat Odaklı Eğitimler",
    tagline: "Zihinsel Gelişimi Bedensel ve Sanatsal Özgürlükle Taçlandırın.",
    summary:
      "Sadece akademik değil, hayatın her alanında donanımlı bireyler yetiştiriyoruz.",
    items: [
      {
        title: "Spor Özel Dersleri",
        description: "Birebir eğitmen eşliğinde Yüzme dersleri",
        subjects: [],
      },
      {
        title: "Sürücülük Eğitimi",
        description: "Güvenli ve profesyonel Direksiyon Dersleri",
        subjects: [],
      },
      {
        title: "Sanat Akademisi",
        description: "Ruhunuzu besleyen Dans ve Müzik eğitimleri",
        subjects: [],
      },
    ],
  },
];

export const educationModelContent = {
  eyebrow: "EĞİTİM MODELİMİZ",
  headline: "Eğitim Modelimiz",
  lead: "AYBARİst AKADEMİ Eğitim Modeli; ezberci kalıpları yıkan, kişiye özel kurgulanmış VIP Süreç Yönetimi ve alanında uzman eğitmen kadrosuyla öğrencileri potansiyellerinin zirvesine taşıyan, Maarif Modeline uyumlu, bütüncül bir rehberlik ve başarı platformudur.",
  sections: [
    {
      code: "01",
      shortTitle: "VIP Süreç Yönetimi",
      title: "VIP Süreç Yönetimi: Kişiye Özel Eğitim Felsefesi",
      intro:
        "Standart ve kalabalık sınıfların sunduğu tek tip eğitim anlayışını geride bırakıyoruz. AYBARİst AKADEMİ'de eğitim; tamamen öğrencinin bireysel hızına, öğrenme stiline ve hedeflerine göre şekillenir:",
      points: [
        {
          label: "Birebir Özel Dersler ve Esnek Format",
          text: "Dersler; öğrencinin tercihine göre ister yüz yüze ister online olarak, en verimli şekilde işlenir.",
        },
        {
          label: "Deneyimli ve Profesyonel Kadro",
          text: "Alanında kanıtlanmış tecrübeye sahip, Yeni nesil Maarif Modeline hâkim öğretmen kadromuz, sadece ders anlatmakla kalmaz; öğrenciye alanına ilişkin liderlik eder.",
        },
        {
          label: "Güçlü Ödev ve Süreç Takibi",
          text: "Verilen her sorumluluk adım adım takip edilir, aksayan yönler anında fark edilerek telafi edilir.",
        },
      ],
    },
    {
      code: "02",
      shortTitle: "Eğitim Koçluğu",
      title: "Yol Arkadaşı Olarak Eğitim Koçluğu",
      intro:
        "Eğitim koçluğu; dışarıdan bir baskı aracı değil, öğrencinin kendi içindeki gücü keşfetmesini sağlayan profesyonel bir yol arkadaşlığıdır.",
      points: [
        {
          label: "Zaman Yönetimi ve Planlama · Ders Programı Hazırlama",
          text: "Okul, kurs, iş, sosyal ve kişisel zamanı dengeleyen, kişiye özel ve sürdürülebilir çalışma programları kurulur.",
        },
        {
          label: "Erteleme ile Mücadele",
          text: "Öğrencinin zamanı doğru yönetmesi ve sorumluluklarını vaktinde yerine getirmesi denetlenir.",
        },
        {
          label: "Etkili Çalışma Teknikleri",
          text: "Öğrenciye hızlı okuma, kalıcı not alma, hafıza teknikleri ve zihin haritaları gibi bilimsel ve pratik öğrenme metotları kazandırılır.",
        },
        {
          label: "Sınav Kaygısı ve Stres Yönetimi",
          text: "Özellikle LGS, YKS, KPSS ve ALES gibi dönüm noktası niteliğindeki kritik sınav maratonlarında; yoğun stres, sınav kaygısı ve özgüven eksikliği gibi duygusal engeller profesyonel yaklaşımlarla aşılır.",
        },
      ],
    },
    {
      code: "03",
      shortTitle: "Modelin Temel Taşları",
      title: "AYBARİst AKADEMİ Eğitim Modelinin Temel Taşları",
      intro: "",
      points: [
        {
          label: "Hedef Belirleme ve Strateji Geliştirme",
          text: "Öğrencinin kısa ve uzun vadeli akademik (hayalindeki lise veya üniversite) ve kişisel hedefleri netleştirilir; bu hedefe yürümek için gerçekçi eylem planları hazırlanır.",
        },
        {
          label: "Öğrenme Stratejileri ve Birebir Verimlilik",
          text: "Her öğrencinin görsel, işitsel ya da kinestetik öğrenme modeline sahip olduğu gerçeğinden hareketle; kitlesel eğitime veda edilir, tamamen birebir çalışma modeli uygulanır.",
        },
        {
          label: "İçsel Motivasyon",
          text: "Öğrencinin ders çalışmayı bir zorunluluk olmaktan çıkarıp kendi hedefleri doğrultusunda içsel bir istekle (baskı olmadan) harekete geçmesi sağlanır.",
        },
        {
          label: "Performans Takibi ve Geri Bildirim",
          text: "Deneme ve yazılı sınav sonuçları, düzenli olarak analiz edilir; programdaki aksaklıklar anında güncellenerek öğrenciye şeffaf geri bildirimler verilir.",
        },
      ],
    },
    {
      code: "04",
      shortTitle: "Aile, Veli ve Okul Köprüsü",
      title: "Aile, Veli ve Okul Arasında Güçlü Bir Köprü",
      intro:
        "Başarı yalnızca öğrenciyle sınırlı değildir. AYBARİst AKADEMİ'de her öğretmen; aile, veli ve okul üçgeninde sağlıklı bir köprü görevi üstlenir.",
      points: [
        {
          label: "",
          text: "Aileler, çocuklarının akademik gelişimi hakkında net ve şeffaf şekilde bilgilendirilir.",
        },
        {
          label: "",
          text: "Öğrenciye evde veya okulda yıpratıcı bir baskı kurulmasının önüne geçilerek pedagojik ve objektif yönlendirmelerle aileye rehberlik edilir.",
        },
      ],
    },
  ],
};

export const whyDifferentContent = {
  eyebrow: "AYBARİst AKADEMİ NEDEN FARKLI?",
  headline: "AYBARİst AKADEMİ'de Fark Yaratan Standart İlkeler",
  lead: "AYBARİst AKADEMİ; özel derste sıradan bilgi aktarımını değil, bilimsel temelli bir süreç yönetimini, kişiye özel mühendislik yaklaşımını ve bütüncül rehberliği standart hale getirir. Eğitim camiasında fark yaratan bu yaklaşım, “Tam Öğrenme” modelini merkezine alarak öğrencileri sıfır hata ile zirveye taşır.",
  principlesHeading: "AYBARİst AKADEMİ'de Fark Yaratan Standart İlkeler",
  principles: [
    {
      step: "01",
      title: "Ders Öncesi ve İlk Tanışma (Profesyonel Başlangıç)",
      items: [
        {
          title: "Öğrenme Stili Analizi",
          detail:
            "Bu süreçte öğrencinin akademik altyapısı, görsel/işitsel/kinestetik öğrenme stili ve derse karşı geliştirdiği zihinsel önyargılar saptanır.",
        },
        {
          title: "Öğrenci Sözleşmesi",
          detail:
            "Karşılıklı sorumlulukları, ders saatine sadakati ve ödev disiplinini netleştiren resmi olmayan bir “İş Birliği Taahhüdü” imzalanır. Sonrasında normal ders süresince ders yapılır.",
        },
      ],
    },
    {
      step: "02",
      title: "Derste Uygulanan Yenilikçi Yöntemler",
      items: [
        {
          title: "Kişiselleştirilmiş Yol Haritası (Dashboard)",
          detail:
            "Öğrenciye özel dijital veya basılı gelişim haritaları hazırlanır. Hangi konuda eksiklik olduğu, hangi konunun ne zaman biteceği görselleştirilerek öğrencide “süreç kontrolü” hissi uyandırılır.",
        },
        {
          title: "Flipped Classroom (Ters Yüz Sınıf) Modeli",
          detail:
            "Dersten bir gün önce öğrenciye 5-10 dakikalık kısa video, makale, soru veya formül gönderilir. Böylece öğrenci derse pasif bir dinleyici olarak başlamaz; aktif bir dinleyici ve katılımcı olarak, ön bilgi oluşturmuş, soru çözen, mantık yürüten aktif bir birey olarak gelir.",
        },
        {
          title: "Aktif Geri Çağırma (Active Recall) Kartları",
          detail:
            "Her dersin son 10 dakikasında öğrenilenler flashcard'lara (bilgi kartlarına) dökülür. Bir sonraki dersin ilk 10 dakikasında bu kartlarla mini bilgi yarışması yapılır.",
        },
      ],
    },
    {
      step: "03",
      title: "Teknoloji ve Materyal Kullanımı",
      items: [
        {
          title: "Kişiye Özel Hata Defteri ve Sıfırlama Tekniği",
          detail:
            "Öğrencinin ödevlerde, denemelerde ya da yazılı sınavlarda takıldığı soru tipleri dijital bir hata defterine işlenir. Sınav öncesinde genel tekrar yerine yalnızca bu hata havuzu eritilir; hatalar sıfırlanır ve bu da net artışını katlar.",
        },
      ],
    },
    {
      step: "04",
      title: "Veli İlişkileri ve İletişim",
      items: [
        {
          title: "Profesyonel Ders Sonu Raporu",
          detail:
            "Her dersin bitiminde veliye WhatsApp üzerinden “Bugün ne işledik, öğrencinin durumu ne, ödev nedir?” gibi başlıklar içeren net bir bilgilendirme bir şablon aracılığıyla iletilir.",
        },
        {
          title: "Aylık Performans Değerlendirmesi",
          detail:
            "Aylık periyotlarla veliye; daha önce çözülemeyen ve artık çözülebilen yeni soru adetleri, deneme ve yazılı sınavlarındaki puan yükselişleri ile odaklanma süresindeki gelişimi gösteren küçük bir rapor sunulur.",
        },
      ],
    },
    {
      step: "05",
      title: "Mentorluk ve Psikolojik Destek",
      items: [
        {
          title: "Sadece Öğretmen Değil, Aynı Zamanda Mentor",
          detail:
            "AYBARİst AKADEMİ öğretmenleri yalnızca ders anlatıp gitmez. Sınav stresi yönetimi, zaman planlaması ve motivasyon konusunda mentorluk yapar. Ders içerisinde ya da ders dışı bir zamanda, birkaç dakikasını öğrencisinin modunu yükseltmeye, haftasının nasıl geçtiğini dinlemeye ayırır. Sınav kaygısı yönetimi, zaman yönetimi ve verimli ders çalışma teknikleri konusunda da rehberlik yapar.",
        },
        {
          title: "Kesintisiz Ulaşılabilirlik (Soru Hattı)",
          detail:
            "Öğrenci evde çalışırken takıldığı sorunun fotoğrafını atar ya da bir bilgiyi sorar; öğretmen müsait olduğu ilk anda ses kaydı, yazılı soru çözümü veya video çözümle destek olur.",
        },
      ],
    },
  ],
  pedagogicalOutcome: {
    title: "Pedagojik Sonuç: Tam Öğrenme ve Zirveye Ulaşım",
    body: "Bu 5 temel ilke; öğretimi bir “ezber aktarımı” olmaktan çıkarıp ölçülebilir, denetlenebilir ve psikolojik olarak desteklenen bir sisteme dönüştürür. Flipped classroom ile ön öğrenme sağlanır, Active recall ile kalıcı hafıza pekiştirilir, dijital hata defteriyle eksikler sıfırlanır ve veli-öğrenci-öğretmen üçgeni şeffaf bir güven ilişkisiyle yürütülür. Sonuçta öğrenci, sınav kaygısından arınmış, kendi öğrenme stilinin farkında ve “Tam Öğrenme” düzeyine erişmiş olarak başarıya ulaşır.",
  },
};
