import { m } from 'motion/react';

import { child } from '@/constants/variants';

import { ClientsMarquee } from './Marquee';

export function Clients() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto px-6 md:px-8">
        <m.h2
          id="clientes"
          variants={child}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.8, once: true }}
          className="-mt-10 pt-10 text-center text-xl/8 font-semibold text-white"
        >
          Clientes que confían en nosotros
        </m.h2>

        <m.div
          variants={child}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.8, once: true }}
        >
          <ClientsMarquee />
        </m.div>
      </div>
    </section>
  );
}
