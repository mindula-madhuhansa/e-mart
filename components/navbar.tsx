import Link from "next/link";

import { Cart } from "@/components/cart";

export const Navbar = () => {
  return (
    <header className="border-b">
      <div className="w-full h-20 bg-white px-4 md:px-8 xl:px-0 max-w-xl md:max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-full w-full">
          <Link href="/">
            <h1 className="font-bold text-2xl">eMart</h1>
          </Link>
          <Cart />
        </div>
      </div>
    </header>
  );
};
