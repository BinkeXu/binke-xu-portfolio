import React from 'react';
import './Publications.css';

/**
 * Publications Component
 * 
 * Displays peer-reviewed academic publications and research impact metrics.
 * 
 * Features:
 * - Research statistics highlighting IEEE publications & international presentations
 * - Academic publication cards with author highlighting (Binke Xu)
 * - Measurable research achievements (95% parameter reduction, peak Dice scores)
 * - Direct links to IEEE Xplore digital library
 * - Research domain specializations
 */
/**
 * Curated Academic Publications Data
 */
const publications = [
  {
    title: "Ensemble learning based on neural networks for tree image segmentation",
    authors: "Binke Xu, Bing Xue, Jan Schindler, and Mengjie Zhang",
    journal: "2024 International Conference on Machine Intelligence for GeoAnalytics and Remote Sensing (MIGARS)",
    year: "2024",
    doi: "10.1109/MIGARS61475.2024.10543666",
    url: "https://doi.org/10.1109/MIGARS61475.2024.10543666",
    abstract: "This paper develops a high-performance ensemble semantic segmentation architecture combining U-Net, LinkNet, and DeepLabV3+ with diverse backbones for tree canopy segmentation in high-resolution remote sensing imagery. The proposed method demonstrates superior boundary precision and robust generalizability across complex forest environments.",
    type: "IEEE Conference Paper",
    highlights: [
      "Engineered an ensemble segmentation framework (U-Net + LinkNet + DeepLabV3+) reaching an 86.13% peak Dice score",
      "Improved segmentation accuracy by 0.893% on quantitative benchmarks with fine-grained boundary extraction",
      "Delivered technical presentation at IEEE MIGARS 2024 and collaborated with remote sensing research teams",
      "Addressed real-world forestry canopy monitoring challenges in New Zealand with Manaaki Whenua – Landcare Research"
    ]
  },
  {
    title: "Automatically designing u-nets using a genetic algorithm for tree image segmentation",
    authors: "Binke Xu, Ying Bi, Bing Xue, Jan Schindler, Brent Martin, and Mengjie Zhang",
    journal: "2022 IEEE Symposium Series on Computational Intelligence (SSCI)",
    year: "2022",
    doi: "10.1109/SSCI51031.2022.10022204",
    url: "https://doi.org/10.1109/SSCI51031.2022.10022204",
    abstract: "This paper introduces GA-U-Net-B, a genetic algorithm-based evolutionary Neural Architecture Search (NAS) approach that automatically designs tailored convolutional neural networks for tree segmentation on New Zealand remote sensing data. It drastically reduces network complexity while improving segmentation accuracy.",
    type: "IEEE Conference Paper",
    highlights: [
      "Engineered the GA-U-Net-B framework, slashing model parameters by 95% (from 31M down to 1.5M parameters)",
      "Boosted segmentation accuracy by 14% (Dice coefficient improved from 71.4% to 85.56%) over baseline U-Net",
      "Delivered conference presentation at IEEE SSCI 2022 in Singapore",
      "Presented poster session at 'Bridging the gap between remote sensing and tree modelling with data science'",
      "Validated evolutionary architecture search for practical ecological and environmental monitoring"
    ]
  }
];

const researchAreas = [
  'Computer Vision',
  'Semantic Image Segmentation',
  'Neural Architecture Search (NAS)',
  'Genetic Algorithms & Heuristic Search',
  'Deep Learning Ensembles',
  'Remote Sensing & GeoAnalytics',
  'U-Net / DeepLabV3+ / LinkNet',
  'PyTorch & High-Performance Computing'
];

const Publications = () => {
  return (
    <div className="publications" data-reveal>
      <div className="container">
        <header className="publications-page-header">
          <h2 className="publications-title">Peer-Reviewed Publications & Research</h2>
          <p className="publications-page-subtitle">
            Academic research in evolutionary neural architecture search and computer vision, published with IEEE
          </p>
        </header>

        {/* Academic Publications Section */}
        <section className="publications-section" data-reveal>
          <div className="section-title-wrap">
            <h3>Published Conference Papers</h3>
            <p className="section-subtitle">Collaborations with Manaaki Whenua – Landcare Research and Victoria University of Wellington</p>
          </div>

          <div className="publications-list">
            {publications.map((pub) => (
              <div key={pub.doi} className="publication-card">
                <div className="publication-header">
                  <h4>{pub.title}</h4>
                  <span className="publication-type">{pub.type}</span>
                </div>

                <div className="publication-meta-grid">
                  <div className="meta-row">
                    <span className="meta-label">Authors:</span>
                    <span className="meta-value">
                      {pub.authors.split(', ').map((author, i, arr) => (
                        <span key={i}>
                          {author.includes('Binke Xu') ? <strong className="highlight-author">{author}</strong> : author}
                          {i < arr.length - 1 ? ', ' : ''}
                        </span>
                      ))}
                    </span>
                  </div>
                  <div className="meta-row">
                    <span className="meta-label">Venue:</span>
                    <span className="meta-value">{pub.journal}</span>
                  </div>
                  <div className="meta-row">
                    <span className="meta-label">Year:</span>
                    <span className="meta-value">{pub.year}</span>
                  </div>
                  <div className="meta-row">
                    <span className="meta-label">DOI:</span>
                    <span className="meta-value">{pub.doi}</span>
                  </div>
                </div>

                <div className="publication-content">
                  <p className="publication-abstract">{pub.abstract}</p>

                  {pub.highlights && (
                    <div className="publication-highlights">
                      <h5>Measurable Research Highlights</h5>
                      <ul>
                        {pub.highlights.map((highlight, i) => (
                          <li key={i}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="publication-footer-actions">
                    <a
                      href={pub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-pub-ieee"
                    >
                      View Paper on IEEE Xplore ↗
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Research Areas Section */}
        <section className="research-areas-section" data-reveal>
          <div className="section-title-wrap text-center">
            <h3>Specialized Research Domains</h3>
            <p className="section-subtitle">Core methodologies and computational intelligence focus</p>
          </div>
          <div className="research-tags">
            {researchAreas.map((area) => (
              <span key={area} className="research-tag">{area}</span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Publications;
