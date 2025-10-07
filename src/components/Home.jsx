import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Home() {
  // Pricing toggle
  const [yearly, setYearly] = useState(false);

  const plans = [
    { key: "base", name: "Base", monthly: 7, yearly: 71.40, features: [
      "7-day free trial (blocked after trial if not upgraded)",
      "2 custom messages/day or daily library",
      "Timezone support"
    ], cta: { label: "Start Free Trial", to: "/signup", variant: "primary" }, badge: "" },

    { key: "pro", name: "Pro", monthly: 10, yearly: 102.00, features: [
      "Everything in Base",
      "Saved templates",
      "Delivery analytics",
      "Early-access features"
    ], cta: { label: "Upgrade to Pro", to: "/signup", variant: "primary" }, badge: "Most Popular" },

    { key: "family", name: "Family", monthly: 17, yearly: 173.40, features: [
      "All Pro features",
      "Up to 3 lines on one account",
      "Shared templates & delivery logs"
    ], cta: { label: "Get Family", to: "/signup", variant: "secondary" }, badge: "Best Value" },

    { key: "org", name: "Organization", monthly: 55, yearly: 561.00, features: [
      "All Pro features",
      "Up to 10 lines",
      "One admin line can broadcast to others",
      "Admin dashboard"
    ], cta: { label: "Contact Sales", to: "/contact", variant: "outline" }, badge: "Business Ready" },
  ];

  return (
    <div className="home" id="home">
      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="brand">
            Your day, <span className="accent-text">distilled</span>.
          </h1>
          <p className="tagline">
            Two concise reminders. Right time, right tone — delivered daily so momentum becomes your default.
          </p>
          <Link to="/signup" className="cta-button" id="signup">Get Started</Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features-section section-card" id="features">
        <h2>Why DayBrief?</h2>
        <p className="section-subtitle">
          Simple on purpose. We focus on the details that actually move your day forward.
        </p>

        <div className="features-grid">
          <article className="feature">
            <div className="feature-icon" aria-hidden="true">⏰</div>
            <h3>Scheduled to Your Rhythm</h3>
            <p>Pick up to two daily send times in simple 12-hour format. We handle time zones and delivery windows.</p>
          </article>
          <article className="feature">
            <div className="feature-icon" aria-hidden="true">📝</div>
            <h3>Short, Sharp, Effective</h3>
            <p>100-character cap keeps messages crisp so you actually act on them — no fluff, just focus.</p>
          </article>
          <article className="feature">
            <div className="feature-icon" aria-hidden="true">🎛️</div>
            <h3>Set &amp; Forget</h3>
            <p>Change times or messages anytime. Your preferences sync instantly — no extra steps.</p>
          </article>
          <article className="feature">
            <div className="feature-icon" aria-hidden="true">🔒</div>
            <h3>Private by Default</h3>
            <p>Secure transport and minimal retention. We keep only what’s needed to deliver your DayBrief.</p>
          </article>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="features-section section-card" aria-labelledby="how-title">
        <h2 id="how-title">How it Works</h2>
        <p className="section-subtitle">Three tiny steps. Big payoff.</p>

        <div className="features-grid">
          <article className="feature"><div className="feature-icon">1️⃣</div><h3>Choose Your Times</h3><p>Select up to two daily slots (AM/PM).</p></article>
          <article className="feature"><div className="feature-icon">2️⃣</div><h3>Write Your Briefs</h3><p>Keep each message under 100 characters.</p></article>
          <article className="feature"><div className="feature-icon">3️⃣</div><h3>We Deliver, Daily</h3><p>Timely nudges without managing calendars.</p></article>
        </div>
      </section>

      {/* PRICING */}
      <section className="features-section section-card" id="pricing" aria-labelledby="pricing-title">
        <h2 id="pricing-title">Pricing</h2>
        <p className="section-subtitle">
          7-day free trial. Cancel anytime. Save 15% with annual billing.
        </p>

        <div style={{ display: "flex", gap: 12, justifyContent: "center", alignItems: "center", marginBottom: 16 }}>
          <span style={{ opacity: yearly ? 0.6 : 1, fontWeight: !yearly ? 800 : 600 }}>Monthly</span>
          <button
            type="button"
            aria-label="Toggle annual billing"
            onClick={() => setYearly(v => !v)}
            style={{
              cursor: "pointer",
              background: "var(--db-gray-700)",
              border: "1px solid var(--db-border)",
              borderRadius: 999,
              padding: 6,
              width: 56,
              height: 32,
              position: "relative"
            }}
          >
            <span
              style={{
                position: "absolute",
                top: 3,
                left: yearly ? 28 : 3,
                width: 26,
                height: 26,
                borderRadius: "50%",
                background: "var(--db-orange)",
                transition: "left .18s ease"
              }}
            />
          </button>
          <span style={{ opacity: yearly ? 1 : 0.6, fontWeight: yearly ? 800 : 600 }}>Annual</span>
        </div>
        <p className="section-subtitle" style={{ marginTop: -8 }}>Billed {yearly ? "annually" : "monthly"}.</p>

        <div className="features-grid">
          {plans.map(p => {
            const price = yearly ? p.yearly : p.monthly;
            const suffix = yearly ? "/yr" : "/mo";
            return (
              <article key={p.key} className="feature">
                {p.badge && <div style={{
                  display: "inline-block",
                  marginBottom: 10,
                  padding: "4px 10px",
                  borderRadius: 999,
                  background: "var(--db-blue-500)",
                  color: "#fff",
                  fontSize: 12,
                  fontWeight: 800
                }}>{p.badge}</div>}
                <h3 style={{ marginBottom: 6 }}>{p.name}</h3>
                <div style={{ fontSize: 24, fontWeight: 900, marginBottom: 10 }}>
                  ${price.toFixed( yearly ? 2 : 0 )}<span style={{ fontSize: 14, opacity: .85 }}>{suffix}</span>
                </div>
                <ul style={{ paddingLeft: 18, margin: "0 0 14px 0", color: "#dbe4ffbf", lineHeight: 1.6 }}>
                  {p.features.map((f, i) => <li key={i}>{f}</li>)}
                </ul>
                <Link
                  to={p.cta.to}
                  className="cta-button"
                  style={
                    p.cta.variant === "outline"
                      ? { background: "transparent", border: "1px solid var(--db-border)" }
                      : p.cta.variant === "secondary"
                      ? { background: "var(--db-blue-500)" }
                      : undefined
                  }
                >
                  {p.cta.label}
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials-section section-card" id="testimonials">
        <h2>What People Say</h2>
        <div className="testimonials-grid">
          <blockquote className="testimonial"><p>“The two-a-day cadence hits perfectly — it nudges without nagging.”</p><cite>— Beta User</cite></blockquote>
          <blockquote className="testimonial"><p>“Tiny prompts, big lift. I actually keep promises to myself now.”</p><cite>— Early Adopter</cite></blockquote>
          <blockquote className="testimonial"><p>“Feels like a coach who knows exactly when to speak up.”</p><cite>— Pilot Customer</cite></blockquote>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about section-card" id="about">
        <h2>About Us</h2>
        <p>
          DayBrief is built around a simple idea: the right nudge at the right moment changes behavior.
          We keep messages short, timing precise, and setup effortless — so momentum becomes your default.
        </p>
        <p>
          We’re starting focused: two messages a day, clean controls, and reliable delivery. From there,
          we’ll add quality-of-life features without the bloat — smarter templates, helpful defaults, and
          optional dashboards for power users.
        </p>
        <div style={{ marginTop: 24 }}>
          <Link to="/signup" className="cta-button">Create Your DayBrief</Link>
        </div>
      </section>
    </div>
  );
}

