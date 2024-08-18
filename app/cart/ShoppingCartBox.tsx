import { useState } from "react";
import CartBlock from "./CartBlock";

export default function ShoppingCartBox() {
  return (
    <div className="border-2 border-gray-500 w-[60rem] h-auto m-10">
      <div className="m-7 font-semibold text-2xl text-slate-600">
        Shopping Cart
      </div>

      <div className="flex flex-col m-7">
        <CartBlock />
        <CartBlock />
      </div>
    </div>
  );
}
