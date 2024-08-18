import { useState } from "react";

export default function Indec()
{
    const[count,setcount] = useState(0);

    return (
        <div className="flex justify-center flex-rows">
           <button
              onClick={() => setcount(count + 1)}
              className="border-2 border-green-300 rounded-full w-10 text-green-500 font-bold text-xl m-1 items-center"
            >
              {" "}
              +{" "}
            </button>
            <div className="m-3 ml-5">{count}</div>
            <button
              onClick={() => {if(count>0) setcount(count + 1)}}
              className="border-2 border-red-300 rounded-full w-10 text-red-500 font-bold text-xl m-1 items-center ml-3"
            >
              {" "}
              -{" "}
            </button>
          </div>
        );
}