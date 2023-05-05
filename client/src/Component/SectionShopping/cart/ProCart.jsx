import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import {
  decrementQuantity,
  deleteproduct,
  increamentQuantity,
} from "../../../redux-toolkit/reducer/shopping";
const ProCart = () => {
  const prince = useSelector((state) => state.prince.myproduct);
  console.log(prince);
  const dispatch = useDispatch();

  return (
    <div className="w-2/3 pr-10">
      <div className="w-full">
        <h2 className="font-titleFont text-2xl">shopping cart</h2>
        <div>
          <div>
            {prince.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between gap-6 mt-6"
              >
                <div className="flex items-center gap-2">
                  <MdOutlineClose
                    onClick={() => {
                      dispatch(deleteproduct(item.id));
                    }}
                    className="text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300"
                  />
                  <img
                    className="w-32 h-32 object-cover"
                    src={item.image}
                    alt="productImg"
                  />
                </div>
                <h2 className="w-52">{item.name}</h2>
                <span className="w-10">{item.price}</span>
                <div className="w-52 flex items-center justify-between text-gray-500 gap-4 border p-3">
                  <span className="text-sm">Quantity</span>
                  <div className="flex items-center gap-4 text-sm font-semibold">
                    <span
                      onClick={() => {
                        dispatch(
                          decrementQuantity({
                            id: item.id,
                            name: item.name,
                            image: item.image,
                            price: item.price,
                            quantity: 1,
                          })
                        );
                      }}
                      className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                    >
                      -
                    </span>
                    {item.quantity}
                    <span
                      onClick={() => {
                        dispatch(
                          increamentQuantity({
                            id: item.id,
                            name: item.name,
                            image: item.image,
                            price: item.price,
                            quantity: 1,
                          })
                        );
                      }}
                      className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                    >
                      +
                    </span>
                  </div>
                </div>
                <p className="w-14">{item.quantity * item.price}{console.log(item.price)}</p>
              </div>
            ))}
          </div>
          <button className="bg-red-500 text-white mt-8 ml-7 py-1 px-6 hover:bg-red-800 duration-300">
            Reset Cart
          </button>
        </div>
      </div>
      <Link to="/">
        <button className="mt-8 ml-7 flex items-center gap-1 text-gray-400 hover:text-black duration-300">
          <span>
            <HiOutlineArrowLeft />
          </span>
          go shopping
        </button>
      </Link>
      <ToastContainer
        position="top-left"
        autoClose={3000}
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
  );
};

export default ProCart;
