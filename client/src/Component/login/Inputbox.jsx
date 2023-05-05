import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeinandout } from "../../Animation";
import { BiHide, BiShow } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";

const Inputbox = ({ placeholder, inputstate, inputstatefun, type, isSign }) => {
  const [isFocus, setfocus] = useState(false);
  const [passShow, setPassShow] = useState(false);

  return (
    <motion.div
      {...fadeinandout}
      className={`bg-[#EAF1F1] backdrop-blur-md rounded-md md:mx-8 px-4 py-2 ${
        isFocus ? "shadow-md" : "shadow-none"
      }`}
    >
      <div className="flex">
        <input
          type={!passShow ? type : "text"}
          placeholder={placeholder}
          className="w-full h-full bg-transparent font-serif outline-none p-1"
          value={inputstate}
          onFocus={() => setfocus(true)}
          onBlur={() => setfocus(false)}
          onChange={(e) => inputstatefun(e.target.value)}
        />
        {type === "password" ? (
          <div onClick={() => setPassShow(!passShow)}>
            {!passShow ? <BiShow size={"20px"}/> : <BiHide size={"20px"}/>}
          </div>
        ) : (
          <HiOutlineMail size={"20px"}/>
        )}
      </div>
    </motion.div>
  );
};

export default Inputbox;
