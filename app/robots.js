export const dynamic = "force-static";

export default function robots() {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: "https://www.riis.engineering/sitemap.xml", host: "https://www.riis.engineering" };
}
