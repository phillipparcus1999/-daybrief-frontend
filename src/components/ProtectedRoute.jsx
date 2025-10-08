// src/components/ProtectedRoute.jsx
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

export default function ProtectedRoute({ children, requirePlan }) {
  const { user, subscription, loading } = useAuth();
  const location = useLocation();
  if (loading) return null;
  if (!user) return <Navigate to="/signin" state={{ from: location }} replace />;
  if (requirePlan && subscription?.plan_code !== requirePlan) {
    return <Navigate to="/pricing" replace />;
  }
  return children;
}
