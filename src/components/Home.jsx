import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const nav = useNavigate();

  return (
    <main className="container">
      {/* HERO */}
      <section className="hero" style={{ marginTop: 18 }}>
        <h1 className="brand" style={{ margin: 0 }}>DayBrief</h1>
        <p className="tagline" style={{ maxWidth: 760, margin: "10px auto 22px" }}>
          Simple, scheduled SMS nudges that help you focus, reflect, and grow — one brief at a time.
        </p>
        <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
          <button className="cta-button" onClick={() => nav("/signup")}>Start free trial</button>
          <Link className="secondary-cta" to="/pricing">See pricing</Link>
        </div>
      </section>

      {/* ABOUT US */}
      <section className="section-card about">
        <h2>About Us</h2>
        <p className="section-subtitle">
          Built for people who want clarity in a noisy world.
        </p>
        <p style={{ maxWidth: 760, margin: "0 auto 20px" }}>
          DayBrief started as a small experiment — a way to send one mindful text at the right time.
          It grew into a platform that helps people reconnect with what matters. 
          We believe small, consistent reminders shape habits that last. 
          Whether it’s focus, gratitude, or balance — we deliver those moments, simply and privately.
        </p>
        <div className="values-grid">
          <div className="value">
            <h3>Purpose</h3>
            <p>We design tools that respect your attention and time — not compete for it.</p>
          </div>
          <div className="value">
            <h3>Privacy</h3>
            <p>No ads, no tracking — just the brief messages you ask for.</p>
          </div>
          <div className="value">
            <h3>Progress</h3>
            <p>Small, steady, personal growth — the kind that sticks.</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-card testimonials">
        <h2 style={{ marginBottom: 6 }}>What People Are Saying</h2>
        <p className="section-subtitle">
          Honest stories from everyday people using DayBrief to stay balanced and focused.
        </p>

        <div className="testimonials-grid" style={{ marginTop: 18 }}>
          <div className="testimonial">
            <div className="stars" aria-label="5 stars">★★★★★</div>
            <p>“My morning text reminds me to breathe before diving into the day. I never skip it.”</p>
            <cite>— Rachel L.</cite>
          </div>

          <div className="testimonial">
            <div className="stars">★★★★★</div>
            <p>“DayBrief replaced five different apps for me. Just one quiet message, perfectly timed.”</p>
            <cite>— Aaron P.</cite>
          </div>

          <div className="testimonial">
            <div className="stars">★★★★★</div>
            <p>“My wife and I both get reminders to hydrate and stretch — it’s become our small ritual.”</p>
            <cite>— Melissa & Drew</cite>
          </div>

          <div className="testimonial">
            <div className="stars">★★★★★</div>
            <p>“It helps me keep perspective — no dashboards, no noise. Just me and a moment to reset.”</p>
            <cite>— David N.</cite>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-card" style={{ textAlign: "center" }}>
        <h2 style={{ marginBottom: 6 }}>Try DayBrief free</h2>
        <p className="section-subtitle">
          7-day trial. Cancel anytime. 15% off yearly when you upgrade.
        </p>
        <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap", marginTop: 10 }}>
          <button className="cta-button" onClick={() => nav("/signup")}>Get started</button>
          <Link className="secondary-cta" to="/pricing">View plans</Link>
        </div>
      </section>
    </main>
  );
}

