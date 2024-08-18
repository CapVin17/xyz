"use client";
import { useState } from "react";
import Indec from "./In-Dec";

interface Block {
  name: string;
  price: string;
  image: string;
}

export default function Card({ name, price, image }: Block) {
  const [isHovered, setHovered] = useState(false);
  const [quantity, setQuantity] = useState<number>(0);

  const handleAddToCart = () => {
    setQuantity(1);
  };

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
  };

  return (
    <div className="border-2 border-slate-800 w-80 h-[35rem] p-4 m-10 rounded-md flex flex-col justify-between items-center">
      <img
        src={image}
        alt={name}
        className="w-full h-60 object-cover rounded-md mb-4"
      />

      <div className="text-center font-bold p-3 text-lg">
        {name}
      </div>

      <div className="text-center font-bold text-3xl mb-4">
        {price}
      </div>

      <div className="w-full mt-auto">
        {quantity === 0 ? (
          <button
            onClick={handleAddToCart}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="border-2 border-yellow-500 w-full h-12 mt-8 transition duration-300 ease-in-out text-white font-bold text-lg"
            style={{ backgroundColor: isHovered ? "green" : "yellow" }}
          >
            Add to cart
          </button>
        ) : (
          <Indec
            quantity={quantity}
            onQuantityChange={handleQuantityChange}
          />
        )}
      </div>
    </div>
  );
}
