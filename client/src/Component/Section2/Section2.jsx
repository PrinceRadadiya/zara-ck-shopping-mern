import React from "react";

const Section2 = () => {
  return (
    <div className="w-full h-screen text-black">
      <div className="max-w-[1200px] mx-auto mt-8 grid md:grid-cols-2 md:text-end">
        <div className="p-4 md:order-first order-last">
          <img
            className="w-full md:h-[500px] h-[430px] md shadow-2xl object-cover"
            src="https://drive.google.com/uc?export=download&id=1GenUqE7fmNYYCpfRXQ5VIKi3OobNTwUZ"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center md:px-0 px-4">
          <p className="text-2xl font-serif">zara</p>
          <p className="text-5xl">prince store</p>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            consequatur sapiente aliquid, dignissimos tenetur provident
            recusandae velit minima obcaecati eligendi, saepe doloremque
            consectetur placeat nihil quaerat debitis nemo aliquam nesciunt!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section2;
