'use client';

import Link from 'next/link';
import { useSession } from 'better-auth/react';
import { LogoutButton } from '@/components/auth/LogoutButton';

export function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-semibold text-gray-900">
              Todo App
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            {session?.user ? (
              <>
                <span className="text-gray-700 hidden md:inline">Welcome, {session.user.name || session.user.email}</span>
                <Link href="/tasks" className="text-indigo-600 hover:text-indigo-900">
                  My Tasks
                </Link>
                <Link href="/tasks/create" className="text-indigo-600 hover:text-indigo-900">
                  Create Task
                </Link>
                <LogoutButton />
              </>
            ) : (
              <>
                <Link href="/auth/login" className="text-indigo-600 hover:text-indigo-900">
                  Log in
                </Link>
                <Link href="/auth/signup" className="ml-4 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                  Sign up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}