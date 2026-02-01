'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex-1 flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 text-center px-4">
        <h1 className="text-4xl font-extrabold text-gray-900">
          Welcome to Todo App
        </h1>
        <p className="text-lg text-gray-600">
          Organize your tasks efficiently and stay productive.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link
            href="/auth/login"
            className="px-6 py-3 text-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-50 font-medium"
          >
            Log in
          </Link>
          <Link
            href="/auth/signup"
            className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 font-medium"
          >
            Sign up
          </Link>
        </div>
      </div>
    </main>
  );
}