// src/components/SiteBanner.jsx
import React from "react";
import { IS_LIVE } from "../lib/config.js";

export default function SiteBanner() {
  if (IS_LIVE) return null;
  return (
    <div
      style={{
        background: "#1a2235",
        color: "#e6ecff",
        borderBottom: "1px solid #1f2a44",
        textAlign: "center",
        fontWeight: 600,
        padding: "8px 12px",
      }}
    >
      Preview mode · Billing not enabled · For demo only
    </div>
  );
}
