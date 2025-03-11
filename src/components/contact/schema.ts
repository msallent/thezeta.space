import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(1),
  email: z.string().email().min(1),
  phone: z.string(),
  service: z.string(),
  message: z.string(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
