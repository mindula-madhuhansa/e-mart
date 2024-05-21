import Link from "next/link";

import { Cart } from "@/components/cart";

export const Navbar = () => {
  return (
    <header className="w-full h-20 bg-white border-b">
      <div className="flex items-center justify-between h-full w-full">
        <Link href="/">
          <h1 className="font-bold text-2xl">eMart</h1>
        </Link>
        <Cart />
      </div>
    </header>
  );
};
