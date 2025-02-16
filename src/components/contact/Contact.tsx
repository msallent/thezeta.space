'use client';

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
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

const formSchema = z.object({
  name: z.string().min(1, 'Nombre requerido'),
  email: z.string().email('Email invalido').min(1, 'Email requerido'),
  phone: z.string(),
  service: z.string(),
  comments: z.string(),
});

export function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      comments: '',
      email: '',
      name: '',
      phone: '',
      service: '',
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  return (
    <div className="relative isolate px-6 py-24 sm:py-32 lg:px-8">
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

        <p className="text-tertiary mt-2 text-lg/8">
          We help companies and individuals build out their brand guidelines.
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
                      <FormLabel>Servicio</FormLabel>
                      <Select onValueChange={onChange} defaultValue={value} {...rest}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="social-media">Social Media & Paid Media</SelectItem>
                          <SelectItem value="desarrollo-web">Diseño & Desarrollo Web</SelectItem>
                          <SelectItem value="branding">Branding</SelectItem>
                          <SelectItem value="contenido">Generación de contenido</SelectItem>
                          <SelectItem value="asesoramiento">Asesoramiento</SelectItem>
                          <SelectItem value="otros">Otros</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="sm:col-span-2">
                  <FormField
                    name="comments"
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

              <div className="mt-10">
                <button
                  type="submit"
                  className="bg-tertiary text-primary hover:bg-secondary focus-visible:outline-secondary block w-full cursor-pointer rounded-md px-3.5 py-2.5 text-center text-sm font-semibold shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  Quiero que me contacten!
                </button>
              </div>
            </form>
          </Form>

          <div className="lg:mt-6 lg:w-80 lg:flex-none">
            <blockquote className="text-lg/8 font-semibold">
              <p>
                “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas
                culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”
              </p>
            </blockquote>
            <figcaption className="mt-10 flex gap-x-6">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=96&h=96&q=80"
                className="size-12 flex-none rounded-full bg-gray-50"
              />
              <div>
                <div className="text-base font-semibold">Brenna Goyette</div>
                <div className="text-tertiary text-sm/6">CEO of Workcation</div>
              </div>
            </figcaption>
          </div>
        </div>
      </div>
    </div>
  );
}
