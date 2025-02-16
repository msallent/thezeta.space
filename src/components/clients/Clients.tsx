'use client';

import AutoScroll from 'embla-carousel-auto-scroll';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { clients } from '@/constants/clients';

export function Clients() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto px-6 lg:px-8">
        <h2 id="clientes" className="-mt-10 pt-10 text-center text-xl/8 font-semibold text-white">
          Clientes que confían en nosotros
        </h2>

        <Carousel opts={{ watchDrag: false }} className="mt-8" plugins={[AutoScroll({ speed: 1 })]}>
          <CarouselContent className="-ml-16 items-center">
            {clients.map(({ name, logo }) => (
              <CarouselItem key={name} className="flex h-16 max-w-48 basis-auto items-center pl-16">
                <Image
                  alt={name}
                  src={logo}
                  className="max-h-16 w-auto object-contain brightness-0 invert"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
