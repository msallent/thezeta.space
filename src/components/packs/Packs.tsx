import { cn } from '@/lib/utils';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { packs } from '@/constants/packs';

export function Packs() {
  return (
    <div className="relative isolate px-6 py-24 sm:py-32 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="mx-auto aspect-1155/678 w-[72.1875rem] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p id="packs" className="text-secondary -mt-10 pt-10 text-lg/7 font-semibold">
            Packs
          </p>
          <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl lg:text-balance">
            Potenciá tu negocio
          </h2>
        </div>

        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {packs.map((pack, index) => (
            <div
              key={index}
              className={cn(
                'bg-primary flex flex-col justify-between rounded-3xl p-8 ring-1 ring-gray-200 xl:p-10',
                index === 0 && 'lg:rounded-r-none',
                index === packs.length - 1 && 'lg:rounded-l-none',
                index === 1 ? 'lg:z-10 lg:rounded-b-none' : 'lg:mt-8',
              )}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3 className="text-secondary text-lg/8 font-semibold">{pack.name}</h3>
                </div>
                <p className="text-tertiary mt-4 text-sm/6">{pack.description}</p>
                <ul role="list" className="text-tertiary mt-8 space-y-3">
                  {pack.features.map((feature) => (
                    <li key={feature} className="font-secondary flex gap-x-3">
                      <CheckCircle2
                        aria-hidden="true"
                        className="h-6 w-5 flex-none text-indigo-600"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Button asChild>
                <a href="#contacto" className="mt-8">
                  Más info
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
