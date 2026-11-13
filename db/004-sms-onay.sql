-- Teklif formundaki isteğe bağlı ticari elektronik ileti (SMS) onayı. Onay anı created_at'tir.
ALTER TABLE requests ADD COLUMN sms_consent INTEGER NOT NULL DEFAULT 0;
