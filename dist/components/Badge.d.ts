/**
 * Badge Component
 * Unified badge component for the entire Toto ecosystem
 */
import React from 'react';
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
export declare const Badge: React.ForwardRefExoticComponent<BadgeProps & React.RefAttributes<HTMLDivElement>>;
export default Badge;
//# sourceMappingURL=Badge.d.ts.map