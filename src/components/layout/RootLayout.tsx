'use client';

import { ReactNode } from 'react';
import { ThemeProvider } from './ThemeProvider';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-950 text-gray-100">
        {children}
      </div>
    </ThemeProvider>
  );
}
