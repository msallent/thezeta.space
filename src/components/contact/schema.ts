import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(1, 'Nombre requerido').default(''),
  email: z.string().email('Email invalido').min(1, 'Email requerido').default(''),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
