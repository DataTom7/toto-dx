import * as React from 'react';
import React__default from 'react';
import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import { VariantProps } from 'class-variance-authority';
import { ClassValue } from 'clsx';

/**
 * Toto Design System - Color Tokens
 * Unified color palette for the entire Toto ecosystem
 */
declare const colors: {
    readonly primary: {
        readonly 50: "#fef7e0";
        readonly 100: "#fdecc2";
        readonly 200: "#fbd685";
        readonly 300: "#f8c047";
        readonly 400: "#f5a623";
        readonly 500: "#FDB813";
        readonly 600: "#e6a811";
        readonly 700: "#cc980f";
        readonly 800: "#b3880d";
        readonly 900: "#9a780b";
        readonly DEFAULT: "#FDB813";
        readonly hover: "#e6a811";
    };
    readonly secondary: {
        readonly 50: "#f0f9f0";
        readonly 100: "#ddf2dd";
        readonly 200: "#bbe5bb";
        readonly 300: "#99d899";
        readonly 400: "#77cb77";
        readonly 500: "#5CB85C";
        readonly 600: "#4fa04f";
        readonly 700: "#428842";
        readonly 800: "#357035";
        readonly 900: "#285828";
        readonly DEFAULT: "#5CB85C";
        readonly hover: "#4fa04f";
    };
    readonly accent: {
        readonly 50: "#f0f4f8";
        readonly 100: "#d9e2ec";
        readonly 200: "#bcccdc";
        readonly 300: "#9fb3c8";
        readonly 400: "#829ab1";
        readonly 500: "#337AB7";
        readonly 600: "#2d6da3";
        readonly 700: "#27608f";
        readonly 800: "#21537b";
        readonly 900: "#1b4667";
        readonly DEFAULT: "#337AB7";
        readonly hover: "#2d6da3";
    };
    readonly neutral: {
        readonly 50: "#fafafa";
        readonly 100: "#f5f5f5";
        readonly 200: "#e5e5e5";
        readonly 300: "#d4d4d4";
        readonly 400: "#a3a3a3";
        readonly 500: "#737373";
        readonly 600: "#525252";
        readonly 700: "#404040";
        readonly 800: "#262626";
        readonly 900: "#171717";
        readonly dark: "#333333";
        readonly medium: "#777777";
        readonly light: "#F5F5F5";
    };
    readonly success: {
        readonly 50: "#f0fdf4";
        readonly 100: "#dcfce7";
        readonly 200: "#bbf7d0";
        readonly 300: "#86efac";
        readonly 400: "#4ade80";
        readonly 500: "#22c55e";
        readonly 600: "#16a34a";
        readonly 700: "#15803d";
        readonly 800: "#166534";
        readonly 900: "#14532d";
        readonly DEFAULT: "#22c55e";
    };
    readonly warning: {
        readonly 50: "#fffbeb";
        readonly 100: "#fef3c7";
        readonly 200: "#fde68a";
        readonly 300: "#fcd34d";
        readonly 400: "#fbbf24";
        readonly 500: "#f59e0b";
        readonly 600: "#d97706";
        readonly 700: "#b45309";
        readonly 800: "#92400e";
        readonly 900: "#78350f";
        readonly DEFAULT: "#f59e0b";
    };
    readonly error: {
        readonly 50: "#fef2f2";
        readonly 100: "#fee2e2";
        readonly 200: "#fecaca";
        readonly 300: "#fca5a5";
        readonly 400: "#f87171";
        readonly 500: "#D9534F";
        readonly 600: "#dc2626";
        readonly 700: "#b91c1c";
        readonly 800: "#991b1b";
        readonly 900: "#7f1d1d";
        readonly DEFAULT: "#D9534F";
    };
    readonly info: {
        readonly 50: "#eff6ff";
        readonly 100: "#dbeafe";
        readonly 200: "#bfdbfe";
        readonly 300: "#93c5fd";
        readonly 400: "#60a5fa";
        readonly 500: "#3b82f6";
        readonly 600: "#2563eb";
        readonly 700: "#1d4ed8";
        readonly 800: "#1e40af";
        readonly 900: "#1e3a8a";
        readonly DEFAULT: "#3b82f6";
    };
    readonly background: {
        readonly DEFAULT: "#FFFFFF";
        readonly secondary: "#F5F5F5";
        readonly tertiary: "#fafafa";
    };
    readonly text: {
        readonly primary: "#333333";
        readonly secondary: "#777777";
        readonly tertiary: "#a3a3a3";
        readonly inverse: "#FFFFFF";
    };
};
type ColorToken = keyof typeof colors;
type ColorScale = keyof typeof colors.primary;

