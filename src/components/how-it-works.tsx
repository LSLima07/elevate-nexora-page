import { MessageCircle, Sparkles, Smartphone } from "lucide-react";
import { DELIVERY_MAX_DAYS } from "@/lib/plans";

const steps = [
  { title: "Envie seus produtos no WhatsApp", description: "Pode ser foto do cardápio, lista escrita ou tabela.", icon: MessageCircle },
  { title: `Criamos tudo em até ${DELIVERY_MAX_DAYS} dias`, description: "Layout moderno, cálculo automático e link pronto.", icon: Sparkles },
  { title: "Venda a 1 clique no celular", description: "Os pedidos chegam organizados direto no seu WhatsApp.", icon: Smartphone },
];

export function HowItWorks() {
  return (
    <section aria-labelledby="como-funciona-title" className="border-t border-border bg-background py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase text-primary">Simples, do começo à primeira venda</span>
          <h2 id="como-funciona-title" className="mt-4 font-display text-3xl font-extrabold text-foreground md:text-4xl">Como funciona em 3 passos</h2>
        </div>
        <ol className="mt-10 grid gap-10 md:grid-cols-3 md:gap-8">
          {steps.map((step, index) => (
            <li key={step.title} className="min-w-0">
              <div className="flex items-center gap-4">
                <span className="font-display text-4xl font-extrabold text-primary">0{index + 1}</span>
                <step.icon aria-hidden="true" className="size-6 text-foreground" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}