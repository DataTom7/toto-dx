/**
 * Label Component
 * Unified label component for the entire Toto ecosystem
 */

import React from 'react';
import { cn } from '../utils/cn';

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  /** Label variant */
  variant?: 'default' | 'required' | 'optional';
  /** Label size */
  size?: 'sm' | 'md' | 'lg';
}

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, variant = 'default', size = 'md', children, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={cn(
          // Base styles
          'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
          
          // Variants
          {
            'text-foreground': variant === 'default',
            'text-foreground after:content-["*"] after:ml-0.5 after:text-destructive': variant === 'required',
            'text-muted-foreground after:content-["(optional)"] after:ml-0.5 after:text-muted-foreground': variant === 'optional',
          },
          
          // Sizes
          {
            'text-xs': size === 'sm',
            'text-sm': size === 'md',
            'text-base': size === 'lg',
          },
          
          className
        )}
        {...props}
      >
        {children}
      </label>
    );
  }
);

Label.displayName = 'Label';

export default Label;
