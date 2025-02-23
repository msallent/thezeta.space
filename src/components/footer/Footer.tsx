import { m, type Variants } from 'motion/react';

import { links } from '@/constants/footer';

const linkVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: (index) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: index * 0.05,
      duration: 0.5,
    },
  }),
};

export function Footer() {
  return (
    <footer className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
      <div className="flex justify-center gap-x-10">
        {links.map(({ name, href, Icon }, index) => (
          <m.a
            key={name}
            href={href}
            custom={index}
            variants={linkVariants}
            initial="hidden"
            whileInView="visible"
            className="text-tertiary hover:text-secondary focus-visible:outline-offset-2 focus-visible:outline-secondary"
          >
            <span className="sr-only">{name}</span>
            <Icon aria-hidden="true" className="size-6" />
          </m.a>
        ))}
      </div>

      <m.p
        custom={links.length}
        variants={linkVariants}
        initial="hidden"
        whileInView="visible"
        className="mt-10 text-center text-sm/6 text-tertiary"
      >
        &copy; 2025 The Zeta Space
      </m.p>
    </footer>
  );
}
