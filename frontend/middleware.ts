import { betterAuth } from 'better-auth/next-js';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Initialize Better Auth middleware
export const auth = betterAuth();

export function middleware(request: NextRequest) {
  // Define protected routes that require authentication
  const protectedRoutes = ['/tasks', '/dashboard'];

  // Check if the current route is protected
  const isProtectedRoute = protectedRoutes.some(route =>
    request.nextUrl.pathname.startsWith(route)
  );

  // Get the session from the request
  const session = auth.getSession({
    headers: request.headers,
  });

  // If accessing a protected route without a valid session, redirect to login
  if (isProtectedRoute && !session) {
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }

  // Allow the request to continue
  return NextResponse.next();
}

// Define which routes the middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};