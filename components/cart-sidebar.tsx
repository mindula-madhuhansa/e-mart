"use client";

import { useContext } from "react";
import { XIcon } from "lucide-react";

import { CartContext } from "@/context/cart-context";

export const CartSidebar = () => {
  const { setShowCart }: any = useContext(CartContext);

  return (
    <aside className="w-screen bg-black bg-opacity-50 fixed right-0 top-0 z-10">
      <div className="border bg-white h-screen w-[600px] float-right px-10 py-12 relative">
        <div
          onClick={() => setShowCart(false)}
          className="flex items-center justify-between bg-transparent cursor-pointer"
        >
          <div className="flex items-center">
            <h2 className=" ml-2 text-lg font-medium">Your Cart</h2>
            <span className="ml-2 text-orange-400">(3 items)</span>
          </div>
          <XIcon className="size-8" />
        </div>
      </div>
    </aside>
  );
};
