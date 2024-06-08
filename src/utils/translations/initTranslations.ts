import { createInstance, i18n } from 'i18next';
import { initReactI18next } from 'react-i18next/initReactI18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { Resource } from 'i18next';
// translations
import i18nConfig from '@/i18n-config.json';

const initTranslations = async (
  locale: string,
  resources?: Resource,
  i18nInstance?: i18n,
) => {
  const i18n = i18nInstance || createInstance();
  i18n.use(initReactI18next);

  if (!resources) {
    i18n.use(
      resourcesToBackend(
        (language: string) => import(`@/locales/${language}.json`),
      ),
    );
  }

  await i18n.init({
    lng: locale,
    resources,
    fallbackLng: i18nConfig.defaultLocale,
    supportedLngs: i18nConfig.locales,
    preload: resources ? [] : i18nConfig.locales,
  });

  return {
    i18n,
    resources: i18n.services.resourceStore.data,
    t: i18n.t,
  };
};

export default initTranslations;
