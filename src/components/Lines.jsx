// src/pages/Lines.jsx
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { planLineLimit, planSupportsTwoMessages } from "../lib/planUtils.js";
import UpgradePrompt from "../components/UpgradePrompt.jsx";

export default function Lines() {
  const { subscription } = useAuth();
  const plan = subscription?.plan_code || "base";
  const cap = planLineLimit(plan);
  const two = planSupportsTwoMessages(plan);

  // If user tries to exceed base plan capability, we’ll show a gentle gate in-line.
  const [lines, setLines] = useState([]);
  const [newLine, setNewLine] = useState({ label: "", phone: "" });
  const overCap = lines.length >= cap;

  const addLine = (e) => {
    e.preventDefault();
    if (!newLine.label || !newLine.phone) return alert("Label and phone required.");
    if (overCap) return;
    setLines((prev) => [...prev, { ...newLine, id: crypto.randomUUID() }]);
    setNewLine({ label: "", phone: "" });
  };

  const removeLine = (id) => setLines((prev) => prev.filter((l) => l.id !== id));

  return (
    <main className="section-card" style={{ maxWidth: 900 }}>
      <h1>Lines</h1>
      <p className="section-subtitle">Add the phone numbers you send DayBrief messages to.</p>

      <div className="mini-card" style={{ marginBottom: 14 }}>
        <div>Plan limit: <b>{cap}</b> line{cap === 1 ? "" : "s"} · {two ? "2" : "1"} message{two ? "s" : ""} per day</div>
      </div>

      <form onSubmit={addLine} className="signup-form" style={{ marginBottom: 16 }}>
        <div className="form-row">
          <div className="form-group">
            <label>Label *</label>
            <input
              type="text"
              value={newLine.label}
              onChange={(e) => setNewLine({ ...newLine, label: e.target.value })}
              placeholder="e.g., My phone, Spouse, Teen"
              required
            />
          </div>
          <div className="form-group">
            <label>Phone *</label>
            <input
              type="tel"
              value={newLine.phone}
              onChange={(e) => setNewLine({ ...newLine, phone: e.target.value })}
              placeholder="e.g., 2125551234"
              required
            />
          </div>
        </div>
        <button type="submit" className="cta-button" disabled={overCap}>
          {overCap ? "Plan limit reached" : "Add line"}
        </button>
      </form>

      {overCap && plan !== "org" && (
        <UpgradePrompt
          requiredPlan={cap === 1 ? "family" : "org"}
          copy={cap === 1 ? "Add more than 1 line with the Family plan." : "Add up to 10 lines with the Organization plan."}
        />
      )}

      {lines.length === 0 ? (
        <div style={{ padding: 14, border: "1px dashed #1f2a44", borderRadius: 12, color: "#aab6d3" }}>
          No lines yet. Add your first line above.
        </div>
      ) : (
        <div className="feature">
          <h3>Saved lines</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {lines.map((l) => (
              <li
                key={l.id}
                className="mini-card"
                style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}
              >
                <div>
                  <div style={{ fontWeight: 700 }}>{l.label}</div>
                  <div style={{ color: "#aab6d3" }}>{l.phone}</div>
                </div>
                <button onClick={() => removeLine(l.id)} style={{ background: "#1a2235" }}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}
