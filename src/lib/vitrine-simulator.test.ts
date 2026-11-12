import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { getSimulatorName, getSimulatorWhatsappUrl, SIMULATOR_BRANCHES } from "./vitrine-simulator";

describe("simulador", () => {
  test("oferece os três ramos solicitados", () => {
    assert.deepEqual(SIMULATOR_BRANCHES.map((branch) => branch.label), ["Lanchonete", "Loja de Produtos", "Serviços/Blog"]);
  });
  for (const branch of SIMULATOR_BRANCHES) {
    test(`WhatsApp inclui nome e ramo ${branch.label}`, () => {
      const url = new URL(getSimulatorWhatsappUrl(" Ana & Cia ", branch.id));
      assert.equal(url.origin + url.pathname, "https://wa.me/5515998130853");
      assert.equal(url.searchParams.get("text"), `Olá, Klique! Testei o simulador e quero publicar minha vitrine. Nome: Ana & Cia. Ramo: ${branch.label}. Como começamos?`);
    });
  }
  test("nome vazio mantém a prévia e o contato coerentes", () => {
    assert.equal(getSimulatorName("  ", "loja"), "Sua Loja");
    assert.ok(new URL(getSimulatorWhatsappUrl("", "loja")).searchParams.get("text")?.includes("Nome: Sua Loja."));
  });
});