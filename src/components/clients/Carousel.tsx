'use client';

import Image from 'next/image';
import AutoScroll from 'embla-carousel-auto-scroll';
import { clients } from '@/constants/clients';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

export function ClientsCarousel() {
  return (
    <Carousel className="mt-12" opts={{ watchDrag: false }} plugins={[AutoScroll({ speed: 2 })]}>
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
  );
}
