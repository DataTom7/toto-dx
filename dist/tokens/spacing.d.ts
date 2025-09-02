/**
 * Toto Design System - Spacing Tokens
 * Unified spacing system for the entire Toto ecosystem
 */
export declare const spacing: {
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
export declare const semanticSpacing: {
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
export declare const cssVariables: {
    readonly '--toto-spacing-xs': "0.5rem";
    readonly '--toto-spacing-sm': "1rem";
    readonly '--toto-spacing-md': "1.5rem";
    readonly '--toto-spacing-lg': "2rem";
    readonly '--toto-spacing-xl': "2.5rem";
    readonly '--toto-spacing-xxs': "0.25rem";
};
export type SpacingToken = keyof typeof spacing;
export type SemanticSpacing = keyof typeof semanticSpacing;
//# sourceMappingURL=spacing.d.ts.map