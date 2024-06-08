import { i18nRouter } from 'next-i18n-router';
import i18nConfig from './i18n-config.json';
import { MiddlewareConfig, NextRequest } from 'next/server';

export const middleware = (request: NextRequest) => {
  return i18nRouter(request, i18nConfig);
};

export const config: MiddlewareConfig = {
  matcher: '/((?!api|static|.*\\..*|_next).*)',
};
