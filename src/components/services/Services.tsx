'use client';

import { useState } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { services } from '@/constants/services';

export function Services() {
  const [isHovering, setIsHovering] = useState(false);

  const onMouseEnter = () => setIsHovering(true);
  const onMouseLeave = () => setIsHovering(false);

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p id="servicios" className="text-secondary -mt-10 pt-10 text-lg/7 font-semibold">
            Servicios
          </p>
          <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl lg:text-balance">
            Potenciá tu negocio
          </h2>
          <p className="text-tertiary font-secondary mt-4 text-lg/7">
            Cada servicio que ofrecemos es una pieza clave para hacer crecer tu negocio
            <br /> y que tu marca sea inolvidable.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <Carousel
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            plugins={[Autoplay({ active: !isHovering })]}
          >
            <CarouselContent>
              {services.map(({ Icon, description, title }) => (
                <CarouselItem key={title} className="basis-full md:basis-1/3">
                  <div className="flex flex-col">
                    <dt className="flex items-center gap-x-3 text-base/7 font-semibold">
                      <Icon aria-hidden="true" className="text-secondary size-6 flex-none" />
                      {title}
                    </dt>
                    <dd className="text-tertiary mt-4 flex flex-col text-lg/7">
                      {description.map((description, index) => (
                        <p key={index} className="font-secondary flex-auto">
                          {description}
                        </p>
                      ))}

                      <p className="mt-6">
                        <a href="#contacto" className="text-sm/6 font-semibold text-white">
                          Más info <span aria-hidden="true">→</span>
                        </a>
                      </p>
                    </dd>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="mt-4 hidden items-center justify-center gap-8 lg:flex">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
