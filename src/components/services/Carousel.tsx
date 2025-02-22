'use client';

import { useState } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { services } from '@/constants/services';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export function ServicesCarousel() {
  const [isHovering, setIsHovering] = useState(false);

  const onMouseEnter = () => setIsHovering(true);
  const onMouseLeave = () => setIsHovering(false);

  return (
    <Carousel
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      plugins={[Autoplay({ active: !isHovering })]}
    >
      <CarouselContent>
        {services.map(({ Icon, description, title }) => (
          <CarouselItem key={title} className="flex basis-full flex-col md:basis-1/2 lg:basis-1/3">
            <p className="flex items-center gap-x-3 text-base/7 font-semibold">
              <Icon aria-hidden="true" className="size-6 flex-none text-secondary" />
              {title}
            </p>

            <div className="mt-4 flex flex-col text-lg/7 text-tertiary">
              <p className="font-secondary">{description}</p>

              <a href="#contacto" className="mt-6 w-fit text-sm/6 font-semibold text-white">
                Más info <span aria-hidden="true">→</span>
              </a>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="mt-4 flex items-center justify-center gap-8">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
}
