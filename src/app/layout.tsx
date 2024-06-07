import type { Metadata } from 'next';
import { K2D } from 'next/font/google';

const inter = K2D({ subsets: ['latin'], weight: '300' });

export const metadata: Metadata = {
  title: 'BMAndrei',
  description:
    'PFA Bărdiță Mihai Andrei - your friendly neighbourhood software developer.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