/**
 * Toto Design System - Typography Tokens
 * Unified typography system for the entire Toto ecosystem
 */
declare const typography: {
    readonly fontFamily: {
        readonly sans: readonly ["Inter", "Open Sans", "system-ui", "-apple-system", "BlinkMacSystemFont", "sans-serif"];
        readonly heading: readonly ["Raleway", "Inter", "Lato", "Nunito", "Arial", "sans-serif"];
        readonly mono: readonly ["JetBrains Mono", "Fira Code", "Monaco", "Consolas", "monospace"];
    };
    readonly fontSize: {
        readonly xs: "0.75rem";
        readonly sm: "0.875rem";
        readonly base: "1rem";
        readonly lg: "1.125rem";
        readonly xl: "1.25rem";
        readonly '2xl': "1.5rem";
        readonly '3xl': "1.875rem";
        readonly '4xl': "2.25rem";
        readonly '5xl': "3rem";
        readonly '6xl': "3.75rem";
        readonly h1: "2.5rem";
        readonly h2: "2rem";
        readonly h3: "1.5rem";
        readonly h4: "1.25rem";
        readonly body: "1rem";
        readonly small: "0.875rem";
        readonly caption: "0.75rem";
    };
    readonly fontWeight: {
        readonly thin: "100";
        readonly extralight: "200";
        readonly light: "300";
        readonly normal: "400";
        readonly medium: "500";
        readonly semibold: "600";
        readonly bold: "700";
        readonly extrabold: "800";
        readonly black: "900";
        readonly regular: "400";
    };
    readonly lineHeight: {
        readonly none: "1";
        readonly tight: "1.25";
        readonly snug: "1.375";
        readonly normal: "1.5";
        readonly relaxed: "1.625";
        readonly loose: "2";
    };
    readonly letterSpacing: {
        readonly tighter: "-0.05em";
        readonly tight: "-0.025em";
        readonly normal: "0em";
        readonly wide: "0.025em";
        readonly wider: "0.05em";
        readonly widest: "0.1em";
    };
    readonly textStyles: {
        readonly h1: {
            readonly fontSize: "2.5rem";
            readonly fontWeight: "700";
            readonly lineHeight: "1.2";
            readonly letterSpacing: "-0.025em";
        };
        readonly h2: {
            readonly fontSize: "2rem";
            readonly fontWeight: "600";
            readonly lineHeight: "1.25";
            readonly letterSpacing: "-0.025em";
        };
        readonly h3: {
            readonly fontSize: "1.5rem";
            readonly fontWeight: "600";
            readonly lineHeight: "1.3";
            readonly letterSpacing: "-0.025em";
        };
        readonly h4: {
            readonly fontSize: "1.25rem";
            readonly fontWeight: "600";
            readonly lineHeight: "1.35";
            readonly letterSpacing: "-0.025em";
        };
        readonly body: {
            readonly fontSize: "1rem";
            readonly fontWeight: "400";
            readonly lineHeight: "1.5";
            readonly letterSpacing: "0em";
        };
        readonly bodyLarge: {
            readonly fontSize: "1.125rem";
            readonly fontWeight: "400";
            readonly lineHeight: "1.5";
            readonly letterSpacing: "0em";
        };
        readonly bodySmall: {
            readonly fontSize: "0.875rem";
            readonly fontWeight: "400";
            readonly lineHeight: "1.4";
            readonly letterSpacing: "0em";
        };
        readonly caption: {
            readonly fontSize: "0.75rem";
            readonly fontWeight: "400";
            readonly lineHeight: "1.3";
            readonly letterSpacing: "0.025em";
        };
        readonly button: {
            readonly fontSize: "0.875rem";
            readonly fontWeight: "600";
            readonly lineHeight: "1.2";
            readonly letterSpacing: "0.025em";
        };
        readonly label: {
            readonly fontSize: "0.875rem";
            readonly fontWeight: "500";
            readonly lineHeight: "1.2";
            readonly letterSpacing: "0.025em";
        };
    };
};
type FontSize = keyof typeof typography.fontSize;
type FontWeight = keyof typeof typography.fontWeight;
type LineHeight = keyof typeof typography.lineHeight;
type LetterSpacing = keyof typeof typography.letterSpacing;
type TextStyle = keyof typeof typography.textStyles;

