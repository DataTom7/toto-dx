/**
 * Switch Component
 * Unified switch component for the entire Toto ecosystem
 */

import React from 'react';
import { cn } from '../utils/cn';

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

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ 
    className, 
    size = 'md', 
    variant = 'default', 
    disabled = false,
    label,
    description,
    id,
    checked,
    defaultChecked,
    ...props 
  }, ref) => {
    const switchId = id || `switch-${Math.random().toString(36).substr(2, 9)}`;
    const [isChecked, setIsChecked] = React.useState(checked ?? defaultChecked ?? false);

    // Update internal state when controlled checked prop changes
    React.useEffect(() => {
      if (checked !== undefined) {
        setIsChecked(checked);
      }
    }, [checked]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (checked === undefined) {
        setIsChecked(e.target.checked);
      }
      props.onChange?.(e);
    };

    return (
      <div className="flex items-center space-x-3">
        <div className="relative">
          <input
            ref={ref}
            type="checkbox"
            id={switchId}
            className="sr-only"
            disabled={disabled}
            checked={checked}
            defaultChecked={defaultChecked}
            onChange={handleChange}
            {...props}
          />
          <label
            htmlFor={switchId}
            className={cn(
              // Base styles
              'relative inline-flex cursor-pointer items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
              
              // Sizes
              {
                'h-4 w-7': size === 'sm',
                'h-5 w-9': size === 'md',
                'h-6 w-11': size === 'lg',
              },
              
              // Base background for all variants
              'bg-input',
              
              // Checked states
              {
                'bg-primary': isChecked && variant === 'default',
                'bg-green-500': isChecked && variant === 'success',
                'bg-yellow-500': isChecked && variant === 'warning',
                'bg-destructive': isChecked && variant === 'destructive',
              },
              
              // Disabled state
              disabled && 'opacity-50 cursor-not-allowed',
              
              className
            )}
          >
            <span
              className={cn(
                // Base styles
                'pointer-events-none block rounded-full bg-background shadow-lg ring-0 transition-all duration-200 ease-in-out',
                
                // Sizes and positions
                {
                  'h-3 w-3 translate-x-0.5': size === 'sm' && !isChecked,
                  'h-3 w-3 translate-x-3': size === 'sm' && isChecked,
                  'h-4 w-4 translate-x-0.5': size === 'md' && !isChecked,
                  'h-4 w-4 translate-x-4': size === 'md' && isChecked,
                  'h-5 w-5 translate-x-0.5': size === 'lg' && !isChecked,
                  'h-5 w-5 translate-x-5': size === 'lg' && isChecked,
                }
              )}
            />
          </label>
        </div>
        
        {(label || description) && (
          <div className="flex flex-col">
            {label && (
              <label
                htmlFor={switchId}
                className={cn(
                  'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
                  disabled && 'opacity-50'
                )}
              >
                {label}
              </label>
            )}
            {description && (
              <p className={cn(
                'text-xs text-muted-foreground mt-1',
                disabled && 'opacity-50'
              )}>
                {description}
              </p>
            )}
          </div>
        )}
      </div>
    );
  }
);

Switch.displayName = 'Switch';

export default Switch;
