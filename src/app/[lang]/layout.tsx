import type { Metadata } from 'next';
import { K2D } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
// translations
import i18nConfig from '@/i18n-config';
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
  title: 'BMAWebDev - Your friendly neighbourhood developer',
  description:
    'Home page - Bărdiță Mihai-Andrei Persoană Fizică Autorizată (Authorized Person) - your friendly neighbourhood software developer, helping people with their software needs. Welcome to my webpage!',
  keywords: [
    'software developer',
    'web developer',
    'software engineer',
    'developer',
    'react',
    'javascript',
    'typescript',
    'node',
    'Andrei Bardita',
    'PFA',
    'Andrei Bardita PFA',
    'BARDITA MIHAI-ANDREI PERSOANA FIZICA AUTORIZATA',
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
        <head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#111530" />
          <meta name="msapplication-TileColor" content="#111530" />
          <meta name="theme-color" content="#111530" />
        </head>

        <body className={inter.className}>
          <Layout>{children}</Layout>

          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </TranslationsProvider>
  );
};

export default RootLayout;
