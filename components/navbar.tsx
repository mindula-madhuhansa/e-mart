"use client";

import Link from "next/link";
import { useContext } from "react";
import { ShoppingBagIcon } from "lucide-react";

import { CartSidebar } from "@/components/cart-sidebar";
import { CartContext } from "@/context/cart-context";

export const Navbar = () => {
  const { showCart, setShowCart }: any = useContext(CartContext);

  return (
    <>
      <div className="w-full h-20 bg-white px-4 md:px-8 xl:px-0 max-w-xl md:max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-full w-full">
          <Link href="/">
            <h1 className="font-bold text-2xl">eMart</h1>
          </Link>
          <button
            type="button"
            onClick={() => setShowCart(!showCart)}
            className="relative"
          >
            <ShoppingBagIcon className="size-6" />
            <span className="absolute -top-2 -right-2 bg-orange-400 text-white rounded-full size-5 flex items-center justify-center text-xs font-bold">
              0
            </span>
          </button>
        </div>
      </div>

      {showCart && <CartSidebar />}
    </>
  );
};
