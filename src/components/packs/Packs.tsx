import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { packs } from '@/constants/packs';
import { cn } from '@/lib/utils';

export function Packs() {
  return (
    <section className="relative isolate py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-70 lg:opacity-40"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p id="packs" className="-mt-10 pt-10 text-lg/7 font-semibold text-secondary">
            Packs
          </p>

          <h2 className="mt-2 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            No es magia, es estrategia
          </h2>

          <p className="mt-4 font-secondary text-lg/7 text-tertiary">
            Elegí el pack que mejor se adapte a tu marca!
          </p>
        </div>

        <div className="isolate mx-auto mt-12 grid grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {packs.map((pack, index) => (
            <div
              key={index}
              className={cn(
                'flex flex-col justify-between rounded-3xl border border-tertiary p-8 xl:p-10',
                index === 0 && 'lg:rounded-r-none lg:border-r-0',
                index === packs.length - 1 && 'lg:rounded-l-none lg:border-l-0',
                index === 1 ? 'lg:z-10 lg:rounded-b-none' : 'lg:mt-8',
              )}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3 className="text-lg/7 font-semibold text-secondary">{pack.name}</h3>
                </div>

                <p className="mt-4 text-sm/6 text-tertiary">{pack.description}</p>

                <ul role="list" className="mt-8 space-y-3 text-tertiary">
                  {pack.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3 font-secondary">
                      <CheckCircle
                        aria-hidden="true"
                        className="h-6 w-5 flex-none text-secondary"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Button asChild>
                <a href="#contacto" className="mt-8">
                  Cotizar
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
