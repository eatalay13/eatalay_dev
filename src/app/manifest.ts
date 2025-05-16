import type { MetadataRoute } from "next";
import { getTranslations } from "next-intl/server";

async function manifest(): Promise<MetadataRoute.Manifest> {
  const t = await getTranslations();
  return {
    name: t("Meta.title"),
    short_name: "EAtalayDev",
    description: t("Meta.description"),
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ec680e",
    icons: [
      {
        src: "/globe.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}

export default manifest;
