/**
 * Input Component
 * Unified input component for the entire Toto ecosystem
 */
import React from 'react';
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
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
export declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
export default Input;
//# sourceMappingURL=Input.d.ts.map