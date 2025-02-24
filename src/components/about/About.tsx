import { m } from 'motion/react';
import { Rocket, Sparkle } from 'lucide-react';

import { motion } from '@/constants/motion';

export function About() {
  return (
    <section className="relative">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 83% 94%, 93% 88%, 80% 93%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 5% 75%, 17.9% 100%, 27.6% 76.8%, 42% 97%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-secondary opacity-70 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] lg:opacity-40"
        />
      </div>

      <div className="px-6 py-24 sm:py-32 md:px-8">
        <m.div className="mx-auto max-w-2xl text-center" {...motion.stagger}>
          <m.p
            id="nosotros"
            className="-mt-10 pt-10 text-lg/7 font-semibold text-secondary"
            {...motion.child}
          >
            Nosotros
          </m.p>

          <m.h2
            className="mt-2 text-balance text-4xl font-semibold tracking-tight lg:text-7xl"
            {...motion.child}
          >
            Bienvenidos a The Zeta Space
          </m.h2>

          <m.p
            className="mt-6 text-balance text-lg/7 font-medium text-tertiary sm:text-xl/8"
            {...motion.child}
          >
            Donde la creatividad de la Generación Z se convierte en estrategias digitales que
            realmente funcionan.
          </m.p>
        </m.div>

        <m.div
          className="mx-auto mt-12 max-w-3xl font-secondary text-lg/7 text-tertiary"
          {...motion.stagger}
        >
          <m.p className="text-center" {...motion.child}>
            Nuestra misión es llevar tu marca al siguiente nivel con soluciones innovadoras y
            personalizadas.
          </m.p>

          <m.div className="mt-8 flex flex-col gap-8 md:flex-row md:gap-4" {...motion.child}>
            <div className="flex gap-4 md:border-r md:border-tertiary-muted md:pr-4">
              <Rocket aria-hidden="true" className="mt-0.5 size-6 shrink-0 text-secondary" />

              <p>
                Diseñamos equipos a medida para cada proyecto, seleccionando a los mejores expertos
                en cada área, que se ajusten a las necesidades específicas de tu negocio.
              </p>
            </div>

            <div className="flex gap-4">
              <Sparkle aria-hidden="true" className="mt-0.5 size-6 shrink-0 text-secondary" />

              <p>
                Creemos en el poder del trabajo en equipo, en la constante búsqueda de resultados
                concretos y en la capacidad de reinventarnos todos los días.
              </p>
            </div>
          </m.div>
        </m.div>
      </div>
    </section>
  );
}
