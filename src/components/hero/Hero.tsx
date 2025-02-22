import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative isolate px-6 pt-14 md:px-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="to-secondary relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] opacity-70 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] lg:opacity-40"
        />
      </div>

      <div className="mx-auto max-w-2xl pb-32 pt-36 sm:py-48 lg:py-56">
        <div className="flex flex-col gap-8 text-center">
          <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">The Zeta Space</h1>

          <div className="text-tertiary text-pretty text-lg/7 font-medium sm:text-xl/8">
            <p>Crecé, destacate, rompela</p>
            <p>Impulsamos marcas con creatividad y resultados</p>
          </div>

          <div className="flex justify-center">
            <Button asChild>
              <a href="#servicios">Conocé como lo hacemos</a>
            </Button>
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
          className="to-secondary relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] opacity-70 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem] lg:opacity-40"
        />
      </div>
    </section>
  );
}
