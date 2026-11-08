// GET: yayındaki ve gizlenen (sebebiyle) yorumlar + ortalama. POST: yeni yorum, filtreden geçerse hemen yayında.
import { ipHash, json, type AuthEnv } from "../../server/auth";
import { autoHoldReason, HIDE_REASONS } from "../../server/reviews";

const clean = (v: unknown, max: number) =>
  typeof v === "string" ? v.replace(/[<>]/g, "").replace(/\s+/g, " ").trim().slice(0, max) : "";

// "ayşe nur kaya" -> "Ayşe K." (yalnız ad ve soyadın baş harfi saklanır)
function displayName(full: string): string {
  const parts = full.split(" ").filter(Boolean);
  const cap = (w: string) => w.charAt(0).toLocaleUpperCase("tr") + w.slice(1).toLocaleLowerCase("tr");
  if (parts.length === 1) return cap(parts[0]);
  return `${cap(parts[0])} ${parts[parts.length - 1].charAt(0).toLocaleUpperCase("tr")}.`;
}

export const onRequestGet: PagesFunction<AuthEnv> = async ({ env }) => {
  const { results } = await env.DB.prepare(
    "SELECT id, name, role, rating, text, status, hide_reason, reply, created_at FROM reviews WHERE status IN ('published','hidden') ORDER BY created_at DESC LIMIT 60",
  ).all<Record<string, unknown>>();
  const stats = await env.DB.prepare(
    "SELECT COUNT(*) AS count, ROUND(AVG(rating), 1) AS average FROM reviews WHERE status IN ('published','hidden')",
  ).first<{ count: number; average: number | null }>();
  const reviews = results.map((r) =>
    r.status === "hidden"
      ? { id: r.id, hidden: true, reason: HIDE_REASONS[String(r.hide_reason)] || "kurallara uymadığı için", rating: r.rating, created_at: r.created_at }
      : { id: r.id, name: r.name, role: r.role, rating: r.rating, text: r.text, reply: r.reply || null, created_at: r.created_at },
  );
  return json({ reviews, stats });
};

export const onRequestPost: PagesFunction<AuthEnv> = async ({ request, env }) => {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Geçersiz istek." }, 400);
  }
  if (clean(body.website, 50)) return json({ ok: true, status: "published" }); // bal tuzağı

  const name = clean(body.name, 60);
  const text = clean(body.text, 400);
  const role = body.role === "veli" || body.role === "ogrenci" ? body.role : "";
  const rating = Number(body.rating);
  if (name.length < 2 || !/^[\p{L} .'-]+$/u.test(name)) return json({ error: "Adınızı yazınız." }, 400);
  if (!role) return json({ error: "Veli ya da öğrenci seçiniz." }, 400);
  if (!Number.isInteger(rating) || rating < 1 || rating > 5) return json({ error: "Puan seçiniz." }, 400);
  if (text.length < 10) return json({ error: "Yorum en az 10 karakter olmalıdır." }, 400);
  if (body.consent !== true) return json({ error: "Aydınlatma metnini onaylayınız." }, 400);

  const day = new Date().toISOString().slice(0, 10);
  const hash = await ipHash(request, `yorum|${day}`);
  // shortcut: IP başına günde 3 yorum; spam artarsa Cloudflare Turnstile eklenir.
  const count = await env.DB.prepare("SELECT COUNT(*) AS n FROM reviews WHERE ip_hash = ?").bind(hash).first<number>("n");
  if ((count ?? 0) >= 3) return json({ error: "Bugün için yorum sınırına ulaştınız." }, 429);

  const held = autoHoldReason(`${name} ${text}`);
  const status = held ? "held" : "published";
  await env.DB.batch([
    env.DB.prepare("UPDATE reviews SET ip_hash = '' WHERE ip_hash != '' AND created_at < datetime('now', '-30 days')"),
    env.DB.prepare(
      "INSERT INTO reviews (name, role, rating, text, status, hide_reason, created_at, ip_hash) VALUES (?, ?, ?, ?, ?, ?, datetime('now'), ?)",
    ).bind(displayName(name), role, rating, text, status, held, hash),
  ]);
  return json({ ok: true, status }, 201);
};
