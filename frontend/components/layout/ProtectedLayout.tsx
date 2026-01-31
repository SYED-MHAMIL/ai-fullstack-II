'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

export function ProtectedLayout({ children }: ProtectedLayoutProps) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null); // null = checking

  useEffect(() => {
    // In a real app, this would check the actual auth status
    // For now, we'll simulate authentication check
    const checkAuth = async () => {
      // Simulate API call to check auth status
      await new Promise(resolve => setTimeout(resolve, 300));

      // For demo purposes, assume user is authenticated
      // In a real app, this would check the actual auth status
      setIsAuthenticated(true);
    };

    checkAuth();
  }, []);

  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Checking authentication...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    // Redirect to login if not authenticated
    router.push('/auth/login');
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Redirecting to login...</div>
      </div>
    );
  }

  // If user is authenticated, render the protected content
  return <>{children}</>;
}