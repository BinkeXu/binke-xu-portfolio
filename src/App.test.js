/**
 * App Component Test Suite
 * 
 * Unit tests verifying portfolio application mounting, navigation,
 * recruiter-focused value propositions, project interactions, and skills matrices.
 */

import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('Binke Xu Portfolio Test Suite', () => {
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

    // Click project card to test card expansion
    const researchCard = screen.getByText(/machine learning for tree image segmentation/i).closest('.project-card');
    fireEvent.click(researchCard);
    expect(screen.getByText('★ EXPANDED')).toBeInTheDocument();
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
});
