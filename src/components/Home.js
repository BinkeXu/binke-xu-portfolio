import React from 'react';
import './Home.css';
import myPhoto from '../img/My-photo.png';

/**
 * Home Component - Main Landing Page
 * 
 * This component serves as the homepage of the portfolio website.
 * It features a modern split layout with a floating stats bar, recruiter-focused
 * work rights visibility, and an integrated education timeline.
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
    description: "Managing high-volume nationwide healthcare operational triage, rapid incident escalation, and cross-functional communication under strict SLAs.",
    achievements: [
      "Orchestrated operational triage managing 60 quotes and mission-critical requests daily across healthcare providers nationwide with strict SLA adherence.",
      "Coordinated rapid crisis escalation protocols, resolving urgent clinical and operational service delivery bottlenecks under intense operational pressure.",
      "Facilitated clear, empathetic stakeholder communication between multidisciplinary clinical coordinators, regional management, and internal IT systems.",
      "Identified process inefficiencies and recommended data-driven workflow improvements to enhance daily ticket resolution speeds."
    ]
  },
  {
    period: "2023 – 2024",
    title: "MSc in Artificial Intelligence",
    institution: "Victoria University of Wellington",
    location: "Wellington, NZ",
    badge: "Grade A (Distinction)",
    badgeType: "education",
    description: "Specialized postgraduate research in evolutionary Neural Architecture Search (NAS) and deep learning computer vision.",
    achievements: [
      "Authored 2 peer-reviewed IEEE publications in computer vision and tree segmentation in collaboration with Landcare Research.",
      "Engineered genetic algorithm architecture search (GA-U-Net-B) and ensemble segmentation pipelines, slashing parameters by 95%.",
      "Utilized Python, PyTorch, OpenCV, and high-performance computing clusters."
    ]
  },
  {
    period: "September 2022 – March 2023",
    title: "Research Assistant",
    institution: "Victoria University of Wellington & Landcare Research",
    location: "Wellington, NZ",
    badge: "Research & Engineering",
    badgeType: "work",
    description: "Collaborated with Manaaki Whenua – Landcare Research on deep learning image segmentation pipelines for remote sensing data.",
    achievements: [
      "Engineered end-to-end computer vision pipelines in Python, PyTorch, OpenCV, and NumPy for training, testing, and visualizing semantic segmentation on high-resolution canopy data.",
      "Increased tree segmentation accuracy while validating model generalization across diverse regional forest ecosystems.",
      "Authored formal technical progress reports and delivered research presentations to academic supervisors and external industry researchers.",
      "Co-authored peer-reviewed research papers published in IEEE international conference proceedings."
    ]
  },
  {
    period: "2018 – 2023",
    title: "BE (Hons) in Software Engineering",
    institution: "Victoria University of Wellington",
    location: "Wellington, NZ",
    badge: "Second Class Hons (Div 1)",
    badgeType: "education",
    description: "Comprehensive software engineering curriculum spanning systems programming, cloud architecture, and collaborative agile engineering.",
    achievements: [
      "Core focus: Distributed Systems, Mobile & Web Development, Cloud Computing, UI/UX.",
      "Delivered end-to-end industry-aligned engineering capstone projects with modern Agile/GitLab practices."
    ]
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
              MSc in Artificial Intelligence (Distinction) • Microsoft Azure Certified • Based in Wellington, New Zealand
            </p>
            <p className="hero-bio">
              Specializing in <strong>Production Data Pipelines, Machine Learning Systems, and Interactive Analytics</strong>. Passionate about building robust cloud data architectures, local-first RAG solutions, and high-performance decision intelligence platforms.
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
              <span className="stat-number">2x Certified</span>
              <span className="stat-label">Azure (AZ-900 & AI-900)</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">2 IEEE Papers</span>
              <span className="stat-label">MIGARS 2024 & SSCI 2022</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">Permanent Resident</span>
              <span className="stat-label">Full NZ Work Rights</span>
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
                    I am a <strong>Software & Data Engineer</strong> with an <strong>MSc in Artificial Intelligence (A Grade with Distinction)</strong> and a <strong>Bachelor of Engineering in Software Engineering (Hons Div 1)</strong> from Victoria University of Wellington.
                  </p>
                  <p>
                    My passion lies in architecting <strong>resilient data pipelines, high-impact machine learning systems, and responsive analytics interfaces</strong>. From cloud-native Medallion data warehouses in BigQuery/dbt to privacy-preserving local RAG systems with Ollama/ChromaDB and executive dashboards, I build production systems that turn complex datasets into clear, actionable outcomes.
                  </p>
                  <p>
                    Beyond algorithmic engineering, my operational experience as a <strong>National Communications Officer at Access Community Health</strong> involves managing high-volume operational triage, handling <strong>60 quotes and requests every day</strong> under strict SLAs, instilling disciplined communication and calm crisis resolution under pressure.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Career & Education Timeline */}
            <div className="education-column">
              <h2 className="section-title">Career & Education Journey</h2>
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
                    {item.description && <p className="timeline-desc">{item.description}</p>}
                    <ul className="studies-list">
                      {item.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
