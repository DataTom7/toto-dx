/**
 * Alert Component
 * Unified alert component for the entire Toto ecosystem
 */

import React from 'react';
import { cn } from '../utils/cn';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Alert variant */
  variant?: 'default' | 'destructive' | 'warning' | 'success' | 'info';
  /** Alert size */
  size?: 'sm' | 'md' | 'lg';
  /** Dismissible alert */
  dismissible?: boolean;
  /** Callback when alert is dismissed */
  onDismiss?: () => void;
}

export interface AlertTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export interface AlertDescriptionProps extends React.HTMLAttributes<HTMLDivElement> {}

// Alert Root
export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
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
        role="alert"
        className={cn(
          // Base styles
          'relative w-full rounded-lg border p-4 transition-all duration-200',
          
          // Variants
          {
            'bg-background text-foreground border-border': variant === 'default',
            'border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive': variant === 'destructive',
            'border-yellow-500/50 text-yellow-800 bg-yellow-50 dark:border-yellow-500 dark:text-yellow-200 dark:bg-yellow-900/20 [&>svg]:text-yellow-600': variant === 'warning',
            'border-green-500/50 text-green-800 bg-green-50 dark:border-green-500 dark:text-green-200 dark:bg-green-900/20 [&>svg]:text-green-600': variant === 'success',
            'border-blue-500/50 text-blue-800 bg-blue-50 dark:border-blue-500 dark:text-blue-200 dark:bg-blue-900/20 [&>svg]:text-blue-600': variant === 'info',
          },
          
          // Sizes
          {
            'p-3 text-sm': size === 'sm',
            'p-4 text-sm': size === 'md',
            'p-6 text-base': size === 'lg',
          },
          
          className
        )}
        {...props}
      >
        {children}
        {dismissible && (
          <button
            onClick={handleDismiss}
            className="absolute top-2 right-2 inline-flex items-center justify-center rounded-full hover:bg-black/10 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-colors duration-150"
            aria-label="Dismiss alert"
          >
            <svg
              className="h-4 w-4"
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

Alert.displayName = 'Alert';

// Alert Title
export const AlertTitle = React.forwardRef<HTMLHeadingElement, AlertTitleProps>(
  ({ className, ...props }, ref) => (
    <h5
      ref={ref}
      className={cn('mb-1 font-medium leading-none tracking-tight', className)}
      {...props}
    />
  )
);

AlertTitle.displayName = 'AlertTitle';

// Alert Description
export const AlertDescription = React.forwardRef<HTMLDivElement, AlertDescriptionProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('text-sm [&_p]:leading-relaxed', className)}
      {...props}
    />
  )
);

AlertDescription.displayName = 'AlertDescription';

export default Alert;
