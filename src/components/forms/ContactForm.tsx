"use client";

import React, { useState, useEffect, useId } from "react";
import {
  Sparkles,
  Check,
  User,
  Phone,
  Mail,
  FileText,
  ShieldCheck,
  AlertCircle,
  Loader2,
  ArrowUpRight,
  MessageCircle,
  RotateCcw,
  Clock,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { programCategories } from "@/data/content";
import {
  formatTurkishPhoneNumber,
  validateTurkishPhoneNumber,
  validateName,
  validateEmail,
  validateNote,
  buildSafeWhatsAppUrl,
  checkRateLimit,
  recordRateLimitAttempt,
} from "@/lib/security";

const LESSON_FORMATS = [
  {
    id: "yuz-yuze",
    title: "İstanbul Yüz Yüze (Tüm İlçeler)",
    subtitle: "Evinizin konforunda birebir özel ders",
  },
  {
    id: "online",
    title: "Canlı Online (Tüm Türkiye)",
    subtitle: "İnteraktif HD dijital ortamda birebir ders",
  },
] as const;

interface ContactFormProps {
  initialProgram?: string;
  initialFormat?: string;
  className?: string;
  compact?: boolean;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  note?: string;
  kvkk?: string;
  general?: string;
}

export default function ContactForm({
  initialProgram,
  initialFormat,
  className = "",
  compact = false,
}: ContactFormProps) {
  const formId = useId();

  // Form State
  const [selectedProgram, setSelectedProgram] = useState<string>(
    initialProgram || programCategories[0]?.shortTitle || "YKS & LGS Hazırlık"
  );
  const [format, setFormat] = useState<string>(
    initialFormat || LESSON_FORMATS[0].title
  );
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [note, setNote] = useState<string>("");
  const [kvkkAccepted, setKvkkAccepted] = useState<boolean>(true);

  // Interaction & Security State
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [cooldownSeconds, setCooldownSeconds] = useState<number>(0);
  const [generatedUrl, setGeneratedUrl] = useState<string>("");

  // Rate limit geri sayım sayacı
  useEffect(() => {
    if (cooldownSeconds <= 0) return;
    const interval = setInterval(() => {
      setCooldownSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [cooldownSeconds]);

  // Telefon numarasını otomatik formatla (+90 / 05xx)
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatTurkishPhoneNumber(e.target.value);
    setPhone(formatted);

    if (touched.phone) {
      const result = validateTurkishPhoneNumber(formatted, true);
      setErrors((prev) => ({
        ...prev,
        phone: result.isValid ? undefined : result.error,
      }));
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    if (touched.name) {
      const result = validateName(e.target.value, true);
      setErrors((prev) => ({
        ...prev,
        name: result.isValid ? undefined : result.error,
      }));
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (touched.email) {
      const result = validateEmail(e.target.value, false);
      setErrors((prev) => ({
        ...prev,
        email: result.isValid ? undefined : result.error,
      }));
    }
  };

  const handleNoteChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNote(e.target.value);
    if (touched.note) {
      const result = validateNote(e.target.value, 400);
      setErrors((prev) => ({
        ...prev,
        note: result.isValid ? undefined : result.error,
      }));
    }
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));

    if (field === "name") {
      const res = validateName(name, true);
      setErrors((prev) => ({ ...prev, name: res.isValid ? undefined : res.error }));
    } else if (field === "phone") {
      const res = validateTurkishPhoneNumber(phone, true);
      setErrors((prev) => ({ ...prev, phone: res.isValid ? undefined : res.error }));
    } else if (field === "email") {
      const res = validateEmail(email, false);
      setErrors((prev) => ({ ...prev, email: res.isValid ? undefined : res.error }));
    } else if (field === "note") {
      const res = validateNote(note, 400);
      setErrors((prev) => ({ ...prev, note: res.isValid ? undefined : res.error }));
    }
  };

  const validateAll = (): { isValid: boolean; cleanData: Record<string, string> } => {
    const nameRes = validateName(name, true);
    const phoneRes = validateTurkishPhoneNumber(phone, true);
    const emailRes = validateEmail(email, false);
    const noteRes = validateNote(note, 400);

    const nextErrors: FormErrors = {};

    if (!nameRes.isValid) nextErrors.name = nameRes.error;
    if (!phoneRes.isValid) nextErrors.phone = phoneRes.error;
    if (!emailRes.isValid) nextErrors.email = emailRes.error;
    if (!noteRes.isValid) nextErrors.note = noteRes.error;
    if (!kvkkAccepted) {
      nextErrors.kvkk = "Devam etmek için aydınlatma metnini onaylamanız gerekmektedir.";
    }

    setErrors(nextErrors);
    setTouched({
      name: true,
      phone: true,
      email: true,
      note: true,
      kvkk: true,
    });

    return {
      isValid: Object.keys(nextErrors).length === 0,
      cleanData: {
        name: nameRes.cleanValue,
        phone: phoneRes.display,
        rawPhone: phoneRes.normalized,
        email: emailRes.cleanValue,
        note: noteRes.cleanValue,
        program: selectedProgram,
        format: format,
      },
    };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Double submit engellemesi
    if (isSubmitting) return;

    // 2. Rate Limit Kontrolü
    const rateCheck = checkRateLimit("contact_form", 3, 60);
    if (!rateCheck.allowed) {
      setCooldownSeconds(rateCheck.retryAfterSeconds);
      setErrors((prev) => ({
        ...prev,
        general: `Çok fazla deneme yapıldı. Güvenlik gereği lütfen ${rateCheck.retryAfterSeconds} saniye bekleyiniz.`,
      }));
      return;
    }

    // 3. Doğrulama ve Sanitizasyon
    const { isValid, cleanData } = validateAll();
    if (!isValid) {
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      // Çift tıklama ve işlem hissi için kısa simülasyon gecikmesi
      await new Promise((resolve) => setTimeout(resolve, 600));

      // WhatsApp Başvuru Mesajını Güvenli İnşa Et
      const lines = [
        "Merhaba, AYBARİst AKADEMİ hakkında bilgi almak istiyorum.",
        "",
        `📚 Eğitim Alanı: ${cleanData.program}`,
        `📍 Ders Tercihi: ${cleanData.format}`,
        `👤 Öğrenci / Veli: ${cleanData.name}`,
        `📞 İletişim Numarası: ${cleanData.phone}`,
        cleanData.email ? `✉️ E-Posta: ${cleanData.email}` : "",
        cleanData.note ? `📝 Ek Bilgi / Not: ${cleanData.note}` : "",
        "",
        "Seviye tespit ve randevu planlaması için görüşmek üzere.",
      ].filter(Boolean);

      const targetUrl = buildSafeWhatsAppUrl(
        siteConfig.contact.whatsappNumber,
        lines.join("\n")
      );

      setGeneratedUrl(targetUrl);
      recordRateLimitAttempt("contact_form");
      setIsSuccess(true);

      // Güvenli şekilde yeni sekmede WhatsApp'ı tetikle
      if (typeof window !== "undefined") {
        const win = window.open(targetUrl, "_blank", "noopener,noreferrer");
        if (!win) {
          // Açılır pencere engelleyici devreye girdiyse başarı kutusundaki manuel butonu gösteririz
          console.warn("Popup blocked, user can click direct link.");
        }
      }
    } catch {
      setErrors({
        general: "Bir bağlantı hatası oluştu. Lütfen tekrar deneyiniz.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setName("");
    setPhone("");
    setEmail("");
    setNote("");
    setTouched({});
    setErrors({});
    setIsSuccess(false);
    setGeneratedUrl("");
  };

  // Başarı Durumu (Kullanıcı Geri Bildirimi)
  if (isSuccess) {
    return (
      <div
        className={`rounded-3xl bg-white p-6 sm:p-8 lg:p-9 border border-cobalt-900/10 shadow-sm relative overflow-hidden transition-all ${className}`}
      >
        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-500" />

        <div className="text-center py-6 sm:py-8 space-y-4">
          <div className="h-16 w-16 mx-auto rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200/60 flex items-center justify-center shadow-inner">
            <Check className="h-9 w-9 stroke-[2.5]" />
          </div>

          <div className="space-y-1.5">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/70 px-3 py-1 rounded-full">
              BAŞVURUNUZ HAZIRLANDI
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-ink tracking-tight mt-2">
              WhatsApp Mesajınız Oluşturuldu!
            </h3>
            <p className="text-sm sm:text-base text-ink-muted max-w-lg mx-auto">
              Tercihleriniz güvenli bir şekilde hazırlandı. WhatsApp açılmadıysa aşağıdaki butona dokunarak doğrudan iletebilirsiniz.
            </p>
          </div>

          {/* Özet Bilgi Kartı */}
          <div className="max-w-md mx-auto bg-paper p-4 rounded-2xl border border-cobalt-900/5 text-left text-xs sm:text-sm space-y-2 text-ink">
            <div className="flex justify-between items-center py-1 border-b border-cobalt-900/5">
              <span className="text-ink-muted">Öğrenci / Veli:</span>
              <span className="font-bold">{name}</span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-cobalt-900/5">
              <span className="text-ink-muted">Telefon:</span>
              <span className="font-bold">{phone}</span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-cobalt-900/5">
              <span className="text-ink-muted">Eğitim Alanı:</span>
              <span className="font-bold text-crimson-600">{selectedProgram}</span>
            </div>
            <div className="flex justify-between items-center py-1">
              <span className="text-ink-muted">Ders Formatı:</span>
              <span className="font-bold">{format}</span>
            </div>
          </div>

          {/* Eylem Butonları */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            {generatedUrl && (
              <a
                href={generatedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-[48px] px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#1ebe5b] active:scale-95 text-white font-extrabold text-sm sm:text-base inline-flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                <MessageCircle className="h-5 w-5" />
                <span>WhatsApp’ı Şimdi Aç</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}

            <button
              type="button"
              onClick={handleReset}
              className="w-full sm:w-auto min-h-[48px] px-5 py-3 rounded-xl bg-paper hover:bg-cobalt-100/50 active:scale-95 text-ink-muted hover:text-ink font-bold text-sm inline-flex items-center justify-center gap-2 border border-cobalt-900/10 transition-all cursor-pointer"
            >
              <RotateCcw className="h-4 w-4" />
              <span>Yeni Randevu Talebi</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      id={formId}
      onSubmit={handleSubmit}
      noValidate
      className={`rounded-3xl bg-white p-6 sm:p-8 lg:p-9 border border-cobalt-900/10 shadow-sm space-y-6 relative overflow-hidden ${className}`}
    >
      {/* İnce Kırmızı Vurgu Çizgisi */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-crimson-600 via-cobalt-600 to-crimson-600" />

      {/* Form Başlığı */}
      <div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-crimson-50 text-crimson-700 text-xs font-bold uppercase mb-2">
          <Sparkles className="h-3.5 w-3.5 text-crimson-600" />
          <span>HIZLI & GÜVENLİ RANDEVU</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-ink">
          Bilgi Al
        </h2>
        <p className="mt-1.5 text-sm sm:text-[15px] text-ink-muted leading-relaxed">
          Eğitim alanı ve ders biçiminizi seçip bilgilerinizi girerek doğrudan bizimle iletişime geçebilirsiniz.
        </p>
      </div>

      {/* Genel Hata veya Rate Limit Uyarısı */}
      {(errors.general || cooldownSeconds > 0) && (
        <div
          role="alert"
          className="rounded-2xl bg-amber-50 border border-amber-300/80 p-4 text-amber-900 flex items-start gap-3 text-sm animate-shake"
        >
          <Clock className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="flex-1">
            <span className="font-bold block">Güvenlik Kontrolü</span>
            <span>
              {errors.general ||
                `Lütfen tekrar denemeden önce ${cooldownSeconds} saniye bekleyiniz.`}
            </span>
          </div>
        </div>
      )}

      {/* 1. Eğitim Alanı Seçimi */}
      <div>
        <div className="flex items-center justify-between mb-2.5">
          <label className="block text-sm font-extrabold text-cobalt-950">
            1. İlgilendiğiniz Eğitim Alanını Seçin
          </label>
          <span className="text-xs font-bold text-crimson-600 bg-crimson-50 px-2.5 py-0.5 rounded-full border border-crimson-200/50">
            Seçili: {selectedProgram}
          </span>
        </div>
        <div className="flex flex-wrap gap-2 sm:gap-2.5">
          {programCategories.map((cat) => {
            const isActive = selectedProgram === cat.shortTitle;
            return (
              <button
                key={cat.id}
                type="button"
                disabled={isSubmitting}
                onClick={() => setSelectedProgram(cat.shortTitle)}
                className={`rounded-xl px-4 py-2.5 min-h-[48px] text-xs sm:text-sm font-bold border transition-all cursor-pointer inline-flex items-center gap-2 touch-manipulation ${
                  isActive
                    ? "bg-crimson-600 text-white border-crimson-600 shadow-crimson scale-[1.02]"
                    : "bg-paper text-ink border-cobalt-900/10 hover:border-crimson-400 hover:bg-white"
                } ${isSubmitting ? "opacity-60 cursor-not-allowed" : ""}`}
              >
                <span className="whitespace-normal leading-normal">{cat.shortTitle}</span>
                {isActive && <Check className="h-4 w-4 shrink-0 text-white" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Ders Formatı */}
      <div>
        <label className="block text-sm font-extrabold text-cobalt-950 mb-2.5">
          2. Ders Formatı Tercihiniz
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {LESSON_FORMATS.map((item) => {
            const isActive = format === item.title;
            return (
              <button
                key={item.id}
                type="button"
                disabled={isSubmitting}
                onClick={() => setFormat(item.title)}
                className={`rounded-2xl p-4 min-h-[64px] text-left border transition-all cursor-pointer touch-manipulation ${
                  isActive
                    ? "bg-cobalt-950 text-white border-cobalt-950 shadow-sm ring-2 ring-crimson-600"
                    : "bg-paper text-ink border-cobalt-900/10 hover:border-crimson-300 hover:bg-white"
                } ${isSubmitting ? "opacity-60 cursor-not-allowed" : ""}`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-extrabold text-xs sm:text-sm leading-snug">
                    {item.title}
                  </span>
                  {isActive && (
                    <span className="text-[11px] font-bold text-white bg-crimson-600 px-2.5 py-0.5 rounded-full shrink-0 shadow-xs">
                      Seçildi
                    </span>
                  )}
                </div>
                <p
                  className={`text-xs mt-1.5 leading-relaxed ${
                    isActive ? "text-cobalt-200" : "text-ink-muted"
                  }`}
                >
                  {item.subtitle}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. İletişim Bilgileri (Güvenli Girişler - iOS Safari Auto-Zoom Korumalı & Doğru Sanal Klavye) */}
      <div className="space-y-4">
        <label className="block text-sm font-extrabold text-cobalt-950">
          3. İletişim Bilgileriniz
        </label>

        {/* Ad Soyad */}
        <div>
          <div className="relative">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-muted pointer-events-none">
              <User className="h-4 w-4" />
            </span>
            <input
              id={`${formId}-name`}
              type="text"
              inputMode="text"
              name="name"
              autoComplete="name"
              autoCapitalize="words"
              autoCorrect="off"
              spellCheck="false"
              disabled={isSubmitting}
              value={name}
              onChange={handleNameChange}
              onBlur={() => handleBlur("name")}
              placeholder="Öğrenci veya Veli Adı Soyadı *"
              aria-required="true"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? `${formId}-name-err` : undefined}
              className={`w-full min-h-[48px] rounded-xl pl-10 pr-4 py-2.5 text-base sm:text-sm bg-paper border transition-all text-ink placeholder:text-ink-subtle focus:outline-none touch-manipulation ${
                errors.name
                  ? "border-crimson-500 ring-1 ring-crimson-500 bg-crimson-50/20"
                  : "border-cobalt-900/10 focus:border-crimson-600 focus:ring-1 focus:ring-crimson-600"
              }`}
            />
          </div>
          {errors.name && (
            <p
              id={`${formId}-name-err`}
              role="alert"
              className="text-xs font-semibold text-crimson-600 mt-1.5 flex items-center gap-1"
            >
              <AlertCircle className="h-3.5 w-3.5 shrink-0" />
              <span>{errors.name}</span>
            </p>
          )}
        </div>

        {/* Telefon Numarası (+90 / 05xx) */}
        <div>
          <div className="relative">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-muted pointer-events-none">
              <Phone className="h-4 w-4" />
            </span>
            <input
              id={`${formId}-phone`}
              type="tel"
              inputMode="tel"
              name="tel"
              autoComplete="tel"
              autoCapitalize="off"
              autoCorrect="off"
              spellCheck="false"
              disabled={isSubmitting}
              value={phone}
              onChange={handlePhoneChange}
              onBlur={() => handleBlur("phone")}
              placeholder="0 (5XX) XXX XX XX *"
              maxLength={18}
              aria-required="true"
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? `${formId}-phone-err` : undefined}
              className={`w-full min-h-[48px] rounded-xl pl-10 pr-4 py-2.5 text-base sm:text-sm bg-paper border transition-all text-ink placeholder:text-ink-subtle focus:outline-none tracking-wide touch-manipulation ${
                errors.phone
                  ? "border-crimson-500 ring-1 ring-crimson-500 bg-crimson-50/20"
                  : "border-cobalt-900/10 focus:border-crimson-600 focus:ring-1 focus:ring-crimson-600"
              }`}
            />
          </div>
          {errors.phone ? (
            <p
              id={`${formId}-phone-err`}
              role="alert"
              className="text-xs font-semibold text-crimson-600 mt-1.5 flex items-center gap-1"
            >
              <AlertCircle className="h-3.5 w-3.5 shrink-0" />
              <span>{errors.phone}</span>
            </p>
          ) : (
            <p className="text-[11px] text-ink-muted mt-1 pl-1">
              Türkiye cep telefonu formatında giriniz (+90 5xx).
            </p>
          )}
        </div>

        {/* E-Posta (İsteğe Bağlı) */}
        {!compact && (
          <div>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-muted pointer-events-none">
                <Mail className="h-4 w-4" />
              </span>
              <input
                id={`${formId}-email`}
                type="email"
                inputMode="email"
                name="email"
                autoComplete="email"
                autoCapitalize="none"
                autoCorrect="off"
                spellCheck="false"
                disabled={isSubmitting}
                value={email}
                onChange={handleEmailChange}
                onBlur={() => handleBlur("email")}
                placeholder="E-Posta Adresi (İsteğe bağlı)"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? `${formId}-email-err` : undefined}
                className={`w-full min-h-[48px] rounded-xl pl-10 pr-4 py-2.5 text-base sm:text-sm bg-paper border transition-all text-ink placeholder:text-ink-subtle focus:outline-none touch-manipulation ${
                  errors.email
                    ? "border-crimson-500 ring-1 ring-crimson-500 bg-crimson-50/20"
                    : "border-cobalt-900/10 focus:border-crimson-600 focus:ring-1 focus:ring-crimson-600"
                }`}
              />
            </div>
            {errors.email && (
              <p
                id={`${formId}-email-err`}
                role="alert"
                className="text-xs font-semibold text-crimson-600 mt-1.5 flex items-center gap-1"
              >
                <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                <span>{errors.email}</span>
              </p>
            )}
          </div>
        )}

        {/* Not / Mesaj */}
        <div>
          <div className="relative">
            <span className="absolute left-3.5 top-3.5 text-ink-muted pointer-events-none">
              <FileText className="h-4 w-4" />
            </span>
            <textarea
              id={`${formId}-note`}
              rows={compact ? 2 : 3}
              inputMode="text"
              autoCapitalize="sentences"
              spellCheck="true"
              disabled={isSubmitting}
              value={note}
              onChange={handleNoteChange}
              onBlur={() => handleBlur("note")}
              maxLength={400}
              placeholder="Sınıf düzeyi, hedef sınav veya ilçe bilginiz..."
              aria-invalid={!!errors.note}
              aria-describedby={errors.note ? `${formId}-note-err` : undefined}
              className={`w-full min-h-[88px] rounded-xl pl-10 pr-4 py-2.5 text-base sm:text-sm bg-paper border transition-all text-ink placeholder:text-ink-subtle focus:outline-none resize-none touch-manipulation ${
                errors.note
                  ? "border-crimson-500 ring-1 ring-crimson-500 bg-crimson-50/20"
                  : "border-cobalt-900/10 focus:border-crimson-600 focus:ring-1 focus:ring-crimson-600"
              }`}
            />
          </div>
          <div className="flex items-center justify-between text-[11px] text-ink-muted mt-1 px-1">
            <span>{errors.note ? errors.note : "Güvenli XSS filtresi aktiftir."}</span>
            <span>{note.length} / 400</span>
          </div>
        </div>
      </div>

      {/* KVKK ve Güvenlik Onayı */}
      <div className="space-y-1.5 pt-1">
        <label className="flex items-start gap-3 cursor-pointer text-xs sm:text-[13px] text-ink select-none touch-manipulation min-h-[48px] py-1">
          <input
            type="checkbox"
            checked={kvkkAccepted}
            disabled={isSubmitting}
            onChange={(e) => {
              setKvkkAccepted(e.target.checked);
              if (e.target.checked) {
                setErrors((prev) => ({ ...prev, kvkk: undefined }));
              }
            }}
            className="mt-0.5 h-5 w-5 rounded text-crimson-600 focus:ring-crimson-500 border-cobalt-900/20 cursor-pointer shrink-0"
          />
          <span className="leading-snug text-ink-muted">
            <strong className="text-ink font-semibold">KVKK Aydınlatma Metni</strong> kapsamında iletişim kurulmasını onaylıyorum.
          </span>
        </label>
        {errors.kvkk && (
          <p role="alert" className="text-xs font-semibold text-crimson-600 pl-8 flex items-center gap-1">
            <AlertCircle className="h-3 w-3 shrink-0" />
            <span>{errors.kvkk}</span>
          </p>
        )}
      </div>

      {/* Güvenlik Rozeti ve Bilgilendirme */}
      <div className="flex items-center gap-2.5 text-xs text-ink-muted bg-paper p-3 rounded-xl border border-cobalt-900/5">
        <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
        <span>
          Verileriniz SSL şifrelemeyle korunur. Doğrudan WhatsApp hattımıza güvenli olarak aktarılır.
        </span>
      </div>

      {/* Gönder Butonu (Double-Submit Korumalı & Yükleniyor Durumu) */}
      <button
        type="submit"
        disabled={isSubmitting || cooldownSeconds > 0}
        className={`relative overflow-hidden w-full min-h-[52px] inline-flex items-center justify-center gap-2.5 rounded-xl text-white py-3.5 px-6 text-sm sm:text-base font-extrabold transition-all shadow-crimson touch-manipulation group ${
          isSubmitting || cooldownSeconds > 0
            ? "bg-cobalt-400 cursor-not-allowed opacity-80"
            : "bg-crimson-600 hover:bg-crimson-700 active:scale-[0.98] cursor-pointer"
        }`}
      >
        <span className="relative z-10 flex items-center gap-2">
          {isSubmitting ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              <span>Güvenli İletişim Başlatılıyor...</span>
            </>
          ) : cooldownSeconds > 0 ? (
            <>
              <Clock className="h-5 w-5" />
              <span>Lütfen Bekleyiniz ({cooldownSeconds}s)</span>
            </>
          ) : (
            <>
              <MessageCircle className="h-5 w-5" />
              <span>Bilgi Al</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </>
          )}
        </span>
        {!isSubmitting && cooldownSeconds <= 0 && (
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent animate-light-sweep pointer-events-none" />
        )}
      </button>
    </form>
  );
}
