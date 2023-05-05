import React, { useEffect, useState } from "react";
import ProCart from "./cart/ProCart";
import { useSelector } from "react-redux";
import Header from "../Header/Header";

const Cart = () => {
  const prince = useSelector((state) => state.prince.myproduct);

  const [Total, setTotal] = useState("");

  useEffect(() => {
    let price = 0;
    prince.map((item) => {
      price += item.price * item.quantity;
      return price;
    });

    setTotal(price.toFixed(2));
  }, [prince]);

  return (
    <>
    <Header />
      <div className="w-full h-full mt-24">
        <div className="w-full h-[500px] overflow-hidden">
          <video src="kalu.mp4" muted autoPlay loop></video>
        </div>
        <div className="max-w-screen-xl mx-auto py-20 flex">
          <ProCart />
          <div className="w-1/3 bg-[#fafafa] py-6 px-4">
            <div className=" flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
              <h2 className="text-2xl font-medium ">cart totals</h2>
              <span className="flex items-center gap-4 text-base">
                Subtotal
                <span className="font-titleFont font-bold text-lg">
                  ${Total}
                </span>
              </span>
              <span className="flex items-start gap-4 text-base">
                Shipping
                <span>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quos, veritatis.
                </span>
              </span>
            </div>
            <span className="font-titleFont font-semibold flex justify-between mt-6">
              Total <span className="text-xl font-bold">${Total}</span>
            </span>
            <button
              // onClick={handleCheckout}
              className="text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300"
            >
              proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
