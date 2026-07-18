import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useReveal, revealClass } from "@/hooks/use-reveal";

export const faqs = [
  {
    q: "Quanto tempo demora para o meu site ficar pronto?",
    a: "O prazo médio de desenvolvimento varia entre 7 a 15 dias úteis, dependendo da complexidade do projeto e do envio do conteúdo por parte do cliente.",
  },
  {
    q: "Eu mesmo consigo atualizar o site depois de pronto?",
    a: "Sim! Desenvolvemos o site com estruturas modulares para que você consiga alterar textos, imagens e produtos de forma simples e intuitiva, sem precisar entender de código.",
  },
  {
    q: "Meu site vai aparecer na primeira página do Google?",
    a: "Todos os nossos projetos são entregues com SEO local técnico configurado de fábrica para ajudar o seu negócio a ganhar relevância orgânica e aparecer para clientes na sua região.",
  },
  {
    q: "O que acontece se eu precisar de suporte após a entrega?",
    a: "Oferecemos suporte completo e garantia contra qualquer erro técnico nos primeiros 30 dias após o lançamento, garantindo total tranquilidade para a sua empresa.",
  },
];

function FaqItem({
  q,
  a,
  index,
  open,
  onToggle,
}: {
  q: string;
  a: string;
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const panelId = useId();
  const buttonId = useId();
  return (
    <div
      ref={ref}
      className={revealClass(visible)}
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <div
        className={`overflow-hidden rounded-2xl border bg-[var(--midnight)]/60 backdrop-blur transition-all duration-300 ${
          open
            ? "border-cyan/40 shadow-[0_0_40px_-18px_var(--cyan)]"
            : "border-white/10 hover:border-white/20"
        }`}
      >
        <button
          id={buttonId}
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={panelId}
          className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
        >
          <span
            className={`font-display text-base font-semibold md:text-lg transition-colors ${
              open ? "text-cyan" : "text-foreground"
            }`}
          >
            {q}
          </span>
          <ChevronDown
            className={`h-5 w-5 shrink-0 transition-transform duration-300 ${
              open ? "rotate-180 text-cyan" : "text-muted-foreground"
            }`}
          />
        </button>
        <div
          id={panelId}
          role="region"
          aria-labelledby={buttonId}
          hidden={!open}
          className={`grid transition-all duration-300 ease-out ${
            open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground md:text-base">
              {a}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="faq" className="relative bg-background py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <div
          ref={ref}
          className={`${revealClass(visible)} mb-14 text-center`}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan/80">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
            FAQ
          </span>
          <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight md:text-5xl">
            Perguntas frequentes
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Tudo o que você precisa saber antes de tirar o seu projeto do papel com a NEXORA.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((item, i) => (
            <FaqItem
              key={item.q}
              q={item.q}
              a={item.a}
              index={i}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}