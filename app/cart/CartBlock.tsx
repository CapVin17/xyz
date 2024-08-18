import Indec from "../components/In-Dec";

export default function CartBlock() {
  return (
    <div className="border-2 border-gray-500 rounded-sm w-full h-auto md:h-[5rem] flex flex-col md:flex-row items-center my-3 p-4 md:p-0">
      {/* Image */}
      <img
        src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/616b4ead-bbd9-4a16-aeab-8d331a16f697_1875x.png?v=1642405569"
        alt="headphones"
        className="h-24 w-24 md:h-full object-contain mb-4 md:mb-0 ml-0 md:ml-4"
      />

      <div className="text-lg font-semibold flex-1 text-center md:text-left md:ml-4">
        Wireless Bluetooth Earbuds
      </div>

      <div className="font-bold text-xl text-center md:text-right md:mr-7 mt-2 md:mt-0">
        $29.99
      </div>

      <div className="mt-2 md:mt-0 md:mr-4">
        <Indec quantity={10} onQuantityChange={10} />
      </div>
    </div>
  );
}
