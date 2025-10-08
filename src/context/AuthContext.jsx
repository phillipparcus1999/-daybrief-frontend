// src/context/AuthContext.jsx
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { MOCK_AUTH } from "../lib/config.js";

// Storage keys
const LS_USER = "db_user";
const LS_SUB = "db_subscription";
const LS_TOKEN = "db_token";

// Default mock user/subscription for pre-live demo
const DEFAULT_USER = { id: "u_demo", email: "demo@daybrief.io", display_name: "Demo User" };
const DEFAULT_SUB = { plan_code: "pro", billing_interval: "month", status: "trialing", trial_end: addDaysISO(14) };

function addDaysISO(days) {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString();
}

const AuthCtx = createContext(null);

export function useAuth() {
  return useContext(AuthCtx);
}

export default function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(localStorage.getItem(LS_TOKEN) || null);
  const [user, setUser] = useState(() => {
    const raw = localStorage.getItem(LS_USER);
    return raw ? JSON.parse(raw) : null;
  });
  const [subscription, setSubscription] = useState(() => {
    const raw = localStorage.getItem(LS_SUB);
    return raw ? JSON.parse(raw) : null;
  });

  // persist
  useEffect(() => {
    if (user) localStorage.setItem(LS_USER, JSON.stringify(user));
    else localStorage.removeItem(LS_USER);
  }, [user]);

  useEffect(() => {
    if (subscription) localStorage.setItem(LS_SUB, JSON.stringify(subscription));
    else localStorage.removeItem(LS_SUB);
  }, [subscription]);

  useEffect(() => {
    if (token) localStorage.setItem(LS_TOKEN, token);
    else localStorage.removeItem(LS_TOKEN);
  }, [token]);

  // initial load (mock mode gives you an instant session)
  useEffect(() => {
    if (MOCK_AUTH) {
      if (!user || !subscription || !token) {
        setUser(DEFAULT_USER);
        setSubscription(DEFAULT_SUB);
        setToken("mock.token");
      }
      setLoading(false);
      return;
    }
    // Real mode (later): fetch /auth/me here
    setLoading(false);
  }, []); // eslint-disable-line

  // ------- Auth actions -------
  const signIn = async (email, password) => {
    if (MOCK_AUTH) {
      setUser({ ...DEFAULT_USER, email });
      setSubscription(DEFAULT_SUB);
      setToken("mock.token");
      return;
    }
    // TODO: real POST /auth/login
  };

  const signOut = () => {
    setUser(null);
    setSubscription(null);
    setToken(null);
  };

  // ------- Plan helpers -------
  const setPlan = ({ plan_code, billing_interval, status = "trialing", trial_end }) => {
    setSubscription((prev) => ({
      ...(prev || {}),
      plan_code,
      billing_interval,
      status,
      trial_end: trial_end || prev?.trial_end || addDaysISO(14),
    }));
  };

  const setBillingInterval = (interval) => {
    setSubscription((prev) => ({ ...(prev || {}), billing_interval: interval || "month" }));
  };

  const value = useMemo(
    () => ({
      loading,
      token,
      user,
      subscription,
      signIn,
      signOut,
      setPlan,
      setBillingInterval,
    }),
    [loading, token, user, subscription]
  );

  return <AuthCtx.Provider value={value}>{children}</AuthCtx.Provider>;
}
