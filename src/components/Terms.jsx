import React from "react";
import "../App.css";

export default function Terms() {
  const pdfUrl = "/legal/Terms_of_Service_DayBrief.pdf";
  return (
    <main className="section-card" style={{ maxWidth: 1000 }}>
      <h1 style={{ marginBottom: 8 }}>Terms of Service</h1>
      <p className="section-subtitle" style={{ marginBottom: 16 }}>
        Last updated: October 7, 2025
      </p>

      <div style={{ border: "1px solid var(--db-border)", borderRadius: 12, overflow: "hidden" }}>
        <object data={pdfUrl} type="application/pdf" width="100%" height="800px">
          <p style={{ padding: 16 }}>
            Can’t display the document?{" "}
            <a href={pdfUrl} target="_blank" rel="noreferrer">
              Download the Terms of Service (PDF)
            </a>
            .
          </p>
        </object>
      </div>
    </main>
  );
}
