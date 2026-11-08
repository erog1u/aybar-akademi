import content from "@/data/site-content.json";

// Yönetim panelinden açılıp kapatılan duyuru bandı.
export default function AnnouncementBar() {
  const { enabled, text, link } = content.announcement;
  if (!enabled || !text.trim()) return null;
  const safeLink = /^(\/|https:\/\/)/.test(link.trim()) ? link.trim() : "";
  return (
    <div className="w-full bg-crimson-700 px-4 py-2.5 text-center text-sm font-bold text-white">
      {safeLink ? (
        <a href={safeLink} className="underline underline-offset-2">{text}</a>
      ) : (
        text
      )}
    </div>
  );
}
