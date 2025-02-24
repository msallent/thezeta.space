'use client';

import { zodResolver } from '@hookform/resolvers/zod';
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
  const contactForm = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    },
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
