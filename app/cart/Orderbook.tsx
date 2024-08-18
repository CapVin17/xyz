
export default function Orderbook() {
  return (
    <div className="border-2 border-slate-400 h-auto w-80 my-10 mx-10 bg-slate-100">
      <div className="p-5 font-bold text-2xl text-slate-700 border-b-2 border-slate-200">
        Order Summary
      </div>
      <div className="p-5 ml-8 text-xl font-semibold mt-4 divide-y divide-slate-300">
        <div className="flex flex-row justify-between py-4">
          <div>Subtotal</div>
          <div className="mr-8">$29.99</div>
        </div>
        <div className="flex flex-row justify-between py-4">
          <div>Charges</div>
          <div className="mr-8">$10.00</div>
        </div>
        <div className="flex flex-row justify-between py-4 ">
          <div>Discount</div>
          <div className="mr-7">$00.00</div>
        </div>
        <div className="flex flex-row justify-between py-4">
          <div>Total</div>
          <div className="mr-7">$00.00</div>
        </div>
      </div>
    </div>
  );
}
