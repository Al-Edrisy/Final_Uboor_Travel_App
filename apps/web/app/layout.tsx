// apps/web/app/layout.tsx
import './globals.css';
import { MainLayout } from '@/common/components/layouts/MainLayout';
import { ReactNode } from 'react';
import { AuthProvider } from '@/common/providers/AuthProvider';
import { ThemeProvider } from './common/providers/themeProvider';

export const metadata = {
  title: 'My App',
  description: 'Travel Admin Panel',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <AuthProvider>
            <MainLayout>{children}</MainLayout>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}