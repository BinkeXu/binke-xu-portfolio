import React, { useEffect, useState } from 'react';
import './Navbar.css';

/**
 * Navigation Bar Component
 * 
 * This component provides the main navigation for the portfolio website.
 * It displays navigation links and highlights the currently active section.
 * 
 * Props:
 * @param {string} currentSection - The currently active section
 * @param {function} setCurrentSection - Function to change the active section
 * 
 * Features:
 * - Responsive navigation menu
 * - Active state highlighting
 * - Smooth transitions and animations
 * - Mobile-friendly design
 */
const Navbar = ({ currentSection, setCurrentSection }) => {
  const [theme, setTheme] = useState(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    return saved || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem('theme', theme); } catch {}
  }, [theme]);

  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  // Navigation items configuration
  // Each item has an id (for state management) and display label
  const navigationItems = [
    { id: 'home', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'publications', label: 'Publications' },
    { id: 'contact', label: 'Contact' }
  ];

  /**
   * Handles navigation item clicks
   * Updates the current section state when a navigation item is clicked
   * 
   * @param {string} sectionId - The ID of the section to navigate to
   */
  const handleNavigationClick = (sectionId) => {
    setCurrentSection(sectionId);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Brand/Logo Section */}
        {/* 
          Displays the portfolio owner's name as the brand
          This creates a professional identity for the website
        */}
        <div className="navbar-brand">
          <span className="brand-text">Binke Xu</span>
        </div>

        {/* Navigation Menu */}
        {/* 
          Contains all navigation links
          Each link has an active state that highlights the current section
        */}
        <ul className="navbar-nav">
          {navigationItems.map((item) => (
            <li key={item.id} className="nav-item">
              <button
                className={`nav-link ${currentSection === item.id ? 'active' : ''}`}
                onClick={() => handleNavigationClick(item.id)}
                // Accessibility: Provide clear button purpose
                aria-label={`Navigate to ${item.label} section`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Theme Toggle */}
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle dark and light theme"
          title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
        >
          {theme === 'light' ? (
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
