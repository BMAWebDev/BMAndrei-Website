import type { Metadata } from 'next';
import { K2D } from 'next/font/google';
import { dir } from 'i18next';
import i18nConfig from '@/i18n-config.json';

const inter = K2D({ subsets: ['latin'], weight: '300' });

export const metadata: Metadata = {
  title: 'BMAndrei',
  description:
    'PFA Bărdiță Mihai Andrei - your friendly neighbourhood software developer.',
};

export const generateStaticParams = () => {
  return i18nConfig.locales.map((locale) => ({ lang: locale }));
};

export default function RootLayout({ params: { lang }, children }: any) {
  return (
    <html lang={lang} dir={dir(lang)}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
