'use server'
import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers';

export function middleware(request: NextRequest) {
  const cleared = request.cookies.get("gameCleared")?.value === "true";
  const gameOvered = request.cookies.get("gameOvered")?.value === "true";  

  request.cookies.delete("gameCleared")
  request.cookies.delete("gameOvered")

  if (!cleared && request.nextUrl.pathname.startsWith("/end")) {
    return NextResponse.redirect(new URL('/redirected', request.url))
  }
  if (!cleared && request.nextUrl.pathname.startsWith("/retry")) {
    return NextResponse.redirect(new URL('/redirected', request.url))
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/end/:path*'],
}

