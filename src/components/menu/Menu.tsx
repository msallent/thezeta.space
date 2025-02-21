'use client';

import { useState } from 'react';
import { CircleX, MenuIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { navbarLinks } from '@/constants/navbar';
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
import Image from 'next/image';
import logo from '@/assets/images/logo.png';

export function Menu() {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const onLinkClick = (href: string) => {
    setTimeout(() => router.push(href), 500);
    setIsOpen(false);
  };

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen} direction="top">
      <DrawerTrigger>
        <MenuIcon className="size-8 lg:hidden" />
      </DrawerTrigger>

      <DrawerContent>
        <DrawerHeader className="items-center p-8 pb-4">
          <DrawerTitle className="hidden" />
          <DrawerDescription className="hidden" />

          <div className="flex items-center gap-8">
            <Image alt="The Zeta Space" src={logo} className="h-26 w-auto" />

            <ul className="flex flex-col gap-2">
              {navbarLinks.map(({ title, href }) => (
                <li
                  key={title}
                  onClick={() => onLinkClick(href)}
                  className="text-tertiary text-lg/7 font-semibold"
                >
                  <span aria-hidden="true">→</span> {title}
                </li>
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
