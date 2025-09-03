/**
 * Dialog Component
 * Unified dialog component for the entire Toto ecosystem
 */

import React from 'react';
import { cn } from '../utils/cn';

export interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Whether the dialog is open */
  open?: boolean;
  /** Callback when dialog should close */
  onOpenChange?: (open: boolean) => void;
  /** Dialog variant */
  variant?: 'default' | 'centered' | 'fullscreen';
  /** Dialog size */
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export interface DialogContentProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Content variant */
  variant?: 'default' | 'centered' | 'fullscreen';
  /** Content size */
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export interface DialogHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export interface DialogTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export interface DialogDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export interface DialogFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

// Dialog Root
export const Dialog: React.FC<DialogProps> = ({ 
  open = false, 
  onOpenChange, 
  children, 
  className,
  ...props 
}) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [isAnimating, setIsAnimating] = React.useState(false);

  React.useEffect(() => {
    if (open) {
      setIsVisible(true);
      setIsAnimating(true);
      // Prevent body scroll when dialog is open
      document.body.style.overflow = 'hidden';
    } else {
      setIsAnimating(false);
      // Restore body scroll
      document.body.style.overflow = 'unset';
      // Hide after animation completes
      const timer = setTimeout(() => setIsVisible(false), 200);
      return () => clearTimeout(timer);
    }
  }, [open]);

  // Handle escape key
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        onOpenChange?.(false);
      }
    };

    if (open) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [open, onOpenChange]);

  if (!isVisible) return null;

  return (
    <div
      className={cn(
        'fixed inset-0 z-50 flex items-center justify-center',
        className
      )}
      {...props}
    >
      {/* Backdrop */}
      <div 
        className={cn(
          'fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-200',
          isAnimating ? 'opacity-100' : 'opacity-0'
        )}
        onClick={() => onOpenChange?.(false)}
      />
      {children}
    </div>
  );
};

// Dialog Content
export const DialogContent = React.forwardRef<HTMLDivElement, DialogContentProps>(
  ({ className, variant = 'default', size = 'md', children, ...props }, ref) => {
    const [isAnimating, setIsAnimating] = React.useState(false);

    React.useEffect(() => {
      setIsAnimating(true);
    }, []);

    return (
      <div
        ref={ref}
        className={cn(
          'relative bg-background border border-border rounded-lg shadow-lg transition-all duration-200',
          
          // Variants
          {
            'mx-4 my-8': variant === 'default',
            'mx-auto my-auto': variant === 'centered',
            'w-full h-full rounded-none': variant === 'fullscreen',
          },
          
          // Sizes
          {
            'max-w-sm': size === 'sm',
            'max-w-md': size === 'md',
            'max-w-lg': size === 'lg',
            'max-w-xl': size === 'xl',
          },
          
          // Animation
          isAnimating ? 'opacity-100 scale-100' : 'opacity-0 scale-95',
          
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

DialogContent.displayName = 'DialogContent';

// Dialog Header
export const DialogHeader = React.forwardRef<HTMLDivElement, DialogHeaderProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex flex-col space-y-1.5 p-6 pb-4', className)}
      {...props}
    />
  )
);

DialogHeader.displayName = 'DialogHeader';

// Dialog Title
export const DialogTitle = React.forwardRef<HTMLHeadingElement, DialogTitleProps>(
  ({ className, ...props }, ref) => (
    <h2
      ref={ref}
      className={cn('text-lg font-semibold leading-none tracking-tight', className)}
      {...props}
    />
  )
);

DialogTitle.displayName = 'DialogTitle';

// Dialog Description
export const DialogDescription = React.forwardRef<HTMLParagraphElement, DialogDescriptionProps>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn('text-sm text-muted-foreground', className)}
      {...props}
    />
  )
);

DialogDescription.displayName = 'DialogDescription';

// Dialog Footer
export const DialogFooter = React.forwardRef<HTMLDivElement, DialogFooterProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 p-6 pt-4', className)}
      {...props}
    />
  )
);

DialogFooter.displayName = 'DialogFooter';

export default Dialog;