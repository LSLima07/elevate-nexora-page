import { useId, useState } from "react";
import { ArrowUpRight, Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  HERO_SEGMENTS,
  getHeroSegment,
  getHeroWhatsappUrl,
  type HeroSegmentId,
} from "@/lib/hero-segments";

type NicheQuickSelectorProps = {
  selectedSegment: HeroSegmentId;
  onSelect: (segment: HeroSegmentId) => void;
  previewId: string;
};

export function NicheQuickSelector({
  selectedSegment,
  onSelect,
  previewId,
}: NicheQuickSelectorProps) {
  return (
    <fieldset className="w-full min-w-0 border-0 p-0">
      <legend className="mb-3 w-full text-center text-sm font-medium text-muted-foreground">
        Qual é o seu negócio?
      </legend>
      <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:justify-center">
        {HERO_SEGMENTS.map((segment) => {
          const selected = segment.id === selectedSegment;
          return (
            <Button
              key={segment.id}
              type="button"
              variant="outline"
              aria-pressed={selected}
              aria-controls={previewId}
              onClick={() => onSelect(segment.id)}
              className="h-auto min-h-12 min-w-0 gap-1.5 rounded-lg border-border bg-background px-3 py-3 text-xs text-foreground shadow-none hover:border-primary/60 hover:bg-primary/10 hover:text-foreground focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background aria-pressed:border-primary aria-pressed:bg-primary/10 aria-pressed:text-primary sm:text-sm"
            >
              <Check aria-hidden="true" className={selected ? "size-4" : "invisible size-4"} />
              <span className="whitespace-normal text-left leading-snug">{segment.label}</span>
            </Button>
          );
        })}
      </div>
    </fieldset>
  );
}

export function Hero() {
  const [selectedSegment, setSelectedSegment] = useState<HeroSegmentId>("bebidas");
  const id = useId();
  const previewId = `${id}-preview`;
  const headingId = `${id}-heading`;
  const segment = getHeroSegment(selectedSegment);

  return (
    <section aria-labelledby={headingId} className="conversion-hero bg-background text-foreground">
      <div className="mx-auto flex max-w-5xl flex-col items-center px-4 py-12 text-center sm:px-6 sm:py-14 lg:py-16">
        <h1 id={headingId} className="max-w-4xl text-balance font-display text-3xl font-extrabold leading-tight tracking-normal sm:text-4xl lg:text-5xl">
          Seu comércio no topo do Google e pedidos direto no seu{" "}
          <span className="text-primary">WhatsApp todos os dias.</span>
        </h1>

        <p className="mt-5 max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          Criamos a vitrine virtual rápida da sua loja em até 5 dias úteis,
          configuramos seu Google Meu Negócio e deixamos tudo pronto para você só
          responder os clientes.
        </p>

        <div className="mt-8 w-full max-w-3xl">
          <NicheQuickSelector selectedSegment={selectedSegment} onSelect={setSelectedSegment} previewId={previewId} />

          <div className="mt-5 border-y border-border py-5 text-left">
            <div className="mb-3 flex items-center gap-2 text-xs text-muted-foreground">
              <MessageCircle aria-hidden="true" className="size-4 text-primary" />
              Exemplo de mensagem do seu cliente
            </div>
            <div id={previewId} role="status" aria-live="polite" aria-atomic="true" className="min-h-24 sm:min-h-16">
              <p className="text-pretty text-base leading-relaxed sm:text-lg">
                <strong className="font-semibold">“{segment.preview}”</strong>
              </p>
            </div>
          </div>
        </div>

        <Button asChild size="lg" className="mt-7 h-auto min-h-14 w-full max-w-[calc(100%-4.5rem)] self-start whitespace-normal rounded-lg bg-primary px-5 py-4 text-base font-bold text-primary-foreground shadow-none hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background sm:max-w-sm sm:self-center">
          <a href={getHeroWhatsappUrl(selectedSegment)} target="_blank" rel="noopener noreferrer" aria-label={`Destravar meu Site de Vendas para ${segment.label} no WhatsApp (abre em nova aba)`}>
            Destravar meu Site de Vendas
            <ArrowUpRight aria-hidden="true" />
          </a>
        </Button>
      </div>
    </section>
  );
}