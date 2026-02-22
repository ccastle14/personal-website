import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { hostname, pathname } = request.nextUrl;

  // route requests coming from the fun subdomain to the special page
  if (hostname === 'fun.colincassell.com') {
    const url = request.nextUrl.clone();
    url.pathname = '/chillin-out';
    return NextResponse.rewrite(url);
  }

  // deny access to the chillin page when not on the special host
  if (pathname === '/chillin-out') {
    return NextResponse.rewrite(new URL('/404', request.url));
  }

  // otherwise continue normally
  return NextResponse.next();
}

// match all paths so the middleware sees every request
export const config = {
  matcher: '/:path*',
};
