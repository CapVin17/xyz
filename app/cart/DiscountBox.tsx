
export default function DiscountBox()
{
    return <div className="border-2 border-slate-400 w-80 h-auto ml-10 mb-8">
        <div className="px-5 pt-5 pb-3 font-bold text-xl text-slate-800">
            Discount Coupon
        </div>
        <div className="px-5 text-slate-400">
            Have a coupon code?
        </div>
        <div>
            <input type="text" className="border-2 border-slate-200 rounded-md mx-5 p-3 mb-4 w-[17rem]"/>
        </div>
        <div className="mb-4">
            <button className="border-4 border-blue-500 bg-blue-500 w-[15rem] rounded-md mx-8 my-2 p-1 text-white">Apply</button>
        </div>
    </div>
}