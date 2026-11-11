import { useId, useState } from "react";
import { Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  HERO_SEGMENTS,
  getHeroPreview,
  getHeroSegment,
  getHeroWhatsappUrl,
  type HeroSegmentId,
} from "@/lib/hero-segments";

type NicheQuickSelectorProps = {
  selectedSegment: HeroSegmentId;
  onSelect: (segment: HeroSegmentId) => void;
  previewId: string;
};

export function NicheQuickSelector({ selectedSegment, onSelect, previewId }: NicheQuickSelectorProps) {
  function handleSelect(id: HeroSegmentId) {
    if (typeof navigator !== "undefined" && "vibrate" in navigator) navigator.vibrate?.(10);
    onSelect(id);
  }

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
              onClick={() => handleSelect(segment.id)}
              className="h-auto min-h-12 min-w-0 gap-1.5 rounded-2xl bg-background px-3 py-3 text-xs text-foreground shadow-none transition-transform duration-150 active:scale-95 motion-reduce:active:scale-100 hover:border-primary/60 hover:bg-primary/10 hover:text-foreground focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background aria-pressed:border-primary aria-pressed:bg-primary/10 aria-pressed:text-primary sm:text-sm border-border"}
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
  const [selectedSegment, setSelectedSegment] = useState<HeroSegmentId>("delivery");
  const id = useId();
  const previewId = `${id}-preview`;
  const headingId = `${id}-heading`;
  const segment = getHeroSegment(selectedSegment);
  const preview = getHeroPreview(selectedSegment);

  return (
    <section aria-labelledby={headingId} className="bg-gradient-to-b from-surface to-background text-foreground">
      <div className="mx-auto flex max-w-5xl flex-col items-center px-4 py-12 text-center sm:px-6 sm:py-14 lg:py-16">
        <h1 id={headingId} className="max-w-4xl text-balance font-display text-3xl font-extrabold leading-tight tracking-normal sm:text-4xl lg:text-5xl">
          O estoque ou cardápio da sua loja direto no{" "}
          <span className="text-primary">WhatsApp do seu cliente.</span>{" "}
          Sem complicação.
        </h1>

        <p className="mt-4 max-w-2xl text-sm font-medium leading-relaxed text-muted-foreground sm:text-base">
          Seu negócio no celular do cliente, a um clique de vender.
        </p>

        <p className="mt-5 max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          Criamos a vitrine virtual rápida da sua loja em até 5 dias úteis,
          configuramos seu Google Meu Negócio e deixamos tudo pronto para você só
          responder os clientes.
        </p>

        <div className="mt-8 w-full max-w-3xl">
          <NicheQuickSelector selectedSegment={selectedSegment} onSelect={setSelectedSegment} previewId={previewId} />

          <div className="mt-5 rounded-2xl border border-border bg-background p-5 text-left shadow-soft">
            <div className="mb-3 flex items-center gap-2 text-xs text-muted-foreground">
              <MessageCircle aria-hidden="true" className="size-4 text-primary" />
              Exemplo de mensagem do seu cliente
            </div>
            <div id={previewId} role="status" aria-live="polite" aria-atomic="true" className="min-h-24 sm:min-h-16">
              <p key={selectedSegment} className="text-pretty text-base leading-relaxed animate-in fade-in slide-in-from-bottom-1 duration-300 motion-reduce:animate-none sm:text-lg">
                <strong className="font-semibold">“{preview}”</strong>
              </p>
            </div>
          </div>
        </div>

        <Button asChild size="lg" className="mt-7 h-auto min-h-14 w-full max-w-sm self-center whitespace-normal rounded-full bg-primary px-6 py-4 text-base font-bold text-primary-foreground shadow-coral transition-transform active:scale-95 hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background sm:max-w-sm sm:self-center">
          <a href={getHeroWhatsappUrl(selectedSegment)} target="_blank" rel="noopener noreferrer" aria-label={`Criar Minha Vitrine Virtual para ${segment.label} no WhatsApp (abre em nova aba)`}>
            <span aria-hidden="true">🚀</span> Criar Minha Vitrine Virtual
          </a>
        </Button>
      </div>
    </section>
  );
}
