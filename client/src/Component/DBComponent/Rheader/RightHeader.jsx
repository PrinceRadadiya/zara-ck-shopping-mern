import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CiSearch } from "react-icons/ci";
import { BsToggleOn } from "react-icons/bs";
import { motion } from "framer-motion";
import { buttonclick } from "../../../Animation";
import { BiLogIn } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import {app} from "../../../config/firebase.config"
import { userlogout } from "../../../redux-toolkit/reducer/reducer";
 
const RightHeader = () => {
    const firebaseAuth = getAuth(app);
    const navigator = useNavigate();
    const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const logout = () =>{
    firebaseAuth
    .signOut()
    .then(() => {
      dispatch(userlogout());
      navigator("/login", { replace: true });
    })
    .catch((e) => console.log("log out error", e));
  }
  return (
    <div className="w-full flex items-center justify-between">
      <h2 className="text-4xl font-thin">
        Welcome to store{user.user && <p>{`Hello ${user.user?.name}`}...</p>}
      </h2>

      <div className="flex items-center justify-center ">
        <div className="flex px-4 items-center justify-center">
          <CiSearch size={20} />
          <input type="text" className="w-32 h-6 mx-2 shadow-md rounded-md " />
          <BsToggleOn size={20} />

          <div className="w-10 h-10 rounded-md shadow-md overflow-hidden flex items-center justify-center mx-2">
            <motion.img
              className="w-full h-full object-cover"
              src={user?.user?.picture ? user?.user?.picture : "man.png"}
            />
          </div>
          <motion.button
            {...buttonclick}
            className="flex items-center justify-center rounded-md bg-white w-10 h-10 "
            onClick={logout}
          >
            <BiLogIn size={25} className=""/>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default RightHeader;
