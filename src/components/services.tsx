import { Rocket, Search, MessageCircle, Sparkles, type LucideIcon } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    icon: Rocket,
    title: "Landing Pages de Alta Conversão",
    description:
      "Design premium, velocidade máxima e foco absoluto em transformar visitantes em clientes reais.",
  },
  {
    icon: Search,
    title: "Presença no Google & SEO Local",
    description:
      "Otimização para aparecer nas buscas locais da sua cidade e configuração completa do Google Meu Negócio.",
  },
  {
    icon: MessageCircle,
    title: "Conexão Direct-to-WhatsApp",
    description:
      "Botões e fluxos inteligentes que levam o cliente ao atendimento em um único toque, sem fricção.",
  },
  {
    icon: Sparkles,
    title: "Branding & Identidade Visual",
    description:
      "Logotipos, paleta de cores e presença de marca consistente para transmitir confiança ao seu público.",
  },
];

export function Services() {
  return (
    <section
      id="servicos"
      className="relative isolate overflow-hidden py-24 md:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-[-10%] top-1/3 h-[420px] w-[520px] rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(0,229,255,0.14), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan/80">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
            Serviços
          </span>
          <h2 className="mt-6 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground md:text-5xl">
            Tudo o que sua PME precisa para{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg,#00F5A0 0%,#00E5FF 55%,#2D8CFF 100%)",
              }}
            >
              crescer no digital
            </span>
            .
          </h2>
          <p className="mt-5 text-base text-muted-foreground md:text-lg">
            Soluções desenhadas para negócios locais: performance, presença e
            marca alinhadas para gerar clientes de verdade.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {services.map(({ icon: Icon, title, description }, i) => (
            <ServiceCard key={title} Icon={Icon} title={title} description={description} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  Icon,
  title,
  description,
  index,
}: {
  Icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}) {
  const { ref, visible } = useReveal<HTMLElement>();
  return (
    <article
      ref={ref}
      className={`reveal ${visible ? "reveal-in" : ""} group relative rounded-2xl border border-white/10 bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_20px_60px_-30px_rgba(0,229,255,0.35)] md:p-10`}
      style={{ transitionDelay: visible ? `${index * 120}ms` : "0ms" }}
    >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(600px circle at 0% 0%, rgba(122,60,255,0.08), transparent 40%)",
                }}
              />

              <div className="relative">
                <div
                  className="inline-flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{
                    background:
                      "linear-gradient(135deg,#00E5FF 0%,#7A3CFF 100%)",
                  }}
                >
                  <Icon className="h-6 w-6 text-[#04121B]" strokeWidth={2.25} />
                </div>

                <h3 className="mt-6 font-display text-xl font-bold text-foreground md:text-2xl">
                  {title}
                </h3>
                <p
                  className="mt-3 text-sm leading-relaxed md:text-base"
                  style={{ color: "#9AA5B1" }}
                >
                  {description}
                </p>
              </div>
            </article>
  );
}