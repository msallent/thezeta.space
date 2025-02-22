import { ServicesCarousel } from './Carousel';

export function Services() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p id="servicios" className="-mt-10 pt-10 text-lg/7 font-semibold text-secondary">
            Servicios
          </p>

          <h2 className="mt-2 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Potenciá tu negocio
          </h2>

          <p className="mt-4 font-secondary text-lg/7 text-tertiary">
            Cada servicio que ofrecemos es una pieza clave para hacer crecer tu negocio
            <br /> y que tu marca sea inolvidable.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <ServicesCarousel />
        </div>
      </div>
    </section>
  );
}
