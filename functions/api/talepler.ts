// Yönetim: teklif talepleri listesi; durum (yeni, arandı, kayıt oldu, olmadı) ve not güncellenir.
import { authorized, json, type AuthEnv } from "../../server/auth";
import { log } from "../../server/log";

export const STATUSES: Record<string, string> = { yeni: "Yeni", arandi: "Arandı", kayit: "Kayıt oldu", olmadi: "Olmadı" };

export const onRequest: PagesFunction<AuthEnv> = async ({ request, env }) => {
  if (!(await authorized(request, env))) return json({ error: "Oturum süresi doldu. Tekrar giriş yapın." }, 401);
  if (request.method === "GET") {
    const { results } = await env.DB.prepare(
      "SELECT id, created_at, student, parent, level, district, format, lessons, phone, status, note FROM requests ORDER BY status = 'yeni' DESC, created_at DESC LIMIT 300",
    ).all();
    return json({ requests: results, statuses: STATUSES });
  }
  if (request.method === "POST") {
    const body = (await request.json().catch(() => ({}))) as { id?: unknown; status?: unknown; note?: unknown };
    const id = Number(body.id);
    if (!Number.isInteger(id)) return json({ error: "Geçersiz kayıt." }, 400);
    if (typeof body.status === "string") {
      if (!(body.status in STATUSES)) return json({ error: "Geçersiz durum." }, 400);
      await env.DB.prepare("UPDATE requests SET status = ? WHERE id = ?").bind(body.status, id).run();
      await log(env, request, `Talep durumu: ${STATUSES[body.status]}`, `Talep #${id}`);
    } else if (typeof body.note === "string") {
      await env.DB.prepare("UPDATE requests SET note = ? WHERE id = ?").bind(body.note.replace(/[<>]/g, "").trim().slice(0, 400) || null, id).run();
    } else {
      return json({ error: "Geçersiz işlem." }, 400);
    }
    return json({ ok: true });
  }
  return json({ error: "Desteklenmeyen istek." }, 405);
};
