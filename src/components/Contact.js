import React, { useState } from 'react';
import './Contact.css';
import linkedinLogo from '../logos/linkedin.png';
import gitLogo from '../logos/git.png';

/**
 * Contact Component - Premium Professional Presence
 * 
 * Focused on recruiter convenience, direct contact channels,
 * one-click copy interactions, and clear New Zealand Permanent Resident work rights visibility.
 */
const Contact = () => {
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = (text, fieldName) => {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text);
    }
    setCopiedField(fieldName);
    setTimeout(() => {
      setCopiedField(null);
    }, 2000);
  };

  return (
    <div className="contact" data-reveal>
      <div className="container contact-container">
        <div className="contact-header-section">
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-subtitle">
            I am actively seeking roles in <strong>Data Engineering, Machine Learning Systems, and Full-Stack Software Engineering</strong> in Wellington, New Zealand (and open to relocation). Feel free to reach out directly!
          </p>
        </div>

        <div className="contact-main-grid">
          {/* Contact Methods Cards */}
          <div className="contact-methods">
            <div className="contact-method-card" data-reveal>
              <div className="method-icon-box" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <div className="method-info">
                <h3>Email</h3>
                <p>Binkexu@gmail.com</p>
                <div className="method-actions">
                  <a href="mailto:Binkexu@gmail.com" className="method-link">Send Email ↗</a>
                  <button
                    className={`btn-copy-tag ${copiedField === 'email' ? 'copied' : ''}`}
                    onClick={() => handleCopy('Binkexu@gmail.com', 'email')}
                    type="button"
                    aria-label="Copy email address"
                  >
                    {copiedField === 'email' ? 'Copied! ✓' : 'Copy'}
                  </button>
                </div>
              </div>
            </div>

            <div className="contact-method-card" data-reveal>
              <div className="method-icon-box" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className="method-info">
                <h3>Phone</h3>
                <p>+64 022 154 6027</p>
                <div className="method-actions">
                  <a href="tel:+640221546027" className="method-link">Call Direct ↗</a>
                  <button
                    className={`btn-copy-tag ${copiedField === 'phone' ? 'copied' : ''}`}
                    onClick={() => handleCopy('+640221546027', 'phone')}
                    type="button"
                    aria-label="Copy phone number"
                  >
                    {copiedField === 'phone' ? 'Copied! ✓' : 'Copy'}
                  </button>
                </div>
              </div>
            </div>

            <div className="contact-method-card" data-reveal>
              <div className="method-icon-box" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="method-info">
                <h3>Location & Work Rights</h3>
                <p>Wellington, New Zealand</p>
                <span className="method-status">Permanent Resident Visa (Full NZ Work Rights)</span>
              </div>
            </div>
          </div>

          {/* Connect Side */}
          <div className="connect-side">
            <div className="connect-card" data-reveal>
              <h3>Professional Channels</h3>
              <p>Explore my latest open-source repositories and connect on LinkedIn.</p>

              <div className="social-button-group">
                <a
                  href="https://www.linkedin.com/in/binke-xu-/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn linkedin-btn"
                >
                  <img src={linkedinLogo} alt="LinkedIn" className="btn-logo" />
                  <span>LinkedIn Profile ↗</span>
                </a>

                <a
                  href="https://github.com/BinkeXu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn github-btn"
                >
                  <img src={gitLogo} alt="GitHub" className="btn-logo" />
                  <span>GitHub Repository ↗</span>
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
