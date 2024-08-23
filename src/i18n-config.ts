import { getCookie } from './utils/cookies';

const defaultLanguage = 'ro';
const browserLanguage = window.navigator.language.includes('en')
  ? 'en'
  : defaultLanguage;
const defaultLocale = getCookie('NEXT_LOCALE') || browserLanguage;

const i18nConfig = {
  locales: ['en', 'ro'],
  defaultLocale,
  prefixDefault: false,
};

export default i18nConfig;
