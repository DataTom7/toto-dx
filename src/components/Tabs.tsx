/**
 * Tabs Component
 * Unified tabs component for the entire Toto ecosystem
 */

import React from 'react';
import { cn } from '../utils/cn';

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

// Tabs Root
export const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  ({ 
    className, 
    defaultValue, 
    value, 
    onValueChange, 
    orientation = 'horizontal',
    variant = 'default',
    children, 
    ...props 
  }, ref) => {
    const [activeTab, setActiveTab] = React.useState(value || defaultValue || '');

    const handleTabChange = (newValue: string) => {
      if (value === undefined) {
        setActiveTab(newValue);
      }
      onValueChange?.(newValue);
    };

    return (
      <div
        ref={ref}
        className={cn(
          'w-full',
          orientation === 'vertical' && 'flex',
          className
        )}
        {...props}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              activeTab: value || activeTab,
              onTabChange: handleTabChange,
              orientation,
              variant,
            } as any);
          }
          return child;
        })}
      </div>
    );
  }
);

Tabs.displayName = 'Tabs';

// Tabs List
export const TabsList = React.forwardRef<HTMLDivElement, TabsListProps>(
  ({ className, variant = 'default', orientation = 'horizontal', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          // Base styles
          'inline-flex items-center justify-center',
          
          // Variants
          {
            'h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground': variant === 'default',
            'h-10 items-center justify-center rounded-full bg-muted p-1 text-muted-foreground': variant === 'pills',
            'h-10 items-center justify-start border-b border-border bg-transparent p-0 text-muted-foreground': variant === 'underline',
          },
          
          // Orientation
          {
            'flex-row': orientation === 'horizontal',
            'flex-col h-auto w-full': orientation === 'vertical',
          },
          
          className
        )}
        {...props}
      />
    );
  }
);

TabsList.displayName = 'TabsList';

// Tabs Trigger
export const TabsTrigger = React.forwardRef<HTMLButtonElement, TabsTriggerProps>(
  ({ 
    className, 
    value, 
    variant = 'default', 
    orientation = 'horizontal', 
    activeTab,
    onTabChange,
    onClick,
    ...props 
  }, ref) => {
    const isActive = activeTab === value;

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      onTabChange?.(value);
      onClick?.(e);
    };

    return (
      <button
        ref={ref}
        className={cn(
          // Base styles
          'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
          
          // Active states
          {
            'bg-background text-foreground shadow-sm': isActive && variant === 'default',
            'bg-background text-foreground shadow-sm rounded-full': isActive && variant === 'pills',
            'bg-transparent text-foreground border-b-2 border-primary rounded-none': isActive && variant === 'underline',
          },
          
          // Inactive states
          {
            'hover:bg-background/50': !isActive && variant === 'default',
            'hover:bg-background/50 rounded-full': !isActive && variant === 'pills',
            'hover:bg-transparent hover:text-foreground rounded-none': !isActive && variant === 'underline',
          },
          
          // Orientation
          {
            'w-full': orientation === 'vertical',
          },
          
          className
        )}
        onClick={handleClick}
        {...props}
      />
    );
  }
);

TabsTrigger.displayName = 'TabsTrigger';

// Tabs Content
export const TabsContent = React.forwardRef<HTMLDivElement, TabsContentProps>(
  ({ className, value, activeTab, children, ...props }, ref) => {
    const isActive = activeTab === value;

    return (
      <div
        ref={ref}
        className={cn(
          'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all duration-200',
          isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none absolute',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

TabsContent.displayName = 'TabsContent';

export default Tabs;