import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const nav = useNavigate();

  return (
    <main className="container">
      {/* HERO */}
      <section className="hero">
        <h1 className="brand" style={{margin:0}}>DayBrief</h1>
        <p className="tagline" style={{maxWidth:720, margin:"10px auto 22px"}}>
          A smarter way to nudge your day—schedule one or two brief, meaningful check-ins that keep you on track.
        </p>
        <div style={{display:"flex", gap:10, justifyContent:"center", flexWrap:"wrap"}}>
          <button className="cta-button" onClick={() => nav("/signup")}>Start free trial</button>
          <Link className="secondary-cta" to="/pricing">See pricing</Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section-card">
        <h2 style={{marginBottom:8}}>What you get</h2>
        <p className="section-subtitle">Clean, flexible reminders with real-world features.</p>
        <div className="features-grid" style={{marginTop:16}}>
          <div className="feature">
            <h3>Custom messages</h3>
            <p>Write your own brief, uplifting message—or use our daily library.</p>
          </div>
          <div className="feature">
            <h3>Two times per day</h3>
            <p>Schedule one or two times (AM/PM) with a simple picker. No clutter.</p>
          </div>
          <div className="feature">
            <h3>Family & Org plans</h3>
            <p>Share lines, coordinate messages, and manage everything in one place.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

