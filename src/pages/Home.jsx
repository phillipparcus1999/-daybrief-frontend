import React from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Home() {
  const nav = useNavigate();
  const goToTrial = () => nav("/signup", { state: { plan: "pro", interval: "month" } });

  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <h1 className="hero-title">Daily texts that keep you on track.</h1>
          <p className="hero-subtitle">
            DayBrief sends focused, bite-size messages at the times you choose.
            Use our daily library or your own custom messages. Built for individuals,
            families, and organizations.
          </p>
          <div className="hero-actions">
            <button className="cta-button" onClick={goToTrial}>Start free trial</button>
            <Link to="/pricing" className="secondary-cta">See pricing</Link>
          </div>
        </div>
        <div className="hero-bg" />
      </section>

      {/* VALUE STRIP */}
      <section className="value-strip">
        <div className="value-item"><span>⚡</span> 30-second setup</div>
        <div className="value-item"><span>🕑</span> Your times, your cadence</div>
        <div className="value-item"><span>🧩</span> Custom or library content</div>
        <div className="value-item"><span>👥</span> Lines for family/orgs</div>
      </section>

      {/* FEATURES */}
      <section className="feature-grid section-card">
        <article className="feature">
          <h3>Pick your plan</h3>
          <p>Base for one message/day, Pro for two, Family for up to three lines, and Organization for coordinated sends.</p>
          <Link to="/pricing" className="link">Compare plans →</Link>
        </article>
        <article className="feature">
          <h3>Choose your times</h3>
          <p>Morning focus, afternoon reminder, evening wind-down—set it once and DayBrief delivers like clockwork.</p>
          <Link to="/signup" className="link">Start free trial →</Link>
        </article>
        <article className="feature">
          <h3>Write your own</h3>
          <p>Add personal prompts or pick from our daily library. You can change messages whenever you want.</p>
          <Link to="/signup" className="link">Create my brief →</Link>
        </article>
      </section>

      {/* SOCIAL PROOF */}
      <section className="section-card">
        <h2 style={{ marginTop: 0 }}>What users say</h2>
        <div className="testimonials">
          <blockquote>
            “Simple, clean, and it actually helps me remember the right things.”
            <cite>— Jamie, Pro plan</cite>
          </blockquote>
          <blockquote>
            “We use it for our team’s quick end-of-day check-ins. Zero friction.”
            <cite>— Alex, Organization plan</cite>
          </blockquote>
          <blockquote>
            “Our family uses it for chores and practice reminders—no more missed tasks.”
            <cite>— Riley, Family plan</cite>
          </blockquote>
        </div>
      </section>
    </main>
  );
}
