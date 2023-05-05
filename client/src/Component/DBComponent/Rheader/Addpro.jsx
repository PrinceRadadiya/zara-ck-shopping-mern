import React, { useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { getStorage, ref } from "firebase/storage";
// import { Button, DatePicker } from "antd";

const Addpro = () => {
  const [oliiteam, setoliiteam] = useState("");
  const [sprice, setsprice] = useState("");
  const [isloading, setisloading] = useState(false);
  const [imageDownloadimage, setimageDownload] = useState(null);

  const uploaimage = (e) => {
    setisloading(true);
    // const image = e.target.files[0];
    // const storage = getStorage()
    // const storageref = ref();
  };

  return (
    <div className="w-full flex items-center justify-center pt-6 px-24">
      <div className="w-full border border-gray-300 roun p-4 flex flex-col items-center justify-center gap-4">
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

        <div className="md:w-[500px] bg-white md:h-[300px] rounded-b-lg shadow-2xl cursor-pointer">
          {isloading ? (
            <>
              <div className="w-full h-full flex flex-col items-center justify-evenly">
                <div
                  className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                  role="status"
                >
                  <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                    Loading...
                  </span>
                </div>
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
                      name="upload-image"
                      accept="image/*"
                      onChange={uploaimage}
                    />
                  </label>
                </>
              ) : (
                <></>
              )}
            </>
          )}
        </div>
      </div>
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
