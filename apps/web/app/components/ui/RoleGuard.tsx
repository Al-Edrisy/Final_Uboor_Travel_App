'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/common/providers/AuthProvider';
import { LoadingScreen } from '@/components/loading-screen';

type RoleGuardProps = {
  allowedRoles: string[];
  children: React.ReactNode;
  redirectPath?: string;
  showLoader?: boolean;
};

export function RoleGuard({ 
  allowedRoles, 
  children, 
  redirectPath = '/unauthorized',
  showLoader = true
}: RoleGuardProps) {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && user && !allowedRoles.includes(user.role || 'client')) {
      router.push(redirectPath);
    }
  }, [user, isLoading, allowedRoles, router, redirectPath]);

  if (isLoading && showLoader) return <LoadingScreen />;
  if (!user || !allowedRoles.includes(user.role || 'client')) return null;

  return <>{children}</>;
}