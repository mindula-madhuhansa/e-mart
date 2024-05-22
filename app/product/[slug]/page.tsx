import { groq } from "next-sanity";

import { client } from "@/sanity/lib/client";
import { ProductDetails } from "@/components/product-details";

type Props = {
  params: { slug: string };
};

export default async function ProductPage({ params }: Props) {
  const { slug } = params;

  const products: Product[] = await client.fetch(groq`*[_type=="product"]`);

  const product = products.find((product) => product.slug.current === slug);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <ProductDetails product={product} />
    </div>
  );
}
