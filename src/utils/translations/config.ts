import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies';

export const getI18nConfig = (
  headers?: Headers,
  cookies?: ReadonlyRequestCookies,
) => {
  const defaultLanguage = 'ro';
  let defaultLocale = defaultLanguage;

  if (headers) {
    const browserLanguage = headers
      .get('accept-language')
      ?.split(',')[0]
      .includes('en')
      ? 'en'
      : '';

    defaultLocale = browserLanguage;
  }

  if (cookies) {
    const selectedLanguage = cookies.get('NEXT_LOCALE')?.value;

    if (selectedLanguage) {
      defaultLocale = selectedLanguage;
    }
  }

  return {
    locales: ['en', 'ro'],
    defaultLocale,
    prefixDefault: false,
  };
};
