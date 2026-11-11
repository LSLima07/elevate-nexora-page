import { Link } from "@tanstack/react-router";
import { WHATSAPP_QUOTE_URL } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-foreground/5 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto grid h-16 max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 sm:flex sm:justify-between sm:px-6">
        <Link to="/" aria-label="Klique — início" className="min-w-0 whitespace-nowrap font-logo text-xl font-bold leading-none tracking-normal">
          <span className="text-foreground">Kli</span><span className="text-primary">que</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#orcamento"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Planos
          </a>
          <a
            href="#portfolio"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Portfólio
          </a>
          <a
            href={WHATSAPP_QUOTE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Contato
          </a>
        </nav>

        <Button asChild className="h-auto shrink-0 rounded-full px-4 py-2 text-xs font-semibold shadow-coral transition-transform active:scale-95 sm:text-sm">
        <a
          href={WHATSAPP_QUOTE_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Falar com Consultor
        </a>
        </Button>
      </div>
    </header>
  );
}