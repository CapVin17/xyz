"use client"
import { useState } from "react"

interface vineet { 
    quantity: number;
    onQuantityChange: (newQuantity: number) => void;
}

export default function Indec({ quantity, onQuantityChange} : vineet)
{
    const[count,setcount] = useState(1);

    const handleIncrement = () => {
        setcount(count + 1);
        onQuantityChange(count + 1);
    }

    const handleDecrement = () => {
        if(count > 0)
        {
            setcount(count - 1);
            onQuantityChange(count - 1);
        }
        else{
            onQuantityChange(0);
        }
    };

    return <div className="flex justify-center flex-rows">
        <button onClick={handleIncrement} className="border-2 border-green-300 rounded-full w-10 text-green-500 font-bold text-xl m-1 items-center"> + </button>
        <div className="m-3 ml-5">{count}</div>
        <button onClick={handleDecrement} className="border-2 border-red-300 rounded-full w-10 text-red-500 font-bold text-xl m-1 items-center ml-3"> - </button>
    </div>
}