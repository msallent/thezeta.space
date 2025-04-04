import { getRequestConfig } from 'next-intl/server';

import { routing, type Locale } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await (requestLocale as Promise<Locale | undefined>);

  if (!locale || !routing.locales.includes(locale)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (
      await (locale === 'es' ? import('./locales/es.json') : import(`./locales/${locale}.json`))
    ).default,
  };
});
