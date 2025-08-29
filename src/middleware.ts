import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // Only apply to admin routes, but allow access to the main admin page
  if (request.nextUrl.pathname.startsWith('/admin') && request.nextUrl.pathname !== '/admin') {
    const token = request.cookies.get('adminToken')?.value || 
                  request.headers.get('authorization')?.replace('Bearer ', '');

    if (!token || token === 'dummy-token') {
      // Invalid or non-admin token - redirect to admin login
      const response = NextResponse.redirect(new URL('/admin', request.url));
      response.cookies.delete('adminToken');
      return response;
    }

    // Valid admin token, continue
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*']
};
