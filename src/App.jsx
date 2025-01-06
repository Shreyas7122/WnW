import React, { useState, useEffect } from 'react';
import './App.css';
import truckImage from './assets/truck.svg';

function AuthPage() {
  const [isSignIn, setIsSignIn] = useState(false); // State to toggle between forms
  const [animateFields, setAnimateFields] = useState(false); // State to trigger animation on fields

  const toggleForm = () => {
    setIsSignIn((prev) => !prev); // Toggle between Sign Up and Log In
    setAnimateFields(true); // Trigger animation when toggling
    setTimeout(() => setAnimateFields(false), 500); // Reset animation after 500ms
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Trigger animation even on form submission
    setAnimateFields(true);
    setTimeout(() => setAnimateFields(false), 500);
  };

  return (
    <div className="auth-container">
      <div className="login-container">
        <div className="content-wrapper">
          <div className="form-container">
            <h2>{isSignIn ? 'Sign Up' : 'Sign In'}</h2>
            <p className="journey-message">
              {isSignIn
                ? "Create your account to start your jewelry's journey."
                : 'Your jewelry’s journey awaits – log in to follow its path.'}
            </p>
            <form onSubmit={handleSubmit}>
              {isSignIn && (
                <input
                  type="text"
                  placeholder="Name"
                  className={animateFields ? 'slide-in' : ''}
                />
              )}
              <input
                type="email"
                placeholder="Email"
                className={animateFields ? 'slide-in' : ''}
              />
              <input
                type="password"
                placeholder="Password"
                className={animateFields ? 'slide-in' : ''}
              />
              <button type="submit">{isSignIn ? 'Sign Up' : 'Sign In'}</button>
            </form>
            <button className="toggle-button" onClick={toggleForm}>
              {isSignIn ? 'Already have an account? Log In' : 'New here? Sign Up'}
            </button>
          </div>
          <img src={truckImage} alt="Delivery Truck" className="truck-image" />
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
