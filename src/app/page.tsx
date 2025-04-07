import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Desc from '@/components/sections/Desc';
import BahanHerbal from '@/components/sections/Bahan';
import Product from '@/components/sections/Product';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Desc />
      <BahanHerbal />
      <Product />
    </main>
  );
}