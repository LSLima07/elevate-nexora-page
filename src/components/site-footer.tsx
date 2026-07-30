import { useState } from "react";
import { Instagram, Linkedin, MessageCircle, Mail, X } from "lucide-react";
import { WHATSAPP_QUOTE_URL } from "@/lib/whatsapp";

const quickLinks = [
  { label: "Início", href: "#" },
  { label: "Serviços", href: "#servicos" },
  { label: "Portfólio", href: "#portfolio" },
];

const socials = [
  { label: "Instagram", href: "#", icon: Instagram },
  { label: "LinkedIn", href: "#", icon: Linkedin },
  { label: "WhatsApp", href: WHATSAPP_QUOTE_URL, icon: MessageCircle },
];

export function SiteFooter() {
  const [privacyOpen, setPrivacyOpen] = useState(false);
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
            <div>
              <a
                href={WHATSAPP_QUOTE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_28px_-4px_var(--neon-green)] active:scale-[0.98]"
              >
                Solicitar Orçamento
              </a>
            </div>
            <div className="flex items-center gap-3 pt-1">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
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
            <button
              type="button"
              onClick={() => setPrivacyOpen(true)}
              className="text-xs text-[#9AA5B1] transition-colors hover:text-cyan"
            >
              Política de Privacidade
            </button>
          </div>
        </div>
      </div>

      {privacyOpen ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="privacy-title"
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
        >
          <div
            className="absolute inset-0 bg-[#070A14]/80 backdrop-blur-sm"
            onClick={() => setPrivacyOpen(false)}
          />
          <div className="relative max-h-[80vh] w-full max-w-lg overflow-y-auto rounded-3xl border border-white/10 bg-[var(--midnight)] p-7 shadow-[0_0_60px_-20px_var(--cyan)]">
            <button
              type="button"
              onClick={() => setPrivacyOpen(false)}
              aria-label="Fechar"
              className="absolute right-5 top-5 text-muted-foreground transition-colors hover:text-cyan"
            >
              <X className="h-5 w-5" />
            </button>
            <h2
              id="privacy-title"
              className="font-display text-xl font-bold text-foreground"
            >
              Política de Privacidade
            </h2>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                A NEXORA respeita a sua privacidade e trata os dados pessoais de
                acordo com a Lei Geral de Proteção de Dados (LGPD — Lei nº
                13.709/2018).
              </p>
              <p>
                <strong className="text-foreground/90">Dados coletados:</strong>{" "}
                nome, e-mail, telefone/WhatsApp e informações do projeto enviadas
                voluntariamente pelo formulário de orçamento.
              </p>
              <p>
                <strong className="text-foreground/90">Finalidade:</strong> os
                dados são usados exclusivamente para contato comercial, envio de
                propostas e atendimento. Não vendemos nem compartilhamos suas
                informações com terceiros para fins publicitários.
              </p>
              <p>
                <strong className="text-foreground/90">Seus direitos:</strong>{" "}
                você pode solicitar a qualquer momento o acesso, a correção ou a
                exclusão dos seus dados pelo e-mail{" "}
                <a href="mailto:contato@nexora.com.br" className="text-cyan">
                  contato@nexora.com.br
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </footer>
  );
}
