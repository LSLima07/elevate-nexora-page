import { ArrowRight, CupSoda, Gift } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { buildWhatsappUrl } from "@/lib/whatsapp";

type Project = {
  name: string;
  niche: string;
  city: string;
  icon: LucideIcon;
  description: string;
  highlights: string[];
};

const projects: Project[] = [
  {
    name: "Ultra Shake",
    niche: "Delivery",
    city: "Angatuba",
    icon: CupSoda,
    description:
      "Vitrine de delivery responsiva com sistema de pedidos direto para o WhatsApp.",
    highlights: ["Cardápio com fotos e preços", "Pedido montado em poucos toques", "Mensagem pronta no WhatsApp"],
  },
  {
    name: "Brinquedos & Cia",
    niche: "Presentes",
    city: "Angatuba",
    icon: Gift,
    description:
      "Catálogo dinâmico de presentes com filtros interativos por categorias.",
    highlights: ["Filtros por idade e categoria", "Catálogo sempre atualizado", "Atendimento direto no WhatsApp"],
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" aria-labelledby="portfolio-title" className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Casos de sucesso</span>
          <h2 id="portfolio-title" className="mt-4 text-balance font-display text-3xl font-extrabold md:text-4xl">
            Comércios de Angatuba que já vendem pelo WhatsApp
          </h2>
          <p className="mt-4 text-muted-foreground">
            Vitrines reais, criadas para o dia a dia de quem atende no balcão.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { ref, visible } = useReveal<HTMLElement>();
  const Icon = project.icon;
  const url = buildWhatsappUrl(
    `Olá! Vi o case ${project.name} no site da Klique e quero uma vitrine parecida para a minha loja.`,
  );
  return (
    <article
      ref={ref}
      style={{ transitionDelay: visible ? `${index * 140}ms` : "0ms" }}
      className={`reveal ${visible ? "reveal-in" : ""} flex flex-col rounded-3xl border border-border bg-card p-8 shadow-soft transition-transform duration-300 hover:-translate-y-1`}
    >
      <div className="flex items-center justify-between">
        <span className="grid size-12 place-items-center rounded-2xl bg-accent text-primary">
          <Icon aria-hidden="true" className="size-6" />
        </span>
        <span className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-muted-foreground">
          {project.niche} • {project.city}
        </span>
      </div>
      <h3 className="mt-6 font-display text-2xl font-bold">{project.name}</h3>
      <p className="mt-2 leading-relaxed text-muted-foreground">{project.description}</p>
      <ul className="mt-6 flex-1 space-y-2 text-sm">
        {project.highlights.map((h) => (
          <li key={h} className="flex items-center gap-2">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-primary" />
            {h}
          </li>
        ))}
      </ul>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition-transform hover:border-primary hover:text-primary active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        Quero uma assim
        <ArrowRight aria-hidden="true" className="size-4" />
      </a>
    </article>
  );
}
