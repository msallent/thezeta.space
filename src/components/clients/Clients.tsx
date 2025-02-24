import { m } from 'motion/react';

import { motion } from '@/constants/motion';

import { ClientsMarquee } from './Marquee';

export function Clients() {
  return (
    <section className="py-24 sm:py-32">
      <m.div className="mx-auto px-6 md:px-8" {...motion.stagger}>
        <m.h2
          id="clientes"
          className="-mt-10 pt-10 text-center text-xl/8 font-semibold text-white"
          {...motion.child}
        >
          Clientes que confían en nosotros
        </m.h2>

        <m.div {...motion.child}>
          <ClientsMarquee />
        </m.div>
      </m.div>
    </section>
  );
}
