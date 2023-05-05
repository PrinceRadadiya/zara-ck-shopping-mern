import React, { useEffect, useState } from "react";
import axios from "axios";
import Shoppingck from "./Shoppingck";
import CloathZARA from "./CloathZARA";

const Shoppingzara = () => {
  const [ddd, setdata] = useState([]);
  const api = "https://644a1aec79279846dcded570.mockapi.io/fashion";

  const loadoc = async () => {
    const res = await axios.get(api);
    setdata(res.data);
  };

  // console.log(res);
  useEffect(() => {
    loadoc();
  }, []);
  return (
    <>
      <div>
        <div className="border w-10 h-1 bg-gradient-to-r  border-none mx-3" />
        <span className="uppercase mx-3 text-black">
          Collections <span className="text-4xl">ZARA</span>
        </span>

        <div className="grid md:grid-cols-4">
          {ddd.map((curr) => (
            <CloathZARA key={curr.id} product={curr} />
          ))}
        </div>
        <hr className="m-4 border-black" />
      </div>
      <Shoppingck />
    </>
  );
};

export default Shoppingzara;
