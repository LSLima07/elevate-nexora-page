import { ArrowRight } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

type Project = {
  niche: string;
  nicheAccent: "cyan" | "purple";
  name: string;
  problem: string;
  solution: string;
};

const projects: Project[] = [
  {
    niche: "Varejo & Importados",
    nicheAccent: "cyan",
    name: "Loja do Boy — Vitrine de Importados",
    problem:
      "Falta de clareza nas novidades e promoções antes do cliente ir até a loja.",
    solution:
      "Landing Page estilo vitrine digital dinâmica, focada em apresentar lançamentos e direcionar o cliente direto para o fechamento no WhatsApp.",
  },
  {
    niche: "Serviços Automotivos",
    nicheAccent: "purple",
    name: "AutoMec — Oficina de Confiança",
    problem:
      "Dificuldade em transmitir segurança e informações claras para novos clientes na internet em momentos de urgência.",
    solution:
      "Website rápido focado em geolocalização, depoimentos de clientes satisfeitos e botão de socorro/agendamento imediato em 1 clique.",
  },
  {
    niche: "Casa & Decoração",
    nicheAccent: "cyan",
    name: "Conceito Móveis — Catálogo Digital",
    problem:
      "Perda de vendas para concorrentes online por não exibir o catálogo, preços e condições de forma moderna na web.",
    solution:
      "Catálogo digital interativo, otimizado para celulares, onde o cliente navega pelos ambientes e monta seu orçamento facilmente.",
  },
];

export function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative overflow-hidden border-t border-white/5 py-24 md:py-32"
    >
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-0 h-[420px] w-[420px] rounded-full bg-[var(--electric-purple)]/15 blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 left-0 h-[420px] w-[420px] rounded-full bg-[var(--cyan)]/10 blur-[140px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--electric-purple)]" />
            Portfólio
          </span>
          <h2 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground md:text-5xl">
            Soluções Digitais em{" "}
            <span className="bg-gradient-to-r from-[var(--cyan)] via-[var(--tech-blue)] to-[var(--electric-purple)] bg-clip-text text-transparent">
              Ação
            </span>
          </h2>
          <p className="mt-5 text-base text-muted-foreground md:text-lg">
            Projetos concebidos sob medida para transformar as maiores dores de
            empresas locais em resultados reais.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const accentColor =
              project.nicheAccent === "cyan"
                ? "var(--cyan)"
                : "var(--electric-purple)";

            return (
              <ProjectCard key={project.name} project={project} accentColor={accentColor} index={index} />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  accentColor,
  index,
}: {
  project: Project;
  accentColor: string;
  index: number;
}) {
  const { ref, visible } = useReveal<HTMLElement>();
  return (
    <article
      ref={ref}
      className={`reveal ${visible ? "reveal-in" : ""} group relative flex flex-col rounded-2xl border border-[var(--midnight)] bg-[var(--deep-bg)] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_24px_70px_-30px_rgba(122,60,255,0.35)]`}
      style={{ transitionDelay: visible ? `${index * 140}ms` : "0ms" }}
    >
                <div
                  className="inline-flex w-fit items-center rounded-full border px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em]"
                  style={{
                    color: accentColor,
                    backgroundColor: "rgba(45, 140, 255, 0.08)",
                    borderColor: `${accentColor}33`,
                  }}
                >
                  {project.niche}
                </div>

                <h3 className="mt-5 font-display text-xl font-bold leading-tight tracking-tight text-foreground">
                  {project.name}
                </h3>

                <div className="mt-5 space-y-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/60">
                      Problema
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-foreground/80">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/60">
                      Solução NEXORA
                    </p>
                    <p
                      className="mt-1.5 text-sm leading-relaxed"
                      style={{ color: "#9AA5B1", fontFamily: "var(--font-sans)" }}
                    >
                      {project.solution}
                    </p>
                  </div>
                </div>

                <div className="mt-7 border-t border-white/5 pt-5">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--cyan)] transition-colors hover:text-[var(--neon-green)]"
                  >
                    Conhecer Solução
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
    </article>
  );
}