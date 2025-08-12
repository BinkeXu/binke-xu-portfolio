import React, { useEffect, useRef, useState } from 'react';
import './App.css';

// Import all page components
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Contact from './components/Contact';

// Import navigation component
import Navbar from './components/Navbar';

/**
 * Main Application Component
 * 
 * This component serves as the root of the portfolio website application.
 * It manages the current active section and renders the appropriate component
 * based on user navigation.
 * 
 * Features:
 * - State management for current active section
 * - Conditional rendering of page components
 * - Navigation state management
 * - Responsive layout structure
 */
function App() {
  // State to track which section is currently active
  // This enables the navigation highlighting and component switching
  const [currentSection, setCurrentSection] = useState('home');

  // Scroll-reveal observer setup
  const ioRef = useRef(null);
  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );
    elements.forEach((el) => observer.observe(el));
    ioRef.current = observer;
    return () => observer.disconnect();
  }, [currentSection]);

  /**
   * Renders the appropriate component based on the current section
   * Each section represents a different page of the portfolio
   * 
   * @returns {JSX.Element} The component corresponding to the current section
   */
  const renderCurrentSection = () => {
    switch (currentSection) {
      case 'home':
        return <Home />;
      case 'skills':
        return <Skills />;
      case 'projects':
        return <Projects />;
      case 'publications':
        return <Publications />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />; // Fallback to home page
    }
  };

  return (
    <div className="App">
      {/* Navigation Bar */}
      {/* 
        The Navbar component handles:
        - Navigation between different sections
        - Active state highlighting
        - Responsive mobile navigation
        - Brand/logo display
      */}
      <Navbar 
        currentSection={currentSection} 
        setCurrentSection={setCurrentSection} 
      />
      
      {/* Main Content Area */}
      {/* 
        This div contains the main content that changes based on navigation.
        Each section component is rendered here when selected.
        
        Available sections:
        - Home: Introduction, about me, education, CV download
        - Skills: Technical skills, tools, certifications
        - Projects: Work experience and engineering projects
        - Publications: Research papers and academic work
        - Contact: Contact information and social links
      */}
      <main className="main-content">
        {renderCurrentSection()}
      </main>
    </div>
  );
}

export default App;
