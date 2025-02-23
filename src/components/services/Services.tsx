import { m, type Variants } from 'motion/react';

import { ServicesCarousel } from './Carousel';

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      duration: 0.5,
      staggerChildren: 0.05,
    },
  },
};

const childVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export function Services() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <m.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ amount: 0.8, once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <m.p
            id="servicios"
            variants={childVariants}
            className="-mt-10 pt-10 text-lg/7 font-semibold text-secondary"
          >
            Servicios
          </m.p>

          <m.h2
            variants={childVariants}
            className="mt-2 text-balance text-4xl font-semibold tracking-tight sm:text-5xl"
          >
            Potenciá tu negocio
          </m.h2>

          <m.p variants={childVariants} className="mt-4 font-secondary text-lg/7 text-tertiary">
            Cada servicio que ofrecemos es una pieza clave para hacer crecer tu negocio
            <br /> y que tu marca sea inolvidable.
          </m.p>
        </m.div>

        <m.div
          initial="hidden"
          whileInView="visible"
          variants={childVariants}
          viewport={{ amount: 0.5, once: true }}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
        >
          <ServicesCarousel />
        </m.div>
      </div>
    </section>
  );
}
