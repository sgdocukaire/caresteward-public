# Testing Documentation

## Overview

This document outlines the testing strategy, setup, and best practices for the Care Steward Public application. The project uses Jest and React Testing Library for comprehensive testing coverage.

## Table of Contents

- [Testing Stack](#testing-stack)
- [Setup and Configuration](#setup-and-configuration)
- [Test Structure](#test-structure)
- [Writing Tests](#writing-tests)
- [Test Categories](#test-categories)
- [Best Practices](#best-practices)
- [Running Tests](#running-tests)
- [Coverage Reports](#coverage-reports)
- [Debugging Tests](#debugging-tests)
- [CI/CD Integration](#cicd-integration)

## Testing Stack

### Core Libraries

- **Jest**: Test runner and assertion library
- **React Testing Library**: Component testing utilities
- **@testing-library/jest-dom**: Custom Jest matchers
- **@testing-library/user-event**: User interaction simulation

### Configuration Files

- `jest.config.js`: Jest configuration
- `jest.setup.js`: Test setup and global mocks
- `package.json`: Test scripts and dependencies

## Setup and Configuration

### Installation

```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/user-event jest jest-environment-jsdom @types/jest
```

### Jest Configuration

```javascript
// jest.config.js
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  collectCoverageFrom: [
    'components/**/*.{js,jsx,ts,tsx}',
    'app/**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
};

module.exports = createJestConfig(customJestConfig);
```

### Test Setup

```javascript
// jest.setup.js
import '@testing-library/jest-dom';

// Mock Next.js router
jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '/',
      query: {},
      asPath: '/',
      push: jest.fn(),
      pop: jest.fn(),
      reload: jest.fn(),
      back: jest.fn(),
      prefetch: jest.fn().mockResolvedValue(undefined),
      beforePopState: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
        emit: jest.fn(),
      },
      isFallback: false,
    };
  },
}));

// Mock Next.js navigation
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
      back: jest.fn(),
      forward: jest.fn(),
      refresh: jest.fn(),
    };
  },
  useSearchParams() {
    return new URLSearchParams();
  },
  usePathname() {
    return '/';
  },
}));

// Mock CSS modules
jest.mock('*.css', () => ({}));
jest.mock('*.scss', () => ({}));

// Global test utilities
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

global.matchMedia = jest.fn().mockImplementation((query) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: jest.fn(),
  removeListener: jest.fn(),
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
}));
```

## Test Structure

### Directory Organization

```
__tests__/
├── app/
│   └── page.test.tsx          # Home page tests
├── components/
│   └── ProblemSolutionGraphic.test.tsx  # Component tests
└── utils/
    └── test-utils.ts          # Shared test utilities
```

### File Naming Convention

- Test files should mirror the structure of the source code
- Use `.test.tsx` or `.spec.tsx` extension
- Place tests in `__tests__/` directory

### Test File Structure

```typescript
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ComponentName from '../../path/to/component';

describe('ComponentName', () => {
  beforeEach(() => {
    // Setup code
  });

  describe('Rendering', () => {
    it('renders without crashing', () => {
      // Test implementation
    });
  });

  describe('Behavior', () => {
    it('handles user interactions', () => {
      // Test implementation
    });
  });

  describe('Accessibility', () => {
    it('has proper ARIA attributes', () => {
      // Test implementation
    });
  });
});
```

## Writing Tests

### Basic Component Test

```typescript
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProblemSolutionGraphic from '../../components/ProblemSolutionGraphic';

describe('ProblemSolutionGraphic', () => {
  beforeEach(() => {
    render(<ProblemSolutionGraphic />);
  });

  it('renders the component without crashing', () => {
    expect(screen.getByRole('region')).toBeInTheDocument();
  });

  it('renders all three steps', () => {
    expect(screen.getByText('Your Challenge')).toBeInTheDocument();
    expect(screen.getByText('Our Expertise')).toBeInTheDocument();
    expect(screen.getByText('Your Solution')).toBeInTheDocument();
  });
});
```

### Testing with Props

```typescript
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

interface ComponentProps {
  title: string;
  description?: string;
}

function TestComponent({ title, description }: ComponentProps) {
  return (
    <div>
      <h1>{title}</h1>
      {description && <p>{description}</p>}
    </div>
  );
}

describe('TestComponent', () => {
  it('renders with required props', () => {
    render(<TestComponent title="Test Title" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('renders with optional props', () => {
    render(<TestComponent title="Test Title" description="Test Description" />);
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  it('does not render optional props when not provided', () => {
    render(<TestComponent title="Test Title" />);
    expect(screen.queryByText('Test Description')).not.toBeInTheDocument();
  });
});
```

### Testing User Interactions

```typescript
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

function InteractiveComponent() {
  const [count, setCount] = React.useState(0);
  
  return (
    <div>
      <span data-testid="count">{count}</span>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

describe('InteractiveComponent', () => {
  it('increments count when button is clicked', () => {
    render(<InteractiveComponent />);
    
    const button = screen.getByText('Increment');
    const count = screen.getByTestId('count');
    
    expect(count).toHaveTextContent('0');
    
    fireEvent.click(button);
    
    expect(count).toHaveTextContent('1');
  });
});
```

### Testing Async Operations

```typescript
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

async function AsyncComponent() {
  const data = await fetch('/api/data');
  const result = await data.json();
  
  return <div>{result.message}</div>;
}

describe('AsyncComponent', () => {
  it('renders data after async operation', async () => {
    // Mock fetch
    global.fetch = jest.fn().mockResolvedValue({
      json: async () => ({ message: 'Hello World' }),
    });
    
    render(<AsyncComponent />);
    
    await waitFor(() => {
      expect(screen.getByText('Hello World')).toBeInTheDocument();
    });
  });
});
```

## Test Categories

### Rendering Tests

Test that components render correctly:

```typescript
describe('Rendering', () => {
  it('renders without crashing', () => {
    render(<Component />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('renders with correct content', () => {
    render(<Component />);
    expect(screen.getByText('Expected Text')).toBeInTheDocument();
  });

  it('renders with correct styling', () => {
    render(<Component />);
    const element = screen.getByText('Text');
    expect(element).toHaveClass('expected-class');
  });
});
```

### Structure Tests

Test HTML structure and CSS classes:

```typescript
describe('Structure', () => {
  it('has correct container structure', () => {
    render(<Component />);
    const container = screen.getByRole('main').querySelector('.container');
    expect(container).toBeInTheDocument();
  });

  it('has responsive grid layout', () => {
    render(<Component />);
    const grid = screen.getByRole('main').querySelector('.grid.grid-cols-1.md\\:grid-cols-5');
    expect(grid).toBeInTheDocument();
  });
});
```

### Accessibility Tests

Test accessibility features:

```typescript
describe('Accessibility', () => {
  it('has semantic HTML structure', () => {
    render(<Component />);
    expect(screen.getByRole('region')).toBeInTheDocument();
  });

  it('has proper heading hierarchy', () => {
    render(<Component />);
    const headings = screen.getAllByRole('heading');
    expect(headings).toHaveLength(3);
  });

  it('has descriptive text content', () => {
    render(<Component />);
    expect(screen.getByText('Your Challenge')).toBeInTheDocument();
  });
});
```

### Responsive Design Tests

Test responsive behavior:

```typescript
describe('Responsive Design', () => {
  it('includes responsive grid classes', () => {
    render(<Component />);
    const grid = document.querySelector('.grid.grid-cols-1.md\\:grid-cols-5');
    expect(grid).toBeInTheDocument();
  });

  it('includes responsive padding classes', () => {
    render(<Component />);
    const container = document.querySelector('.px-6.lg\\:px-8');
    expect(container).toBeInTheDocument();
  });
});
```

### Behavior Tests

Test component interactions and state:

```typescript
describe('Component Behavior', () => {
  it('renders consistently across re-renders', () => {
    const { rerender } = render(<Component />);
    expect(screen.getByText('Text')).toBeInTheDocument();
    
    rerender(<Component />);
    expect(screen.getByText('Text')).toBeInTheDocument();
  });

  it('maintains structure across re-renders', () => {
    const { rerender } = render(<Component />);
    const initialStructure = screen.getByRole('main').innerHTML;
    
    rerender(<Component />);
    const reRenderedStructure = screen.getByRole('main').innerHTML;
    
    expect(reRenderedStructure).toBe(initialStructure);
  });
});
```

## Best Practices

### Test Organization

1. **Group related tests**: Use `describe` blocks to organize tests by functionality
2. **Use descriptive test names**: Test names should clearly describe what is being tested
3. **Follow AAA pattern**: Arrange, Act, Assert
4. **Keep tests focused**: Each test should test one specific behavior

### Test Data

```typescript
// Use constants for test data
const TEST_DATA = {
  title: 'Test Title',
  description: 'Test Description',
  steps: ['Step 1', 'Step 2', 'Step 3'],
};

describe('Component', () => {
  it('renders with test data', () => {
    render(<Component {...TEST_DATA} />);
    expect(screen.getByText(TEST_DATA.title)).toBeInTheDocument();
  });
});
```

### Mocking

```typescript
// Mock external dependencies
jest.mock('next/router', () => ({
  useRouter() {
    return {
      push: jest.fn(),
      replace: jest.fn(),
    };
  },
}));

// Mock components
jest.mock('../components/ChildComponent', () => {
  return function MockChildComponent() {
    return <div data-testid="child-component">Mock Child</div>;
  };
});
```

### Testing Utilities

```typescript
// utils/test-utils.ts
import React from 'react';
import { render, RenderOptions } from '@testing-library/react';

interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {
  wrapper?: React.ComponentType<{ children: React.ReactNode }>;
}

function customRender(
  ui: React.ReactElement,
  options: CustomRenderOptions = {}
) {
  const { wrapper: Wrapper, ...renderOptions } = options;
  
  if (Wrapper) {
    return render(ui, { wrapper: Wrapper, ...renderOptions });
  }
  
  return render(ui, renderOptions);
}

export * from '@testing-library/react';
export { customRender as render };
```

## Running Tests

### Available Scripts

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run tests for CI environment
npm run test:ci

# Run specific test file
npm test -- ProblemSolutionGraphic.test.tsx

# Run tests matching pattern
npm test -- --testNamePattern="renders"
```

### Test Output

```bash
# Example test output
 PASS  __tests__/components/ProblemSolutionGraphic.test.tsx
  ProblemSolutionGraphic
    Rendering
      ✓ renders the component without crashing (3 ms)
      ✓ renders all three steps with correct titles (2 ms)
      ✓ renders all step descriptions (1 ms)
    Structure and Layout
      ✓ has the correct container structure (1 ms)
      ✓ has the correct card structure with white background (1 ms)
    Accessibility
      ✓ has semantic HTML structure with section element (1 ms)
      ✓ uses proper heading hierarchy (1 ms)

Test Suites: 1 passed, 1 total
Tests:       8 passed, 8 total
Snapshots:   0 total
Time:        2.145 s
```

## Coverage Reports

### Coverage Configuration

```javascript
// jest.config.js
collectCoverageFrom: [
  'components/**/*.{js,jsx,ts,tsx}',
  'app/**/*.{js,jsx,ts,tsx}',
  '!**/*.d.ts',
  '!**/node_modules/**',
  '!**/.next/**',
  '!**/coverage/**',
],
```

### Coverage Goals

- **Line Coverage**: 90%+
- **Branch Coverage**: 85%+
- **Function Coverage**: 95%+
- **Statement Coverage**: 90%+

### Coverage Report

```bash
npm run test:coverage
```

Output:
```
----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------|---------|----------|---------|---------|-------------------
All files |   95.24 |    88.89 |   100.00 |   95.24 |                 
----------|---------|----------|---------|---------|-------------------
```

## Debugging Tests

### Debug Mode

```bash
# Run tests in debug mode
npm test -- --verbose

# Run specific test in debug mode
npm test -- --testNamePattern="renders" --verbose
```

### Console Logging

```typescript
it('debugs component rendering', () => {
  const { debug } = render(<Component />);
  debug(); // Prints the rendered HTML
});
```

### Screen Queries

```typescript
// Use screen queries to debug
it('finds elements', () => {
  render(<Component />);
  
  // Available queries
  screen.getByText('Text');
  screen.getByRole('button');
  screen.getByTestId('test-id');
  screen.queryByText('Text'); // Returns null if not found
  screen.findByText('Text'); // Async query
});
```

## CI/CD Integration

### GitHub Actions

```yaml
# .github/workflows/test.yml
name: Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run tests
      run: npm run test:ci
    
    - name: Upload coverage
      uses: codecov/codecov-action@v3
```

### Test Scripts for CI

```json
{
  "scripts": {
    "test:ci": "jest --ci --coverage --watchAll=false --maxWorkers=2"
  }
}
```

### Coverage Badge

Add coverage badge to README:

```markdown
[![Test Coverage](https://codecov.io/gh/username/repo/branch/main/graph/badge.svg)](https://codecov.io/gh/username/repo)
```

## Troubleshooting

### Common Issues

#### Test Environment Issues

```bash
# Clear Jest cache
npm test -- --clearCache

# Reset Jest configuration
rm -rf node_modules/.cache
npm install
```

#### Import Issues

```typescript
// Use absolute imports
import Component from '@/components/Component';

// Or relative imports
import Component from '../../components/Component';
```

#### Mock Issues

```typescript
// Clear mocks between tests
beforeEach(() => {
  jest.clearAllMocks();
});

// Reset modules
beforeEach(() => {
  jest.resetModules();
});
```

### Performance Issues

```bash
# Run tests with limited workers
npm test -- --maxWorkers=2

# Run tests in parallel
npm test -- --maxWorkers=4
```

### Memory Issues

```bash
# Increase Node.js memory
NODE_OPTIONS="--max-old-space-size=4096" npm test
```

## Resources

### Documentation

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Testing Library Best Practices](https://testing-library.com/docs/guiding-principles)

### Tools

- [Jest Runner](https://marketplace.visualstudio.com/items?itemName=orta.vscode-jest)
- [Testing Library Snippets](https://marketplace.visualstudio.com/items?itemName=testing-library.vscode-testing-library-snippets)

### Examples

- [React Testing Examples](https://github.com/testing-library/react-testing-library#examples)
- [Jest Examples](https://github.com/facebook/jest/tree/main/examples) 