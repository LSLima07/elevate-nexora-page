export const WHATSAPP_NUMBER = "5515998130853";

export function buildWhatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const QUOTE_MESSAGE =
  "Olá! Gostaria de um orçamento para um projeto na NEXORA.";

/** Link padrão para CTAs de ação direta (orçamento). */
export const WHATSAPP_QUOTE_URL = buildWhatsappUrl(QUOTE_MESSAGE);

/** CTA principal do Hero — diagnóstico gratuito. */
export const DIAGNOSIS_MESSAGE =
  "Olá! Gostaria de agendar o diagnóstico gratuito para a minha empresa com os especialistas da NEXORA.";
export const WHATSAPP_DIAGNOSIS_URL = buildWhatsappUrl(DIAGNOSIS_MESSAGE);

/** Botão flutuante — dúvidas gerais. */
export const SUPPORT_MESSAGE =
  "Olá! Estava navegando no site da NEXORA e gostaria de tirar uma dúvida sobre os serviços de vocês.";
export const WHATSAPP_SUPPORT_URL = buildWhatsappUrl(SUPPORT_MESSAGE);
