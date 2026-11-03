import { MetadataRoute } from "next";
import { IS_PREVIEW_MODE, SITE_URL } from "@/config/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = SITE_URL;

  if (IS_PREVIEW_MODE) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/onizleme", "/onizleme/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
