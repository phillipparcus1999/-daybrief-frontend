import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const PRICES = {
  base:  { month: 7,  year: (7  * 12 * 0.85).toFixed(2) },
  pro:   { month: 10, year: (10 * 12 * 0.85).toFixed(2) },
  family:{ month: 17, year: (17 * 12 * 0.85).toFixed(2) },
  org:   { month: 55, year: (55 * 12 * 0.85).toFixed(2) },
};

const LABELS = {
  base: "Base",
  pro: "Pro",
  family: "Family",
  org: "Organization",
};

function PlanCard({ code, interval, selected, onSelect, children }) {
  const price = interval === "month" ? PRICES[code].month : PRICES[code].year;
  return (
    <label className={`plan-card ${selected ? "selected" : ""}`} style={{ display: "block" }}>
      <input
        type="radio"
        name="plan"
        value={code}
        checked={selected}
        onChange={() => onSelect(code)}
      />
      <div className="plan-name">{LABELS[code]}</div>
      <div className="plan-price">
        ${price}
        <span className="plan-interval">/{interval === "month" ? "mo" : "yr"}</span>
      </div>
      <ul className="plan-points">{children}</ul>
    </label>
  );
}

export default function Pricing() {
  const nav = useNavigate();
  const [interval, setInterval] = useState("month"); // 'month' | 'year'
  const [selected, setSelected] = useState("pro");   // default highlight

  const yearlyNote = useMemo(
    () => (interval === "year" ? " • 15% off" : ""),
    [interval]
  );

  const goToSignup = () => {
    nav("/signup", { state: { plan: selected, interval } });
  };

  return (
    <main className="section-card" style={{ maxWidth: 1100 }}>
      <h1>Pricing</h1>
      <p className="section-subtitle">
        Simple plans. No hidden fees. Toggle billing to save 15% on yearly.
      </p>

      {/* Billing toggle */}
      <div className="billing-toggle" style={{ marginTop: 8, marginBottom: 18 }}>
        <button
          type="button"
          className={interval === "month" ? "toggle active" : "toggle"}
          onClick={() => setInterval("month")}
        >
          Billed monthly
        </button>
        <button
          type="button"
          className={interval === "year" ? "toggle active" : "toggle"}
          onClick={() => setInterval("year")}
          title="15% off"
        >
          Billed yearly{yearlyNote}
        </button>
      </div>

      {/* Plans */}
      <div className="plans-grid">
        <PlanCard code="base" interval={interval} selected={selected==="base"} onSelect={setSelected}>
          <li>1 message/day</li>
          <li>1 line</li>
          <li>Custom or library</li>
        </PlanCard>

        <PlanCard code="pro" interval={interval} selected={selected==="pro"} onSelect={setSelected}>
          <li>2 messages/day</li>
          <li>1 line</li>
          <li>Custom or library</li>
        </PlanCard>

        <PlanCard code="family" interval={interval} selected={selected==="family"} onSelect={setSelected}>
          <li>2 messages/day</li>
          <li>Up to 3 lines</li>
          <li>Custom or library</li>
        </PlanCard>

        <PlanCard code="org" interval={interval} selected={selected==="org"} onSelect={setSelected}>
          <li>2 messages/day</li>
          <li>Up to 10 lines</li>
          <li>Coordinated sends (soon)</li>
        </PlanCard>
      </div>

      {/* CTA */}
      <div style={{ marginTop: 18 }}>
        <button className="cta-button" onClick={goToSignup}>
          Select plan & start free trial
        </button>
      </div>

      {/* Fine print */}
      <p style={{ marginTop: 10, color: "#aab6d3", fontSize: ".95rem" }}>
        You won’t be charged until your free trial ends. Cancel anytime.
      </p>
    </main>
  );
}
