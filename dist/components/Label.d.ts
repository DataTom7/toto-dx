/**
 * Label Component
 * Unified label component for the entire Toto ecosystem
 */
import React from 'react';
export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    /** Label variant */
    variant?: 'default' | 'required' | 'optional';
    /** Label size */
    size?: 'sm' | 'md' | 'lg';
}
export declare const Label: React.ForwardRefExoticComponent<LabelProps & React.RefAttributes<HTMLLabelElement>>;
export default Label;
//# sourceMappingURL=Label.d.ts.map