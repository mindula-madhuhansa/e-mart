"use client";

import { ShoppingBagIcon } from "lucide-react";

export const Cart = () => {
  return (
    <button type="button" className="relative">
      <ShoppingBagIcon className="size-6" />
      <span className="absolute -top-2 -right-2 bg-orange-400 text-white rounded-full size-5 flex items-center justify-center text-xs font-bold">
        0
      </span>
    </button>
  );
};
