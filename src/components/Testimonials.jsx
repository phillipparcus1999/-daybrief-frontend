import React, { useEffect } from "react";

/** Lightweight meta setter (no extra deps) */
function usePageMeta({ title, description, url = "https://daybrief.io/testimonials", image = "/favicon-512.png" }) {
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

const QUOTES = [
  {
    name: "Alex",
    role: "Founder, Habit Studio",
    text:
      "The 8am ping keeps me moving — short, sweet, done. It’s the only reminder I actually notice without resenting.",
  },
  {
    name: "Priya",
    role: "PM, Remote Team",
    text:
      "Our group check-in hits both coasts at the right times. Team feels more aligned without adding more meetings.",
  },
  {
    name: "Marco",
    role: "Parent of 2",
    text:
      "A simple nudge to stretch and hydrate with the kids. We do it together, no app nagging us to log anything.",
  },
  {
    name: "Jordan",
    role: "Grad Student",
    text:
      "I set a morning and evening reminder for my study sprints. The consistency has changed my results.",
  },
];

export default function Testimonials() {
  usePageMeta({
    title: "DayBrief Testimonials | Small Nudges, Big Momentum",
    description:
      "See how people, families, and teams use DayBrief’s simple SMS check-ins to stay consistent and focused.",
    url: "https://daybrief.io/testimonials",
  });

  return (
    <main className="container">
      <section className="section-card" style={{ marginTop: 20 }}>
        <h1>What People Are Saying</h1>
        <p className="section-subtitle">Small nudges, big momentum.</p>

        <div className="testimonials-grid" style={{ marginTop: 14 }}>
          {QUOTES.map((q, i) => (
            <blockquote key={i} className="testimonial" style={{ display: "grid", gap: 10 }}>
              <p style={{ margin: 0, fontStyle: "italic" }}>“{q.text}”</p>
              <cite style={{ fontWeight: 700, color: "var(--accent)" }}>
                — {q.name}{q.role ? `, ${q.role}` : ""}
              </cite>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="section-card">
        <h2>Why it works</h2>
        <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.7 }}>
          <li><strong>Low friction:</strong> no app to open — messages arrive where you already are.</li>
          <li><strong>Right moments:</strong> you pick the times when a nudge actually helps.</li>
          <li><strong>Personal:</strong> your own words or our daily library — always brief and clear.</li>
        </ul>
      </section>
    </main>
  );
}
