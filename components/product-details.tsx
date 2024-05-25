"use client";

import Image from "next/image";
import { useContext, useState } from "react";
import { MinusIcon, PlusIcon } from "lucide-react";

import { Product } from "@/types";
import { urlForImage } from "@/sanity/lib/image";
import { CartContext } from "@/context/cart-context";

type Props = {
  product: Product;
};

export const ProductDetails = ({ product }: Props) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const { qty, setQty, addProduct, cartItems }: any = useContext(CartContext);

  return (
    <div className="w-full md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-xl md:max-w-7xl mx-auto px-4 md:px-0">
        <div className="flex flex-col items-center p-2">
          <div className="h-[450px] mb-6 flex justify-center items-center">
            <Image
              src={urlForImage(product.images[selectedImage])}
              alt={product.name}
              width={350}
              height={350}
              className="object-cover"
            />
          </div>
          <div className="flex justify-center gap-2">
            {product.images.map((image, idx) => (
              <Image
                key={idx}
                src={urlForImage(image)}
                alt={product.name}
                width={64}
                height={64}
                className="object-cover border rounded-lg cursor-pointer"
                onClick={() => setSelectedImage(idx)}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center gap-y-8 my-12 md:my-0">
          <div className="flex flex-col gap-y-4">
            <h1 className="text-3xl font-semibold">{product.name}</h1>
            <p className="text-xl font-medium">${product.price}</p>
          </div>

          <div className="flex gap-x-2 items-center">
            <h3 className="text-lg font-medium">Quantity:</h3>
            <p className="p-4 font-bold flex gap-x-8 items-center border justify-between border-black">
              <MinusIcon
                onClick={() => {
                  if (qty > 1) {
                    setQty(qty - 1);
                  }
                }}
                className="size-4 cursor-pointer"
              />
              <span>{qty}</span>
              <PlusIcon
                onClick={() => setQty(qty + 1)}
                className="size-4 cursor-pointer"
              />
            </p>
          </div>

          <button
            onClick={() => addProduct(product, qty)}
            className="w-[80%] py-2 text-lg border-2 border-orange-400 text-black hover:text-white font-semibold hover:bg-orange-400 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
