import React, { useState } from 'react';

const FormContainer = ({ isSignIn, onSubmit, toggleForm }) => {
  const [animate, setAnimate] = useState(false);

  const handleToggle = () => {
    setAnimate(true); // Trigger animation when toggling
    setTimeout(() => setAnimate(false), 500); // Reset animation state after animation duration
    toggleForm(); // Toggle between Sign Up and Log In
  };

  return (
    <div className="form-container">
      <h2>{isSignIn ? 'Sign Up' : 'Log In'}</h2>
      <p className="journey-message">
        {isSignIn
          ? "Create your account to start your jewelry's journey."
          : 'Your jewelry’s journey awaits – log in to follow its path.'}
      </p>
      <form onSubmit={onSubmit}>
        {isSignIn && (
          <input
            type="text"
            placeholder="Name"
            className={animate ? 'slide-in' : ''}
          />
        )}
        <input
          type="email"
          placeholder="Email"
          className={animate ? 'slide-in' : ''}
        />
        <input
          type="password"
          placeholder="Password"
          className={animate ? 'slide-in' : ''}
        />
        {isSignIn && (
          <input
            type="re-enter-password"
            placeholder="re-enter-password"
            className={animate ? 'slide-in' : ''}
          />
        )}
        <button type="submit">{isSignIn ? 'Sign Up' : 'Sign In'}</button>
      </form>
      <button className="toggle-button" onClick={handleToggle}>
        {isSignIn ? 'Already have an account? Log In' : 'New here? Sign Up'}
      </button>
    </div>
  );
};

export default FormContainer;
