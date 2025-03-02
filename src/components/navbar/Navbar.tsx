import { m } from 'motion/react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import logo from '@/assets/images/logo.png';
import { Menu } from '@/components';
import { motion } from '@/constants/motion';
import { links } from '@/constants/navbar';

import { LocaleSwitch } from './LocaleSwitch';

export function Navbar() {
  const t = useTranslations('navbar');

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-between p-6 md:px-8 lg:items-start">
        <Image priority src={logo} alt="The Zeta Space" className="h-16 w-auto md:h-24" />

        <div className="hidden lg:mt-4 lg:flex lg:items-center lg:gap-x-12">
          <m.div className="flex" custom={0} {...motion.delay}>
            <LocaleSwitch />
          </m.div>

          {links.map((key, index) => (
            <m.a
              key={key}
              href={`#${t(key).toLowerCase()}`}
              custom={index + 1}
              className="rounded-md text-sm/6 font-semibold hover:text-secondary focus-visible:outline-offset-2 focus-visible:outline-secondary"
              {...motion.delay}
            >
              {t(key)}
            </m.a>
          ))}
        </div>

        <div className="flex items-center gap-4 lg:hidden">
          <LocaleSwitch />
          <Menu />
        </div>
      </nav>
    </header>
  );
}
