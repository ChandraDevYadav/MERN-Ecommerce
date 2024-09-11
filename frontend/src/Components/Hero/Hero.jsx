import React from 'react';
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png';
import hero_image from '../Assets/hero_image.png';

const Hero = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22] items-center justify-around">
      <div className=" justify-center items-center gap-5 pl-20 md:pl-10 lg:pl-[15rem] mt-10">
        <h2 className="text-black text-2xl md:text-xl font-semibold">NEW ARRIVALS ONLY</h2>
        <div>
          <div className="flex items-center gap-5">
            <p className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900">New</p>
            <img src={hand_icon} alt="Hand Icon" className="w-20 md:w-16 lg:w-24" />
          </div>
          <p className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900">Collection</p>
          <p className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900">For Everyone</p>
        </div>
        <div className="flex justify-center items-center gap-3 w-64 h-16 lg:w-72 lg:h-20 rounded-lg mt-5 bg-red-500 text-white text-lg md:text-base lg:text-xl font-medium cursor-pointer">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="Arrow Icon" className="w-6 md:w-5" />
        </div>
      </div>
      <div className="items-center justify-center">
        <img src={hero_image} alt="Hero" className="w-[300px] md:w-[500px] lg:w-[500px] h-auto ml-20" />
      </div>
    </div>
  );
}

export default Hero;
