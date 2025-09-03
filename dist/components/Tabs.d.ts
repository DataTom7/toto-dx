/**
 * Tabs Component
 * Unified tabs component for the entire Toto ecosystem
 */
import React from 'react';
export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Default active tab */
    defaultValue?: string;
    /** Controlled active tab */
    value?: string;
    /** Callback when tab changes */
    onValueChange?: (value: string) => void;
    /** Tabs orientation */
    orientation?: 'horizontal' | 'vertical';
    /** Tabs variant */
    variant?: 'default' | 'pills' | 'underline';
}
export interface TabsListProps extends React.HTMLAttributes<HTMLDivElement> {
    /** List variant */
    variant?: 'default' | 'pills' | 'underline';
    /** List orientation */
    orientation?: 'horizontal' | 'vertical';
}
export interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** Trigger value */
    value: string;
    /** Trigger variant */
    variant?: 'default' | 'pills' | 'underline';
    /** Trigger orientation */
    orientation?: 'horizontal' | 'vertical';
    /** Internal props - don't use directly */
    activeTab?: string;
    onTabChange?: (value: string) => void;
}
export interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Content value */
    value: string;
    /** Internal props - don't use directly */
    activeTab?: string;
}
export declare const Tabs: React.ForwardRefExoticComponent<TabsProps & React.RefAttributes<HTMLDivElement>>;
export declare const TabsList: React.ForwardRefExoticComponent<TabsListProps & React.RefAttributes<HTMLDivElement>>;
export declare const TabsTrigger: React.ForwardRefExoticComponent<TabsTriggerProps & React.RefAttributes<HTMLButtonElement>>;
export declare const TabsContent: React.ForwardRefExoticComponent<TabsContentProps & React.RefAttributes<HTMLDivElement>>;
export default Tabs;
//# sourceMappingURL=Tabs.d.ts.map