/**
 * Toto Design System - Spacing Tokens
 * Unified spacing system for the entire Toto ecosystem
 */
declare const spacing: {
    readonly 0: "0";
    readonly px: "1px";
    readonly 0.5: "0.125rem";
    readonly 1: "0.25rem";
    readonly 1.5: "0.375rem";
    readonly 2: "0.5rem";
    readonly 2.5: "0.625rem";
    readonly 3: "0.75rem";
    readonly 3.5: "0.875rem";
    readonly 4: "1rem";
    readonly 5: "1.25rem";
    readonly 6: "1.5rem";
    readonly 7: "1.75rem";
    readonly 8: "2rem";
    readonly 9: "2.25rem";
    readonly 10: "2.5rem";
    readonly 11: "2.75rem";
    readonly 12: "3rem";
    readonly 14: "3.5rem";
    readonly 16: "4rem";
    readonly 20: "5rem";
    readonly 24: "6rem";
    readonly 28: "7rem";
    readonly 32: "8rem";
    readonly 36: "9rem";
    readonly 40: "10rem";
    readonly 44: "11rem";
    readonly 48: "12rem";
    readonly 52: "13rem";
    readonly 56: "14rem";
    readonly 60: "15rem";
    readonly 64: "16rem";
    readonly 72: "18rem";
    readonly 80: "20rem";
    readonly 96: "24rem";
    readonly xxs: "0.25rem";
    readonly xs: "0.5rem";
    readonly sm: "1rem";
    readonly md: "1.5rem";
    readonly lg: "2rem";
    readonly xl: "2.5rem";
};
declare const semanticSpacing: {
    readonly component: {
        readonly padding: {
            readonly xs: "0.5rem";
            readonly sm: "0.75rem";
            readonly md: "1rem";
            readonly lg: "1.5rem";
            readonly xl: "2rem";
        };
        readonly margin: {
            readonly xs: "0.5rem";
            readonly sm: "0.75rem";
            readonly md: "1rem";
            readonly lg: "1.5rem";
            readonly xl: "2rem";
        };
        readonly gap: {
            readonly xs: "0.25rem";
            readonly sm: "0.5rem";
            readonly md: "0.75rem";
            readonly lg: "1rem";
            readonly xl: "1.5rem";
        };
    };
    readonly layout: {
        readonly container: {
            readonly padding: "1rem";
            readonly maxWidth: "1200px";
        };
        readonly section: {
            readonly padding: "4rem";
            readonly margin: "2rem";
        };
        readonly grid: {
            readonly gap: "1.5rem";
        };
    };
    readonly form: {
        readonly field: {
            readonly marginBottom: "1rem";
        };
        readonly label: {
            readonly marginBottom: "0.25rem";
        };
        readonly error: {
            readonly marginTop: "0.25rem";
        };
    };
};
type SpacingToken = keyof typeof spacing;
type SemanticSpacing = keyof typeof semanticSpacing;

/**
 * Toto Design System - Border Tokens
 * Unified border system for the entire Toto ecosystem
 */
