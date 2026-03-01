'use client';

import { createContext, useCallback, useContext, type ReactNode } from 'react';
import en, { type TranslationKey } from './en';
import ro from './ro';

export type Locale = 'en' | 'ro';

const dictionaries: Record<Locale, Record<TranslationKey, string>> = { en, ro };

interface I18nContextValue {
  locale: Locale;
  t: (key: TranslationKey) => string;
}

interface I18nProviderProps {
  locale: Locale;
  children: ReactNode;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ locale, children }: I18nProviderProps) {
  const t = useCallback(
    (key: TranslationKey): string => {
      return dictionaries[locale][key] ?? key;
    },
    [locale],
  );

  return (
    <I18nContext.Provider value={{ locale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useTranslation(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error('useTranslation must be used within an I18nProvider');
  }
  return ctx;
}
