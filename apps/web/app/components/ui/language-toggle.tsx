// apps/web/src/components/language-toggle.tsx
'use client';

import { Button } from '@/components/button';
import { Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
    >
      <Globe className="h-5 w-5" />
      <span className="sr-only">Toggle language</span>
      <span className="ml-2 text-xs font-medium">
        {language.toUpperCase()}
      </span>
    </Button>
  );
} 