import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './Projects.css';

/**
 * Projects Component
 * 
 * Displays a comprehensive, recruiter-optimized view of engineering projects,
 * research outputs, and work experience.
 * 
 * Features:
 * - Flagship Showcase Banner: New Zealand Labour Market & Income Intelligence Dashboard
 * - Interactive project cards with expandable case study details
 * - Strategic categorization: Data & ML, Full-Stack, Research, and Academic Projects
 * - Direct Live Demo and GitHub repository action links
 */

/**
 * Flagship Featured Project
 * Promoted prominently at the top as the Hero Project
 */
const featuredProject = {
    title: "New Zealand Labour Market & Income Intelligence Dashboard",
    role: "Lead Full-Stack & Data Engineer",
    year: "2026",
    demoLink: "https://nz-labour-dashboard.vercel.app/",
    codeLink: "https://github.com/BinkeXu/New-Zealand-Labour-Market-Income-Intelligence-Dashboard.git",
    technologies: ["React 19", "Vite", "Python 3.11 ETL", "Recharts", "INZ Green List Engine", "GitHub Actions", "Vercel"],
    caseStudy: {
      challenge: "Macroeconomic employment, income, and immigration datasets across MBIE, Stats NZ, IRD, and INZ were siloed in disparate formats, making comparative regional analysis, real take-home pay benchmarking, and fast-track residency pathway planning difficult for job seekers and analysts.",
      solution: "Engineered an executive intelligence platform ingesting 280MB+ of official raw government data. Architected an authoritative INZ Green List & Residency Engine (65 ANZSCO occupations mapped to Immigration NZ Op Manual Appendices 13 & 14), an official NZ PAYE/ACC tax calculator, a head-to-head regional relocation comparator, and 1-click pre-filtered career action links to SEEK and TradeMe.",
      architectureWin: "Automated multi-tier test architecture with 24/24 passing tests (10 JS tests in ~14ms via native Node 24 runner + 14 Python ETL validation tests). Slashed client bundle size by 70% (700 kB down to 210 kB) with React.lazy() dynamic route splitting."
    }
  };

  /**
   * Curated Project Catalog
   */
  const projects = [
    {
      title: "New Zealand Labour Market & Income Intelligence Dashboard",
      type: "Lead Full-Stack & Data Engineer",
      category: "data-ml",
      year: "2026",
      description: "Executive macroeconomic intelligence platform analysing 280MB+ of official NZ government data with an INZ Green List residency engine, official PAYE/ACC take-home pay modeling, and regional relocation benchmarking.",
      technologies: ["React 19", "Vite", "Python 3.11 ETL", "Recharts", "INZ Green List Engine", "GitHub Actions", "Vercel"],
      features: [
        "Authoritative INZ Green List Engine mapping 4-digit ANZSCO unit groups to Immigration NZ Op Manual Appendices 13 & 14 (38 Tier 1, 23 Tier 2, 4 Sector roles) with 1-click residency filters",
        "Official NZ PAYE & ACC Tax Calculator modeling 5 income brackets and 1.60% ACC earner levy, powering gross vs net take-home pay analysis",
        "Head-to-head regional relocation comparator evaluating two regions side by side across wages, rents, take-home pay, and annual savings",
        "Automated Python 3.11 ETL pipelines ingesting and normalising 280MB+ of raw data (230 monthly MBIE series, 25-year IRD deciles, Stats NZ LEED)",
        "1-click pre-filtered career search buttons routing directly to live vacancies on SEEK NZ and TradeMe Jobs"
      ],
      highlights: [
        "Expanded verified residency occupation coverage by 1200% (from 5 to 65 official INZ Green List roles)",
        "24/24 multi-tier test suite passing: 10 JS tests executing in ~14ms (Node 24 native runner) + 14 Python ETL tests",
        "70% bundle size reduction (slashed from 700 kB to 210 kB) with dynamic code splitting and memoised aggregations",
        "Live production platform on Vercel backed by continuous automated GitHub Actions integration"
      ],
      codeLink: "https://github.com/BinkeXu/New-Zealand-Labour-Market-Income-Intelligence-Dashboard.git",
      demoLink: "https://nz-labour-dashboard.vercel.app/"
    },
    {
      title: "E-Commerce Customer Churn Prediction",
      type: "Cloud Data Engineering & MLOps",
      category: "data-ml",
      year: "2025",
      description: "Cloud-native Medallion data warehouse and real-time churn scoring service. Features a scalable BigQuery + dbt data architecture, a containerized FastAPI endpoint, and an interactive Streamlit dashboard.",
      technologies: ["Google BigQuery", "dbt", "Python", "FastAPI", "Docker", "GitHub Actions CI/CD", "LightGBM", "Scikit-learn", "Streamlit"],
      features: [
        "Scalable ELT pipeline transforming 540,000+ raw e-commerce records using dbt SQL models into a Medallion warehouse architecture",
        "RFM (Recency, Frequency, Monetary) feature engineering via SQL window functions for maximum compute efficiency",
        "Multi-algorithm ML pipeline with hyperparameter tuning, achieving 0.89 AUC and 84% Recall",
        "Containerized RESTful FastAPI microservice delivering inference in <120ms average latency",
        "Automated GitHub Actions CI/CD testing both dbt schema integrity and application unit tests"
      ],
      highlights: [
        "Processed 540,000+ transaction records in BigQuery with decoupled compute and storage",
        "Achieved 0.89 AUC and 84% Recall on customer churn classification",
        "Deployed containerized FastAPI prediction endpoint with <120ms latency",
        "Implemented end-to-end MLOps from cloud data warehouse to automated container testing"
      ],
      codeLink: "https://github.com/BinkeXu/E-Commerce-Customer-Churn-Prediction"
    },
    {
      title: "Restaurant Intelligence System (RIS)",
      type: "Local-First AI / GenAI / RAG",
      category: "data-ml",
      year: "2025",
      description: "Privacy-focused, zero-cloud sentiment analysis and hybrid RAG platform for restaurant reviews, running 100% locally with Llama 3.2 via Ollama, ChromaDB, and cross-encoder reranking.",
      technologies: ["Python", "LangChain", "ChromaDB", "Ollama (Llama 3.2)", "FlashRank", "Streamlit", "RAGAS", "BM25"],
      features: [
        "Analyzed 5,000+ customer reviews 100% locally using Llama 3.2 via Ollama, ensuring total data privacy without cloud API expenses",
        "Hybrid retrieval combining dense vector embeddings (ChromaDB) with BM25 sparse keyword search",
        "Local cross-encoder reranking via FlashRank, reducing semantic search noise by 35%",
        "Intelligent query translation automatically extracting structured restaurant metadata and rating filters",
        "Evaluated via RAGAS framework, achieving over 80% retrieval relevance and faithfulness"
      ],
      highlights: [
        "100% local, zero-leakage architecture: complete data sovereignty without third-party API exposure",
        "35% search noise reduction using cross-encoder reranking over vector search",
        "RAGAS evaluation confirming >80% factual faithfulness and contextual relevancy",
        "Executive Streamlit dashboard with real-time vector parameter tuning and inspect mode"
      ],
      codeLink: "https://github.com/BinkeXu/Restaurant-Intelligence-System"
    },
    {
      title: "Supply Chain Inventory Optimisation",
      type: "Business Analytics & Data Engineering",
      category: "data-ml",
      year: "2025",
      description: "Dynamic safety stock and multi-echelon reorder point modeling for 30,000+ SKUs across 26 regions, featuring dual-axis ABC-XYZ segmentation and high-performance pre-aggregated dashboards.",
      technologies: ["Python", "Streamlit", "Power BI", "SQLite", "Pandas", "NumPy", "Data Modeling"],
      features: [
        "Dual-axis ABC-XYZ demand volatility and value segmentation classifying 30,000+ SKUs across 26 geographic regions",
        "Calculated dynamic Reorder Points (ROP) factoring in supplier lead time variance to maintain a 95% service level",
        "Pre-aggregated statistical queries in Python, boosting dashboard rendering speed by 40% compared to native DAX queries",
        "Automated data pipeline transforming raw supply chain inventory records into normalized SQLite tables",
        "Interactive scenario simulator for evaluating stockout risks against holding costs"
      ],
      highlights: [
        "Classified 30,000+ SKUs into dynamic ABC-XYZ inventory categories",
        "Maintained 95% service level while minimizing dead-stock capital allocation",
        "40% faster dashboard rendering via Python pre-aggregation over native DAX",
        "End-to-end data pipeline from raw supply records to executive KPI dashboard"
      ],
      codeLink: "https://github.com/BinkeXu"
    },
    {
      title: "Job Application Lifecycle Manager (JALM)",
      type: "Systems Automation & Full-Stack",
      category: "fullstack",
      year: "2026",
      description: "High-performance hybrid desktop automation platform featuring headless CLI workflows for autonomous AI coding agents, in-app Job Description editing, local Ollama LLM integration, and a debounced 75 FPS UI architecture.",
      technologies: ["Python", "CustomTkinter", ".NET 8.0 (C#)", "SQLite (WAL Mode)", "Headless CLI (AI Agents)", "Ollama LLM", "OpenXML SDK"],
      features: [
        "Headless CLI interface (cli.py) engineered for autonomous AI agent workflows (Antigravity) with structured --json output across add, list, set-status, set-jd, and stats",
        "Dedicated Job Description modal with scrollable editor, right-click context menu, and dual-persistence synchronization to SQLite and local disk (job_description.txt)",
        "Local LLM integration via Ollama for intelligent role categorisation, with toolbar bypass and in-flight cancellation controls",
        "Hybrid desktop architecture combining a Python CustomTkinter GUI with a C# .NET 8.0 background service for real-time filesystem tracking",
        "Automated headless CV and Cover Letter customization utilizing OpenXML SDK for instantaneous template generation"
      ],
      highlights: [
        "75 FPS window resizing: slashed redraw latency from 357.7ms to 13.3ms (96% drop) via geometry debouncing and canvas freezing",
        "Headless AI agent automation enabling external LLMs and scripts to manage application pipelines programmatically",
        "Multi-process orchestration bundled into a portable single-binary desktop workflow",
        "100% dictionary compatibility hardening and fault-tolerant database connection fallbacks"
      ],
      codeLink: "https://github.com/BinkeXu/Job-Application-Lifecycle-Manager"
    },
    {
      title: "Machine Learning for Tree Image Segmentation",
      type: "Research Project",
      category: "research",
      year: "2022 - 2024",
      description: "Novel deep learning and evolutionary optimization research for precise tree canopy segmentation from high-resolution remote sensing imagery, developed in collaboration with Landcare Research and published in IEEE conferences.",
      technologies: ["Python", "PyTorch", "Genetic Algorithms", "CNNs", "U-Net", "DeepLabV3+", "LinkNet", "OpenCV", "Remote Sensing"],
      features: [
        "GA-U-Net-B: Genetic algorithm-based Neural Architecture Search (NAS) automatically designing tailored U-Net architectures",
        "Block-based chromosomal encoding scheme optimizing network depth, layer topology, filter counts, and pooling strategies",
        "Ensemble semantic segmentation pipeline aggregating U-Net, LinkNet, and DeepLabV3+ with diverse pre-trained backbones",
        "Fine-grained segmentation detail validation on complex native New Zealand forest canopy datasets",
        "Authored 2 peer-reviewed IEEE conference publications (SSCI 2022 Singapore and MIGARS 2024)"
      ],
      highlights: [
        "GA-U-Net-B reduced model parameters by 95% (31M down to 1.5M) while boosting accuracy by 14% over baseline U-Net",
        "Ensemble architecture achieved peak Dice coefficient of 86.13% on remote sensing imagery",
        "Presented research at IEEE SSCI 2022 (Singapore) and IEEE MIGARS 2024",
        "Successful multi-year collaboration with Landcare Research and Victoria University of Wellington"
      ],
      codeLink: "https://github.com/BinkeXu"
    },
    // Academic & University Projects (Categorized under Academic Projects filter)
    {
      title: "COVID-19 Analytics Dashboard",
      type: "Academic Project",
      category: "academic",
      year: "2021",
      description: "Interactive web application visualizing global COVID-19 pandemic trajectories on an interactive world map with country-specific drill-downs and population-adjusted metrics.",
      technologies: ["React", "TypeScript", "react-simple-maps", "styled-components", "PapaParse"],
      features: [
        "Interactive world map with color-coded choropleth based on infection density",
        "Dynamic tooltips showing granular stats, vaccination progress, and per-capita metrics",
        "Client-side CSV processing with PapaParse and memoized country statistics aggregation"
      ],
      highlights: [
        "Type-safe development using TypeScript and modular styled-components",
        "Fluid map panning, zooming, and responsive data panel navigation"
      ],
      codeLink: "https://github.com/BinkeXu/covid-world-map"
    },
    {
      title: "Home IoT Device Dashboard",
      type: "Academic Project",
      category: "academic",
      year: "2020",
      description: "Ionic React web application visualizing live sensor telemetry streamed from MQTT over WebSockets in real time across simulated household rooms.",
      technologies: ["React", "Ionic", "TypeScript", "MQTT (Paho)", "Socket.IO", "Chart.js", "Node.js"],
      features: [
        "Real-time sensor telemetry across 5 zones (living, kitchen, dining, bedroom, bathroom)",
        "Dynamic Chart.js visualizations tracking room activity and battery levels",
        "Lightweight Node.js / Socket.IO relay broadcasting updates across connected clients"
      ],
      highlights: [
        "End-to-end data pipeline from MQTT broker to reactive browser interface",
        "Desktop notifications triggered upon inactivity thresholds"
      ],
      codeLink: "https://github.com/BinkeXu/IoT-React"
    },
    {
      title: "Rocket Mission Control System",
      type: "Academic Project",
      category: "academic",
      year: "2020",
      description: "Centralized web telemetry control hub bridging telemetry streams between flight simulation, avionics, and rocket telemetry subsystems.",
      technologies: ["Node.js", "React", "GitLab CI", "Flight Simulation", "Avionics"],
      features: [
        "Telemetry ingestion, parsing, storage, and real-time visualization for aerospace simulations",
        "Structured multi-user mission control dashboard interface",
        "Collaborative team development managed under GitLab CI/CD"
      ],
      highlights: [
        "Complex distributed systems integration and real-time telemetry processing",
        "Rigorous Agile sprint execution in a multi-developer team"
      ],
      codeLink: "https://github.com/BinkeXu"
    },
    {
      title: "Chatroom App",
      type: "Academic Project",
      category: "academic",
      year: "2021",
      description: "End-to-end Android chat application enabling real-time, multi-user messaging within a local network environment.",
      technologies: ["React Native", "Firebase", "Android", "Real-Time WebSocket"],
      features: [
        "Real-time multi-user communication and instant message propagation",
        "User authentication and personal profile customization",
        "Firebase Firestore cloud backend for message persistence"
      ],
      highlights: [
        "Full-stack mobile application development with React Native",
        "Real-time state synchronization with offline tolerance"
      ],
      codeLink: "https://github.com/BinkeXu"
    },
    {
      title: "Personal Portfolio Website",
      type: "Academic Project",
      category: "academic",
      year: "2025",
      description: "Modern, responsive portfolio website built with React and Glassmorphism styling to showcase professional experience and engineering case studies.",
      technologies: ["React", "JavaScript", "CSS3", "HTML5", "GitHub Pages"],
      features: [
        "Glassmorphism surface design with backdrop blur and responsive CSS Grid",
        "Single-card expansion logic with auto-centering scroll animations",
        "Categorized filtering across data pipelines, research, and systems engineering"
      ],
      highlights: [
        "Custom design system implemented without heavy UI component libraries",
        "Automated deployment to GitHub Pages via gh-pages"
      ],
      codeLink: "https://github.com/BinkeXu/binke-xu-portfolio"
    }
  ];

