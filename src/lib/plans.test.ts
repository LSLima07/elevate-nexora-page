import { describe, expect, it } from "vitest";
import { PLANS, getPlanWhatsappUrl } from "./plans";

describe("planos", () => {
  it("tem 3 planos em ordem crescente de preço", () => {
    expect(PLANS.map((p) => p.monthly)).toEqual([49.9, 89.9, 149.9]);
  });
  it("link do WhatsApp leva o nome do plano", () => {
    const url = decodeURIComponent(getPlanWhatsappUrl(PLANS[1]));
    expect(url).toContain("wa.me/5515998130853");
    expect(url).toContain("plano Crescimento");
  });
});
