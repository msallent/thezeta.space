'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { FormProvider, useForm } from 'react-hook-form';

import {
  About,
  Clients,
  Contact,
  Footer,
  Hero,
  Navbar,
  Packs,
  Services,
  WhatsApp,
} from '@/components';
import { contactFormSchema, type ContactFormData } from '@/components/contact/schema';

export default function Home() {
  const t = useTranslations('contact.form.errors');

  const contactForm = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema, {
      errorMap: (error, ctx) => {
        if (error.code === 'too_small' && error.path[0] === 'name') {
          return { message: t('name-required') };
        }

        if (error.code === 'invalid_string' && error.path[0] === 'email') {
          return { message: t('email-invalid') };
        }

        return { message: ctx.defaultError };
      },
    }),
    defaultValues: { name: '', email: '', phone: '', service: '', message: '' },
  });

  return (
    <div className="relative">
      <Navbar />

      <main>
        <FormProvider {...contactForm}>
          <Hero />
          <Services />
          <About />
          <Packs />
          <Clients />
          <Contact />
        </FormProvider>
      </main>

      <Footer />
      <WhatsApp />
    </div>
  );
}
