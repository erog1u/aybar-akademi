"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Star } from "lucide-react";
import { SectionHeading } from "@/components/layout/PageHero";
import { BASE_PATH } from "@/config/site";

type Review = { id: number; name: string; role: "veli" | "ogrenci"; rating: number; text: string };

const API = `${BASE_PATH}/api/yorumlar`;
const ROLE_LABEL = { veli: "Veli", ogrenci: "Öğrenci" } as const;

function Stars({ value, size = 16 }: { value: number; size?: number }) {
  return (
    <span className="flex gap-0.5" aria-label={`5 üzerinden ${value} yıldız`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          width={size}
          height={size}
          aria-hidden="true"
          className={n <= value ? "fill-amber-400 text-amber-400" : "fill-transparent text-cobalt-900/25"}
        />
      ))}
    </span>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="w-[280px] shrink-0 rounded-2xl border border-cobalt-900/10 bg-white p-5 sm:w-[340px]">
      <Stars value={review.rating} />
      <blockquote className="mt-3 text-[15px] leading-relaxed text-ink">{review.text}</blockquote>
      <figcaption className="mt-4 text-sm font-bold text-cobalt-800">
        {review.name} <span className="font-semibold text-ink-muted">· {ROLE_LABEL[review.role]}</span>
      </figcaption>
    </figure>
  );
}

