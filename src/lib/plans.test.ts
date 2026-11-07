import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { PLANS, getPlanWhatsappUrl } from "./plans";

describe("planos", () => {
  test("tem 3 planos em ordem crescente de preço", () => {
    assert.deepEqual(PLANS.map((p) => p.monthly), [49.9, 89.9, 149.9]);
  });
  test("link do WhatsApp leva o nome do plano", () => {
    const url = decodeURIComponent(getPlanWhatsappUrl(PLANS[1]));
    assert.ok(url.includes("wa.me/5515998130853"));
    assert.ok(url.includes("plano Crescimento"));
  });
});
