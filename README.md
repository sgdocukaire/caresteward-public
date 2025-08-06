# The Care Steward - UI Component Showcase

This repository contains a sample UI component built for The Care Steward (`https://thecaresteward.com`), a service that helps families navigate elder care crises.

This showcase demonstrates our approach to building clean, responsive, and professional front-end components.

## Components Showcase

### 1. Problem -> Solution Graphic
A responsive, three-step visual that explains our core value proposition to users. The component features:

- **Responsive Design**: Mobile-first approach with clean breakpoints
- **Professional Styling**: Tailwind CSS with custom brand colors
- **Accessible Icons**: SVG icons with proper semantic meaning
- **Smooth Transitions**: Arrow animations between steps
- **Clean Typography**: Professional font hierarchy and spacing

### 2. Interactive Form Demo
A comprehensive form component that demonstrates modern form handling patterns:

- **State Management**: Controlled inputs with React hooks
- **User Feedback**: Loading states and success messages
- **Form Validation**: HTML5 validation with custom styling
- **Accessibility**: Proper labels, ARIA attributes, and keyboard navigation
- **Responsive Design**: Mobile-optimized form layout

### 3. Data Visualization Component
An interactive chart component showcasing data handling capabilities:

- **Dynamic Data**: Real-time data switching between metrics
- **Responsive Charts**: Adaptive chart sizing and layout
- **Interactive Controls**: Metric selector with smooth transitions
- **Summary Statistics**: Key metrics display with calculations
- **Professional Styling**: Clean, modern chart design

### 4. Performance Monitor Dashboard
A real-time system monitoring component demonstrating:

- **Live Updates**: Simulated real-time metric updates
- **Status Indicators**: Color-coded health status for each metric
- **Interactive Controls**: Pause/resume monitoring functionality
- **Responsive Layout**: Adaptive grid layout for different screen sizes
- **Professional UI**: Dark theme with modern dashboard styling

### 5. Navigation Component
A modern navigation bar with smooth scrolling:

- **Sticky Navigation**: Transparent to solid background on scroll
- **Smooth Scrolling**: Animated navigation to page sections
- **Mobile Responsive**: Collapsible mobile menu
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **Brand Integration**: Consistent logo and styling

### 6. Footer Component
A comprehensive footer with multiple sections:

- **Company Information**: Logo, description, and social links
- **Quick Navigation**: Links to page sections
- **Contact Information**: Email and phone with icons
- **Legal Links**: Privacy policy, terms of service
- **Responsive Layout**: Adaptive grid for different screen sizes

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Custom SVG icons
- **Testing**: Jest + React Testing Library
- **Deployment**: Ready for Vercel, Netlify, or any static hosting

## Features

### Responsive Design
- Mobile-first approach
- Clean grid layout that adapts to screen size
- Proper spacing and typography at all breakpoints

### Professional Styling
- Custom brand color palette
- Consistent shadow and border styling
- Professional typography hierarchy

### Accessibility
- Semantic HTML structure
- Proper color contrast ratios
- Screen reader friendly icons

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd caresteward-public

# Install dependencies
npm install

# Run the development server
npm run dev
```

### Build for Production
```bash
# Build the application
npm run build

# Start the production server
npm start
```

### Testing
```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run tests for CI environment
npm run test:ci
```

## Component Usage

The `ProblemSolutionGraphic` component can be imported and used in any Next.js application:

```tsx
import ProblemSolutionGraphic from './components/ProblemSolutionGraphic';

export default function MyPage() {
  return (
    <div>
      <ProblemSolutionGraphic />
    </div>
  );
}
```

## Customization

### Colors
The component uses a custom brand color palette defined in `tailwind.config.ts`:

```typescript
colors: {
  brand: {
    DEFAULT: '#0B6055',
    light: '#5EEAD4', 
    dark: '#0F766E',
  }
}
```

### Content
The component text can be easily customized by modifying the JSX content in `components/ProblemSolutionGraphic.tsx`.

## Development

### Project Structure
```
caresteward-public/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   └── ProblemSolutionGraphic.tsx
├── __tests__/
│   ├── app/
│   │   └── page.test.tsx
│   ├── components/
│   │   └── ProblemSolutionGraphic.test.tsx
│   └── utils/
│       └── test-utils.ts
├── docs/
│   ├── README.md
│   ├── API.md
│   └── TESTING.md
├── tailwind.config.ts
├── jest.config.js
├── jest.setup.js
└── README.md
```

### Key Files
- `components/ProblemSolutionGraphic.tsx` - The main component
- `app/page.tsx` - Demo page showcasing the component
- `tailwind.config.ts` - Custom Tailwind configuration
- `jest.config.js` - Jest testing configuration
- `jest.setup.js` - Test setup and mocks
- `__tests__/` - Test files and utilities
- `docs/` - Comprehensive documentation

## Portfolio Context

This component was built as part of The Care Steward's user experience, demonstrating:

- **Modern React Patterns**: Functional components with TypeScript
- **Responsive Design**: Mobile-first, accessible design
- **Professional Styling**: Clean, modern UI with Tailwind CSS
- **Component Architecture**: Reusable, well-structured components
- **Comprehensive Testing**: Full test coverage with Jest and React Testing Library
- **Documentation**: Complete API and testing documentation

## Testing

The project includes comprehensive testing setup with:

- **Unit Tests**: Component rendering, structure, and behavior tests
- **Accessibility Tests**: ARIA attributes, semantic HTML, and screen reader support
- **Responsive Design Tests**: Mobile, tablet, and desktop layout verification
- **Coverage Reports**: Detailed coverage analysis and reporting

See the [Testing Documentation](docs/TESTING.md) for detailed information about the testing strategy and setup.

## Documentation

Complete documentation is available in the `docs/` directory:

- [Main Documentation](docs/README.md) - Setup, usage, and development guide
- [API Documentation](docs/API.md) - Component APIs and interfaces
- [Testing Documentation](docs/TESTING.md) - Testing strategy and best practices

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## About The Care Steward

The Care Steward is a service that helps families navigate elder care crises by providing expert guidance, personalized action plans, and ongoing support through a streamlined digital experience.

For more information, visit [thecaresteward.com](https://thecaresteward.com). 