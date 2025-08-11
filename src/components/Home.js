import React from 'react';
import './Home.css';

/**
 * Home Component - Main Landing Page
 * 
 * This component serves as the homepage of the portfolio website.
 * It includes a hero section, about me section, and education details.
 * 
 * Features:
 * - Professional hero section with profile image
 * - About Me section with key statistics
 * - Education section with degree details
 * - Functional CV download button
 * - Responsive design for all devices
 */
const Home = () => {
  /**
   * Handles CV download functionality
   * Creates a temporary download link and triggers the file download
   * 
   * Technical Details:
   * - Creates a temporary <a> element
   * - Sets the href to the CV file in the public folder
   * - Triggers the download automatically
   * - Cleans up the temporary element after download
   */
  const handleDownloadCV = () => {
    // Create a link element to trigger the download
    const link = document.createElement('a');
    link.href = '/Binke_Xu_CV.pdf'; // CV file in public folder
    link.download = 'Binke_Xu_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="home">
      {/* Hero Section */}
      {/* 
        The main introduction section featuring:
        - Profile image placeholder
        - Name and title
        - Professional description
        - Call-to-action button (CV download)
      */}
      <section className="hero">
        <div className="hero-content">
          <div className="profile-section">
            {/* Profile Image */}
            {/* 
              Currently displays initials "BX" as a placeholder
              Can be replaced with an actual profile photo
            */}
            <div className="profile-image">
              <div className="profile-placeholder">BX</div>
            </div>
            
            {/* Hero Text Content */}
            {/* 
              Contains the main introduction text and download button
              Structured for optimal readability and user engagement
            */}
            <div className="hero-text">
              <h1>Binke Xu</h1>
              <p className="subtitle">Master of Science in Artificial Intelligence</p>
              <p className="description">
                Recent graduate with distinction from Victoria University of Wellington, specializing in AI and software engineering. 
                Experienced in developing end-to-end solutions from mobile applications to complex AI systems.
              </p>
              
              {/* Call-to-Action Button */}
              {/* 
                CV download button that allows visitors to download the resume
                Styled as a secondary button to maintain visual hierarchy
              */}
              <div className="hero-buttons">
                <button className="btn btn-secondary" onClick={handleDownloadCV}>
                  Download CV
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      {/* 
        Provides detailed information about the portfolio owner
        Includes professional summary and key statistics
      */}
      <section className="about-me">
        <div className="container">
          <h2>About Me</h2>
          <div className="about-content">
            {/* About Text */}
            {/* 
              Detailed professional description highlighting:
              - Educational background
              - Technical expertise
              - Professional goals
              - Certifications and achievements
            */}
            <div className="about-text">
              <p>
                I am a recent Master of Science graduate in Artificial Intelligence with distinction from Victoria University of Wellington, 
                building upon my Bachelor's degree in Software Engineering. I have experience in developing end-to-end solutions, 
                from mobile applications to complex AI systems. My technical expertise spans multiple languages and frameworks, 
                including Python, PyTorch, Java, Node.js, and GitLab, complemented by my Microsoft Azure Fundamentals (AZ-900) 
                and Azure AI Fundamentals (AI-900) certification.
              </p>
              <p>
                Currently seeking opportunities in Software Engineering or Artificial Intelligence-related roles to apply my skills 
                and knowledge in a dynamic work environment, tackle challenging projects, and contribute to innovative solutions in the industry.
              </p>
            </div>
            
            {/* Key Statistics */}
            {/* 
              Visual representation of key achievements and experience
              Each stat highlights a different aspect of professional background
            */}
            <div className="stats">
              <div className="stat-item">
                <h3>2+</h3>
                <p>Years Research Experience</p>
              </div>
              <div className="stat-item">
                <h3>2</h3>
                <p>IEEE Publications</p>
              </div>
              <div className="stat-item">
                <h3>2</h3>
                <p>Microsoft Certifications</p>
              </div>
              <div className="stat-item">
                <h3>5+</h3>
                <p>Programming Languages</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      {/* 
        Displays educational background and achievements
        Includes both Master's and Bachelor's degree information
      */}
      <section className="education">
        <div className="container">
          <h2>Education</h2>
          <div className="education-grid">
            {/* Master's Degree */}
            {/* 
              Master of Science in Artificial Intelligence
              Highlights research focus and academic achievements
            */}
            <div className="education-card">
              <div className="education-header">
                <h3>Master of Science in Artificial Intelligence</h3>
                <span className="education-period">March 2023 – September 2024</span>
              </div>
              <div className="education-institution">Victoria University of Wellington, New Zealand</div>
              <div className="education-achievement">
                <strong>Rank in Class:</strong> A Grade with Distinction
              </div>
              <div className="education-details">
                <p><strong>Master by research:</strong></p>
                <ul>
                  <li>Conducted independent research utilizing Python to develop algorithms and tools for training and visualization</li>
                  <li>Collaborated with supervisors and peers to refine project objectives and deliver presentations for effective communication of findings</li>
                  <li>Developed strong skills in critical thinking, problem-solving, and project management</li>
                </ul>
              </div>
            </div>

            {/* Bachelor's Degree */}
            {/* 
              Bachelor of Engineering in Software Engineering
              Shows foundational education and key coursework
            */}
            <div className="education-card">
              <div className="education-header">
                <h3>Bachelor of Engineering in Software Engineering</h3>
                <span className="education-period">March 2018 – August 2023</span>
              </div>
              <div className="education-institution">Victoria University of Wellington, New Zealand</div>
              <div className="education-achievement">
                <strong>Rank in Class:</strong> Second Class Hons (Div1)
              </div>
              <div className="education-details">
                <p><strong>Key Courses:</strong></p>
                <ul>
                  <li>Engineering Project</li>
                  <li>Software Dev for Mobile</li>
                  <li>Database Engineering</li>
                  <li>User Interface Design</li>
                  <li>ML Tools and Techniques</li>
                  <li>Human-Computer Interaction</li>
                  <li>Computer Network Design</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
