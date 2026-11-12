import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { Portfolio } from "@/components/portfolio";
import { BeforeAfter } from "@/components/before-after";
import { Faq, faqs } from "@/components/faq";
import { Pricing } from "@/components/pricing";
import { SiteFooter } from "@/components/site-footer";
import { WhatsappFloat } from "@/components/whatsapp-float";

const SITE_URL = "https://klique-oficial-website.lovable.app";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Klique • Vitrines Digitais e Sites" },
      { name: "description", content: "Teste sua vitrine virtual com a Klique. Vitrines a partir de R$ 150 e sites profissionais e blogs por R$ 250, com taxa única e hospedagem inclusa." },
      { property: "og:title", content: "Klique • Vitrines Digitais e Sites" },
      { name: "twitter:title", content: "Klique • Vitrines Digitais e Sites" },
      { property: "og:description", content: "Seu negócio no celular do cliente, a um klique de vender. Teste sua vitrine e conheça nossos projetos e preços com taxa única." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: SITE_URL + "/" },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Klique - Agência de Desenvolvimento Web e SEO Local",
          description:
            "Criação de sites de alta conversão, landing pages e presença no Google para comércios e empresas locais.",
          url: SITE_URL,
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
        <Portfolio />
        <BeforeAfter />
        <Pricing />
        <Faq />
      </main>
      <SiteFooter />
      <WhatsappFloat />
    </div>
  );
}
