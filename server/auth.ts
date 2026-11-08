// Yönetim girişi: kullanıcı adı + şifre (Pages gizli değişkenleri), imzalı oturum anahtarı, hatalı denemede kilit.
export interface AuthEnv {
  DB: D1Database;
  ADMIN_USER?: string;
  ADMIN_PASSWORD?: string;
  SESSION_SECRET?: string;
}

const enc = new TextEncoder();
const SESSION_DAYS = 30;
const MAX_FAILS = 5;
const LOCK_MINUTES = 15;
// Şifre kısa olduğu için farklı IP'lerden toplu denemeye karşı genel kilit (tüm girişler 1 saat durur).
const MAX_FAILS_ALL = 30;

export const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" },
  });

const hex = (buf: ArrayBuffer) => [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");

async function hmac(secret: string, data: string): Promise<string> {
  const key = await crypto.subtle.importKey("raw", enc.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  return hex(await crypto.subtle.sign("HMAC", key, enc.encode(data)));
}

async function sameText(a: string, b: string): Promise<boolean> {
  const [x, y] = await Promise.all([crypto.subtle.digest("SHA-256", enc.encode(a)), crypto.subtle.digest("SHA-256", enc.encode(b))]);
  const p = new Uint8Array(x), q = new Uint8Array(y);
  let diff = 0;
  for (let i = 0; i < p.length; i++) diff |= p[i] ^ q[i];
  return diff === 0;
}

export async function ipHash(req: Request, salt: string): Promise<string> {
  const ip = req.headers.get("cf-connecting-ip") || "yok";
  return hex(await crypto.subtle.digest("SHA-256", enc.encode(`${ip}|${salt}`)));
}

export async function login(req: Request, env: AuthEnv): Promise<Response> {
  if (!env.ADMIN_USER || !env.ADMIN_PASSWORD || !env.SESSION_SECRET) return json({ error: "Giriş ayarlanmamış." }, 503);
  const who = await ipHash(req, "giris");
  const fails = await env.DB.prepare(
    `SELECT COUNT(*) AS n FROM login_attempts WHERE ip_hash = ? AND at > datetime('now', '-${LOCK_MINUTES} minutes')`,
  ).bind(who).first<number>("n");
  const allFails = await env.DB.prepare(
    "SELECT COUNT(*) AS n FROM login_attempts WHERE at > datetime('now', '-60 minutes')",
  ).first<number>("n");
  if ((allFails ?? 0) >= MAX_FAILS_ALL) return json({ error: "Giriş geçici olarak kapalı. 1 saat sonra tekrar deneyin." }, 429);
  if ((fails ?? 0) >= MAX_FAILS) return json({ error: `Çok fazla hatalı deneme. ${LOCK_MINUTES} dakika sonra tekrar deneyin.` }, 429);

  const body = (await req.json().catch(() => ({}))) as { username?: unknown; password?: unknown };
  const user = typeof body.username === "string" ? body.username.trim() : "";
  const pass = typeof body.password === "string" ? body.password : "";
  const ok = (await sameText(user, env.ADMIN_USER)) && (await sameText(pass, env.ADMIN_PASSWORD));
  if (!ok) {
    await env.DB.batch([
      env.DB.prepare("DELETE FROM login_attempts WHERE at < datetime('now', '-1 day')"),
      env.DB.prepare("INSERT INTO login_attempts (ip_hash, at) VALUES (?, datetime('now'))").bind(who),
    ]);
    return json({ error: "Kullanıcı adı veya şifre hatalı." }, 401);
  }
  const exp = Date.now() + SESSION_DAYS * 86400_000;
  return json({ token: `${exp}.${await hmac(env.SESSION_SECRET, `admin|${exp}`)}` });
}

export async function authorized(req: Request, env: AuthEnv): Promise<boolean> {
  if (!env.SESSION_SECRET) return false;
  const token = (req.headers.get("authorization") || "").replace(/^Bearer /, "");
  const [expText, sig] = token.split(".");
  const exp = Number(expText);
  if (!sig || !Number.isFinite(exp) || exp < Date.now()) return false;
  return sameText(sig, await hmac(env.SESSION_SECRET, `admin|${exp}`));
}
