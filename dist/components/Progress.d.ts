/**
 * Progress Component
 * Unified progress component for the entire Toto ecosystem
 */
import React from 'react';
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
export declare const Progress: React.ForwardRefExoticComponent<ProgressProps & React.RefAttributes<HTMLDivElement>>;
export default Progress;
//# sourceMappingURL=Progress.d.ts.map