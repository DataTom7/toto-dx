/**
 * Separator Component
 * Unified separator component for the entire Toto ecosystem
 */

import React from 'react';
import { cn } from '../utils/cn';

export interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Separator orientation */
  orientation?: 'horizontal' | 'vertical';
  /** Separator variant */
  variant?: 'default' | 'thick' | 'dashed' | 'dotted';
  /** Separator color */
  color?: 'default' | 'muted' | 'border';
}

export const Separator = React.forwardRef<HTMLDivElement, SeparatorProps>(
  ({ className, orientation = 'horizontal', variant = 'default', color = 'default', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          // Base styles
          'shrink-0 bg-border',
          
          // Orientation
          {
            'h-[1px] w-full': orientation === 'horizontal',
            'h-full w-[1px]': orientation === 'vertical',
          },
          
          // Variants
          {
            'bg-border': variant === 'default',
            'h-[2px]': variant === 'thick' && orientation === 'horizontal',
            'w-[2px]': variant === 'thick' && orientation === 'vertical',
            'border-dashed border-t': variant === 'dashed' && orientation === 'horizontal',
            'border-dashed border-l': variant === 'dashed' && orientation === 'vertical',
            'border-dotted border-t': variant === 'dotted' && orientation === 'horizontal',
            'border-dotted border-l': variant === 'dotted' && orientation === 'vertical',
          },
          
          // Colors
          {
            'bg-border': color === 'default' || color === 'border',
            'bg-muted': color === 'muted',
          },
          
          className
        )}
        {...props}
      />
    );
  }
);

Separator.displayName = 'Separator';

export default Separator;
