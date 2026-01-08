import React from 'react';
import './Contact.css';
import linkedinLogo from '../logos/linkedin.png';
import gitLogo from '../logos/git.png';

/**
 * Contact Component - Premium Redesign
 * 
 * Focused on professional networking and high-impact visual communication.
 */
const Contact = () => {
  return (
    <div className="contact" data-reveal>
      <div className="container contact-container">
        <div className="contact-header-section">
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-subtitle">
            I'm currently looking for new opportunities in AI , Data and Software Engineering roles.
            Whether you have a question or just want to connect, I'll do my best to get back to you!
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
                <a href="mailto:Binkexu@gmail.com" className="method-link">Send Message</a>
              </div>
            </div>

            <div className="contact-method-card" data-reveal>
              <div className="method-icon-box">📱</div>
              <div className="method-info">
                <h3>Phone</h3>
                <p>+64 022 154 6027</p>
                <a href="tel:+640221546027" className="method-link">Call Now</a>
              </div>
            </div>

            <div className="contact-method-card" data-reveal>
              <div className="method-icon-box">📍</div>
              <div className="method-info">
                <h3>Location</h3>
                <p>Wellington, New Zealand</p>
                <span className="method-status">Open to Relocation</span>
              </div>
            </div>
          </div>

          {/* Connect Side */}
          <div className="connect-side">
            <div className="connect-card" data-reveal>
              <h3>Let's Connect Socially</h3>
              <p>Find me on professional platforms and follow my latest updates.</p>

              <div className="social-button-group">
                <a
                  href="https://www.linkedin.com/in/binke-xu-/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn linkedin-btn"
                >
                  <img src={linkedinLogo} alt="LinkedIn" className="btn-logo" />
                  <span>LinkedIn Profile</span>
                </a>

                <a
                  href="https://github.com/BinkeXu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn github-btn"
                >
                  <img src={gitLogo} alt="GitHub" className="btn-logo" />
                  <span>GitHub Repository</span>
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