export default function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    fetch(API)
      .then((r) => (r.ok ? r.json() : { reviews: [] }))
      .then((d) => setReviews(Array.isArray(d.reviews) ? d.reviews : []))
      .catch(() => setReviews([]));
  }, []);

  const open = () => dialogRef.current?.showModal();
  // Az yorum varsa bant boş kalmasın: liste en az 6 karta tamamlanır.
  const band = reviews.length ? Array.from({ length: Math.ceil(6 / reviews.length) }, () => reviews).flat() : [];

  return (
    <section aria-labelledby="yorumlar-baslik" className="border-b border-cobalt-900/10 bg-paper py-10 sm:py-14">
      <div className="mx-auto flex max-w-[1380px] flex-col gap-4 px-4 sm:flex-row sm:items-end sm:justify-between sm:px-6 lg:px-10">
        <div id="yorumlar-baslik">
          <SectionHeading>Veli ve Öğrenci Yorumları</SectionHeading>
        </div>
        <button
          type="button"
          onClick={open}
          className="inline-flex min-h-12 items-center justify-center rounded-xl bg-cobalt-700 px-5 text-sm font-extrabold text-white hover:bg-cobalt-800 sm:text-base"
        >
          Yorum Yap
        </button>
      </div>

      {reviews.length > 0 ? (
        <div className="reviews-viewport mt-6 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)]">
          <div
            className="reviews-track flex w-max"
            style={{ ["--reviews-duration" as string]: `${band.length * 10}s` }}
          >
            {[1, 2].map((copy) => (
              <div key={copy} data-copy={copy} aria-hidden={copy === 2} className="flex gap-4 pr-4">
                {band.map((r, i) => (
                  <ReviewCard key={`${copy}-${i}`} review={r} />
                ))}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="mx-auto mt-4 max-w-[1380px] px-4 text-base text-ink-muted sm:px-6 lg:px-10">
          İlk yorumu siz yazın.
        </p>
      )}

      <dialog
        ref={dialogRef}
        aria-labelledby="yorum-form-baslik"
        className="w-[min(92vw,520px)] rounded-3xl p-0 backdrop:bg-cobalt-950/60"
      >
        <ReviewForm onClose={() => dialogRef.current?.close()} />
      </dialog>
    </section>
  );
}

function ReviewForm({ onClose }: { onClose: () => void }) {
  const [name, setName] = useState("");
  const [role, setRole] = useState<"" | "veli" | "ogrenci">("");
  const [rating, setRating] = useState(0);
  const [text, setText] = useState("");
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState("");
  const [error, setError] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "done">("idle");

  const fieldClass =
    "mt-1 w-full rounded-xl border border-cobalt-900/15 bg-white px-3 text-base text-ink outline-none focus:border-cobalt-700 focus:ring-2 focus:ring-cobalt-700/20";

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim().length < 2) return setError("Adınızı yazınız.");
    if (!role) return setError("Veli ya da öğrenci seçiniz.");
    if (!rating) return setError("Puan seçiniz.");
    if (text.trim().length < 10) return setError("Yorum en az 10 karakter olmalıdır.");
    if (!consent) return setError("Aydınlatma metnini onaylayınız.");
    setError("");
    setState("sending");
    try {
      const res = await fetch(API, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name, role, rating, text, consent, website }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error || "Yorum gönderilemedi. Lütfen daha sonra tekrar deneyin.");
        setState("idle");
        return;
      }
      setState("done");
    } catch {
      setError("Bağlantı kurulamadı. Lütfen daha sonra tekrar deneyin.");
      setState("idle");
    }
  };

  if (state === "done") {
    return (
      <div className="p-6 sm:p-8">
        <h2 id="yorum-form-baslik" className="text-xl font-extrabold text-ink">Teşekkür ederiz</h2>
        <p className="mt-3 text-base text-ink-muted">Yorumunuz alındı. İncelendikten sonra sitede yayınlanır.</p>
        <button type="button" onClick={onClose} className="mt-6 min-h-12 w-full rounded-xl bg-cobalt-700 font-extrabold text-white">
          Kapat
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="space-y-4 p-6 sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <h2 id="yorum-form-baslik" className="text-xl font-extrabold text-ink">Yorum Yap</h2>
        <button type="button" onClick={onClose} aria-label="Kapat" className="-m-2 min-h-11 min-w-11 text-2xl leading-none text-ink-muted">
          ×
        </button>
      </div>

      <label className="block text-sm font-bold text-ink">
        Adınız Soyadınız
        <input className={`${fieldClass} min-h-12`} value={name} onChange={(e) => setName(e.target.value)} maxLength={60} autoComplete="name" />
        <span className="mt-1 block text-xs font-normal text-ink-muted">Sitede yalnız adınız ve soyadınızın baş harfi görünür.</span>
      </label>

      <div role="radiogroup" aria-label="Yorumu yazan" className="grid grid-cols-2 gap-2">
        {(["veli", "ogrenci"] as const).map((item) => (
          <label
            key={item}
            className={`flex min-h-12 cursor-pointer items-center justify-center rounded-xl border text-sm font-bold has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-cobalt-700 ${
              role === item ? "border-crimson-600 bg-crimson-50 text-crimson-700" : "border-cobalt-900/15 bg-white text-ink"
            }`}
          >
            <input type="radio" name="role" className="sr-only" checked={role === item} onChange={() => setRole(item)} />
            {ROLE_LABEL[item]}
          </label>
        ))}
      </div>

      <div role="radiogroup" aria-label="Puanınız" className="text-sm font-bold text-ink">
        Puanınız
        <div className="mt-1 flex gap-1">
          {[1, 2, 3, 4, 5].map((n) => (
            <label key={n} className="cursor-pointer rounded-lg p-1.5 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-cobalt-700">
              <input type="radio" name="rating" className="sr-only" checked={rating === n} onChange={() => setRating(n)} aria-label={`${n} yıldız`} />
              <Star
                width={32}
                height={32}
                aria-hidden="true"
                className={n <= rating ? "fill-amber-400 text-amber-400" : "fill-transparent text-cobalt-900/30"}
              />
            </label>
          ))}
        </div>
      </div>

      <label className="block text-sm font-bold text-ink">
        Yorumunuz
        <textarea className={`${fieldClass} min-h-28 py-2`} value={text} onChange={(e) => setText(e.target.value)} maxLength={400} />
        <span className="mt-1 block text-right text-xs font-normal text-ink-muted">{text.length}/400</span>
      </label>

      <input
        type="text"
        name="website"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />

      <label className="flex gap-3 text-xs leading-relaxed text-ink-muted">
        <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-0.5 h-5 w-5 shrink-0 accent-cobalt-700" />
        <span>
          Adımın baş harfli hâli ve yorumumun sitede yayınlanmasını kabul ediyorum.{" "}
          <Link href="/kvkk/" className="font-bold text-crimson-700 underline">KVKK Aydınlatma Metni</Link>. Yorumlar incelendikten sonra yayınlanır. Kişisel bilgi, hakaret ve reklam içeren yorumlar yayınlanmaz. 18 yaşından küçükseniz yorumu veliniz göndermelidir.
        </span>
      </label>

      {error ? <p role="alert" className="text-sm font-semibold text-crimson-700">{error}</p> : null}

      <button
        type="submit"
        disabled={state === "sending"}
        className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-crimson-600 px-5 text-base font-extrabold text-white hover:bg-crimson-700 disabled:opacity-60"
      >
        {state === "sending" ? "Gönderiliyor..." : "Yorumu Gönder"}
      </button>
    </form>
  );
}
