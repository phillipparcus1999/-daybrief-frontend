// src/lib/config.js
// Global configuration for DayBrief

// Toggle this to true for launch (hides the beta banner).
export const IS_LIVE = false;

// Allow mock/demo auth flows pre-launch (if your AuthContext supports it)
export const MOCK_AUTH = true;

// Backend endpoints
export const API_BASE_URL = IS_LIVE
  ? "https://api.daybrief.io"
  : "http://localhost:8000";

export const ENDPOINTS = {
  signup: `${API_BASE_URL}/signup`,
  verify: `${API_BASE_URL}/verify`,
  status: `${API_BASE_URL}/status`,
};

export const SITE = {
  name: "DayBrief",
  slogan: "Your Day, Simplified.",
  domain: IS_LIVE ? "https://daybrief.io" : "https://daybrief-frontend.vercel.app",
  supportEmail: "support@daybrief.io",
  company: "DayBrief LLC",
  location: "United States",
};

// Brand tokens
export const COLORS = {
  primary: "#f97316",  // orange
  accent:  "#2563eb",  // blue
  bg:      "#0b1020",
  surface: "#1a2235",
  text:    "#e6ecff",
  muted:   "#9fb7ff",
};
