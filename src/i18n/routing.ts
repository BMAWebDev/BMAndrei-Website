import { defineRouting } from 'next-intl/routing';
// constants
import { LOCALES } from '@constants/i18n';
// models
import { Locale } from '@models/i18n';

// Used when no locale matches
const defaultLocale: Locale = 'ro';

export default defineRouting({
  locales: LOCALES,
  defaultLocale,
  pathnames: {
    '/': '/',
    '/contact': '/contact',
    '/about': {
      en: '/about',
      ro: '/despre-mine',
    },
  },
});
