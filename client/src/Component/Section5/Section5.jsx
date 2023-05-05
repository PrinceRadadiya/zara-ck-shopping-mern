import React from "react";

const Section5 = () => {
  const app = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1020370/pexels-photo-1020370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "zara",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/7679682/pexels-photo-7679682.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      name: "zara",
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/7668398/pexels-photo-7668398.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      name: "zara",
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/7667437/pexels-photo-7667437.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      name: "zara",
    },
    {
      id: 5,
      img: "https://images.pexels.com/photos/5418889/pexels-photo-5418889.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      name: "ck",
    },
    {
      id: 6,
      img: "https://images.pexels.com/photos/8274720/pexels-photo-8274720.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      name: "ck",
    },
    {
      id: 7,
      img: "https://images.pexels.com/photos/6050421/pexels-photo-6050421.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      name: "ck",
    },
    {
      id: 8,
      img: "https://images.pexels.com/photos/5264907/pexels-photo-5264907.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      name: "ck",
    },
  ];

  const zara = () => {};

  return (
    <div className="w-full h-full bg-[#EAF1F1] mt-14 py-12">
      <p className="text-center text-4xl font-bold p-5">prince.com</p>
      <div className="flex justify-center gap-3">
        <button
          className="border border-black p-2 w-[100px] h-[40px] hover:text-white hover:bg-black duration-150"
          onClick={zara}
        >
          ZARA
        </button>
        <button className="border border-black p-2 w-[100px] h-[40px] hover:text-white hover:bg-black duration-150">
          CK
        </button>
      </div>
      <div className="grid md:grid-cols-4">
        {app.map((curr, index) => {
          return (
            <div className="p-4" key={index}>
              <img
                src={curr.img}
                alt="hello"
                className="h-[500px] hover:scale-90 duration-300 w-[400px]"
              />
            </div>
          );
        })}
      </div>
      <hr className="m-4 border-black" />
    </div>
  );
};

export default Section5;
