import { useState } from "react";
import { Check, X } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const before = [
  "Invisível no Google — clientes encontram o concorrente",
  "Atendimento manual, lento e sem histórico",
  "Sem catálogo: cada dúvida vira uma ligação",
  "Marca amadora, gera insegurança na hora de comprar",
  "Nenhum dado sobre quem visita ou desiste",
];

const after = [
  "Topo das buscas locais com SEO otimizado",
  "Cliente cai direto no WhatsApp com a mensagem pronta",
  "Catálogo digital 24h com fotos, preços e condições",
  "Identidade visual premium que transmite confiança",
  "Métricas claras de visitas, cliques e contatos",
];

export function BeforeAfter() {
  const [mode, setMode] = useState<"antes" | "depois">("depois");
  const { ref, visible } = useReveal<HTMLDivElement>();
  const isAfter = mode === "depois";

  return (
    <section
      id="antes-depois"
      aria-labelledby="ba-title"
      className="relative overflow-hidden border-t border-white/5 py-24 md:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 right-0 h-[420px] w-[420px] rounded-full bg-[var(--electric-purple)]/12 blur-[150px]"
      />
      <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--cyan)]" />
            Antes vs. Depois
          </span>
          <h2
            id="ba-title"
            className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground md:text-5xl"
          >
            O mesmo comércio,{" "}
            <span className="bg-gradient-to-r from-[var(--cyan)] to-[var(--electric-purple)] bg-clip-text text-transparent">
              dois cenários
            </span>
          </h2>
          <p className="mt-5 text-base text-muted-foreground md:text-lg">
            Alterne abaixo e veja a diferença entre operar sem presença digital e
            com a estrutura NEXORA.
          </p>
        </div>

        <div
          ref={ref}
          className={`reveal ${visible ? "reveal-in" : ""} mt-12`}
        >
          <div
            role="tablist"
            aria-label="Comparar cenários"
            className="mx-auto flex w-fit rounded-full border border-white/10 bg-white/5 p-1"
          >
            {(["antes", "depois"] as const).map((key) => (
              <button
                key={key}
                type="button"
                role="tab"
                id={`ba-tab-${key}`}
                aria-selected={mode === key}
                aria-controls={`ba-panel-${key}`}
                onClick={() => setMode(key)}
                className={`min-h-11 rounded-full px-5 text-sm font-semibold transition-colors ${
                  mode === key
                    ? key === "antes"
                      ? "bg-white/10 text-foreground"
                      : "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {key === "antes" ? "Sem presença digital" : "Com a NEXORA"}
              </button>
            ))}
          </div>

          <div
            role="tabpanel"
            id={`ba-panel-${mode}`}
            aria-labelledby={`ba-tab-${mode}`}
            className={`mt-8 rounded-2xl border p-6 transition-colors md:p-8 ${
              isAfter
                ? "border-[var(--neon-green)]/25 bg-[var(--midnight)]/60"
                : "border-white/10 bg-[var(--deep-bg)]"
            }`}
          >
            <ul className="grid gap-4 md:grid-cols-2">
              {(isAfter ? after : before).map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className={`mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                      isAfter
                        ? "bg-[var(--neon-green)]/15 text-[var(--neon-green)]"
                        : "bg-white/5 text-foreground/40"
                    }`}
                  >
                    {isAfter ? (
                      <Check className="h-3.5 w-3.5" aria-hidden />
                    ) : (
                      <X className="h-3.5 w-3.5" aria-hidden />
                    )}
                  </span>
                  <span
                    className={`text-sm leading-relaxed ${
                      isAfter ? "text-foreground/85" : "text-foreground/60"
                    }`}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}