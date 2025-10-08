import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function SignIn() {
  const { signIn } = useAuth();
  const nav = useNavigate();
  const { state } = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    try {
      await signIn(email, password);
      nav(state?.from?.pathname || "/dashboard", { replace: true });
    } catch (e) {
      alert("Sign-in failed.");
    }
  }

  return (
    <main className="section-card" style={{ maxWidth: 420 }}>
      <h1>Sign in</h1>
      <form onSubmit={onSubmit} className="signup-form">
        <div className="form-group">
          <label>Email</label>
          <input value={email} onChange={e => setEmail(e.target.value)} type="email" required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input value={password} onChange={e => setPassword(e.target.value)} type="password" required />
        </div>
        <button type="submit">Continue</button>
      </form>
    </main>
  );
}
