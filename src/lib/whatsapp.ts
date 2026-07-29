export const WHATSAPP_NUMBER = "5515998130853";

export function buildWhatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const QUOTE_MESSAGE =
  "Olá! Gostaria de um orçamento para um projeto na NEXORA.";

/** Link padrão para CTAs de ação direta (orçamento). */
export const WHATSAPP_QUOTE_URL = buildWhatsappUrl(QUOTE_MESSAGE);
