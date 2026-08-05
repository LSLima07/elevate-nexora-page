import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Clock, MapPin, MessageCircle, Phone, Star } from "lucide-react";
import salaImg from "@/assets/demo/conceito-sala.jpg";
import estofadoImg from "@/assets/demo/conceito-estofado.jpg";
import jantarImg from "@/assets/demo/conceito-jantar.jpg";
import decorImg from "@/assets/demo/conceito-decor.jpg";

const STORE_NUMBER = "551532112109";

function storeUrl(message: string) {
  return `https://wa.me/${STORE_NUMBER}?text=${encodeURIComponent(message)}`;
}

const products = [
  {
    image: salaImg,
    room: "Salas de Estar",
    name: "Ambiente Sala Completa Toscana",
    text: "Sofá, rack, mesa de centro e iluminação em composição amadeirada.",
  },
  {
    image: estofadoImg,
    room: "Estofados",
    name: "Sofá Retrátil Premium Linho",
    text: "Estofado 3 lugares em linho premium, espuma de alta densidade.",
  },
  {
    image: jantarImg,
    room: "Mesas de Jantar",
    name: "Mesa de Jantar 6 Lugares Carvalho",
    text: "Tampo em madeira maciça com cadeiras estofadas sob medida.",
  },
  {
    image: decorImg,
    room: "Decorações",
    name: "Curadoria de Decoração Ouro Velho",
    text: "Vasos, espelhos e peças decorativas para finalizar o ambiente.",
  },
];

const reviews = [
  {
    name: "Cliente Google",
    text: "Loja organizada, ambientes encantadores, atendimento nota 10!",
  },
  {
    name: "Cliente Google",
    text: "Produtos de excelente qualidade e estofados incríveis. Aprovado!",
  },
];

const SITE = "https://elevate-nexora-page.lovable.app/demo/conceito-moveis";
const OG = "https://elevate-nexora-page.lovable.app/og-image.png";

export const Route = createFileRoute("/demo/conceito-moveis")({
  component: ConceitoDemo,
  head: () => ({
    meta: [
      { title: "Demonstração Conceito Móveis | Catálogo Digital NEXORA" },
      {
        name: "description",
        content:
          "Demonstração interativa do catálogo digital criado pela NEXORA para a Conceito Móveis e Decorações, em Sorocaba - SP.",
      },
      { name: "robots", content: "noindex" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Demonstração Conceito Móveis | Catálogo Digital NEXORA" },
      {
        property: "og:description",
        content:
          "Catálogo digital elegante por ambientes, orçamento no WhatsApp e atendimento premium.",
      },
      { property: "og:url", content: SITE },
      { property: "og:image", content: OG },
      { name: "twitter:image", content: OG },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: SITE }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FurnitureStore",
          name: "Conceito Móveis e Decorações",
          description:
            "Catálogo digital de móveis de alto padrão, estofados e decoração em Sorocaba - SP.",
          telephone: "+551532112109",
          areaServed: "Sorocaba e Região (São Paulo)",
          priceRange: "$$$",
          url: SITE,
          image: OG,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Av. Washington Luiz, 1000 — Jardim Emilia",
            addressLocality: "Sorocaba",
            addressRegion: "SP",
            addressCountry: "BR",
          },
        }),
      },
    ],
  }),
});

