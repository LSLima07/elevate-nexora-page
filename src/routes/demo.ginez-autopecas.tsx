import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  Clock,
  Droplets,
  MapPin,
  MessageCircle,
  Phone,
  Star,
  Truck,
  Wrench,
} from "lucide-react";

const STORE_NUMBER = "5515996761741";

function storeUrl(message: string) {
  return `https://wa.me/${STORE_NUMBER}?text=${encodeURIComponent(message)}`;
}

const highlights = [
  {
    icon: Droplets,
    title: "Super Troca de Óleo",
    text: "Serviço rápido, com checagem de níveis e agendamento pelo WhatsApp.",
  },
  {
    icon: Wrench,
    title: "Filtros & Lubrificantes Ipiranga",
    text: "Linha completa de lubrificantes e filtros para carros e utilitários.",
  },
  {
    icon: Truck,
    title: "Peças Multimarcas com Entrega Rápida",
    text: "Amplo estoque multimarcas e entrega ágil em Angatuba e Itapetininga.",
  },
];

const reviews = [
  {
    name: "Marcos A.",
    text: "Ótimo atendimento e prazo de entrega rápido. Pedi a peça pelo WhatsApp de manhã e já estava pronta à tarde.",
  },
  {
    name: "Juliana R.",
    text: "Excelente localização com ampla variedade de peças em Angatuba e Itapetininga. Sempre encontro o que preciso.",
  },
  {
    name: "Edson P.",
    text: "Fiz a super troca de óleo agendada e fui atendido na hora marcada. Equipe honesta e preço justo.",
  },
];

export const Route = createFileRoute("/demo/ginez-autopecas")({
  component: GinezDemo,
  head: () => ({
    meta: [
      { title: "Demonstração Ginez Autopeças | Site Automotivo NEXORA" },
      {
        name: "description",
        content:
          "Demonstração interativa do site criado pela NEXORA para a Ginez Autopeças: peças, lubrificantes, super troca de óleo e agendamento direto no WhatsApp.",
      },
      { name: "robots", content: "noindex" },
      { property: "og:type", content: "website" },
      {
        property: "og:title",
        content: "Demonstração Ginez Autopeças | Site Automotivo NEXORA",
      },
      {
        property: "og:description",
        content:
          "Veja na prática um site automotivo NEXORA: serviços, localização e agendamento no WhatsApp.",
      },
      {
        property: "og:url",
        content: "https://elevate-nexora-page.lovable.app/demo/ginez-autopecas",
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
        href: "https://elevate-nexora-page.lovable.app/demo/ginez-autopecas",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AutoPartsStore",
          name: "Ginez Autopeças & Troca de Óleo",
          description:
            "Peças multimarcas, lubrificantes Ipiranga e super troca de óleo em Angatuba - SP, com agendamento pelo WhatsApp.",
          telephone: "+5515996761741",
          areaServed: "Angatuba, Itapetininga e Região (São Paulo)",
          priceRange: "$$",
          url: "https://elevate-nexora-page.lovable.app/demo/ginez-autopecas",
          image: "https://elevate-nexora-page.lovable.app/og-image.png",
          address: {
            "@type": "PostalAddress",
            streetAddress: "R. Cel. Lodovico Homem de Góes, 302 — Vila Catanduva",
            addressLocality: "Angatuba",
            addressRegion: "SP",
            addressCountry: "BR",
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
              ],
              opens: "08:00",
              closes: "18:00",
            },
          ],
        }),
      },
    ],
  }),
});

