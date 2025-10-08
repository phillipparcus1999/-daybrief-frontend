import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="section-card" style={{ maxWidth: 700, textAlign: "center" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: 6 }}>Page not found</h1>
      <p className="section-subtitle">The page you’re looking for doesn’t exist or has moved.</p>
      <div style={{ marginTop: 18 }}>
        <Link to="/" className="cta-button" style={{ textDecoration: "none" }}>
          Back to home
        </Link>
      </div>
    </main>
  );
}
