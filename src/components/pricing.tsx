import { Check, MessageCircle } from "lucide-react";
import { PLANS, formatBRL, getPlanWhatsappUrl } from "@/lib/plans";
import { useReveal } from "@/hooks/use-reveal";

export function Pricing() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section id="orcamento" aria-labelledby="planos-title" className="border-t border-border bg-background py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Planos mensais</span>
          <h2 id="planos-title" className="mt-4 text-balance font-display text-3xl font-extrabold md:text-4xl">
            Preço justo, sem surpresa. <span className="text-primary">Cancele quando quiser.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Uma taxa de criação e uma mensalidade que cobre hospedagem, suporte e manutenção.
          </p>
        </div>
        <div ref={ref} className="mt-12 grid gap-6 md:grid-cols-3">
          {PLANS.map((plan, i) => (
            <article
              key={plan.id}
              aria-labelledby={`plano-${plan.id}`}
              style={{ transitionDelay: `${i * 120}ms` }}
              className={`reveal ${visible ? "reveal-in" : ""} relative flex flex-col rounded-2xl border bg-card p-7 ${
                plan.highlight ? "border-primary shadow-[0_20px_60px_-30px_rgba(74,222,128,0.45)]" : "border-border"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                  Mais escolhido
                </span>
              )}
              <h3 id={`plano-${plan.id}`} className="font-display text-xl font-bold">{plan.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{plan.forWho}</p>
              <p className="mt-6">
                <span className="font-display text-4xl font-extrabold">{formatBRL(plan.monthly)}</span>
                <span className="text-muted-foreground">/mês</span>
              </p>
              <p className="mt-1 text-xs text-muted-foreground">+ {formatBRL(plan.setup)} de criação (uma vez)</p>
              <ul className="mt-6 flex-1 space-y-3 text-sm">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={getPlanWhatsappUrl(plan)}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                  plan.highlight ? "bg-primary text-primary-foreground hover:brightness-110" : "border border-border hover:border-primary hover:text-primary"
                }`}
              >
                <MessageCircle aria-hidden="true" className="size-4" />
                Quero o plano {plan.name}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
