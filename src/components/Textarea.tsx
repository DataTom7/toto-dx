/**
 * Textarea Component
 * Unified textarea component for the entire Toto ecosystem
 */

import React from 'react';
import { cn } from '../utils/cn';

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

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ 
    className, 
    variant = 'default', 
    size = 'md', 
    error, 
    success, 
    disabled, 
    resize = 'vertical',
    helperText,
    errorMessage,
    label,
    showCharacterCount = false,
    maxLength,
    id,
    value,
    ...props 
  }, ref) => {
    const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;
    const hasError = error || !!errorMessage;
    const displayText = hasError ? errorMessage : helperText;
    const currentLength = typeof value === 'string' ? value.length : 0;
    const isNearLimit = maxLength && currentLength > maxLength * 0.8;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-sm font-medium text-foreground mb-1"
          >
            {label}
          </label>
        )}
        <textarea
          id={textareaId}
          className={cn(
            // Base styles
            'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            
            // Variants
            {
              'border-input bg-background': variant === 'default',
              'border-transparent bg-muted': variant === 'filled',
              'border-2 border-input bg-transparent': variant === 'outline',
            },
            
            // Sizes
            {
              'min-h-[60px] px-2 py-1.5 text-xs': size === 'sm',
              'min-h-[80px] px-3 py-2 text-sm': size === 'md',
              'min-h-[100px] px-4 py-3 text-base': size === 'lg',
            },
            
            // Resize behavior
            {
              'resize-none': resize === 'none',
              'resize-y': resize === 'vertical',
              'resize-x': resize === 'horizontal',
              'resize': resize === 'both',
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
          value={value}
          maxLength={maxLength}
          {...props}
        />
        {(displayText || showCharacterCount) && (
          <div className="flex justify-between items-center mt-1">
            {displayText && (
              <p className={cn(
                'text-xs',
                hasError ? 'text-destructive' : 'text-muted-foreground'
              )}>
                {displayText}
              </p>
            )}
            {showCharacterCount && maxLength && (
              <p className={cn(
                'text-xs',
                isNearLimit ? 'text-warning' : 'text-muted-foreground'
              )}>
                {currentLength}/{maxLength}
              </p>
            )}
          </div>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export default Textarea;
