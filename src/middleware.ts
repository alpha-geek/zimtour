import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // Only apply to admin routes
  if (request.nextUrl.pathname.startsWith('/admin')) {
    const token = request.cookies.get('adminToken')?.value || 
                  request.headers.get('authorization')?.replace('Bearer ', '');

    if (!token) {
      // Redirect to login if no token
      return NextResponse.redirect(new URL('/admin', request.url));
    }

    try {
      // For now, just check if token exists
      // Full token verification will be done in API routes
      if (!token || token === 'dummy-token') {
        // Invalid or non-admin token
        const response = NextResponse.redirect(new URL('/admin', request.url));
        response.cookies.delete('adminToken');
        return response;
      }

      // Valid admin token, continue
      return NextResponse.next();
    } catch (error) {
      // Invalid token
      const response = NextResponse.redirect(new URL('/admin', request.url));
      response.cookies.delete('adminToken');
      return response;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*']
};
