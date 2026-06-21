import { createRoot } from "react-dom/client";
import { Component, ReactNode } from "react";
import App from "./App.tsx";
import "./index.css";

class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif', padding: '20px', textAlign: 'center', backgroundColor: '#fff' }}>
          <img src="/logo.webp" alt="Healthyday" style={{ height: 40, marginBottom: 24 }} />
          <h2 style={{ color: '#0D468B', marginBottom: 12 }}>Something went wrong</h2>
          <p style={{ color: '#666', marginBottom: 24 }}>Please refresh the page to try again.</p>
          <button onClick={() => window.location.reload()} style={{ background: '#ffb129', border: 'none', borderRadius: 50, padding: '12px 32px', fontWeight: 700, fontSize: 16, cursor: 'pointer' }}>
            Refresh Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

createRoot(document.getElementById("root")!).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
