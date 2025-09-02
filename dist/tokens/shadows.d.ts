/**
 * Toto Design System - Shadow Tokens
 * Unified shadow system for the entire Toto ecosystem
 */
export declare const shadows: {
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
export declare const shadowPresets: {
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
export declare const cssVariables: {
    readonly '--toto-shadow-sm': "0 1px 2px 0 rgb(0 0 0 / 0.05)";
    readonly '--toto-shadow-md': "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)";
    readonly '--toto-shadow-lg': "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)";
    readonly '--toto-shadow-xl': "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)";
};
export type BoxShadow = keyof typeof shadows.box;
export type DropShadow = keyof typeof shadows.drop;
export type ColoredShadow = keyof typeof shadows.colored;
export type ShadowPreset = keyof typeof shadowPresets;
//# sourceMappingURL=shadows.d.ts.map