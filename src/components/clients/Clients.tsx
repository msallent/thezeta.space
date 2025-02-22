import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import { clients } from '@/constants/clients';

export function Clients() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto px-6 md:px-8">
        <h2 id="clientes" className="-mt-10 pt-10 text-center text-xl/8 font-semibold text-white">
          Clientes que confían en nosotros
        </h2>

        <Marquee speed={100} className="mt-12">
          {clients.map(({ name, logo }) => (
            <div key={name} className="flex h-16 max-w-48 basis-auto items-center pl-16">
              <Image
                alt={name}
                src={logo}
                className="max-h-16 w-auto object-contain brightness-0 invert"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
