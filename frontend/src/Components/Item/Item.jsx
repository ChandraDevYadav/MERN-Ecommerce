import React from "react";
import { Link } from "react-router-dom";
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'

const Item = (props) => {
  return (
    <div className="justify-around transition-transform duration-600 hover:scale-105 mt-10 shadow-lg px-4 py-4">
      <Link to={`/product/${props.id}`}>
        <img
          onClick={() => window.scrollTo(0, 0)}
          src={props.image}
          alt={props.name}
          className="w-full h-[300px]"
        />
      </Link>
      <p className="my-2 text-xl font-semibold">{props.name}</p>
      <div className="grid grid-cols-2 items-center justify-center align-middle">
      <div className="flex gap-5 items-center">
        <div className="text-gray-800 text-lg md:text-sm lg:text-lg font-semibold">
          {props.new_price}
        </div>
        <div className="text-gray-500 text-lg md:text-sm lg:text-lg font-medium line-through">
          {props.old_price}
        </div>
      </div>
      <div className="flex items-center gap-1 text-[#1c1c1c] text-sm lg:text-xs sm:gap-0.5">
                    <img src={star_icon} alt="" className="w-4 lg:w-5 sm:w-2" />
                    <img src={star_icon} alt="" className="w-4 lg:w-5 sm:w-2" />
                    <img src={star_icon} alt="" className="w-4 lg:w-5 sm:w-2" />
                    <img src={star_icon} alt="" className="w-4 lg:w-5 sm:w-2" />
                    <img src={star_dull_icon} alt="" className="w-4 lg:w-5 sm:w-2" />
                    <p className="text-xs lg:text-[16px] font-semibold mx-2">(21)</p>
                </div>
      </div>
    </div>
  );
};

export default Item;
