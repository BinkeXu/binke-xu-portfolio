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

const Skills = () => {
  const technicalSkills = [
    { 
      name: 'Python', 
      icon: <img src={pythonLogo} alt="Python" />
    },
    { 
      name: 'PyTorch', 
      icon: <img src={pytorchLogo} alt="PyTorch" />
    },
    { 
      name: 'Java', 
      icon: <img src={javaLogo} alt="Java" />
    },
    { 
      name: 'Node.js', 
      icon: <img src={nodejsLogo} alt="Node.js" />
    },
    { 
      name: 'React', 
      icon: <img src={reactLogo} alt="React" />
    },
    { 
      name: 'SQL', 
      icon: <img src={sqlLogo} alt="SQL" />
    },
    { 
      name: 'Azure', 
      icon: <img src={azureLogo} alt="Azure" />
    },
    { 
      name: 'Git', 
      icon: <img src={gitLogo} alt="Git" />
    },
    { 
      name: 'PostgreSQL', 
      icon: <img src={postgresqlLogo} alt="PostgreSQL" />
    },
  ];

  const softSkills = [
    'Problem Solving', 'Critical Thinking', 'Project Management', 
    'Team Collaboration', 'Research & Analysis', 'Communication',
    'Agile/Scrum', 'CI/CD Pipelines'
  ];

  const toolsTechnologies = [
    { 
      name: 'GitLab', 
      icon: <img src={gitlabLogo} alt="GitLab" />
    },
    { 
      name: 'Agile (Scrum)', 
      icon: <img src={agileLogo} alt="Agile" />
    },
    { 
      name: 'CI/CD pipelines', 
      icon: <img src={cicdLogo} alt="CI/CD" />
    },
    { 
      name: 'OpenCV', 
      icon: <img src={opencvLogo} alt="OpenCV" />
    },
    { 
      name: 'Pandas', 
      icon: <img src={pandasLogo} alt="Pandas" />
    },
    { 
      name: 'NumPy', 
      icon: <img src={numpyLogo} alt="NumPy" />
    },
    { 
      name: 'TensorFlow', 
      icon: <img src={tensorflowLogo} alt="TensorFlow" />
    },
    { 
      name: 'Firebase', 
      icon: <img src={firebaseLogo} alt="Firebase" />
    },
    { 
      name: 'React Native', 
      icon: <img src={reactNativeLogo} alt="React Native" />
    },
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
        <h2>Skills & Expertise</h2>

        {/* Two-column panels for core capabilities */}
        <div className="skills-layout">
          <section className="skills-panel" data-reveal>
            <div className="panel-header">
              <h3>Technical Skills</h3>
            </div>
            <div className="panel-grid skills-grid">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-icon">{skill.icon}</div>
                  <div className="skill-name">{skill.name}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="skills-panel" data-reveal>
            <div className="panel-header">
              <h3>Tools & Technologies</h3>
            </div>
            <div className="panel-grid tools-grid">
              {toolsTechnologies.map((tool, index) => (
                <div key={index} className="tool-card">
                  <div className="tool-icon">{tool.icon}</div>
                  <div className="tool-name">{tool.name}</div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Full-width panels */}
        <section className="skills-panel" data-reveal>
          <div className="panel-header">
            <h3>Soft Skills</h3>
          </div>
          <div className="soft-skills-list">
            {softSkills.map((skill, index) => (
              <span key={index} className="soft-skill-tag">{skill}</span>
            ))}
          </div>
        </section>

        <section className="skills-panel" data-reveal>
          <div className="panel-header">
            <h3>Certifications</h3>
          </div>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="certification-card">
                <div className="cert-header">
                  <h4>{cert.name}</h4>
                  <button
                    className="credential-button"
                    onClick={() => handleShowCredential(cert.credentialUrl)}
                  >
                    Show Credential
                  </button>
                </div>
                <p>{cert.description}</p>
                <span className="cert-year">{cert.year}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skills;
