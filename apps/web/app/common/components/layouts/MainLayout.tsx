// apps/web/src/common/components/layouts/MainLayout.tsx
'use client';

import { Footer } from './Footer';
import { Navbar } from './Navbar';

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 md:px-8 py-8">
        {children}
      </main>
      <Footer />
    </div>
    
  );
}