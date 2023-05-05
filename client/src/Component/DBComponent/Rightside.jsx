import React from "react";
import RightHeader from "./Rheader/RightHeader";
import { Route, Routes } from "react-router-dom";
import Home from "./Rheader/Home";
import Orders from "./Rheader/Orders";
import Users from "./Rheader/Users";
import Addpro from "./Rheader/Addpro";
import Iteams from "./Rheader/Show_items/Iteams";

const Rightside = () => {
  return (
    <div className="flex flex-col h-full py-12 p-5 w-full bg-[#EAF1F1]">
      <RightHeader />
      <div className="flex flex-col flex-1">
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Orders" element={<Orders />} />
          <Route path="/iteams" element={<Iteams />} />
          <Route path="/Addpro" element={<Addpro />} />
          <Route path="/Users" element={<Users />} />
        </Routes>
      </div>
    </div>
  );
};

export default Rightside;
