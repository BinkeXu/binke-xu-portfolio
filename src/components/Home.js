import React from 'react';
import './Home.css';
import myPhoto from '../img/My-photo.png';

/**
 * Home Component - Main Landing Page
 * 
 * This component serves as the homepage of the portfolio website.
 * It features a modern split layout with a floating stats bar and 
 * an integrated education timeline.
 */
const ENABLE_CV_DOWNLOAD = false; // Set to false to hide the CV button

const Home = () => {
  /**
   * Handles CV download functionality
   */
  const handleDownloadCV = () => {
    try {
      const basePath = process.env.PUBLIC_URL || '';
      const cvPath = `${basePath}/Binke_Xu_CV.pdf`;

      const link = document.createElement('a');
      link.href = cvPath;
      link.download = 'Binke_Xu_CV.pdf';
      link.target = '_blank';

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      console.log('CV download initiated successfully');
    } catch (error) {
      console.error('Error downloading CV:', error);
      const basePath = process.env.PUBLIC_URL || '';
      const fallbackUrl = `${basePath}/Binke_Xu_CV.pdf`;
      window.open(fallbackUrl, '_blank');
    }
  };

  return (
    <div className="home">
      {/* Hero Section: Split Layout */}
      <section className="hero" data-reveal>
        <div className="container hero-container">
          {/* Visual Side (Right on Desktop, Top on Mobile) */}
          <div className="hero-visual">
            <div className="visual-circle main-circle"></div>
            <div className="visual-circle secondary-circle"></div>
            <div className="profile-image-container">
              <img
                src={myPhoto || `${process.env.PUBLIC_URL || ''}/logo192.png`}
                alt="Binke Xu"
                className="hero-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
          </div>

          {/* Text Side */}
          <div className="hero-text-content">
            <h1 className="hero-title">
              Hello, I'm <span className="highlight">Binke Xu</span>
            </h1>
            <h2 className="hero-subtitle">Masters in AI & Software Engineering</h2>
            <p className="hero-bio">
              Bridging the gap between complex artificial intelligence algorithms and
              intuitive, user-centric software solutions. Specialized in full-stack development
              and machine learning research.
            </p>

            {ENABLE_CV_DOWNLOAD && (
              <div className="hero-cta">
                <button className="btn btn-primary btn-download" onClick={handleDownloadCV}>
                  Download CV
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Floating Stats Bar */}
      <div className="stats-bar-wrapper" data-reveal>
        <div className="container">
          <div className="stats-bar">
            <div className="stat-item">
              <span className="stat-number">2+</span>
              <span className="stat-label">Years Research</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">2</span>
              <span className="stat-label">IEEE Publications</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">2</span>
              <span className="stat-label">Certifications</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Tech Stacks</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content: Split Grid */}
      <section className="main-content-section" data-reveal>
        <div className="container">
          <div className="content-split-layout">

            {/* Left Column: About Context */}
            <div className="about-column">
              <div className="sticky-header">
                <h2 className="section-title">About Me</h2>
                <div className="about-text-content">
                  <p>
                    I am a recent <strong>Master of Science graduate in Artificial Intelligence</strong> with distinction from Victoria University of Wellington.
                    My academic journey is built upon a solid foundation in Software Engineering (Bachelor's with Second Class Hons).
                  </p>
                  <p>
                    I thrive on solving complex problems, from optimizing neural network architectures to building responsive mobile applications.
                    My technical toolkit includes <strong>Python, PyTorch, Java, and React</strong>, backed by industry-standard certifications in Azure AI.
                  </p>
                  <p>
                    Currently, I am looking for opportunities where I can leverage my unique blend of research capability and engineering practicality.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Education Timeline */}
            <div className="education-column">
              <h2 className="section-title">Education Journey</h2>
              <div className="timeline">

                {/* Master's Card */}
                <div className="timeline-card">
                  <div className="timeline-date">2023 - 2024</div>
                  <h3 className="degree-title">MSc in Artificial Intelligence</h3>
                  <h4 className="university">Victoria University of Wellington</h4>
                  <div className="grade-badge">Grade A (Distinction)</div>
                  <ul className="studies-list">
                    <li>Developed novel algorithms for training data optimization.</li>
                    <li>Utilized Python/PyTorch for deep learning research.</li>
                  </ul>
                </div>

                {/* Bachelor's Card */}
                <div className="timeline-card">
                  <div className="timeline-date">2018 - 2023</div>
                  <h3 className="degree-title">BE in Software Engineering</h3>
                  <h4 className="university">Victoria University of Wellington</h4>
                  <div className="grade-badge">Second Class Hons (Div 1)</div>
                  <ul className="studies-list">
                    <li>Focus: Mobile Sw Dev, Machine Learning, UI/UX.</li>
                    <li>Completed comprehensive Engineering Project.</li>
                  </ul>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
