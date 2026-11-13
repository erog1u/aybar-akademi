// Avukatın gönderdiği metinler (Kasım 2026). Kelimesi kelimesine; değişiklik yalnız avukat onayıyla yapılır.
export type LegalBlock = { t: "h2" | "h3" | "p"; text: string } | { t: "ul"; items: string[] };
export type LegalDoc = { title: string; updated?: string; blocks: LegalBlock[] };

export const kvkkDoc: LegalDoc = {
  "title": "KİŞİSEL VERİLERİN İŞLENMESİNE İLİŞKİN AYDINLATMA METNİ",
  "blocks": [
    {
      "t": "h2",
      "text": "1. Veri Sorumlusunun Kimliği"
    },
    {
      "t": "p",
      "text": "6698 sayılı Kişisel Verilerin Korunması Kanunu (\"KVKK\") kapsamında, kişisel verileriniz aşağıda bilgileri bulunan veri sorumlusu tarafından işlenmektedir."
    },
    {
      "t": "p",
      "text": "Veri Sorumlusu: AYBARİst AKADEMİ (Kurucu: Bahadır AYBAR)"
    },
    {
      "t": "p",
      "text": "Adres: Carousel AVM - Workinton, Zeytinlik Mah. Fişekhane Cad. No:5 İçkapı No:17 Bakırköy/İstanbul"
    },
    {
      "t": "p",
      "text": "Telefon: 0543 976 67 34"
    },
    {
      "t": "p",
      "text": "E-posta: baybar@aybaristakademi.com"
    },
    {
      "t": "h2",
      "text": "2. İşlenen Kişisel Veriler ve Veri Toplama Yöntemleri"
    },
    {
      "t": "p",
      "text": "AYBARİst AKADEMİ tarafından sunulan eğitim, özel ders, çevrim içi eğitim ve danışmanlık hizmetleri kapsamında aşağıdaki kişisel veriler işlenebilmektedir:"
    },
    {
      "t": "h3",
      "text": "A. Teklif ve bilgi talep formları"
    },
    {
      "t": "p",
      "text": "İnternet sitemizde bulunan \"Hızlı Teklif\" formu aracılığıyla;"
    },
    {
      "t": "ul",
      "items": [
        "Öğrenciye ait ad ve soyadı,",
        "Öğrencinin sınıf düzeyi veya yaşı,",
        "İlçe veya semt bilgisi,",
        "Talep edilen ders ve eğitim hizmetine ilişkin bilgiler,",
        "İletişim telefon numarası,",
        "Gerekli olması hâlinde veliye ait ad ve soyadı"
      ]
    },
    {
      "t": "p",
      "text": "işlenebilmektedir."
    },
    {
      "t": "p",
      "text": "18 yaşından küçük öğrenciler bakımından formun veli tarafından doldurulması gerekmektedir. Yetişkin öğrenciler kendi bilgilerini kendileri iletebilir."
    },
    {
      "t": "p",
      "text": "Form aracılığıyla iletilen bilgiler, talebin değerlendirilmesi ve sizinle iletişime geçilebilmesi amacıyla kurumun kullandığı teknik altyapıda kaydedilir. Ayrıca form bilgileriniz WhatsApp üzerinden iletişim kurulabilmesi amacıyla ilgili bağlantıya aktarılabilir. WhatsApp uygulamasında mesajın açılması ve gönderilmesi aşamalarında Meta Platforms tarafından sunulan hizmetler devreye girebilir."
    },
    {
      "t": "h3",
      "text": "B. İletişim kanalları"
    },
    {
      "t": "p",
      "text": "Telefon, WhatsApp ve e-posta aracılığıyla bizimle iletişime geçmeniz hâlinde, iletişimin içeriğine bağlı olarak kimlik, iletişim ve talep bilgileri ile tarafınızca paylaşılan diğer kişisel veriler işlenebilir."
    },
    {
      "t": "h3",
      "text": "C. Eğitim ve kayıt süreçleri"
    },
    {
      "t": "p",
      "text": "Eğitim hizmeti hakkında görüşme yapılması, teklif sunulması ve kayıt işlemlerinin gerçekleştirilmesi sırasında öğrenci ve veli bilgileri, eğitim tercihleri, sözleşme ve hizmet bilgileri ile gerekli hâllerde ödeme ve fatura bilgileri işlenebilir."
    },
    {
      "t": "p",
      "text": "Kayıt işlemlerinin uzaktan veya yüz yüze gerçekleştirilmesi mümkündür. Bu süreçte işlenen veriler, ilgili eğitim hizmetinin sunulması ve sözleşmesel yükümlülüklerin yerine getirilmesi amacıyla kullanılmaktadır."
    },
    {
      "t": "h3",
      "text": "D. Yorum ve değerlendirme formu"
    },
    {
      "t": "p",
      "text": "İnternet sitemizde bulunan yorum formu aracılığıyla;"
    },
    {
      "t": "ul",
      "items": [
        "Ad ve soyadı,",
        "Veli veya öğrenci olduğunuz bilgisi,",
        "Puanlama,",
        "Yorum içeriği"
      ]
    },
    {
      "t": "p",
      "text": "işlenebilmektedir."
    },
    {
      "t": "p",
      "text": "Yorumlarda yer alan ad ve soyadı bilgisi, yayımlanmadan önce ad ve soyadın baş harfleri kullanılarak kısaltılır (örneğin \"Ayşe K.\")."
    },
    {
      "t": "p",
      "text": "Yorumlarınız, yayımlanmasına ilişkin ayrıca verdiğiniz açık rıza bulunması hâlinde internet sitemizde kamuya açık şekilde yayımlanır. Yorum formunda telefon ve e-posta bilgisi talep edilmez."
    },
    {
      "t": "p",
      "text": "Telefon numarası, e-posta adresi, bağlantı veya uygunsuz içerik barındıran yorumlar güvenlik ve içerik kontrolü amacıyla otomatik olarak yayına alınmayabilir."
    },
    {
      "t": "p",
      "text": "Yorumların kötüye kullanılmasını önlemek amacıyla IP adresinden oluşturulan tek yönlü kod gibi teknik güvenlik verileri de sınırlı süreyle işlenebilir."
    },
    {
      "t": "h2",
      "text": "3. Kişisel Verilerin İşlenme Amaçları ve Hukuki Sebepleri"
    },
    {
      "t": "p",
      "text": "Kişisel verileriniz, KVKK'nın 4, 5 ve ilgili hükümlerinde belirtilen genel ilkelere uygun olarak aşağıdaki amaçlarla işlenmektedir:"
    },
    {
      "t": "ul",
      "items": [
        "Eğitim ve özel ders taleplerinin alınması ve değerlendirilmesi,",
        "Eğitim programları hakkında bilgi verilmesi ve teklif hazırlanması,",
        "Öğrenci ve velilerle iletişim kurulması,",
        "Eğitim hizmetlerine ilişkin sözleşmelerin kurulması ve ifası,",
        "Kayıt, ödeme ve faturalandırma işlemlerinin yürütülmesi,",
        "Müşteri ve talep süreçlerinin yönetilmesi,",
        "İnternet sitesinin güvenliğinin sağlanması,",
        "Yorum ve değerlendirmelerin yönetilmesi,",
        "Hukuki yükümlülüklerin yerine getirilmesi,",
        "Olası uyuşmazlıklarda hukuki hakların korunması."
      ]
    },
    {
      "t": "p",
      "text": "Bu amaçlarla gerçekleştirilen kişisel veri işleme faaliyetleri, somut işleme faaliyetine göre KVKK'nın 5'inci maddesinde düzenlenen aşağıdaki hukuki sebeplere dayandırılmaktadır:"
    },
    {
      "t": "ul",
      "items": [
        "KVKK m. 5/2-c: Bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması kaydıyla sözleşmenin taraflarına ait kişisel verilerin işlenmesinin gerekli olması.",
        "KVKK m. 5/2-ç: Veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi için zorunlu olması.",
        "KVKK m. 5/2-f: İlgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla veri sorumlusunun meşru menfaatleri için veri işlenmesinin zorunlu olması.",
        "KVKK m. 5/1: İlgili kişinin belirli bir konuya ilişkin bilgilendirmeye dayanan ve özgür iradesiyle açıklanan açık rızasının bulunması."
      ]
    },
    {
      "t": "p",
      "text": "Açık rıza gerektiren faaliyetler bakımından ilgili kişilere ayrıca bilgilendirme yapılır ve gerekli rıza alınır."
    },
    {
      "t": "h2",
      "text": "4. Kişisel Verilerin Aktarılması"
    },
    {
      "t": "p",
      "text": "Kişisel verileriniz, işleme amaçlarıyla sınırlı olmak üzere ve ilgili mevzuata uygun şekilde aşağıdaki alıcı gruplarına aktarılabilir:"
    },
    {
      "t": "ul",
      "items": [
        "Teknik altyapı ve barındırma hizmeti sağlayıcıları: İnternet sitesinin barındırılması, güvenliğinin sağlanması ve form bilgilerinin işlenmesi amacıyla Cloudflare.",
        "İletişim hizmeti sağlayıcıları: WhatsApp üzerinden iletişimin gerçekleştirilmesi amacıyla Meta Platforms.",
        "E-posta hizmeti sağlayıcıları: Kurumsal e-posta iletişiminin yürütülmesi amacıyla Google Workspace.",
        "Teknik hizmet sağlayıcıları: İnternet sitesinin geliştirilmesi ve teknik bakımının yapılması amacıyla Eroğlu Solutions.",
        "Yetkili kamu kurum ve kuruluşları: Mevzuattan kaynaklanan yükümlülüklerin yerine getirilmesi veya hukuki taleplerin karşılanması amacıyla ilgili kurum ve kuruluşlar."
      ]
    },
    {
      "t": "p",
      "text": "Google Haritalar hizmetinin kullanılması hâlinde, harita hizmetinin çalışması için gerekli teknik bilgiler Google ile paylaşılabilir."
    },
    {
      "t": "p",
      "text": "Yurt dışında bulunan hizmet sağlayıcıların kullanılması nedeniyle kişisel verilerin yurt dışına aktarılması söz konusu olabilir. Bu tür aktarımlar, KVKK'nın 9'uncu maddesinde düzenlenen yurt dışına aktarım şartları ve uygun güvenceler sağlanarak gerçekleştirilir."
    },
    {
      "t": "h2",
      "text": "5. Kişisel Verilerin Saklanma Süreleri"
    },
    {
      "t": "p",
      "text": "Kişisel verileriniz, ilgili işleme amacının gerektirdiği süre boyunca ve ilgili mevzuatta öngörülen zamanaşımı ve saklama süreleri dikkate alınarak muhafaza edilir."
    },
    {
      "t": "p",
      "text": "Bu kapsamda;"
    },
    {
      "t": "ul",
      "items": [
        "Teklif formları aracılığıyla elde edilen bilgiler, talebin sonuçlandırılması ve olası yeniden iletişim ihtiyacı dikkate alınarak belirlenen saklama süresi boyunca, kural olarak en fazla bir yıl saklanır.",
        "Eğitim hizmeti kapsamında sözleşme, ödeme ve fatura süreçlerine ilişkin kayıtlar, ilgili mevzuatta öngörülen süreler boyunca saklanır.",
        "Yorum ve değerlendirme kayıtları, yayımlanma amacı devam ettiği sürece saklanır. İlgili kişinin kaldırma talebi veya işleme amacının sona ermesi hâlinde gerekli değerlendirme yapılarak silme veya anonimleştirme işlemi gerçekleştirilir.",
        "İnternet sitesi güvenliği için oluşturulan teknik kayıtlar, ilgili güvenlik amacının gerektirdiği süreyle sınırlı olarak saklanır."
      ]
    },
    {
      "t": "p",
      "text": "Saklama süresinin sona ermesi veya işleme amacının ortadan kalkması hâlinde kişisel veriler, KVKK ve ilgili mevzuata uygun şekilde silinir, yok edilir veya anonim hâle getirilir."
    },
    {
      "t": "h2",
      "text": "6. İlgili Kişinin Hakları"
    },
    {
      "t": "p",
      "text": "KVKK'nın 11'inci maddesi kapsamında kişisel verileri işlenen ilgili kişiler;"
    },
    {
      "t": "ul",
      "items": [
        "Kişisel verilerinin işlenip işlenmediğini öğrenme,",
        "Kişisel verileri işlenmişse buna ilişkin bilgi talep etme,",
        "Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,",
        "Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme,",
        "Eksik veya yanlış işlenmiş kişisel verilerin düzeltilmesini isteme,",
        "KVKK'nın 7'nci maddesinde öngörülen şartlar çerçevesinde kişisel verilerin silinmesini veya yok edilmesini isteme,",
        "Düzeltme, silme veya yok etme işlemlerinin kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,",
        "İşlenen verilerin münhasıran otomatik sistemler aracılığıyla analiz edilmesi suretiyle kişinin aleyhine bir sonucun ortaya çıkmasına itiraz etme,",
        "Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması hâlinde zararın giderilmesini talep etme"
      ]
    },
    {
      "t": "p",
      "text": "haklarına sahiptir."
    },
    {
      "t": "h2",
      "text": "7. Başvuru Yöntemi"
    },
    {
      "t": "p",
      "text": "KVKK'nın 11'inci maddesi kapsamındaki haklarınızı kullanmak için taleplerinizi;"
    },
    {
      "t": "p",
      "text": "Adres: Carousel AVM - Workinton, Zeytinlik Mah. Fişekhane Cad. No:5 İçkapı No:17 Bakırköy/İstanbul"
    },
    {
      "t": "p",
      "text": "E-posta: baybar@aybaristakademi.com"
    },
    {
      "t": "p",
      "text": "adreslerine, Veri Sorumlusuna Başvuru Usul ve Esasları Hakkında Tebliğ'de belirtilen usul ve esaslara uygun şekilde iletebilirsiniz."
    },
    {
      "t": "p",
      "text": "Başvurularınız, KVKK'nın 13'üncü maddesi kapsamında değerlendirilerek yasal süre içerisinde sonuçlandırılır."
    },
    {
      "t": "h2",
      "text": "8. Çocuklara Ait Kişisel Veriler"
    },
    {
      "t": "p",
      "text": "18 yaşından küçük öğrencilere ait kişisel verilerin işlenmesinde çocuğun üstün yararı, kişisel verilerin korunması ve ilgili mevzuat hükümleri gözetilir."
    },
    {
      "t": "p",
      "text": "Bu kapsamda teklif ve kayıt süreçlerine ilişkin işlemlerin veli veya kanuni temsilci aracılığıyla yürütülmesi esastır. Çocuklara ait kişisel veriler yalnızca ilgili hizmetin sunulması ve belirtilen işleme amaçlarının gerçekleştirilmesi için gerekli olduğu ölçüde işlenir."
    }
  ],
  "updated": "Son Güncelleme: 10 Kasım 2026"
};

