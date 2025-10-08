// src/pages/AccountBilling.jsx
import React from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { planName, planLineLimit, planSupportsTwoMessages, daysLeft } from "../lib/planUtils.js";
import { Link } from "react-router-dom";

export default function AccountBilling() {
  const { user, subscription } = useAuth();
  const plan = subscription?.plan_code || null;
  const interval = subscription?.billing_interval || "month";
  const status = subscription?.status || "unknown";
  const trialDays = daysLeft(subscription?.trial_end);
  const msgs = planSupportsTwoMessages(plan) ? 2 : 1;
  const lines = planLineLimit(plan);

  return (
    <main className="section-card" style={{ maxWidth: 900 }}>
      <h1>Account & Billing</h1>
      <p className="section-subtitle">Manage your plan, status, and receipts (coming soon).</p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <div className="mini-card">
          <h3 style={{ marginTop: 0 }}>Current Plan</h3>
          <p style={{ margin: 0, fontWeight: 800, fontSize: "1.15rem" }}>
            {plan ? planName(plan) : "—"}
            <span style={{ fontSize: ".95rem", color: "#aab6d3", marginLeft: 8 }}>
              · billed {interval === "year" ? "yearly (15% off)" : "monthly"}
            </span>
          </p>
          <p style={{ color: "#aab6d3", marginTop: 6 }}>
            Status: <b style={{ color: "#e6ecff" }}>{status}</b>
            {status === "trialing" && typeof trialDays === "number" && (
              <span style={{ marginLeft: 8 }}>(trial ends in {trialDays} day{trialDays === 1 ? "" : "s"})</span>
            )}
          </p>
        </div>

        <div className="mini-card">
          <h3 style={{ marginTop: 0 }}>Included</h3>
          <ul style={{ margin: 0, paddingLeft: 18, color: "#aab6d3" }}>
            <li>{msgs} message{msgs === 1 ? "" : "s"} per day</li>
            <li>Up to {lines} line{lines === 1 ? "" : "s"}</li>
            <li>Custom or library content</li>
            {plan === "org" && <li>Coordinated sends (coming soon)</li>}
          </ul>
        </div>
      </div>

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 16 }}>
        <button className="cta-button" disabled title="Billing will be enabled at launch">
          Open Billing Portal
        </button>
        <Link to="/pricing" className="secondary-cta">Change plan</Link>
      </div>

      <div className="feature" style={{ marginTop: 20 }}>
        <h3>Account owner</h3>
        <p style={{ color: "#aab6d3", margin: 0 }}>{user?.display_name || user?.email || "—"}</p>
      </div>

      <div className="feature" style={{ marginTop: 16 }}>
        <h3>Receipts</h3>
        <p className="section-subtitle">Receipts will appear here once Stripe is live.</p>
        <div style={{ padding: 14, border: "1px dashed #1f2a44", borderRadius: 12, color: "#aab6d3" }}>
          No receipts yet.
        </div>
      </div>
    </main>
  );
}
