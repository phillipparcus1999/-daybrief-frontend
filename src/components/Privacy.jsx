import React from "react";

export default function Privacy() {
  return (
    <main className="section-card" style={{ maxWidth: 900 }}>
      <h1>Privacy Policy</h1>
      <p className="section-subtitle">Last updated: October 8, 2025</p>

      <h3>What we collect</h3>
      <ul>
        <li>Account info (email, name, password hash).</li>
        <li>Messaging configuration (times, time zone, optional custom messages).</li>
        <li>Technical data (logs, device/browser info) to operate and secure the Service.</li>
      </ul>

      <h3>How we use data</h3>
      <ul>
        <li>Deliver scheduled and custom messages you request.</li>
        <li>Operate, secure, and improve the Service.</li>
        <li>Transactional emails/SMS (e.g., account notices). Limited marketing with opt-out.</li>
      </ul>

      <h3>How we share</h3>
      <ul>
        <li>Service providers (e.g., hosting, SMS carrier) under contract and only as needed to provide DayBrief.</li>
        <li>Legal or safety requirements when required by law.</li>
        <li>Never sold. No third-party advertising networks.</li>
      </ul>

      <h3>Your choices</h3>
      <ul>
        <li>Access, update, or delete your data by contacting support@daybrief.io.</li>
        <li>Opt-out of marketing anytime. Transactional messages may still be sent.</li>
      </ul>

      <h3>Data retention & security</h3>
      <p>We retain data while your account is active and for a reasonable period thereafter for legal, accounting, and security purposes. We use industry-standard safeguards; no method is 100% secure.</p>

      <h3>Children</h3>
      <p>DayBrief is not directed to children under 13; do not sign up children without appropriate consent and compliance with applicable laws.</p>

      <h3>International users</h3>
      <p>Data may be processed in the United States. By using DayBrief you consent to processing and transfer as described here.</p>

      <h3>Changes</h3>
      <p>We may update this Policy; the “Last updated” date will change. Material changes will be highlighted.</p>

      <h3>Contact</h3>
      <p>Questions? Email <a href="mailto:support@daybrief.io">support@daybrief.io</a>.</p>
    </main>
  );
}
