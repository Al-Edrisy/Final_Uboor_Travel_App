
// apps/web/src/contexts/ThemeContext.tsx
'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { useTheme as useNextTheme } from 'next-themes';

type ThemeContextType = ReturnType<typeof useNextTheme>;

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeContextProvider({ children }: { children: React.ReactNode }) {
  const theme = useNextTheme();

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within ThemeContextProvider');
  }
  return context;
};