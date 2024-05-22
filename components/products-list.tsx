import { groq } from "next-sanity";

import { Product } from "@/types";
import { client } from "@/sanity/lib/client";
import { ProductCard } from "@/components/product-card";

export const ProductsList = async () => {
  const products: Product[] = await client.fetch(groq`*[_type=="product"]`);

  return (
    <section className="w-full py-12 mt-24 md:mt-32 px-8 xl:px-0">
      <h2 className="text-2xl md:text-3xl font-semibold">
        Best Selling Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
};
