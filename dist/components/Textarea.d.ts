/**
 * Textarea Component
 * Unified textarea component for the entire Toto ecosystem
 */
import React from 'react';
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
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
export declare const Textarea: React.ForwardRefExoticComponent<TextareaProps & React.RefAttributes<HTMLTextAreaElement>>;
export default Textarea;
//# sourceMappingURL=Textarea.d.ts.map