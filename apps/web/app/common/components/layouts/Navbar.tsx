// apps/web/src/common/components/layouts/Navbar.tsx
'use client';

import Link from 'next/link';
import { Button } from '@/components/button';
import { useAuth } from '@/common/providers/AuthProvider';
import { Plane } from 'lucide-react';

export function Navbar() {
  const { user, logout } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold inline-block font-size">Uboor</span>
        </Link>

        <div className="flex items-center gap-4">
          {user ? (
            <Button variant="outline" onClick={logout}>
              Logout
            </Button>
          ) : (
            <>
              <Button asChild variant="ghost">
                <Link href="/login">Login</Link>
              </Button>
              <Button asChild>
                <Link href="/register">Register</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}