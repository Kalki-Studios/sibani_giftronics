import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import StockGallery from '@/components/StockGallery';
import ExchangePortal from '@/components/ExchangePortal';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <StockGallery />
      <ExchangePortal />
      <Footer />
    </main>
  );
}
