// src/components/UpgradePrompt.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function UpgradePrompt({ requiredPlan = "pro", copy }) {
  const nav = useNavigate();
  const label = {
    pro: "Pro",
    family: "Family",
    org: "Organization",
  }[requiredPlan] || "higher";

  return (
    <div className="section-card" style={{ maxWidth: 900 }}>
      <h2 style={{ marginTop: 0 }}>Upgrade required</h2>
      <p className="section-subtitle">
        {copy || `This feature is available on the ${label} plan.`}
      </p>
      <div className="mini-card" style={{ marginTop: 8 }}>
        <ul style={{ margin: 0, paddingLeft: 18, color: "#aab6d3" }}>
          {requiredPlan === "pro" && (
            <>
              <li>2 messages per day</li>
              <li>Custom or library content</li>
              <li>Priority support</li>
            </>
          )}
          {requiredPlan === "family" && (
            <>
              <li>Everything in Pro</li>
              <li>Up to 3 lines</li>
            </>
          )}
          {requiredPlan === "org" && (
            <>
              <li>Everything in Pro</li>
              <li>Up to 10 lines</li>
              <li>Coordinated sends (coming soon)</li>
            </>
          )}
        </ul>
      </div>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 }}>
        <Link to="/pricing" className="cta-button" style={{ textDecoration: "none" }}>
          View plans
        </Link>
        <button
          className="secondary-cta"
          onClick={() => nav("/signup", { state: { plan: requiredPlan, interval: "month" } })}
        >
          Start free trial
        </button>
      </div>
    </div>
  );
}
