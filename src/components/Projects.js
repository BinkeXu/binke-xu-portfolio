import React from 'react';
import './Projects.css';

const Projects = () => {
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
      codeLink: "https://github.com/BinkeXu/IoT-React"
    },{
      title: "COVID-19 World Map",
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
      codeLink: "https://github.com/BinkeXu/covid-world-map"
    }];

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

  return (
    <div className="projects" data-reveal>
      <div className="container">
        <h2>Projects & Experience</h2>
        
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

        <section className="projects-section" data-reveal>
          <h3>Engineering Projects</h3>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
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
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                
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

                <div className="project-actions">
                  <button
                    className="btn btn-secondary"
                    onClick={() => handleViewCode(project.codeLink)}
                    aria-label={`View code for ${project.title}`}
                  >
                    View Code
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
