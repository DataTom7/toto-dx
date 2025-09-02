/**
 * Toto Design System - Typography Tokens
 * Unified typography system for the entire Toto ecosystem
 */

export const typography = {
  // Font Families
  fontFamily: {
    sans: [
      'Inter',
      'Open Sans',
      'system-ui',
      '-apple-system',
      'BlinkMacSystemFont',
      'sans-serif'
    ],
    heading: [
      'Raleway',
      'Inter',
      'Lato',
      'Nunito',
      'Arial',
      'sans-serif'
    ],
    mono: [
      'JetBrains Mono',
      'Fira Code',
      'Monaco',
      'Consolas',
      'monospace'
    ],
  },

  // Font Sizes
  fontSize: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem',    // 48px
    '6xl': '3.75rem', // 60px
    // Legacy sizes for compatibility
    h1: '2.5rem',     // 40px
    h2: '2rem',       // 32px
    h3: '1.5rem',     // 24px
    h4: '1.25rem',    // 20px
    body: '1rem',     // 16px
    small: '0.875rem', // 14px
    caption: '0.75rem', // 12px
  },

  // Font Weights
  fontWeight: {
    thin: '100',
    extralight: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
    // Legacy weights for compatibility
    regular: '400',
  },

  // Line Heights
  lineHeight: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },

  // Letter Spacing
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },

  // Text Styles (predefined combinations)
  textStyles: {
    h1: {
      fontSize: '2.5rem',
      fontWeight: '700',
      lineHeight: '1.2',
      letterSpacing: '-0.025em',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: '600',
      lineHeight: '1.25',
      letterSpacing: '-0.025em',
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: '600',
      lineHeight: '1.3',
      letterSpacing: '-0.025em',
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: '600',
      lineHeight: '1.35',
      letterSpacing: '-0.025em',
    },
    body: {
      fontSize: '1rem',
      fontWeight: '400',
      lineHeight: '1.5',
      letterSpacing: '0em',
    },
    bodyLarge: {
      fontSize: '1.125rem',
      fontWeight: '400',
      lineHeight: '1.5',
      letterSpacing: '0em',
    },
    bodySmall: {
      fontSize: '0.875rem',
      fontWeight: '400',
      lineHeight: '1.4',
      letterSpacing: '0em',
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: '400',
      lineHeight: '1.3',
      letterSpacing: '0.025em',
    },
    button: {
      fontSize: '0.875rem',
      fontWeight: '600',
      lineHeight: '1.2',
      letterSpacing: '0.025em',
    },
    label: {
      fontSize: '0.875rem',
      fontWeight: '500',
      lineHeight: '1.2',
      letterSpacing: '0.025em',
    },
  },
} as const;

// CSS Custom Properties for runtime usage
export const cssVariables = {
  '--toto-font-family-sans': typography.fontFamily.sans.join(', '),
  '--toto-font-family-heading': typography.fontFamily.heading.join(', '),
  '--toto-font-family-mono': typography.fontFamily.mono.join(', '),
  '--toto-font-size-base': typography.fontSize.base,
  '--toto-font-size-h1': typography.fontSize.h1,
  '--toto-font-size-h2': typography.fontSize.h2,
  '--toto-font-size-h3': typography.fontSize.h3,
  '--toto-font-size-h4': typography.fontSize.h4,
  '--toto-font-size-body': typography.fontSize.body,
  '--toto-font-size-small': typography.fontSize.small,
  '--toto-font-size-caption': typography.fontSize.caption,
  '--toto-font-weight-regular': typography.fontWeight.regular,
  '--toto-font-weight-semibold': typography.fontWeight.semibold,
  '--toto-font-weight-bold': typography.fontWeight.bold,
} as const;

export type FontSize = keyof typeof typography.fontSize;
export type FontWeight = keyof typeof typography.fontWeight;
export type LineHeight = keyof typeof typography.lineHeight;
export type LetterSpacing = keyof typeof typography.letterSpacing;
export type TextStyle = keyof typeof typography.textStyles;
