import { About, Clients, Contact, Footer, Hero, Navbar, Packs, Services } from '@/components';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Packs />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
