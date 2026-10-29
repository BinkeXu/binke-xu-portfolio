import React, { useEffect, useRef, useState } from 'react';
import './App.css';

// Import all page components
import Welcome from './components/Welcome';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Contact from './components/Contact';

// Import navigation and footer components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const VALID_SECTIONS = ['home', 'skills', 'projects', 'publications', 'contact', 'welcome'];

/**
 * Main Application Component
 * 
 * Root of the portfolio application. Manages active section state,
 * synchronizes with browser URL hashes for deep linking and back/forward navigation,
 * handles automatic scroll-to-top on section switch, and coordinates layout components.
 */
function App() {
  // Initialize section from URL hash if valid, otherwise default directly to 'home'
  const [currentSection, setCurrentSection] = useState(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase();
      if (VALID_SECTIONS.includes(hash)) return hash;
    }
    return 'home';
  });

  // Synchronize state with browser back/forward buttons (hashchange event)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase();
      if (VALID_SECTIONS.includes(hash)) {
        setCurrentSection(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update both state and URL hash when user triggers navigation
  const handleSectionChange = (sectionId) => {
    setCurrentSection(sectionId);
    if (typeof window !== 'undefined') {
      const cleanHash = window.location.hash.replace(/^#\/?/, '').toLowerCase();
      if (cleanHash !== sectionId) {
        window.history.pushState(null, '', `#${sectionId}`);
      }
    }
  };

  // Usability: Smoothly reset scroll position to top whenever active section changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentSection]);

  // Scroll-reveal observer setup
  const ioRef = useRef(null);
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;
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
   */
  const renderCurrentSection = () => {
    switch (currentSection) {
      case 'welcome':
        return <Welcome setCurrentSection={handleSectionChange} />;
      case 'home':
        return <Home setCurrentSection={handleSectionChange} />;
      case 'skills':
        return <Skills />;
      case 'projects':
        return <Projects />;
      case 'publications':
        return <Publications />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setCurrentSection={handleSectionChange} />;
    }
  };

  return (
    <div className="App">
      {/* Show Welcome page without navbar if explicitly visited */}
      {currentSection === 'welcome' ? (
        <Welcome setCurrentSection={handleSectionChange} />
      ) : (
        <>
          {/* Navigation Bar */}
          <Navbar 
            currentSection={currentSection} 
            setCurrentSection={handleSectionChange} 
          />
          
          {/* Main Content Area */}
          <main className="main-content">
            {renderCurrentSection()}
          </main>

          {/* Unified Modern Footer */}
          <Footer 
            currentSection={currentSection} 
            setCurrentSection={handleSectionChange} 
          />
        </>
      )}
    </div>
  );
}

export default App;
