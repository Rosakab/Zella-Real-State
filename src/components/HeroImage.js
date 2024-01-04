


import React from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import {useState} from "react";
import { slides } from "./assets/imageData";

const HeroImage = () => {

  const [currentIndex, setCurrentIndex]= useState(0);

const prevSlide=()=>{
    const isFirstSlide = currentIndex===0;
    const newIndex = isFirstSlide ? slides.length-1 : currentIndex-1
    setCurrentIndex(newIndex);
}

const nextSlide=()=>{
   const isLastSlide = currentIndex===slides.length-1;
   const newIndex = isLastSlide ? 0 : currentIndex +1;
   setCurrentIndex(newIndex);
}

  return (
    <div className="max-w-[1400px] h-80 md:h-[580px] w-full m-auto p-4 relative ">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500   shadow-xl "
      ></div>
      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-rose-700 font-bold text-2xl p-2 cursor-pointer">
        <IoIosArrowDropleft size={30} onClick={prevSlide} />
      </div>

      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-rose-700 font-bold text-2xl p-2  cursor-pointer">
        <IoIosArrowDropright size={30} onClick={nextSlide} />
      </div>
    </div>
  );
};

export default HeroImage;