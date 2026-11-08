// Hızlı teklif formu: talep panelde görünsün diye kaydedilir (WhatsApp mesajı yine açılır). 1 yıldan eski talepler silinir.
import { ipHash, json, type AuthEnv } from "../../server/auth";
import { notify, type NotifyEnv } from "../../server/notify";

const clean = (v: unknown, max: number) =>
  typeof v === "string" ? v.replace(/[<>]/g, "").replace(/\s+/g, " ").trim().slice(0, max) : "";

export const onRequestPost: PagesFunction<AuthEnv & NotifyEnv> = async ({ request, env, waitUntil }) => {
  const body = (await request.json().catch(() => null)) as Record<string, unknown> | null;
  if (!body) return json({ error: "Geçersiz istek." }, 400);
  if (clean(body.website, 50)) return json({ ok: true }); // bal tuzağı
  const f = {
    student: clean(body.student, 80), parent: clean(body.parent, 80), level: clean(body.level, 80),
    district: clean(body.district, 80), format: clean(body.format, 20), lessons: clean(body.lessons, 200),
    phone: clean(body.phone, 20).replace(/[^\d+ ]/g, ""),
  };
  if (f.student.length < 2 || f.parent.length < 2 || f.phone.replace(/\D/g, "").length < 10) return json({ error: "Eksik bilgi." }, 400);
  if (f.format !== "Yüz yüze" && f.format !== "Online") return json({ error: "Eksik bilgi." }, 400);

  const day = new Date().toISOString().slice(0, 10);
  const hash = await ipHash(request, `talep|${day}`);
  // shortcut: IP başına günde 5 talep; spam artarsa Cloudflare Turnstile eklenir.
  const count = await env.DB.prepare("SELECT COUNT(*) AS n FROM requests WHERE ip_hash = ?").bind(hash).first<number>("n");
  if ((count ?? 0) >= 5) return json({ error: "Bugün için talep sınırına ulaşıldı." }, 429);

  await env.DB.batch([
    env.DB.prepare("DELETE FROM requests WHERE created_at < datetime('now', '-365 days')"),
    env.DB.prepare("UPDATE requests SET ip_hash = '' WHERE ip_hash != '' AND created_at < datetime('now', '-2 days')"),
    env.DB.prepare(
      "INSERT INTO requests (created_at, student, parent, level, district, format, lessons, phone, ip_hash) VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?)",
    ).bind(f.student, f.parent, f.level, f.district, f.format, f.lessons, f.phone, hash),
  ]);
  notify(env, waitUntil, `Yeni teklif talebi: ${f.parent}`, [
    `Öğrenci: ${f.student}`, `Veli: ${f.parent}`, `Sınıf/yaş: ${f.level}`, `İlçe/semt: ${f.district}`,
    `Ders şekli: ${f.format}`, `Dersler: ${f.lessons}`, `Telefon: ${f.phone}`, "", "Yönetim paneli: https://aybaristakademi.com/yonetim/",
  ].join("\n"));
  return json({ ok: true }, 201);
};
