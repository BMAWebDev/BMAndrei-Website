import { i18nRouter } from 'next-i18n-router';
import { MiddlewareConfig, NextRequest } from 'next/server';
// utils
import { getI18nConfig } from './utils/translations/config';

export const middleware = (request: NextRequest) => {
  return i18nRouter(request, getI18nConfig());
};

export const config: MiddlewareConfig = {
  matcher: '/((?!api|static|.*\\..*|_next).*)',
};
