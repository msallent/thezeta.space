import { MoveRight } from 'lucide-react';

export function About() {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 83% 94%, 93% 88%, 80% 93%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 5% 75%, 17.9% 100%, 27.6% 76.8%, 42% 97%, 74.1% 44.1%)',
          }}
          className="to-secondary relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>

      <div className="px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p id="nosotros" className="text-secondary -mt-10 pt-10 text-lg/7 font-semibold">
            Nosotros
          </p>
          <h2 className="mt-2 text-7xl font-semibold tracking-tight text-pretty lg:text-balance">
            Bienvenidos a The Zeta Space
          </h2>
          <p className="text-tertiary mt-6 text-lg font-medium text-pretty sm:text-xl/8">
            Donde la creatividad de la Generación Z se convierte en estrategias digitales que
            realmente funcionan.
          </p>
        </div>

        <div className="text-tertiary mx-auto mt-12 max-w-3xl font-[family-name:var(--font-glacial)] text-lg/7">
          <p className="text-center">
            Nuestra misión es llevar tu marca al siguiente nivel con soluciones innovadoras y
            personalizadas.
          </p>

          <div className="mt-8 flex gap-4">
            <div className="border-tertiary/40 flex gap-4 border-r pr-4">
              <MoveRight aria-hidden="true" className="mt-0.5 size-6 shrink-0" />
              <p>
                Diseñamos equipos a medida para cada proyecto, seleccionando a los mejores expertos
                en cada área, que se ajusten a las necesidades específicas de tu negocio.{' '}
              </p>
            </div>
            <div className="flex gap-4">
              <MoveRight aria-hidden="true" className="mt-0.5 size-6 shrink-0" />
              <p>
                Creemos en el poder del trabajo en equipo, en la constante búsqueda de resultados
                concretos y en la capacidad de reinventarnos todos los días.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
