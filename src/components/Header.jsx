// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        {/* Brand (inline SVG logo; no image files needed) */}
        <Link to="/" className="brandmark" aria-label="DayBrief Home">
          <svg
            width="36"
            height="36"
            viewBox="0 0 64 64"
            role="img"
            aria-label="DayBrief logo"
            className="brandmark-icon"
          >
            <defs>
              <linearGradient id="dbSun" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="#FFB347" />
                <stop offset="100%" stopColor="#FF8A00" />
              </linearGradient>
            </defs>
            {/* chat bubble */}
            <path
              d="M10 14c0-3.314 2.686-6 6-6h32c3.314 0 6 2.686 6 6v22c0 3.314-2.686 6-6 6H28l-10.5 8.5c-1.4 1.13-3.5.134-3.5-1.7V42c-2.878 0-4-2.686-4-6V14z"
              fill="#0F172A"
            />
            {/* rising sun */}
            <path d="M16 30a16 16 0 1 1 32 0H16z" fill="url(#dbSun)" />
            {/* rays */}
            <rect x="31" y="10" width="2" height="6" rx="1" fill="#FFD089" />
            <rect
              x="20"
              y="13"
              width="2"
              height="6"
              rx="1"
              transform="rotate(-40 21 16)"
              fill="#FFD089"
            />
            <rect
              x="41"
              y="13"
              width="2"
              height="6"
              rx="1"
              transform="rotate(40 42 16)"
              fill="#FFD089"
            />
            {/* check */}
            <path
              d="M24 33l6 6 14-14"
              fill="none"
              stroke="#22D3EE"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="brandmark-word">
            <strong>Day</strong>
            <span className="word-weak">Brief</span>
          </span>
        </Link>

        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <Link to="/signup" className="cta-nav">
              Get Started
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
