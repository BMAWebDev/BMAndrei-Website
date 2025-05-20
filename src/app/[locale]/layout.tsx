import type { Metadata } from 'next';
import { K2D } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
// constants
import config from '@constants/config';
// components
import Layout from '@components/Layout';
// style
import '@styles/globals.css';
import { notFound } from 'next/navigation';
import { hasLocale } from 'next-intl';
import routing from '@/i18n/routing';
import { getMessages } from 'next-intl/server';

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

const RootLayout = async ({ params, children }: any) => {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  if (!messages) {
    notFound();
  }

  return (
    <html
      lang={locale}
      dir="ltr"
      style={{ backgroundColor: config.colors.DarkPrimary }}
      suppressHydrationWarning
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
        <Layout locale={locale} messages={messages}>
          {children}
        </Layout>

        {process.env.GTAG_ANALYTICS_ID && (
          <GoogleAnalytics gaId={process.env.GTAG_ANALYTICS_ID} />
        )}
      </body>
    </html>
  );
};

export default RootLayout;
