import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="brand">DayBrief</h1>
          <p className="tagline">Receive personalized daily motivational messages via SMS</p>
          <Link to="/signup" className="cta-button">Start Your Free Trial</Link>
        </div>
      </section>

      <section className="about">
        <h2>Why DayBrief?</h2>
        <p>
          Transform your mornings with positive affirmations delivered right to your phone.
          Choose your schedule, customize your messages, and start each day inspired.
        </p>
      </section>

      <section className="features-section">
        <h2>Key Features</h2>
        <div className="features-grid">
          <div className="feature">
            <div className="feature-icon">⏰</div>
            <h3>Flexible Timing</h3>
            <p>Set messages for any time in your timezone, 1 or 2 per day.</p>
          </div>
          <div className="feature">
            <div className="feature-icon">💬</div>
            <h3>Custom Messages</h3>
            <p>Personalize your own motivational quotes or use our curated collection.</p>
          </div>
          <div className="feature">
            <div className="feature-icon">📱</div>
            <h3>SMS Delivery</h3>
            <p>Reliable text messages directly to your phone, no app required.</p>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <h2>What Users Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial">
            <p>"DayBrief keeps me motivated every morning. The personalized messages are spot on!"</p>
            <cite>- Alex J.</cite>
          </div>
          <div className="testimonial">
            <p>"Love the flexibility. I get my boost exactly when I need it."</p>
            <cite>- Sarah M.</cite>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2024 DayBrief. Built with ❤️ for daily inspiration.</p>
      </footer>
    </div>
  );
};

export default Home;