// src/pages/OrgBroadcast.jsx
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import UpgradePrompt from "../components/UpgradePrompt.jsx";

export default function OrgBroadcast() {
  const { subscription } = useAuth();
  const plan = subscription?.plan_code;

  if (plan !== "org") {
    return <UpgradePrompt requiredPlan="org" copy="Organization broadcasts require the Organization plan." />;
  }

  const [payload, setPayload] = useState({ title: "", message: "", when: "" });
  const handleChange = (e) => setPayload((p) => ({ ...p, [e.target.name]: e.target.value }));
  const submit = (e) => {
    e.preventDefault();
    if (!payload.title || !payload.message) return alert("Title and message required.");
    alert("In the live app, this will schedule a coordinated broadcast to all org lines.");
    setPayload({ title: "", message: "", when: "" });
  };

  return (
    <main className="section-card" style={{ maxWidth: 900 }}>
      <h1>Organization Broadcasts</h1>
      <p className="section-subtitle">Coordinate messages across your organization’s lines.</p>

      <form onSubmit={submit} className="signup-form">
        <div className="form-group">
          <label>Title *</label>
          <input name="title" value={payload.title} onChange={handleChange} placeholder="e.g., Friday practice reminder" required />
        </div>
        <div className="form-group">
          <label>Message *</label>
          <textarea name="message" value={payload.message} onChange={handleChange} rows="3" placeholder="Write the broadcast message…" required />
        </div>
        <div className="form-group">
          <label>Send at (optional)</label>
          <input name="when" value={payload.when} onChange={handleChange} placeholder="e.g., 10/15/2025 4:00 PM" />
          <small className="help-text">Leave blank to send immediately (in the live app).</small>
        </div>
        <button type="submit" className="cta-button">Schedule broadcast</button>
      </form>
    </main>
  );
}

