import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // Placeholder – later post to backend or open mailto
    window.location.href = `mailto:support@daybrief.io?subject=Support%20Request%20from%20${encodeURIComponent(
      form.name || "User"
    )}&body=${encodeURIComponent(form.message)}%0D%0A%0D%0AReply to: ${encodeURIComponent(form.email)}`;
  };

  return (
    <main className="section-card" style={{ maxWidth: 760 }}>
      <h1>Contact us</h1>
      <p className="section-subtitle">
        Send us a note at <a href="mailto:support@daybrief.io">support@daybrief.io</a> or use the form below.
      </p>

      <form onSubmit={onSubmit} className="signup-form">
        <div className="form-row">
          <div className="form-group">
            <label>Name</label>
            <input name="name" value={form.name} onChange={onChange} type="text" placeholder="Your name" />
          </div>
          <div className="form-group">
            <label>Email *</label>
            <input name="email" value={form.email} onChange={onChange} type="email" required placeholder="you@example.com" />
          </div>
        </div>
        <div className="form-group">
          <label>Message *</label>
          <textarea name="message" value={form.message} onChange={onChange} rows="4" required placeholder="How can we help?" />
        </div>
        <button type="submit" className="cta-button">Send</button>
      </form>
    </main>
  );
}
