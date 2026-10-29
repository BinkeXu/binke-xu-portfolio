import React from 'react';
import './Home.css';
import myPhoto from '../img/My-photo.png';

/**
 * Home Component - Main Landing Page
 * 
 * Features a modern split hero layout, floating stats bar,
 * recruiter-focused work rights visibility, and a centered, full-width
 * chronological Career & Education Journey timeline.
 */
const ENABLE_CV_DOWNLOAD = false; // Kept disabled per user directive

/**
 * Career & Education Journey
 * Comprehensive chronological timeline spanning industry experience and academic degrees.
 */
const CAREER_JOURNEY = [
  {
    period: "June 2026 – Present",
    title: "National Communications Officer",
    institution: "Access Community Health",
    location: "Wellington, NZ",
    badge: "Current Role",
    badgeType: "work",
    summary: "Manages nationwide healthcare operational triage, handling 60 quotes and mission-critical requests daily with strict SLA adherence and rapid crisis escalation."
  },
  {
    period: "2023 – 2024",
    title: "MSc in Artificial Intelligence",
    institution: "Victoria University of Wellington",
    location: "Wellington, NZ",
    badge: "Grade A (Distinction)",
    badgeType: "education",
    summary: "Graduated with Distinction; authored 2 peer-reviewed IEEE publications and engineered evolutionary neural architecture search (GA-U-Net-B), reducing model parameters by 95%."
  },
  {
    period: "September 2022 – March 2023",
    title: "Research Assistant",
    institution: "Victoria University of Wellington & Landcare Research",
    location: "Wellington, NZ",
    badge: "Research & Engineering",
    badgeType: "work",
    summary: "Engineered deep learning canopy segmentation pipelines in Python and PyTorch in collaboration with Landcare Research, improving accuracy across native NZ forest ecosystems."
  },
  {
    period: "2018 – 2023",
    title: "BE (Hons) in Software Engineering",
    institution: "Victoria University of Wellington",
    location: "Wellington, NZ",
    badge: "Second Class Hons (Div 1)",
    badgeType: "education",
    summary: "Specialized in distributed systems, cloud computing, and full-stack software development; delivered industry-aligned engineering capstone projects under modern Agile practices."
  }
];

const Home = ({ setCurrentSection }) => {
  /**
   * Handles CV download functionality if enabled
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
          {/* Visual Side */}
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
            {/* 5-Second Recruiter Clarity: Location & Permanent Resident Status */}
            <div className="hero-status-pill">
              <span className="status-indicator-dot"></span>
              <span>Wellington, NZ • <strong>Permanent Resident Visa</strong> (Full NZ Work Rights)</span>
            </div>

            <h1 className="hero-title">
              Hello, I'm <span className="highlight">Binke Xu</span>
            </h1>
            <h2 className="hero-subtitle">Software & Data Engineer</h2>
            <p className="hero-tagline">
              MSc in Artificial Intelligence (Distinction) • MS Azure Certified • 2 IEEE Publications • Based in Wellington, NZ
            </p>
            <p className="hero-bio">
              Software & Data Engineer with an <strong>MSc in Artificial Intelligence (Distinction)</strong> and <strong>BE (Hons)</strong> from Victoria University of Wellington. Specializing in <strong>Production Data Pipelines, Machine Learning Systems, and Interactive Analytics</strong>. Proven track record across cloud-native Medallion data warehouses (BigQuery/dbt), local RAG architectures, and high-volume healthcare operational triage under strict SLAs.
            </p>

            <div className="hero-cta-group">
              <button 
                className="btn btn-primary btn-explore" 
                onClick={() => setCurrentSection && setCurrentSection('projects')}
              >
                View Live Projects ➔
              </button>

              <a
                href="https://www.linkedin.com/in/binke-xu-/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/BinkeXu"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                GitHub
              </a>

              {ENABLE_CV_DOWNLOAD && (
                <button className="btn btn-outline btn-download" onClick={handleDownloadCV}>
                  Download CV
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Floating Stats Bar */}
      <div className="stats-bar-wrapper" data-reveal>
        <div className="container">
          <div className="stats-bar">
            <div className="stat-item">
              <span className="stat-number">MSc Distinction</span>
              <span className="stat-label">AI Grade A (Victoria Univ.)</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">MS Azure Certified</span>
              <span className="stat-label">AZ-900 & AI-900</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">2 Publications</span>
              <span className="stat-label">IEEE (MIGARS & SSCI)</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">Permanent Resident</span>
              <span className="stat-label">Full NZ Work Rights</span>
            </div>
          </div>
        </div>
      </div>

      {/* Career & Education Journey Section (Clean Full-Width Centered Layout) */}
      <section className="journey-section" data-reveal>
        <div className="container journey-container">
          <div className="journey-header">
            <h2 className="section-title">Career & Education Journey</h2>
            <p className="section-subtitle">
              A chronological track record spanning production engineering, academic distinction, and peer-reviewed research
            </p>
          </div>

          <div className="timeline-wrapper">
            <div className="timeline">
              {CAREER_JOURNEY.map((item) => (
                <div key={`${item.institution}-${item.title}`} className="timeline-card">
                  <div className="timeline-date">{item.period}</div>
                  <h3 className="degree-title">{item.title}</h3>
                  <h4 className="university">
                    {item.institution} {item.location && <span className="timeline-location">• {item.location}</span>}
                  </h4>
                  <div className={`grade-badge ${item.badgeType === 'work' ? 'work-badge' : 'edu-badge'}`}>
                    {item.badge}
                  </div>
                  <p className="timeline-summary">{item.summary}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
