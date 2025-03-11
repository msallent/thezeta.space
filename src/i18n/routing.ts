import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'es'],
  localePrefix: 'as-needed',
  defaultLocale: 'es',
});

export type Locale = (typeof routing.locales)[number];
