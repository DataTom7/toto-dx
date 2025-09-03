/**
 * Separator Component
 * Unified separator component for the entire Toto ecosystem
 */
import React from 'react';
export interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Separator orientation */
    orientation?: 'horizontal' | 'vertical';
    /** Separator variant */
    variant?: 'default' | 'thick' | 'dashed' | 'dotted';
    /** Separator color */
    color?: 'default' | 'muted' | 'border';
}
export declare const Separator: React.ForwardRefExoticComponent<SeparatorProps & React.RefAttributes<HTMLDivElement>>;
export default Separator;
//# sourceMappingURL=Separator.d.ts.map