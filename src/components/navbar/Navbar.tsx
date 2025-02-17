import Image from 'next/image';
import logo from '@/assets/images/logo.png';
import { navbarLinks } from '@/constants/navbar';

export function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="flex items-start justify-between p-6 lg:px-8">
        <Image alt="The Zeta Space" src={logo} className="h-24 w-auto" />

        <div className="hidden lg:mt-4 lg:flex lg:gap-x-12">
          {navbarLinks.map(({ title, href }) => (
            <a
              key={title}
              href={href}
              className="hover:text-secondary focus-visible:outline-secondary rounded-md text-sm/6 font-semibold focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              {title}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
