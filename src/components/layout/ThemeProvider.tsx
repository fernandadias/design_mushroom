'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type ThemeContextType = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Sempre iniciar com tema escuro conforme solicitado
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    // Aplicar classe 'dark' ao elemento html
    document.documentElement.classList.toggle('dark', isDarkMode);
    
    // Atualizar as cores do tema
    if (isDarkMode) {
      document.documentElement.style.setProperty('--foreground-rgb', '255, 255, 255');
      document.documentElement.style.setProperty('--background-start-rgb', '0, 0, 0');
      document.documentElement.style.setProperty('--background-end-rgb', '0, 0, 0');
    } else {
      document.documentElement.style.setProperty('--foreground-rgb', '0, 0, 0');
      document.documentElement.style.setProperty('--background-start-rgb', '255, 255, 255');
      document.documentElement.style.setProperty('--background-end-rgb', '255, 255, 255');
    }
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
