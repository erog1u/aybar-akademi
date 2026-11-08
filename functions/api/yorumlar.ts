// Yorumlar: GET onaylıları listeler, POST yeni yorumu "pending" olarak kaydeder.
interface Env { DB: D1Database }

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" },
  });

const clean = (v: unknown, max: number) =>
  typeof v === "string" ? v.replace(/[<>]/g, "").replace(/\s+/g, " ").trim().slice(0, max) : "";

// "ayşe nur kaya" -> "Ayşe K." (yalnız ad ve soyadın baş harfi saklanır)
export function displayName(full: string): string {
  const parts = full.split(" ").filter(Boolean);
  const cap = (w: string) => w.charAt(0).toLocaleUpperCase("tr") + w.slice(1).toLocaleLowerCase("tr");
  if (parts.length === 1) return cap(parts[0]);
  return `${cap(parts[0])} ${parts[parts.length - 1].charAt(0).toLocaleUpperCase("tr")}.`;
}

async function ipHash(req: Request): Promise<string> {
  const ip = req.headers.get("cf-connecting-ip") || "yok";
  const day = new Date().toISOString().slice(0, 10);
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(`${ip}|${day}|aybar`));
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

export const onRequestGet: PagesFunction<Env> = async ({ env }) => {
  const { results } = await env.DB.prepare(
    "SELECT id, name, role, rating, text, created_at FROM reviews WHERE status = 'approved' ORDER BY created_at DESC LIMIT 40",
  ).all();
  return json({ reviews: results });
};

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Geçersiz istek." }, 400);
  }
  if (clean(body.website, 50)) return json({ ok: true }); // bal tuzağı: botlara başarılı gibi dön

  const name = clean(body.name, 60);
  const text = clean(body.text, 400);
  const role = body.role === "veli" || body.role === "ogrenci" ? body.role : "";
  const rating = Number(body.rating);
  if (name.length < 2 || !/^[\p{L} .'-]+$/u.test(name)) return json({ error: "Adınızı yazınız." }, 400);
  if (!role) return json({ error: "Veli ya da öğrenci seçiniz." }, 400);
  if (!Number.isInteger(rating) || rating < 1 || rating > 5) return json({ error: "Puan seçiniz." }, 400);
  if (text.length < 10) return json({ error: "Yorum en az 10 karakter olmalıdır." }, 400);
  if (body.consent !== true) return json({ error: "Aydınlatma metnini onaylayınız." }, 400);

  const hash = await ipHash(request);
  // shortcut: IP başına günde 3 yorum; spam artarsa Cloudflare Turnstile eklenir.
  const count = await env.DB.prepare("SELECT COUNT(*) AS n FROM reviews WHERE ip_hash = ?").bind(hash).first<number>("n");
  if ((count ?? 0) >= 3) return json({ error: "Bugün için yorum sınırına ulaştınız." }, 429);

  await env.DB.batch([
    env.DB.prepare("UPDATE reviews SET ip_hash = '' WHERE ip_hash != '' AND created_at < datetime('now', '-30 days')"),
    env.DB.prepare(
      "INSERT INTO reviews (name, role, rating, text, status, created_at, ip_hash) VALUES (?, ?, ?, ?, 'pending', datetime('now'), ?)",
    ).bind(displayName(name), role, rating, text, hash),
  ]);
  return json({ ok: true }, 201);
};
