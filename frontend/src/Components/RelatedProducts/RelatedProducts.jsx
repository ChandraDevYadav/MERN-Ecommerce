import React from 'react';
import data_product from '../Assets/data';
import Item from '../Item/Item';

const RelatedProducts = () => {
  return (
    <div className='flex flex-col items-center gap-2.5 mb-16'>
  <h1 className='text-[#171717] text-5xl font-semibold md:text-4xl lg:text-3xl xl:text-2xl'>Related Products</h1>
  <hr className='w-52 h-1.5 rounded-full bg-[#252525] md:w-40 lg:w-30 xl:w-28' />
  <div className='mt-12 flex flex-wrap gap-7 justify-center md:gap-5 lg:gap-4 xl:gap-3'>
    {data_product.map((item, i) => (
      <Item
        key={i}
        id={item.id}
        name={item.name}
        image={item.image}
        new_price={item.new_price}
        old_price={item.old_price}
      />
    ))}
  </div>
</div>
  );
};

export default RelatedProducts;
