import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProblemSolutionGraphic from '../../components/ProblemSolutionGraphic';

describe('ProblemSolutionGraphic', () => {
  beforeEach(() => {
    render(<ProblemSolutionGraphic />);
  });

  describe('Rendering', () => {
    it('renders the component without crashing', () => {
      expect(screen.getByRole('region')).toBeInTheDocument();
    });

    it('renders the main section with correct id', () => {
      const section = screen.getByRole('region');
      expect(section).toHaveAttribute('id', 'problem-solution');
    });

    it('renders all three steps with correct titles', () => {
      expect(screen.getByText('Your Challenge')).toBeInTheDocument();
      expect(screen.getByText('Our Expertise')).toBeInTheDocument();
      expect(screen.getByText('Your Solution')).toBeInTheDocument();
    });

    it('renders all step descriptions', () => {
      expect(screen.getByText('Overwhelm & Confusion')).toBeInTheDocument();
      expect(screen.getByText('Expertise & Guidance')).toBeInTheDocument();
      expect(screen.getByText('Clarity & Peace of Mind')).toBeInTheDocument();
    });

    it('renders all SVG icons', () => {
      // Check for SVG elements (they should be present as they're part of the component)
      const svgElements = document.querySelectorAll('svg');
      expect(svgElements.length).toBeGreaterThan(0);
    });
  });

  describe('Structure and Layout', () => {
    it('has the correct container structure', () => {
      const container = screen.getByRole('region').querySelector('.mx-auto.max-w-5xl');
      expect(container).toBeInTheDocument();
    });

    it('has the correct card structure with white background', () => {
      const card = screen.getByRole('region').querySelector('.bg-white');
      expect(card).toBeInTheDocument();
    });

    it('has responsive grid layout classes', () => {
      const grid = screen.getByRole('region').querySelector('.grid.grid-cols-1.md\\:grid-cols-5');
      expect(grid).toBeInTheDocument();
    });
  });

  describe('Step Icons and Styling', () => {
    it('renders step icons with correct styling classes', () => {
      const icons = document.querySelectorAll('.h-16.w-16.rounded-full');
      expect(icons.length).toBe(3); // Three steps
    });

    it('has correct color schemes for each step', () => {
      // Challenge step (red theme)
      const challengeIcon = document.querySelector('.bg-red-100.text-red-700');
      expect(challengeIcon).toBeInTheDocument();

      // Expertise step (brand theme)
      const expertiseIcon = document.querySelector('.bg-brand\\/10.text-brand');
      expect(expertiseIcon).toBeInTheDocument();

      // Solution step (green theme)
      const solutionIcon = document.querySelector('.bg-green-100.text-green-700');
      expect(solutionIcon).toBeInTheDocument();
    });
  });

  describe('Arrow Indicators', () => {
    it('renders arrow indicators between steps', () => {
      const arrows = document.querySelectorAll('.text-gray-300');
      expect(arrows.length).toBeGreaterThan(0);
    });

    it('has responsive arrow rotation classes', () => {
      const arrows = document.querySelectorAll('.transform.rotate-90.md\\:rotate-0');
      expect(arrows.length).toBeGreaterThan(0);
    });
  });

  describe('Typography and Text Content', () => {
    it('renders step titles with correct font weight', () => {
      const titles = document.querySelectorAll('.text-lg.font-semibold.text-gray-900');
      expect(titles.length).toBe(3);
    });

    it('renders step descriptions with correct styling', () => {
      const descriptions = document.querySelectorAll('.text-sm.text-gray-600');
      expect(descriptions.length).toBe(3);
    });

    it('has whitespace-nowrap class for responsive text handling', () => {
      const nowrapElements = document.querySelectorAll('.whitespace-nowrap');
      expect(nowrapElements.length).toBeGreaterThan(0);
    });
  });

  describe('Accessibility', () => {
    it('has semantic HTML structure with section element', () => {
      expect(screen.getByRole('region')).toBeInTheDocument();
    });

    it('uses proper heading hierarchy', () => {
      const headings = screen.getAllByRole('heading');
      expect(headings.length).toBe(3); // Three step titles
    });

    it('has descriptive text content for screen readers', () => {
      expect(screen.getByText('Your Challenge')).toBeInTheDocument();
      expect(screen.getByText('Our Expertise')).toBeInTheDocument();
      expect(screen.getByText('Your Solution')).toBeInTheDocument();
    });
  });

  describe('Responsive Design', () => {
    it('includes responsive grid classes', () => {
      const grid = document.querySelector('.grid.grid-cols-1.md\\:grid-cols-5');
      expect(grid).toBeInTheDocument();
    });

    it('includes responsive padding classes', () => {
      const container = document.querySelector('.px-6.lg\\:px-8');
      expect(container).toBeInTheDocument();
    });

    it('includes responsive arrow rotation classes', () => {
      const arrows = document.querySelectorAll('.rotate-90.md\\:rotate-0');
      expect(arrows.length).toBeGreaterThan(0);
    });
  });

  describe('Component Props and Behavior', () => {
    it('renders consistently without props', () => {
      const { rerender } = render(<ProblemSolutionGraphic />);
      expect(screen.getByText('Your Challenge')).toBeInTheDocument();
      
      rerender(<ProblemSolutionGraphic />);
      expect(screen.getByText('Your Challenge')).toBeInTheDocument();
    });

    it('maintains structure across re-renders', () => {
      const { rerender } = render(<ProblemSolutionGraphic />);
      const initialStructure = screen.getByRole('region').innerHTML;
      
      rerender(<ProblemSolutionGraphic />);
      const reRenderedStructure = screen.getByRole('region').innerHTML;
      
      expect(reRenderedStructure).toBe(initialStructure);
    });
  });
}); 