export const cerezDoc: LegalDoc = {
  "title": "ÇEREZ POLİTİKASI",
  "blocks": [
    {
      "t": "h2",
      "text": "1. Amaç ve Kapsam"
    },
    {
      "t": "p",
      "text": "AYBARİst AKADEMİ olarak internet sitemizi ziyaret eden kullanıcıların gizliliğine önem veriyoruz."
    },
    {
      "t": "p",
      "text": "Bu Çerez Politikası, internet sitemizi ziyaret ettiğinizde kullanılan çerezler ve benzeri teknolojiler hakkında sizi bilgilendirmek amacıyla hazırlanmıştır."
    },
    {
      "t": "p",
      "text": "Politika kapsamında çerezlerin ne olduğu, hangi amaçlarla kullanıldığı, hangi durumlarda üçüncü taraf hizmet sağlayıcıların devreye girdiği ve çerez tercihlerinizi nasıl yönetebileceğiniz açıklanmaktadır."
    },
    {
      "t": "h2",
      "text": "2. Çerez Nedir?"
    },
    {
      "t": "p",
      "text": "Çerezler (cookies), ziyaret ettiğiniz internet siteleri tarafından tarayıcınız aracılığıyla cihazınıza kaydedilebilen küçük metin dosyalarıdır."
    },
    {
      "t": "p",
      "text": "Çerezler sayesinde internet sitelerinin düzgün çalışması, güvenliğin sağlanması ve kullanıcı tercihlerinin hatırlanması mümkün olabilir."
    },
    {
      "t": "p",
      "text": "Çerezler, kullanım amaçlarına ve özelliklerine göre farklı kategorilere ayrılabilir."
    },
    {
      "t": "h2",
      "text": "3. İnternet Sitemizde Kullanılan Çerezler"
    },
    {
      "t": "p",
      "text": "İnternet sitemizde reklam, pazarlama veya kullanıcı davranışlarını analiz etmeye yönelik çerezler kullanılmamaktadır."
    },
    {
      "t": "p",
      "text": "Sitenin mevcut teknik yapısı kapsamında aşağıdaki uygulamalar söz konusu olabilir:"
    },
    {
      "t": "h3",
      "text": "A. Kesinlikle Gerekli Çerezler"
    },
    {
      "t": "p",
      "text": "İnternet sitesinin güvenli ve düzgün çalışması için gerekli olan çerezlerdir."
    },
    {
      "t": "p",
      "text": "Cloudflare tarafından sunulan güvenlik hizmetleri kapsamında, gerekli görülmesi hâlinde güvenlik doğrulaması ve kötüye kullanımın önlenmesi amacıyla kısa süreli çerezler kullanılabilir."
    },
    {
      "t": "p",
      "text": "Bu çerezler internet sitesinin güvenliğinin ve erişilebilirliğinin sağlanması amacıyla kullanılmaktadır."
    },
    {
      "t": "h3",
      "text": "B. Google Haritalar Hizmeti"
    },
    {
      "t": "p",
      "text": "İnternet sitemizdeki harita, ziyaretçinin \"Haritayı göster\" düğmesine basması hâlinde yüklenir."
    },
    {
      "t": "p",
      "text": "Harita hizmeti Google tarafından sunulmaktadır. Haritanın yüklenmesiyle birlikte Google tarafından çerezler kullanılabilir ve ziyaretçinin IP adresi gibi teknik bilgiler Google'a iletilebilir."
    },
    {
      "t": "p",
      "text": "Google Haritalar hizmetinin kendi gizlilik ve çerez uygulamaları bulunmaktadır. Bu hizmetin kullanılmasına bağlı olarak Google tarafından işlenen veriler, Google'ın kendi politikaları kapsamında değerlendirilmektedir."
    },
    {
      "t": "h3",
      "text": "C. Reklam ve Analiz Çerezleri"
    },
    {
      "t": "p",
      "text": "İnternet sitemizde mevcut teknik yapı itibarıyla reklam, pazarlama veya kullanıcı davranışlarını izlemeye yönelik analiz çerezleri kullanılmamaktadır."
    },
    {
      "t": "p",
      "text": "Sayfa görüntülenme sayıları, kişisel veri içermeyen günlük toplam istatistikler şeklinde tutulmaktadır."
    },
    {
      "t": "h2",
      "text": "4. Çerezler Aracılığıyla İşlenebilecek Veriler"
    },
    {
      "t": "p",
      "text": "Çerezler ve benzeri teknolojiler aracılığıyla, kullanılan hizmetin niteliğine bağlı olarak aşağıdaki teknik veriler işlenebilir:"
    },
    {
      "t": "ul",
      "items": [
        "IP adresi,",
        "Tarayıcı ve cihaz bilgileri,",
        "Bağlantı ve güvenlik kayıtları,",
        "Ziyaret edilen sayfalara ilişkin teknik bilgiler,",
        "Kullanılan harita hizmetine ilişkin bağlantı bilgileri."
      ]
    },
    {
      "t": "p",
      "text": "Bu veriler, ilgili hizmetin çalıştırılması, internet sitesi güvenliğinin sağlanması ve talep edilen hizmetin sunulması amaçlarıyla sınırlı olarak işlenir."
    },
    {
      "t": "h2",
      "text": "5. Çerezlerin Hukuki Dayanağı"
    },
    {
      "t": "p",
      "text": "İnternet sitemizde kullanılan kesinlikle gerekli çerezler, internet sitesinin güvenli ve düzgün çalışabilmesi için gerekli oldukları ölçüde KVKK'nın 5'inci maddesinin ikinci fıkrası kapsamında uygun bir veri işleme şartına dayanılarak kullanılabilir."
    },
    {
      "t": "p",
      "text": "Kesinlikle gerekli olmayan işlevsel, analiz, performans veya reklam çerezlerinin kullanılması planlanması hâlinde, ilgili çerezlerin kullanımından önce gerekli bilgilendirme yapılır ve hukuken gerekli olduğu durumlarda kullanıcıların açık rızası alınır."
    },
    {
      "t": "h2",
      "text": "6. Üçüncü Taraf Hizmetler"
    },
    {
      "t": "p",
      "text": "İnternet sitemizde bazı hizmetler üçüncü taraf sağlayıcılar aracılığıyla sunulmaktadır."
    },
    {
      "t": "p",
      "text": "Bu kapsamda;"
    },
    {
      "t": "ul",
      "items": [
        "Cloudflare, internet sitesinin barındırılması ve güvenlik hizmetleri,",
        "Google, kullanıcı tarafından talep edilmesi hâlinde harita hizmeti"
      ]
    },
    {
      "t": "p",
      "text": "sunmaktadır."
    },
    {
      "t": "p",
      "text": "Bu hizmetlerin kullanılması sırasında ilgili sağlayıcılar tarafından teknik veriler işlenebilir ve kullanılan altyapıya bağlı olarak yurt dışına veri aktarımı söz konusu olabilir."
    },
    {
      "t": "p",
      "text": "Üçüncü taraf hizmet sağlayıcıların kendi çerez ve gizlilik politikaları ayrıca uygulanabilir."
    },
    {
      "t": "h2",
      "text": "7. Çerez Tercihlerinin Yönetilmesi"
    },
    {
      "t": "p",
      "text": "İnternet tarayıcılarının ayarları üzerinden çerezlerin kullanımını yönetebilir, mevcut çerezleri silebilir veya çerezlerin kaydedilmesini engelleyebilirsiniz."
    },
    {
      "t": "p",
      "text": "Çerezlerin tamamen engellenmesi hâlinde internet sitesinin bazı özellikleri veya güvenlik fonksiyonları düzgün çalışmayabilir."
    },
    {
      "t": "p",
      "text": "Çerez ayarları, kullandığınız tarayıcıya göre değişiklik gösterebilir."
    },
    {
      "t": "h2",
      "text": "8. Politika Değişiklikleri"
    },
    {
      "t": "p",
      "text": "AYBARİst AKADEMİ, internet sitesinin teknik altyapısında veya kullanılan üçüncü taraf hizmetlerde meydana gelen değişiklikler doğrultusunda bu Çerez Politikası'nı güncelleyebilir."
    },
    {
      "t": "p",
      "text": "Güncel politika internet sitesinde yayımlanır."
    },
    {
      "t": "h2",
      "text": "9. İletişim"
    },
    {
      "t": "p",
      "text": "Çerez Politikası ve kişisel verilerin korunması hakkında sorularınız için aşağıdaki iletişim kanallarından bize ulaşabilirsiniz."
    },
    {
      "t": "p",
      "text": "AYBARİst AKADEMİ"
    },
    {
      "t": "p",
      "text": "Adres: Carousel AVM - Workinton, Zeytinlik Mah. Fişekhane Cad. No:5 İçkapı No:17 Bakırköy/İstanbul"
    },
    {
      "t": "p",
      "text": "Telefon: 0543 976 67 34"
    },
    {
      "t": "p",
      "text": "E-posta: baybar@aybaristakademi.com"
    }
  ],
  "updated": "Son Güncelleme: 10 Kasım 2026"
};

