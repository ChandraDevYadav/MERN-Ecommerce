import React from 'react'
import arrow_icon from '../Assets/breadcrum_arrow.png'

const Breadcrums = (props) => {
  const { product } = props;

  return (
    <div className="flex items-center gap-2 text-gray-600 font-semibold text-sm md:text-base capitalize my-8 mx-4 md:mx-20">
      HOME 
      <img src={arrow_icon} alt="Arrow" className="w-4" /> 
      SHOP 
      <img src={arrow_icon} alt="Arrow" className="w-4" /> 
      {product.category}
      <img src={arrow_icon} alt="Arrow" className="w-4" /> 
      {product.name}
    </div>
  )
}

export default Breadcrums;
