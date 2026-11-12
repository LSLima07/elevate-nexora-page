import { useState } from "react";
import { CupSoda, Gift, MessageCircle, Sparkles, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { SIMULATOR_BRANCHES, getSimulatorBranch, getSimulatorName, getSimulatorWhatsappUrl, type SimulatorBranch } from "@/lib/vitrine-simulator";
import type { HeroSegmentId } from "@/lib/hero-segments";

export function VitrineSimulator({ segment }: { segment: HeroSegmentId }) {
  const [name, setName] = useState("");
  const [branch, setBranch] = useState<SimulatorBranch>("lanchonete");
  const [previewAction, setPreviewAction] = useState(false);
  const current = getSimulatorBranch(branch);
  const storeName = getSimulatorName(name, branch);
  const Icon = branch === "lanchonete" ? CupSoda : branch === "loja" ? Gift : Sparkles;
  const items = branch === "lanchonete" ? ["Seu combo favorito", "Feito na hora"] : branch === "loja" ? ["Coleção em destaque", "Escolhido para você"] : ["Meus serviços", "Artigos & ideias"];

  return (
    <Dialog onOpenChange={(open) => {
      if (open) {
        setBranch(segment === "delivery" ? "lanchonete" : segment === "lojas" ? "loja" : "servicos");
        setPreviewAction(false);
      }
    }}>
      <DialogTrigger asChild>
        <Button size="lg" className="mt-7 h-auto min-h-14 w-full max-w-sm whitespace-normal rounded-full px-6 py-4 text-base font-bold shadow-coral transition-transform active:scale-95">
          <span aria-hidden="true">🚀</span> Criar Minha Vitrine Virtual
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[92dvh] w-[calc(100%-2rem)] max-w-2xl overflow-y-auto rounded-2xl p-5 sm:p-7">
        <DialogHeader className="pr-6">
          <DialogTitle className="font-display text-xl leading-snug sm:text-2xl">Teste sua Vitrine Agora</DialogTitle>
          <DialogDescription>Seu negócio no celular do cliente, a um klique de vender.</DialogDescription>
        </DialogHeader>
        <div className="grid items-start gap-6 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="space-y-5">
            <div>
              <label htmlFor="vitrine-name" className="mb-2 block text-sm font-semibold">Nome da Loja</label>
              <input id="vitrine-name" value={name} onChange={(event) => { setName(event.target.value); setPreviewAction(false); }} placeholder="Ex.: Cantinho da Ana" className="h-12 w-full rounded-lg border border-input bg-background px-3 text-base outline-none focus-visible:ring-2 focus-visible:ring-ring" />
            </div>
            <fieldset>
              <legend className="mb-2 text-sm font-semibold">Ramo</legend>
              <div className="grid gap-2">
                {SIMULATOR_BRANCHES.map((option) => (
                  <Button key={option.id} type="button" variant="outline" aria-pressed={branch === option.id} onClick={() => { setBranch(option.id); setPreviewAction(false); }} className="h-11 justify-between rounded-lg aria-pressed:border-primary aria-pressed:bg-accent">
                    {option.label}<Check aria-hidden="true" className={branch === option.id ? "text-primary" : "invisible"} />
                  </Button>
                ))}
              </div>
            </fieldset>
          </div>
          <div>
            <p className="mb-2 text-center text-xs font-semibold uppercase text-muted-foreground">Prévia simulada</p>
            <div className="mx-auto w-full max-w-64 overflow-hidden rounded-[2rem] border-[6px] border-foreground bg-background shadow-soft">
              <div className="flex h-7 justify-center bg-background pt-2"><span className="h-2 w-16 rounded-full bg-foreground" /></div>
              <div className="bg-accent px-4 pb-5 pt-3 text-center">
                <span className="mx-auto grid size-10 place-items-center rounded-full bg-primary text-primary-foreground"><Icon aria-hidden="true" className="size-5" /></span>
                <h3 aria-live="polite" className="mt-3 break-words text-lg font-bold [overflow-wrap:anywhere]">{storeName}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{current.label}</p>
              </div>
              <div className="space-y-3 p-3">
                {items.map((item) => <div key={item} className="flex items-center gap-3 border-b border-border pb-3"><span className="grid size-11 shrink-0 place-items-center rounded-lg bg-surface text-primary"><Icon aria-hidden="true" className="size-6" /></span><span className="text-xs font-medium">{item}</span></div>)}
                <Button type="button" onClick={() => setPreviewAction(true)} className="h-auto min-h-10 w-full whitespace-normal rounded-full px-2 text-xs"><MessageCircle aria-hidden="true" />{current.action}</Button>
                <p role="status" className="min-h-8 text-center text-xs text-muted-foreground">{previewAction ? `Pedido de exemplo para ${storeName} pronto!` : "Demonstração • Klique"}</p>
              </div>
            </div>
          </div>
        </div>
        <Button asChild variant="whatsapp" className="h-auto min-h-14 w-full whitespace-normal rounded-full px-4 py-3 font-semibold transition-transform active:scale-95">
          <a href={getSimulatorWhatsappUrl(name, branch)} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden="true" />Gostei! Quero publicar minha vitrine no WhatsApp<ArrowRight aria-hidden="true" /></a>
        </Button>
      </DialogContent>
    </Dialog>
  );
}