declare const borders: {
    readonly radius: {
        readonly none: "0";
        readonly sm: "0.25rem";
        readonly md: "0.5rem";
        readonly lg: "0.75rem";
        readonly xl: "1rem";
        readonly '2xl': "1.5rem";
        readonly '3xl': "2rem";
        readonly full: "9999px";
        readonly pill: "999px";
    };
    readonly width: {
        readonly 0: "0";
        readonly 1: "1px";
        readonly 2: "2px";
        readonly 4: "4px";
        readonly 8: "8px";
    };
    readonly style: {
        readonly solid: "solid";
        readonly dashed: "dashed";
        readonly dotted: "dotted";
        readonly double: "double";
        readonly none: "none";
    };
    readonly color: {
        readonly default: "var(--toto-neutral-light)";
        readonly primary: "var(--toto-primary)";
        readonly secondary: "var(--toto-secondary)";
        readonly accent: "var(--toto-accent)";
        readonly error: "var(--toto-error)";
        readonly success: "var(--toto-success)";
        readonly warning: "var(--toto-warning)";
        readonly info: "var(--toto-info)";
    };
};
declare const borderPresets: {
    readonly card: {
        readonly width: "1px";
        readonly style: "solid";
        readonly color: "var(--toto-neutral-light)";
        readonly radius: "0.75rem";
    };
    readonly button: {
        readonly width: "1px";
        readonly style: "solid";
        readonly color: "transparent";
        readonly radius: "0.5rem";
    };
    readonly input: {
        readonly width: "1px";
        readonly style: "solid";
        readonly color: "var(--toto-neutral-light)";
        readonly radius: "0.5rem";
    };
    readonly modal: {
        readonly width: "1px";
        readonly style: "solid";
        readonly color: "var(--toto-neutral-light)";
        readonly radius: "1rem";
    };
    readonly badge: {
        readonly width: "1px";
        readonly style: "solid";
        readonly color: "transparent";
        readonly radius: "9999px";
    };
};
type BorderRadius = keyof typeof borders.radius;
type BorderWidth = keyof typeof borders.width;
type BorderStyle = keyof typeof borders.style;
type BorderColor = keyof typeof borders.color;
type BorderPreset = keyof typeof borderPresets;

/**
 * Toto Design System - Shadow Tokens
 * Unified shadow system for the entire Toto ecosystem
 */
declare const shadows: {
    readonly box: {
        readonly none: "none";
        readonly sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)";
        readonly md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)";
        readonly lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)";
        readonly xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)";
        readonly '2xl': "0 25px 50px -12px rgb(0 0 0 / 0.25)";
        readonly inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)";
    };
    readonly drop: {
        readonly sm: "0 1px 2px rgb(0 0 0 / 0.05)";
        readonly md: "0 4px 6px rgb(0 0 0 / 0.07), 0 2px 4px rgb(0 0 0 / 0.06)";
        readonly lg: "0 10px 15px rgb(0 0 0 / 0.1), 0 4px 6px rgb(0 0 0 / 0.05)";
        readonly xl: "0 20px 25px rgb(0 0 0 / 0.1), 0 8px 10px rgb(0 0 0 / 0.04)";
        readonly '2xl': "0 25px 50px rgb(0 0 0 / 0.15)";
    };
    readonly colored: {
        readonly primary: "0 4px 14px 0 rgb(253 184 19 / 0.15)";
        readonly secondary: "0 4px 14px 0 rgb(92 184 92 / 0.15)";
        readonly accent: "0 4px 14px 0 rgb(51 122 183 / 0.15)";
        readonly error: "0 4px 14px 0 rgb(217 83 79 / 0.15)";
        readonly success: "0 4px 14px 0 rgb(34 197 94 / 0.15)";
        readonly warning: "0 4px 14px 0 rgb(245 158 11 / 0.15)";
        readonly info: "0 4px 14px 0 rgb(59 130 246 / 0.15)";
    };
};
declare const shadowPresets: {
    readonly card: {
        readonly default: "0 1px 2px 0 rgb(0 0 0 / 0.05)";
        readonly hover: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)";
        readonly active: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)";
    };
    readonly button: {
        readonly default: "0 1px 2px 0 rgb(0 0 0 / 0.05)";
        readonly hover: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)";
        readonly active: "none";
        readonly focus: "0 4px 14px 0 rgb(253 184 19 / 0.15)";
    };
    readonly modal: {
        readonly backdrop: "0 0 0 1000px rgb(0 0 0 / 0.5)";
        readonly content: "0 25px 50px -12px rgb(0 0 0 / 0.25)";
    };
    readonly dropdown: {
        readonly default: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)";
    };
    readonly tooltip: {
        readonly default: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)";
    };
    readonly input: {
        readonly focus: "0 4px 14px 0 rgb(51 122 183 / 0.15)";
        readonly error: "0 4px 14px 0 rgb(217 83 79 / 0.15)";
    };
};
type BoxShadow = keyof typeof shadows.box;
type DropShadow = keyof typeof shadows.drop;
type ColoredShadow = keyof typeof shadows.colored;
type ShadowPreset = keyof typeof shadowPresets;

