// src/components/ProtectedPaidRoute.jsx
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import { IS_LIVE } from "../lib/config.js";

export default function ProtectedPaidRoute({ children }) {
  const { user, subscription, loading } = useAuth();
  const location = useLocation();
  if (loading) return null;
  if (!user) return <Navigate to="/signin" state={{ from: location }} replace />;

  const status = subscription?.status;
  const active = status === "active";

  if (IS_LIVE) {
    return active ? children : <Navigate to="/paywall" replace />;
  } else {
    // pre-live: allow trialing for demo
    return (active || status === "trialing") ? children : <Navigate to="/paywall" replace />;
  }
}
