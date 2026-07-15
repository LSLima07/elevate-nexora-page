import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Ambient glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-10%] h-[520px] w-[820px] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(0,229,255,0.18), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-10%] top-[30%] h-[420px] w-[520px] rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(122,60,255,0.22), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-[-8%] bottom-[-10%] h-[380px] w-[480px] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(0,245,160,0.18), transparent 70%)",
        }}
      />

      <div className="mx-auto flex min-h-[calc(100svh-4rem)] max-w-4xl flex-col items-center justify-center px-6 py-24 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-70" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan" />
          </span>
          Agência de soluções digitais
        </span>

        <h1 className="mt-8 text-balance text-5xl font-extrabold leading-[1.05] tracking-tight text-foreground md:text-7xl">
          Transformamos confiança em{" "}
          <span className="bg-gradient-to-br from-neon-green via-cyan to-tech-blue bg-clip-text text-transparent">
            crescimento.
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
          Criamos sites rápidos e otimizados que colocam negócios locais no topo
          do Google — do primeiro clique ao primeiro cliente.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href={`https://wa.me/5515998130853?text=${encodeURIComponent("Olá! Gostaria de agendar o diagnóstico gratuito para a minha empresa com os especialistas da NEXORA.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-[0_0_0_1px_rgba(0,245,160,0.35)] transition-all hover:shadow-[0_0_40px_-6px_var(--neon-green)] active:scale-[0.98]"
          >
            Agendar diagnóstico gratuito
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-6 py-3.5 text-base font-medium text-foreground/90 transition-colors hover:border-white/20 hover:bg-white/[0.05]"
          >
            Ver portfólio
          </a>
        </div>

        <ul className="mt-14 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
          <li className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-cyan" />
            Google PageSpeed 95+
          </li>
          <li className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-cyan" />
            SEO local especializado
          </li>
          <li className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-cyan" />
            Entrega em até 21 dias
          </li>
        </ul>
      </div>
    </section>
  );
}