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
});