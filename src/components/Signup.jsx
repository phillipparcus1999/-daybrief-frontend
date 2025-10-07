import React from 'react';
import { Link } from 'react-router-dom';
import SignupForm from './SignupForm';

const Signup = () => {
  return (
    <div className="signup-page">
      <header className="signup-header">
        <Link to="/" className="back-link">← Back to Home</Link>
        <h1>DayBrief Signup</h1>
        <p>Sign up to receive 1-2 daily motivational text messages at times you choose.</p>
      </header>
      <main className="signup-main">
        <SignupForm />
      </main>
    </div>
  );
};

export default Signup;
