'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

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
import { Button } from '@/components/ui/button';

const formSchema = z.object({
  name: z.string().min(1, 'Nombre requerido'),
  email: z.string().email('Email invalido').min(1, 'Email requerido'),
  phone: z.string(),
  service: z.string(),
  message: z.string(),
});

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);

    try {
      window.grecaptcha.ready(() => {
        window.grecaptcha
          .execute(`${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`, { action: 'submit' })
          .then((token) => {
            fetch(`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID}`, {
              method: 'POST',
              body: JSON.stringify({
                ...data,
                'g-recaptcha-response': token,
              }),
              headers: {
                'Content-Type': 'application/json',
              },
            });
          });
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative isolate px-6 py-24 sm:py-32 lg:px-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-20 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85% 91%, 64% 86%, 72% 11%, 60.2% 62.4%, 43% 69%, 47% 38%, 45.2% 34.5%, 27% 62%, 3% 13%, 31% 25%, 32% 85%, 51% 34%, 74.1% 44.1%)',
          }}
          className="to-secondary relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>

      <div className="mx-auto max-w-xl lg:max-w-4xl">
        <h2
          id="contacto"
          className="-mt-10 pt-10 text-4xl font-semibold tracking-tight text-balance sm:text-5xl"
        >
          Impulsamos marcas con creatividad y resultados
        </h2>

        <p className="text-tertiary font-secondary mt-2 text-lg/7">
          Listo para empezar? Completá el formulario y te contactamos.
        </p>

        <div className="mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="lg:flex-auto">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <FormField
                  name="name"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre y apellido</FormLabel>
                      <FormControl>
                        <Input type="text" autoComplete="given-name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  name="email"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" autoComplete="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  name="phone"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Telefono</FormLabel>
                      <FormControl>
                        <Input type="tel" autoComplete="tel" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  name="service"
                  control={form.control}
                  render={({ field: { onChange, value, ...rest } }) => (
                    <FormItem>
                      <FormLabel>Pack / Servicio</FormLabel>
                      <Select onValueChange={onChange} defaultValue={value} {...rest}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Packs</SelectLabel>
                            <SelectItem value="Launch Pack">Launch Pack</SelectItem>
                            <SelectItem value="Booster Pack">Booster Pack</SelectItem>
                            <SelectItem value="Premium Pack">Premium Pack</SelectItem>
                          </SelectGroup>
                          <SelectGroup>
                            <SelectLabel>Servicios</SelectLabel>
                            <SelectItem value="Social Media">Social Media & Paid Media</SelectItem>
                            <SelectItem value="Desarrollo Web">Diseño & Desarrollo Web</SelectItem>
                            <SelectItem value="Branding">Identidad & Branding</SelectItem>
                            <SelectItem value="Contenido">Generación de Contenido</SelectItem>
                            <SelectItem value="Asesoramiento">Asesoramiento 1:1</SelectItem>
                          </SelectGroup>
                          <SelectItem value="Otros">Otros</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="sm:col-span-2">
                  <FormField
                    name="message"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Comentarios</FormLabel>
                        <FormControl>
                          <Textarea className="resize-none" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <Button className="mt-10 w-full" type="submit" disabled={isSubmitting}>
                Quiero que me contacten!
              </Button>
            </form>
          </Form>

          <div className="lg:mt-6 lg:w-80 lg:flex-none">
            <blockquote className="text-lg/8 font-semibold">
              <p>En The Zeta Space convertimos tus ideas en experiencias que venden.</p>
              <br />
              <p>Agendá una reunión hoy mismo y descubrí cómo podemos hacer crecer tu marca.</p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
