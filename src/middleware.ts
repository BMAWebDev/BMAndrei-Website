import { i18nRouter } from 'next-i18n-router';
import { MiddlewareConfig, NextRequest } from 'next/server';
// translations
import i18nConfig from './i18n-config';

export const middleware = (request: NextRequest) => {
  return i18nRouter(request, i18nConfig);
};

export const config: MiddlewareConfig = {
  matcher: '/((?!api|static|.*\\..*|_next).*)',
};
