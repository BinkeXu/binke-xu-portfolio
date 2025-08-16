import React from 'react';
import './Welcome.css';

const Welcome = ({ setCurrentSection }) => {
  const handleEnterWebsite = () => {
    setCurrentSection('home');
  };

  return (
    <div className="welcome-container">
      <div className="floating-element"></div>
      <div className="welcome-content">
        <div className="welcome-card">
          <h1 className="welcome-title">Hello, Welcome to Binke's website!</h1>
          <p className="welcome-subtitle">Portfolio & Professional Journey</p>
          <button className="enter-website-btn" onClick={handleEnterWebsite}>
            Enter Website
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
