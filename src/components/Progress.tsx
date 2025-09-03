/**
 * Progress Component
 * Unified progress component for the entire Toto ecosystem
 */

import React from 'react';
import { cn } from '../utils/cn';

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Progress value (0-100) */
  value?: number;
  /** Progress variant */
  variant?: 'default' | 'success' | 'warning' | 'destructive';
  /** Progress size */
  size?: 'sm' | 'md' | 'lg';
  /** Show percentage text */
  showValue?: boolean;
  /** Custom label */
  label?: string;
  /** Indeterminate state */
  indeterminate?: boolean;
}

export const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ 
    className, 
    value = 0, 
    variant = 'default', 
    size = 'md', 
    showValue = false,
    label,
    indeterminate = false,
    ...props 
  }, ref) => {
    const clampedValue = Math.min(Math.max(value, 0), 100);

    return (
      <div className={cn('w-full', className)} {...props}>
        {(label || showValue) && (
          <div className="flex justify-between items-center mb-2">
            {label && (
              <span className="text-sm font-medium text-foreground">
                {label}
              </span>
            )}
            {showValue && !indeterminate && (
              <span className="text-sm text-muted-foreground">
                {Math.round(clampedValue)}%
              </span>
            )}
          </div>
        )}
        
        <div
          ref={ref}
          className={cn(
            // Base styles
            'relative h-2 w-full overflow-hidden rounded-full bg-secondary',
            
            // Sizes
            {
              'h-1': size === 'sm',
              'h-2': size === 'md',
              'h-3': size === 'lg',
            }
          )}
        >
          <div
            className={cn(
              // Base styles
              'h-full flex-1 transition-all duration-300 ease-in-out',
              
              // Variants
              {
                'bg-primary': variant === 'default' && !indeterminate,
                'bg-green-500': variant === 'success' && !indeterminate,
                'bg-yellow-500': variant === 'warning' && !indeterminate,
                'bg-destructive': variant === 'destructive' && !indeterminate,
              },
              
              // Indeterminate animation
              indeterminate && 'bg-primary animate-pulse'
            )}
            style={{
              width: indeterminate ? '100%' : `${clampedValue}%`,
              transform: indeterminate ? 'translateX(-100%)' : 'translateX(0)',
              animation: indeterminate ? 'progress-indeterminate 1.5s ease-in-out infinite' : undefined,
            }}
          />
        </div>
      </div>
    );
  }
);

Progress.displayName = 'Progress';

export default Progress;
