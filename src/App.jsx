// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";          // or ./pages/Home if you prefer
import SignupForm from "./components/SignupForm";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
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
      </Routes>
      <footer className="footer">© {new Date().getFullYear()} DayBrief</footer>
    </BrowserRouter>
  );
}
