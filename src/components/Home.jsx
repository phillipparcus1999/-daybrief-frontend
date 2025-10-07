// src/components/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../App.css"; // make sure global styles are loaded

export default function Home() {
  return (
    <div className="home" id="home">
      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="brand">Your day, distilled.</h1>
          <p className="tagline">
            Two concise reminders. The right time, the right tone — scheduled once, delivered daily.
          </p>
          <Link to="/signup" className="cta-button" id="signup">
            Get Started
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features-section" id="features">
        <h2>Why DayBrief?</h2>

        <div className="features-grid">
          <article className="feature" aria-label="Scheduling features">
            <div className="feature-icon" aria-hidden="true">⏰</div>
            <h3>Scheduled to Your Rhythm</h3>
            <p>
              Pick up to two daily send times in simple 12-hour format. We handle time zones and delivery windows for you.
            </p>
          </article>

          <article className="feature" aria-label="Message style">
            <div className="feature-icon" aria-hidden="true">📝</div>
            <h3>Short, Sharp, Effective</h3>
            <p>
              100-character cap keeps messages crisp so you actually act on them — no fluff, just focus.
            </p>
          </article>

          <article className="feature" aria-label="Simple management">
            <div className="feature-icon" aria-hidden="true">🎛️</div>
            <h3>Set & Forget (But Tweak Anytime)</h3>
            <p>
              Change times or messages on the fly. Your preferences sync instantly without breaking your flow.
            </p>
          </article>

          <article className="feature" aria-label="Privacy">
            <div className="feature-icon" aria-hidden="true">🔒</div>
            <h3>Private by Default</h3>
            <p>
              Secure transport and minimal data storage — we only keep what’s needed to deliver your DayBrief.
            </p>
          </article>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="features-section" aria-labelledby="how-title">
        <h2 id="how-title">How it Works</h2>
        <div className="features-grid">
          <article className="feature" aria-label="Step 1">
            <div className="feature-icon" aria-hidden="true">1️⃣</div>
            <h3>Choose Your Times</h3>
            <p>Select up to two daily slots (AM/PM). We convert to UTC and queue reliably.</p>
          </article>
          <article className="feature" aria-label="Step 2">
            <div className="feature-icon" aria-hidden="true">2️⃣</div>
            <h3>Write Your Briefs</h3>
            <p>Keep each message under 100 characters. Clarity beats length every time.</p>
          </article>
          <article className="feature" aria-label="Step 3">
            <div className="feature-icon" aria-hidden="true">3️⃣</div>
            <h3>We Deliver, Daily</h3>
            <p>You get timely nudges without managing a calendar or opening an app.</p>
          </article>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials-section" id="testimonials" aria-labelledby="testimonials-title">
        <h2 id="testimonials-title">What People Say</h2>

        <div className="testimonials-grid">
          <blockquote className="testimonial">
            <p>“The two-a-day cadence hits perfectly — it nudges without nagging.”</p>
            <cite>— Beta User</cite>
          </blockquote>

          <blockquote className="testimonial">
            <p>“Tiny prompts, big lift. I actually keep promises to myself now.”</p>
            <cite>— Early Adopter</cite>
          </blockquote>

          <blockquote className="testimonial">
            <p>“Feels like a coach who knows exactly when to speak up.”</p>
            <cite>— Pilot Customer</cite>
          </blockquote>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about" aria-labelledby="about-title">
        <h2 id="about-title">About Us</h2>
        <p>
          DayBrief was built around a simple idea: the right nudge at the right moment changes behavior.
          We keep messages short, timing precise, and setup effortless — so momentum becomes your default.
        </p>
        <p>
          We’re starting focused: two messages a day, clean controls, and reliable delivery.
          From there, we’ll add quality-of-life features without the bloat — smarter templates, helpful defaults,
          and optional dashboards for power users.
        </p>
        <div style={{ marginTop: 24 }}>
          <Link to="/signup" className="cta-button">Create Your DayBrief</Link>
        </div>
      </section>
    </div>
  );
}
