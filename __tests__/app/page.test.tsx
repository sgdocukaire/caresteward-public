import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../../app/page';

// Mock the ProblemSolutionGraphic component
jest.mock('../../components/ProblemSolutionGraphic', () => {
  return function MockProblemSolutionGraphic() {
    return <div data-testid="problem-solution-graphic">Problem Solution Graphic</div>;
  };
});

describe('Home Page', () => {
  beforeEach(() => {
    render(<Home />);
  });

  describe('Rendering', () => {
    it('renders the main page without crashing', () => {
      expect(screen.getByRole('main')).toBeInTheDocument();
    });

    it('renders the main heading', () => {
      expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
      expect(screen.getByText('UI Component Showcase')).toBeInTheDocument();
    });

    it('renders the description paragraph', () => {
      const description = screen.getByText(/A responsive, three-step visual component/);
      expect(description).toBeInTheDocument();
    });

    it('renders the ProblemSolutionGraphic component', () => {
      expect(screen.getByTestId('problem-solution-graphic')).toBeInTheDocument();
    });

    it('renders the footer text', () => {
      expect(screen.getByText(/Built with Next.js, TypeScript, and Tailwind CSS/)).toBeInTheDocument();
    });
  });

  describe('Layout and Styling', () => {
    it('has the correct main container classes', () => {
      const main = screen.getByRole('main');
      expect(main).toHaveClass('min-h-screen', 'bg-gray-50');
    });

    it('has the correct container structure', () => {
      const container = screen.getByRole('main').querySelector('.container.mx-auto.px-4.py-16');
      expect(container).toBeInTheDocument();
    });

    it('has centered text alignment for the header section', () => {
      const headerSection = screen.getByRole('main').querySelector('.text-center.mb-12');
      expect(headerSection).toBeInTheDocument();
    });

    it('has the correct heading styling', () => {
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toHaveClass('text-4xl', 'font-bold', 'text-gray-900', 'mb-4');
    });

    it('has the correct description styling', () => {
      const description = screen.getByText(/A responsive, three-step visual component/);
      expect(description).toHaveClass('text-xl', 'text-gray-600', 'max-w-2xl', 'mx-auto');
    });

    it('has the correct footer styling', () => {
      const footer = screen.getByText(/Built with Next.js, TypeScript, and Tailwind CSS/);
      expect(footer).toHaveClass('text-gray-500', 'text-sm');
    });
  });

  describe('Content Structure', () => {
    it('has proper heading hierarchy', () => {
      const headings = screen.getAllByRole('heading');
      expect(headings).toHaveLength(1); // Only the main h1 heading
    });

    it('has descriptive text content', () => {
      expect(screen.getByText('UI Component Showcase')).toBeInTheDocument();
      expect(screen.getByText(/responsive, three-step visual component/)).toBeInTheDocument();
      expect(screen.getByText(/Next.js, TypeScript, and Tailwind CSS/)).toBeInTheDocument();
    });

    it('includes technology stack information', () => {
      const techStack = screen.getByText(/Next.js, TypeScript, and Tailwind CSS/);
      expect(techStack).toBeInTheDocument();
    });
  });

  describe('Component Integration', () => {
    it('integrates the ProblemSolutionGraphic component', () => {
      const graphicComponent = screen.getByTestId('problem-solution-graphic');
      expect(graphicComponent).toBeInTheDocument();
    });

    it('positions the graphic component correctly in the layout', () => {
      const main = screen.getByRole('main');
      const graphic = screen.getByTestId('problem-solution-graphic');
      expect(main).toContainElement(graphic);
    });
  });

  describe('Responsive Design', () => {
    it('uses responsive container classes', () => {
      const container = screen.getByRole('main').querySelector('.container.mx-auto');
      expect(container).toBeInTheDocument();
    });

    it('uses responsive padding classes', () => {
      const container = screen.getByRole('main').querySelector('.px-4.py-16');
      expect(container).toBeInTheDocument();
    });

    it('uses responsive text sizing', () => {
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toHaveClass('text-4xl');
    });
  });

  describe('Accessibility', () => {
    it('has semantic HTML structure with main element', () => {
      expect(screen.getByRole('main')).toBeInTheDocument();
    });

    it('has proper heading structure', () => {
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toBeInTheDocument();
    });

    it('has descriptive text content for screen readers', () => {
      expect(screen.getByText('UI Component Showcase')).toBeInTheDocument();
      expect(screen.getByText(/A responsive, three-step visual component/)).toBeInTheDocument();
    });
  });

  describe('Component Behavior', () => {
    it('renders consistently across re-renders', () => {
      const { rerender } = render(<Home />);
      expect(screen.getByText('UI Component Showcase')).toBeInTheDocument();
      
      rerender(<Home />);
      expect(screen.getByText('UI Component Showcase')).toBeInTheDocument();
    });

    it('maintains structure across re-renders', () => {
      const { rerender } = render(<Home />);
      const initialStructure = screen.getByRole('main').innerHTML;
      
      rerender(<Home />);
      const reRenderedStructure = screen.getByRole('main').innerHTML;
      
      expect(reRenderedStructure).toBe(initialStructure);
    });
  });
}); 