'use client';

import { I18nextProvider } from 'react-i18next';
import initTranslations from './initTranslations';
import { createInstance } from 'i18next';
import { PropsWithChildren } from 'react';

interface TranslationsProviderProps {
  lang: string;
  namespaces: string[];
  resources: string;
}

const TranslationsProvider: React.FC<
  PropsWithChildren<TranslationsProviderProps>
> = ({ lang, namespaces, resources, children }) => {
  const i18n = createInstance();

  initTranslations(lang, namespaces, i18n, resources);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

export default TranslationsProvider;
