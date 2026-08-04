import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, MessageCircle, Truck, ShieldCheck, Zap } from "lucide-react";
import foneTws from "@/assets/demo/fone-tws.jpg";
import carregador from "@/assets/demo/carregador.jpg";
import caixaSom from "@/assets/demo/caixa-som.jpg";
import capas from "@/assets/demo/capas.jpg";

const STORE_NUMBER = "5515998130853";

function storeUrl(message: string) {
  return `https://wa.me/${STORE_NUMBER}?text=${encodeURIComponent(message)}`;
}

const products = [
  {
    name: "Fone Bluetooth TWS Pro",
    price: "R$ 89,90",
    note: "Cancelamento de ruído · 24h de bateria",
    image: foneTws,
    alt: "Fone de ouvido bluetooth TWS preto com estojo de carregamento",
  },
  {
    name: "Carregador Turbo 30W + Cabo",
    price: "R$ 49,90",
    note: "Carrega 50% em 25 minutos",
    image: carregador,
    alt: "Carregador turbo 30W com cabo USB-C",
  },
  {
    name: "Caixa de Som Portátil Pro",
    price: "R$ 120,00",
    note: "À prova d'água · Grave reforçado",
    image: caixaSom,
    alt: "Caixa de som portátil bluetooth resistente",
  },
  {
    name: "Capas & Películas de Alta Resistência",
    price: "A partir de R$ 25,00",
    note: "Vários modelos e cores disponíveis",
    image: capas,
    alt: "Capas de celular coloridas e películas de vidro temperado",
  },
];

export const Route = createFileRoute("/demo/loja-do-boy")({
  component: LojaDoBoyDemo,
  head: () => ({
    meta: [
      { title: "Demonstração Loja do Boy | Vitrine Digital NEXORA" },
      {
        name: "description",
        content:
          "Demonstração interativa da vitrine digital criada pela NEXORA para a Loja do Boy: importados, eletrônicos e acessórios com pedido direto no WhatsApp.",
      },
      { name: "robots", content: "noindex" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Demonstração Loja do Boy | Vitrine Digital NEXORA" },
      {
        property: "og:description",
        content:
          "Veja na prática uma vitrine digital NEXORA: produtos, preços e pedido direto no WhatsApp.",
      },
      {
        property: "og:url",
        content: "https://elevate-nexora-page.lovable.app/demo/loja-do-boy",
      },
      {
        property: "og:image",
        content: "https://elevate-nexora-page.lovable.app/og-image.png",
      },
      {
        name: "twitter:image",
        content: "https://elevate-nexora-page.lovable.app/og-image.png",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://elevate-nexora-page.lovable.app/demo/loja-do-boy",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Loja do Boy — Importados, Eletrônicos & Acessórios",
          description:
            "Vitrine digital de importados, eletrônicos e acessórios em Angatuba - SP, com pedidos diretos pelo WhatsApp.",
          telephone: "+5515998130853",
          areaServed: "Angatuba e Região (São Paulo)",
          priceRange: "$$",
          url: "https://elevate-nexora-page.lovable.app/demo/loja-do-boy",
          image: "https://elevate-nexora-page.lovable.app/og-image.png",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Angatuba",
            addressRegion: "SP",
            addressCountry: "BR",
          },
        }),
      },
    ],
  }),
});

function LojaDoBoyDemo() {
  return <LojaDoBoyPage />;
}

function BoyMascot() {
  return (
    <span
      aria-hidden
      className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#FFE600]/40 bg-[#FFE600]/10 md:h-14 md:w-14"
    >
      <svg viewBox="0 0 64 64" className="h-9 w-9 md:h-10 md:w-10" role="img" aria-label="Mascote Loja do Boy">
        {/* boné */}
        <path d="M14 26a18 18 0 0 1 36 0z" fill="#00A3FF" />
        <path d="M12 26h26a4 4 0 0 1 0 8H16a4 4 0 0 1-4-4z" fill="#0077CC" />
        {/* rosto */}
        <circle cx="32" cy="40" r="15" fill="#FFE600" />
        <circle cx="26" cy="38" r="2.4" fill="#101012" />
        <circle cx="38" cy="38" r="2.4" fill="#101012" />
        <path
          d="M25 45c2.2 3 5 4.4 7 4.4s4.8-1.4 7-4.4"
          stroke="#101012"
          strokeWidth="2.6"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </span>
  );
}

function LojaDoBoyPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white">
      {/* Barra NEXORA */}
      <div className="sticky top-0 z-40 border-b border-white/10 bg-[#070A14]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--cyan)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--neon-green)]" />
            Demonstração Interativa NEXORA
          </span>
          <Link
            to="/"
            hash="portfolio"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:border-white/30 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para o site da Nexora
          </Link>
        </div>
      </div>

      {/* Header do cliente */}
      <header className="border-b border-[#FFE600]/20 bg-[#101012]">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-6 sm:px-6 md:py-8">
          <div className="flex items-center gap-3">
            <BoyMascot />
            <h1 className="text-2xl font-extrabold tracking-tight md:text-3xl">
              <span className="text-[#FFE600]">Loja do Boy</span>{" "}
              <span className="text-white/30">|</span>{" "}
              <span className="text-white">Importados, Eletrônicos & Acessórios</span>
            </h1>
          </div>
          <p className="text-sm text-white/60">
            Angatuba – SP · Atendimento todos os dias pelo WhatsApp
          </p>
        </div>
      </header>

      <main>
        {/* Banner */}
        <section className="relative overflow-hidden border-b border-white/5">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#00A3FF]/25 blur-[120px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#FFE600]/15 blur-[120px]"
          />
          <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#FFE600] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-black">
              <Zap className="h-3.5 w-3.5" />
              Novidades
            </span>
            <h2 className="mt-4 max-w-3xl text-3xl font-extrabold leading-[1.1] tracking-tight md:text-5xl">
              Lançamentos da Semana com{" "}
              <span className="text-[#00A3FF]">Entrega Rápida</span> em Angatuba e
              Região
            </h2>
            <p className="mt-4 max-w-xl text-sm text-white/70 md:text-base">
              Escolha o produto, clique em pedir e finalize direto no WhatsApp — sem
              cadastro, sem burocracia.
            </p>
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-xs text-white/60 md:text-sm">
              <span className="inline-flex items-center gap-2">
                <Truck className="h-4 w-4 text-[#00A3FF]" /> Entrega no mesmo dia
              </span>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[#FFE600]" /> Garantia de 90 dias
              </span>
              <span className="inline-flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-[#00A3FF]" /> Pedido em 1 clique
              </span>
            </div>
          </div>
        </section>

        {/* Produtos */}
        <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
          <h3 className="text-xl font-bold tracking-tight md:text-2xl">
            Vitrine de produtos
          </h3>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p) => (
              <article
                key={p.name}
                className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#131316] transition-all duration-300 hover:-translate-y-1 hover:border-[#FFE600]/40"
              >
                <div className="aspect-square overflow-hidden bg-black">
                  <img
                    src={p.image}
                    alt={p.alt}
                    loading="lazy"
                    width={768}
                    height={768}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h4 className="text-sm font-semibold leading-snug text-white">
                    {p.name}
                  </h4>
                  <p className="mt-1 text-xs text-white/50">{p.note}</p>
                  <p className="mt-3 text-lg font-extrabold text-[#FFE600]">
                    {p.price}
                  </p>
                  <a
                    href={storeUrl(
                      `Olá, Loja do Boy! Tenho interesse no produto: ${p.name} (${p.price}). Ainda está disponível?`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#00A3FF] px-4 py-2.5 text-sm font-bold text-black transition-colors hover:bg-[#FFE600]"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Pedir no WhatsApp
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Rodapé demo */}
        <section className="border-t border-white/10 bg-[#101012]">
          <div className="mx-auto max-w-6xl px-4 py-10 text-center sm:px-6">
            <p className="text-sm text-white/60">
              Esta é uma demonstração fictícia criada pela{" "}
              <span className="font-semibold text-[var(--cyan)]">NEXORA</span> para
              ilustrar uma vitrine digital.
            </p>
            <Link
              to="/"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[var(--neon-green)] px-5 py-2.5 text-sm font-bold text-[#04121B] transition-transform hover:scale-105"
            >
              Quero uma vitrine assim
            </Link>
          </div>
        </section>
      </main>

      {/* Float WhatsApp do cliente */}
      <a
        href={storeUrl(
          "Olá, Loja do Boy! Vi a vitrine digital de vocês e gostaria de mais informações."
        )}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#FFE600] px-4 py-3 text-sm font-bold text-black shadow-[0_10px_40px_-10px_#FFE600] transition-transform hover:scale-105 active:scale-95 sm:bottom-8 sm:right-8"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="hidden sm:inline">Falar direto com a Loja do Boy</span>
        <span className="sm:hidden">Loja do Boy</span>
      </a>
    </div>
  );
}