import { buildWhatsappUrl } from "@/lib/whatsapp";

export const HERO_SEGMENTS = [
  {
    id: "delivery",
    label: "Delivery & Comida",
    preview: "Olá! Vi o cardápio no site e quero pedir 2 Ultra Shakes para entrega.",
  },
  {
    id: "lojas",
    label: "Lojas & Produtos",
    preview: "Olá! Separei 2 brinquedos na vitrine online de vocês, ainda tem em estoque?",
  },
  {
    id: "servicos",
    label: "Serviços & Autônomos",
    preview: "Olá! Vi seu portfólio no site e gostaria de agendar um horário/orçamento.",
  },
  {
    id: "blogs",
    label: "Blogs & Sites Pessoais",
    preview: "Olá Klique! Quero criar um blog ou página pessoal profissional com vocês.",
  },
] as const;

export type HeroSegmentId = (typeof HERO_SEGMENTS)[number]["id"];

export function getHeroSegment(id: HeroSegmentId) {
  return HERO_SEGMENTS.find((segment) => segment.id === id) ?? HERO_SEGMENTS[0];
}

export function getHeroPreview(id: HeroSegmentId) {
  return getHeroSegment(id).preview;
}

export function getHeroWhatsappUrl(id: HeroSegmentId) {
  if (id === "blogs") return buildWhatsappUrl(getHeroPreview(id));
  const { label } = getHeroSegment(id);
  return buildWhatsappUrl(
    `Olá, Klique! Quero destravar meu Site de Vendas para o meu negócio de ${label}. Gostaria de saber mais sobre a vitrine virtual, o Google Meu Negócio e o suporte.`,
  );
}