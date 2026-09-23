import React from 'react';
import './Contact.css';
import linkedinLogo from '../logos/linkedin.png';
import gitLogo from '../logos/git.png';

/**
 * Contact Component - Premium Professional Presence
 * 
 * Focused on recruiter convenience, direct contact channels,
 * and clear New Zealand Permanent Resident work rights visibility.
 */
const Contact = () => {
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
              <div className="method-icon-box">📧</div>
              <div className="method-info">
                <h3>Email</h3>
                <p>Binkexu@gmail.com</p>
                <a href="mailto:Binkexu@gmail.com" className="method-link">Send Email ↗</a>
              </div>
            </div>

            <div className="contact-method-card" data-reveal>
              <div className="method-icon-box">📱</div>
              <div className="method-info">
                <h3>Phone</h3>
                <p>+64 022 154 6027</p>
                <a href="tel:+640221546027" className="method-link">Call Direct ↗</a>
              </div>
            </div>

            <div className="contact-method-card" data-reveal>
              <div className="method-icon-box">📍</div>
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
