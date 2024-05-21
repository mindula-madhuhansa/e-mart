import { Hero } from "@/components/hero";
import { ProductsList } from "@/components/products-list";

export default function Home() {
  return (
    <main className="max-w-xl md:max-w-7xl mx-auto">
      <Hero />
      <ProductsList />
    </main>
  );
}
