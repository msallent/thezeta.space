'use client';

import { useState } from 'react';
import { CircleX, MenuIcon } from 'lucide-react';
import { m } from 'motion/react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

import logo from '@/assets/images/logo.png';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { motion } from '@/constants/motion';
import { links } from '@/constants/navbar';
import { formatId } from '@/lib/utils';

export function Menu() {
  const router = useRouter();
  const t = useTranslations('navbar');

  const [isOpen, setIsOpen] = useState(false);

  const onLinkClick = (href: string) => {
    setTimeout(() => router.push(href), 500);
    setIsOpen(false);
  };

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen} direction="top">
      <DrawerTrigger aria-label={t('label')}>
        <MenuIcon className="size-8 md:size-10 lg:hidden" />
      </DrawerTrigger>

      <DrawerContent>
        <DrawerHeader className="items-center p-8 pb-4">
          <DrawerTitle className="hidden" />
          <DrawerDescription className="hidden" />

          <div className="flex items-center gap-8">
            <Image alt="The Zeta Space" src={logo} className="h-28 w-auto" />

            <ul className="flex flex-col gap-2 md:flex-row md:gap-8">
              {links.map((key, index) => (
                <m.li
                  key={key}
                  onClick={() => onLinkClick(`#${formatId(t(key))}`)}
                  custom={index}
                  className="text-lg/7 font-semibold text-tertiary"
                  {...motion.delay}
                >
                  <span className="md:hidden" aria-hidden="true">
                    →
                  </span>{' '}
                  {t(key)}
                </m.li>
              ))}
            </ul>
          </div>
        </DrawerHeader>

        <DrawerFooter className="items-center">
          <DrawerClose>
            <CircleX className="text-tertiary" />
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