/**
 * Toto Design System - Design Tokens
 * Central export for all design tokens
 */

declare const designTokens: {
    readonly '--toto-shadow-sm': "0 1px 2px 0 rgb(0 0 0 / 0.05)";
    readonly '--toto-shadow-md': "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)";
    readonly '--toto-shadow-lg': "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)";
    readonly '--toto-shadow-xl': "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)";
    readonly '--toto-border-radius-sm': "0.25rem";
    readonly '--toto-border-radius-md': "0.5rem";
    readonly '--toto-border-radius-lg': "0.75rem";
    readonly '--toto-border-radius-pill': "999px";
    readonly '--toto-spacing-xs': "0.5rem";
    readonly '--toto-spacing-sm': "1rem";
    readonly '--toto-spacing-md': "1.5rem";
    readonly '--toto-spacing-lg': "2rem";
    readonly '--toto-spacing-xl': "2.5rem";
    readonly '--toto-spacing-xxs': "0.25rem";
    readonly '--toto-font-family-sans': string;
    readonly '--toto-font-family-heading': string;
    readonly '--toto-font-family-mono': string;
    readonly '--toto-font-size-base': "1rem";
    readonly '--toto-font-size-h1': "2.5rem";
    readonly '--toto-font-size-h2': "2rem";
    readonly '--toto-font-size-h3': "1.5rem";
    readonly '--toto-font-size-h4': "1.25rem";
    readonly '--toto-font-size-body': "1rem";
    readonly '--toto-font-size-small': "0.875rem";
    readonly '--toto-font-size-caption': "0.75rem";
    readonly '--toto-font-weight-regular': "400";
    readonly '--toto-font-weight-semibold': "600";
    readonly '--toto-font-weight-bold': "700";
    readonly '--toto-primary': "#FDB813";
    readonly '--toto-primary-hover': "#e6a811";
    readonly '--toto-secondary': "#5CB85C";
    readonly '--toto-secondary-hover': "#4fa04f";
    readonly '--toto-accent': "#337AB7";
    readonly '--toto-accent-hover': "#2d6da3";
    readonly '--toto-neutral-dark': "#333333";
    readonly '--toto-neutral-medium': "#777777";
    readonly '--toto-neutral-light': "#F5F5F5";
    readonly '--toto-background': "#FFFFFF";
    readonly '--toto-error': "#D9534F";
    readonly '--toto-success': "#22c55e";
    readonly '--toto-warning': "#f59e0b";
    readonly '--toto-info': "#3b82f6";
};

/**
 * TotoLogo Component
 * Unified logo component for the entire Toto ecosystem
 */

interface TotoLogoProps {
    /** Size of the logo in pixels */
    size?: number;
    /** Color of the logo */
    color?: string;
    /** Additional CSS classes */
    className?: string;
    /** Alt text for accessibility */
    alt?: string;
}
declare const TotoLogo: React__default.FC<TotoLogoProps>;

