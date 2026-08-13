export { I18nProvider, useTranslation } from './I18nProvider';
export type { Locale } from './I18nProvider';
export type { TranslationKey } from './en';

import type { Locale } from './I18nProvider';

export const locales: readonly Locale[] = ['en', 'ro'] as const;
export const defaultLocale: Locale = 'ro';
