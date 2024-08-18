import Nav from "../navbar/nav"
import ShoppingCartBox from "./ShoppingCartBox"
import Orderbook from "./Orderbook";
import DiscountBox from "./DiscountBox";
export default function cart() 
{
    return (
      <div className="">
        <Nav />
        <div className="flex justify-center flex-row space-x-8">
          <ShoppingCartBox />
          <div className="flex flex-col">
            <Orderbook />
            <DiscountBox />
          </div>
        </div>
      </div>
    );
}