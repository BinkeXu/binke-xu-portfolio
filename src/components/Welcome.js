import React from 'react';
import './Welcome.css';

/**
 * Welcome Component
 * 
 * This is the landing page component that users see when they first visit the website.
 * It provides an elegant entry point with a call-to-action button to enter the main portfolio.
 * 
 * Features:
 * - Animated floating background element
 * - Welcome message and subtitle
 * - Enter website button that transitions to main content
 * - Clean, minimalist design for first impression
 * 
 * @param {Function} setCurrentSection - Function to change the active section in the main app
 * @returns {JSX.Element} The welcome page component
 */
const Welcome = ({ setCurrentSection }) => {
  /**
   * Handles the click event when user wants to enter the main website
   * Transitions from welcome page to home page
   */
  const handleEnterWebsite = () => {
    setCurrentSection('home'); // Navigate to the home section
  };

  return (
    <div className="welcome-container">
      {/* Animated floating background element for visual interest */}
      <div className="floating-element"></div>
      
      {/* Main welcome content container */}
      <div className="welcome-content">
        {/* Welcome card with main content */}
        <div className="welcome-card">
          {/* Main welcome title */}
          <h1 className="welcome-title">Hello, Welcome to Binke's website!</h1>
          
          {/* Subtitle describing the website purpose */}
          <p className="welcome-subtitle">Portfolio & Professional Journey</p>
          
          {/* Call-to-action button to enter the main website */}
          <button className="enter-website-btn" onClick={handleEnterWebsite}>
            Enter Website
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
