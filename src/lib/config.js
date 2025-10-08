// src/lib/config.js
// ============================================================
// Global configuration for DayBrief
// ============================================================

// Whether the platform is live (production) or still in staging/dev.
// When false, "beta" banners appear and trial access is allowed.
export const IS_LIVE = false;

// Whether to enable fake login during pre-launch for testing UX.
export const MOCK_AUTH = true;

// FastAPI backend (local or cloud)
export const API_BASE_URL = IS_LIVE
  ? "https://api.daybrief.io"          // your production endpoint (future)
  : "http://localhost:8000";           // your local FastAPI dev server

// Twilio webhook or backend endpoints for signup and message handling
export const ENDPOINTS = {
  signup: `${API_BASE_URL}/signup`,
  verify: `${API_BASE_URL}/verify`,
  status: `${API_BASE_URL}/status`,
};

// Basic app metadata (for <Head> tags, About page, etc.)
export const SITE = {
  name: "DayBrief",
  slogan: "Your Day, Simplified.",
  supportEmail: "support@daybrief.io",
  domain: IS_LIVE ? "https://daybrief.io" : "https://daybrief-frontend.vercel.app",
  company: "DayBrief LLC",
  location: "United States", // default jurisdiction for terms/privacy
};

// Colors used across the app (optional design tokens)
export const COLORS = {
  primary: "#f97316",   // Orange
  accent: "#2563eb",    // Blue
  background: "#0b1020",
  surface: "#1a2235",
  text: "#e6ecff",
  muted: "#9fb7ff",
};

// Simple helper to log only in dev mode
export const devLog = (...args) => {
  if (!IS_LIVE) console.log("[DEV]", ...args);
};
