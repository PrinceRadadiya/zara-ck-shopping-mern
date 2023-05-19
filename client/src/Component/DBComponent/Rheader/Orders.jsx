import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllproducs } from "../../../api";
import { setproducts } from "../../../redux-toolkit/reducer/allproduct";

const Orders = () => {
  const datapro = useSelector((state) => state.datapro);
  // console.log(datapro.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (datapro) {
      getAllproducs().then((data) => {
        dispatch(setproducts(data));
      });
    }
  }, []);
  return (
    <>
      <div>
        {datapro.products.map((item, index) => {
          return (
            <div key={index} className="border border-black">
              <img
                src={item.Product_Allimage}
                alt="mm"
                className="w-[50px] h-[50px] rounded-full"
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Orders;
