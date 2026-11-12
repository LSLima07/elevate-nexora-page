import { buildWhatsappUrl } from "@/lib/whatsapp";

export const SIMULATOR_BRANCHES = [
  { id: "lanchonete", label: "Lanchonete", fallback: "Sua Lanchonete", action: "Fazer meu pedido" },
  { id: "loja", label: "Loja de Produtos", fallback: "Sua Loja", action: "Consultar produto" },
  { id: "servicos", label: "Serviços/Blog", fallback: "Seu Espaço", action: "Entrar em contato" },
] as const;
export type SimulatorBranch = (typeof SIMULATOR_BRANCHES)[number]["id"];

export function getSimulatorBranch(id: SimulatorBranch) {
  return SIMULATOR_BRANCHES.find((branch) => branch.id === id) ?? SIMULATOR_BRANCHES[0];
}

export function getSimulatorName(name: string, branch: SimulatorBranch) {
  return name.trim() || getSimulatorBranch(branch).fallback;
}

export function getSimulatorWhatsappUrl(name: string, branch: SimulatorBranch) {
  return buildWhatsappUrl(`Olá, Klique! Testei o simulador e quero publicar minha vitrine. Nome: ${getSimulatorName(name, branch)}. Ramo: ${getSimulatorBranch(branch).label}. Como começamos?`);
}