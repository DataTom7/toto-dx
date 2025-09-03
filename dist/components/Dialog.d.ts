/**
 * Dialog Component
 * Unified dialog component for the entire Toto ecosystem
 */
import React from 'react';
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
export interface DialogHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
}
export interface DialogTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
}
export interface DialogDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
}
export interface DialogFooterProps extends React.HTMLAttributes<HTMLDivElement> {
}
export declare const Dialog: React.FC<DialogProps>;
export declare const DialogContent: React.ForwardRefExoticComponent<DialogContentProps & React.RefAttributes<HTMLDivElement>>;
export declare const DialogHeader: React.ForwardRefExoticComponent<DialogHeaderProps & React.RefAttributes<HTMLDivElement>>;
export declare const DialogTitle: React.ForwardRefExoticComponent<DialogTitleProps & React.RefAttributes<HTMLHeadingElement>>;
export declare const DialogDescription: React.ForwardRefExoticComponent<DialogDescriptionProps & React.RefAttributes<HTMLParagraphElement>>;
export declare const DialogFooter: React.ForwardRefExoticComponent<DialogFooterProps & React.RefAttributes<HTMLDivElement>>;
export default Dialog;
//# sourceMappingURL=Dialog.d.ts.map