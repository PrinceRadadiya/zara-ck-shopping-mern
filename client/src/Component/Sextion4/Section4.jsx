import React from "react";
import { FaShoppingCart, FaShippingFast } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { BsCreditCardFill } from "react-icons/bs";

const Section4 = () => {
  return (
    <div className="w-full h-full flex justify-center mt-14">
      <div className="grid md:grid-cols-3 gap-3">
        <div className="bg-[#EAF1F1] w-[200px] h-[300px] flex justify-center items-center shadow-xl">
          <FaShoppingCart className="text-4xl" />
        </div>

        <div className="flex flex-col gap-4">
          <div className="bg-[#EAF1F1] h-[142px] flex justify-center items-center hover:scale-90 duration-1000">
            <FiShoppingBag className="text-4xl" />
          </div>
          <div className="bg-[#EAF1F1] h-[142px] flex justify-center items-center hover:scale-90 duration-1000">
            <BsCreditCardFill className="text-4xl" />
          </div>
        </div>

        <div className="bg-[#EAF1F1] w-[200px] h-[300px] flex justify-center items-center shadow-xl">
          <FaShippingFast className="text-4xl" />
        </div>
      </div>
    </div>
  );
};

export default Section4;
