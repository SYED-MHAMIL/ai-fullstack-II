'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">Todo App</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/auth/login" className="text-indigo-600 hover:text-indigo-900">
                Log in
              </Link>
              <Link href="/auth/signup" className="ml-4 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Welcome to the Todo App
            </h2>
            <p className="mt-2 text-gray-600">
              Please sign in to manage your tasks.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}