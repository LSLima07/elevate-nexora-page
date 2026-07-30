import { useState, type FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { z } from "zod";
import { useReveal } from "@/hooks/use-reveal";
import { buildWhatsappUrl } from "@/lib/whatsapp";

const services = [
  "Landing Page / Site Institucional",
  "Vitrine Virtual de Produtos",
  "Otimização Google / SEO",
] as const;

const quoteSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Informe seu nome completo." })
    .max(100, { message: "Nome muito longo (máx. 100 caracteres)." }),
  email: z
    .string()
    .trim()
    .email({ message: "Informe um e-mail válido." })
    .max(255, { message: "E-mail muito longo." }),
  phone: z
    .string()
    .trim()
    .min(10, { message: "Informe um WhatsApp com DDD." })
    .max(20, { message: "Telefone muito longo." })
    .regex(/^[0-9()+\-\s]+$/, { message: "Use apenas números e símbolos de telefone." }),
  service: z.enum(services, { errorMap: () => ({ message: "Selecione o tipo de serviço." }) }),
  details: z
    .string()
    .trim()
    .max(1000, { message: "Máximo de 1000 caracteres." })
    .optional(),
});

type FieldErrors = Partial<Record<keyof z.infer<typeof quoteSchema>, string>>;

const fieldClass =
  "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-cyan/50 focus:ring-2 focus:ring-cyan/20";

export function QuoteForm() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [errors, setErrors] = useState<FieldErrors>({});
  const [sent, setSent] = useState(false);
  const [consentError, setConsentError] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    // Honeypot: se preenchido, é bot — cancela silenciosamente.
    if (String(formData.get("company") ?? "").trim() !== "") {
      form.reset();
      return;
    }

    const consent = formData.get("consent") === "on";
    const data = Object.fromEntries(formData.entries());
    const parsed = quoteSchema.safeParse(data);

    if (!consent) setConsentError("É necessário concordar para continuar.");
    else setConsentError(null);

    if (!parsed.success || !consent) {
      const next: FieldErrors = {};
      if (!parsed.success) {
        for (const issue of parsed.error.issues) {
          const key = issue.path[0] as keyof FieldErrors;
          if (!next[key]) next[key] = issue.message;
        }
      }
      setErrors(next);
      return;
    }

    setErrors({});
    const { name, email, phone, service, details } = parsed.data;
    const message = [
      `Olá! Meu nome é ${name}. Tenho interesse no serviço: ${service}.`,
      "",
      `E-mail: ${email} | Tel: ${phone}`,
      "",
      `Detalhes do projeto: ${details && details.length > 0 ? details : "—"}`,
    ]
      .join("\n");

    window.open(buildWhatsappUrl(message), "_blank", "noopener,noreferrer");
    form.reset();
    setSent(true);
  }

  return (
    <section
      id="orcamento"
      aria-labelledby="orcamento-title"
      className="relative border-t border-[var(--midnight)] bg-background py-24 md:py-28"
    >
      <div className="mx-auto max-w-3xl px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
              Orçamento rápido
            </span>
            <h2
              id="orcamento-title"
              className="mt-5 text-balance font-display text-3xl font-extrabold tracking-tight text-foreground md:text-4xl"
            >
              Conte sobre o seu projeto e receba uma{" "}
              <span className="bg-gradient-to-br from-neon-green via-cyan to-tech-blue bg-clip-text text-transparent">
                proposta gratuita
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">
              Prefere não usar o WhatsApp agora? Preencha o formulário e nossa
              equipe responde em até 1 dia útil.
            </p>
          </div>

          <div className="mt-10 rounded-3xl border border-white/10 bg-[var(--midnight)]/60 p-6 md:p-9">
            {sent ? (
              <div
                role="status"
                aria-live="polite"
                className="flex flex-col items-center gap-4 py-10 text-center"
              >
                <CheckCircle2 className="h-12 w-12 text-primary" />
                <h3 className="font-display text-xl font-bold text-foreground">
                  Solicitação enviada com sucesso!
                </h3>
                <p className="max-w-md text-sm text-muted-foreground">
                  Recebemos os dados do seu projeto. Abrimos também uma conversa
                  no WhatsApp para agilizar seu atendimento.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-2 inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-foreground/90 transition-colors hover:border-cyan/40 hover:text-cyan"
                >
                  Enviar outra solicitação
                </button>
              </div>
            ) : (
              <form noValidate onSubmit={handleSubmit} className="grid gap-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="Nome completo" id="name" error={errors.name}>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      maxLength={100}
                      autoComplete="name"
                      placeholder="Como podemos te chamar?"
                      className={fieldClass}
                      aria-invalid={!!errors.name}
                    />
                  </Field>
                  <Field label="E-mail" id="email" error={errors.email}>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      maxLength={255}
                      autoComplete="email"
                      placeholder="voce@empresa.com.br"
                      className={fieldClass}
                      aria-invalid={!!errors.email}
                    />
                  </Field>
                  <Field label="WhatsApp / Telefone" id="phone" error={errors.phone}>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      maxLength={20}
                      autoComplete="tel"
                      placeholder="(15) 99999-0000"
                      className={fieldClass}
                      aria-invalid={!!errors.phone}
                    />
                  </Field>
                  <Field label="Tipo de serviço" id="service" error={errors.service}>
                    <select
                      id="service"
                      name="service"
                      required
                      defaultValue=""
                      className={`${fieldClass} appearance-none`}
                      aria-invalid={!!errors.service}
                    >
                      <option value="" disabled>
                        Selecione uma opção
                      </option>
                      {services.map((service) => (
                        <option key={service} value={service} className="bg-[#0B1020]">
                          {service}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

                <Field
                  label="Detalhes do seu projeto"
                  id="details"
                  error={errors.details}
                  optional
                >
                  <textarea
                    id="details"
                    name="details"
                    rows={4}
                    maxLength={1000}
                    placeholder="Conte um pouco sobre o seu negócio e o que você precisa."
                    className={`${fieldClass} resize-y`}
                    aria-invalid={!!errors.details}
                  />
                </Field>

                {/* Honeypot anti-spam — invisível para usuários reais */}
                <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                  <label htmlFor="company">Empresa</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="consent"
                    className="flex cursor-pointer items-start gap-3 text-sm text-muted-foreground"
                  >
                    <input
                      id="consent"
                      name="consent"
                      type="checkbox"
                      className="mt-0.5 h-4 w-4 shrink-0 accent-[var(--neon-green)]"
                      aria-invalid={!!consentError}
                    />
                    <span>
                      Concordo em compartilhar meus dados para contato comercial da
                      NEXORA.
                    </span>
                  </label>
                  {consentError ? (
                    <p role="alert" className="text-xs text-[#FF6B6B]">
                      {consentError}
                    </p>
                  ) : null}
                </div>

                <button
                  type="submit"
                  className="group mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-[0_0_0_1px_rgba(0,245,160,0.35)] transition-all hover:shadow-[0_0_40px_-6px_var(--neon-green)] active:scale-[0.98]"
                >
                  Solicitar Orçamento Gratuito
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
                <p className="text-center text-xs text-muted-foreground">
                  Seus dados são usados apenas para o contato comercial.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  error,
  optional,
  children,
}: {
  label: string;
  id: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="flex items-center gap-2 text-sm font-medium text-foreground/85"
      >
        {label}
        {optional ? (
          <span className="text-xs font-normal text-muted-foreground">(opcional)</span>
        ) : null}
      </label>
      {children}
      {error ? (
        <p role="alert" className="text-xs text-[#FF6B6B]">
          {error}
        </p>
      ) : null}
    </div>
  );
}