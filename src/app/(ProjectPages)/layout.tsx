import React from 'react';
import { GridBackgroundDemo } from '@/components/ui/BackGrounds/GridBackground';

export default function ProjectLayout({
    children,
}: Readonly<{ 
    children: React.ReactNode 
}>) {
    return (
        <div>

            {children}
        </div>
    );
};
