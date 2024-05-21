import Image from "next/image";
import Link from "next/link";

import { urlForImage } from "@/sanity/lib/image";

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link
      href={`/product/${product.slug.current}`}
      className="bg-white py-8 drop-shadow-md rounded-lg border flex flex-col items-center justify-between hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out"
    >
      <Image
        src={urlForImage(product.images[0]) || ""}
        alt={product.slug.current}
        width={220}
        height={100}
        className="object-cover"
      />

      <div className="flex flex-col items-center py-4">
        <h2 className="font-semibold text-lg">{product.name}</h2>
        <p className="text-gray-500 text-sm font-medium">${product.price}</p>
      </div>
    </Link>
  );
};