declare const buttonVariants: (props?: ({
    variant?: "default" | "link" | "destructive" | "outline" | "secondary" | "ghost" | "primary" | "accent" | "success" | null | undefined;
    size?: "default" | "sm" | "lg" | "icon" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    /** Loading state */
    loading?: boolean;
    /** Loading text */
    loadingText?: string;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;

/**
 * Card Component
 * Unified card component for the entire Toto ecosystem
 */

declare const Card: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const CardHeader: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const CardTitle: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLHeadingElement> & React.RefAttributes<HTMLParagraphElement>>;
declare const CardDescription: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLParagraphElement> & React.RefAttributes<HTMLParagraphElement>>;
declare const CardContent: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const CardFooter: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Card.d.ts.map

/**
 * Input Component
 * Unified input component for the entire Toto ecosystem
 */

interface InputProps extends Omit<React__default.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    /** Input variant */
    variant?: 'default' | 'filled' | 'outline';
    /** Input size */
    size?: 'sm' | 'md' | 'lg';
    /** Error state */
    error?: boolean;
    /** Success state */
    success?: boolean;
    /** Disabled state */
    disabled?: boolean;
    /** Helper text */
    helperText?: string;
    /** Error message */
    errorMessage?: string;
    /** Label */
    label?: string;
}
declare const Input: React__default.ForwardRefExoticComponent<InputProps & React__default.RefAttributes<HTMLInputElement>>;

/**
 * Badge Component
 * Unified badge component for the entire Toto ecosystem
 */

interface BadgeProps extends React__default.HTMLAttributes<HTMLDivElement> {
    /** Badge variant */
    variant?: 'default' | 'secondary' | 'destructive' | 'outline' | 'success' | 'warning' | 'info';
    /** Badge size */
    size?: 'sm' | 'md' | 'lg';
    /** Dismissible badge */
    dismissible?: boolean;
    /** Callback when badge is dismissed */
    onDismiss?: () => void;
}
declare const Badge: React__default.ForwardRefExoticComponent<BadgeProps & React__default.RefAttributes<HTMLDivElement>>;

/**
 * Label Component
 * Unified label component for the entire Toto ecosystem
 */

interface LabelProps extends React__default.LabelHTMLAttributes<HTMLLabelElement> {
    /** Label variant */
    variant?: 'default' | 'required' | 'optional';
    /** Label size */
    size?: 'sm' | 'md' | 'lg';
}
declare const Label: React__default.ForwardRefExoticComponent<LabelProps & React__default.RefAttributes<HTMLLabelElement>>;

/**
 * Textarea Component
 * Unified textarea component for the entire Toto ecosystem
 */

interface TextareaProps extends React__default.TextareaHTMLAttributes<HTMLTextAreaElement> {
    /** Textarea variant */
    variant?: 'default' | 'filled' | 'outline';
    /** Textarea size */
    size?: 'sm' | 'md' | 'lg';
    /** Error state */
    error?: boolean;
    /** Success state */
    success?: boolean;
    /** Disabled state */
    disabled?: boolean;
    /** Resize behavior */
    resize?: 'none' | 'vertical' | 'horizontal' | 'both';
    /** Helper text */
    helperText?: string;
    /** Error message */
    errorMessage?: string;
    /** Label */
    label?: string;
    /** Show character count */
    showCharacterCount?: boolean;
    /** Maximum character count */
    maxLength?: number;
}
declare const Textarea: React__default.ForwardRefExoticComponent<TextareaProps & React__default.RefAttributes<HTMLTextAreaElement>>;

/**
 * Dialog Component
 * Unified dialog component for the entire Toto ecosystem
 */

interface DialogProps extends React__default.HTMLAttributes<HTMLDivElement> {
    /** Whether the dialog is open */
    open?: boolean;
    /** Callback when dialog should close */
    onOpenChange?: (open: boolean) => void;
    /** Dialog variant */
    variant?: 'default' | 'centered' | 'fullscreen';
    /** Dialog size */
    size?: 'sm' | 'md' | 'lg' | 'xl';
}
interface DialogContentProps extends React__default.HTMLAttributes<HTMLDivElement> {
    /** Content variant */
    variant?: 'default' | 'centered' | 'fullscreen';
    /** Content size */
    size?: 'sm' | 'md' | 'lg' | 'xl';
}
interface DialogHeaderProps extends React__default.HTMLAttributes<HTMLDivElement> {
}
interface DialogTitleProps extends React__default.HTMLAttributes<HTMLHeadingElement> {
}
interface DialogDescriptionProps extends React__default.HTMLAttributes<HTMLParagraphElement> {
}
interface DialogFooterProps extends React__default.HTMLAttributes<HTMLDivElement> {
}
declare const Dialog: React__default.FC<DialogProps>;
declare const DialogContent: React__default.ForwardRefExoticComponent<DialogContentProps & React__default.RefAttributes<HTMLDivElement>>;
declare const DialogHeader: React__default.ForwardRefExoticComponent<DialogHeaderProps & React__default.RefAttributes<HTMLDivElement>>;
declare const DialogTitle: React__default.ForwardRefExoticComponent<DialogTitleProps & React__default.RefAttributes<HTMLHeadingElement>>;
declare const DialogDescription: React__default.ForwardRefExoticComponent<DialogDescriptionProps & React__default.RefAttributes<HTMLParagraphElement>>;
declare const DialogFooter: React__default.ForwardRefExoticComponent<DialogFooterProps & React__default.RefAttributes<HTMLDivElement>>;

/**
 * Alert Component
 * Unified alert component for the entire Toto ecosystem
 */

interface AlertProps extends React__default.HTMLAttributes<HTMLDivElement> {
    /** Alert variant */
    variant?: 'default' | 'destructive' | 'warning' | 'success' | 'info';
    /** Alert size */
    size?: 'sm' | 'md' | 'lg';
    /** Dismissible alert */
    dismissible?: boolean;
    /** Callback when alert is dismissed */
    onDismiss?: () => void;
}
interface AlertTitleProps extends React__default.HTMLAttributes<HTMLHeadingElement> {
}
interface AlertDescriptionProps extends React__default.HTMLAttributes<HTMLDivElement> {
}
declare const Alert: React__default.ForwardRefExoticComponent<AlertProps & React__default.RefAttributes<HTMLDivElement>>;
declare const AlertTitle: React__default.ForwardRefExoticComponent<AlertTitleProps & React__default.RefAttributes<HTMLHeadingElement>>;
declare const AlertDescription: React__default.ForwardRefExoticComponent<AlertDescriptionProps & React__default.RefAttributes<HTMLDivElement>>;

/**
 * Avatar Component
 * Unified avatar component for the entire Toto ecosystem
 */

interface AvatarProps extends React__default.HTMLAttributes<HTMLDivElement> {
    /** Avatar size */
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    /** Avatar variant */
    variant?: 'circle' | 'square' | 'rounded';
    /** Image source */
    src?: string;
    /** Alt text for image */
    alt?: string;
    /** Fallback text when no image */
    fallback?: string;
    /** Background color for fallback */
    bgColor?: string;
}
interface AvatarImageProps extends React__default.ImgHTMLAttributes<HTMLImageElement> {
}
interface AvatarFallbackProps extends React__default.HTMLAttributes<HTMLDivElement> {
    /** Fallback text */
    children: React__default.ReactNode;
    /** Avatar variant */
    variant?: 'circle' | 'square' | 'rounded';
    /** Background color */
    bgColor?: string;
}
declare const Avatar: React__default.ForwardRefExoticComponent<AvatarProps & React__default.RefAttributes<HTMLDivElement>>;
declare const AvatarImage: React__default.ForwardRefExoticComponent<AvatarImageProps & React__default.RefAttributes<HTMLImageElement>>;
declare const AvatarFallback: React__default.ForwardRefExoticComponent<AvatarFallbackProps & React__default.RefAttributes<HTMLDivElement>>;

/**
 * Progress Component
 * Unified progress component for the entire Toto ecosystem
 */

interface ProgressProps extends React__default.HTMLAttributes<HTMLDivElement> {
    /** Progress value (0-100) */
    value?: number;
    /** Progress variant */
    variant?: 'default' | 'success' | 'warning' | 'destructive';
    /** Progress size */
    size?: 'sm' | 'md' | 'lg';
    /** Show percentage text */
    showValue?: boolean;
    /** Custom label */
    label?: string;
    /** Indeterminate state */
    indeterminate?: boolean;
}
declare const Progress: React__default.ForwardRefExoticComponent<ProgressProps & React__default.RefAttributes<HTMLDivElement>>;

/**
 * Select Component
 * Unified select component for the entire Toto ecosystem
 */

interface SelectProps extends Omit<React__default.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
    /** Select variant */
    variant?: 'default' | 'filled' | 'outline';
    /** Select size */
    size?: 'sm' | 'md' | 'lg';
    /** Error state */
    error?: boolean;
    /** Success state */
    success?: boolean;
    /** Disabled state */
    disabled?: boolean;
    /** Placeholder text */
    placeholder?: string;
    /** Helper text */
    helperText?: string;
    /** Error message */
    errorMessage?: string;
    /** Label */
    label?: string;
}
interface SelectOptionProps extends React__default.OptionHTMLAttributes<HTMLOptionElement> {
    /** Option value */
    value: string;
    /** Option label */
    children: React__default.ReactNode;
}
interface SelectGroupProps extends React__default.HTMLAttributes<HTMLOptGroupElement> {
    /** Group label */
    label: string;
    /** Group children */
    children: React__default.ReactNode;
}
declare const Select: React__default.ForwardRefExoticComponent<SelectProps & React__default.RefAttributes<HTMLSelectElement>>;
declare const SelectOption: React__default.ForwardRefExoticComponent<SelectOptionProps & React__default.RefAttributes<HTMLOptionElement>>;
declare const SelectGroup: React__default.ForwardRefExoticComponent<SelectGroupProps & React__default.RefAttributes<HTMLOptGroupElement>>;

/**
 * Separator Component
 * Unified separator component for the entire Toto ecosystem
 */

interface SeparatorProps extends React__default.HTMLAttributes<HTMLDivElement> {
    /** Separator orientation */
    orientation?: 'horizontal' | 'vertical';
    /** Separator variant */
    variant?: 'default' | 'thick' | 'dashed' | 'dotted';
    /** Separator color */
    color?: 'default' | 'muted' | 'border';
}
declare const Separator: React__default.ForwardRefExoticComponent<SeparatorProps & React__default.RefAttributes<HTMLDivElement>>;

/**
 * Switch Component
 * Unified switch component for the entire Toto ecosystem
 */

interface SwitchProps extends Omit<React__default.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    /** Switch size */
    size?: 'sm' | 'md' | 'lg';
    /** Switch variant */
    variant?: 'default' | 'success' | 'warning' | 'destructive';
    /** Disabled state */
    disabled?: boolean;
    /** Label text */
    label?: string;
    /** Description text */
    description?: string;
}
declare const Switch: React__default.ForwardRefExoticComponent<SwitchProps & React__default.RefAttributes<HTMLInputElement>>;

