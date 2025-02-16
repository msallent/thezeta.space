import Image from 'next/image';
import logo from '@/assets/images/logo.png';
import { navbarLinks } from '@/constants/navbar';

export function Hero() {
  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-start justify-between p-6 lg:px-8">
          <Image alt="The Zeta Space" src={logo} className="h-24 w-auto" />

          <div className="hidden lg:mt-4 lg:flex lg:gap-x-12">
            {navbarLinks.map(({ title, href }) => (
              <a
                key={title}
                href={href}
                className="hover:text-secondary focus-visible:outline-secondary rounded-md text-sm/6 font-semibold focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                {title}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="to-secondary relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>

        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="flex flex-col gap-8 text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance sm:text-7xl">
              The Zeta Space
            </h1>

            <div className="text-tertiary text-lg font-medium text-pretty sm:text-xl/8">
              <p>Crecé, destacate, rompela</p>
              <p>Impulsamos marcas con creatividad y resultados</p>
            </div>

            <div className="flex justify-center">
              <a
                href="#servicios"
                className="bg-tertiary text-primary hover:bg-secondary focus-visible:outline-secondary rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Conocé como lo hacemos
              </a>
            </div>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="to-secondary relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </>
  );
}
