import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Portfolio } from "@/components/portfolio";
import { Faq, faqs } from "@/components/faq";
import { ServiceArea } from "@/components/service-area";
import { SiteFooter } from "@/components/site-footer";
import { WhatsappFloat } from "@/components/whatsapp-float";

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
          name: "NEXORA - Agência de Desenvolvimento Web e SEO Local",
          description:
            "Criação de sites de alta conversão, landing pages e presença no Google para comércios e empresas locais.",
          url: SITE_URL,
          image: OG_IMAGE,
          logo: `${SITE_URL}/favicon.png`,
          areaServed: "Itapetininga, Angatuba e Região (São Paulo)",
          telephone: "+5515998130853",
          priceRange: "$$",
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer service",
            telephone: "+5515998130853",
            availableLanguage: ["Portuguese"],
            contactOption: "TollFree",
          },
          sameAs: [`https://wa.me/5515998130853`],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: f.a,
            },
          })),
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-cyan"
      >
        Pular para o conteúdo principal
      </a>
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Services />
        <Portfolio />
        <Faq />
        <ServiceArea />
      </main>
      <SiteFooter />
      <WhatsappFloat />
    </div>
  );
}
