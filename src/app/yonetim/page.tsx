"use client";

import React, { useCallback, useEffect, useState } from "react";
import { BASE_PATH } from "@/config/site";

const API = `${BASE_PATH}/api`;
const STORE = "aybar-yonetim-oturum";

type Json = string | boolean | Json[] | { [key: string]: Json };
type Obj = { [key: string]: Json };

const LABELS: Record<string, string> = {
  home: "Ana sayfa", images: "Sayfa fotoğrafları", founderMessage: "Kurucumuzun mesajı", aboutContent: "Hakkımızda",
  programsIntro: "Eğitim programları (giriş)", programCategories: "Eğitim programları (kategoriler)",
  educationModelContent: "Eğitim modelimiz", whyDifferentContent: "Neden farklıyız",
  heroSubtitle: "Üst başlık altı yazı", introParagraphs: "Giriş paragrafları", rangeHeading: "Yelpaze başlığı",
  rangeItems: "Yelpaze maddeleri", formatHeading: "Eğitim şekli başlığı", formatItems: "Eğitim şekli maddeleri",
  slides: "Üstteki kayan fotoğraflar", slogan: "Fotoğraf yazısı", src: "Görsel", alt: "Görsel açıklaması (görme engelliler için)",
  about: "Hakkımızda fotoğrafı", programs: "Programlar fotoğrafı", model: "Eğitim modeli fotoğrafı", whyDifferent: "Neden farklıyız fotoğrafı",
  contact: "İletişim fotoğrafı", founder: "Kurucu fotoğrafı", eyebrow: "Üst etiket", salutation: "Hitap", paragraphs: "Paragraflar",
  closing: "Kapanış", author: "İmza", role: "Unvan", solutionsIntro: "Çözümler başlığı", solutions: "Çözümler",
  title: "Başlık", description: "Açıklama", reachHeadline: "Erişim başlığı", reachItems: "Erişim maddeleri",
  closingParagraph: "Kapanış paragrafı", headline: "Başlık", lead: "Giriş yazısı", items: "Maddeler", subjects: "Dersler",
  leaderNote: "Kısa not", featured: "Öne çıkar", shortTitle: "Kısa başlık", tagline: "Alt başlık", summary: "Özet",
  sections: "Bölümler", points: "Maddeler", principles: "İlkeler", principlesHeading: "İlkeler başlığı",
  pedagogicalOutcome: "Sonuç bölümü", body: "Metin", intro: "Giriş", detail: "Ayrıntı", label: "Etiket", text: "Metin",
  code: "Numara", index: "Numara", step: "Numara",
};
const HIDDEN_KEYS = new Set(["id"]);
const label = (key: string) => LABELS[key] || key;

function blank(sample: Json): Json {
  if (typeof sample === "string") return "";
  if (typeof sample === "boolean") return false;
  if (Array.isArray(sample)) return [];
  return Object.fromEntries(Object.entries(sample).map(([k, v]) => [k, k === "id" ? `yeni-${Date.now()}` : blank(v)]));
}

async function shrink(file: File): Promise<Blob> {
  const img = await createImageBitmap(file);
  const scale = Math.min(1, 1800 / Math.max(img.width, img.height));
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(img.width * scale);
  canvas.height = Math.round(img.height * scale);
  canvas.getContext("2d")!.drawImage(img, 0, 0, canvas.width, canvas.height);
  return new Promise((resolve, reject) => canvas.toBlob((b) => (b ? resolve(b) : reject(new Error("Görsel işlenemedi."))), "image/jpeg", 0.85));
}

