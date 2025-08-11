import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Chatroom App",
      type: "Individual Project",
      year: "2021",
      description: "Independently conceptualized and executed a personal project from the research to the development phase.",
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
      description: "Collaborated with a 6-member team over two trimesters to develop a rocket control system.",
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
    }
  ];

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

  return (
    <div className="projects">
      <div className="container">
        <h2>Projects & Experience</h2>
        
        <section className="work-experience-section">
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

        <section className="projects-section">
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
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
