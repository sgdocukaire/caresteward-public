# Component Library Documentation

This document provides comprehensive documentation for all components in the Care Steward UI showcase.

## Table of Contents

1. [ProblemSolutionGraphic](#problemsolutiongraphic)
2. [InteractiveDemo](#interactivedemo)
3. [DataVisualization](#datavisualization)
4. [PerformanceMonitor](#performancemonitor)
5. [Navigation](#navigation)
6. [Footer](#footer)

## ProblemSolutionGraphic

A responsive, three-step visual component that explains the core value proposition.

### Props

This component accepts no props.

### Usage

```tsx
import ProblemSolutionGraphic from '../components/ProblemSolutionGraphic';

export default function MyPage() {
  return (
    <div>
      <ProblemSolutionGraphic />
    </div>
  );
}
```

### Features

- **Responsive Design**: Adapts to mobile, tablet, and desktop screens
- **Accessible Icons**: SVG icons with proper semantic meaning
- **Smooth Animations**: CSS transitions for arrow elements
- **Brand Integration**: Uses custom brand color palette

### CSS Classes

- `.bg-red-100`, `.text-red-700`: Warning/Challenge styling
- `.bg-brand/10`, `.text-brand`: Brand color styling
- `.bg-green-100`, `.text-green-700`: Success/Solution styling

## InteractiveDemo

A comprehensive form component demonstrating modern form handling patterns.

### Props

This component accepts no props.

### Usage

```tsx
import InteractiveDemo from '../components/InteractiveDemo';

export default function MyPage() {
  return (
    <div>
      <InteractiveDemo />
    </div>
  );
}
```

### Features

- **State Management**: Uses React hooks for form state
- **Form Validation**: HTML5 validation with custom styling
- **Loading States**: Visual feedback during form submission
- **Success Feedback**: Confirmation message after submission
- **Auto-reset**: Form resets after 3 seconds

### Form Fields

- **Name**: Text input with required validation
- **Email**: Email input with format validation
- **Message**: Textarea with required validation

### State Management

```tsx
const [formData, setFormData] = useState({
  name: '',
  email: '',
  message: ''
});
const [isSubmitting, setIsSubmitting] = useState(false);
const [submitted, setSubmitted] = useState(false);
```

## DataVisualization

An interactive chart component for displaying and switching between different metrics.

### Props

This component accepts no props.

### Usage

```tsx
import DataVisualization from '../components/DataVisualization';

export default function MyPage() {
  return (
    <div>
      <DataVisualization />
    </div>
  );
}
```

### Features

- **Dynamic Data**: Switch between revenue, users, and growth metrics
- **Responsive Charts**: Adaptive chart sizing
- **Interactive Controls**: Metric selector with smooth transitions
- **Summary Statistics**: Key metrics display

### Data Structure

```tsx
interface DataPoint {
  month: string;
  value: number;
  color: string;
}
```

### Available Metrics

- **Revenue**: Monthly revenue data with brand colors
- **Users**: Active user counts with blue styling
- **Growth**: Growth rate percentages with green styling

## PerformanceMonitor

A real-time system monitoring dashboard component.

### Props

This component accepts no props.

### Usage

```tsx
import PerformanceMonitor from '../components/PerformanceMonitor';

export default function MyPage() {
  return (
    <div>
      <PerformanceMonitor />
    </div>
  );
}
```

### Features

- **Live Updates**: Simulated real-time metric updates
- **Status Indicators**: Color-coded health status
- **Interactive Controls**: Pause/resume functionality
- **Dark Theme**: Professional dashboard styling

### Metrics

- **Response Time**: API response time in milliseconds
- **CPU Usage**: System CPU utilization percentage
- **Memory Usage**: System memory usage percentage
- **Error Rate**: Application error rate percentage
- **Active Users**: Current active user count
- **Database Connections**: Active database connections

### Status Types

- `healthy`: Green indicators
- `warning`: Yellow indicators
- `critical`: Red indicators

## Navigation

A modern navigation bar with smooth scrolling and mobile responsiveness.

### Props

This component accepts no props.

### Usage

```tsx
import Navigation from '../components/Navigation';

export default function MyPage() {
  return (
    <div>
      <Navigation />
      {/* Your page content */}
    </div>
  );
}
```

### Features

- **Sticky Navigation**: Transparent to solid background on scroll
- **Smooth Scrolling**: Animated navigation to page sections
- **Mobile Responsive**: Collapsible mobile menu
- **Brand Integration**: Consistent logo and styling

### Scroll Behavior

The navigation becomes opaque when the user scrolls more than 10px from the top:

```tsx
const [isScrolled, setIsScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 10);
  };
  // ... event listener setup
}, []);
```

### Navigation Links

- Problem Solution: Scrolls to `#problem-solution`
- Interactive Demo: Scrolls to `#interactive-demo`
- Data Visualization: Scrolls to `#data-visualization`
- Performance Monitor: Scrolls to `#performance-monitor`

## Footer

A comprehensive footer component with multiple sections.

### Props

This component accepts no props.

### Usage

```tsx
import Footer from '../components/Footer';

export default function MyPage() {
  return (
    <div>
      {/* Your page content */}
      <Footer />
    </div>
  );
}
```

### Features

- **Company Information**: Logo, description, and social links
- **Quick Navigation**: Links to page sections
- **Contact Information**: Email and phone with icons
- **Legal Links**: Privacy policy, terms of service
- **Responsive Layout**: Adaptive grid for different screen sizes

### Social Links

- Twitter: Links to company Twitter account
- LinkedIn: Links to company LinkedIn profile
- GitHub: Links to company GitHub profile

### Contact Information

- Email: `hello@thecaresteward.com`
- Phone: `(555) 012-3456`

## Styling Guidelines

### Color Palette

```css
/* Brand Colors */
--brand: #0B6055;
--brand-light: #5EEAD4;
--brand-dark: #0F766E;

/* Status Colors */
--healthy: #10B981;
--warning: #F59E0B;
--critical: #EF4444;
```

### Typography

- **Headings**: Inter font family, bold weights
- **Body Text**: Inter font family, regular weights
- **Code**: Monospace font for technical content

### Spacing

- **Section Padding**: `py-20` (80px top/bottom)
- **Container Max Width**: `max-w-7xl` (1280px)
- **Grid Gaps**: `gap-6` (24px) for responsive grids

### Responsive Breakpoints

- **Mobile**: `< 768px`
- **Tablet**: `768px - 1024px`
- **Desktop**: `> 1024px`

## Accessibility

All components follow WCAG 2.1 AA guidelines:

- **Semantic HTML**: Proper heading hierarchy and landmarks
- **ARIA Labels**: Descriptive labels for interactive elements
- **Keyboard Navigation**: Full keyboard accessibility
- **Color Contrast**: Minimum 4.5:1 contrast ratio
- **Screen Reader Support**: Proper ARIA attributes and semantic markup

## Performance Considerations

- **Lazy Loading**: Components load only when needed
- **Optimized Images**: SVG icons for scalability
- **Minimal Dependencies**: Lightweight component library
- **Efficient Re-renders**: Proper React optimization patterns

## Browser Support

- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+
- **Mobile Browsers**: iOS Safari 14+, Chrome Mobile 90+
- **Fallbacks**: Graceful degradation for older browsers 