import { MapPin, Monitor } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { WHATSAPP_QUOTE_URL } from "@/lib/whatsapp";

const cities = ["Itapetininga", "Angatuba", "Sorocaba", "Região Sudoeste - SP"];

const MAP_SRC =
  "https://www.google.com/maps?q=Itapetininga,%20SP,%20Brasil&z=9&output=embed";

export function ServiceArea() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section
      id="area-atendimento"
      aria-labelledby="area-atendimento-title"
      className="relative border-t border-[var(--midnight)] bg-background py-24 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div
          ref={ref}
          className={`grid gap-10 rounded-3xl border border-white/10 bg-[var(--midnight)]/60 p-8 transition-all duration-700 md:grid-cols-2 md:p-10 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div className="flex flex-col justify-center">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 text-cyan" />
              SEO Local
            </span>

            <h2
              id="area-atendimento-title"
              className="mt-5 font-display text-3xl font-extrabold tracking-tight text-foreground md:text-4xl"
            >
              Área de Atendimento Local
            </h2>

            <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
              Atendemos de forma <strong className="text-foreground/90">presencial</strong> empresas
              de Itapetininga, Angatuba e cidades vizinhas — e de forma{" "}
              <strong className="text-foreground/90">100% digital</strong> negócios de Sorocaba e
              todo o interior de São Paulo, com reuniões online e suporte por WhatsApp.
            </p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {cities.map((city) => (
                <li
                  key={city}
                  className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-xs text-muted-foreground"
                >
                  {city}
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <a
                href={WHATSAPP_QUOTE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_32px_-6px_var(--neon-green)] active:scale-[0.98]"
              >
                Falar com a NEXORA
              </a>
              <span className="inline-flex items-center gap-2 text-xs text-muted-foreground">
                <Monitor className="h-4 w-4 text-cyan" />
                Reuniões online em todo o Brasil
              </span>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-white/10">
            <iframe
              title="Mapa da área de atendimento da NEXORA — Itapetininga, Angatuba e região"
              src={MAP_SRC}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[300px] w-full grayscale-[0.6] invert-[0.92] hue-rotate-180 contrast-[0.9] md:h-full md:min-h-[340px]"
              style={{ border: 0 }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--deep-bg)]/70 via-transparent to-transparent"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
