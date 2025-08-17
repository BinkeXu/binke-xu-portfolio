import React from 'react';
import './Publications.css';

/**
 * Publications Component
 * 
 * This component displays the portfolio owner's academic publications, research statistics,
 * and research areas in a professional academic format.
 * 
 * Features:
 * - Research statistics overview
 * - Academic publication details
 * - Research area tags
 * - Conference presentation highlights
 * - Professional research collaboration information
 * 
 * @returns {JSX.Element} The publications and research page component
 */
const Publications = () => {
  /**
   * Academic Publications Data
   * Contains detailed information about published research papers
   * Each publication includes title, authors, journal/conference, year, and highlights
   */
  const publications = [
    {
      title: "Ensemble learning based on neural networks for tree image segmentation",
      authors: "Binke Xu, Bing Xue, Jan Schindler, and Mengjie Zhang",
      journal: "2024 International Conference on Machine Intelligence for GeoAnalytics and Remote Sensing (MIGARS)",
      year: "2024",
      doi: "IEEE, 2024",
      abstract: "This paper uses an ensemble learning approach for semantic segmentation on tree remote sensing data. It improved the segmentation accuracy by 0.893% on quantity measure and provided fine-grained predictions in segmentation detail.",
      type: "Conference Paper",
      highlights: [
        "Delivered presentation in MIGARS conference and discussed with peer experts",
        "Improved segmentation accuracy by 0.893% on quantity measure",
        "Provided fine-grained predictions in segmentation detail"
      ]
    },
    {
      title: "Automatically designing u-nets using a genetic algorithm for tree image segmentation",
      authors: "Binke Xu, Ying Bi, Bing Xue, Jan Schindler, Brent Martin, and Mengjie Zhang",
      journal: "2022 IEEE Symposium Series on Computational Intelligence (SSCI)",
      year: "2022",
      doi: "IEEE, 2022, pp. 626-633",
      abstract: "This paper uses a genetic algorithm for designing a CNN tailored to a real-world tree image segmentation task in New Zealand, with a presentation at SSCI 2022 in Singapore.",
      type: "Conference Paper",
      highlights: [
        "Increased segmentation accuracy by 14%",
        "Reduced model parameters by 90%",
        "Presented at SSCI 2022 in Singapore",
        "Poster session at 'Bridging the gap between remote sensing and tree modelling with data science' conference",
        "Met and discussed with research teams from Canada and Singapore"
      ]
    }
  ];

  /**
   * Research Areas Data
   * Key research domains and specializations
   * These areas are displayed as interactive tags for better visual organization
   */
  const researchAreas = [
    'Artificial Intelligence', 'Machine Learning', 'Computer Vision', 
    'Image Segmentation', 'Neural Networks', 'Genetic Algorithms',
    'Remote Sensing', 'Tree Modelling', 'Deep Learning'
  ];

  return (
    <div className="publications" data-reveal>
      <div className="container">
        <h2 className="publications-title" data-reveal>Publications & Research</h2>
        
        {/* Research Statistics Section */}
        {/* 
          Overview of research achievements and impact
          Displays key metrics in an easy-to-scan format
        */}
        <section className="stats-section" data-reveal>
          <div className="stats-grid">
            {/* IEEE Publications Count */}
            <div className="stat-card">
              <h3>2</h3>
              <p>IEEE Publications</p>
            </div>
            {/* International Conferences Count */}
            <div className="stat-card">
              <h3>2</h3>
              <p>International Conferences</p>
            </div>
            {/* Research Collaborations Count */}
            <div className="stat-card">
              <h3>3+</h3>
              <p>Research Collaborations</p>
            </div>
          </div>
        </section>

        {/* Academic Publications Section */}
        {/* 
          Detailed display of published research papers
          Each publication shows comprehensive academic information
        */}
        <section className="publications-section" data-reveal>
          <h3>Academic Publications</h3>
          <div className="publications-list">
            {publications.map((pub, index) => (
              <div key={index} className="publication-card">
                {/* Publication Header with Title and Type */}
                <div className="publication-header">
                  <h4>{pub.title}</h4>
                  <span className="publication-type">{pub.type}</span>
                </div>
                
                {/* Publication Authors */}
                <div className="publication-authors">
                  <strong>Authors:</strong> {pub.authors}
                </div>
                
                {/* Journal or Conference Information */}
                <div className="publication-journal">
                  <strong>Journal/Conference:</strong> {pub.journal}
                </div>
                
                {/* Publication Year */}
                <div className="publication-year">
                  <strong>Year:</strong> {pub.year}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Research Areas Section */}
        {/* 
          Displays key research domains and specializations
          Areas are shown as interactive tags for better organization
        */}
        <section className="research-areas-section" data-reveal>
          <h3>Research Areas</h3>
          <div className="research-tags">
            {researchAreas.map((area, index) => (
              <span key={index} className="research-tag">{area}</span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Publications;
