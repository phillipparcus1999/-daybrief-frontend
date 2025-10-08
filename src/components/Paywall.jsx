// src/components/Paywall.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

export default function Paywall() {
  const { subscription } = useAuth();
  const nav = useNavigate();

  const plan = subscription?.plan_code || "base";
  const interval = subscription?.billing_interval || "month";
  const status = subscription?.status || "inactive";

  const handleUpgrade = () => nav("/pricing", { state: { fromPaywall: true } });
  const handleContact = () => (window.location.href = "mailto:support@daybrief.io");

  return (
    <main className="paywall-root">
      <section className="paywall-hero">
        <div className="paywall-hero-inner">
          <div className="paywall-badge">Locked Feature</div>
          <h1 className="paywall-title">Looks like this feature requires an upgrade</h1>
          <p className="paywall-sub">
            Your current plan <strong className="paywall-plan">{plan.toUpperCase()}</strong> ({interval})
            {status === "trialing" ? " — trial active" : status === "active" ? " — active" : " — not active"}
          </p>

          <div className="paywall-cta-row">
            <button className="cta-button" onClick={handleUpgrade}>
              View plans & upgrade
            </button>
            <button className="secondary-cta paywall-secondary" onClick={handleContact}>
              Contact support
            </button>
          </div>

          <div className="paywall-features">
            <h3>Why upgrade?</h3>
            <ul>
              <li><strong>More lines:</strong> add extra phone lines (Family & Org plans).</li>
              <li><strong>Extra messages:</strong> two scheduled messages per day and custom content.</li>
              <li><strong>Organization features:</strong> coordinated sends, admin controls (Org plan).</li>
            </ul>
          </div>

          <div className="paywall-why">
            <p>
              We run a small service and rely on subscriptions to keep DayBrief reliable and private. Try a free trial,
              and if you don’t love it we offer a simple refund window. Yearly billing gives <strong>15% off</strong>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
