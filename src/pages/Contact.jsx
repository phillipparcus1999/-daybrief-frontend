import React from "react";
import "../App.css";

export default function Contact() {
  return (
    <main className="section-card" style={{ maxWidth: 720 }}>
      <h1 style={{ marginBottom: 8 }}>Contact Us</h1>
      <p className="section-subtitle" style={{ marginBottom: 24 }}>
        We’re here to help. Expect a reply within 1–2 business days.
      </p>

      <div className="feature" style={{ padding: 16 }}>
        <p style={{ margin: 0, lineHeight: 1.8 }}>
          Email:{" "}
          <a href="mailto:support@daybrief.io" style={{ fontWeight: 700 }}>
            support@daybrief.io
          </a>
          <br />
          For account or billing questions, please include the phone number you used to sign up.
        </p>
      </div>
    </main>
  );
}
