import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/**
 * React Application Entry Point
 * 
 * This file serves as the main entry point for the React portfolio application.
 * It initializes the React app, renders the root component, and sets up
 * performance monitoring.
 * 
 * Key Functions:
 * - Creates the React root element
 * - Renders the main App component
 * - Enables React Strict Mode for development
 * - Initializes performance monitoring
 */

// Create the React root element for concurrent features
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the main application component
root.render(
  <React.StrictMode>
    {/* 
      React.StrictMode enables additional development-time checks:
      - Identifies unsafe lifecycles
      - Warning about legacy string ref API usage
      - Warning about deprecated findDOMNode usage
      - Detecting unexpected side effects
      - Detecting legacy context API
    */}
    <App />
  </React.StrictMode>
);

// Performance Monitoring Setup
// 
// reportWebVitals is a web vitals library that measures and reports
// Core Web Vitals metrics for performance monitoring:
// - Largest Contentful Paint (LCP)
// - First Input Delay (FID)
// - Cumulative Layout Shift (CLS)
// 
// To measure performance, you can pass a function to log results:
// reportWebVitals(console.log)
// 
// Or send to an analytics endpoint for monitoring:
// reportWebVitals(sendToAnalytics)
// 
// Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
