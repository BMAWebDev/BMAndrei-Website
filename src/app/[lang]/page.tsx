import { initTranslations, TranslationsProvider } from '@components/i18n';
import LanguageChanger from '@components/i18n/LanguageChanger';

const pageNamespaces = ['home', 'common'];

const HomePage = async ({ params: { lang } }: any) => {
  const { resources } = await initTranslations(lang, pageNamespaces);

  return (
    <TranslationsProvider
      resources={resources}
      lang={lang}
      namespaces={pageNamespaces}
    >
      <LanguageChanger />
    </TranslationsProvider>
  );
};

export default HomePage;
