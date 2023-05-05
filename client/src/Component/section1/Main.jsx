import React, { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";

const Main = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/1154861/pexels-photo-1154861.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://static.zara.net/photos///contents/mkt/spots/ss23-north-man-new/subhome-xmedia-17//w/1600/IMAGE-landscape-fill-e2befde9-8901-4fb0-a42b-c5e9d2a34cd0-default_0.jpg?ts=1682349705439",
    "https://static.zara.net/photos///contents/mkt/spots/ss23-north-man-ramadan/subhome-xmedia-11//w/1600/IMAGE-landscape-fill-4208d23e-f994-4aef-b2eb-c269dace2b1d-default_0.jpg?ts=1679048406618",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 5 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 5 ? 0 : (prev) => prev + 1);
  };
  return (
    // <div className="bg-[#EAF1F1] text-black md:py-24 pt-24">
    <div className="slider md:h-[750px] h-auto w-screen md:w-screen relative overflow-hidden md:py-24 pt-24">
      <div
        className="container flex ease-in duration-500"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((cur, id) => {
          return (
            <img
              key={id}
              src={cur}
              alt=""
              className="object-cover md:w-full md:h-full w-full h-auto"
            />
          );
        })}
      </div>
      <div className="icons md:absolute flex left-0 right-0 items-center justify-center bottom-[100px] gap-3 md:mt-0 m-6">
        <div
          className="icon w-[50px] h-[50px] border border-solid border-black flex items-center justify-center cursor-pointer hover:bg-white transform ease-in-out"
          onClick={prevSlide}
        >
          <WestOutlinedIcon />
        </div>
        <div
          className="icon w-[50px] h-[50px] border border-solid border-black flex items-center justify-center cursor-pointer hover:bg-white"
          onClick={nextSlide}
        >
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Main;


