import {
  About,
  Clients,
  Contact,
  Footer,
  Hero,
  Navbar,
  Packs,
  Services,
  WhatsApp,
} from '@/components';

export default function Home() {
  return (
    <div className="relative">
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
      <WhatsApp />
    </div>
  );
}
