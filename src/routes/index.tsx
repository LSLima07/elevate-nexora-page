import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Portfolio } from "@/components/portfolio";
import { SiteFooter } from "@/components/site-footer";

const SITE_URL = "https://id-preview--9c6b63c8-3813-460c-aece-353c4494c55b.lovable.app";
const OG_IMAGE = `${SITE_URL}/og-image.png`;

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:secure_url", content: OG_IMAGE },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "NEXORA — Transformamos confiança em crescimento" },
      { property: "og:url", content: SITE_URL + "/" },
      { name: "twitter:image", content: OG_IMAGE },
      { name: "twitter:image:alt", content: "NEXORA — Transformamos confiança em crescimento" },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/" }],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <Portfolio />
      </main>
      <SiteFooter />
    </div>
  );
}
