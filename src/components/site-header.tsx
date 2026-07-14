import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-1 font-logo text-xl font-bold tracking-tight">
          <span className="text-foreground">NEX</span>
          <span className="bg-gradient-to-br from-cyan via-tech-blue to-electric-purple bg-clip-text text-transparent">
            ORA
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#servicos"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Serviços
          </a>
          <a
            href="#portfolio"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Portfólio
          </a>
        </nav>

        <a
          href="#contato"
          className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[0_0_0_1px_rgba(0,245,160,0.25)] transition-all hover:shadow-[0_0_28px_-4px_var(--neon-green)] active:scale-[0.98]"
        >
          Falar com Consultor
        </a>
      </div>
    </header>
  );
}