import { Rocket, Sparkle } from 'lucide-react';

export function About() {
  return (
    <section className="relative">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 83% 94%, 93% 88%, 80% 93%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 5% 75%, 17.9% 100%, 27.6% 76.8%, 42% 97%, 74.1% 44.1%)',
          }}
          className="to-secondary relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] opacity-70 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] lg:opacity-40"
        />
      </div>

      <div className="px-6 py-24 sm:py-32 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p id="nosotros" className="text-secondary -mt-10 pt-10 text-lg/7 font-semibold">
            Nosotros
          </p>

          <h2 className="mt-2 text-4xl font-semibold tracking-tight text-balance lg:text-7xl">
            Bienvenidos a The Zeta Space
          </h2>

          <p className="text-tertiary mt-6 text-lg/7 font-medium text-balance sm:text-xl/8">
            Donde la creatividad de la Generación Z se convierte en estrategias digitales que
            realmente funcionan.
          </p>
        </div>

        <div className="text-tertiary font-secondary mx-auto mt-12 max-w-3xl text-lg/7">
          <p className="text-center">
            Nuestra misión es llevar tu marca al siguiente nivel con soluciones innovadoras y
            personalizadas.
          </p>

          <div className="mt-8 flex flex-col gap-8 md:flex-row md:gap-4">
            <div className="md:border-tertiary/40 flex gap-4 md:border-r md:pr-4">
              <Rocket aria-hidden="true" className="text-secondary mt-0.5 size-6 shrink-0" />

              <p>
                Diseñamos equipos a medida para cada proyecto, seleccionando a los mejores expertos
                en cada área, que se ajusten a las necesidades específicas de tu negocio.
              </p>
            </div>

            <div className="flex gap-4">
              <Sparkle aria-hidden="true" className="text-secondary mt-0.5 size-6 shrink-0" />

              <p>
                Creemos en el poder del trabajo en equipo, en la constante búsqueda de resultados
                concretos y en la capacidad de reinventarnos todos los días.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
