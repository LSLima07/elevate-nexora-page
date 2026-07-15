import { Instagram, Linkedin, MessageCircle, Mail } from "lucide-react";

const quickLinks = [
  { label: "Início", href: "#" },
  { label: "Serviços", href: "#servicos" },
  { label: "Portfólio", href: "#portfolio" },
];

const socials = [
  { label: "Instagram", href: "#", icon: Instagram },
  { label: "LinkedIn", href: "#", icon: Linkedin },
  { label: "WhatsApp", href: "#", icon: MessageCircle },
];

export function SiteFooter() {
  return (
    <footer
      id="contato"
      className="relative border-t border-[var(--midnight)] bg-[var(--deep-bg)]"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Coluna 1 — Marca */}
          <div className="space-y-4">
            <div className="flex items-center font-logo text-2xl font-bold tracking-tight">
              <span className="text-foreground">NEXORA</span>
              <span className="ml-0.5 text-cyan">.</span>
            </div>
            <p className="max-w-xs text-sm text-muted-foreground">
              Transformamos confiança em crescimento.
            </p>
            <p className="text-xs text-[#9AA5B1]/70">
              © 2026 NEXORA. Todos os direitos reservados.
            </p>
          </div>

          {/* Coluna 2 — Links */}
          <div className="space-y-4">
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-foreground/80">
              Navegação
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-cyan"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3 — Contato */}
          <div className="space-y-4">
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-foreground/80">
              Contato
            </h3>
            <a
              href="mailto:contato@nexora.com.br"
              className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="h-4 w-4 text-cyan" />
              contato@nexora.com.br
            </a>
            <div className="flex items-center gap-3 pt-1">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-cyan/40 hover:text-cyan hover:shadow-[0_0_24px_-6px_var(--cyan)]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-6 md:flex-row md:items-center">
          <p className="text-xs text-[#9AA5B1]/70">
            Feito com cuidado para negócios que querem crescer.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs text-[#9AA5B1] transition-colors hover:text-foreground"
            >
              Termos de Uso
            </a>
            <a
              href="#"
              className="text-xs text-[#9AA5B1] transition-colors hover:text-foreground"
            >
              Políticas de Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
