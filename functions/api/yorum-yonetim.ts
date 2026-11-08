// Yönetim: yorumları listeler; yayınla, sebepli gizle, herkese açık yanıt yaz. Silme yok.
import { authorized, json, type AuthEnv } from "../../server/auth";
import { HIDE_REASONS } from "../../server/reviews";

export const onRequest: PagesFunction<AuthEnv> = async ({ request, env }) => {
  if (!(await authorized(request, env))) return json({ error: "Oturum süresi doldu. Tekrar giriş yapın." }, 401);

  if (request.method === "GET") {
    const { results } = await env.DB.prepare(
      "SELECT id, name, role, rating, text, status, hide_reason, reply, created_at FROM reviews ORDER BY status = 'held' DESC, created_at DESC LIMIT 300",
    ).all();
    return json({ reviews: results, reasons: HIDE_REASONS });
  }

  if (request.method === "POST") {
    const body = (await request.json().catch(() => ({}))) as { id?: unknown; action?: unknown; reason?: unknown; text?: unknown };
    const id = Number(body.id);
    if (!Number.isInteger(id)) return json({ error: "Geçersiz kayıt." }, 400);
    if (body.action === "publish") {
      await env.DB.prepare("UPDATE reviews SET status = 'published', hide_reason = NULL, decided_at = datetime('now') WHERE id = ?").bind(id).run();
    } else if (body.action === "hide" && typeof body.reason === "string" && body.reason in HIDE_REASONS) {
      await env.DB.prepare("UPDATE reviews SET status = 'hidden', hide_reason = ?, decided_at = datetime('now') WHERE id = ?").bind(body.reason, id).run();
    } else if (body.action === "reply") {
      const text = typeof body.text === "string" ? body.text.replace(/[<>]/g, "").trim().slice(0, 400) : "";
      await env.DB.prepare("UPDATE reviews SET reply = ?, reply_at = datetime('now') WHERE id = ?").bind(text || null, id).run();
    } else {
      return json({ error: "Geçersiz işlem." }, 400);
    }
    return json({ ok: true });
  }

  return json({ error: "Desteklenmeyen istek." }, 405);
};
