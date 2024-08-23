'use client';

import { I18nextProvider } from 'react-i18next';
import { createInstance, Resource } from 'i18next';
import { PropsWithChildren } from 'react';
// utils
import initTranslations from '@utils/translations/initTranslations';
import { Dictionary } from 'lodash';

interface TranslationsProviderProps {
  lang: string;
  resources: Resource;
  i18nConfig: Dictionary<any>;
}

const TranslationsProvider: React.FC<
  PropsWithChildren<TranslationsProviderProps>
> = ({ lang, resources, i18nConfig, children }) => {
  const i18n = createInstance();

  initTranslations(lang, i18nConfig, resources, i18n);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

export default TranslationsProvider;
