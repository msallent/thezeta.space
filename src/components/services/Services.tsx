import { ServicesCarousel } from './Carousel';

export function Services() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p id="servicios" className="text-secondary -mt-10 pt-10 text-lg/7 font-semibold">
            Servicios
          </p>

          <h2 className="mt-2 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            Potenciá tu negocio
          </h2>

          <p className="text-tertiary font-secondary mt-4 text-lg/7">
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
