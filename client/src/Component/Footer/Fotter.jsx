import React from "react";
import { BsArrowReturnRight, BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { buttonclick } from "../../Animation";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsLinkedin,
  BsWhatsapp,
} from "react-icons/bs";

const Fotter = () => {
  return (
    <div className="contact w-full h-auto bg-[#2F3B3B] text-white text-1xl">
      <div className="max-w-[1400px] mx-auto">
        <div className="p-5">
          <h1 className="md:text-6xl text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#AE67FA] to-[#f49867] md:h-[200px]">
          Fashion is more art than art is.
          </h1>
        </div>

        <div>
          <motion.button
            className="flex mx-auto border border-black p-3 hover:bg-white text-black transition duration-150 ease-in-out
            shadow-black shadow-lg"
            {...buttonclick}
          >
            <p>Request Early Access</p>
          </motion.button>
          {/* <button className="flex mx-auto border border-white p-3 hover:bg-black transition duration-150 ease-in-out">
            Request Early Access
          </button> */}
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto grid md:grid-cols-4 p-5 py-[100px] gap-5">
        <div className="">
          {/* <img src={logo} alt="" /> */}
          <p className="text-5xl">prince.com</p>
          <span>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</span>
        </div>

        <div>
          <h4 className="flex gap-2 items-center hover:text-white">
            <BsArrowReturnRight className="hover:text-white" />
            Links
          </h4>
          <span className="flex gap-2 items-center mt-5">
            <BsArrowRight className="hover:text-white" />
            Overons
          </span>
          <span className="flex gap-2 items-center hover:text-white">
            <BsArrowRight className="hover:text-white" />
            Social Media
          </span>
          <span className="flex gap-2 items-center hover:text-white">
            <BsArrowRight className="hover:text-white" />
            Counters
          </span>
          <span className="flex gap-2 items-center hover:text-white">
            <BsArrowRight className="hover:text-white" />
            Contact
          </span>
        </div>

        <div>
          <h4 className="flex gap-2 items-center hover:text-white">
            <BsArrowReturnRight className="hover:text-white" />
            Company
          </h4>
          <span className="flex gap-2 items-center mt-5 hover:text-white">
            <BsArrowRight className="hover:text-white" />
            Terms & Conditions
          </span>
          <span className="flex gap-2 items-center hover:text-white">
            <BsArrowRight className="hover:text-white" />
            Privacy Policy
          </span>
          <span className="flex gap-2 items-center hover:text-white">
            <BsArrowRight className="hover:text-white" />
            Contact
          </span>
        </div>

        <div>
          <h4 className="flex gap-2 items-center hover:text-white">
            <BsArrowReturnRight className="hover:text-white" />
            Get in touch
          </h4>
          <span className="flex gap-2 items-center mt-5 hover:text-white">
            <BsArrowRight className="hover:text-white" />
            57 Nand banglows
          </span>
          <span className="flex gap-2 items-center hover:text-white">
            <BsArrowRight className="hover:text-white" />
            +91 9737070575
          </span>
          <span className="flex gap-2 items-center hover:text-white">
            <BsArrowRight className="hover:text-white" />
            radadiyaprince1@gmail.com
          </span>
          <div className="icons flex gap-3 text-3xl px-2 py-2 mt-4">
            <a href="https://www.facebook.com/prince.radadiya.585">
              <BsFacebook />
            </a>
            <a href="http://">
              <BsInstagram />
            </a>
            <a href="http://">
              <BsTwitter />
            </a>
            <a href="http://">
              <BsLinkedin />
            </a>
            <a href="http://">
              <BsWhatsapp />
            </a>
            {/* <BsFacebook />
     <BsInstagram />
     <BsTwitter />  
     <BsLinkedin />
     <BsWhatsapp /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fotter;
