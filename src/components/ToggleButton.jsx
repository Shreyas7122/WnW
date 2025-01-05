// src/components/ToggleButton.jsx
import React from 'react';

const ToggleButton = ({ toggleForm, isSignIn }) => {
  return (
    <button className="toggle-button" onClick={toggleForm}>
      {isSignIn ? 'Already have an account? Log In' : 'New here? Sign Up'}
    </button>
  );
};

export default ToggleButton;
