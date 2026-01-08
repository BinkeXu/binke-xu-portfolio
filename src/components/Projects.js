import React, { useState, useRef, useEffect } from 'react';
import './Projects.css';

/**
 * Projects Component
 * 
 * Displays a comprehensive view of engineering projects and work experience.
 * Features expandable project cards that show condensed information by default
 * and reveal full details only on click interaction.
 * 
 * Key Features:
 * - Interactive project cards with click-only expansion
 * - Single card expansion (only one card expanded at a time)
 * - Filtering and sorting by year and tech stack
 * - Work experience section with achievements
 * - Code link handling with fallback popup
 * - Responsive design for all screen sizes
 */
const Projects = () => {
  // State management for card interactions
  const [expandedCard, setExpandedCard] = useState(null); // Tracks which card is currently expanded
  const [sortBy, setSortBy] = useState('year'); // Default sort by year
  const [techFilter, setTechFilter] = useState('all'); // Tech stack filter
  const projectsContainerRef = useRef(null); // Reference to the projects list container

  /**
   * Handles card click events
   * Toggles card expansion state - clicking same card collapses it,
   * clicking different card expands it and collapses others
   * @param {number} index - Index of the clicked card
   */
  const handleCardClick = (index) => {
    console.log('Click on card:', index, 'Current expanded:', expandedCard);
    if (expandedCard === index) {
      // If clicking the same card, collapse it
      setExpandedCard(null);
    } else {
      // Expand the clicked card and collapse any other expanded card
      setExpandedCard(index);
    }
  };

  /**
   * Scroll expanded card into view
   * Centers the expanded card on the screen for better visibility
   */
  useEffect(() => {
    if (expandedCard !== null) {
      // Wait for the DOM to update and expansion animation to begin
      setTimeout(() => {
        const cards = document.querySelectorAll('.project-card');
        const expandedElement = cards[expandedCard];
        if (expandedElement) {
          expandedElement.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'nearest'
          });
        }
      }, 100); // Small delay to allow expansion animation to start
    }
  }, [expandedCard]);

  /**
   * Handles background clicks to collapse all cards
   * Detects clicks on the background (not on cards) and resets state
   * @param {Event} e - Click event object
   */
  const handleBackgroundClick = (e) => {
    // If clicking on the background (not on a card), collapse all cards
    if (e.target === projectsContainerRef.current || e.target.closest('.projects') === projectsContainerRef.current) {
      setExpandedCard(null);
    }
  };

  /**
   * Effect hook to handle clicks outside the projects container
   * Adds global click listener to collapse cards when clicking elsewhere
   */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (projectsContainerRef.current && !projectsContainerRef.current.contains(e.target)) {
        setExpandedCard(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  /**
   * Project data array containing all engineering projects
   * Each project includes title, type, year, description, technologies,
   * features, highlights, and optional code link
   */
  const projects = [
    {
      title: "Chatroom App",
      type: "Individual Project",
      year: "2021",
      description: "End-to-end Android chat app enabling real-time, multi-user communication on a local network.",
      technologies: ["React Native", "Firebase", "Android", "Real-time Communication"],
      features: [
        "Real-time, multi-user communication within a local network environment",
        "User registration, login/logout functionality",
        "Chatrooms and individual user profiles",
        "Google Firebase backend for data storage and retrieval"
      ],
      highlights: [
        "Full-stack mobile application development",
        "Real-time data synchronization",
        "User authentication and profile management"
      ]
    },
    {
      title: "Rocket Mission Control System",
      type: "Group Project",
      year: "2020",
      description: "Web control system enabling telemetry flow across simulation, avionics, and rocket subsystems.",
      technologies: ["Node.js", "React", "GitLab", "Flight Simulation", "Avionics"],
      features: [
        "Seamless communication and data transmission among flight simulation, avionics, and rocket systems",
        "Robust web application serving as the core of the system",
        "User interface for simulation page with data reception, parsing, storage, and transmission",
        "Efficient version control management using GitLab"
      ],
      highlights: [
        "Multi-system integration and communication",
        "Real-time data processing and visualization",
        "Team collaboration and project management",
        "Complex system architecture design"
      ]
    },
    {
      title: "Home IoT Device Dashboard",
      type: "Individual Project",
      year: "2020",
      description: "An Ionic React web app that visualizes activity data from MQTT in real time.",
      technologies: ["React", "Ionic", "TypeScript", "MQTT (Paho over WebSocket)", "Socket.IO", "Chart.js", "Node.js", "Express"],
      features: [
        "Real-time activity dashboard across rooms (living, kitchen, dining, toilet, bedroom)",
        "Live charts (bar, pie) and per-room battery status",
        "Desktop notification on 5-minute inactivity"
      ],
      highlights: [
        "Implemented end-to-end data flow: MQTT → React (Paho) → Socket.IO server → live UI updates",
        "Built responsive Ionic UI with routing and chart visualizations",
        "Lightweight Node/Express Socket.IO relay to broadcast updates across pages"
      ],
      codeLink: "https://github.com/BinkeXu/IoT-React",
    }, {
      title: "COVID-19 Analytics Dashboard",
      type: "Individual Project",
      year: "2021",
      description: "Interactive web application visualizing global COVID-19 statistics on an interactive world map with real-time data exploration and comprehensive country analytics.",
      technologies: ["React", "TypeScript", "react-simple-maps", "styled-components", "PapaParse", "CSV Processing"],
      features: [
        "Interactive world map with color-coded countries based on COVID-19 case density",
        "Real-time tooltips showing detailed statistics on hover",
        "Comprehensive country data panels with cases, deaths, vaccinations, and population metrics",
        "Zoom and pan capabilities with smooth map navigation",
        "Population-adjusted metrics (per-million calculations) for fair country comparisons",
        "Vaccination progress visualization with color-coded progress bars",
        "Responsive design optimized for desktop and mobile devices"
      ],
      highlights: [
        "Full-stack data visualization with robust CSV parsing and error handling",
        "Type-safe development with comprehensive TypeScript interfaces",
        "Modern glassmorphism UI design with smooth animations and transitions",
        "Efficient data processing with memoized country statistics aggregation",
        "Professional-grade error handling and fallback systems for production use"
      ],
      codeLink: "https://github.com/BinkeXu/covid-world-map",
    }, {
      "title": "E-Commerce Customer Churn Prediction",
      "type": "Individual Project",
      "year": "2025",
      "description": "End-to-end MLOps pipeline for predicting customer churn using machine learning, featuring a production-ready API, interactive web dashboard, and comprehensive monitoring infrastructure.",
      "technologies": ["Python", "Machine Learning", "FastAPI", "Streamlit", "Docker", "Kubernetes", "Prometheus", "Grafana", "LightGBM", "XGBoost", "Scikit-learn", "Pandas", "NumPy"],
      "features": [
        "RFM analysis-based feature engineering for customer segmentation",
        "Multi-algorithm ML pipeline with hyperparameter tuning and cross-validation",
        "RESTful API with single and batch prediction endpoints",
        "Interactive Streamlit dashboard for real-time predictions and analytics",
        "Docker containerization with multi-service orchestration",
        "Kubernetes deployment manifests for production scaling",
        "Full monitoring stack with Prometheus metrics and Grafana dashboards",
        "CI/CD pipeline with GitHub Actions for automated deployment"
      ],
      "highlights": [
        "Complete MLOps implementation from data engineering to production deployment",
        "Production-ready architecture with proper error handling and monitoring",
        "Multi-container microservices design with service discovery",
        "Advanced ML techniques including ensemble methods and feature importance analysis",
        "Infrastructure as Code with comprehensive Kubernetes and Docker configurations",
        "Real-time customer churn scoring with actionable business insights"
      ],
      codeLink: "https://github.com/BinkeXu/E-Commerce-Customer-Churn-Prediction",
    }, {
      "title": "Machine Learning for Tree Image Segmentation",
      "type": "Research Projects",
      "year": "2022 - 2024",
      "description": "Developed novel deep learning methods for accurate and efficient tree segmentation from remote sensing imagery, combining automated neural architecture search and ensemble learning for robust performance.",
      "technologies": ["Python", "Deep Learning", "PyTorch", "Genetic Algorithms", "CNNs", "U-Net", "DeepLabV3+", "LinkNet", "Remote Sensing"],
      "features": [
        "GA-Unet-B: Genetic algorithm–based framework for automatically designing efficient U-Net architectures",
        "Block-based encoding scheme to optimize network depth, convolutional layers, filters, and pooling strategies",
        "Ensemble framework combining U-Net, LinkNet, and DeepLabV3+ with multiple pre-trained backbones",
        "Output probability matrix averaging for robust model aggregation",
        "Training, pre-selection, and final selection pipeline for optimal ensemble performance"
      ],
      "highlights": [
        "GA-Unet-B achieved a average Dice coefficient of 85.56%, a 14% improvement over Standard U-Net (71.4%)",
        "Reduced model size by 95% (1.5M vs. 31M parameters) while improving segmentation accuracy",
        "Ensemble method outperformed individual models and recent approaches, reaching Dice 86.13% vs. 85.23%",
        "Demonstrated strong generalization and robustness with fewer overfitting issues",
        "Advanced practical applications of automated architecture search and ensemble learning for forestry and environmental monitoring"
      ]
    }, {
      "title": "Restaurant Intelligence System (RIS)",
      "type": "Individual Project",
      "year": "2025",
      "description": "Production-grade, local-first RAG platform for analyzing restaurant reviews, featuring hybrid retrieval, intelligent query translation, and a professional executive dashboard.",
      "technologies": ["Python", "LangChain", "Ollama (Llama 3.2)", "ChromaDB", "Streamlit", "RAGAS", "FlashRank", "BM25", "Pydantic", "Pandas"],
      "features": [
        "Natural language chat interface for grounded customer insight extraction",
        "Intelligent query translation automatically extracting restaurant names and ratings",
        "Hybrid search architecture combining semantic vector search with BM25 keywords",
        "Local cross-encoder reranking using FlashRank for higher retrieval precision",
        "Executive Streamlit dashboard with real-time AI parameter configuration",
        "Deep inspection mode for viewing generated DB filters and source documents",
        "Quantitative RAG evaluation framework measuring Faithfulness and Relevancy",
        "Scalable data engineering pipeline with Pydantic validation and sanitization"
      ],
      "highlights": [
        "Zero-knowledge architecture: 100% local execution ensures total data privacy",
        "Advanced RAG implementation including self-querying and result reranking",
        "Production-level UI/UX with custom CSS design and interactive inspection",
        "Scientific performance validation with a dedicated golden test suite",
        "Modular technical design allowing easy swapping of LLMs and embedding models",
        "Grounded AI logic preventing hallucinations via strict system prompting"
      ],
      "codeLink": "https://github.com/BinkeXu/Restaurant-Intelligence-System"
    }
  ];

  /**
   * Work experience data array
   * Contains professional experience with company details and achievements
   */
  const workExperience = [
    {
      title: "Research Assistant",
      company: "Victoria University of Wellington",
      location: "Wellington, New Zealand",
      period: "September 2022 – March 2023",
      description: "Collaborated with Landcare Research on a project focusing on tree image segmentation in the Wellington region.",
      achievements: [
        "Implemented advanced image segmentation method for precise image segmentation, increasing accuracy by 2%",
        "Utilized Python libraries including OpenCV, PyTorch, and NumPy to create a comprehensive pipeline for training, testing, and visualizing results for tree segmentation",
        "Engaged with project supervisors and external team members to assess project progress, address challenges, and strategize future steps",
        "Authored formal progress reports and delivered presentations to the team, elucidating project advancements, methodologies, and outcomes"
      ]
    }
  ];

  /**
   * Handles code link clicks with fallback for missing links
   * Opens GitHub repository if available, otherwise shows informative popup
   * @param {string} codeLink - URL to the project's code repository
   */
  const handleViewCode = (codeLink) => {
    const isValidLink = typeof codeLink === 'string' && codeLink.trim().length > 0;
    if (isValidLink) {
      try {
        window.open(codeLink, '_blank', 'noopener,noreferrer');
        return;
      } catch (error) {
        // fallthrough to popup
      }
    }

    // Create fallback popup for missing code links
    const popup = window.open('', 'CodeLinkPending', 'width=520,height=360');
    if (popup) {
      popup.document.write(`
        <!doctype html>
        <html lang="en">
          <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Code Link Coming Soon</title>
            <style>
              body { font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; margin: 0; padding: 24px; background: #f7fafc; color: #1a202c; }
              .card { background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; box-shadow: 0 6px 20px rgba(0,0,0,0.06); }
              h1 { font-size: 18px; margin: 0 0 12px; }
              p { margin: 0 0 16px; line-height: 1.5; }
              .actions { display: flex; gap: 10px; }
              .btn { appearance: none; border: 0; padding: 10px 14px; border-radius: 10px; cursor: pointer; font-weight: 600; }
              .primary { background: linear-gradient(135deg, #6b8afd, #5cc6ff); color: #fff; }
              .secondary { background: #edf2f7; color: #1a202c; }
              a { color: inherit; text-decoration: none; }
            </style>
          </head>
          <body>
            <div class="card">
              <h1>Code link will be added soon</h1>
              <p>This project's repository link hasn't been provided yet. Please check back later, or view my GitHub profile in the meantime.</p>
              <div class="actions">
                <a class="btn primary" href="https://github.com/BinkeXu" target="_blank" rel="noopener noreferrer">Open GitHub Profile</a>
                <button class="btn secondary" onclick="window.close()">Close</button>
              </div>
            </div>
          </body>
        </html>
      `);
      popup.document.close();
    } else {
      // As a final fallback
      alert('Code link will be added soon.');
    }
  };

  /**
   * Handles demo link clicks
   * Opens the live demo in a new tab
   * @param {string} demoLink - URL to the project's live demo
   */
  const handleViewDemo = (demoLink) => {
    if (typeof demoLink === 'string' && demoLink.trim().length > 0) {
      try {
        window.open(demoLink, '_blank', 'noopener,noreferrer');
      } catch (error) {
        console.error('Error opening demo link:', error);
      }
    }
  };

  /**
   * Get unique years from projects for sorting
   */
  const getUniqueYears = () => {
    const years = [...new Set(projects.map(project => project.year))];
    return years.sort((a, b) => parseInt(b) - parseInt(a)); // Sort years descending
  };

  /**
   * Get common tech stacks for filtering
   */
  const getCommonTechStacks = () => {
    const allTechs = projects.flatMap(project => project.technologies);
    const techCount = {};
    allTechs.forEach(tech => {
      techCount[tech] = (techCount[tech] || 0) + 1;
    });

    // Get techs that appear in at least 2 projects
    const commonTechs = Object.entries(techCount)
      .filter(([tech, count]) => count >= 2)
      .sort(([, a], [, b]) => b - a)
      .map(([tech]) => tech);

    // Add important techs that should always be available for filtering
    const importantTechs = ['Python', 'Machine Learning'];
    const additionalTechs = importantTechs.filter(tech => !commonTechs.includes(tech));

    return [...commonTechs, ...additionalTechs];
  };

  /**
   * Filter and sort projects based on current filters
   */
  const getFilteredAndSortedProjects = () => {
    let filteredProjects = [...projects];

    // Apply tech stack filter
    if (techFilter !== 'all') {
      filteredProjects = filteredProjects.filter(project =>
        project.technologies.includes(techFilter)
      );
    }

    // Apply sorting
    filteredProjects.sort((a, b) => {
      if (sortBy === 'year') {
        return parseInt(b.year) - parseInt(a.year); // Descending order
      } else if (sortBy === 'techStack') {
        // Sort by number of technologies (descending)
        return b.technologies.length - a.technologies.length;
      }
      return 0;
    });

    return filteredProjects;
  };

  const filteredProjects = getFilteredAndSortedProjects();
  const uniqueYears = getUniqueYears();
  const commonTechStacks = getCommonTechStacks();

  return (
    <div className="projects" data-reveal>
      <div className="container">
        <h2>Projects & Experience</h2>

        {/* Work Experience Section */}
        <section className="work-experience-section" data-reveal>
          <h3>Work Experience</h3>
          <div className="experience-list">
            {workExperience.map((exp, index) => (
              <div key={index} className="experience-card">
                <div className="experience-header">
                  <h4>{exp.title}</h4>
                  <div className="experience-meta">
                    <span className="company">{exp.company}</span>
                    <span className="location">{exp.location}</span>
                    <span className="period">{exp.period}</span>
                  </div>
                </div>
                <p className="experience-description">{exp.description}</p>
                <div className="achievements">
                  <h5>Key Achievements:</h5>
                  <ul>
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Engineering Projects Section */}
        <section className="projects-section" data-reveal>
          <h3>Engineering Projects</h3>

          {/* Filter Controls */}
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
                <option value="techStack">Tech Stack Complexity</option>
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="tech-filter">Filter by Tech:</label>
              <select
                id="tech-filter"
                value={techFilter}
                onChange={(e) => setTechFilter(e.target.value)}
                className="filter-select"
              >
                <option value="all">All Technologies</option>
                {commonTechStacks.map(tech => (
                  <option key={tech} value={tech}>{tech}</option>
                ))}
              </select>
            </div>

            <div className="filter-info">
              Showing {filteredProjects.length} of {projects.length} projects
            </div>
          </div>

          <div
            className="projects-list"
            ref={projectsContainerRef}
            onClick={handleBackgroundClick}
          >
            {filteredProjects.map((project, index) => {
              // Determine card state for rendering
              const isExpanded = expandedCard === index;

              console.log(`Card ${index}: expanded=${isExpanded}`);

              return (
                <div
                  key={index}
                  className={`project-card ${isExpanded ? 'expanded' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent background click handler from firing
                    handleCardClick(index);
                  }}
                >
                  {/* Project Header with Title and Meta Information */}
                  <div className="project-header">
                    <h4>{project.title}</h4>
                    <div className="project-meta">
                      <span className="project-type">{project.type}</span>
                      <span className="project-year">{project.year}</span>
                      {isExpanded && <span className="expanded-indicator">★ EXPANDED</span>}
                    </div>
                  </div>

                  {/* Project Description - Always Visible */}
                  <p className="project-description">{project.description}</p>

                  {/* Technologies Section - Shows limited tech tags when collapsed */}
                  <div className="project-technologies">
                    <h5>Technologies Used:</h5>
                    <div className="tech-tags">
                      {project.technologies.slice(0, isExpanded ? project.technologies.length : 3).map((tech, idx) => (
                        <span key={idx} className="tech-tag">{tech}</span>
                      ))}
                      {!isExpanded && project.technologies.length > 3 && (
                        <span className="tech-tag more-indicator">+{project.technologies.length - 3} more</span>
                      )}
                    </div>
                  </div>

                  {/* Expandable Content - Features and Highlights */}
                  {isExpanded && (
                    <>
                      <div className="project-features">
                        <h5>Key Features:</h5>
                        <ul>
                          {project.features.map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="project-highlights">
                        <h5>Highlights:</h5>
                        <ul>
                          {project.highlights.map((highlight, idx) => (
                            <li key={idx}>{highlight}</li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}

                  {/* Project Actions - View Code Button, Demo Button, and Expand Hint */}
                  <div className="project-actions">
                    <div className="action-buttons">
                      <button
                        className="btn btn-secondary"
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent card click handler from firing
                          handleViewCode(project.codeLink);
                        }}
                        aria-label={`View code for ${project.title}`}
                      >
                        View Code
                      </button>
                      {project.demoLink && (
                        <button
                          className="btn btn-primary"
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent card click handler from firing
                            handleViewDemo(project.demoLink);
                          }}
                          aria-label={`View live demo for ${project.title}`}
                        >
                          Live Demo
                        </button>
                      )}
                    </div>
                    {!isExpanded && (
                      <span className="expand-hint">Click to see more details</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
