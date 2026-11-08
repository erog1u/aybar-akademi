// Onay paneli API'si. ADMIN_KEY Cloudflare Pages gizli değişkenidir.
interface Env { DB: D1Database; ADMIN_KEY?: string }

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" },
  });

async function authorized(req: Request, env: Env): Promise<boolean> {
  const key = env.ADMIN_KEY;
  const given = (req.headers.get("authorization") || "").replace(/^Bearer /, "");
  if (!key || key.length < 16 || !given) return false;
  const enc = new TextEncoder();
  const [a, b] = await Promise.all([
    crypto.subtle.digest("SHA-256", enc.encode(key)),
    crypto.subtle.digest("SHA-256", enc.encode(given)),
  ]);
  const x = new Uint8Array(a), y = new Uint8Array(b);
  let diff = 0;
  for (let i = 0; i < x.length; i++) diff |= x[i] ^ y[i];
  return diff === 0;
}

export const onRequest: PagesFunction<Env> = async ({ request, env }) => {
  if (!(await authorized(request, env))) return json({ error: "Yetkisiz." }, 401);

  if (request.method === "GET") {
    const { results } = await env.DB.prepare(
      "SELECT id, name, role, rating, text, status, created_at FROM reviews ORDER BY status = 'pending' DESC, created_at DESC LIMIT 200",
    ).all();
    return json({ reviews: results });
  }

  if (request.method === "POST") {
    const body = (await request.json().catch(() => ({}))) as { id?: unknown; action?: unknown };
    const id = Number(body.id);
    if (!Number.isInteger(id)) return json({ error: "Geçersiz kayıt." }, 400);
    if (body.action === "approve") {
      await env.DB.prepare("UPDATE reviews SET status = 'approved' WHERE id = ?").bind(id).run();
    } else if (body.action === "delete") {
      await env.DB.prepare("DELETE FROM reviews WHERE id = ?").bind(id).run();
    } else {
      return json({ error: "Geçersiz işlem." }, 400);
    }
    return json({ ok: true });
  }

  return json({ error: "Desteklenmeyen istek." }, 405);
};