/**
 * Project Category Filters
 */
const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'data-ml', label: 'Data & ML Systems' },
  { id: 'fullstack', label: 'Full-Stack & Systems' },
  { id: 'research', label: 'Research Projects' },
  { id: 'academic', label: 'Academic Projects' }
];

/**
 * Helper to safely extract the completion/latest year from single years ("2026")
 * or year ranges ("2022 - 2024").
 */
const parseProjectYear = (yearStr) => {
  if (!yearStr) return 2020;
  const matches = String(yearStr).match(/\d{4}/g);
  if (matches && matches.length > 0) {
    return Math.max(...matches.map(Number));
  }
  const parsed = parseInt(yearStr, 10);
  return isNaN(parsed) ? 2020 : parsed;
};

/**
 * Projects Component
 */
const Projects = () => {
  // State management for modal interaction and filters
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all'); // 'all', 'data-ml', 'fullstack', 'research', 'academic'
  const [sortBy, setSortBy] = useState('year'); // 'year', 'techStack'

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  // Close modal on Escape key and lock body scroll while modal is open
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  /**
   * Opens repository link or handles fallback
   */
  const handleViewCode = (codeLink) => {
    if (typeof codeLink === 'string' && codeLink.trim().length > 0) {
      window.open(codeLink, '_blank', 'noopener,noreferrer');
    } else {
      window.open('https://github.com/BinkeXu', '_blank', 'noopener,noreferrer');
    }
  };

  /**
   * Opens live demo link
   */
  const handleViewDemo = (demoLink) => {
    if (typeof demoLink === 'string' && demoLink.trim().length > 0) {
      window.open(demoLink, '_blank', 'noopener,noreferrer');
    }
  };

  /**
   * Filter and sort projects
   */
  const getFilteredAndSortedProjects = () => {
    let filtered = [...projects];

    // Filter by category
    if (activeCategory !== 'all') {
      filtered = filtered.filter(p => p.category === activeCategory);
    }

    // Sort
    filtered.sort((a, b) => {
      if (sortBy === 'year') {
        const yearA = parseProjectYear(a.year);
        const yearB = parseProjectYear(b.year);
        return yearB - yearA;
      } else if (sortBy === 'techStack') {
        return b.technologies.length - a.technologies.length;
      }
      return 0;
    });

    return filtered;
  };

  const filteredProjects = getFilteredAndSortedProjects();

  return (
    <div className="projects" data-reveal>
      <div className="container">
        <header className="projects-page-header">
          <h2>Engineering Projects</h2>
          <p className="projects-page-subtitle">
            Production data pipelines, local AI systems, and peer-reviewed research architectures
          </p>
        </header>

        {/* 1. Flagship Hero Project Spotlight */}
        <section className="featured-hero-section" data-reveal>
          <div className="featured-hero-card">
            <div className="featured-hero-top">
              <div className="featured-badge-group">
                <span className="featured-label">FLAGSHIP SHOWCASE</span>
                <span className="featured-year">{featuredProject.year} • {featuredProject.role}</span>
              </div>
              <div className="featured-actions">
                <button
                  className="btn btn-demo-live"
                  onClick={() => handleViewDemo(featuredProject.demoLink)}
                >
                  <span className="pulsing-live-dot"></span>
                  Live Demo on Vercel ↗
                </button>
                <button
                  className="btn btn-featured-code"
                  onClick={() => handleViewCode(featuredProject.codeLink)}
                >
                  GitHub Repository ↗
                </button>
              </div>
            </div>

            <h3 className="featured-title">{featuredProject.title}</h3>

            <div className="featured-tags">
              {featuredProject.technologies.map((tech, idx) => (
                <span key={idx} className="featured-tech-tag">{tech}</span>
              ))}
            </div>

            {/* Case Study 3-Column Layout */}
            <div className="case-study-grid">
              <div className="case-study-box challenge-box">
                <div className="box-header">
                  <span className="box-icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <circle cx="12" cy="12" r="6" />
                      <circle cx="12" cy="12" r="2" />
                    </svg>
                  </span>
                  <h4>The Challenge</h4>
                </div>
                <p>{featuredProject.caseStudy.challenge}</p>
              </div>

              <div className="case-study-box solution-box">
                <div className="box-header">
                  <span className="box-icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                      <path d="M9 18h6" />
                      <path d="M10 22h4" />
                    </svg>
                  </span>
                  <h4>The Solution</h4>
                </div>
                <p>{featuredProject.caseStudy.solution}</p>
              </div>

              <div className="case-study-box architecture-box">
                <div className="box-header">
                  <span className="box-icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                    </svg>
                  </span>
                  <h4>Architecture & Performance Win</h4>
                </div>
                <p>{featuredProject.caseStudy.architectureWin}</p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Curated Project Catalog Section */}
        <section className="projects-section" data-reveal>
          <div className="section-title-wrap">
            <h3>Project Catalog & Case Studies</h3>
            <p className="section-subtitle">Click any card to expand full architecture, features, and measurable impact</p>
          </div>

          {/* Category Filter Tabs */}
          <div className="category-tabs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`category-tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setSelectedProject(null);
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Sort & Tech Controls */}
          <div className="filter-controls">
            <div className="filter-group">
              <label htmlFor="sort-select">Sort by:</label>
              <select
                id="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="filter-select"
              >
                <option value="year">Year (Newest First)</option>
                <option value="techStack">Tech Stack Breadth</option>
              </select>
            </div>

            <div className="filter-info">
              Showing {filteredProjects.length} projects
            </div>
          </div>

          {/* Project Cards Grid */}
          <div className="projects-list">
            {filteredProjects.map((project) => (
              <div
                key={project.title}
                data-project-title={project.title}
                className="project-card"
                onClick={() => handleOpenModal(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleOpenModal(project);
                  }
                }}
                aria-label={`Open details for ${project.title}`}
              >
                <div className="project-header">
                  <h4>{project.title}</h4>
                  <div className="project-meta">
                    <span className="project-type">{project.type}</span>
                    <span className="project-year">{project.year}</span>
                  </div>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  <h5>Technologies Used:</h5>
                  <div className="tech-tags">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="tech-tag more-indicator">+{project.technologies.length - 4} more</span>
                    )}
                  </div>
                </div>

                <div className="project-actions">
                  <div className="action-buttons">
                    {project.demoLink && (
                      <button
                        className="btn btn-demo"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleViewDemo(project.demoLink);
                        }}
                        aria-label={`View live demo for ${project.title}`}
                      >
                        <span className="pulsing-live-dot mini"></span>
                        Live Demo ↗
                      </button>
                    )}
                    {project.codeLink && (
                      <button
                        className="btn btn-secondary"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleViewCode(project.codeLink);
                        }}
                        aria-label={`View code for ${project.title}`}
                      >
                        View Code ↗
                      </button>
                    )}
                    <button
                      className="btn-expand-toggle"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenModal(project);
                      }}
                      aria-label={`Explore case study for ${project.title}`}
                    >
                      Explore Case Study ↗
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Modal Window for Centered Expanded Project View (Mounted directly to body via Portal) */}
        {selectedProject && typeof document !== 'undefined' && createPortal(
          <div
            className="project-modal-backdrop"
            onClick={handleCloseModal}
            role="presentation"
          >
            <div
              className="project-modal-dialog"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-project-title"
            >
              <div className="modal-header">
                <div className="modal-title-group">
                  <div className="modal-badges">
                    <span className="modal-badge-type">{selectedProject.type}</span>
                    <span className="modal-badge-year">{selectedProject.year}</span>
                  </div>
                  <h3 id="modal-project-title" className="modal-title">{selectedProject.title}</h3>
                </div>
                <button
                  className="modal-close-btn"
                  onClick={handleCloseModal}
                  aria-label="Close project details modal"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>

              <div className="modal-body">
                <p className="modal-description">{selectedProject.description}</p>

                <div className="modal-section">
                  <h4 className="modal-section-title">Technologies Used</h4>
                  <div className="modal-tech-tags">
                    {selectedProject.technologies.map((tech, idx) => (
                      <span key={idx} className="modal-tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>

                {selectedProject.features && selectedProject.features.length > 0 && (
                  <div className="modal-section">
                    <h4 className="modal-section-title">Key Engineering Features</h4>
                    <ul className="modal-list features-list">
                      {selectedProject.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedProject.highlights && selectedProject.highlights.length > 0 && (
                  <div className="modal-section">
                    <h4 className="modal-section-title">Measurable Highlights & Business Impact</h4>
                    <ul className="modal-list highlights-list">
                      {selectedProject.highlights.map((highlight, idx) => (
                        <li key={idx}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="modal-footer">
                <div className="modal-actions">
                  {selectedProject.demoLink && (
                    <button
                      className="btn btn-demo"
                      onClick={() => handleViewDemo(selectedProject.demoLink)}
                      aria-label={`View live demo for ${selectedProject.title}`}
                    >
                      <span className="pulsing-live-dot mini"></span>
                      Live Demo ↗
                    </button>
                  )}
                  {selectedProject.codeLink && (
                    <button
                      className="btn btn-secondary"
                      onClick={() => handleViewCode(selectedProject.codeLink)}
                      aria-label={`View code for ${selectedProject.title}`}
                    >
                      View Code ↗
                    </button>
                  )}
                </div>
                <button
                  className="btn-modal-done"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
      </div>
    </div>
  );
};

export default Projects;
