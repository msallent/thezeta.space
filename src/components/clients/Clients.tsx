import { ClientsCarousel } from './Carousel';

export function Clients() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto px-6 md:px-8">
        <h2 id="clientes" className="-mt-10 pt-10 text-center text-xl/8 font-semibold text-white">
          Clientes que confían en nosotros
        </h2>

        <ClientsCarousel />
      </div>
    </section>
  );
}
