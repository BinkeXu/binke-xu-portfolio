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
import reactNativeLogo from '../logos/React Native.png';
import agileLogo from '../logos/Agile.png';
import cicdLogo from '../logos/cicd.png';
import firebaseLogo from '../logos/Firebase.png';

/**
 * Skills Component
 * 
 * This component displays the portfolio owner's technical skills, tools, soft skills,
 * and professional certifications in an organized, visually appealing layout.
 * 
 * Features:
 * - Technical skills with logo icons
 * - Tools and technologies showcase
 * - Soft skills display
 * - Professional certifications with verification links
 * - Responsive grid layouts
 * - Interactive credential verification
 * 
 * @returns {JSX.Element} The skills and expertise page component
 */
const Skills = () => {
  const skillCategories = [
    {
      id: 'ai-ml',
      title: 'AI & Machine Learning',
      description: 'Deep Learning, NLP, and Computer Vision expertise',
      skills: [
        { name: 'Python', icon: <img src={pythonLogo} alt="Python" /> },
        { name: 'PyTorch', icon: <img src={pytorchLogo} alt="PyTorch" /> },
        { name: 'OpenCV', icon: <img src={opencvLogo} alt="OpenCV" /> },
        { name: 'Pandas', icon: <img src={pandasLogo} alt="Pandas" /> },
        { name: 'NumPy', icon: <img src={numpyLogo} alt="NumPy" /> },
        { name: 'TensorFlow', icon: <img src={tensorflowLogo} alt="TensorFlow" /> },
      ]
    },
    {
      id: 'web-eng',
      title: 'Web Engineering',
      description: 'Building scalable full-stack applications',
      skills: [
        { name: 'React', icon: <img src={reactLogo} alt="React" /> },
        { name: 'Node.js', icon: <img src={nodejsLogo} alt="Node.js" /> },
        { name: 'Java', icon: <img src={javaLogo} alt="Java" /> },
        { name: 'React Native', icon: <img src={reactNativeLogo} alt="React Native" /> },
        { name: 'SQL', icon: <img src={sqlLogo} alt="SQL" /> },
        { name: 'PostgreSQL', icon: <img src={postgresqlLogo} alt="PostgreSQL" /> },
      ]
    },
    {
      id: 'infrastructure',
      title: 'Tooling & Data',
      description: 'Infrastructure, version control, and cloud',
      skills: [
        { name: 'Azure', icon: <img src={azureLogo} alt="Azure" /> },
        { name: 'Git', icon: <img src={gitLogo} alt="Git" /> },
        { name: 'GitLab', icon: <img src={gitlabLogo} alt="GitLab" /> },
        { name: 'Firebase', icon: <img src={firebaseLogo} alt="Firebase" /> },
        { name: 'Agile (Scrum)', icon: <img src={agileLogo} alt="Agile" /> },
        { name: 'CI/CD', icon: <img src={cicdLogo} alt="CI/CD" /> },
      ]
    }
  ];

  const softSkills = [
    'Problem Solving', 'Critical Thinking', 'Project Management',
    'Team Collaboration', 'Research & Analysis', 'Communication'
  ];

  const certifications = [
    {
      name: 'Microsoft Azure Fundamentals (AZ-900)',
      year: '2025',
      description: 'Azure cloud computing fundamentals and services',
      credentialUrl: 'https://learn.microsoft.com/api/credentials/share/en-us/BinkeXu-1919/E70621C19FE6373D?sharingId=A198A0FD00270AE4'
    },
    {
      name: 'Microsoft Azure AI Fundamentals (AI-900)',
      year: '2025',
      description: 'Azure AI and machine learning fundamentals',
      credentialUrl: 'https://learn.microsoft.com/api/credentials/share/en-us/BinkeXu-1919/AE3C2CE8399C566C?sharingId=A198A0FD00270AE4'
    }
  ];

  const handleShowCredential = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="skills">
      <div className="container">
        <header className="skills-header" data-reveal>
          <h2>Expertise & Skills</h2>
          <p className="skills-subtitle">Specialized in Artificial Intelligence and Full-Stack Engineering</p>
        </header>

        {/* Bento Grid Layout */}
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

          {/* Soft Skills Pill Section */}
          <div className="bento-item soft-skills" data-reveal>
            <div className="category-info">
              <h3>Core Competencies</h3>
              <p>Professional soft skills and methodologies</p>
            </div>
            <div className="soft-skills-container">
              {softSkills.map((skill, index) => (
                <span key={index} className="pill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <section className="certifications-section" data-reveal>
          <div className="section-header">
            <h3>Professional Certifications</h3>
          </div>
          <div className="certs-container">
            {certifications.map((cert, index) => (
              <div key={index} className="cert-card">
                <div className="cert-badge">Microsoft</div>
                <div className="cert-content">
                  <h4>{cert.name}</h4>
                  <p>{cert.description}</p>
                  <div className="cert-footer">
                    <span className="year">{cert.year}</span>
                    <button
                      className="verify-btn"
                      onClick={() => handleShowCredential(cert.credentialUrl)}
                    >
                      Verify Credential
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
