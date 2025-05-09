// apps/web/src/components/ui/theme-toggle.tsx
'use client';

import { Button } from '@/components/button';
import { useThemeContext } from '@/contexts/ThemeContext';

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useThemeContext();

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {resolvedTheme === 'dark' ? '🌞' : '🌙'}
    </Button>
  );
}