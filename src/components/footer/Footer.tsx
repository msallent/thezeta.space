import { m } from 'motion/react';

import { links } from '@/constants/footer';
import { motion } from '@/constants/motion';

export function Footer() {
  return (
    <footer className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
      <div className="flex justify-center gap-x-10">
        {links.map(({ name, href, Icon }, index) => (
          <m.a
            key={name}
            href={href}
            custom={index}
            className="text-tertiary hover:text-secondary focus-visible:outline-offset-2 focus-visible:outline-secondary"
            {...motion.delay}
          >
            <span className="sr-only">{name}</span>
            <Icon aria-hidden="true" className="size-6" />
          </m.a>
        ))}
      </div>

      <m.p
        custom={links.length}
        className="mt-10 text-center text-sm/6 text-tertiary"
        {...motion.delay}
      >
        &copy; 2025 The Zeta Space
      </m.p>
    </footer>
  );
}
