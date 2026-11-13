import { buildWhatsappUrl } from "@/lib/whatsapp";

export type Plan = {
  id: "vitrine" | "profissional";
  name: string;
  setup: number;
  installments?: { count: number; amount: number };
  forWho: string;
  features: string[];
  highlight?: boolean;
  salesCommissionPercent?: number;
};

export const PLANS: Plan[] = [
  {
    id: "vitrine",
    name: "Vitrine",
    setup: 150,
    salesCommissionPercent: 0,
    installments: { count: 2, amount: 75 },
    forWho: "Delivery & Lojas",
    features: ["Vitrine de produtos ou cardápio digital", "Pedidos direto pelo WhatsApp", "Visual adaptado ao celular", "Hospedagem inclusa"],
    highlight: true,
  },
  {
    id: "profissional",
    name: "Profissional & Blogs",
    setup: 250,
    forWho: "Sites pessoais, portfólios e blogs",
    features: ["Página com sua identidade profissional", "Apresentação de serviços, portfólio ou artigos", "Contato direto pelo WhatsApp", "Hospedagem inclusa"],
  },
];

export const OPTIONAL_SUPPORT_MONTHLY = 25;
export const DELIVERY_MAX_DAYS = 5;

export const formatBRL = (v: number) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export function getPlanWhatsappUrl(plan: Plan) {
  return buildWhatsappUrl(
    `Olá! Tenho interesse no plano ${plan.name} da Klique (${formatBRL(plan.setup)}, taxa única${plan.installments ? ` ou ${plan.installments.count}x de ${formatBRL(plan.installments.amount)}` : ""}). Pode me explicar como começar?`,
  );
}
