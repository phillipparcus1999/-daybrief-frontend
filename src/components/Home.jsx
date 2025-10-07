/* =============================
   GLOBAL BRAND THEME
============================= */
:root {
  --brand-bg: #0b1020;
  --brand-surface: #1a2235;
  --brand-surface-2: #232c44;
  --brand-text: #eef2ff;
  --brand-muted: #c7d2fe;
  --brand-accent: #22d3ee;
  --brand-orange: #f97316;
  --brand-orange-dark: #ea580c;
  --brand-blue-start: #1e3a8a;
  --brand-blue-end: #3b82f6;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body,
#root {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: var(--brand-bg);
  color: var(--brand-text);
  scroll-behavior: smooth;
}

/* =============================
   HERO SECTION
============================= */
.hero {
  background: linear-gradient(135deg, var(--brand-blue-start), var(--brand-blue-end));
  color: #fff;
  text-align: center;
  padding: 120px 20px;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.2);
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
}

.brand {
  font-size: clamp(2.8rem, 5vw, 4.5rem);
  font-weight: 900;
  letter-spacing: 1px;
  margin-bottom: 20px;
  text-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
}

.tagline {
  font-size: 1.5rem;
  opacity: 0.9;
  margin-bottom: 40px;
}

.cta-button {
  display: inline-block;
  background: var(--brand-orange);
  color: #fff;
  padding: 16px 36px;
  border-radius: 50px;
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.3);
}

.cta-button:hover {
  background: var(--brand-orange-dark);
  transform: translateY(-3px);
  box-shadow: 0px 8px 25px rgba(0, 0, 0, 0.4);
}

/* =============================
   FEATURES SECTION
============================= */
.features-section {
  max-width: 1200px;
  margin: 100px auto;
  padding: 60px 20px;
  background: var(--brand-surface);
  border-radius: 14px;
  text-align: center;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.4);
}

.features-section h2 {
  font-size: 2.8rem;
  margin-bottom: 50px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
}

.feature {
  background: var(--brand-surface-2);
  padding: 30px;
  border-radius: 14px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
  text-align: center;
}

.feature:hover {
  transform: translateY(-5px);
}

.feature-icon {
  font-size: 3rem;
  color: var(--brand-accent);
  margin-bottom: 20px;
}

.feature h3 {
  font-size: 1.8rem;
  margin-bottom: 15px;
}

.feature p {
  font-size: 1.1rem;
  opacity: 0.85;
  line-height: 1.6;
}

/* =============================
   HOW IT WORKS
============================= */
#how-title {
  font-size: 2.8rem;
  margin-bottom: 40px;
}

.features-section .feature:nth-child(1) .feature-icon { color: #38bdf8; }
.features-section .feature:nth-child(2) .feature-icon { color: #facc15; }
.features-section .feature:nth-child(3) .feature-icon { color: #34d399; }

/* =============================
   TESTIMONIALS
============================= */
.testimonials-section {
  background: var(--brand-surface);
  padding: 80px 20px;
  border-radius: 14px;
  max-width: 1200px;
  margin: 100px auto;
  text-align: center;
}

.testimonials-section h2 {
  font-size: 2.8rem;
  margin-bottom: 50px;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.testimonial {
  background: var(--brand-surface-2);
  padding: 30px;
  border-radius: 14px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.2);
  font-size: 1.1rem;
  line-height: 1.6;
  transition: transform 0.3s ease;
}

.testimonial:hover {
  transform: translateY(-5px);
}

.testimonial p {
  font-style: italic;
}

.testimonial cite {
  display: block;
  margin-top: 15px;
  font-weight: bold;
  color: var(--brand-orange);
}

/* =============================
   ABOUT SECTION
============================= */
.about {
  max-width: 1000px;
  margin: 100px auto;
  padding: 60px 20px;
  background: var(--brand-surface);
  border-radius: 14px;
  text-align: center;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.4);
}

.about h2 {
  font-size: 2.8rem;
  margin-bottom: 30px;
}

.about p {
  font-size: 1.2rem;
  line-height: 1.8;
  color: var(--brand-muted);
  max-width: 800px;
  margin: 0 auto 20px auto;
}

.about .cta-button {
  margin-top: 30px;
}

/* =============================
   FOOTER
============================= */
.footer {
  background: var(--brand-blue-start);
  text-align: center;
  padding: 30px;
  font-size: 1rem;
  color: #ffffff;
  margin-top: 100px;
  letter-spacing: 0.5px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

/* =============================
   RESPONSIVE DESIGN
============================= */
@media (max-width: 768px) {
  .brand {
    font-size: 2.8rem;
  }

  .tagline {
    font-size: 1.2rem;
  }

  .cta-button {
    padding: 12px 24px;
    font-size: 1rem;
  }

  .features-grid,
  .testimonials-grid {
    grid-template-columns: 1fr;
  }

  .features-section h2,
  .testimonials-section h2,
  .about h2 {
    font-size: 2.2rem;
  }
}
