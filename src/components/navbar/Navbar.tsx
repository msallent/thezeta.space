import { m } from 'motion/react';
import Image from 'next/image';

import logo from '@/assets/images/logo.png';
import { Menu } from '@/components';
import { links } from '@/constants/navbar';
import { delay } from '@/constants/variants';

export function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-between p-6 md:px-8 lg:items-start">
        <Image priority src={logo} alt="The Zeta Space" className="h-16 w-auto md:h-24" />

        <div className="hidden lg:mt-4 lg:flex lg:gap-x-12">
          {links.map(({ title, href }, index) => (
            <m.a
              key={title}
              href={href}
              custom={index}
              variants={delay}
              initial="hidden"
              animate="visible"
              className="rounded-md text-sm/6 font-semibold hover:text-secondary focus-visible:outline-offset-2 focus-visible:outline-secondary"
            >
              {title}
            </m.a>
          ))}
        </div>

        <div className="lg:hidden">
          <Menu />
        </div>
      </nav>
    </header>
  );
}
