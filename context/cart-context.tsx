"use client";

import { createContext, useState } from "react";

import { Product } from "@/types";

export const CartContext = createContext({});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [showCart, setShowCart] = useState(false);
  const [qty, setQty] = useState(1);
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addProduct = (product: Product, quantity: number) => {
    const checkProductInCart = cartItems.find(
      (item) => item._id === product._id
    );

    setTotalQuantity((prev) => prev + quantity);
    setTotalPrice((prevTot) => prevTot + product.price * quantity);

    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) =>
        cartProduct._id === product._id
          ? { ...cartProduct, quantity: cartProduct.quantity + quantity }
          : cartProduct
      );

      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;
      setCartItems([...cartItems, { ...product }]);
    }
  };

  const onRemove = (product: Product) => {
    const updatedCartItems = cartItems.filter(
      (cartProduct) => cartProduct._id !== product._id
    );

    setCartItems(updatedCartItems);
    setTotalQuantity(totalQuantity - product.quantity);
    setTotalPrice(totalPrice - product.price * product.quantity);
  };

  return (
    <CartContext.Provider
      value={{
        qty,
        showCart,
        cartItems,
        totalPrice,
        totalQuantity,
        setQty,
        onRemove,
        addProduct,
        setShowCart,
        setCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
