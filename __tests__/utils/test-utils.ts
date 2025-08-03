import React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import '@testing-library/jest-dom';

// Re-export everything from testing library
export * from '@testing-library/react';

// Custom render function with default options
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

// Export custom render as default render
export { customRender as render };

// Test data constants
export const TEST_DATA = {
  steps: {
    challenge: {
      title: 'Your Challenge',
      description: 'Overwhelm & Confusion',
      icon: 'warning',
      color: 'red',
    },
    expertise: {
      title: 'Our Expertise',
      description: 'Expertise & Guidance',
      icon: 'shield',
      color: 'brand',
    },
    solution: {
      title: 'Your Solution',
      description: 'Clarity & Peace of Mind',
      icon: 'checkmark',
      color: 'green',
    },
  },
  page: {
    title: 'UI Component Showcase',
    description: 'A responsive, three-step visual component that demonstrates our approach to building clean, professional front-end components with Next.js, TypeScript, and Tailwind CSS.',
    footer: 'Built with Next.js, TypeScript, and Tailwind CSS',
  },
};

// Helper functions for common test operations
export const testUtils = {
  // Check if element has specific CSS classes
  hasClasses: (element: HTMLElement, ...classes: string[]) => {
    classes.forEach(className => {
      expect(element).toHaveClass(className);
    });
  },

  // Check if element has specific text content
  hasText: (element: HTMLElement, text: string) => {
    expect(element).toHaveTextContent(text);
  },

  // Check if element is visible
  isVisible: (element: HTMLElement) => {
    expect(element).toBeVisible();
  },

  // Check if element is in document
  isInDocument: (element: HTMLElement) => {
    expect(element).toBeInTheDocument();
  },

  // Check if element has specific role
  hasRole: (element: HTMLElement, role: string) => {
    expect(element).toHaveAttribute('role', role);
  },

  // Check if element has specific attribute
  hasAttribute: (element: HTMLElement, attribute: string, value?: string) => {
    if (value) {
      expect(element).toHaveAttribute(attribute, value);
    } else {
      expect(element).toHaveAttribute(attribute);
    }
  },

  // Check if element has specific data attribute
  hasDataAttribute: (element: HTMLElement, attribute: string, value?: string) => {
    const dataAttribute = `data-${attribute}`;
    if (value) {
      expect(element).toHaveAttribute(dataAttribute, value);
    } else {
      expect(element).toHaveAttribute(dataAttribute);
    }
  },

  // Check if element is accessible
  isAccessible: (element: HTMLElement) => {
    expect(element).toBeInTheDocument();
    expect(element).toBeVisible();
  },

  // Check if element has proper heading hierarchy
  hasProperHeadingHierarchy: (container: HTMLElement, expectedHeadings: number) => {
    const headings = container.querySelectorAll('h1, h2, h3, h4, h5, h6');
    expect(headings).toHaveLength(expectedHeadings);
  },

  // Check if element has responsive classes
  hasResponsiveClasses: (element: HTMLElement, baseClass: string, responsiveClass: string) => {
    expect(element).toHaveClass(baseClass);
    expect(element).toHaveClass(responsiveClass);
  },

  // Check if element has color scheme classes
  hasColorScheme: (element: HTMLElement, color: string) => {
    const colorClasses = {
      red: ['bg-red-100', 'text-red-700'],
      green: ['bg-green-100', 'text-green-700'],
      brand: ['bg-brand/10', 'text-brand'],
    };
    
    const classes = colorClasses[color as keyof typeof colorClasses];
    if (classes) {
      classes.forEach(className => {
        expect(element).toHaveClass(className);
      });
    }
  },

  // Check if element has proper spacing
  hasSpacing: (element: HTMLElement, spacingClass: string) => {
    expect(element).toHaveClass(spacingClass);
  },

  // Check if element has proper typography
  hasTypography: (element: HTMLElement, typographyClass: string) => {
    expect(element).toHaveClass(typographyClass);
  },

  // Check if element has proper layout
  hasLayout: (element: HTMLElement, layoutClass: string) => {
    expect(element).toHaveClass(layoutClass);
  },

  // Check if element has proper sizing
  hasSizing: (element: HTMLElement, sizingClass: string) => {
    expect(element).toHaveClass(sizingClass);
  },

  // Check if element has proper positioning
  hasPositioning: (element: HTMLElement, positioningClass: string) => {
    expect(element).toHaveClass(positioningClass);
  },

  // Check if element has proper effects
  hasEffects: (element: HTMLElement, effectsClass: string) => {
    expect(element).toHaveClass(effectsClass);
  },

  // Check if element has proper borders
  hasBorders: (element: HTMLElement, borderClass: string) => {
    expect(element).toHaveClass(borderClass);
  },

  // Check if element has proper background
  hasBackground: (element: HTMLElement, backgroundClass: string) => {
    expect(element).toHaveClass(backgroundClass);
  },

  // Check if element has proper text color
  hasTextColor: (element: HTMLElement, textColorClass: string) => {
    expect(element).toHaveClass(textColorClass);
  },

  // Check if element has proper transform
  hasTransform: (element: HTMLElement, transformClass: string) => {
    expect(element).toHaveClass(transformClass);
  },

  // Check if element has proper flexbox
  hasFlexbox: (element: HTMLElement, flexClass: string) => {
    expect(element).toHaveClass(flexClass);
  },

  // Check if element has proper grid
  hasGrid: (element: HTMLElement, gridClass: string) => {
    expect(element).toHaveClass(gridClass);
  },

  // Check if element has proper gap
  hasGap: (element: HTMLElement, gapClass: string) => {
    expect(element).toHaveClass(gapClass);
  },

  // Check if element has proper items alignment
  hasItemsAlignment: (element: HTMLElement, itemsClass: string) => {
    expect(element).toHaveClass(itemsClass);
  },

  // Check if element has proper justify content
  hasJustifyContent: (element: HTMLElement, justifyClass: string) => {
    expect(element).toHaveClass(justifyClass);
  },

  // Check if element has proper text alignment
  hasTextAlignment: (element: HTMLElement, textAlignClass: string) => {
    expect(element).toHaveClass(textAlignClass);
  },

  // Check if element has proper whitespace
  hasWhitespace: (element: HTMLElement, whitespaceClass: string) => {
    expect(element).toHaveClass(whitespaceClass);
  },

  // Check if element has proper overflow
  hasOverflow: (element: HTMLElement, overflowClass: string) => {
    expect(element).toHaveClass(overflowClass);
  },

  // Check if element has proper z-index
  hasZIndex: (element: HTMLElement, zIndexClass: string) => {
    expect(element).toHaveClass(zIndexClass);
  },

  // Check if element has proper cursor
  hasCursor: (element: HTMLElement, cursorClass: string) => {
    expect(element).toHaveClass(cursorClass);
  },

  // Check if element has proper pointer events
  hasPointerEvents: (element: HTMLElement, pointerEventsClass: string) => {
    expect(element).toHaveClass(pointerEventsClass);
  },

  // Check if element has proper user select
  hasUserSelect: (element: HTMLElement, userSelectClass: string) => {
    expect(element).toHaveClass(userSelectClass);
  },

  // Check if element has proper resize
  hasResize: (element: HTMLElement, resizeClass: string) => {
    expect(element).toHaveClass(resizeClass);
  },

  // Check if element has proper scroll snap
  hasScrollSnap: (element: HTMLElement, scrollSnapClass: string) => {
    expect(element).toHaveClass(scrollSnapClass);
  },

  // Check if element has proper scroll behavior
  hasScrollBehavior: (element: HTMLElement, scrollBehaviorClass: string) => {
    expect(element).toHaveClass(scrollBehaviorClass);
  },

  // Check if element has proper touch action
  hasTouchAction: (element: HTMLElement, touchActionClass: string) => {
    expect(element).toHaveClass(touchActionClass);
  },

  // Check if element has proper will change
  hasWillChange: (element: HTMLElement, willChangeClass: string) => {
    expect(element).toHaveClass(willChangeClass);
  },

  // Check if element has proper content
  hasContent: (element: HTMLElement, contentClass: string) => {
    expect(element).toHaveClass(contentClass);
  },

  // Check if element has proper quotes
  hasQuotes: (element: HTMLElement, quotesClass: string) => {
    expect(element).toHaveClass(quotesClass);
  },

  // Check if element has proper caret color
  hasCaretColor: (element: HTMLElement, caretColorClass: string) => {
    expect(element).toHaveClass(caretColorClass);
  },

  // Check if element has proper accent color
  hasAccentColor: (element: HTMLElement, accentColorClass: string) => {
    expect(element).toHaveClass(accentColorClass);
  },

  // Check if element has proper scroll margin
  hasScrollMargin: (element: HTMLElement, scrollMarginClass: string) => {
    expect(element).toHaveClass(scrollMarginClass);
  },

  // Check if element has proper scroll padding
  hasScrollPadding: (element: HTMLElement, scrollPaddingClass: string) => {
    expect(element).toHaveClass(scrollPaddingClass);
  },

  // Check if element has proper list style
  hasListStyle: (element: HTMLElement, listStyleClass: string) => {
    expect(element).toHaveClass(listStyleClass);
  },

  // Check if element has proper list style position
  hasListStylePosition: (element: HTMLElement, listStylePositionClass: string) => {
    expect(element).toHaveClass(listStylePositionClass);
  },

  // Check if element has proper list style type
  hasListStyleType: (element: HTMLElement, listStyleTypeClass: string) => {
    expect(element).toHaveClass(listStyleTypeClass);
  },

  // Check if element has proper list style image
  hasListStyleImage: (element: HTMLElement, listStyleImageClass: string) => {
    expect(element).toHaveClass(listStyleImageClass);
  },

  // Check if element has proper marker
  hasMarker: (element: HTMLElement, markerClass: string) => {
    expect(element).toHaveClass(markerClass);
  },

  // Check if element has proper marker color
  hasMarkerColor: (element: HTMLElement, markerColorClass: string) => {
    expect(element).toHaveClass(markerColorClass);
  },

  // Check if element has proper marker type
  hasMarkerType: (element: HTMLElement, markerTypeClass: string) => {
    expect(element).toHaveClass(markerTypeClass);
  },

  // Check if element has proper marker width
  hasMarkerWidth: (element: HTMLElement, markerWidthClass: string) => {
    expect(element).toHaveClass(markerWidthClass);
  },

  // Check if element has proper marker height
  hasMarkerHeight: (element: HTMLElement, markerHeightClass: string) => {
    expect(element).toHaveClass(markerHeightClass);
  },

  // Check if element has proper marker offset
  hasMarkerOffset: (element: HTMLElement, markerOffsetClass: string) => {
    expect(element).toHaveClass(markerOffsetClass);
  },

  // Check if element has proper marker side
  hasMarkerSide: (element: HTMLElement, markerSideClass: string) => {
    expect(element).toHaveClass(markerSideClass);
  },

  // Check if element has proper marker pattern
  hasMarkerPattern: (element: HTMLElement, markerPatternClass: string) => {
    expect(element).toHaveClass(markerPatternClass);
  },

  // Check if element has proper marker slice
  hasMarkerSlice: (element: HTMLElement, markerSliceClass: string) => {
    expect(element).toHaveClass(markerSliceClass);
  },

  // Check if element has proper marker start
  hasMarkerStart: (element: HTMLElement, markerStartClass: string) => {
    expect(element).toHaveClass(markerStartClass);
  },

  // Check if element has proper marker end
  hasMarkerEnd: (element: HTMLElement, markerEndClass: string) => {
    expect(element).toHaveClass(markerEndClass);
  },

  // Check if element has proper marker middle
  hasMarkerMiddle: (element: HTMLElement, markerMiddleClass: string) => {
    expect(element).toHaveClass(markerMiddleClass);
  },

  // Check if element has proper marker fill
  hasMarkerFill: (element: HTMLElement, markerFillClass: string) => {
    expect(element).toHaveClass(markerFillClass);
  },

  // Check if element has proper marker stroke
  hasMarkerStroke: (element: HTMLElement, markerStrokeClass: string) => {
    expect(element).toHaveClass(markerStrokeClass);
  },

  // Check if element has proper marker stroke width
  hasMarkerStrokeWidth: (element: HTMLElement, markerStrokeWidthClass: string) => {
    expect(element).toHaveClass(markerStrokeWidthClass);
  },

  // Check if element has proper marker stroke linecap
  hasMarkerStrokeLinecap: (element: HTMLElement, markerStrokeLinecapClass: string) => {
    expect(element).toHaveClass(markerStrokeLinecapClass);
  },

  // Check if element has proper marker stroke linejoin
  hasMarkerStrokeLinejoin: (element: HTMLElement, markerStrokeLinejoinClass: string) => {
    expect(element).toHaveClass(markerStrokeLinejoinClass);
  },

  // Check if element has proper marker stroke dasharray
  hasMarkerStrokeDasharray: (element: HTMLElement, markerStrokeDasharrayClass: string) => {
    expect(element).toHaveClass(markerStrokeDasharrayClass);
  },

  // Check if element has proper marker stroke dashoffset
  hasMarkerStrokeDashoffset: (element: HTMLElement, markerStrokeDashoffsetClass: string) => {
    expect(element).toHaveClass(markerStrokeDashoffsetClass);
  },

  // Check if element has proper marker stroke opacity
  hasMarkerStrokeOpacity: (element: HTMLElement, markerStrokeOpacityClass: string) => {
    expect(element).toHaveClass(markerStrokeOpacityClass);
  },

  // Check if element has proper marker fill opacity
  hasMarkerFillOpacity: (element: HTMLElement, markerFillOpacityClass: string) => {
    expect(element).toHaveClass(markerFillOpacityClass);
  },

  // Check if element has proper marker stroke miterlimit
  hasMarkerStrokeMiterlimit: (element: HTMLElement, markerStrokeMiterlimitClass: string) => {
    expect(element).toHaveClass(markerStrokeMiterlimitClass);
  },

  // Check if element has proper marker stroke dasharray
  hasMarkerStrokeDasharray: (element: HTMLElement, markerStrokeDasharrayClass: string) => {
    expect(element).toHaveClass(markerStrokeDasharrayClass);
  },

  // Check if element has proper marker stroke dashoffset
  hasMarkerStrokeDashoffset: (element: HTMLElement, markerStrokeDashoffsetClass: string) => {
    expect(element).toHaveClass(markerStrokeDashoffsetClass);
  },

  // Check if element has proper marker stroke opacity
  hasMarkerStrokeOpacity: (element: HTMLElement, markerStrokeOpacityClass: string) => {
    expect(element).toHaveClass(markerStrokeOpacityClass);
  },

  // Check if element has proper marker fill opacity
  hasMarkerFillOpacity: (element: HTMLElement, markerFillOpacityClass: string) => {
    expect(element).toHaveClass(markerFillOpacityClass);
  },

  // Check if element has proper marker stroke miterlimit
  hasMarkerStrokeMiterlimit: (element: HTMLElement, markerStrokeMiterlimitClass: string) => {
    expect(element).toHaveClass(markerStrokeMiterlimitClass);
  },
};

