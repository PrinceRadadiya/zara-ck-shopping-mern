import React from "react";
import { useNavigate } from "react-router-dom";
import { IoAddCircleOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { addDataList } from "../../redux-toolkit/reducer/shopping";
import { ToastContainer, toast } from "react-toastify";

const CloathCk = ({ product }) => {
  const _id = product.name;
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const idString = (_id) => {
    return String(_id).toLowerCase().split(" ").join("");
  };
  const rootId = idString(_id);
  const handleDetails = () => {
    Navigate(`/product/${rootId}`, {
      state: {
        item: product,
      },
    });
  };

  return (
    <div className="p-4 relative" >
      <img
        src={product.image}
        onClick={handleDetails}
        alt="please wait..."
        className="h-[500px] hover:scale-90 duration-300 w-[400px] object-cover"
      />
      <div className="absolute top-10 right-10 cursor-pointer">
        <span
          onClick={() =>
            dispatch(
              addDataList({
                id: product.id,
                name: product.name,
                image: product.image,
                price: product.price,
                quantity: 1,
              })
            ) & toast.success(`${product.name} is added`)
          }
        >
          <IoAddCircleOutline size={35} />
        </span>
      </div>
      <div className="h-11 bg-[#EAF1F1] flex justify-between px-2 py-2">
        <h3 className="flex overflow-hidden">{product.name}</h3>
        <div>
          <span>
            <del>${product.delprice}</del>
          </span>
          <span className="font-thin">${product.price}</span>
        </div>
      </div>
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

export default CloathCk;
