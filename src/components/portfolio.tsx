import { ArrowRight, CupSoda, Gift, Leaf, CakeSlice, MessageCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { Button } from "@/components/ui/button";
import { buildWhatsappUrl } from "@/lib/whatsapp";

type Project = {
  name: string;
  niche: string;
  city: string;
  icon: LucideIcon;
  description: string;
  highlights: string[];
  url?: string;
};

const projects: Project[] = [
  {
    name: "Ultra Shake",
    niche: "Delivery",
    city: "Angatuba",
    icon: CupSoda,
    description:
      "Modelo Delivery: Cardápio rápido, cálculo de adicionais e envio direto no WhatsApp.",
    highlights: ["Escolha rápida no cardápio", "Adicionais calculados automaticamente", "Pedido enviado ao WhatsApp"],
    url: "https://vercel.app",
  },
  {
    name: "Brinquedos & Cia",
    niche: "Presentes",
    city: "Angatuba",
    icon: Gift,
    description:
      "Modelo Catálogo: Vitrine de 23 produtos com busca instantânea, filtros por idade e aviso de esgotado.",
    highlights: ["Busca instantânea entre 23 produtos", "Filtros por faixa etária", "Aviso de produtos esgotados"],
    url: "https://brinquedos-cia.vercel.app",
  },
  {
    name: "BioViva",
    niche: "Educação",
    city: "Angatuba",
    icon: Leaf,
    description: "Plataforma Educacional: Projeto comunitário interativo com ranking, quizzes e acessibilidade.",
    highlights: ["Quizzes interativos", "Ranking da comunidade", "Recursos de acessibilidade"],
  },
  {
    name: "Confeitaria Artesanal",
    niche: "Encomendas",
    city: "Angatuba",
    icon: CakeSlice,
    description: "Modelo Encomendas: Vitrine visual de doces e bolos caseiros feita sob medida para pedidos rápidos.",
    highlights: ["Doces e bolos caseiros", "Vitrine visual sob medida", "Encomendas rápidas"],
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" aria-labelledby="portfolio-title" className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Casos de sucesso</span>
          <h2 id="portfolio-title" className="mt-4 text-balance font-display text-3xl font-extrabold md:text-4xl">
            Projetos reais que conectam Angatuba
          </h2>
          <p className="mt-4 text-muted-foreground">
            Do cardápio à educação: cada projeto com o modelo certo para seu público.
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
  return (
    <article
      ref={ref}
      style={{ transitionDelay: visible ? `${index * 140}ms` : "0ms" }}
      className={`reveal ${visible ? "reveal-in" : ""} flex flex-col rounded-3xl border border-border bg-card p-8 shadow-soft transition-transform duration-300 hover:-translate-y-1`}
    >
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
        <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-accent text-primary">
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
          <li key={h} className="flex items-start gap-2">
            <span aria-hidden="true" className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
            {h}
          </li>
        ))}
      </ul>
      <Button asChild variant="outline" className="mt-8 h-auto w-fit rounded-full px-5 py-2.5 font-semibold transition-transform active:scale-95">
      <a
        href={project.url ?? buildWhatsappUrl(`Olá, Klique! Quero conhecer o projeto ${project.name} e criar uma solução parecida.`)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${project.url ? "Ver site de" : "Conhecer"} ${project.name} (abre em nova aba)`}
      >
        {project.url ? "Ver site" : "Conhecer projeto"}
        {project.url ? <ArrowRight aria-hidden="true" className="size-4" /> : <MessageCircle aria-hidden="true" className="size-4" />}
      </a>
      </Button>
    </article>
  );
}
