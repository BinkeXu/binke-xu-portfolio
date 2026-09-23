import React from 'react';
import './Skills.css';
import pythonLogo from '../logos/Python.png';
import pytorchLogo from '../logos/pytorch.png';
import javaLogo from '../logos/java.png';
import nodejsLogo from '../logos/node-js.png';
import reactLogo from '../logos/React.png';
import sqlLogo from '../logos/sql.png';
import azureLogo from '../logos/azure.png';
import gitLogo from '../logos/git.png';
import postgresqlLogo from '../logos/PostgreSQL.png';
import gitlabLogo from '../logos/gitlab.png';
import opencvLogo from '../logos/opencv.png';
import pandasLogo from '../logos/Pandas.png';
import numpyLogo from '../logos/numpy.png';
import tensorflowLogo from '../logos/TensorFlow.png';
import agileLogo from '../logos/Agile.png';
import cicdLogo from '../logos/cicd.png';

/**
 * Clean SVG Helper for Technologies Without Dedicated PNG Files
 */
const SvgIcon = ({ type }) => {
  switch (type) {
    case 'bigquery':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
          <path d="M3 5v14c0 1.66 4 3 9 3 2.5 0 4.7-.34 6.2-1"></path>
          <path d="m19 19 3 3"></path>
        </svg>
      );
    case 'dbt':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      );
    case 'docker':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 12v3a5 5 0 0 0 5 5h6a5 5 0 0 0 5-5v-1"></path>
          <rect x="2" y="9" width="3" height="3" rx="0.5"></rect>
          <rect x="6" y="9" width="3" height="3" rx="0.5"></rect>
          <rect x="10" y="9" width="3" height="3" rx="0.5"></rect>
          <rect x="14" y="9" width="3" height="3" rx="0.5"></rect>
          <rect x="6" y="5" width="3" height="3" rx="0.5"></rect>
          <rect x="10" y="5" width="3" height="3" rx="0.5"></rect>
        </svg>
      );
    case 'k8s':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9"></circle>
          <path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6 5.6 18.4"></path>
        </svg>
      );
    case 'fastapi':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </svg>
      );
    case 'rag':
    case 'vector':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="6" cy="6" r="3"></circle>
          <circle cx="18" cy="6" r="3"></circle>
          <circle cx="18" cy="18" r="3"></circle>
          <circle cx="6" cy="18" r="3"></circle>
          <line x1="9" y1="6" x2="15" y2="6"></line>
          <line x1="9" y1="18" x2="15" y2="18"></line>
          <line x1="6" y1="9" x2="6" y2="15"></line>
          <line x1="18" y1="9" x2="18" y2="15"></line>
          <line x1="8.12" y1="8.12" x2="15.88" y2="15.88"></line>
        </svg>
      );
    case 'ai-chip':
    default:
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="2"></rect>
          <rect x="9" y="9" width="6" height="6"></rect>
          <line x1="9" y1="1" x2="9" y2="4"></line>
          <line x1="15" y1="1" x2="15" y2="4"></line>
          <line x1="9" y1="20" x2="9" y2="23"></line>
          <line x1="15" y1="20" x2="15" y2="23"></line>
          <line x1="20" y1="9" x2="23" y2="9"></line>
          <line x1="20" y1="14" x2="23" y2="14"></line>
          <line x1="1" y1="9" x2="4" y2="9"></line>
          <line x1="1" y1="14" x2="4" y2="14"></line>
        </svg>
      );
  }
};

/**
 * Skills Component - High-Impact 3-Pillar Matrix
 * 
 * Organized for rapid recruiter scanning across:
 * 1. Data Engineering & Cloud
 * 2. Machine Learning & AI
 * 3. Software Engineering & Web
 * Plus Microsoft Azure Certifications
 */
