// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container" style={{display:"grid", gap:10}}>
        <div>© {new Date().getFullYear()} DayBrief. All rights reserved.</div>
        <div style={{display:"flex", gap:14, justifyContent:"center", flexWrap:"wrap"}}>
          <Link to="/terms">Terms</Link>
          <Link to="/privacy">Privacy</Link>
          <Link to="/contact">Contact</Link>
          <a href="mailto:support@daybrief.io">support@daybrief.io</a>
        </div>
      </div>
    </footer>
  );
}
