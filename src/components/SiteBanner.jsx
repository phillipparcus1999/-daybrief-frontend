// src/components/SiteBanner.jsx
import React from "react";
import { IS_LIVE, SITE, COLORS } from "../lib/config.js";
import "./SiteBanner.css";

export default function SiteBanner() {
  if (IS_LIVE) return null; // hide banner when live

  return (
    <div className="site-banner">
      <span className="site-banner-dot"></span>
      <strong>{SITE.name} is in beta.</strong>&nbsp;
      Billing and live SMS sending are not yet active.&nbsp;
      <a href="/waitlist" className="site-banner-link">Join the waitlist</a> or{" "}
      <a href="mailto:support@daybrief.io" className="site-banner-link">contact support</a>.
    </div>
  );
}

