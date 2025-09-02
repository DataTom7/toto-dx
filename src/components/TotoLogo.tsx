/**
 * TotoLogo Component
 * Unified logo component for the entire Toto ecosystem
 */

import React from 'react';
import { cn } from '../utils/cn';

export interface TotoLogoProps {
  /** Size of the logo in pixels */
  size?: number;
  /** Color of the logo */
  color?: string;
  /** Additional CSS classes */
  className?: string;
  /** Logo variant */
  variant?: 'default' | 'minimal' | 'text';
  /** Alt text for accessibility */
  alt?: string;
}

export const TotoLogo: React.FC<TotoLogoProps> = ({
  size = 48,
  color = '#FDB813',
  className = '',
  variant = 'default',
  alt = 'Toto Logo',
}) => {
  if (variant === 'text') {
    return (
      <span
        className={cn(
          'font-extrabold tracking-tight',
          className
        )}
        style={{
          fontFamily: 'Raleway, Inter, Lato, Nunito, Arial, sans-serif',
          letterSpacing: '-0.02em',
          fontSize: size,
          fontWeight: 800,
          color: color,
          textTransform: 'lowercase',
          textShadow: '0 1px 3px rgba(0,0,0,0.15)',
        }}
        aria-label={alt}
      >
        toto.
      </span>
    );
  }

  if (variant === 'minimal') {
    return (
      <div
        className={cn('flex items-center justify-center', className)}
        style={{ width: size, height: size }}
        role="img"
        aria-label={alt}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Simple paw print */}
          <circle cx="50" cy="30" r="8" fill={color} />
          <circle cx="35" cy="45" r="8" fill={color} />
          <circle cx="65" cy="45" r="8" fill={color} />
          <circle cx="50" cy="60" r="8" fill={color} />
          <circle cx="35" cy="75" r="8" fill={color} />
          <circle cx="65" cy="75" r="8" fill={color} />
        </svg>
      </div>
    );
  }

  return (
    <div
      className={cn('flex items-center justify-center', className)}
      style={{ width: size, height: size }}
      role="img"
      aria-label={alt}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Paw print design */}
        <circle cx="50" cy="30" r="8" fill={color} />
        <circle cx="35" cy="45" r="8" fill={color} />
        <circle cx="65" cy="45" r="8" fill={color} />
        <circle cx="50" cy="60" r="8" fill={color} />
        <circle cx="35" cy="75" r="8" fill={color} />
        <circle cx="65" cy="75" r="8" fill={color} />
        
        {/* Bone shape */}
        <ellipse cx="50" cy="50" rx="25" ry="8" fill={color} opacity="0.3" />
        <ellipse cx="50" cy="50" rx="15" ry="4" fill={color} opacity="0.5" />
      </svg>
    </div>
  );
};

export default TotoLogo;