function GinezDemo() {
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
      <header className="border-b border-[#FFD400]/20 bg-[#101012]">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-6 sm:px-6 md:py-8">
          <h1 className="text-2xl font-extrabold tracking-tight md:text-3xl">
            <span className="text-[#FFD400]">Ginez Autopeças</span>{" "}
            <span className="text-white/30">|</span>{" "}
            <span className="text-[#2F6BFF]">Angatuba &amp; Itapetininga</span>
          </h1>
          <p className="text-sm text-white/60">
            Peças multimarcas, lubrificantes e serviços automotivos
          </p>
        </div>
      </header>

      <main>
        {/* Banner */}
        <section className="relative overflow-hidden border-b border-white/5">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#2F6BFF]/30 blur-[120px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#FFD400]/15 blur-[120px]"
          />
          <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#FFD400] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-black">
              <Wrench className="h-3.5 w-3.5" />
              Confiança na região
            </span>
            <h2 className="mt-4 max-w-3xl text-3xl font-extrabold leading-[1.1] tracking-tight md:text-5xl">
              A Sua Autopeças de Confiança na Região —{" "}
              <span className="text-[#2F6BFF]">Peças, Lubrificantes</span> e Super
              Troca de Óleo
            </h2>
            <p className="mt-4 max-w-xl text-sm text-white/70 md:text-base">
              Consulte disponibilidade, peça seu orçamento e agende a troca de óleo
              direto pelo WhatsApp — atendimento rápido e sem burocracia.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={storeUrl(
                  "Olá, Ginez Autopeças! Gostaria de um orçamento de peças. Pode me ajudar?"
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#FFD400] px-5 py-3 text-sm font-bold text-black transition-transform hover:scale-[1.03]"
              >
                <MessageCircle className="h-4 w-4" />
                Solicitar Orçamento de Peças no WhatsApp
              </a>
              <a
                href={storeUrl(
                  "Olá, Ginez Autopeças! Quero agendar a Super Troca de Óleo. Quais horários vocês têm?"
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-[#2F6BFF] px-5 py-3 text-sm font-bold text-[#8FB6FF] transition-colors hover:bg-[#2F6BFF]/10"
              >
                <Droplets className="h-4 w-4" />
                Agendar troca de óleo
              </a>
            </div>
          </div>
        </section>

        {/* Info física + destaques */}
        <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_1.4fr]">
            <div className="rounded-2xl border border-white/10 bg-[#131316] p-6">
              <h3 className="text-lg font-bold tracking-tight">Onde estamos</h3>
              <p className="mt-4 flex items-start gap-3 text-sm text-white/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#FFD400]" />
                R. Cel. Lodovico Homem de Góes, 302 — Vila Catanduva, Angatuba - SP
              </p>
              <p className="mt-3 flex items-start gap-3 text-sm text-white/70">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#2F6BFF]" />
                Segunda a Sexta, até às 18:00
              </p>
              <p className="mt-3 flex items-start gap-3 text-sm text-white/70">
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#FFD400]" />
                (15) 99676-1741
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {highlights.map((h) => (
                <article
                  key={h.title}
                  className="rounded-2xl border border-white/10 bg-[#131316] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#FFD400]/40"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#FFD400] to-[#2F6BFF] text-black">
                    <h.icon className="h-5 w-5" />
                  </span>
                  <h4 className="mt-4 text-sm font-bold text-white">{h.title}</h4>
                  <p className="mt-1.5 text-xs leading-relaxed text-white/60">
                    {h.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Avaliações */}
        <section className="border-t border-white/5 bg-[#0D0D0F]">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
            <h3 className="text-xl font-bold tracking-tight md:text-2xl">
              O que dizem nossos clientes
            </h3>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {reviews.map((r) => (
                <figure
                  key={r.name}
                  className="flex h-full flex-col rounded-2xl border border-white/10 bg-[#131316] p-6"
                >
                  <div className="flex gap-1 text-[#FFD400]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-white/75">
                    “{r.text}”
                  </blockquote>
                  <figcaption className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#2F6BFF]">
                    {r.name}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Rodapé demo */}
        <section className="border-t border-white/10 bg-[#101012]">
          <div className="mx-auto max-w-6xl px-4 py-10 text-center sm:px-6">
            <p className="text-sm text-white/60">
              Esta é uma demonstração criada pela{" "}
              <span className="font-semibold text-[var(--cyan)]">NEXORA</span> para
              ilustrar um site automotivo de alta conversão.
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

      {/* Float WhatsApp do cliente */}
      <a
        href={storeUrl(
          "Olá, Ginez Autopeças! Vi o site de vocês e gostaria de mais informações."
        )}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#FFD400] px-4 py-3 text-sm font-bold text-black shadow-[0_10px_40px_-10px_#FFD400] transition-transform hover:scale-105 active:scale-95 sm:bottom-8 sm:right-8"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="hidden sm:inline">Falar com a Ginez Autopeças</span>
        <span className="sm:hidden">Ginez</span>
      </a>
    </div>
  );
}