export default function AdminPage() {
  const [token, setToken] = useState("");
  const [tab, setTab] = useState<"yorumlar" | "icerik">("yorumlar");

  useEffect(() => {
    try { setToken(localStorage.getItem(STORE) || ""); } catch {}
  }, []);

  const call = useCallback(
    async (path: string, init: RequestInit = {}) => {
      const res = await fetch(`${API}${path}`, { ...init, headers: { ...(init.headers || {}), authorization: `Bearer ${token}` } });
      if (res.status === 401) {
        try { localStorage.removeItem(STORE); } catch {}
        setToken("");
      }
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "İşlem yapılamadı.");
      return data;
    },
    [token],
  );

  if (!token) return <Login onToken={(t) => { try { localStorage.setItem(STORE, t); } catch {} setToken(t); }} />;

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 text-ink">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-extrabold">Yönetim Paneli</h1>
        <button
          onClick={() => { try { localStorage.removeItem(STORE); } catch {} setToken(""); }}
          className="min-h-11 text-sm font-bold text-ink-muted underline"
        >
          Çıkış yap
        </button>
      </div>
      <div role="tablist" className="mt-6 grid grid-cols-2 gap-2">
        {(["yorumlar", "icerik"] as const).map((t) => (
          <button
            key={t}
            role="tab"
            aria-selected={tab === t}
            onClick={() => setTab(t)}
            className={`min-h-12 rounded-xl border font-bold ${tab === t ? "border-cobalt-700 bg-cobalt-700 text-white" : "border-cobalt-900/15 bg-white"}`}
          >
            {t === "yorumlar" ? "Yorumlar" : "Site içeriği"}
          </button>
        ))}
      </div>
      {tab === "yorumlar" ? <Reviews call={call} /> : <Content call={call} token={token} />}
    </div>
  );
}

function Login({ onToken }: { onToken: (t: string) => void }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  return (
    <form
      className="mx-auto mt-16 max-w-sm space-y-4 px-4 text-ink"
      onSubmit={async (e) => {
        e.preventDefault();
        setBusy(true);
        setError("");
        const res = await fetch(`${API}/giris`, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ username, password }),
        }).catch(() => null);
        const data = res ? await res.json().catch(() => ({})) : {};
        setBusy(false);
        if (res?.ok && data.token) onToken(data.token);
        else setError(data.error || "Bağlantı kurulamadı.");
      }}
    >
      <h1 className="text-2xl font-extrabold">Yönetim Paneli</h1>
      <label className="block text-sm font-bold">
        Kullanıcı adı
        <input value={username} onChange={(e) => setUsername(e.target.value)} autoComplete="username" className="mt-1 min-h-12 w-full rounded-xl border border-cobalt-900/15 px-3" />
      </label>
      <label className="block text-sm font-bold">
        Şifre
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" className="mt-1 min-h-12 w-full rounded-xl border border-cobalt-900/15 px-3" />
      </label>
      {error ? <p role="alert" className="text-sm font-semibold text-crimson-700">{error}</p> : null}
      <button disabled={busy} className="min-h-12 w-full rounded-xl bg-cobalt-700 font-bold text-white disabled:opacity-60">
        {busy ? "Giriş yapılıyor..." : "Giriş yap"}
      </button>
    </form>
  );
}

type Call = (path: string, init?: RequestInit) => Promise<any>; // eslint-disable-line @typescript-eslint/no-explicit-any
type Row = { id: number; name: string; role: string; rating: number; text: string; status: string; hide_reason: string | null; reply: string | null; created_at: string };