export const iletiDoc: LegalDoc = {
  "title": "TİCARİ ELEKTRONİK İLETİ ONAY METNİ",
  "blocks": [
    {
      "t": "p",
      "text": "AYBARİst AKADEMİ (bundan sonra \"Kurum\" olarak anılacaktır.) tarafından sunulan eğitim, özel ders ve çevrim içi eğitim hizmetleri kapsamında; 6563 sayılı Elektronik Ticaretin Düzenlenmesi Hakkında Kanun ve ilgili mevzuat uyarınca tarafınıza ticari elektronik ileti gönderilebilmesi için onayınız talep edilmektedir."
    },
    {
      "t": "h2",
      "text": "Bilgilendirme"
    },
    {
      "t": "p",
      "text": "Ticari elektronik ileti; telefon, kısa mesaj (SMS), elektronik posta ve benzeri iletişim araçları kullanılarak ticari amaçlarla gönderilen veri, ses ve görüntü içerikli iletileri ifade eder."
    },
    {
      "t": "p",
      "text": "Mevzuat uyarınca ticari elektronik iletilerin gönderilebilmesi için, ilgili mevzuatta belirtilen istisnalar dışında, alıcının önceden onayının alınması gerekmektedir."
    },
    {
      "t": "p",
      "text": "Alıcılar, herhangi bir gerekçe göstermeksizin ticari elektronik ileti almayı reddedebilir. Ret bildiriminin Kuruma ulaşmasını takiben, mevzuatta öngörülen süre içerisinde ticari elektronik ileti gönderimi durdurulur."
    },
    {
      "t": "h2",
      "text": "Ticari Elektronik İleti Onayı"
    },
    {
      "t": "p",
      "text": "AYBARİst AKADEMİ tarafından; eğitim programları, özel ders hizmetleri, çevrim içi eğitimler, yeni hizmetler, kampanyalar, indirimler, duyurular, tanıtımlar ve benzeri pazarlama faaliyetleri hakkında tarafıma SMS yoluyla ticari elektronik ileti gönderilmesine onay veriyorum."
    },
    {
      "t": "p",
      "text": "Ticari elektronik ileti gönderimi amacıyla paylaştığım iletişim bilgilerimin, ilgili mevzuat kapsamında işlenmesini kabul ediyorum."
    },
    {
      "t": "p",
      "text": "Ticari elektronik ileti gönderilmesine ilişkin onayımı dilediğim zaman geri alabileceğim ve ret bildiriminde bulunmamın herhangi bir ücrete tabi olmayacağı konusunda bilgilendirildim."
    },
    {
      "t": "h2",
      "text": "Onayın Geri Alınması"
    },
    {
      "t": "p",
      "text": "Ticari elektronik ileti gönderilmesine ilişkin onayınızı dilediğiniz zaman;"
    },
    {
      "t": "ul",
      "items": [
        "Tarafınıza gönderilen SMS içerisinde yer alan ret yöntemini kullanarak,",
        "İleti Yönetim Sistemi (İYS) üzerinden https://vatandas.iys.org.tr adresine giriş yaparak,",
        "baybar@aybaristakademi.com adresine e-posta göndererek,",
        "0543 976 67 34 numaralı telefon üzerinden Kurum ile iletişime geçerek"
      ]
    },
    {
      "t": "p",
      "text": "geri alabilirsiniz."
    },
    {
      "t": "p",
      "text": "Ret bildiriminizin Kuruma ulaşmasının ardından, mevzuatta öngörülen süre içerisinde ticari elektronik ileti gönderimi durdurulacaktır."
    }
  ]
};
