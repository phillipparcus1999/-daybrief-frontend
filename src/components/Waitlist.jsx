import React from "react";
import Waitlist from "../components/Waitlist.jsx";

export default function WaitlistPage() {
  return (
    <main className="section-card" style={{ maxWidth: 760 }}>
      <h1>Join the waitlist</h1>
      <p className="section-subtitle">We’ll email you when DayBrief goes live.</p>
      <Waitlist />
    </main>
  );
}
