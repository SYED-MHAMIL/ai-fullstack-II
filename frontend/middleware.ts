import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Define protected routes that require authentication
  const protectedRoutes = ['/tasks', '/dashboard'];

  // Check if the current route is protected
  const isProtectedRoute = protectedRoutes.some(route =>
    request.nextUrl.pathname.startsWith(route)
  );

  // For demo purposes, we'll allow access
  // In a real implementation, this would check actual auth status
  // by verifying a token in the request headers

  // For now, just allow all requests to pass through
  // Actual authentication will be handled by the backend
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