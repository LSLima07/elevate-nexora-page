import { useRef, useState } from "react";
import { Check, X } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const before = [
  "Responde a mesma pergunta de preço dezenas de vezes por dia",
  "Manda foto por foto do estoque ou do cardápio",
  "Anota pedido em papel e perde mensagens no meio da conversa",
  "Cliente desiste porque demorou para ter resposta",
];

const after = [
  "Cliente vê preços e fotos sozinho, a qualquer hora",
  "Pedido chega pronto e organizado no WhatsApp",
  "Estoque ou cardápio atualizado em poucos minutos",
  "Mais tempo para atender quem já quer comprar",
];

export function BeforeAfter() {
  const [mode, setMode] = useState<"antes" | "depois">("depois");
  const { ref, visible } = useReveal<HTMLDivElement>();
  const isAfter = mode === "depois";
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const panelRef = useRef<HTMLDivElement>(null);

  const modes = ["antes", "depois"] as const;

  function selectMode(key: (typeof modes)[number], focusTab = false) {
    setMode(key);
    if (focusTab) tabRefs.current[key]?.focus();
  }

  function onTabKeyDown(e: React.KeyboardEvent<HTMLButtonElement>) {
    const index = modes.indexOf(mode);
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      selectMode(modes[(index + 1) % modes.length], true);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      selectMode(modes[(index + modes.length - 1) % modes.length], true);
    } else if (e.key === "Home") {
      e.preventDefault();
      selectMode(modes[0], true);
    } else if (e.key === "End") {
      e.preventDefault();
      selectMode(modes[modes.length - 1], true);
    }
  }

  return (
    <section
      id="antes-depois"
      aria-labelledby="ba-title"
      className="relative overflow-hidden bg-background py-20 md:py-28"
    >
      <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--cyan)]" />
            Antes vs. Depois
          </span>
          <h2
            id="ba-title"
            className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground md:text-5xl"
          >
            Seu dia sem e com a Klique:{" "}
            <span className="text-primary">
              menos tempo no celular
            </span>
          </h2>
          <p className="mt-5 text-base text-muted-foreground md:text-lg">
            Alterne abaixo e veja a diferença entre operar sem presença digital e
            com o sistema Klique.
          </p>
        </div>

        <div
          ref={ref}
          className={`reveal ${visible ? "reveal-in" : ""} mt-12`}
        >
          <div
            role="tablist"
            aria-label="Comparar cenários"
            className="mx-auto flex w-fit rounded-full border border-foreground/10 bg-foreground/5 p-1"
          >
            {modes.map((key) => (
              <button
                key={key}
                ref={(el) => {
                  tabRefs.current[key] = el;
                }}
                type="button"
                role="tab"
                id={`ba-tab-${key}`}
                aria-selected={mode === key}
                aria-controls={`ba-panel-${key}`}
                aria-label={
                  key === "antes"
                    ? "Ver cenário sem presença digital"
                    : "Ver cenário com a Klique"
                }
                tabIndex={mode === key ? 0 : -1}
                onKeyDown={onTabKeyDown}
                onClick={() => selectMode(key)}
                className={`min-h-11 rounded-full px-5 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--cyan)] ${
                  mode === key
                    ? key === "antes"
                      ? "bg-foreground/10 text-foreground"
                      : "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {key === "antes" ? "Sem presença digital" : "Com a Klique"}
              </button>
            ))}
          </div>

          <div
            ref={panelRef}
            role="tabpanel"
            id={`ba-panel-${mode}`}
            aria-labelledby={`ba-tab-${mode}`}
            aria-live="polite"
            tabIndex={0}
            className={`mt-8 rounded-2xl border p-6 transition-colors md:p-8 ${
              isAfter
                ? "border-border bg-card shadow-soft"
                : "border-border bg-surface"
            }`}
          >
            <ul className="grid gap-4 md:grid-cols-2">
              {(isAfter ? after : before).map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className={`mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                      isAfter
                        ? "bg-accent text-primary"
                        : "bg-foreground/5 text-foreground/40"
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