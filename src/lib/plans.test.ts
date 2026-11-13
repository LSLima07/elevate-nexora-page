import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { PLANS, OPTIONAL_SUPPORT_MONTHLY, DELIVERY_MAX_DAYS, getPlanWhatsappUrl } from "./plans";

describe("planos", () => {
  test("criação tem prazo máximo de 5 dias", () => {
    assert.equal(DELIVERY_MAX_DAYS, 5);
  });
  test("Vitrine custa menos de R$ 0,42 por dia no primeiro ano", () => {
    const plan = PLANS.find((p) => p.id === "vitrine");
    assert.ok(plan);
    assert.equal(plan.setup, 150);
    assert.ok(plan.setup / 365 < 0.42);
  });
  test("Vitrine não cobra taxas sobre vendas", () => {
    assert.equal(PLANS.find((p) => p.id === "vitrine")?.salesCommissionPercent, 0);
  });
  test("Vitrine tem taxa única de R$ 150", () => {
    assert.equal(PLANS.find((p) => p.id === "vitrine")?.setup, 150);
  });
  test("Vitrine permite duas parcelas de R$ 75", () => {
    assert.deepEqual(PLANS.find((p) => p.id === "vitrine")?.installments, { count: 2, amount: 75 });
  });
  test("Profissional & Blogs tem taxa única de R$ 250", () => {
    assert.equal(PLANS.find((p) => p.id === "profissional")?.setup, 250);
  });
  test("suporte opcional começa em R$ 25 por mês", () => {
    assert.equal(OPTIONAL_SUPPORT_MONTHLY, 25);
  });
  test("link do WhatsApp leva o nome do plano", () => {
    const url = decodeURIComponent(getPlanWhatsappUrl(PLANS[1])).replace(/\u00a0/g, " ");
    assert.ok(url.includes("wa.me/5515998130853"));
    assert.ok(url.includes("plano Profissional & Blogs"));
    assert.ok(url.includes("R$ 250,00, taxa única"));
    assert.ok(!url.includes("/mês"));
  });
});
