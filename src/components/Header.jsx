import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

export default function Header() {
  const { user, subscription, signOut } = useAuth();
  const nav = useNavigate();

  const goToTrial = () => {
    nav("/signup", { state: { plan: "pro", interval: "month" } });
  };

  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="brand">DayBrief</Link>

        <nav className="nav">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/pricing">Pricing</NavLink>

          {!user && (
            <>
              <NavLink to="/signin">Sign in</NavLink>
              <button className="cta" onClick={goToTrial}>Start free trial</button>
            </>
          )}

          {user && (
            <>
              <NavLink to="/dashboard">Dashboard</NavLink>
              <NavLink to="/lines">Lines</NavLink>
              <NavLink to="/account">Account</NavLink>
              {subscription?.plan_code === "org" && <NavLink to="/broadcasts">Broadcasts</NavLink>}
              <button onClick={signOut} style={{ marginLeft: 12 }}>Sign out</button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}


