import React from "react";

export default function Home() {
  return (
    <main className="home-container">
      {/* HERO SECTION */}
      <section className="hero">
        <h1>DayBrief</h1>
        <p>Your day, simplified — daily reminders to build clarity and consistency.</p>
        <a href="/signup" className="cta-button">Start Your Free Trial</a>
      </section>

      {/* ABOUT SECTION */}
      <section className="about">
        <h2>About DayBrief</h2>
        <p>
          DayBrief sends short, personalized SMS reminders at the moments you choose. 
          Whether it’s focus, gratitude, or goals — each message helps you start with intention.
        </p>
        <div className="about-grid">
          <div>
            <h3>Simple</h3>
            <p>Choose one or two times per day, and we’ll handle the rest.</p>
          </div>
          <div>
            <h3>Personal</h3>
            <p>Write your own messages or use ours from the daily library.</p>
          </div>
          <div>
            <h3>Private</h3>
            <p>Your data stays yours — no ads, no tracking.</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="testimonials">
        <h2>What People Are Saying</h2>
        <div className="testimonials-grid">
          <blockquote>
            “The 8am ping keeps me focused — short, sweet, done.”
            <cite>— Alex, Founder</cite>
          </blockquote>
          <blockquote>
            “Our team uses it for check-ins. No meetings, just small nudges.”
            <cite>— Priya, PM</cite>
          </blockquote>
          <blockquote>
            “I set one for gratitude, one for goals. It really sticks.”
            <cite>— Jordan, Student</cite>
          </blockquote>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta">
        <h2>Try DayBrief Free</h2>
        <p>Start your 7-day trial — no card required. Cancel anytime.</p>
        <a href="/signup" className="cta-button">Get Started</a>
      </section>
    </main>
  );
}


