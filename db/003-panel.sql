CREATE TABLE IF NOT EXISTS admin_log (id INTEGER PRIMARY KEY AUTOINCREMENT, at TEXT NOT NULL, action TEXT NOT NULL, detail TEXT, ip_hash TEXT);
CREATE INDEX IF NOT EXISTS admin_log_at ON admin_log (at);
CREATE TABLE IF NOT EXISTS requests (
  id INTEGER PRIMARY KEY AUTOINCREMENT, created_at TEXT NOT NULL, student TEXT NOT NULL, parent TEXT NOT NULL,
  level TEXT, district TEXT, format TEXT, lessons TEXT, phone TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'yeni', note TEXT, ip_hash TEXT
);
CREATE INDEX IF NOT EXISTS requests_created ON requests (created_at);
CREATE TABLE IF NOT EXISTS visits (day TEXT NOT NULL, path TEXT NOT NULL, n INTEGER NOT NULL DEFAULT 0, PRIMARY KEY (day, path));
CREATE TABLE IF NOT EXISTS panel_meta (key TEXT PRIMARY KEY, value TEXT);
