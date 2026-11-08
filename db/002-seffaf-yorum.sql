ALTER TABLE reviews ADD COLUMN reply TEXT;
ALTER TABLE reviews ADD COLUMN reply_at TEXT;
ALTER TABLE reviews ADD COLUMN hide_reason TEXT;
ALTER TABLE reviews ADD COLUMN decided_at TEXT;
UPDATE reviews SET status = 'published' WHERE status = 'approved';
UPDATE reviews SET status = 'held' WHERE status = 'pending';
CREATE TABLE IF NOT EXISTS login_attempts (ip_hash TEXT NOT NULL, at TEXT NOT NULL);
CREATE INDEX IF NOT EXISTS login_attempts_ip ON login_attempts (ip_hash, at);
