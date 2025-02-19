import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Script from 'next/script';
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

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn('font-primary antialiased', nourdBold.variable, glacialRegular.variable)}>
        {children}
        <Script
          async
          defer
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
        />
      </body>
    </html>
  );
}
