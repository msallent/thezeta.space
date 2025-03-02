import { domAnimation, LazyMotion, MotionConfig } from 'motion/react';
import localFont from 'next/font/local';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Script from 'next/script';

import { Toaster } from '@/components/ui/sonner';
import { routing, type Locale } from '@/i18n/routing';
import { cn } from '@/lib/utils';

import '../globals.css';

const nourdBold = localFont({
  src: '../../assets/fonts/nourd.woff2',
  variable: '--font-nourd',
  display: 'swap',
});

const glacialRegular = localFont({
  src: '../../assets/fonts/glacial.woff2',
  variable: '--font-glacial',
  display: 'swap',
});

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
};

export default async function Layout({ children, params }: LayoutProps) {
  const { locale } = await params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <body className={cn('font-primary antialiased', nourdBold.variable, glacialRegular.variable)}>
        <NextIntlClientProvider messages={messages}>
          <LazyMotion features={domAnimation} strict>
            <MotionConfig reducedMotion="user" transition={{ duration: 0.5 }}>
              {children}
            </MotionConfig>
          </LazyMotion>
        </NextIntlClientProvider>

        <Toaster />

        <Script
          async
          defer
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
        />
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Omit<LayoutProps, 'children'>) {
  const { locale } = await params;

  const t = await getTranslations({ locale, namespace: 'metadata' });

  const title = t('title');
  const description = t('description');

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      url: 'https://www.thezeta.space',
    },
  };
}
