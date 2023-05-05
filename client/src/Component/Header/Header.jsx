import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { motion } from "framer-motion";
import { buttonclick } from "../../Animation/index";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { BiLogIn } from "react-icons/bi";
import { getAuth } from "firebase/auth";
import { app } from "../../config/firebase.config";
import { userlogout } from "../../redux-toolkit/reducer/reducer";

const Header = () => {
  const [Nav, Navigation] = useState([]);
  const [toolbox, settoolbox] = useState(false);
  const user = useSelector((state) => state.user);
  const prince = useSelector((state) => state.prince.myproduct);
  console.log(prince)
  const firebaseAuth = getAuth(app);
  const navigator = useNavigate();
  const dispatch = useDispatch();

  const Clickand = () => {
    Navigation(!Nav);
  };

  const logout = () => {
    firebaseAuth
      .signOut()
      .then(() => {
        dispatch(userlogout());
        navigator("/login", { replace: true });
      })
      .catch((e) => console.log("log out error", e));
  };
  return (
    <div className="flex justify-between items-center h-24 mx-auto px-4 bg-white text-black w-full fixed shadow-md z-30 top-0">
      <p className="text-4xl">prince.com</p>
      <ul className="hidden md:flex cursor-pointer relative">
        <Link to={"/"} className="p-4">Home</Link>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
        <motion.div {...buttonclick} className="p-4 text-2xl relative">
        <Link to={"/cart"}><HiOutlineShoppingCart className="cursor-pointer" /></Link>
          

          {prince.length === 0 ? (
            null
          ) : (
            <>
              <div className="w-6 h-6 rounded-full border border-black flex items-center justify-center absolute -top-1 right-0">
                <p className="font-mono text-[15px] font-bold">
                  {prince.length}
                </p>
              </div>
            </>
          )}
        </motion.div>
        {user.user ? (
          <>
            <div
              className="relative cursor-pointer"
              onMouseEnter={() => settoolbox(true)}
            >
              <div className="w-12 h-12 rounded-full shadow-md overflow-hidden flex items-center justify-center">
                <motion.img
                  className="w-full h-full object-cover"
                  src={user?.user?.picture ? user?.user?.picture : "man.png"}
                />
              </div>
              {toolbox && (
                <>
                  <motion.div
                    onMouseLeave={() => settoolbox(false)}
                    className="px-6 py-5 w-48 absolute bg-white backdrop-blur-md top-20 right-0 flex flex-col shadow-md z-10"
                  >
                    <Link
                      className="text-[17px] p-2 flex items-center justify-center hover:text-[#447d8e]"
                      to={"/dash"}
                    >
                      Dashboard
                    </Link>
                    <hr />
                    <Link className="text-[17px] p-2 flex items-center justify-center hover:text-[#447d8e]">
                      My Profile
                    </Link>
                    <hr />
                    <Link className="text-[17px] p-2 flex items-center justify-center hover:text-[#447d8e]">
                      Orders
                    </Link>
                    <hr />
                    <motion.button
                      {...buttonclick}
                      className="flex items-center justify-center px-2 py-2 rounded-md mt-2 bg-[#EAF1F1]"
                      onClick={logout}
                    >
                      <BiLogIn size={20} />
                      Log out
                    </motion.button>
                  </motion.div>
                </>
              )}
            </div>
          </>
        ) : (
          <>
            <NavLink to={"/login"}>
              <motion.div className="w-12 h-12 rounded-full shadow-md overflow-hidden flex items-center justify-center">
                <motion.img
                  className="w-full h-full object-cover"
                  {...buttonclick}
                  src="man.png"
                />
              </motion.div>
            </NavLink>
          </>
        )}
      </ul>
      <div onClick={Clickand} className="block md:hidden">
        {!Nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          !Nav
            ? "fixed right-0 top-0 w-[60%] h-[320px] bg-slate-50 mt-[120px] mx-2 ease-in-out duration-500 rounded-md"
            : "fixed left-[-100%]"
        }
      >
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Company</li>
          <li className="p-4 border-b border-gray-600">Resources</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4 border-b border-gray-600">Contact</li>
        </ul>

        {/* <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4 ">
          PRINCE.
        </h1>
        <ul className="pt-24 uppercase p-4">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Company</li>
          <li className="p-4 border-b border-gray-600">Resources</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4 border-b border-gray-600">Contact</li>
        </ul> */}
      </div>
    </div>
  );
};

export default Header;
