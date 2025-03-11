'use client';

import { useState } from 'react';
import { m } from 'motion/react';
import { useTranslations } from 'next-intl';
import { useFormContext } from 'react-hook-form';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { motion } from '@/constants/motion';

import type { ContactFormData } from './schema';

export function ContactForm() {
  const t = useTranslations('contact');

  const form = useFormContext<ContactFormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      window.grecaptcha.ready(() => {
        window.grecaptcha
          .execute(`${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`, { action: 'submit' })
          .then(async (token) => {
            await fetch(`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID}`, {
              method: 'POST',
              body: JSON.stringify({
                ...data,
                subject: 'Cliente potencial form web',
                'g-recaptcha-response': token,
              }),
              headers: {
                'Content-Type': 'application/json',
              },
            });

            form.reset();
            setIsSubmitting(false);
            toast.success(t('success.title'), { description: t('success.description') });
          });
      });
    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
      toast.error(t('error.title'), { description: t('error.description') });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="lg:flex-auto">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <FormField
            name="name"
            control={form.control}
            render={({ field }) => (
              <m.div custom={0} {...motion.delay}>
                <FormItem>
                  <FormLabel>{t('form.name')}</FormLabel>
                  <FormControl>
                    <Input type="text" autoComplete="given-name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </m.div>
            )}
          />

          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <m.div custom={1} {...motion.delay}>
                <FormItem>
                  <FormLabel>{t('form.email')}</FormLabel>
                  <FormControl>
                    <Input type="email" autoComplete="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </m.div>
            )}
          />

          <FormField
            name="phone"
            control={form.control}
            render={({ field }) => (
              <m.div custom={2} {...motion.delay}>
                <FormItem>
                  <FormLabel>{t('form.phone')}</FormLabel>
                  <FormControl>
                    <Input type="tel" autoComplete="tel" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </m.div>
            )}
          />

          <FormField
            name="service"
            control={form.control}
            render={({ field: { onChange, ...rest } }) => (
              <m.div custom={3} {...motion.delay}>
                <FormItem>
                  <FormLabel>{t('form.service.label')}</FormLabel>
                  <Select onValueChange={onChange} {...rest}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>{t('form.service.options.packs.label')}</SelectLabel>
                        <SelectItem value="Launch Pack">
                          {t('form.service.options.packs.launch')}
                        </SelectItem>
                        <SelectItem value="Booster Pack">
                          {t('form.service.options.packs.booster')}
                        </SelectItem>
                        <SelectItem value="Premium Pack">
                          {t('form.service.options.packs.premium')}
                        </SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel>{t('form.service.options.services.label')}</SelectLabel>
                        <SelectItem value="Social Media">
                          {t('form.service.options.services.social-media')}
                        </SelectItem>
                        <SelectItem value="Desarrollo Web">
                          {t('form.service.options.services.web-development')}
                        </SelectItem>
                        <SelectItem value="Branding">
                          {t('form.service.options.services.branding')}
                        </SelectItem>
                        <SelectItem value="Contenido">
                          {t('form.service.options.services.content')}
                        </SelectItem>
                        <SelectItem value="Asesoramiento">
                          {t('form.service.options.services.consulting')}
                        </SelectItem>
                      </SelectGroup>
                      <SelectItem value="Otros">{t('form.service.options.other')}</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              </m.div>
            )}
          />

          <div className="sm:col-span-2">
            <FormField
              name="message"
              control={form.control}
              render={({ field }) => (
                <m.div custom={4} {...motion.delay}>
                  <FormItem>
                    <FormLabel>{t('form.message')}</FormLabel>
                    <FormControl>
                      <Textarea className="resize-none" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </m.div>
              )}
            />
          </div>
        </div>

        <m.div custom={5} {...motion.delay}>
          <Button className="mt-10 w-full" type="submit" disabled={isSubmitting}>
            {t('form.cta')}
          </Button>
        </m.div>
      </form>
    </Form>
  );
}
