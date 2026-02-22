/**
 * Breakpoints aligned with Figma / design system.
 * Use with Angular BreakpointObserver or in CSS media queries.
 */
export const BREAKPOINTS = {
  /** 768px – tablet and up */
  tablet: 768,
  /** 1024px – desktop */
  desktop: 1024,
  /** 1280px – wide desktop */
  wide: 1280,
} as const;

export const MEDIA_QUERIES = {
  mobile: `(max-width: ${BREAKPOINTS.tablet - 1}px)`,
  tablet: `(min-width: ${BREAKPOINTS.tablet}px)`,
  tabletOnly: `(min-width: ${BREAKPOINTS.tablet}px) and (max-width: ${BREAKPOINTS.desktop - 1}px)`,
  desktop: `(min-width: ${BREAKPOINTS.desktop}px)`,
  wide: `(min-width: ${BREAKPOINTS.wide}px)`,
} as const;
