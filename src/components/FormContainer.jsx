// src/components/FormContainer.jsx
import React from 'react';

const FormContainer = ({ isSignIn, onSubmit, toggleForm }) => {
  return (
    <div className="form-container">
      <h2>{isSignIn ? 'Sign In' : 'Log In'}</h2>
      <p className="journey-message">
        {isSignIn
          ? "Create your account to start your jewelry's journey."
          : 'Your jewelry’s journey awaits – log in to follow its path.'}
      </p>
      <form onSubmit={onSubmit}>
        {isSignIn && <input type="text" placeholder="Name" />}
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">{isSignIn ? 'Sign Up' : 'Sign In'}</button>
      </form>
      <button className="toggle-button" onClick={toggleForm}>
        {isSignIn ? 'Already have an account? Log In' : 'New here? Sign Up'}
      </button>
    </div>
  );
};

export default FormContainer;
