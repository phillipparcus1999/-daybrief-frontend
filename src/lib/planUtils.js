// src/lib/planUtils.js
export const PLAN_LABELS = {
  base: "Base",
  pro: "Pro",
  family: "Family",
  org: "Organization",
};

export function planName(code) {
  return PLAN_LABELS[code] || "—";
}

export function planSupportsTwoMessages(code) {
  return code === "pro" || code === "family" || code === "org";
}

export function planLineLimit(code) {
  if (code === "family") return 3;
  if (code === "org") return 10;
  return 1;
}

export function daysLeft(trial_end_iso) {
  if (!trial_end_iso) return null;
  const end = new Date(trial_end_iso).getTime();
  const now = Date.now();
  const diff = Math.ceil((end - now) / (1000 * 60 * 60 * 24));
  return diff < 0 ? 0 : diff;
}
