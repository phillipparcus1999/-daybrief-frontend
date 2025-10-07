// src/components/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Home() {
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

