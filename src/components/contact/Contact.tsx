import { m, type Variants } from 'motion/react';

import { ContactForm } from './Form';

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

export function Contact() {
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
        <m.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ amount: 0.8, once: true }}
        >
          <m.h2
            id="contacto"
            variants={childVariants}
            className="-mt-10 text-balance pt-10 text-4xl font-semibold tracking-tight sm:text-5xl"
          >
            Impulsamos marcas con creatividad y resultados
          </m.h2>

          <m.p
            variants={childVariants}
            className="mt-2 text-balance font-secondary text-lg/7 text-tertiary"
          >
            Listo para empezar? Completá el formulario y te contactamos.
          </m.p>
        </m.div>

        <div className="mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
          <ContactForm />

          <m.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ amount: 0.8, once: true }}
            className="flex flex-col gap-7 text-center text-lg/7 font-semibold lg:mt-6 lg:w-80 lg:flex-none lg:text-left"
          >
            <m.p variants={childVariants}>
              En The Zeta Space convertimos tus ideas en experiencias que venden.
            </m.p>

            <m.p variants={childVariants}>
              Agendá una reunión hoy mismo y descubrí cómo podemos hacer crecer tu marca.
            </m.p>
          </m.div>
        </div>
      </div>
    </section>
  );
}
