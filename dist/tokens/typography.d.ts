/**
 * Toto Design System - Typography Tokens
 * Unified typography system for the entire Toto ecosystem
 */
export declare const typography: {
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
export declare const cssVariables: {
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
};
export type FontSize = keyof typeof typography.fontSize;
export type FontWeight = keyof typeof typography.fontWeight;
export type LineHeight = keyof typeof typography.lineHeight;
export type LetterSpacing = keyof typeof typography.letterSpacing;
export type TextStyle = keyof typeof typography.textStyles;
//# sourceMappingURL=typography.d.ts.map