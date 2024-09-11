import React, { useEffect, useState } from 'react'
import Item from '../Item/Item'

const Popular = () => {
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/popularinwomen')
      .then((response) => response.json())
      .then((data) => setPopularProducts(data));
  }, []);

  return (
    <div className="items-center gap-2.5">
      <h1 className="text-[#171717] text-[30px] text-center font-semibold md:text-[40px] lg:text-[50px] mt-8">POPULAR IN WOMEN</h1>
      {/* <hr className="w-[200px] h-[6px] rounded-[10px] bg-[#252525] md:w-[160px] md:h-[4px] lg:w-[120px] lg:h-[3px] sm:w-[100px]" /> */}
      <div className="mt-12 gap-8 gap-y-6 md:gap-y-0 px-10 md:px-40 lg:gap-10 md:gap-3 sm:grid grid-cols-1 md:grid-cols-3 sm:gap-14 sm:mt-5">
        {popularProducts.map((item, i) => (
          <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        ))}
      </div>
    </div>
  )
}

export default Popular;
