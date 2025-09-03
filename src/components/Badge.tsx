/**
 * Badge Component
 * Unified badge component for the entire Toto ecosystem
 */

import React from 'react';
import { cn } from '../utils/cn';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Badge variant */
  variant?: 'default' | 'secondary' | 'destructive' | 'outline' | 'success' | 'warning' | 'info';
  /** Badge size */
  size?: 'sm' | 'md' | 'lg';
  /** Dismissible badge */
  dismissible?: boolean;
  /** Callback when badge is dismissed */
  onDismiss?: () => void;
}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = 'default', size = 'md', dismissible = false, onDismiss, children, ...props }, ref) => {
    const [isDismissed, setIsDismissed] = React.useState(false);

    const handleDismiss = () => {
      setIsDismissed(true);
      setTimeout(() => onDismiss?.(), 200); // Allow animation to complete
    };

    if (isDismissed) {
      return null;
    }

    return (
      <div
        ref={ref}
        className={cn(
          // Base styles
          'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
          
          // Variants
          {
            'border-transparent bg-primary text-primary-foreground hover:bg-primary/80': variant === 'default',
            'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80': variant === 'secondary',
            'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80': variant === 'destructive',
            'text-foreground border-border': variant === 'outline',
            'border-transparent bg-green-500 text-white hover:bg-green-600': variant === 'success',
            'border-transparent bg-yellow-500 text-white hover:bg-yellow-600': variant === 'warning',
            'border-transparent bg-blue-500 text-white hover:bg-blue-600': variant === 'info',
          },
          
          // Sizes
          {
            'px-1.5 py-0.5 text-xs': size === 'sm',
            'px-2.5 py-0.5 text-xs': size === 'md',
            'px-3 py-1 text-sm': size === 'lg',
          },
          
          className
        )}
        {...props}
      >
        {children}
        {dismissible && (
          <button
            onClick={handleDismiss}
            className="ml-1 inline-flex items-center justify-center rounded-full hover:bg-black/10 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-colors duration-150"
            aria-label="Dismiss"
          >
            <svg
              className="h-3 w-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>
    );
  }
);

Badge.displayName = 'Badge';

export default Badge;
