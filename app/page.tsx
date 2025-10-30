import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Products from '@/components/Products';
import Features from '@/components/Features';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Products />
      <Features />
      <Contact />
      <Footer />
      <Toaster />
    </main>
  );
}
