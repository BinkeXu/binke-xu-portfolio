import React from 'react';
import './Contact.css';
import linkedinLogo from '../logos/linkedin.png';

/**
 * Contact Component
 * 
 * This component displays contact information and social media links
 * for professional networking and communication.
 * 
 * Features:
 * - Contact information display (email, phone, location)
 * - Professional social media links
 * - Direct email and LinkedIn access
 * - Responsive design for all devices
 * - Accessibility-friendly contact methods
 * 
 * @returns {JSX.Element} The contact information page component
 */
const Contact = () => {
  return (
    <div className="contact" data-reveal>
      <div className="container">
        <h2 data-reveal>Get In Touch</h2>
        
        {/* Main Contact Content */}
        <div className="contact-content" data-reveal>
          <div className="contact-info">
            <h3>Contact Information</h3>
            
            {/* Contact Details List */}
            {/* 
              Displays primary contact methods with icons and details
              Each contact method is clearly labeled and accessible
            */}
            <div className="info-list">
              {/* Email Contact */}
              <div className="info-item" data-reveal>
                <span className="info-icon">📧</span>
                <div className="info-details">
                  <h4>Email</h4>
                  <p>Binkexu@gmail.com</p>
                </div>
              </div>
              
              {/* Phone Contact */}
              <div className="info-item" data-reveal>
                <span className="info-icon">📱</span>
                <div className="info-details">
                  <h4>Phone</h4>
                  <p>0221546027</p>
                </div>
              </div>
              
              {/* Location Information */}
              <div className="info-item" data-reveal>
                <span className="info-icon">📍</span>
                <div className="info-details">
                  <h4>Location</h4>
                  <p>Wellington, New Zealand</p>
                </div>
              </div>
              
              {/* LinkedIn Profile */}
              {/* 
                Professional networking link with logo
                Opens in new tab for better user experience
              */}
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

            {/* Social Media Links Section */}
            {/* 
              Quick access to professional networking platforms
              Includes direct email and LinkedIn profile links
            */}
            <div className="social-links" data-reveal>
              <h4>Connect With Me</h4>
              <div className="social-icons">
                {/* LinkedIn Profile Link */}
                <a 
                  href="https://www.linkedin.com/in/binke-xu-/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link linkedin"
                >
                  <img src={linkedinLogo} alt="LinkedIn" className="social-logo" />
                  LinkedIn
                </a>
                
                {/* Direct Email Link */}
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
