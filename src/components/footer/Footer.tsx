import type { SVGProps } from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const social = [
  {
    name: 'Facebook',
    href: '#',
    icon: (props: SVGProps<SVGSVGElement>) => <Facebook {...props} />,
  },
  {
    name: 'Instagram',
    href: '#',
    icon: (props: SVGProps<SVGSVGElement>) => <Instagram {...props} />,
  },
  {
    name: 'LinkedIn',
    href: '#',
    icon: (props: SVGProps<SVGSVGElement>) => <Linkedin {...props} />,
  },
];

export function Footer() {
  return (
    <footer className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
      <div className="flex justify-center gap-x-10">
        {social.map((item) => (
          <a key={item.name} href={item.href} className="text-tertiary hover:text-secondary">
            <span className="sr-only">{item.name}</span>
            <item.icon aria-hidden="true" className="size-6" />
          </a>
        ))}
      </div>
      <p className="text-tertiary mt-10 text-center text-sm/6">&copy; 2025 The Zeta Space</p>
    </footer>
  );
}
