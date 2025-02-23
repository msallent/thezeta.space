'use client';

import { useState } from 'react';
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

import type { ContactFormData } from './schema';

export function ContactForm() {
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
            toast.success('Mensaje enviado!', {
              description: 'Nos contactaremos a la brevedad.',
            });
          });
      });
    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
      toast.error('Algo salió mal', {
        description: 'Por favor, intentá de nuevo.',
      });
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
            render={({ field: { onChange, ...rest } }) => (
              <FormItem>
                <FormLabel>Pack / Servicio</FormLabel>
                <Select onValueChange={onChange} {...rest}>
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
  );
}
