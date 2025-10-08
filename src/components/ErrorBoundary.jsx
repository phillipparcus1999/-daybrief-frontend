// src/components/ErrorBoundary.jsx
import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, detail: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, detail: error?.message || String(error) };
  }
  componentDidCatch(error, info) {
    // Optional: send to your logger later
    console.error("App crashed:", error, info);
  }
  handleReload = () => {
    this.setState({ hasError: false, detail: null });
    window.location.assign("/");
  };
  render() {
    if (!this.state.hasError) return this.props.children;
    return (
      <main className="section-card" style={{ maxWidth: 820, textAlign: "center" }}>
        <h1 style={{ marginTop: 0 }}>Something went wrong</h1>
        <p className="section-subtitle">This is a preview build, so hiccups can happen.</p>
        <pre style={{
          textAlign: "left",
          background: "#141c30",
          border: "1px solid #1f2a44",
          borderRadius: 12,
          padding: 12,
          color: "#aab6d3",
          overflow: "auto"
        }}>{this.state.detail}</pre>
        <div style={{ marginTop: 16 }}>
          <button className="cta-button" onClick={this.handleReload}>Back to Home</button>
        </div>
      </main>
    );
  }
}