// Mock data for testing
export const mockData = {
  components: {
    ProblemSolutionGraphic: {
      steps: TEST_DATA.steps,
      containerClasses: [
        'py-20',
        'mx-auto',
        'max-w-5xl',
        'px-6',
        'lg:px-8',
        'bg-white',
        'p-8',
        'rounded-xl',
        'shadow-md',
        'border',
        'border-gray-200',
        'grid',
        'grid-cols-1',
        'md:grid-cols-5',
        'gap-6',
        'items-start',
        'text-center',
      ],
      iconClasses: [
        'flex',
        'justify-center',
        'items-center',
        'h-16',
        'w-16',
        'rounded-full',
        'mx-auto',
      ],
      titleClasses: [
        'mt-4',
        'text-lg',
        'font-semibold',
        'text-gray-900',
        'whitespace-nowrap',
      ],
      descriptionClasses: [
        'mt-1',
        'text-sm',
        'text-gray-600',
        'whitespace-nowrap',
      ],
      arrowClasses: [
        'flex',
        'justify-center',
        'items-center',
        'h-full',
        'transform',
        'rotate-90',
        'md:rotate-0',
        'text-gray-300',
      ],
    },
    HomePage: {
      title: TEST_DATA.page.title,
      description: TEST_DATA.page.description,
      footer: TEST_DATA.page.footer,
      containerClasses: [
        'min-h-screen',
        'bg-gray-50',
        'container',
        'mx-auto',
        'px-4',
        'py-16',
      ],
      headerClasses: [
        'text-center',
        'mb-12',
      ],
      titleClasses: [
        'text-4xl',
        'font-bold',
        'text-gray-900',
        'mb-4',
      ],
      descriptionClasses: [
        'text-xl',
        'text-gray-600',
        'max-w-2xl',
        'mx-auto',
      ],
      footerClasses: [
        'text-center',
        'mt-12',
        'text-gray-500',
        'text-sm',
      ],
    },
  },
};

