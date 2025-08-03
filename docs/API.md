# API Documentation

## Components

### ProblemSolutionGraphic

A responsive, three-step visual component that demonstrates a problem-solution workflow.

#### Component Signature

```tsx
function ProblemSolutionGraphic(): JSX.Element
```

#### Description

The `ProblemSolutionGraphic` component renders a visual representation of a three-step process: Challenge → Expertise → Solution. It's designed to be fully responsive and accessible.

#### Props

Currently, this component doesn't accept any props and is designed to be self-contained.

#### Return Value

Returns a `JSX.Element` containing the rendered component.

#### Example Usage

```tsx
import ProblemSolutionGraphic from '../components/ProblemSolutionGraphic';

export default function MyPage() {
  return (
    <div>
      <h1>Welcome</h1>
      <ProblemSolutionGraphic />
    </div>
  );
}
```

#### HTML Structure

```html
<section class="py-20" id="problem-solution">
  <div class="mx-auto max-w-5xl px-6 lg:px-8">
    <div class="bg-white p-8 rounded-xl shadow-md border border-gray-200">
      <div class="grid grid-cols-1 md:grid-cols-5 gap-6 items-start text-center">
        <!-- Step 1: Your Challenge -->
        <div>
          <div class="flex justify-center items-center h-16 w-16 rounded-full bg-red-100 text-red-700 mx-auto">
            <!-- Warning icon SVG -->
          </div>
          <h3 class="mt-4 text-lg font-semibold text-gray-900 whitespace-nowrap">Your Challenge</h3>
          <p class="mt-1 text-sm text-gray-600 whitespace-nowrap">Overwhelm & Confusion</p>
        </div>
        
        <!-- Arrow 1 -->
        <div class="flex justify-center items-center h-full transform rotate-90 md:rotate-0">
          <!-- Arrow SVG -->
        </div>
        
        <!-- Step 2: Our Expertise -->
        <div>
          <div class="flex justify-center items-center h-16 w-16 rounded-full bg-brand/10 text-brand mx-auto">
            <!-- Shield icon SVG -->
          </div>
          <h3 class="mt-4 text-lg font-semibold text-gray-900 whitespace-nowrap">Our Expertise</h3>
          <p class="mt-1 text-sm text-gray-600">Expertise & Guidance</p>
        </div>
        
        <!-- Arrow 2 -->
        <div class="flex justify-center items-center h-full transform rotate-90 md:rotate-0">
          <!-- Arrow SVG -->
        </div>
        
        <!-- Step 3: Your Solution -->
        <div>
          <div class="flex justify-center items-center h-16 w-16 rounded-full bg-green-100 text-green-700 mx-auto">
            <!-- Checkmark icon SVG -->
          </div>
          <h3 class="mt-4 text-lg font-semibold text-gray-900 whitespace-nowrap">Your Solution</h3>
          <p class="mt-1 text-sm text-gray-600">Clarity & Peace of Mind</p>
        </div>
      </div>
    </div>
  </div>
</section>
```

#### CSS Classes

| Class | Purpose |
|-------|---------|
| `py-20` | Vertical padding for the section |
| `mx-auto max-w-5xl` | Center container with max width |
| `px-6 lg:px-8` | Responsive horizontal padding |
| `bg-white p-8 rounded-xl shadow-md border border-gray-200` | Card styling |
| `grid grid-cols-1 md:grid-cols-5 gap-6` | Responsive grid layout |
| `h-16 w-16 rounded-full` | Circular icon containers |
| `text-lg font-semibold text-gray-900` | Step title styling |
| `text-sm text-gray-600` | Step description styling |
| `whitespace-nowrap` | Prevent text wrapping |
| `transform rotate-90 md:rotate-0` | Responsive arrow rotation |

#### Responsive Behavior

- **Mobile (< 768px)**: Single column layout with vertical arrows
- **Tablet (768px - 1024px)**: Grid layout with responsive arrows
- **Desktop (> 1024px)**: Full grid layout with horizontal arrows

#### Accessibility Features

- Semantic HTML with `<section>` element
- Proper heading hierarchy with `<h3>` elements
- Descriptive text content for screen readers
- High contrast color schemes
- Responsive design for different screen sizes

#### Color Scheme

| Step | Background | Text | Icon |
|------|------------|------|------|
| Challenge | `bg-red-100` | `text-red-700` | Warning triangle |
| Expertise | `bg-brand/10` | `text-brand` | Shield |
| Solution | `bg-green-100` | `text-green-700` | Checkmark |

#### Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

#### Performance

- No external dependencies
- Optimized SVG icons
- Minimal DOM structure
- Efficient CSS classes

## Pages

### Home Page

The main page component that renders the application.

#### Component Signature

```tsx
function Home(): JSX.Element
```

#### Description

The `Home` page component renders the main application interface, including the header, the `ProblemSolutionGraphic` component, and footer.

#### Props

No props are accepted.

#### Return Value

Returns a `JSX.Element` containing the rendered page.

#### Example Usage

```tsx
// This is the default export from app/page.tsx
import Home from './app/page';

// Used automatically by Next.js routing
```

#### HTML Structure

