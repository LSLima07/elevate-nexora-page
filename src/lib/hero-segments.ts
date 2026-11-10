import { buildWhatsappUrl } from "@/lib/whatsapp";

export const HERO_SEGMENTS = [
  {
    id: "bebidas",
    label: "Adega & Bebidas",
    preview: "Olá Boy, vi a Busca Brisa por R$ 139,90 no site e quero retirar hoje no balcão.",
  },
  {
    id: "autopecas",
    label: "Autopeças & Oficina",
    preview: "Olá! Vi o serviço de troca de óleo no site e gostaria de consultar o valor para o meu carro. Vocês têm horário hoje?",
  },
  {
    id: "alimentacao",
    label: "Alimentação & Açaí",
    preview: "Olá! Vi o açaí de 500 ml no site e quero fazer um pedido. Vocês entregam no meu bairro?",
  },
  {
    id: "servicos",
    label: "Serviços Locais",
    preview: "Olá! Encontrei o serviço de manutenção no site e gostaria de um orçamento. Vocês atendem na minha região?",
  },
  {
    id: "outro",
    label: "Outro Negócio 🚀",
    preview:
      "Olá! Vi o site da Klique, tenho uma [Minha Loja] e quero criar meu catálogo digital automatizado no WhatsApp. Como funciona?",
  },
] as const;

export type HeroSegmentId = (typeof HERO_SEGMENTS)[number]["id"];

export function getHeroSegment(id: HeroSegmentId) {
  return HERO_SEGMENTS.find((segment) => segment.id === id) ?? HERO_SEGMENTS[0];
}

export const STORE_PLACEHOLDER = "[Minha Loja]";
export const STORE_TYPE_MAX = 40;

/** Preview text; for "outro" the [Minha Loja] token is replaced by the typed store type. */
export function getHeroPreview(id: HeroSegmentId, storeType = "") {
  const { preview } = getHeroSegment(id);
  if (id !== "outro") return preview;
  const clean = storeType.replace(/\s+/g, " ").trim().slice(0, STORE_TYPE_MAX);
  return preview.replace(STORE_PLACEHOLDER, clean || STORE_PLACEHOLDER);
}

export function getHeroWhatsappUrl(id: HeroSegmentId, storeType = "") {
  if (id === "outro") return buildWhatsappUrl(getHeroPreview(id, storeType));
  const { label } = getHeroSegment(id);
  return buildWhatsappUrl(
    `Olá, Klique! Quero destravar meu Site de Vendas para o meu negócio de ${label}. Gostaria de saber mais sobre a vitrine virtual, o Google Meu Negócio e o suporte.`,
  );
}