import React from "react";
import { NavLink } from "react-router-dom";
import { BsQuestionSquare } from "react-icons/bs";
import { motion } from "framer-motion";
import { buttonclick } from "../../Animation";

const Leftside = () => {
  return (
    <div className="h-full py-12 flex flex-col bg-white backdrop-blur-md shadow-md min-w-[210px] w-[300px]">
      <div className="flex items-center justify-center">
        <NavLink to={"/"}>
          <p className="text-4xl">prince.com</p>
        </NavLink>
      </div>

      <ul className="flex flex-col items-center justify-center py-12">
        <NavLink
          className="p-4 cursor-pointer font-thin uppercase hover:px-5 hover:py-4 hover:border hover:border-[#2F3B3B]"
          to={"/dash/Home"}
        >
          Home
        </NavLink>
        <NavLink
          className="p-4 cursor-pointer font-thin uppercase hover:px-5 hover:py-4 hover:border hover:border-[#2F3B3B]"
          to={"/dash/Orders"}
        >
          Orders
        </NavLink>
        <NavLink
          className="p-4 cursor-pointer font-thin uppercase hover:px-5 hover:py-4 hover:border hover:border-[#2F3B3B]"
          to={"/dash/iteams"}
        >
          iteams
        </NavLink>
        <NavLink
          className="p-4 cursor-pointer font-thin uppercase hover:px-5 hover:py-4 hover:border hover:border-[#2F3B3B]"
          to={"/dash/Addpro"}
        >
          Add Product
        </NavLink>
        <NavLink
          className="p-4 cursor-pointer font-thin uppercase hover:px-5 hover:py-4 hover:border hover:border-[#2F3B3B]"
          to={"/dash/Users"}
        >
          Users
        </NavLink>
      </ul>

      <div className="w-full items-center justify-center flex h-[200px] mt-auto px-2">
        <div className="w-full h-full rounded-md flex items-center justify-center flex-col gap-3 px-3 bg-[#2F3B3B]">
          <div>
            <BsQuestionSquare size={30} color="white" />
          </div>
          <div className="flex flex-col items-center justify-center font-thin text-white">
            <span>Help center</span>
            <span>
              Having trouble in Store Please contact us fore more Question.
            </span>
          </div>
          <motion.button
            {...buttonclick}
            className="px-2 py-2 bg-[#EAF1F1] rounded-md"
          >
            Any Question ?
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Leftside;
