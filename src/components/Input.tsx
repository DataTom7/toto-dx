/**
 * Input Component
 * Unified input component for the entire Toto ecosystem
 */

import React from 'react';
import { cn } from '../utils/cn';

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

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className, 
    variant = 'default', 
    size = 'md', 
    error, 
    success, 
    disabled, 
    helperText,
    errorMessage,
    label,
    id,
    ...props 
  }, ref) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
    const hasError = error || !!errorMessage;
    const displayText = hasError ? errorMessage : helperText;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-foreground mb-1"
          >
            {label}
          </label>
        )}
        <input
          id={inputId}
          className={cn(
            // Base styles
            'flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            
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
              'border-destructive focus-visible:ring-destructive': hasError,
              'border-green-500 focus-visible:ring-green-500': success,
              'opacity-50 cursor-not-allowed': disabled,
            },
            
            className
          )}
          ref={ref}
          disabled={disabled}
          {...props}
        />
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

Input.displayName = 'Input';

export default Input;
