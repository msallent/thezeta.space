'use client';

import { useState } from 'react';
import { CircleX, MenuIcon } from 'lucide-react';
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

export function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen} direction="top">
      <DrawerTrigger>
        <MenuIcon />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="hidden" />
          <DrawerDescription className="hidden" />
          {navbarLinks.map(({ title, href }) => (
            <a
              key={title}
              href={href}
              onClick={() => setIsOpen(false)}
              className="text-tertiary text-lg/7 font-semibold"
            >
              {title}
            </a>
          ))}
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
