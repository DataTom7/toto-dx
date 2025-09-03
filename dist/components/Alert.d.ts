/**
 * Alert Component
 * Unified alert component for the entire Toto ecosystem
 */
import React from 'react';
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
export interface AlertTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
}
export interface AlertDescriptionProps extends React.HTMLAttributes<HTMLDivElement> {
}
export declare const Alert: React.ForwardRefExoticComponent<AlertProps & React.RefAttributes<HTMLDivElement>>;
export declare const AlertTitle: React.ForwardRefExoticComponent<AlertTitleProps & React.RefAttributes<HTMLHeadingElement>>;
export declare const AlertDescription: React.ForwardRefExoticComponent<AlertDescriptionProps & React.RefAttributes<HTMLDivElement>>;
export default Alert;
//# sourceMappingURL=Alert.d.ts.map