/**
 * Tabs Component
 * Unified tabs component for the entire Toto ecosystem
 */

interface TabsProps extends React__default.HTMLAttributes<HTMLDivElement> {
    /** Default active tab */
    defaultValue?: string;
    /** Controlled active tab */
    value?: string;
    /** Callback when tab changes */
    onValueChange?: (value: string) => void;
    /** Tabs orientation */
    orientation?: 'horizontal' | 'vertical';
    /** Tabs variant */
    variant?: 'default' | 'pills' | 'underline';
}
interface TabsListProps extends React__default.HTMLAttributes<HTMLDivElement> {
    /** List variant */
    variant?: 'default' | 'pills' | 'underline';
    /** List orientation */
    orientation?: 'horizontal' | 'vertical';
}
interface TabsTriggerProps extends React__default.ButtonHTMLAttributes<HTMLButtonElement> {
    /** Trigger value */
    value: string;
    /** Trigger variant */
    variant?: 'default' | 'pills' | 'underline';
    /** Trigger orientation */
    orientation?: 'horizontal' | 'vertical';
    /** Internal props - don't use directly */
    activeTab?: string;
    onTabChange?: (value: string) => void;
}
interface TabsContentProps extends React__default.HTMLAttributes<HTMLDivElement> {
    /** Content value */
    value: string;
    /** Internal props - don't use directly */
    activeTab?: string;
}
declare const Tabs: React__default.ForwardRefExoticComponent<TabsProps & React__default.RefAttributes<HTMLDivElement>>;
declare const TabsList: React__default.ForwardRefExoticComponent<TabsListProps & React__default.RefAttributes<HTMLDivElement>>;
declare const TabsTrigger: React__default.ForwardRefExoticComponent<TabsTriggerProps & React__default.RefAttributes<HTMLButtonElement>>;
declare const TabsContent: React__default.ForwardRefExoticComponent<TabsContentProps & React__default.RefAttributes<HTMLDivElement>>;

/**
 * Utility function to merge class names
 * Combines clsx and tailwind-merge for optimal class name handling
 */

declare function cn(...inputs: ClassValue[]): string;

export { Alert, AlertDescription, AlertTitle, Avatar, AvatarFallback, AvatarImage, Badge, Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, Input, Label, Progress, Select, SelectGroup, SelectOption, Separator, Switch, Tabs, TabsContent, TabsList, TabsTrigger, Textarea, TotoLogo, borderPresets, borders, buttonVariants, cn, colors, designTokens, semanticSpacing, shadowPresets, shadows, spacing, typography };
export type { BorderColor, BorderPreset, BorderRadius, BorderStyle, BorderWidth, BoxShadow, ColorScale, ColorToken, ColoredShadow, DropShadow, FontSize, FontWeight, LetterSpacing, LineHeight, SemanticSpacing, ShadowPreset, SpacingToken, TextStyle };
