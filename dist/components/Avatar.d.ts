/**
 * Avatar Component
 * Unified avatar component for the entire Toto ecosystem
 */
import React from 'react';
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
export interface AvatarImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
}
export interface AvatarFallbackProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Fallback text */
    children: React.ReactNode;
    /** Avatar variant */
    variant?: 'circle' | 'square' | 'rounded';
    /** Background color */
    bgColor?: string;
}
export declare const Avatar: React.ForwardRefExoticComponent<AvatarProps & React.RefAttributes<HTMLDivElement>>;
export declare const AvatarImage: React.ForwardRefExoticComponent<AvatarImageProps & React.RefAttributes<HTMLImageElement>>;
export declare const AvatarFallback: React.ForwardRefExoticComponent<AvatarFallbackProps & React.RefAttributes<HTMLDivElement>>;
export default Avatar;
//# sourceMappingURL=Avatar.d.ts.map