'use client';

import { useState } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { useTranslations } from 'next-intl';
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
  const t = useTranslations('services.carousel');
  const t2 = useTranslations('navbar');

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
        {services.map(({ key, Icon }) => (
          <CarouselItem key={key} className="flex basis-full flex-col md:basis-1/2 lg:basis-1/3">
            <p className="flex items-center gap-x-3 text-base/7 font-semibold">
              <Icon aria-hidden="true" className="size-6 flex-none text-secondary" />
              {t(`items.${key}.title`)}
            </p>

            <div className="mt-4 flex flex-col text-lg/7 text-tertiary">
              <p className="font-secondary">{t(`items.${key}.description`)}</p>

              <a
                href={`#${t2('contact').toLowerCase()}`}
                onClick={() => setValue('service', t(`items.${key}.id`))}
                className="mt-6 w-fit text-sm/6 font-semibold text-white hover:text-secondary focus-visible:outline-offset-2 focus-visible:outline-secondary"
              >
                {t('cta')} <span aria-hidden="true">→</span>
              </a>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="mt-4 flex items-center justify-center gap-8">
        <CarouselPrevious label={t('previous')} />
        <CarouselNext label={t('next')} />
      </div>
    </Carousel>
  );
}
