// Yönetim özeti: ziyaret, talep, yorum sayıları ve son işlem kayıtları.
import { authorized, json, type AuthEnv } from "../../server/auth";

export const onRequestGet: PagesFunction<AuthEnv> = async ({ request, env }) => {
  if (!(await authorized(request, env))) return json({ error: "Oturum süresi doldu. Tekrar giriş yapın." }, 401);
  const q = (sql: string) => env.DB.prepare(sql);
  const [visits7, visits30, daily, pages, req7, req30, reqNew, reviews, held, reviewsNew, logRows] = await env.DB.batch([
    q("SELECT COALESCE(SUM(n), 0) AS n FROM visits WHERE day >= date('now', '-6 days')"),
    q("SELECT COALESCE(SUM(n), 0) AS n FROM visits WHERE day >= date('now', '-29 days')"),
    q("SELECT day, SUM(n) AS n FROM visits WHERE day >= date('now', '-13 days') GROUP BY day ORDER BY day"),
    q("SELECT path, SUM(n) AS n FROM visits WHERE day >= date('now', '-29 days') GROUP BY path ORDER BY n DESC LIMIT 8"),
    q("SELECT COUNT(*) AS n FROM requests WHERE created_at >= datetime('now', '-7 days')"),
    q("SELECT COUNT(*) AS n FROM requests WHERE created_at >= datetime('now', '-30 days')"),
    q("SELECT COUNT(*) AS n FROM requests WHERE status = 'yeni'"),
    q("SELECT COUNT(*) AS n, ROUND(AVG(rating), 1) AS avg FROM reviews WHERE status IN ('published','hidden')"),
    q("SELECT COUNT(*) AS n FROM reviews WHERE status = 'held'"),
    q("SELECT COUNT(*) AS n FROM reviews WHERE created_at > COALESCE((SELECT value FROM panel_meta WHERE key = 'reviews_seen'), '')"),
    q("SELECT at, action, detail, ip_hash FROM admin_log ORDER BY id DESC LIMIT 100"),
  ]);
  const one = (r: D1Result) => (r.results[0] as Record<string, number | null>) || {};
  return json({
    visits: { week: one(visits7).n, month: one(visits30).n, daily: daily.results, pages: pages.results },
    requests: { week: one(req7).n, month: one(req30).n, open: one(reqNew).n },
    reviews: { count: one(reviews).n, average: one(reviews).avg, held: one(held).n, unseen: one(reviewsNew).n },
    log: logRows.results,
  });
};
