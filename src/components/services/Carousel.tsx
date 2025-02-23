'use client';

import { useState } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { useFormContext } from 'react-hook-form';

import type { ContactFormData } from '@/components/contact/schema';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { services } from '@/constants/services';

export function ServicesCarousel() {
  const { setValue } = useFormContext<ContactFormData>();
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
        {services.map(({ id, title, description, Icon }) => (
          <CarouselItem key={title} className="flex basis-full flex-col md:basis-1/2 lg:basis-1/3">
            <p className="flex items-center gap-x-3 text-base/7 font-semibold">
              <Icon aria-hidden="true" className="size-6 flex-none text-secondary" />
              {title}
            </p>

            <div className="mt-4 flex flex-col text-lg/7 text-tertiary">
              <p className="font-secondary">{description}</p>

              <a
                href="#contacto"
                onClick={() => setValue('service', id)}
                className="mt-6 w-fit text-sm/6 font-semibold text-white hover:text-secondary focus-visible:outline-offset-2 focus-visible:outline-secondary"
              >
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
