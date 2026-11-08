CREATE TABLE IF NOT EXISTS reviews (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,          -- yalnız gösterilen biçim: "Ayşe K."
  role TEXT NOT NULL,          -- veli | ogrenci
  rating INTEGER NOT NULL CHECK (rating BETWEEN 1 AND 5),
  text TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending', -- pending | approved
  created_at TEXT NOT NULL,
  ip_hash TEXT NOT NULL        -- günlük gönderim sınırı için, 30 gün sonra siliniyor
);
CREATE INDEX IF NOT EXISTS reviews_status ON reviews (status, created_at);