```html
<main class="min-h-screen bg-gray-50">
  <div class="container mx-auto px-4 py-16">
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">UI Component Showcase</h1>
      <p class="text-xl text-gray-600 max-w-2xl mx-auto">
        A responsive, three-step visual component...
      </p>
    </div>
    
    <!-- ProblemSolutionGraphic component -->
    
    <div class="text-center mt-12">
      <p class="text-gray-500 text-sm">
        Built with Next.js, TypeScript, and Tailwind CSS
      </p>
    </div>
  </div>
</main>
```

#### CSS Classes

| Class | Purpose |
|-------|---------|
| `min-h-screen bg-gray-50` | Full height with background |
| `container mx-auto px-4 py-16` | Centered container with padding |
| `text-center mb-12` | Centered header section |
| `text-4xl font-bold text-gray-900 mb-4` | Main heading |
| `text-xl text-gray-600 max-w-2xl mx-auto` | Description text |
| `text-center mt-12` | Footer section |
| `text-gray-500 text-sm` | Footer text |

## Layout

### Root Layout

The root layout component that wraps all pages.

#### Component Signature

```tsx
function RootLayout({ children }: { children: React.ReactNode }): JSX.Element
```

#### Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `children` | `React.ReactNode` | Yes | The page content to render |

#### Return Value

Returns a `JSX.Element` containing the HTML document structure.

#### Example Usage

```tsx
// This is the default export from app/layout.tsx
// Used automatically by Next.js
```

#### HTML Structure

```html
<html lang="en">
  <head>
    <!-- Metadata and styles -->
  </head>
  <body class="inter.className">
    <!-- Page content -->
  </body>
</html>
```

#### Metadata

```tsx
export const metadata: Metadata = {
  title: 'The Care Steward - UI Component Showcase',
  description: 'A showcase of professional UI components built with Next.js, TypeScript, and Tailwind CSS.',
}
```

## Configuration

### Tailwind Configuration

The project uses a custom Tailwind CSS configuration with:

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

#### Content Paths

```typescript
content: [
  './pages/**/*.{js,ts,jsx,tsx,mdx}',
  './components/**/*.{js,ts,jsx,tsx,mdx}',
  './app/**/*.{js,ts,jsx,tsx,mdx}',
]
```

### Jest Configuration

The project uses Jest for testing with:

#### Test Environment

```javascript
testEnvironment: 'jsdom'
```

#### Setup Files

```javascript
setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
```

#### Module Mapping

```javascript
moduleNameMapping: {
  '^@/(.*)$': '<rootDir>/$1'
}
```

#### Coverage Configuration

```javascript
collectCoverageFrom: [
  'components/**/*.{js,jsx,ts,tsx}',
  'app/**/*.{js,jsx,ts,tsx}',
  '!**/*.d.ts',
  '!**/node_modules/**'
]
```

## Error Handling

The components are designed to be robust and handle edge cases:

### Component Errors

- Components render gracefully even with missing dependencies
- Fallback content is provided where appropriate
- Error boundaries can be added for production

### TypeScript Errors

- Strict type checking is enabled
- All components have proper TypeScript definitions
- Props interfaces are clearly defined

### Accessibility Errors

- Semantic HTML is used throughout
- ARIA attributes are properly implemented
- Color contrast meets WCAG guidelines

## Performance Considerations

### Bundle Size

- Components are lightweight with minimal dependencies
- SVG icons are inline for better performance
- CSS is optimized with Tailwind's purge feature

### Rendering Performance

- Components use functional components for better performance
- No unnecessary re-renders
- Efficient DOM structure

### Loading Performance

- Next.js automatic code splitting
- Optimized images and assets
- Minimal JavaScript bundle

## Testing Strategy

### Unit Tests

- Component rendering tests
- Props validation tests
- Accessibility tests
- Responsive design tests

### Integration Tests

- Page component tests
- Component integration tests
- Layout tests

### Coverage Goals

- 90%+ line coverage
- 100% component coverage
- Critical path coverage

## Migration Guide

### From Previous Versions

If migrating from a previous version:

1. Update dependencies in `package.json`
2. Run `npm install`
3. Update any deprecated API usage
4. Run tests to ensure compatibility
5. Check for breaking changes in component APIs

### Breaking Changes

Currently, no breaking changes are planned. All changes will be backward compatible.

## Troubleshooting

### Common Issues

#### Component Not Rendering

1. Check that all dependencies are installed
2. Verify TypeScript compilation
3. Check browser console for errors
4. Ensure proper import paths

#### Styling Issues

1. Verify Tailwind CSS is properly configured
2. Check that CSS classes are being applied
3. Ensure responsive breakpoints are correct
4. Verify custom colors are defined

#### Test Failures

1. Run `npm install` to ensure all dependencies are installed
2. Check Jest configuration
3. Verify test setup files
4. Ensure proper mocking of dependencies

### Debug Mode

To enable debug mode:

```bash
# Set debug environment variable
DEBUG=true npm run dev

# Or for tests
DEBUG=true npm test
```

### Performance Profiling

To profile performance:

```bash
# Build with profiling
npm run build

# Analyze bundle
npm run analyze
``` 