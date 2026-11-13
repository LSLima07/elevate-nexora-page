import { Check, MessageCircle } from "lucide-react";
import { PLANS, OPTIONAL_SUPPORT_MONTHLY, formatBRL, getPlanWhatsappUrl } from "@/lib/plans";
import { useReveal } from "@/hooks/use-reveal";
import { Button } from "@/components/ui/button";

export function Pricing() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section id="orcamento" aria-labelledby="planos-title" className="border-t border-border bg-background py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase text-primary">Taxa única</span>
          <h2 id="planos-title" className="mt-4 text-balance font-display text-3xl font-extrabold md:text-4xl">
            Sua presença digital. <span className="text-primary">Sem mensalidade obrigatória.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Para o comércio local e para quem quer colocar suas ideias e serviços na internet.
          </p>
        </div>
        <div ref={ref} className="mx-auto mt-12 grid max-w-4xl gap-8 md:grid-cols-2">
          {PLANS.map((plan, i) => (
            <article
              key={plan.id}
              aria-labelledby={`plano-${plan.id}`}
              style={{ transitionDelay: `${i * 120}ms` }}
              className={`reveal ${visible ? "reveal-in" : ""} relative flex min-w-0 flex-col rounded-2xl border bg-card p-6 sm:p-7 ${
                plan.highlight ? "border-primary shadow-soft" : "border-border"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                  Mais escolhido
                </span>
              )}
              <h3 id={`plano-${plan.id}`} className="font-display text-xl font-bold">{plan.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{plan.forWho}</p>
              <p className="mt-6 flex flex-wrap items-baseline gap-x-1">
                <span className="font-display text-4xl font-extrabold">{formatBRL(plan.setup)}</span>
              </p>
              <p className="mt-2 text-sm text-muted-foreground">Taxa única{plan.installments ? ` ou ${plan.installments.count}x de ${formatBRL(plan.installments.amount)}` : ""}</p>
              {plan.id === "vitrine" && plan.salesCommissionPercent === 0 && (
                <p className="mt-4 text-sm font-medium leading-relaxed text-whatsapp">💡 Menos de R$ 0,42 por dia no primeiro ano • Sem taxas sobre suas vendas.</p>
              )}
              <ul className="mt-6 flex-1 space-y-3 text-sm">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button asChild variant={plan.highlight ? "default" : "outline"} className="mt-8 h-auto min-h-12 w-full whitespace-normal rounded-full px-4 py-3 text-sm font-semibold transition-transform active:scale-95">
              <a
                href={getPlanWhatsappUrl(plan)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle aria-hidden="true" className="size-4" />
                Quero o plano {plan.name}
              </a>
              </Button>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-muted-foreground">🟢 Hospedagem inclusa. Suporte e alterações sob demanda ou mensalidades opcionais a partir de R$ {OPTIONAL_SUPPORT_MONTHLY}/mês.</p>
      </div>
    </section>
  );
}
