import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  if (!req.nextUrl.pathname.startsWith('/dashboard')) return NextResponse.next()

  const cookie = req.cookies.get('demo-auth')?.value
  if (cookie === '1') return NextResponse.next()

  const url = req.nextUrl.clone()
  url.pathname = '/auth/login'
  url.searchParams.set('from', req.nextUrl.pathname)
  return NextResponse.redirect(url)
}

export const config = {
  matcher: ['/dashboard/:path*'],
}
