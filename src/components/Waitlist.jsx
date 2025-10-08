import React, { useState } from "react";

export default function Waitlist({ compact = false }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function submit(e) {
    e.preventDefault();
    const subject = "DayBrief Waitlist";
    const bodyLines = [
      `Name: ${name || "(not provided)"}`,
      `Email: ${email || "(not provided)"}`,
      "",
      "Please notify me when DayBrief launches.",
    ];
    const mailto = `mailto:support@daybrief.io?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
    window.location.href = mailto;
  }

  return (
    <form onSubmit={submit} className="signup-form" style={{ gap: compact ? 8 : 12 }}>
      <div className={compact ? "form-row" : ""} style={compact ? { gap: 8 } : undefined}>
        <div className="form-group">
          <label>Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Your name" />
        </div>
        <div className="form-group">
          <label>Email *</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="you@example.com" required />
        </div>
      </div>
      <button type="submit" className="cta-button">Join the waitlist</button>
      {!compact && <small className="help-text">We’ll only email you about launch and key updates.</small>}
    </form>
  );
}
