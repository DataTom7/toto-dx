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
  /** Alt text for accessibility */
  alt?: string;
}

export const TotoLogo: React.FC<TotoLogoProps> = ({
  size = 48,
  color = '#FDB813',
  className = '',
  alt = 'Toto Logo',
}) => {
  return (
    <span
      className={cn(
        'font-raleway font-extrabold leading-none tracking-[-0.02em] lowercase',
        className
      )}
      style={{
        fontSize: size,
        color: color,
        textShadow: '0 1px 2px rgba(0,0,0,0.12)',
      }}
      aria-label={alt}
    >
      toto
    </span>
  );
};

export default TotoLogo;
