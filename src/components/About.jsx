import React, { useEffect } from "react";

/** Lightweight meta setter (no extra deps) */
function usePageMeta({ title, description, url = "https://daybrief.io/about", image = "/favicon-512.png" }) {
  useEffect(() => {
    document.title = title || "DayBrief";

    const ensure = (attr, key, val) => {
      if (!val) return;
      let el = document.head.querySelector(`${attr}="${key}"`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr.split("=")[0], key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", val);
    };

    // Standard
    ensure('name="description"', "description", description);

    // Open Graph
    ensure('property="og:type"', "og:type", "website");
    ensure('property="og:title"', "og:title", title);
    ensure('property="og:description"', "og:description", description);
    ensure('property="og:url"', "og:url", url);
    ensure('property="og:image"', "og:image", image);

    // Twitter
    ensure('name="twitter:card"', "twitter:card", "summary_large_image");
    ensure('name="twitter:title"', "twitter:title", title);
    ensure('name="twitter:description"', "twitter:description", description);
    ensure('name="twitter:image"', "twitter:image", image);
  }, [title, description, url, image]);
}

export default function About() {
  usePageMeta({
    title: "About DayBrief | Start Each Day With Intention",
    description:
      "DayBrief sends simple, scheduled SMS nudges to help you start the day with clarity. Built for individuals, families, and teams.",
    url: "https://daybrief.io/about",
  });

  return (
    <main className="container">
      <section className="section-card" style={{ marginTop: 20 }}>
        <h1>About DayBrief</h1>
        <p className="section-subtitle">
          Your day, simplified — with small, meaningful check-ins that build momentum.
        </p>
        <div style={{ display: "grid", gap: 16, marginTop: 12 }}>
          <p>
            DayBrief was created to make daily discipline feel light. Instead of another app to manage,
            you pick one or two times and receive brief, focused messages that help you reset, refocus,
            and move forward.
          </p>
          <p>
            We keep it personal and low-friction: clear scheduling, optional custom messages, and plans
            that support families or organizations. It’s a small habit with an outsized impact.
          </p>
        </div>
      </section>

      <section className="section-card">
        <h2>What we believe</h2>
        <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.7 }}>
          <li><strong>Simplicity wins:</strong> tiny nudges beat giant to-do lists.</li>
          <li><strong>Consistency compounds:</strong> a minute a day > hours once a month.</li>
          <li><strong>Privacy matters:</strong> your data stays yours.</li>
        </ul>
      </section>

      <section className="section-card">
        <h2>Who we serve</h2>
        <div className="features-grid" style={{ marginTop: 8 }}>
          <div className="feature">
            <h3>Individuals</h3>
            <p>Stay aligned to what matters — health, study, reflection, or routine.</p>
          </div>
          <div className="feature">
            <h3>Families</h3>
            <p>Share gentle reminders and encourage each other with simple check-ins.</p>
          </div>
          <div className="feature">
            <h3>Organizations</h3>
            <p>Coordinate scheduled messages across lines and time zones with ease.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
