'use client';

import { I18nextProvider } from 'react-i18next';
import { createInstance, Resource } from 'i18next';
import { PropsWithChildren } from 'react';
// utils
import initTranslations from '@utils/translations/initTranslations';

interface TranslationsProviderProps {
  lang: string;
  resources: Resource;
}

const TranslationsProvider: React.FC<
  PropsWithChildren<TranslationsProviderProps>
> = ({ lang, resources, children }) => {
  const i18n = createInstance();

  initTranslations(lang, resources, i18n);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

export default TranslationsProvider;
