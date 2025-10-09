import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="brand">DayBrief</Link>
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


