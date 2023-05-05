import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { MdOutlineStar } from "react-icons/md";
import { BiArrowBack } from "react-icons/bi";
import { motion } from "framer-motion";
import { buttonclick } from "../../Animation";
import { useDispatch } from "react-redux";
import { addDataList } from "../../redux-toolkit/reducer/shopping";
import { ToastContainer, toast } from "react-toastify";
const Pro = () => {
  let [baseQty, setBaseQty] = useState(1);
  const [Npro, Nameofpro] = useState({});
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    Nameofpro(location.state.item);
  }, [location]);

  return (
    <>
      <div className="max-w-[1350px] bg-white flex items-center justify-center mt-32 mb-6">
        <div className="grid md:grid-cols-2">
          <div className="flex items-center justify-center">
            <div className="md:w-3/5 md:h-[550px] w-4/5 h-[400px]">
              <img
                className="w-full h-full object-cover"
                src={Npro.image}
                alt="productImg"
              />
            </div>
          </div>
          <div className="md:w-3/8 w-4/8 px-5 flex flex-col items-center justify-center md:gap-12">
            <div className="p-4">
              <div>
                <span className="text-3xl font-thin">ZARA</span>
                <h2 className="md:text-4xl text-3xl font-semibold">
                  {Npro.name}
                </h2>
                <div className="flex items-center gap-4 mt-3">
                  <span className="line-through font-base text-gray-500">
                    {Npro.dprice}
                    {Npro.delprice}
                  </span>
                  <span className="text-2xl font-medium text-gray-900">
                    {Npro.price}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 py-3">
                <div className="flex text-base">
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                </div>
                <span className="text-xs text-gray-500">
                  (1 Customer review)
                </span>
              </div>
              <span className="text-base text-gray-500 -mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas illo culpa numquam adipisci iste dolorum similique
                quisquam, recusandae distinctio repellendus deserunt, porro,
                perferendis dicta commodi. Id laudantium ipsam nulla. Aperiam!
              </span>
              <div className="flex py-4">
                <div className="w-52 flex items-center justify-between text-gray-500 gap-4 border p-3">
                  <span className="text-sm">Quantity</span>
                  <div className="flex items-center gap-4 text-sm font-semibold">
                    <button
                      onClick={() =>
                        setBaseQty(baseQty === 1 ? (baseQty = 1) : baseQty - 1)
                      }
                      className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                    >
                      -
                    </button>
                    {baseQty}
                    <button
                      onClick={() => setBaseQty(baseQty + 1)}
                      className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  className="bg-black text-white py-3 px-6 active:bg-gray-800"
                  onClick={() => {
                    dispatch(
                      addDataList({
                        id: Npro.id,
                        name: Npro.name,
                        image: Npro.image,
                        price: Npro.price,
                        quantity: baseQty,
                      })
                      // & toast.success(`${Npro.title} is added`);
                    ) 
                  }}
                >
                  add to cart
                </button>
              </div>
              <span className="text-base text-gray-500">
                Category:
                <span className="font-medium capitalize text-black">
                  {Npro.Category}
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="absolute top-28 right-8">
          <NavLink to={"/"}>
            <motion.button {...buttonclick}>
              <BiArrowBack size={28} className="hover:scale-150 duration-300" />
            </motion.button>
          </NavLink>
        </div>
        <ToastContainer
          position="top-left"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </>
  );
};

export default Pro;
// onClick={() => {
//   dispatch(
//     addDataList({
//
//     })
//   )
// }}
