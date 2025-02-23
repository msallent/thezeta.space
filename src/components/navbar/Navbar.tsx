import Image from 'next/image';

import logo from '@/assets/images/logo.png';
import { Menu } from '@/components';
import { navbarLinks } from '@/constants/navbar';

export function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-between p-6 md:px-8 lg:items-start">
        <Image alt="The Zeta Space" src={logo} className="h-16 w-auto md:h-24" />

        <div className="hidden lg:mt-4 lg:flex lg:gap-x-12">
          {navbarLinks.map(({ title, href }) => (
            <a
              key={title}
              href={href}
              className="rounded-md text-sm/6 font-semibold hover:text-secondary focus-visible:outline-offset-2 focus-visible:outline-secondary"
            >
              {title}
            </a>
          ))}
        </div>

        <div className="lg:hidden">
          <Menu />
        </div>
      </nav>
    </header>
  );
}
