import { describe, expect, test } from "bun:test";
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
      expect(url.origin + url.pathname).toBe("https://wa.me/5515998130853");
      expect(url.searchParams.get("text")).toContain(`meu negócio de ${label}.`);
    });
  }
});