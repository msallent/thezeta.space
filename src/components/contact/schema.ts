import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(1, 'Nombre requerido'),
  email: z.string().email('Email invalido').min(1, 'Email requerido'),
  phone: z.string(),
  service: z.string(),
  message: z.string(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
