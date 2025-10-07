import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="brand">DayBrief</h1>
          <p className="tagline">Start your day with motivation and positivity</p>
          <Link to="/signup" className="cta-button">Sign Up Now</Link>
        </div>
      </section>

      <section className="about">
        <h2>What is DayBrief?</h2>
        <p>
          DayBrief delivers personalized motivational messages directly to your phone,
          tailored to your schedule and preferences. Whether you need a morning boost
          or an afternoon pick-me-up, we've got you covered.
        </p>
      </section>

      <section className="differences">
        <h2>Why Choose DayBrief?</h2>
        <div className="features">
          <div className="feature">
            <h3>Personalized Timing</h3>
            <p>Receive messages at times that work best for you, in your local timezone.</p>
          </div>
          <div className="feature">
            <h3>Custom Messages</h3>
            <p>Customize your own motivational messages or choose from our curated collection.</p>
          </div>
          <div className="feature">
            <h3>Flexible Frequency</h3>
            <p>Get 1 or 2 messages per day, depending on your needs.</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2024 DayBrief. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;