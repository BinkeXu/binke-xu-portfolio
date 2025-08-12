import React from 'react';
import './Contact.css';
import linkedinLogo from '../logos/linkedin.png';

const Contact = () => {
  return (
    <div className="contact" data-reveal>
      <div className="container">
        <h2 data-reveal>Get In Touch</h2>
        
        <div className="contact-content" data-reveal>
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="info-list">
              <div className="info-item" data-reveal>
                <span className="info-icon">📧</span>
                <div className="info-details">
                  <h4>Email</h4>
                  <p>Binkexu@gmail.com</p>
                </div>
              </div>
              
              <div className="info-item" data-reveal>
                <span className="info-icon">📱</span>
                <div className="info-details">
                  <h4>Phone</h4>
                  <p>0221546027</p>
                </div>
              </div>
              
              <div className="info-item" data-reveal>
                <span className="info-icon">📍</span>
                <div className="info-details">
                  <h4>Location</h4>
                  <p>Wellington, New Zealand</p>
                </div>
              </div>
              
              <div className="info-item" data-reveal>
                <div className="info-icon">
                  <img src={linkedinLogo} alt="LinkedIn" />
                </div>
                <div className="info-details">
                  <h4>LinkedIn</h4>
                  <a 
                    href="https://www.linkedin.com/in/binke-xu-/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/binke-xu-/
                  </a>
                </div>
              </div>
            </div>

            <div className="social-links" data-reveal>
              <h4>Connect With Me</h4>
              <div className="social-icons">
                <a 
                  href="https://www.linkedin.com/in/binke-xu-/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link linkedin"
                >
                  <img src={linkedinLogo} alt="LinkedIn" className="social-logo" />
                  LinkedIn
                </a>
                <a 
                  href="mailto:Binkexu@gmail.com" 
                  className="social-link email"
                >
                  <span className="social-icon">📧</span>
                  Email
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
