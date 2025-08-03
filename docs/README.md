# Care Steward Public - Documentation

## Overview

Care Steward Public is a Next.js application showcasing professional UI components built with TypeScript and Tailwind CSS. The application demonstrates a responsive, three-step visual component that illustrates a problem-solution workflow.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Components](#components)
- [Testing](#testing)
- [Styling](#styling)
- [Development](#development)
- [Deployment](#deployment)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd caresteward-public
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage report
- `npm run test:ci` - Run tests for CI environment

## Project Structure

```
caresteward-public/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Home page component
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   └── ProblemSolutionGraphic.tsx
├── __tests__/            # Test files
│   ├── app/
│   └── components/
├── docs/                 # Documentation
├── tailwind.config.ts    # Tailwind CSS configuration
├── jest.config.js        # Jest configuration
├── jest.setup.js         # Jest setup file
└── package.json          # Dependencies and scripts
```

## Components

### ProblemSolutionGraphic

A responsive, three-step visual component that demonstrates a problem-solution workflow.

#### Features

- **Responsive Design**: Adapts to different screen sizes
- **Accessibility**: Semantic HTML with proper ARIA attributes
- **Visual Hierarchy**: Clear step progression with icons and arrows
- **Color Coding**: Each step has distinct color themes
- **Typography**: Consistent text styling and spacing

#### Usage

```tsx
import ProblemSolutionGraphic from '../components/ProblemSolutionGraphic';

export default function MyPage() {
  return (
    <div>
      <h1>My Page</h1>
      <ProblemSolutionGraphic />
    </div>
  );
}
```

#### Props

Currently, the component doesn't accept any props and is designed to be self-contained.

#### Structure

The component consists of three main sections:

1. **Your Challenge** (Red theme)
   - Icon: Warning triangle
   - Title: "Your Challenge"
   - Description: "Overwhelm & Confusion"

2. **Our Expertise** (Brand theme)
   - Icon: Shield with checkmark
   - Title: "Our Expertise"
   - Description: "Expertise & Guidance"

3. **Your Solution** (Green theme)
   - Icon: Checkmark in circle
   - Title: "Your Solution"
   - Description: "Clarity & Peace of Mind"

#### CSS Classes

The component uses Tailwind CSS classes for styling:

- **Container**: `bg-white p-8 rounded-xl shadow-md border border-gray-200`
- **Grid**: `grid grid-cols-1 md:grid-cols-5 gap-6`
- **Icons**: `h-16 w-16 rounded-full`
- **Typography**: `text-lg font-semibold text-gray-900`

## Testing

### Test Setup

The project uses Jest and React Testing Library for testing. The setup includes:

- **Jest Configuration**: `jest.config.js`
- **Test Setup**: `jest.setup.js`
- **Test Files**: Located in `__tests__/` directory

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run tests for CI
npm run test:ci
```

### Test Structure

Tests are organized to mirror the project structure:

```
__tests__/
├── app/
│   └── page.test.tsx          # Home page tests
└── components/
    └── ProblemSolutionGraphic.test.tsx  # Component tests
```

### Test Categories

Each component test covers:

- **Rendering**: Component renders without crashing
- **Structure**: Correct HTML structure and classes
- **Content**: Text content and accessibility
- **Styling**: CSS classes and responsive design
- **Behavior**: Component interactions and state
- **Accessibility**: Semantic HTML and ARIA attributes

### Example Test

```tsx
import { render, screen } from '@testing-library/react';
import ProblemSolutionGraphic from '../../components/ProblemSolutionGraphic';

describe('ProblemSolutionGraphic', () => {
  it('renders all three steps', () => {
    render(<ProblemSolutionGraphic />);
    
    expect(screen.getByText('Your Challenge')).toBeInTheDocument();
    expect(screen.getByText('Our Expertise')).toBeInTheDocument();
    expect(screen.getByText('Your Solution')).toBeInTheDocument();
  });
});
```

## Styling

### Tailwind CSS

The project uses Tailwind CSS for styling with a custom configuration:

#### Custom Colors

```typescript
colors: {
  brand: {
    DEFAULT: '#0B6055',
    light: '#5EEAD4',
    dark: '#0F766E',
  },
  background: {
    DEFAULT: '#FFFFFF',
    muted: '#F9FAFB',
  },
  text: {
    DEFAULT: '#1F2937',
    muted: '#4B5563',
  },
}
```

#### Custom Fonts

```typescript
fontFamily: {
  sans: ['Inter', 'sans-serif'],
}
```

### Responsive Design

The application is fully responsive with breakpoints:

- **Mobile**: Single column layout
- **Tablet**: Responsive grid with rotated arrows
- **Desktop**: Full grid layout with horizontal arrows

### Design System

#### Typography

- **Headings**: `text-4xl font-bold text-gray-900`
- **Body Text**: `text-xl text-gray-600`
- **Small Text**: `text-sm text-gray-500`

#### Spacing

- **Container**: `px-4 py-16`
- **Section**: `py-20`
- **Card**: `p-8`

#### Colors

- **Primary**: Brand colors (`#0B6055`)
- **Success**: Green (`text-green-700`)
- **Warning**: Red (`text-red-700`)
- **Neutral**: Gray scale

## Development

### Code Style

The project follows these conventions:

- **TypeScript**: Strict type checking
- **ESLint**: Code linting with Next.js rules
- **Prettier**: Code formatting (if configured)
- **Component Structure**: Functional components with TypeScript

### Adding New Components

1. Create component file in `components/` directory
2. Add TypeScript interfaces for props
3. Include proper accessibility attributes
4. Add responsive design classes
5. Create corresponding test file in `__tests__/components/`

### Adding New Pages

1. Create page file in `app/` directory
2. Follow Next.js 13+ app router conventions
3. Include proper metadata
4. Add corresponding test file

## Deployment

### Build for Production

```bash
npm run build
```

### Environment Variables

Create a `.env.local` file for local development:

```env
NEXT_PUBLIC_APP_NAME=Care Steward Public
```

### Deployment Platforms

The application can be deployed to:

- **Vercel**: Recommended for Next.js apps
- **Netlify**: Static site hosting
- **AWS Amplify**: Full-stack hosting
- **Docker**: Containerized deployment

### Performance Optimization

- **Image Optimization**: Next.js built-in image optimization
- **Code Splitting**: Automatic with Next.js
- **CSS Optimization**: Tailwind CSS purging
- **Bundle Analysis**: Use `@next/bundle-analyzer`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Run the test suite
6. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 