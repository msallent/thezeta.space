import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Script from 'next/script';

import { Toaster } from '@/components/ui/sonner';
import { cn } from '@/lib/utils';

import './globals.css';

const nourdBold = localFont({
  src: '../assets/fonts/nourd.woff2',
  variable: '--font-nourd',
  display: 'swap',
});

const glacialRegular = localFont({
  src: '../assets/fonts/glacial.woff2',
  variable: '--font-glacial',
  display: 'swap',
});

const title = 'Potenciá tu negocio con The Zeta Space | Marketing Digital 🚀';

const description =
  'Impulsamos marcas con estrategias digitales creativas. Social Media, Paid Media, SEO, Branding y Web. Creá, conectá y vendé en el mundo digital.';

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: 'website',
    url: 'https://thezeta.space',
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={cn('font-primary antialiased', nourdBold.variable, glacialRegular.variable)}>
        {children}
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
