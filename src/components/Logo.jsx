import React from "react";

export default function Logo({ size = 28, withWordmark = true, animated = false }) {
  const src = animated ? "/brand/daybrief-logo-animated.svg" : "/brand/daybrief-logo.svg";

  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
      <img
        src={src}
        alt="DayBrief logo"
        width={size}
        height={size}
        style={{ display: "block" }}
      />
      {withWordmark && (
        <span
          style={{
            fontWeight: 900,
            letterSpacing: 0.4,
            color: "var(--text)",
            fontSize: Math.max(16, Math.round(size * 0.9)),
            lineHeight: 1,
          }}
        >
          DayBrief
        </span>
      )}
    </div>
  );
}
