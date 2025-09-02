/**
 * Toto Design System - Color Tokens
 * Unified color palette for the entire Toto ecosystem
 */

export const colors = {
  // Primary Brand Colors
  primary: {
    50: '#fef7e0',
    100: '#fdecc2',
    200: '#fbd685',
    300: '#f8c047',
    400: '#f5a623',
    500: '#FDB813', // Main primary color
    600: '#e6a811',
    700: '#cc980f',
    800: '#b3880d',
    900: '#9a780b',
    DEFAULT: '#FDB813',
    hover: '#e6a811',
  },

  // Secondary Brand Colors
  secondary: {
    50: '#f0f9f0',
    100: '#ddf2dd',
    200: '#bbe5bb',
    300: '#99d899',
    400: '#77cb77',
    500: '#5CB85C', // Main secondary color
    600: '#4fa04f',
    700: '#428842',
    800: '#357035',
    900: '#285828',
    DEFAULT: '#5CB85C',
    hover: '#4fa04f',
  },

  // Accent Colors
  accent: {
    50: '#f0f4f8',
    100: '#d9e2ec',
    200: '#bcccdc',
    300: '#9fb3c8',
    400: '#829ab1',
    500: '#337AB7', // Main accent color
    600: '#2d6da3',
    700: '#27608f',
    800: '#21537b',
    900: '#1b4667',
    DEFAULT: '#337AB7',
    hover: '#2d6da3',
  },

  // Neutral Colors
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
    dark: '#333333',
    medium: '#777777',
    light: '#F5F5F5',
  },

  // Semantic Colors
  success: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
    DEFAULT: '#22c55e',
  },

  warning: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
    DEFAULT: '#f59e0b',
  },

  error: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#D9534F', // Main error color
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
    DEFAULT: '#D9534F',
  },

  info: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
    DEFAULT: '#3b82f6',
  },

  // Background Colors
  background: {
    DEFAULT: '#FFFFFF',
    secondary: '#F5F5F5',
    tertiary: '#fafafa',
  },

  // Text Colors
  text: {
    primary: '#333333',
    secondary: '#777777',
    tertiary: '#a3a3a3',
    inverse: '#FFFFFF',
  },
} as const;

// CSS Custom Properties for runtime usage
export const cssVariables = {
  '--toto-primary': colors.primary.DEFAULT,
  '--toto-primary-hover': colors.primary.hover,
  '--toto-secondary': colors.secondary.DEFAULT,
  '--toto-secondary-hover': colors.secondary.hover,
  '--toto-accent': colors.accent.DEFAULT,
  '--toto-accent-hover': colors.accent.hover,
  '--toto-neutral-dark': colors.neutral.dark,
  '--toto-neutral-medium': colors.neutral.medium,
  '--toto-neutral-light': colors.neutral.light,
  '--toto-background': colors.background.DEFAULT,
  '--toto-error': colors.error.DEFAULT,
  '--toto-success': colors.success.DEFAULT,
  '--toto-warning': colors.warning.DEFAULT,
  '--toto-info': colors.info.DEFAULT,
} as const;

export type ColorToken = keyof typeof colors;
export type ColorScale = keyof typeof colors.primary;
