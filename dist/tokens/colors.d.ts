/**
 * Toto Design System - Color Tokens
 * Unified color palette for the entire Toto ecosystem
 */
export declare const colors: {
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
export declare const cssVariables: {
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
export type ColorToken = keyof typeof colors;
export type ColorScale = keyof typeof colors.primary;
//# sourceMappingURL=colors.d.ts.map