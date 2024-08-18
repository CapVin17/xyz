"use client"

import React, { createContext, useState, ReactNode } from "react";

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};


interface CartContextType {
  cartItems: CartItem[];
  addItem: (item: CartItem) => void;
  updateQuantity: (name: string, quantity: number) => void;
  getTotal: () => number;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addItem = (item: CartItem) => {
    setCartItems((prev) => {
      const existingItem = prev.find((i) => i.name === item.name);
      if (existingItem) {
        return prev.map((i) =>
          i.name === item.name
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        );
      }
      return [...prev, item];
    });
  };

  const updateQuantity = (name: string, quantity: number) => {
    setCartItems((prev) =>
      prev.map((item) => (item.name === name ? { ...item, quantity } : item))
    );
  };

  const getTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addItem, updateQuantity, getTotal }}
    >
      {children}
    </CartContext.Provider>
  );
};
