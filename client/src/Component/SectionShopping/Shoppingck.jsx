import axios from "axios";
import React, { useEffect, useState } from "react";
import CloathCk from "./CloathCk";
// import Pro from "./Pro";

const Shoppingck = () => {
  const [ck, ckdata] = useState([]);
  const api = "https://644a1aec79279846dcded570.mockapi.io/ck";

  const shop = async () => {
    const res = await axios.get(api);
    ckdata(res.data);
  };
  // console.log(res);
  useEffect(() => {
    shop();
  }, []);
  return (
    <div>
      <span className="uppercase mx-3 text-black">
        Collections <span className="text-4xl">Calvin Klein</span>
      </span>

      <div className="grid md:grid-cols-4">
        {ck.map((curr) => (
          <CloathCk key={curr.id} product={curr} />
        ))}
      </div>
      <hr className="m-4 border-black" />
    </div>
  );
};

export default Shoppingck;
