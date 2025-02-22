'use client';

import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import { clients } from '@/constants/clients';

export function ClientsMarquee() {
  return (
    <Marquee speed={100} className="mt-12">
      {clients.map(({ name, logo }) => (
        <Image
          key={name}
          alt={name}
          src={logo}
          className="max-h-16 w-auto max-w-48 px-8 brightness-0 invert"
        />
      ))}
    </Marquee>
  );
}
