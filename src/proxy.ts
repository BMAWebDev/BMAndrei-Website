import { NextRequest, NextResponse } from 'next/server';

const locales = ['en', 'ro'];
const defaultLocale = 'ro';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the pathname already starts with a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) return;

  // Redirect to the default locale
  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip internal paths (_next, api, static files)
    '/((?!_next|api|favicon\\.ico|.*\\..*).*)',
  ],
};
