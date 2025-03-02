import { m } from 'motion/react';
import { useTranslations } from 'next-intl';

import { motion } from '@/constants/motion';

import { ClientsMarquee } from './Marquee';

export function Clients() {
  const t = useTranslations('clients');
  const t2 = useTranslations('navbar');

  return (
    <section className="py-24 sm:py-32">
      <m.div className="mx-auto px-6 md:px-8" {...motion.stagger}>
        <m.h2
          id={`${t2('clients').toLowerCase()}`}
          className="-mt-10 pt-10 text-center text-xl/8 font-semibold text-white"
          {...motion.child}
        >
          {t('heading')}
        </m.h2>

        <m.div {...motion.child}>
          <ClientsMarquee />
        </m.div>
      </m.div>
    </section>
  );
}
