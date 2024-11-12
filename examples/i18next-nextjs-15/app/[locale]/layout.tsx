import i18nConfig from '@/i18nConfig';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import { dir } from 'i18next';
import { notFound } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({ locale }));
}

export default async function RootLayout(props: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  const { children } = props;

  if (!i18nConfig.locales.includes(locale)) {
    notFound();
  }

  return (
    <html lang={locale} dir={dir(locale)}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
