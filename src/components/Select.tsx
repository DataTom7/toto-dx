/**
 * Select Component
 * Unified select component for the entire Toto ecosystem
 */

import React from 'react';
import { cn } from '../utils/cn';

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

// Select Root
export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ 
    className, 
    variant = 'default', 
    size = 'md', 
    error, 
    success, 
    disabled, 
    placeholder,
    helperText,
    errorMessage,
    label,
    id,
    children,
    ...props 
  }, ref) => {
    const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`;
    const hasError = error || !!errorMessage;
    const displayText = hasError ? errorMessage : helperText;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={selectId}
            className="block text-sm font-medium text-foreground mb-1"
          >
            {label}
          </label>
        )}
        <select
          id={selectId}
          className={cn(
            // Base styles
            'flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            
            // Variants
            {
              'border-input bg-background': variant === 'default',
              'border-transparent bg-muted': variant === 'filled',
              'border-2 border-input bg-transparent': variant === 'outline',
            },
            
            // Sizes
            {
              'h-8 px-2 text-xs': size === 'sm',
              'h-10 px-3 text-sm': size === 'md',
              'h-12 px-4 text-base': size === 'lg',
            },
            
            // States
            {
              'border-destructive focus:ring-destructive': hasError,
              'border-green-500 focus:ring-green-500': success,
              'opacity-50 cursor-not-allowed': disabled,
            },
            
            className
          )}
          ref={ref}
          disabled={disabled}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {children}
        </select>
        {displayText && (
          <p className={cn(
            'mt-1 text-xs',
            hasError ? 'text-destructive' : 'text-muted-foreground'
          )}>
            {displayText}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';

// Select Option
export const SelectOption = React.forwardRef<HTMLOptionElement, SelectOptionProps>(
  ({ className, value, children, ...props }, ref) => (
    <option
      ref={ref}
      className={cn('text-foreground', className)}
      value={value}
      {...props}
    >
      {children}
    </option>
  )
);

SelectOption.displayName = 'SelectOption';

// Select Group
export const SelectGroup = React.forwardRef<HTMLOptGroupElement, SelectGroupProps>(
  ({ className, label, children, ...props }, ref) => (
    <optgroup
      ref={ref}
      className={cn('text-muted-foreground', className)}
      label={label}
      {...props}
    >
      {children}
    </optgroup>
  )
);

SelectGroup.displayName = 'SelectGroup';

export default Select;
