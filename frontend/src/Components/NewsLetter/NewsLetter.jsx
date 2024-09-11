import React from 'react'

const NewsLetter = () => {
  return (
    <>
    {/* <div className="w-10/12 flex flex-col items-center justify-center mx-auto mb-36 px-[140px] bg-gradient-to-b from-[#fde1ff] via-[#e1ffea22] to-transparent gap-8 lg:px-[80px] lg:mb-28 lg:gap-6 md:mb-16 md:gap-5 sm:mb-8 sm:gap-4">
      <h1 className="text-[#454545] text-[55px] font-semibold lg:text-4xl md:text-3xl sm:text-lg text-center">Get Exclusive Offers On Your Email</h1>
      <p className="text-[#454545] text-2xl lg:text-xl md:text-base sm:text-sm text-center">Subscribe to our newsletter and stay updated</p>
      <div className="flex items-center justify-between bg-white w-[300px] h-[40px] rounded-[80px] border border-gray-300 lg:w-[600px] lg:h-[60px] md:w-[500px] md:h-[50px] sm:w-[300px] sm:h-[40px]">
        <input type="email" placeholder="Your Email id" className="w-[500px] ml-7 border-none outline-none text-gray-600 text-lg lg:w-[400px] md:w-[300px] sm:w-[150px] sm:text-xs" />
        <button className="rounded-md bg-black text-white text-lg cursor-pointer sm:text-xs">Subscribe</button>
      </div>
    </div> */}
    <div className='grid grid-cols-1 bg-gradient-to-b text-center justify-center items-center from-[#fde1ff] via-[#e1ffea22] to-transparent'>
      <div className='pb-16'>
      <h1 className="text-4xl md:text-7xl font-semibold mt-12">Get Exclusive Offers On Your Email</h1>
      <p className="text-2xl md:text-5xl font-semibold mt-8">Subscribe to our newsletter and stay updated</p>
      <div className="items-center justify-center text-center flex mt-10 ml-2 md:ml-28">
        <input type="email" placeholder="Your Email id" className="border-2 border-gray-400 w-full md:w-2/5 py-3 text-2xl rounded-lg" />
        <button className="relative right-44 text-2xl bg-red-600 text-white px-4 py-1 rounded-lg">Subscribe</button>
      </div>
      </div>
    </div>
    </>
  )
}

export default NewsLetter;
