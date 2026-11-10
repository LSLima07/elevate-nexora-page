import { Link } from "@tanstack/react-router";
import { WHATSAPP_QUOTE_URL } from "@/lib/whatsapp";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-foreground/5 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-1 font-logo text-xl font-bold tracking-tight">
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

        <a
          href={WHATSAPP_QUOTE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-coral transition-transform hover:brightness-105 active:scale-95"
        >
          Falar com Consultor
        </a>
      </div>
    </header>
  );
}