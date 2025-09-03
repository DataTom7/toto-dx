/**
 * Select Component
 * Unified select component for the entire Toto ecosystem
 */
import React from 'react';
export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
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
export interface SelectOptionProps extends React.OptionHTMLAttributes<HTMLOptionElement> {
    /** Option value */
    value: string;
    /** Option label */
    children: React.ReactNode;
}
export interface SelectGroupProps extends React.HTMLAttributes<HTMLOptGroupElement> {
    /** Group label */
    label: string;
    /** Group children */
    children: React.ReactNode;
}
export declare const Select: React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<HTMLSelectElement>>;
export declare const SelectOption: React.ForwardRefExoticComponent<SelectOptionProps & React.RefAttributes<HTMLOptionElement>>;
export declare const SelectGroup: React.ForwardRefExoticComponent<SelectGroupProps & React.RefAttributes<HTMLOptGroupElement>>;
export default Select;
//# sourceMappingURL=Select.d.ts.map