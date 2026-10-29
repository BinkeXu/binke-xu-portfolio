import React from 'react';
import './Footer.css';
import linkedinLogo from '../logos/linkedin.png';
import gitLogo from '../logos/git.png';

/**
 * Footer Component
 * 
 * Anchors the bottom of every page with quick section navigation,
 * professional contact channels, and New Zealand permanent resident status.
 */
const Footer = ({ currentSection, setCurrentSection }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'publications', label: 'Publications' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (sectionId) => {
    if (setCurrentSection) {
      setCurrentSection(sectionId);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        <div className="footer-top-grid">
          {/* Brand & Identity */}
          <div className="footer-brand-col">
            <h3 className="footer-brand-title">Binke Xu</h3>
            <p className="footer-brand-desc">
              Software & Data Engineer specializing in Production Data Pipelines, Machine Learning Systems, and Interactive Analytics.
            </p>
            <div className="footer-status-pill">
              <span className="footer-status-dot"></span>
              <span>Wellington, NZ • <strong>Permanent Resident Visa</strong></span>
            </div>
          </div>

          {/* Quick Section Navigation */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-nav-list">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    className={`footer-nav-btn ${currentSection === item.id ? 'active' : ''}`}
                    onClick={() => handleNavClick(item.id)}
                    aria-label={`Go to ${item.label} section`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Professional Channels */}
          <div className="footer-connect-col">
            <h4 className="footer-col-title">Connect</h4>
            <div className="footer-social-links">
              <a
                href="https://www.linkedin.com/in/binke-xu-/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="LinkedIn profile"
              >
                <img src={linkedinLogo} alt="LinkedIn" className="footer-social-icon" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/BinkeXu"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="GitHub profile"
              >
                <img src={gitLogo} alt="GitHub" className="footer-social-icon" />
                <span>GitHub</span>
              </a>
              <a
                href="mailto:Binkexu@gmail.com"
                className="footer-social-link"
                aria-label="Send email"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="footer-social-icon-svg">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Sub-bar */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Binke Xu. Built with React 19 & High Operational Rigor.
          </p>
          <button
            className="footer-back-to-top"
            onClick={scrollToTop}
            aria-label="Scroll back to top of page"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
