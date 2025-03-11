import { m } from 'motion/react';
import { useTranslations } from 'next-intl';

import { motion } from '@/constants/motion';
import { formatId } from '@/lib/utils';

import { ContactForm } from './Form';

export function Contact() {
  const t = useTranslations('contact');
  const t2 = useTranslations('navbar');

  return (
    <section className="relative isolate px-6 py-24 sm:py-32 md:px-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-20 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85% 91%, 64% 86%, 72% 11%, 60.2% 62.4%, 43% 69%, 47% 38%, 45.2% 34.5%, 27% 62%, 3% 13%, 31% 25%, 32% 85%, 51% 34%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-secondary opacity-70 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem] lg:opacity-40"
        />
      </div>

      <div className="mx-auto max-w-xl lg:max-w-4xl">
        <m.div {...motion.stagger}>
          <m.h2
            id={formatId(t2('contact'))}
            className="-mt-10 text-balance pt-10 text-4xl font-semibold tracking-tight sm:text-5xl"
            {...motion.child}
          >
            {t('heading')}
          </m.h2>

          <m.p
            className="mt-2 text-balance font-secondary text-lg/7 text-tertiary"
            {...motion.child}
          >
            {t('subtitle')}
          </m.p>
        </m.div>

        <div className="mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
          <ContactForm />

          <m.aside
            className="flex flex-col gap-7 text-center text-lg/7 font-semibold lg:mt-6 lg:w-80 lg:flex-none lg:text-left"
            {...motion.stagger}
          >
            <m.p {...motion.child}>{t('aside.first')}</m.p>
            <m.p {...motion.child}>{t('aside.second')}</m.p>
          </m.aside>
        </div>
      </div>
    </section>
  );
}
