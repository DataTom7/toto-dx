/**
 * Toto Design System - Border Tokens
 * Unified border system for the entire Toto ecosystem
 */

export const borders = {
  // Border Radius
  radius: {
    none: '0',
    sm: '0.25rem',    // 4px
    md: '0.5rem',     // 8px
    lg: '0.75rem',    // 12px
    xl: '1rem',       // 16px
    '2xl': '1.5rem',  // 24px
    '3xl': '2rem',    // 32px
    full: '9999px',
    // Legacy values for compatibility
    pill: '999px',
  },

  // Border Width
  width: {
    0: '0',
    1: '1px',
    2: '2px',
    4: '4px',
    8: '8px',
  },

  // Border Styles
  style: {
    solid: 'solid',
    dashed: 'dashed',
    dotted: 'dotted',
    double: 'double',
    none: 'none',
  },

  // Border Colors (using color tokens)
  color: {
    default: 'var(--toto-neutral-light)',
    primary: 'var(--toto-primary)',
    secondary: 'var(--toto-secondary)',
    accent: 'var(--toto-accent)',
    error: 'var(--toto-error)',
    success: 'var(--toto-success)',
    warning: 'var(--toto-warning)',
    info: 'var(--toto-info)',
  },
} as const;

// Predefined border combinations
export const borderPresets = {
  // Card borders
  card: {
    width: borders.width[1],
    style: borders.style.solid,
    color: borders.color.default,
    radius: borders.radius.lg,
  },

  // Button borders
  button: {
    width: borders.width[1],
    style: borders.style.solid,
    color: 'transparent',
    radius: borders.radius.md,
  },

  // Input borders
  input: {
    width: borders.width[1],
    style: borders.style.solid,
    color: borders.color.default,
    radius: borders.radius.md,
  },

  // Modal borders
  modal: {
    width: borders.width[1],
    style: borders.style.solid,
    color: borders.color.default,
    radius: borders.radius.xl,
  },

  // Badge borders
  badge: {
    width: borders.width[1],
    style: borders.style.solid,
    color: 'transparent',
    radius: borders.radius.full,
  },
} as const;

// CSS Custom Properties for runtime usage
export const cssVariables = {
  '--toto-border-radius-sm': borders.radius.sm,
  '--toto-border-radius-md': borders.radius.md,
  '--toto-border-radius-lg': borders.radius.lg,
  '--toto-border-radius-pill': borders.radius.pill,
} as const;

export type BorderRadius = keyof typeof borders.radius;
export type BorderWidth = keyof typeof borders.width;
export type BorderStyle = keyof typeof borders.style;
export type BorderColor = keyof typeof borders.color;
export type BorderPreset = keyof typeof borderPresets;
