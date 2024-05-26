"use client";

import Image from "next/image";
import { useContext } from "react";
import { MinusIcon, PlusIcon, Trash2Icon, XIcon } from "lucide-react";

import { Product } from "@/types";
import { urlForImage } from "@/sanity/lib/image";
import { CartContext } from "@/context/cart-context";

export const CartSidebar = () => {
  const {
    setShowCart,
    cartItems,
    totalQuantity,
    addProduct,
    totalPrice,
    onRemove,
  }: any = useContext(CartContext);

  const handleCheckout = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/checkout`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ products: cartItems }),
        }
      );

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error("Something went wrong", error);
    }
  };

  return (
    <aside className="w-screen bg-black bg-opacity-50 fixed right-0 top-0 z-10">
      <div className="border bg-white h-screen w-[600px] float-right px-10 py-12 relative">
        <div
          onClick={() => setShowCart(false)}
          className="flex items-center justify-between bg-transparent cursor-pointer"
        >
          <div className="flex items-center">
            <h2 className=" ml-2 text-lg font-medium">Your Cart</h2>
            <span className="ml-2 text-orange-400">
              ({totalQuantity} items)
            </span>
          </div>
          <XIcon className="size-8" />
        </div>

        <div className="mt-4 overflow-auto max-h-[70vh] px-5 py-2">
          {cartItems.map((product: Product) => (
            <div key={product._id} className="flex gap-4 p-5">
              <Image
                src={urlForImage(product.images[0])}
                alt={product.name}
                width={80}
                height={80}
                className="object-contain"
              />
              <div className="flex flex-col flex-1 gap-y-4">
                <div className="flex justify-between items-center">
                  <h1 className="text-xl line-clamp-1">{product.name}</h1>
                  <p className="text-lg">${product.price * product.quantity}</p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-1.5 flex border border-black items-center">
                    <span
                      onClick={() => addProduct(product, -1)}
                      className="cursor-pointer hover:text-red-500"
                    >
                      <MinusIcon className="size-4" />
                    </span>
                    <span className="px-4">{product?.quantity}</span>
                    <span
                      onClick={() => addProduct(product, 1)}
                      className="cursor-pointer hover:text-green-500"
                    >
                      <PlusIcon className="size-4" />
                    </span>
                  </div>
                  <button type="button">
                    <Trash2Icon
                      onClick={() => onRemove(product)}
                      className="size-6 text-red-500"
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {cartItems.length > 0 && (
          <div className="absolute bottom-3 right-1 w-full px-7 py-16">
            <div className="flex w-full justify-between py-3">
              <h3 className="text-xl">Subtotal</h3>
              <p>${totalPrice}</p>
            </div>

            <button
              type="button"
              onClick={handleCheckout}
              className="w-full py-2 text-lg border-2 border-orange-400 text-black hover:text-white font-semibold hover:bg-orange-400 transition"
            >
              Pay with Stripe
            </button>
          </div>
        )}
      </div>
    </aside>
  );
};
