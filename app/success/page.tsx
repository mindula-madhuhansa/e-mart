import { ArrowRightIcon } from "lucide-react";

export default function Success() {
  return (
    <div className="flex flex-col gap-y-4 items-center justify-center h-screen text-center">
      <p className="capitalize text-[#4F46E5] font-bold text-2xl">Success</p>
      <h1 className="text-5xl font-bold text-gray-900">
        Your order has been placed! 🎉
      </h1>
      <p className="text-gray-600 text-xl">Thank you for your purchase!</p>
      <a
        href="/"
        className="flex items-center gap-x-2 bg-[#4F46E5] font-semibold text-white px-3.5 py-2.5 rounded-lg"
      >
        Continue shopping
        <ArrowRightIcon />
      </a>
    </div>
  );
}
