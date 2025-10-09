import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo.jsx"; // <-- make sure this file exists (see notes below)

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        {/* Brand */}
        <Link to="/" className="brand" aria-label="DayBrief Home">
          {/* Animated if you want: <Logo size={28} withWordmark animated /> */}
          <Logo size={28} withWordmark />
        </Link>

        {/* Nav */}
        <nav className="nav">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/pricing">Pricing</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/signin" className="secondary-cta">Sign in</NavLink>
          <NavLink to="/signup" className="cta-button">Start free trial</NavLink>
          
          

        </nav>
      </div>
    </header>
  );
}

