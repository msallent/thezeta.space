import { m, type Variants } from 'motion/react';
import { ClientsMarquee } from './Marquee';

const containerVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export function Clients() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto px-6 md:px-8">
        <m.h2
          id="clientes"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ amount: 0.8, once: true }}
          className="-mt-10 pt-10 text-center text-xl/8 font-semibold text-white"
        >
          Clientes que confían en nosotros
        </m.h2>

        <m.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ amount: 0.8, once: true }}
        >
          <ClientsMarquee />
        </m.div>
      </div>
    </section>
  );
}
