import React from 'react';
import SignupForm from './components/SignupForm';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>DayBrief</h1>
      </header>
      <main className="main">
        <section className="hero">
          <h2>What is DayBrief?</h2>
          <p>DayBrief is your personal daily companion for motivation and mindfulness. Receive customized SMS messages with motivational affirmations, reminders, or any custom content you choose, delivered at times that fit your schedule.</p>
        </section>
        <section className="differences">
          <h2>How We're Different</h2>
          <ul>
            <li><strong>Fully Customizable:</strong> Unlike generic apps, create your own messages and set exact delivery times.</li>
            <li><strong>Timezone Aware:</strong> Works across all time zones—get your brief at the right local time.</li>
            <li><strong>Personalized Experience:</strong> From affirmations to reminders, tailor it to your needs.</li>
            <li><strong>Privacy Focused:</strong> We only use your info for delivery, no ads or data sharing.</li>
            <li><strong>Reliable SMS Delivery:</strong> Direct to your phone, no app required.</li>
          </ul>
        </section>
        <section className="signup-section">
          <h2>Join DayBrief Today</h2>
          <SignupForm />
        </section>
      </main>
      <footer className="footer">
        <section className="about-us">
          <h2>About Us</h2>
          <p>DayBrief is brought to you by a small, family-oriented team passionate about helping people start their day with positivity. We believe in the power of small, consistent actions to create big changes. Founded with a focus on simplicity and personalization, we're here to make daily motivation accessible to everyone.</p>
        </section>
      </footer>
    </div>
  );
}

export default App;