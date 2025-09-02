/**
 * Toto Design System - Border Tokens
 * Unified border system for the entire Toto ecosystem
 */
export declare const borders: {
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
export declare const borderPresets: {
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
export declare const cssVariables: {
    readonly '--toto-border-radius-sm': "0.25rem";
    readonly '--toto-border-radius-md': "0.5rem";
    readonly '--toto-border-radius-lg': "0.75rem";
    readonly '--toto-border-radius-pill': "999px";
};
export type BorderRadius = keyof typeof borders.radius;
export type BorderWidth = keyof typeof borders.width;
export type BorderStyle = keyof typeof borders.style;
export type BorderColor = keyof typeof borders.color;
export type BorderPreset = keyof typeof borderPresets;
//# sourceMappingURL=borders.d.ts.map