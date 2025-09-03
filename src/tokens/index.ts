/**
 * Toto Design System - Design Tokens
 * Central export for all design tokens
 */

export * from './colors';
export * from './typography';
export * from './spacing';
export * from './borders';
export * from './shadows';

// Combined CSS variables for easy import
import { cssVariables as colorsCss } from './colors';
import { cssVariables as typographyCss } from './typography';
import { cssVariables as spacingCss } from './spacing';
import { cssVariables as bordersCss } from './borders';
import { cssVariables as shadowsCss } from './shadows';

export const designTokens = {
  ...colorsCss,
  ...typographyCss,
  ...spacingCss,
  ...bordersCss,
  ...shadowsCss,
} as const;