// Helper functions for testing responsive behavior
export const responsiveTestUtils = {
  // Mock different screen sizes
  mockScreenSize: (width: number) => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: width,
    });
    
    window.dispatchEvent(new Event('resize'));
  },

  // Test mobile layout
  testMobileLayout: (callback: () => void) => {
    mockScreenSize(375);
    callback();
  },

  // Test tablet layout
  testTabletLayout: (callback: () => void) => {
    mockScreenSize(768);
    callback();
  },

  // Test desktop layout
  testDesktopLayout: (callback: () => void) => {
    mockScreenSize(1024);
    callback();
  },

  // Test large desktop layout
  testLargeDesktopLayout: (callback: () => void) => {
    mockScreenSize(1440);
    callback();
  },
};

// Helper functions for testing accessibility
export const accessibilityTestUtils = {
  // Check if element has proper ARIA attributes
  hasAriaAttributes: (element: HTMLElement, attributes: Record<string, string>) => {
    Object.entries(attributes).forEach(([attribute, value]) => {
      expect(element).toHaveAttribute(attribute, value);
    });
  },

  // Check if element has proper role
  hasRole: (element: HTMLElement, role: string) => {
    expect(element).toHaveAttribute('role', role);
  },

  // Check if element has proper label
  hasLabel: (element: HTMLElement, label: string) => {
    expect(element).toHaveAttribute('aria-label', label);
  },

  // Check if element has proper description
  hasDescription: (element: HTMLElement, description: string) => {
    expect(element).toHaveAttribute('aria-describedby', description);
  },

  // Check if element has proper expanded state
  hasExpandedState: (element: HTMLElement, expanded: boolean) => {
    expect(element).toHaveAttribute('aria-expanded', expanded.toString());
  },

  // Check if element has proper pressed state
  hasPressedState: (element: HTMLElement, pressed: boolean) => {
    expect(element).toHaveAttribute('aria-pressed', pressed.toString());
  },

  // Check if element has proper checked state
  hasCheckedState: (element: HTMLElement, checked: boolean) => {
    expect(element).toHaveAttribute('aria-checked', checked.toString());
  },

  // Check if element has proper selected state
  hasSelectedState: (element: HTMLElement, selected: boolean) => {
    expect(element).toHaveAttribute('aria-selected', selected.toString());
  },

  // Check if element has proper hidden state
  hasHiddenState: (element: HTMLElement, hidden: boolean) => {
    expect(element).toHaveAttribute('aria-hidden', hidden.toString());
  },

  // Check if element has proper disabled state
  hasDisabledState: (element: HTMLElement, disabled: boolean) => {
    expect(element).toHaveAttribute('aria-disabled', disabled.toString());
  },

  // Check if element has proper required state
  hasRequiredState: (element: HTMLElement, required: boolean) => {
    expect(element).toHaveAttribute('aria-required', required.toString());
  },

  // Check if element has proper invalid state
  hasInvalidState: (element: HTMLElement, invalid: boolean) => {
    expect(element).toHaveAttribute('aria-invalid', invalid.toString());
  },

  // Check if element has proper current state
  hasCurrentState: (element: HTMLElement, current: boolean) => {
    expect(element).toHaveAttribute('aria-current', current.toString());
  },

  // Check if element has proper live region
  hasLiveRegion: (element: HTMLElement, live: string) => {
    expect(element).toHaveAttribute('aria-live', live);
  },

  // Check if element has proper atomic state
  hasAtomicState: (element: HTMLElement, atomic: boolean) => {
    expect(element).toHaveAttribute('aria-atomic', atomic.toString());
  },

  // Check if element has proper relevant state
  hasRelevantState: (element: HTMLElement, relevant: string) => {
    expect(element).toHaveAttribute('aria-relevant', relevant);
  },

  // Check if element has proper busy state
  hasBusyState: (element: HTMLElement, busy: boolean) => {
    expect(element).toHaveAttribute('aria-busy', busy.toString());
  },

  // Check if element has proper controls
  hasControls: (element: HTMLElement, controls: string) => {
    expect(element).toHaveAttribute('aria-controls', controls);
  },

  // Check if element has proper owns
  hasOwns: (element: HTMLElement, owns: string) => {
    expect(element).toHaveAttribute('aria-owns', owns);
  },

  // Check if element has proper activedescendant
  hasActiveDescendant: (element: HTMLElement, descendant: string) => {
    expect(element).toHaveAttribute('aria-activedescendant', descendant);
  },

  // Check if element has proper flowto
  hasFlowTo: (element: HTMLElement, flowTo: string) => {
    expect(element).toHaveAttribute('aria-flowto', flowTo);
  },

  // Check if element has proper flowfrom
  hasFlowFrom: (element: HTMLElement, flowFrom: string) => {
    expect(element).toHaveAttribute('aria-flowfrom', flowFrom);
  },

  // Check if element has proper describedby
  hasDescribedBy: (element: HTMLElement, describedBy: string) => {
    expect(element).toHaveAttribute('aria-describedby', describedBy);
  },

  // Check if element has proper labelledby
  hasLabelledBy: (element: HTMLElement, labelledBy: string) => {
    expect(element).toHaveAttribute('aria-labelledby', labelledBy);
  },

  // Check if element has proper posinset
  hasPosInSet: (element: HTMLElement, posInSet: number) => {
    expect(element).toHaveAttribute('aria-posinset', posInSet.toString());
  },

  // Check if element has proper setsize
  hasSetSize: (element: HTMLElement, setSize: number) => {
    expect(element).toHaveAttribute('aria-setsize', setSize.toString());
  },

  // Check if element has proper level
  hasLevel: (element: HTMLElement, level: number) => {
    expect(element).toHaveAttribute('aria-level', level.toString());
  },

  // Check if element has proper multiselectable
  hasMultiSelectable: (element: HTMLElement, multiSelectable: boolean) => {
    expect(element).toHaveAttribute('aria-multiselectable', multiSelectable.toString());
  },

  // Check if element has proper orientation
  hasOrientation: (element: HTMLElement, orientation: string) => {
    expect(element).toHaveAttribute('aria-orientation', orientation);
  },

  // Check if element has proper readonly
  hasReadOnly: (element: HTMLElement, readOnly: boolean) => {
    expect(element).toHaveAttribute('aria-readonly', readOnly.toString());
  },

  // Check if element has proper required
  hasRequired: (element: HTMLElement, required: boolean) => {
    expect(element).toHaveAttribute('aria-required', required.toString());
  },

  // Check if element has proper sort
  hasSort: (element: HTMLElement, sort: string) => {
    expect(element).toHaveAttribute('aria-sort', sort);
  },

  // Check if element has proper valuemin
  hasValueMin: (element: HTMLElement, valueMin: number) => {
    expect(element).toHaveAttribute('aria-valuemin', valueMin.toString());
  },

  // Check if element has proper valuemax
  hasValueMax: (element: HTMLElement, valueMax: number) => {
    expect(element).toHaveAttribute('aria-valuemax', valueMax.toString());
  },

  // Check if element has proper valuenow
  hasValueNow: (element: HTMLElement, valueNow: number) => {
    expect(element).toHaveAttribute('aria-valuenow', valueNow.toString());
  },

  // Check if element has proper valuetext
  hasValueText: (element: HTMLElement, valueText: string) => {
    expect(element).toHaveAttribute('aria-valuetext', valueText);
  },

  // Check if element has proper autocomplete
  hasAutoComplete: (element: HTMLElement, autoComplete: string) => {
    expect(element).toHaveAttribute('aria-autocomplete', autoComplete);
  },

  // Check if element has proper haspopup
  hasHasPopup: (element: HTMLElement, hasPopup: boolean) => {
    expect(element).toHaveAttribute('aria-haspopup', hasPopup.toString());
  },

  // Check if element has proper modal
  hasModal: (element: HTMLElement, modal: boolean) => {
    expect(element).toHaveAttribute('aria-modal', modal.toString());
  },

  // Check if element has proper multiline
  hasMultiLine: (element: HTMLElement, multiLine: boolean) => {
    expect(element).toHaveAttribute('aria-multiline', multiLine.toString());
  },

  // Check if element has proper placeholder
  hasPlaceholder: (element: HTMLElement, placeholder: string) => {
    expect(element).toHaveAttribute('aria-placeholder', placeholder);
  },

  // Check if element has proper roledescription
  hasRoleDescription: (element: HTMLElement, roleDescription: string) => {
    expect(element).toHaveAttribute('aria-roledescription', roleDescription);
  },

  // Check if element has proper rowcount
  hasRowCount: (element: HTMLElement, rowCount: number) => {
    expect(element).toHaveAttribute('aria-rowcount', rowCount.toString());
  },

  // Check if element has proper rowindex
  hasRowIndex: (element: HTMLElement, rowIndex: number) => {
    expect(element).toHaveAttribute('aria-rowindex', rowIndex.toString());
  },

  // Check if element has proper rowspan
  hasRowSpan: (element: HTMLElement, rowSpan: number) => {
    expect(element).toHaveAttribute('aria-rowspan', rowSpan.toString());
  },

  // Check if element has proper colcount
  hasColCount: (element: HTMLElement, colCount: number) => {
    expect(element).toHaveAttribute('aria-colcount', colCount.toString());
  },

  // Check if element has proper colindex
  hasColIndex: (element: HTMLElement, colIndex: number) => {
    expect(element).toHaveAttribute('aria-colindex', colIndex.toString());
  },

  // Check if element has proper colspan
  hasColSpan: (element: HTMLElement, colSpan: number) => {
    expect(element).toHaveAttribute('aria-colspan', colSpan.toString());
  },

  // Check if element has proper rowheader
  hasRowHeader: (element: HTMLElement, rowHeader: string) => {
    expect(element).toHaveAttribute('aria-rowheader', rowHeader);
  },

  // Check if element has proper colheader
  hasColHeader: (element: HTMLElement, colHeader: string) => {
    expect(element).toHaveAttribute('aria-colheader', colHeader);
  },

  // Check if element has proper rowgroup
  hasRowGroup: (element: HTMLElement, rowGroup: string) => {
    expect(element).toHaveAttribute('aria-rowgroup', rowGroup);
  },

  // Check if element has proper colgroup
  hasColGroup: (element: HTMLElement, colGroup: string) => {
    expect(element).toHaveAttribute('aria-colgroup', colGroup);
  },

  // Check if element has proper rowheader
  hasRowHeader: (element: HTMLElement, rowHeader: string) => {
    expect(element).toHaveAttribute('aria-rowheader', rowHeader);
  },

  // Check if element has proper colheader
  hasColHeader: (element: HTMLElement, colHeader: string) => {
    expect(element).toHaveAttribute('aria-colheader', colHeader);
  },

  // Check if element has proper rowgroup
  hasRowGroup: (element: HTMLElement, rowGroup: string) => {
    expect(element).toHaveAttribute('aria-rowgroup', rowGroup);
  },

  // Check if element has proper colgroup
  hasColGroup: (element: HTMLElement, colGroup: string) => {
    expect(element).toHaveAttribute('aria-colgroup', colGroup);
  },
}; 