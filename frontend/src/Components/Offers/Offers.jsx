import React from 'react'
import exclusive_image from '../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className="w-10/12 flex mx-auto px-[140px] p-20 mb-8 mt-24 bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22] lg:px-[80px] lg:mb-30 md:px-[60px] md:mb-20 md:h-[60vh] sm:px-4 sm:mb-16 sm:h-[25vh] justify-center align-middle">
      <div className="flex-1 flex flex-col justify-center">
        <h1 className="text-[#171717] font-bold lg:text-[60px] md:text-[30px] text-[40px]">Exclusive Offers For You</h1>
        <p className="text-[#171717] font-bold lg:text-[40px] md:text-[16px] text-[20px] my-4">ONLY ON BEST SELLERS PRODUCTS</p>
        <p className="text-[#171717] font-bold lg:text-[20px] md:text-[30px] sm:text-[22px]">Get the huge discount the various products of the popular items and get more discount, free delivery charge</p>
        <button className="w-[282px] h-[70px] bg-[#ff4141] text-white text-[22px] font-medium rounded-[35px] mt-8 cursor-pointer lg:w-[220px] lg:h-[50px] lg:text-[18px] md:w-[160px] md:h-[40px] md:text-[16px] sm:w-[140px] sm:h-[30px] sm:text-[12px] sm:mt-3 md:mt-6">Check Now</button>
      </div>
      <div className="flex-1 flex items-center justify-center pt-12 lg:pt-8 md:pt-2 sm:pt-0">
        <img src={exclusive_image} alt="" className="w-[400px] lg:w-[300px] md:w-[200px] sm:w-[180px]" />
      </div>
    </div>
  )
}

export default Offers;