function ConceitoDemo() {
  return (
    <div className="min-h-screen bg-[#141210] text-[#F4EDE4]">
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
      <header className="border-b border-[#D4A373]/25 bg-[#1B1815]">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-6 sm:px-6 md:py-8">
          <h1 className="text-2xl font-extrabold tracking-tight md:text-3xl">
            <span className="text-[#D4A373]">Conceito Móveis e Decorações</span>{" "}
            <span className="text-white/25">|</span>{" "}
            <span className="text-[#B08D57]">Sorocaba - SP</span>
          </h1>
          <p className="text-sm text-[#F4EDE4]/60">
            Móveis de alto padrão, estofados e projetos de ambientes
          </p>
        </div>
      </header>

      <main>
        {/* Banner */}
        <section className="relative overflow-hidden border-b border-white/5">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#D4A373]/25 blur-[130px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#B08D57]/20 blur-[130px]"
          />
          <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
            <span className="inline-flex items-center rounded-full bg-[#D4A373] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#1B1815]">
              Atendimento premium
            </span>
            <h2 className="mt-4 max-w-3xl font-display text-3xl font-extrabold leading-[1.1] tracking-tight md:text-5xl">
              Ambientes Encantadores para o Seu Lar com{" "}
              <span className="text-[#D4A373]">Montagem e Atendimento Personalizado</span>
            </h2>
            <p className="mt-4 max-w-xl text-sm text-[#F4EDE4]/70 md:text-base">
              Navegue pelo nosso catálogo por ambientes, consulte valores e condições
              direto no WhatsApp com um consultor de decoração.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={storeUrl(
                  "Olá, Conceito Móveis! Vi o catálogo digital e gostaria de consultar valores."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-[#D4A373] px-5 py-3 text-sm font-bold text-[#1B1815] transition-transform hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4EDE4]"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                Falar com um consultor
              </a>
              <a
                href="tel:+551532112109"
                className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-[#B08D57] px-5 py-3 text-sm font-bold text-[#E6C79C] transition-colors hover:bg-[#B08D57]/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E6C79C]"
              >
                <Phone className="h-4 w-4" aria-hidden />
                (15) 3211-2109
              </a>
            </div>
          </div>
        </section>

        {/* Catálogo */}
        <section
          aria-labelledby="conceito-catalogo"
          className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16"
        >
          <h3
            id="conceito-catalogo"
            className="font-display text-xl font-bold tracking-tight md:text-2xl"
          >
            Nossos ambientes
          </h3>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p) => (
              <article
                key={p.name}
                className="flex flex-col overflow-hidden rounded-2xl border border-[#D4A373]/15 bg-[#1B1815] transition-all duration-300 hover:-translate-y-1 hover:border-[#D4A373]/45"
              >
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="h-44 w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-5">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#D4A373]">
                    {p.room}
                  </span>
                  <h4 className="mt-2 text-sm font-bold leading-snug">{p.name}</h4>
                  <p className="mt-1.5 flex-1 text-xs leading-relaxed text-[#F4EDE4]/60">
                    {p.text}
                  </p>
                  <a
                    href={storeUrl(
                      `Olá! Vi o produto ${p.name} (${p.room}) na vitrine virtual e gostaria de mais informações sobre valores e prazos.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Consultar valor de ${p.name} no WhatsApp`}
                    className="mt-4 inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#D4A373] px-4 py-2.5 text-xs font-bold text-[#1B1815] transition-transform hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4EDE4]"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden />
                    Consultar Valor no WhatsApp
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Avaliações */}
        <section className="border-t border-white/5 bg-[#100E0C]">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
            <h3 className="font-display text-xl font-bold tracking-tight md:text-2xl">
              Avaliações de clientes no Google
            </h3>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {reviews.map((r) => (
                <figure
                  key={r.text}
                  className="flex h-full flex-col rounded-2xl border border-[#D4A373]/15 bg-[#1B1815] p-6"
                >
                  <div className="flex gap-1 text-[#D4A373]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-[#F4EDE4]/80">
                    “{r.text}”
                  </blockquote>
                  <figcaption className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#B08D57]">
                    {r.name}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Contato + mapa */}
        <section
          aria-labelledby="conceito-contato"
          className="border-t border-white/5"
        >
          <div className="mx-auto grid max-w-6xl gap-6 px-4 py-12 sm:px-6 md:py-16 lg:grid-cols-2">
            <div className="rounded-2xl border border-[#D4A373]/15 bg-[#1B1815] p-6">
              <h3
                id="conceito-contato"
                className="font-display text-lg font-bold tracking-tight"
              >
                Onde estamos
              </h3>
              <p className="mt-4 flex items-start gap-3 text-sm text-[#F4EDE4]/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#D4A373]" aria-hidden />
                Av. Washington Luiz, 1000 — Jardim Emilia, Sorocaba - SP
              </p>
              <p className="mt-3 flex items-start gap-3 text-sm text-[#F4EDE4]/70">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#B08D57]" aria-hidden />
                (15) 3211-2109
              </p>
              <p className="mt-3 flex items-start gap-3 text-sm text-[#F4EDE4]/70">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#D4A373]" aria-hidden />
                Segunda a Sábado, das 09:00 às 18:00
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-[#D4A373]/15">
              <iframe
                title="Mapa da Conceito Móveis — Av. Washington Luiz, 1000, Sorocaba - SP"
                src="https://www.google.com/maps?q=Av.%20Washington%20Luiz%2C%201000%20-%20Jardim%20Emilia%2C%20Sorocaba%20-%20SP&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-72 w-full border-0 grayscale-[0.25] contrast-[1.05] [color-scheme:dark]"
              />
            </div>
          </div>
        </section>

        {/* Rodapé demo */}
        <section className="border-t border-white/10 bg-[#1B1815]">
          <div className="mx-auto max-w-6xl px-4 py-10 text-center sm:px-6">
            <p className="text-sm text-[#F4EDE4]/60">
              Esta é uma demonstração criada pela{" "}
              <span className="font-semibold text-[var(--cyan)]">NEXORA</span> para
              ilustrar um catálogo digital premium.
            </p>
            <Link
              to="/"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[var(--neon-green)] px-5 py-2.5 text-sm font-bold text-[#04121B] transition-transform hover:scale-105"
            >
              Quero um site assim
            </Link>
          </div>
        </section>
      </main>

      <a
        href={storeUrl(
          "Olá, Conceito Móveis! Vi o site de vocês e gostaria de mais informações."
        )}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a Conceito Móveis no WhatsApp"
        className="fixed bottom-5 right-5 z-50 inline-flex min-h-11 items-center gap-2 rounded-full bg-[#D4A373] px-4 py-3 text-sm font-bold text-[#1B1815] shadow-[0_10px_40px_-10px_#D4A373] transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-95 sm:bottom-8 sm:right-8"
      >
        <MessageCircle className="h-5 w-5" aria-hidden />
        <span className="hidden sm:inline">Falar com a Conceito Móveis</span>
        <span className="sm:hidden">Conceito</span>
      </a>
    </div>
  );
}