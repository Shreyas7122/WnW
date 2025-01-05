// src/App.jsx
import React, { useState } from 'react';
import './App.css';
import FormContainer from './components/FormContainer';
import ToggleButton from './components/ToggleButton';
import TruckImage from './components/TruckImage';

function AuthPage() {
  const [isSignIn, setIsSignIn] = useState(false);

  const toggleForm = () => {
    setIsSignIn((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <div className="auth-container">
      <div className="login-container">
        <div className="content-wrapper">
          <FormContainer
            isSignIn={isSignIn}
            onSubmit={handleSubmit}
            toggleForm={toggleForm}
          />
          <TruckImage />
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
