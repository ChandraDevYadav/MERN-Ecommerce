import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className='w-full'>
      <img className='block mx-[0.5rem] h-[200px] md:mx-[7.8rem] my-8 w-[100%] md:w-[82%]' src={props.banner} alt="" />
      <div className="flex justify-between items-center mx-8 md:mx-16 lg:mx-32 mb-4">
        <p className='font-semibold'>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="flex items-center border border-gray-400 rounded-full px-4 py-2">
          <span>Sort by</span>
          <img className='ml-2' src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-8 md:mx-16 lg:mx-32 mb-8">
        {all_product.map((item, i) => (
          props.category === item.category && (
            <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          )
        ))}
      </div>
      <div className="flex justify-center items-center mx-auto my-12 w-[233px] h-[69px] rounded-full bg-gray-200 text-gray-600 text-lg font-medium">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory;
