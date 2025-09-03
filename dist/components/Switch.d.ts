/**
 * Switch Component
 * Unified switch component for the entire Toto ecosystem
 */
import React from 'react';
export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
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
export declare const Switch: React.ForwardRefExoticComponent<SwitchProps & React.RefAttributes<HTMLInputElement>>;
export default Switch;
//# sourceMappingURL=Switch.d.ts.map