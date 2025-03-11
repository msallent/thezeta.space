'use client';

import { useTransition } from 'react';
import { useLocale } from 'next-intl';

import { Switch } from '@/components/ui/switch';
import { usePathname, useRouter } from '@/i18n/navigation';
import type { Locale } from '@/i18n/routing';

export function LocaleSwitch() {
  const router = useRouter();
  const pathname = usePathname();

  const [isPending, startTransition] = useTransition();

  const locale = useLocale() as Locale;

  const onLocaleChange = () => {
    startTransition(() => {
      router.replace({ pathname }, { locale: locale === 'es' ? 'en' : 'es' });
    });
  };

  return <Switch disabled={isPending} checked={locale === 'es'} onCheckedChange={onLocaleChange} />;
}
