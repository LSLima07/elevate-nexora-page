import { useState } from "react";
import { TrendingUp } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { WHATSAPP_DIAGNOSIS_URL } from "@/lib/whatsapp";

const brl = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 0,
});

export function RoiCalculator() {
  const [ticket, setTicket] = useState(350);
  const [clients, setClients] = useState(12);
  const { ref, visible } = useReveal<HTMLDivElement>();

  const monthly = ticket * clients;
  const yearly = monthly * 12;

  return (
    <section
      id="calculadora"
      aria-labelledby="roi-title"
      className="relative overflow-hidden border-t border-white/5 py-24 md:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[var(--neon-green)]/10 blur-[150px]"
      />
      <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--neon-green)]" />
            Calculadora de retorno
          </span>
          <h2
            id="roi-title"
            className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground md:text-5xl"
          >
            Quanto o seu site pode{" "}
            <span className="bg-gradient-to-r from-[var(--neon-green)] via-[var(--cyan)] to-[var(--tech-blue)] bg-clip-text text-transparent">
              faturar a mais
            </span>
            ?
          </h2>
          <p className="mt-5 text-base text-muted-foreground md:text-lg">
            Simule o faturamento extra estimado com novos clientes vindos da sua
            presença digital.
          </p>
        </div>

        <div
          ref={ref}
          className={`reveal ${visible ? "reveal-in" : ""} mt-14 grid gap-6 rounded-2xl border border-white/10 bg-[var(--midnight)]/60 p-6 md:grid-cols-[1.1fr_1fr] md:p-8`}
        >
          <div className="space-y-8">
            <div>
              <label
                htmlFor="roi-ticket"
                className="flex items-baseline justify-between text-sm font-medium text-foreground"
              >
                Seu ticket médio
                <span className="font-display text-lg font-bold text-[var(--cyan)]">
                  {brl.format(ticket)}
                </span>
              </label>
              <input
                id="roi-ticket"
                type="range"
                min={50}
                max={5000}
                step={50}
                value={ticket}
                onChange={(e) => setTicket(Number(e.target.value))}
                className="mt-3 w-full accent-[var(--neon-green)]"
              />
            </div>

            <div>
              <label
                htmlFor="roi-clients"
                className="flex items-baseline justify-between text-sm font-medium text-foreground"
              >
                Novos clientes por mês pelo site
                <span className="font-display text-lg font-bold text-[var(--cyan)]">
                  {clients}
                </span>
              </label>
              <input
                id="roi-clients"
                type="range"
                min={1}
                max={100}
                step={1}
                value={clients}
                onChange={(e) => setClients(Number(e.target.value))}
                className="mt-3 w-full accent-[var(--neon-green)]"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center rounded-2xl border border-[var(--neon-green)]/25 bg-[var(--deep-bg)] p-6 text-center">
            <span className="inline-flex items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              <TrendingUp className="h-4 w-4 text-[var(--neon-green)]" aria-hidden />
              Faturamento extra estimado
            </span>
            <p
              aria-live="polite"
              className="mt-4 font-display text-4xl font-extrabold tracking-tight text-[var(--neon-green)] md:text-5xl"
            >
              {brl.format(monthly)}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">por mês</p>
            <p className="mt-4 text-sm text-foreground/70">
              {brl.format(yearly)} em 12 meses
            </p>
            <a
              href={WHATSAPP_DIAGNOSIS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_28px_-4px_var(--neon-green)] active:scale-[0.98]"
            >
              Quero esse resultado
            </a>
          </div>
        </div>
        <p className="mt-4 text-center text-xs text-muted-foreground">
          Estimativa ilustrativa baseada nos números informados por você.
        </p>
      </div>
    </section>
  );
}