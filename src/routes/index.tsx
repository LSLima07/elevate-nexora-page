import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Portfolio } from "@/components/portfolio";
import { Faq } from "@/components/faq";
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
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "NEXORA",
          description:
            "Agência de desenvolvimento de sites de alta conversão, landing pages e SEO para pequenos e médios negócios locais.",
          url: SITE_URL,
          image: OG_IMAGE,
          logo: `${SITE_URL}/favicon.png`,
          areaServed: "Região Local / Itapetininga e arredores",
          telephone: "+55 15 99813-0853",
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer service",
            telephone: "+55 15 99813-0853",
            availableLanguage: ["Portuguese"],
            contactOption: "TollFree",
          },
          sameAs: [`https://wa.me/5515998130853`],
        }),
      },
    ],
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
        <Faq />
      </main>
      <SiteFooter />
    </div>
  );
}