const skillCategories = [
  {
    id: 'data-cloud',
    title: 'Data Engineering & Cloud',
    description: 'Warehouse architecture, modern data transformations, and containerized deployment',
    skills: [
      { name: 'Google BigQuery', icon: <div className="svg-icon-wrap"><SvgIcon type="bigquery" /></div> },
      { name: 'dbt (Data Build Tool)', icon: <div className="svg-icon-wrap"><SvgIcon type="dbt" /></div> },
      { name: 'SQL', icon: <img src={sqlLogo} alt="SQL" /> },
      { name: 'PostgreSQL', icon: <img src={postgresqlLogo} alt="PostgreSQL" /> },
      { name: 'Microsoft Azure', icon: <img src={azureLogo} alt="Azure" /> },
      { name: 'Docker', icon: <div className="svg-icon-wrap"><SvgIcon type="docker" /></div> },
      { name: 'Kubernetes', icon: <div className="svg-icon-wrap"><SvgIcon type="k8s" /></div> },
      { name: 'CI/CD Pipelines', icon: <img src={cicdLogo} alt="CI/CD" /> },
      { name: 'GitLab CI', icon: <img src={gitlabLogo} alt="GitLab" /> }
    ]
  },
  {
    id: 'ai-ml',
    title: 'Machine Learning & AI',
    description: 'Deep learning, local RAG architectures, computer vision, and heuristic search',
    skills: [
      { name: 'Python', icon: <img src={pythonLogo} alt="Python" /> },
      { name: 'PyTorch', icon: <img src={pytorchLogo} alt="PyTorch" /> },
      { name: 'TensorFlow', icon: <img src={tensorflowLogo} alt="TensorFlow" /> },
      { name: 'OpenCV', icon: <img src={opencvLogo} alt="OpenCV" /> },
      { name: 'Local RAG (Ollama)', icon: <div className="svg-icon-wrap"><SvgIcon type="rag" /></div> },
      { name: 'ChromaDB (Vectors)', icon: <div className="svg-icon-wrap"><SvgIcon type="vector" /></div> },
      { name: 'LangChain & RAGAS', icon: <div className="svg-icon-wrap"><SvgIcon type="ai-chip" /></div> },
      { name: 'Pandas', icon: <img src={pandasLogo} alt="Pandas" /> },
      { name: 'NumPy', icon: <img src={numpyLogo} alt="NumPy" /> },
      { name: 'Genetic Algorithms', icon: <div className="svg-icon-wrap"><SvgIcon type="ai-chip" /></div> }
    ]
  },
  {
    id: 'software-web',
    title: 'Software Engineering & Web',
    description: 'Scalable full-stack systems, modern reactive dashboards, and high-speed APIs',
    skills: [
      { name: 'React 18 & Vite', icon: <img src={reactLogo} alt="React" /> },
      { name: 'FastAPI (Python)', icon: <div className="svg-icon-wrap"><SvgIcon type="fastapi" /></div> },
      { name: 'Node.js & Express', icon: <img src={nodejsLogo} alt="Node.js" /> },
      { name: 'JavaScript / TS', icon: <img src={reactLogo} alt="JavaScript" /> },
      { name: 'Java', icon: <img src={javaLogo} alt="Java" /> },
      { name: 'RESTful API Design', icon: <div className="svg-icon-wrap"><SvgIcon type="fastapi" /></div> },
      { name: 'Git & GitHub', icon: <img src={gitLogo} alt="Git" /> },
      { name: 'Agile & Scrum', icon: <img src={agileLogo} alt="Agile" /> }
    ]
  }
];

const certifications = [
  {
    name: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
    year: '2025',
    description: 'Validates foundational knowledge of cloud concepts, Azure architectural components, governance, security, and compliance.',
    credentialUrl: 'https://learn.microsoft.com/api/credentials/share/en-us/BinkeXu-1919/E70621C19FE6373D?sharingId=A198A0FD00270AE4'
  },
  {
    name: 'Microsoft Certified: Azure AI Fundamentals (AI-900)',
    year: '2025',
    description: 'Demonstrates fundamental understanding of machine learning principles, computer vision, natural language processing, and conversational AI on Azure.',
    credentialUrl: 'https://learn.microsoft.com/api/credentials/share/en-us/BinkeXu-1919/AE3C2CE8399C566C?sharingId=A198A0FD00270AE4'
  }
];

const Skills = () => {
  const handleShowCredential = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="skills">
      <div className="container">
        <header className="skills-header" data-reveal>
          <h2>Technical Expertise & Skills</h2>
          <p className="skills-subtitle">
            Curated across Production Data Pipelines, Machine Learning Systems, and Full-Stack Engineering
          </p>
        </header>

        {/* Bento Grid Layout - 3 Pillar Matrix */}
        <div className="bento-grid">
          {skillCategories.map((category) => (
            <div key={category.id} className={`bento-item ${category.id}`} data-reveal>
              <div className="category-info">
                <h3>{category.title}</h3>
                <p>{category.description}</p>
              </div>

              <div className="category-skills">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="skill-badge" title={skill.name}>
                    <div className="skill-badge-icon">{skill.icon}</div>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <section className="certifications-section" data-reveal>
          <div className="section-header">
            <h3>Professional Cloud & AI Certifications</h3>
            <p className="certs-subtitle">Verified credentials issued by Microsoft</p>
          </div>
          <div className="certs-container">
            {certifications.map((cert) => (
              <div key={cert.name} className="cert-card">
                <div className="cert-badge">Microsoft Certified</div>
                <div className="cert-content">
                  <h4>{cert.name}</h4>
                  <p>{cert.description}</p>
                  <div className="cert-footer">
                    <span className="year">Issued: {cert.year}</span>
                    <button
                      className="verify-btn"
                      onClick={() => handleShowCredential(cert.credentialUrl)}
                    >
                      Verify Credential ↗
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skills;
