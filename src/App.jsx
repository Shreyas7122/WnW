// src/App.jsx
import React, { useState } from 'react';
import './App.css';
import FormContainer from './components/FormContainer';
import ToggleButton from './components/ToggleButton';
import TruckImage from './components/TruckImage';

function App() {
  const [isSignIn, setIsSignIn] = useState(false); // State to toggle between forms

  // Toggle between Sign-In and Log-In forms
  const toggleForm = () => {
    setIsSignIn((prev) => !prev);
  };

  // Handle form submission (sign-in or log-in)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(isSignIn ? 'Sign Up Form Submitted' : 'Log In Form Submitted');
  };

  return (
    <div className="auth-container">
      <div className="login-container">
        <div className="content-wrapper">
          {/* Form Container Component */}
          <FormContainer
            isSignIn={isSignIn}
            onSubmit={handleSubmit}
            toggleForm={toggleForm}
          />
          {/* Truck Image Component */}
          <TruckImage />
        </div>
      </div>
    </div>
  );
}

export default App;
