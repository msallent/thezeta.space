import { m } from 'motion/react';

import { motion } from '@/constants/motion';

import { ServicesCarousel } from './Carousel';

export function Services() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <m.div className="mx-auto max-w-2xl text-center" {...motion.stagger}>
          <m.p
            id="servicios"
            className="-mt-10 pt-10 text-lg/7 font-semibold text-secondary"
            {...motion.child}
          >
            Servicios
          </m.p>

          <m.h2
            className="mt-2 text-balance text-4xl font-semibold tracking-tight sm:text-5xl"
            {...motion.child}
          >
            Potenciá tu negocio
          </m.h2>

          <m.p className="mt-4 font-secondary text-lg/7 text-tertiary" {...motion.child}>
            Cada servicio que ofrecemos es una pieza clave para hacer crecer tu negocio
            <br /> y que tu marca sea inolvidable.
          </m.p>
        </m.div>

        <m.div
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
          {...motion.standalone}
        >
          <ServicesCarousel />
        </m.div>
      </div>
    </section>
  );
}
