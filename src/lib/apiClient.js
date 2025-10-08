// src/lib/apiClient.js
const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:8000";

// Keep true until your backend /auth endpoints are ready
const MOCK_AUTH = true;

export function setAuthToken(token) {
  if (token) localStorage.setItem("db_token", token);
  else localStorage.removeItem("db_token");
}

export function getAuthToken() {
  return localStorage.getItem("db_token");
}

export async function api(path, { method = "GET", body, headers } = {}) {
  if (MOCK_AUTH) {
    if (path === "/auth/login" && method === "POST") {
      return {
        token: "mock.token",
        user: { id: "u_123", email: "demo@daybrief.io", display_name: "Demo" },
        subscription: { plan_code: "pro", status: "active", billing_interval: "month" },
      };
    }
    if (path === "/auth/me" && method === "GET") {
      const token = getAuthToken();
      if (!token) throw new Error("Not authed");
      return {
        user: { id: "u_123", email: "demo@daybrief.io", display_name: "Demo" },
        subscription: { plan_code: "pro", status: "active", billing_interval: "month" },
      };
    }
  }

  const token = getAuthToken();
  const res = await fetch(`${API_BASE}${path}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
    credentials: "include",
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(text || `Request failed: ${res.status}`);
  }
  return res.status === 204 ? null : res.json();
}
