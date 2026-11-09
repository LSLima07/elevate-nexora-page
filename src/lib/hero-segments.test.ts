import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { getHeroWhatsappUrl } from "./hero-segments";

describe("Hero WhatsApp segment context", () => {
  for (const [id, label] of [
    ["bebidas", "Adega & Bebidas"],
    ["autopecas", "Autopeças & Oficina"],
    ["alimentacao", "Alimentação & Açaí"],
    ["servicos", "Serviços Locais"],
  ] as const) {
    test(`includes ${label} in the NEXORA WhatsApp message`, () => {
      const url = new URL(getHeroWhatsappUrl(id));
      assert.equal(url.origin + url.pathname, "https://wa.me/5515998130853");
      assert.ok(url.searchParams.get("text")?.includes(`meu negócio de ${label}.`));
    });
  }

  test("Outro Negócio sends the universal catalog message", () => {
    const url = new URL(getHeroWhatsappUrl("outro"));
    assert.equal(
      url.searchParams.get("text"),
      "Olá! Vi o site da Nexora, tenho uma [Minha Loja] e quero criar meu catálogo digital automatizado no WhatsApp. Como funciona?",
    );
  });
});