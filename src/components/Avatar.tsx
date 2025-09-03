/**
 * Avatar Component
 * Unified avatar component for the entire Toto ecosystem
 */

import React from 'react';
import { cn } from '../utils/cn';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Avatar size */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Avatar variant */
  variant?: 'circle' | 'square' | 'rounded';
  /** Image source */
  src?: string;
  /** Alt text for image */
  alt?: string;
  /** Fallback text when no image */
  fallback?: string;
  /** Background color for fallback */
  bgColor?: string;
}

export interface AvatarImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

export interface AvatarFallbackProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Fallback text */
  children: React.ReactNode;
  /** Avatar variant */
  variant?: 'circle' | 'square' | 'rounded';
  /** Background color */
  bgColor?: string;
}

// Avatar Root
export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, size = 'md', variant = 'circle', src, alt, fallback, bgColor, ...props }, ref) => {
    const [imageError, setImageError] = React.useState(false);
    const [imageLoaded, setImageLoaded] = React.useState(false);

    const handleImageError = () => {
      setImageError(true);
    };

    const handleImageLoad = () => {
      setImageLoaded(true);
    };

    // Reset states when src changes
    React.useEffect(() => {
      setImageError(false);
      setImageLoaded(false);
    }, [src]);

    const showFallback = !src || imageError || (src && !imageLoaded);

    return (
      <div
        ref={ref}
        className={cn(
          // Base styles
          'relative flex shrink-0 overflow-hidden bg-muted',
          
          // Variants
          {
            'rounded-full': variant === 'circle',
            'rounded-none': variant === 'square',
            'rounded-md': variant === 'rounded',
          },
          
          // Sizes
          {
            'h-6 w-6': size === 'xs',
            'h-8 w-8': size === 'sm',
            'h-10 w-10': size === 'md',
            'h-12 w-12': size === 'lg',
            'h-16 w-16': size === 'xl',
          },
          
          className
        )}
        {...props}
      >
        {src && !imageError && (
          <AvatarImage
            src={src}
            alt={alt}
            onError={handleImageError}
            onLoad={handleImageLoad}
          />
        )}
        {showFallback && fallback && (
          <AvatarFallback variant={variant} bgColor={bgColor}>
            {fallback}
          </AvatarFallback>
        )}
      </div>
    );
  }
);

Avatar.displayName = 'Avatar';

// Avatar Image
export const AvatarImage = React.forwardRef<HTMLImageElement, AvatarImageProps>(
  ({ className, ...props }, ref) => (
    <img
      ref={ref}
      className={cn('aspect-square h-full w-full object-cover', className)}
      {...props}
    />
  )
);

AvatarImage.displayName = 'AvatarImage';

// Avatar Fallback
export const AvatarFallback = React.forwardRef<HTMLDivElement, AvatarFallbackProps>(
  ({ className, children, variant = 'circle', bgColor, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'flex h-full w-full items-center justify-center text-muted-foreground font-medium',
        
        // Variants
        {
          'rounded-full': variant === 'circle',
          'rounded-none': variant === 'square',
          'rounded-md': variant === 'rounded',
        },
        
        // Background
        bgColor ? '' : 'bg-muted',
        
        className
      )}
      style={bgColor ? { backgroundColor: bgColor } : undefined}
      {...props}
    >
      {children}
    </div>
  )
);

AvatarFallback.displayName = 'AvatarFallback';

export default Avatar;
