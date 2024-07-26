import type { Metadata } from 'next';
import { K2D } from 'next/font/google';
// translations
import i18nConfig from '@/i18n-config.json';
// constants
import config from '@constants/config';
// utils
import initTranslations from '@utils/translations/initTranslations';
// components
import Layout from '@components/Layout';
import { TranslationsProvider } from '@components/translations';
// style
import '@styles/globals.css';

const inter = K2D({ subsets: ['latin'], weight: '300' });

export const metadata: Metadata = {
  title: 'Home | BMAWebDev - Your friendly neighbourhood developer',
  description:
    'Bărdiță Mihai-Andrei Persoana Fizica Autorizata (Authorized Person) - your friendly neighbourhood software developer, helping people with their software needs.',
  keywords: [
    'software developer',
    'web developer',
    'software engineer',
    'developer',
    'react',
    'javascript',
    'typescript',
    'node',
  ],
};

export const generateStaticParams = () => {
  return i18nConfig.locales.map((locale) => ({ lang: locale }));
};

const RootLayout = async ({ params: { lang }, children }: any) => {
  const { resources } = await initTranslations(lang);

  return (
    <TranslationsProvider resources={resources} lang={lang}>
      <html
        lang={lang}
        dir="ltr"
        style={{ backgroundColor: config.colors.DarkPrimary }}
      >
        <body className={inter.className}>
          <Layout>{children}</Layout>
        </body>
      </html>
    </TranslationsProvider>
  );
};

export default RootLayout;
