"use client";

import React, { useState } from "react";
import { getWhatsAppUrl } from "@/config/site";
import {
  sanitizeText,
  validateName,
  validateTurkishPhoneNumber,
} from "@/lib/security";

const FORMATS = ["Yüz yüze", "Online"] as const;

type FieldKey =
  | "student"
  | "parent"
  | "level"
  | "district"
  | "format"
  | "lessons"
  | "phone";

const EMPTY_ERRORS: Partial<Record<FieldKey, string>> = {};

export default function QuickQuoteForm() {
  const [student, setStudent] = useState("");
  const [parent, setParent] = useState("");
  const [level, setLevel] = useState("");
  const [district, setDistrict] = useState("");
  const [format, setFormat] = useState("");
  const [lessons, setLessons] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState(EMPTY_ERRORS);

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const next: Partial<Record<FieldKey, string>> = {};
    const studentCheck = validateName(student, true);
    const parentCheck = validateName(parent, true);
    const levelCheck = sanitizeText(level, 80);
    const districtCheck = sanitizeText(district, 80);
    const lessonsCheck = sanitizeText(lessons, 200);
    const phoneCheck = validateTurkishPhoneNumber(phone, true);

    if (!studentCheck.isValid) next.student = studentCheck.error;
    if (!parentCheck.isValid) next.parent = parentCheck.error;
    if (!levelCheck) next.level = "Öğrencinin sınıf düzeyini ya da yaşını yazınız.";
    if (!districtCheck) next.district = "İlçe veya semt yazınız.";
    if (format !== "Yüz yüze" && format !== "Online") {
      next.format = "Yüz yüze ya da online seçiniz.";
    }
    if (!lessonsCheck) next.lessons = "Talep edilen dersleri yazınız.";
    if (!phoneCheck.isValid) next.phone = phoneCheck.error;

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const message = [
      "Merhaba, hızlı teklif almak istiyorum.",
      "",
      `Öğrenci Adı-Soyadı: ${studentCheck.cleanValue}`,
      `Veli Adı-Soyadı: ${parentCheck.cleanValue}`,
      `Öğrenci Sınıf Düzeyi ya da Yaşı: ${levelCheck}`,
      `İlçe/Semt: ${districtCheck}`,
      `Yüz yüze mi Online mı?: ${format}`,
      `Talep Edilen Ders(ler): ${lessonsCheck}`,
      `İletişim Numarası: ${phoneCheck.display}`,
    ].join("\n");

    window.open(getWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  };

  const fieldClass =
    "mt-1 w-full min-h-12 rounded-xl border border-cobalt-900/15 bg-white px-3 text-base text-ink outline-none focus:border-cobalt-700 focus:ring-2 focus:ring-cobalt-700/20";

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <Field label="Öğrenci Adı-Soyadı" error={errors.student}>
        <input className={fieldClass} value={student} onChange={(e) => setStudent(e.target.value)} autoComplete="name" required />
      </Field>
      <Field label="Veli Adı-Soyadı" error={errors.parent}>
        <input className={fieldClass} value={parent} onChange={(e) => setParent(e.target.value)} autoComplete="name" required />
      </Field>
      <Field label="Öğrenci Sınıf Düzeyi ya da Yaşı" error={errors.level}>
        <input className={fieldClass} value={level} onChange={(e) => setLevel(e.target.value)} required />
      </Field>
      <Field label="İlçe/Semt" error={errors.district}>
        <input className={fieldClass} value={district} onChange={(e) => setDistrict(e.target.value)} required />
      </Field>
      <Field label="Yüz yüze mi Online mı?" error={errors.format}>
        <div className="mt-2 grid grid-cols-2 gap-2">
          {FORMATS.map((item) => (
            <label
              key={item}
              className={`flex min-h-12 cursor-pointer items-center justify-center rounded-xl border px-3 text-sm font-bold ${
                format === item
                  ? "border-crimson-600 bg-crimson-50 text-crimson-700"
                  : "border-cobalt-900/15 bg-white text-ink"
              }`}
            >
              <input
                type="radio"
                name="format"
                className="sr-only"
                checked={format === item}
                onChange={() => setFormat(item)}
              />
              {item}
            </label>
          ))}
        </div>
      </Field>
      <Field label="Talep Edilen Ders(ler)" error={errors.lessons}>
        <input className={fieldClass} value={lessons} onChange={(e) => setLessons(e.target.value)} required />
      </Field>
      <Field label="İletişim Numarası" error={errors.phone}>
        <input
          className={fieldClass}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          inputMode="tel"
          autoComplete="tel"
          placeholder="05xx xxx xx xx"
          required
        />
      </Field>
      <button
        type="submit"
        className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-crimson-600 px-5 text-base font-extrabold text-white hover:bg-crimson-700"
      >
        Hemen Hızlı Teklif Alın!
      </button>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block text-sm font-bold text-ink">
      {label}
      {children}
      {error ? <span className="mt-1 block text-xs font-semibold text-crimson-700">{error}</span> : null}
    </label>
  );
}
