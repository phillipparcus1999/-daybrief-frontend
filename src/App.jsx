import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation, Link } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Home from "./components/Home";
import SignupForm from "./components/SignupForm";
import Contact from "./components/Contact";
import Terms from "./components/Terms";
import Privacy from "./components/Privacy";

function HashScroller() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    requestAnimationFrame(() => {
      if (hash) {
        const el = document.getElementById(hash.slice(1));
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <HashScroller />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/signup"
          element={
            <div className="section-card" style={{ maxWidth: 720 }}>
              <h2 style={{ marginBottom: 16 }}>Create Your DayBrief</h2>
              <p className="section-subtitle" style={{ marginBottom: 24 }}>
                Set your time(s), timezone, and up to two messages. We’ll handle the rest.
              </p>
              <SignupForm />
            </div>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>

      <footer className="footer">
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <nav style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginBottom: 8 }}>
            <Link to="/contact">Contact</Link>
            <Link to="/terms">Terms</Link>
            <Link to="/privacy">Privacy</Link>
          </nav>
          © {new Date().getFullYear()} DayBrief
        </div>
      </footer>
    </BrowserRouter>
  );
}
