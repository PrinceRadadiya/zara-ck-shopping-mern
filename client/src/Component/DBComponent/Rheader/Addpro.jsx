import React, { useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import {
  deleteObject,
  getDownloadURL,
  // getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { storage } from "../../../config/firebase.config";
import { AiFillDelete } from "react-icons/ai";
import { motion } from "framer-motion";
import { buttonclick } from "../../../Animation";
import { getAllproducs, newProduct } from "../../../api";
import { useDispatch } from "react-redux";
import { setproducts } from "../../../redux-toolkit/reducer/allproduct";
import { ToastContainer, toast } from "react-toastify";
// import { Button, DatePicker } from "antd";

const Addpro = () => {

  const [oliiteam, setoliiteam] = useState("");
  const [sprice, setsprice] = useState("");
  const [isloading, setisloading] = useState(false);

  //upload proseess state
  const [proseess, setpopsses] = useState(null);

  const [imageDownloadimage, setimageDownload] = useState(null);

  const dispatch = useDispatch()

  const uploaimage = (e) => {
    setisloading(true);
    const image = e.target.files[0];
    const storageref = ref(storage, `AddImage/${Date.now()}_${image.name} `);

    const uploadTask = uploadBytesResumable(storageref, image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        setpopsses((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      },
      (error) => {
        window.alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          // console.log('File available at', downloadURL);
          setimageDownload(downloadURL);
          setisloading(false);
          setpopsses(null);
          setTimeout(() => {
            toast.success("Data Added successfully")
          }, 3000);
        });
      }
    );
  };

  const deleteImageofSystem = () => {
    setisloading(true);
    const desertRef = ref(storage, imageDownloadimage);
    deleteObject(desertRef)
      .then(() => {
        setimageDownload(null);
        setisloading(false);
        setTimeout(() => {
          toast.error("Image Deleted")
        }, 2000);
      })
      .catch((error) => {
       window.alert("NOT deleted user")
      });
  };

const submitonproduct = () =>{


if(oliiteam  === "" || sprice === ""){
  toast.success("Please fill up your data")
}

 if(oliiteam || sprice){
  try {
    const data = {
      Product_name : oliiteam,
      Product_price: sprice,
      Product_Allimage: imageDownloadimage,
    }
  
    newProduct(data).then((res)=>{
      console.log(res)
      setoliiteam("")
      setsprice("")
      setimageDownload(null)
    })
    getAllproducs().then((data)=>{
      dispatch(setproducts(data))
    })
  } catch (error) {
    console.log("data not add",error)
  }
 }
}

  // console.log(imageDownloadimage)
  return (
    <div className="w-full flex items-center justify-center pt-6">
      <div className="border border-gray-300 roun p-4 flex flex-col items-center justify-center gap-4">
        <InputBox
          type="text"
          placeholder={"Find Product"}
          statevalue={oliiteam}
          stateFunc={setoliiteam}
        />
        <InputBox
          type="number"
          placeholder={"Product Price here"}
          statevalue={sprice}
          stateFunc={setsprice}
        />

        <div className="md:w-[500px] bg-white md:h-[350px] rounded-b-lg shadow-2xl cursor-pointer">
          {isloading ? (
            <>
              <div className="w-full h-full flex flex-col items-center justify-evenly">
                <div
                  className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                  role="status"
                >
                  <span className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]">
                    Loading...
                  </span>
                </div>
                {/* {proseess} */}
                {Math.round(proseess > 0) && (
                  <div className="w-full flex flex-col items-center justify-center gap-3 px-14">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-red-600 h-2.5 transition-all rounded-full duration-300 ease-in-out"
                        style={{ width: `${Math.round(proseess)}%` }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              {!imageDownloadimage ? (
                <>
                  <label>
                    <div className="w-full h-full flex items-center justify-center cursor-pointer flex-col">
                      <div className="flex flex-col justify-center items-center cursor-pointer">
                        <p className="text-2xl">
                          <AiOutlineCloudUpload className="animate-bounce" />
                        </p>
                        <h2 className="font-sans">Click to upload an image</h2>
                      </div>
                    </div>

                    <input
                      type="file"
                      name="upload-data"
                      accept="image/*"
                      onChange={uploaimage}
                      className="w-0 h-0"
                    />
                  </label>
                </>
              ) : (
                <>
                  <div className="relative w-[500px] h-[350px] object-cover rounded-md">
                    <img
                      src={imageDownloadimage}
                      className="w-full h-full"
                      alt="ruko jara..."
                    />

                    <div className="absolute top-0 right-0 m-5 p-3 bg-gray-300 rounded-full shadow-md">
                      <AiFillDelete
                        className="animate-pulse"
                        size={20}
                        onClick={deleteImageofSystem}
                      />
                    </div>
                  </div>
                </>
              )}
            </>
          )}
        </div>
        <motion.button
          {...buttonclick}
          className="w-9/12 bg-[#2F3B3B] py-2 rounded-md text-white hover:bg-[#445959]"
          onClick={submitonproduct}
        >
          save
        </motion.button>
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

export const InputBox = ({ type, placeholder, statevalue, stateFunc }) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className="w-[500px] px-4 py-3 rounded-md shadow-lg text-center"
        value={statevalue}
        onChange={(e) => stateFunc(e.target.value)}
      />
    </>
  );
};

export default Addpro;
