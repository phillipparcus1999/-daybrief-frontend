import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Waitlist from "../components/Waitlist.jsx";
// ...top of file

// ...inside Home component, add this section near the bottom:
<section className="section-card" style={{ marginTop: 16 }}>
  <h2 style={{ marginTop: 0 }}>Get launch updates</h2>
  <p className="section-subtitle">We’re not live yet—leave your email and we’ll let you know.</p>
  <Waitlist compact />
</section>

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
