/**
 * Toto Design System - Shadow Tokens
 * Unified shadow system for the entire Toto ecosystem
 */

export const shadows = {
  // Box Shadows
  box: {
    none: 'none',
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
  },

  // Drop Shadows
  drop: {
    sm: '0 1px 2px rgb(0 0 0 / 0.05)',
    md: '0 4px 6px rgb(0 0 0 / 0.07), 0 2px 4px rgb(0 0 0 / 0.06)',
    lg: '0 10px 15px rgb(0 0 0 / 0.1), 0 4px 6px rgb(0 0 0 / 0.05)',
    xl: '0 20px 25px rgb(0 0 0 / 0.1), 0 8px 10px rgb(0 0 0 / 0.04)',
    '2xl': '0 25px 50px rgb(0 0 0 / 0.15)',
  },

  // Colored Shadows
  colored: {
    primary: '0 4px 14px 0 rgb(253 184 19 / 0.15)',
    secondary: '0 4px 14px 0 rgb(92 184 92 / 0.15)',
    accent: '0 4px 14px 0 rgb(51 122 183 / 0.15)',
    error: '0 4px 14px 0 rgb(217 83 79 / 0.15)',
    success: '0 4px 14px 0 rgb(34 197 94 / 0.15)',
    warning: '0 4px 14px 0 rgb(245 158 11 / 0.15)',
    info: '0 4px 14px 0 rgb(59 130 246 / 0.15)',
  },
} as const;

// Semantic shadow presets
export const shadowPresets = {
  // Card shadows
  card: {
    default: shadows.box.sm,
    hover: shadows.box.md,
    active: shadows.box.lg,
  },

  // Button shadows
  button: {
    default: shadows.box.sm,
    hover: shadows.box.md,
    active: 'none',
    focus: shadows.colored.primary,
  },

  // Modal shadows
  modal: {
    backdrop: '0 0 0 1000px rgb(0 0 0 / 0.5)',
    content: shadows.box['2xl'],
  },

  // Dropdown shadows
  dropdown: {
    default: shadows.box.lg,
  },

  // Tooltip shadows
  tooltip: {
    default: shadows.box.md,
  },

  // Input shadows
  input: {
    focus: shadows.colored.accent,
    error: shadows.colored.error,
  },
} as const;

// CSS Custom Properties for runtime usage
export const cssVariables = {
  '--toto-shadow-sm': shadows.box.sm,
  '--toto-shadow-md': shadows.box.md,
  '--toto-shadow-lg': shadows.box.lg,
  '--toto-shadow-xl': shadows.box.xl,
} as const;

export type BoxShadow = keyof typeof shadows.box;
export type DropShadow = keyof typeof shadows.drop;
export type ColoredShadow = keyof typeof shadows.colored;
export type ShadowPreset = keyof typeof shadowPresets;
