// src/pages/Dashboard.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import { planName, planLineLimit, planSupportsTwoMessages, daysLeft } from "../lib/planUtils.js";

export default function Dashboard() {
  const { user, subscription } = useAuth();
  const plan = subscription?.plan_code || "base";
  const interval = subscription?.billing_interval || "month";
  const status = subscription?.status || "trialing";
  const linesCap = planLineLimit(plan);
  const msgs = planSupportsTwoMessages(plan) ? 2 : 1;
  const trialDays = daysLeft(subscription?.trial_end);

  return (
    <main className="section-card" style={{ maxWidth: 1100 }}>
      <h1>Welcome{user?.display_name ? `, ${user.display_name}` : ""}</h1>
      <p className="section-subtitle">Here’s a quick look at your DayBrief account.</p>

      {/* Summary */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14 }}>
        <div className="mini-card">
          <div style={{ color: "#aab6d3", fontSize: ".9rem" }}>Plan</div>
          <div style={{ fontWeight: 800, fontSize: "1.15rem" }}>
            {planName(plan)}{" "}
            <span style={{ color: "#aab6d3", fontWeight: 500 }}>
              · {interval === "year" ? "Yearly (15% off)" : "Monthly"}
            </span>
          </div>
          <div style={{ marginTop: 6 }}>
            Status: <b style={{ color: "#e6ecff" }}>{status}</b>{" "}
            {status === "trialing" && typeof trialDays === "number" && (
              <span style={{ color: "#aab6d3" }}>(trial ends in {trialDays} day{trialDays === 1 ? "" : "s"})</span>
            )}
          </div>
          <div style={{ marginTop: 8 }}>
            <Link to="/account" className="cta-button" style={{ textDecoration: "none", padding: "8px 12px" }}>
              Manage
            </Link>
          </div>
        </div>

        <div className="mini-card">
          <div style={{ color: "#aab6d3", fontSize: ".9rem" }}>Messages per day</div>
          <div style={{ fontWeight: 800, fontSize: "1.15rem" }}>{msgs}</div>
          <div style={{ marginTop: 6, color: "#aab6d3" }}>Custom or library content</div>
        </div>

        <div className="mini-card">
          <div style={{ color: "#aab6d3", fontSize: ".9rem" }}>Line limit</div>
          <div style={{ fontWeight: 800, fontSize: "1.15rem" }}>{linesCap}</div>
          <div style={{ marginTop: 6 }}>
            <Link to="/lines" style={{ color: "#60a5fa", textDecoration: "none" }}>Manage lines →</Link>
          </div>
        </div>
      </div>

      {/* Today */}
      <div className="feature" style={{ marginTop: 20 }}>
        <h3>Today’s schedule</h3>
        <p className="section-subtitle">This will show your next sends and custom messages.</p>
        <div style={{ padding: 14, border: "1px dashed #1f2a44", borderRadius: 12, color: "#aab6d3" }}>
          No scheduled sends yet. Add a line to get started.
        </div>
      </div>
    </main>
  );
}
