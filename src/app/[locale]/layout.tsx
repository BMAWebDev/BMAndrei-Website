/* eslint-disable @next/next/no-page-custom-font */
import { Slide, ToastContainer } from 'react-toastify';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { I18nProvider, locales, type Locale } from '@i18n/index';
import '../globals.css';

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'BMA WebDev - Crafting Digital Experience',
  description:
    'I build high-performance websites and digital experiences that drive growth, innovation, and user engagement.',
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  const safeLocale: Locale = locale === 'en' ? 'en' : 'ro';

  return (
    <html className="dark" lang={safeLocale}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.className} bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 flex flex-col w-full items-center`}
      >
        <I18nProvider locale={safeLocale}>{children}</I18nProvider>

        <ToastContainer
          position="top-center"
          transition={Slide}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </body>
    </html>
  );
}
