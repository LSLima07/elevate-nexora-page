import { buildWhatsappUrl } from "@/lib/whatsapp";

export type Plan = {
  id: "vitrine" | "crescimento" | "completo";
  name: string;
  setup: number;
  monthly: number;
  forWho: string;
  features: string[];
  highlight?: boolean;
};

export const PLANS: Plan[] = [
  {
    id: "vitrine",
    name: "Vitrine",
    setup: 297,
    monthly: 49.9,
    forWho: "Para quem quer começar a aparecer na internet.",
    features: ["Página da sua loja pronta em 5 dias", "Botão direto para o seu WhatsApp", "Hospedagem e segurança inclusas", "Site rápido no celular", "Domínio próprio (.com.br)"],
  },
  {
    id: "crescimento",
    name: "Crescimento",
    setup: 497,
    monthly: 89.9,
    forWho: "Para quem quer ser achado no Google do bairro.",
    features: ["Tudo do plano Vitrine", "Google Meu Negócio configurado", "Até 30 produtos na vitrine", "1 atualização por mês", "Aparece no mapa da sua cidade"],
    highlight: true,
  },
  {
    id: "completo",
    name: "Completo",
    setup: 797,
    monthly: 149.9,
    forWho: "Para quem quer vender todo dia pela internet.",
    features: ["Tudo do plano Crescimento", "Produtos ilimitados", "Atualizações ilimitadas", "Relatório mensal de visitas"],
  },
];

export const formatBRL = (v: number) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export function getPlanWhatsappUrl(plan: Plan) {
  return buildWhatsappUrl(
    `Olá! Tenho interesse no plano ${plan.name} da Klique (${formatBRL(plan.monthly)}/mês). Pode me explicar como começar?`,
  );
}
