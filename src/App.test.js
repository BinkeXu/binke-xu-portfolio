/**
 * App Component Test Suite
 * 
 * Unit tests verifying portfolio application mounting, navigation,
 * recruiter-focused value propositions, project interactions, and skills matrices.
 */

import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('Binke Xu Portfolio Test Suite', () => {
  beforeEach(() => {
    window.location.hash = '';
    jest.clearAllMocks();
  });

  test('renders home page directly with key recruiter signals and NZ work rights', () => {
    render(<App />);

    // Check recruiter hook: permanent resident status & work rights
    expect(screen.getAllByText(/permanent resident/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/full nz work rights/i).length).toBeGreaterThan(0);

    // Check title and subtitles
    expect(screen.getByRole('heading', { name: /software & data engineer/i, level: 2 })).toBeInTheDocument();

    // Check timeline items
    expect(screen.getByText('National Communications Officer')).toBeInTheDocument();
    expect(screen.getByText('Research Assistant')).toBeInTheDocument();
    expect(screen.getAllByText(/access community health/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/60 quotes/i).length).toBeGreaterThan(0);

    // Check stats bar updates
    expect(screen.getByText('MS Azure Certified')).toBeInTheDocument();
    expect(screen.getByText('2 Publications')).toBeInTheDocument();

    // Check dark mode is default
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
  });

  test('navigates to Projects section and verifies Flagship showcase and interaction', () => {
    render(<App />);

    // Click Projects in Navbar
    const projectsNavBtn = screen.getByRole('button', { name: /navigate to projects section/i });
    fireEvent.click(projectsNavBtn);

    // Verify Engineering Projects header and no duplicate experience section
    expect(screen.getByRole('heading', { name: /engineering projects/i, level: 2 })).toBeInTheDocument();
    expect(screen.queryByText('Professional Experience')).not.toBeInTheDocument();

    // Verify Flagship Showcase
    expect(screen.getByText('FLAGSHIP SHOWCASE')).toBeInTheDocument();
    expect(screen.getAllByText(/new zealand labour market & income intelligence dashboard/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/the challenge/i)).toBeInTheDocument();
    expect(screen.getByText(/the solution/i)).toBeInTheDocument();
    expect(screen.getByText(/architecture & performance win/i)).toBeInTheDocument();

    // Verify category filters
    const researchFilterBtn = screen.getByRole('button', { name: /research projects/i });
    fireEvent.click(researchFilterBtn);

    // Verify research project appears
    expect(screen.getByText(/machine learning for tree image segmentation/i)).toBeInTheDocument();

    // Click project card to test centered modal popup
    const researchCard = screen.getByText(/machine learning for tree image segmentation/i).closest('.project-card');
    fireEvent.click(researchCard);

    // Verify modal dialog opened
    const modalDialog = screen.getByRole('dialog');
    expect(modalDialog).toBeInTheDocument();
    expect(screen.getByText(/key engineering features/i)).toBeInTheDocument();
    expect(screen.getByText(/measurable highlights & business impact/i)).toBeInTheDocument();

    // Verify close button returns to clean grid layout
    const closeBtn = screen.getByRole('button', { name: /close project details modal/i });
    fireEvent.click(closeBtn);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  test('navigates to Skills section and verifies 3-pillar matrix and certifications', () => {
    render(<App />);

    // Click Skills in Navbar
    const skillsNavBtn = screen.getByRole('button', { name: /navigate to skills section/i });
    fireEvent.click(skillsNavBtn);

    // Verify 3 Pillars
    expect(screen.getByText('Data Engineering & Cloud')).toBeInTheDocument();
    expect(screen.getByText('Machine Learning & AI')).toBeInTheDocument();
    expect(screen.getByText('Software Engineering & Web')).toBeInTheDocument();

    // Verify core technologies
    expect(screen.getByText('Google BigQuery')).toBeInTheDocument();
    expect(screen.getByText('dbt (Data Build Tool)')).toBeInTheDocument();
    expect(screen.getByText('PyTorch')).toBeInTheDocument();

    // Verify Microsoft Certifications
    expect(screen.getByText(/azure fundamentals \(az-900\)/i)).toBeInTheDocument();
    expect(screen.getByText(/azure ai fundamentals \(ai-900\)/i)).toBeInTheDocument();
  });

  test('navigates to Publications section and verifies peer-reviewed papers', () => {
    render(<App />);

    // Click Publications in Navbar
    const pubNavBtn = screen.getByRole('button', { name: /navigate to publications section/i });
    fireEvent.click(pubNavBtn);

    // Verify peer-reviewed publications
    expect(screen.getByText(/peer-reviewed publications & research/i)).toBeInTheDocument();
    expect(screen.getByText(/ensemble learning based on neural networks for tree image segmentation/i)).toBeInTheDocument();
    expect(screen.getByText(/automatically designing u-nets using a genetic algorithm/i)).toBeInTheDocument();
    expect(screen.getAllByText(/view paper on ieee xplore ↗/i).length).toBe(2);
  });

  test('navigates to Contact section and verifies quick copy interaction and channels', () => {
    // Mock navigator.clipboard
    Object.assign(navigator, {
      clipboard: {
        writeText: jest.fn().mockImplementation(() => Promise.resolve()),
      },
    });

    render(<App />);

    // Click Contact in Navbar
    const contactNavBtn = screen.getByRole('button', { name: /navigate to contact section/i });
    fireEvent.click(contactNavBtn);

    // Verify contact methods
    expect(screen.getByRole('heading', { name: /get in touch/i })).toBeInTheDocument();
    expect(screen.getByText('Binkexu@gmail.com')).toBeInTheDocument();
    expect(screen.getByText('+64 022 154 6027')).toBeInTheDocument();

    // Verify copy buttons
    const copyEmailBtn = screen.getByRole('button', { name: /copy email address/i });
    fireEvent.click(copyEmailBtn);
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('Binkexu@gmail.com');
    expect(screen.getByText('Copied! ✓')).toBeInTheDocument();
  });

  test('renders unified footer with navigation links and back-to-top button', () => {
    render(<App />);

    // Verify Footer presence
    expect(screen.getByText(/built with react/i)).toBeInTheDocument();
    expect(screen.getAllByText(/wellington, nz/i).length).toBeGreaterThan(0);

    // Verify Back to Top button
    const backToTopBtn = screen.getByRole('button', { name: /scroll back to top of page/i });
    expect(backToTopBtn).toBeInTheDocument();
    fireEvent.click(backToTopBtn);
    expect(window.scrollTo).toHaveBeenCalled();

    // Verify Navbar brand button navigates home
    const brandBtn = screen.getByRole('button', { name: /return to home section/i });
    fireEvent.click(brandBtn);
    expect(screen.getByRole('heading', { name: /software & data engineer/i, level: 2 })).toBeInTheDocument();
  });
});
