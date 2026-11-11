import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { getHeroWhatsappUrl } from "./hero-segments";

describe("Hero WhatsApp segment context", () => {
  for (const [id, label] of [
    ["delivery", "Delivery & Comida"],
    ["lojas", "Lojas & Produtos"],
    ["servicos", "Serviços & Autônomos"],
  ] as const) {
    test(`includes ${label} in the Klique WhatsApp message`, () => {
      const url = new URL(getHeroWhatsappUrl(id));
      assert.equal(url.origin + url.pathname, "https://wa.me/5515998130853");
      assert.ok(url.searchParams.get("text")?.includes(`meu negócio de ${label}.`));
    });
  }

  test("Blogs opens WhatsApp with the personal site request", () => {
    const url = new URL(getHeroWhatsappUrl("blogs"));
    assert.equal(url.origin + url.pathname, "https://wa.me/5515998130853");
    assert.equal(
      url.searchParams.get("text"),
      "Olá Klique! Quero criar um blog ou página pessoal profissional com vocês.",
    );
  });

});