function Reviews({ call }: { call: Call }) {
  const [rows, setRows] = useState<Row[]>([]);
  const [reasons, setReasons] = useState<Record<string, string>>({});
  const [error, setError] = useState("");

  const load = useCallback(() => {
    call("/yorum-yonetim").then((d) => { setRows(d.reviews); setReasons(d.reasons); }).catch((e) => setError(e.message));
  }, [call]);
  useEffect(load, [load]);

  const act = (body: object) =>
    call("/yorum-yonetim", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(body) })
      .then(load)
      .catch((e) => setError(e.message));

  const STATUS: Record<string, string> = { published: "Yayında", held: "Otomatik filtrede bekliyor", hidden: "Gizlendi" };

  return (
    <div className="mt-6">
      <p className="rounded-xl bg-cobalt-50 p-3 text-sm leading-relaxed">
        Yorumlar onay beklemeden yayınlanır ve silinemez. Bir yorumu yalnızca aşağıdaki sebeplerden biriyle gizleyebilirsiniz. Gizlenen yorumun yerinde sitede gizlenme sebebi görünür ve puanı ortalamaya katılmaya devam eder. Olumsuz bir yoruma en iyi karşılık, herkese açık bir yanıt yazmaktır.
      </p>
      {error ? <p role="alert" className="mt-3 font-semibold text-crimson-700">{error}</p> : null}
      <ul className="mt-4 space-y-3">
        {rows.length === 0 ? <li className="text-ink-muted">Henüz yorum yok.</li> : null}
        {rows.map((r) => (
          <li key={r.id} className={`rounded-2xl border p-4 ${r.status === "held" ? "border-crimson-600 bg-crimson-50" : "border-cobalt-900/10 bg-white"}`}>
            <p className="text-sm font-bold">
              {STATUS[r.status] || r.status}
              {r.hide_reason ? ` (${reasons[r.hide_reason] || r.hide_reason})` : ""} · {r.name} · {r.role === "veli" ? "Veli" : "Öğrenci"} · {r.rating}/5 · {r.created_at}
            </p>
            <p className="mt-2 whitespace-pre-wrap">{r.text}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {r.status !== "published" ? (
                <button onClick={() => act({ id: r.id, action: "publish" })} className="min-h-11 rounded-xl bg-cobalt-700 px-4 text-sm font-bold text-white">
                  Yayınla
                </button>
              ) : null}
              {r.status !== "hidden" ? (
                <select
                  aria-label="Gizleme sebebi"
                  value=""
                  onChange={(e) => e.target.value && window.confirm("Yorum bu sebeple gizlensin mi? Sebep sitede görünecek.") && act({ id: r.id, action: "hide", reason: e.target.value })}
                  className="min-h-11 rounded-xl border border-crimson-600 bg-white px-3 text-sm font-bold text-crimson-700"
                >
                  <option value="">Gizle: sebep seçin</option>
                  {Object.entries(reasons).map(([key, text]) => (
                    <option key={key} value={key}>{text.replace(/ için$/, "")}</option>
                  ))}
                </select>
              ) : null}
            </div>
            <ReplyBox initial={r.reply || ""} onSave={(text) => act({ id: r.id, action: "reply", text })} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function ReplyBox({ initial, onSave }: { initial: string; onSave: (text: string) => void }) {
  const [text, setText] = useState(initial);
  return (
    <div className="mt-3 flex flex-col gap-2 sm:flex-row">
      <textarea
        aria-label="Kurum yanıtı"
        placeholder="Herkese açık kurum yanıtı (isteğe bağlı)"
        value={text}
        maxLength={400}
        onChange={(e) => setText(e.target.value)}
        className="min-h-11 flex-1 rounded-xl border border-cobalt-900/15 px-3 py-2 text-sm"
      />
      {text !== initial ? (
        <button onClick={() => onSave(text)} className="min-h-11 rounded-xl border border-cobalt-700 px-4 text-sm font-bold text-cobalt-700">
          Yanıtı kaydet
        </button>
      ) : null}
    </div>
  );
}

type Deploy = { status: string; conclusion: string | null; createdAt: string } | null;

function Content({ call, token }: { call: Call; token: string }) {
  const [content, setContent] = useState<Obj | null>(null);
  const [sha, setSha] = useState("");
  const [deploy, setDeploy] = useState<Deploy>(null);
  const [section, setSection] = useState("home");
  const [dirty, setDirty] = useState(false);
  const [msg, setMsg] = useState("");
  const [busy, setBusy] = useState(false);

  const load = useCallback(() => {
    call("/icerik").then((d) => { setContent(d.content); setSha(d.sha); setDeploy(d.deploy); setDirty(false); }).catch((e) => setMsg(e.message));
  }, [call]);
  useEffect(load, [load]);

  useEffect(() => {
    if (!dirty) return;
    const warn = (e: BeforeUnloadEvent) => e.preventDefault();
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, [dirty]);

  if (!content) return <p className="mt-6 text-ink-muted">{msg || "Yükleniyor..."}</p>;

  const update = (value: Json) => {
    setContent({ ...content, [section]: value });
    setDirty(true);
  };

  const save = async () => {
    setBusy(true);
    setMsg("");
    try {
      await call("/icerik", { method: "PUT", headers: { "content-type": "application/json" }, body: JSON.stringify({ content, sha }) });
      setMsg("Kaydedildi. Site 2-3 dakika içinde güncellenir.");
      load();
    } catch (e) {
      setMsg((e as Error).message);
    } finally {
      setBusy(false);
    }
  };

  const deployText = !deploy
    ? ""
    : deploy.status !== "completed"
      ? "Site şu an güncelleniyor..."
      : deploy.conclusion === "success"
        ? `Son yayın başarılı (${new Date(deploy.createdAt).toLocaleString("tr-TR")}).`
        : "Son yayın başarısız oldu. Eroğlu Solutions'a haber verin.";

  return (
    <div className="mt-6 pb-28">
      <p className="rounded-xl bg-cobalt-50 p-3 text-sm leading-relaxed">
        Metinlerde bir kelimeyi kalın yapmak için iki yıldız arasına yazın: **örnek**. Kaydettiğinizde site 2-3 dakika içinde güncellenir.
        {deployText ? <><br /><strong>{deployText}</strong> <button onClick={load} className="underline">Yenile</button></> : null}
      </p>
      <label className="mt-4 block text-sm font-bold">
        Bölüm
        <select
          value={section}
          onChange={(e) => setSection(e.target.value)}
          className="mt-1 min-h-12 w-full rounded-xl border border-cobalt-900/15 bg-white px-3"
        >
          {Object.keys(content).map((key) => (
            <option key={key} value={key}>{label(key)}</option>
          ))}
        </select>
      </label>
      <div className="mt-4">
        <Field name={section} value={content[section]} onChange={update} token={token} root />
      </div>
      <div className="fixed inset-x-0 bottom-0 border-t border-cobalt-900/10 bg-white/95 p-3">
        <div className="mx-auto flex max-w-4xl items-center gap-3">
          <button
            onClick={save}
            disabled={!dirty || busy}
            className="min-h-12 flex-1 rounded-xl bg-crimson-600 font-extrabold text-white disabled:opacity-50"
          >
            {busy ? "Kaydediliyor..." : dirty ? "Kaydet ve yayınla" : "Değişiklik yok"}
          </button>
        </div>
        {msg ? <p role="status" className="mx-auto mt-2 max-w-4xl text-sm font-semibold">{msg}</p> : null}
      </div>
    </div>
  );
}

function Field({ name, value, onChange, token, root = false }: { name: string; value: Json; onChange: (v: Json) => void; token: string; root?: boolean }) {
  if (typeof value === "string") {
    const long = value.length > 80 || /paragraph|description|body|lead|text|intro|summary|detail|closing|items/i.test(name);
    return (
      <label className="block text-sm font-bold">
        {label(name)}
        {long ? (
          <textarea value={value} onChange={(e) => onChange(e.target.value)} rows={Math.min(10, Math.max(3, Math.ceil(value.length / 90)))} className="mt-1 w-full rounded-xl border border-cobalt-900/15 px-3 py-2 font-normal" />
        ) : (
          <input value={value} onChange={(e) => onChange(e.target.value)} className="mt-1 min-h-11 w-full rounded-xl border border-cobalt-900/15 px-3 font-normal" />
        )}
      </label>
    );
  }
  if (typeof value === "boolean") {
    return (
      <label className="flex items-center gap-2 text-sm font-bold">
        <input type="checkbox" checked={value} onChange={(e) => onChange(e.target.checked)} className="h-5 w-5" />
        {label(name)}
      </label>
    );
  }
  if (Array.isArray(value)) {
    const move = (i: number, d: number) => {
      const next = [...value];
      [next[i], next[i + d]] = [next[i + d], next[i]];
      onChange(next);
    };
    return (
      <fieldset className="rounded-2xl border border-cobalt-900/10 bg-white p-3">
        <legend className="px-1 text-sm font-extrabold">{label(name)}</legend>
        <ol className="space-y-3">
          {value.map((item, i) => (
            <li key={i} className="rounded-xl border border-cobalt-900/10 bg-paper p-3">
              <Field name={name} value={item} onChange={(v) => onChange(value.map((x, j) => (j === i ? v : x)))} token={token} />
              <div className="mt-2 flex flex-wrap gap-2 text-sm font-bold">
                <button type="button" disabled={i === 0} onClick={() => move(i, -1)} className="min-h-10 rounded-lg border px-3 disabled:opacity-40">Yukarı</button>
                <button type="button" disabled={i === value.length - 1} onClick={() => move(i, 1)} className="min-h-10 rounded-lg border px-3 disabled:opacity-40">Aşağı</button>
                <button
                  type="button"
                  disabled={value.length <= 1}
                  onClick={() => window.confirm("Bu öğe kaldırılsın mı?") && onChange(value.filter((_, j) => j !== i))}
                  className="min-h-10 rounded-lg border border-crimson-600 px-3 text-crimson-700 disabled:opacity-40"
                >
                  Kaldır
                </button>
              </div>
            </li>
          ))}
        </ol>
        {value.length ? (
          <button type="button" onClick={() => onChange([...value, blank(value[value.length - 1])])} className="mt-3 min-h-11 rounded-xl border border-cobalt-700 px-4 text-sm font-bold text-cobalt-700">
            + Yeni ekle
          </button>
        ) : null}
      </fieldset>
    );
  }
  const obj = value as Obj;
  const isImage = typeof obj.src === "string" && "alt" in obj;
  return (
    <div className={root ? "space-y-4" : "space-y-3"}>
      {isImage ? <ImagePicker title={label(name)} value={obj} onChange={onChange} token={token} /> : null}
      {Object.entries(obj)
        .filter(([key]) => !HIDDEN_KEYS.has(key) && !(isImage && key === "src"))
        .map(([key, v]) => (
          <Field key={key} name={key} value={v} onChange={(nv) => onChange({ ...obj, [key]: nv })} token={token} />
        ))}
    </div>
  );
}

function ImagePicker({ title, value, onChange, token }: { title: string; value: Obj; onChange: (v: Json) => void; token: string }) {
  const [preview, setPreview] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const src = String(value.src);
  return (
    <div className="text-sm font-bold">
      {title}
      <div className="mt-1 flex flex-wrap items-center gap-3">
        <img src={preview || `${BASE_PATH}${src}`} alt="" className="h-24 w-36 rounded-lg border object-cover" />
        <label className="min-h-11 cursor-pointer rounded-xl border border-cobalt-700 px-4 py-2.5 text-cobalt-700">
          {busy ? "Yükleniyor..." : "Görseli değiştir"}
          <input
            type="file"
            accept="image/jpeg,image/png,image/webp"
            className="sr-only"
            disabled={busy}
            onChange={async (e) => {
              const file = e.target.files?.[0];
              e.target.value = "";
              if (!file) return;
              setBusy(true);
              setError("");
              try {
                const blob = await shrink(file);
                const res = await fetch(`${API}/gorsel`, { method: "POST", headers: { authorization: `Bearer ${token}`, "content-type": "image/jpeg" }, body: blob });
                const data = await res.json().catch(() => ({}));
                if (!res.ok) throw new Error(data.error || "Görsel yüklenemedi.");
                setPreview(URL.createObjectURL(blob));
                onChange({ ...value, src: data.src });
              } catch (err) {
                setError((err as Error).message);
              } finally {
                setBusy(false);
              }
            }}
          />
        </label>
      </div>
      {error ? <p role="alert" className="mt-1 text-crimson-700">{error}</p> : null}
    </div>
  );
}
