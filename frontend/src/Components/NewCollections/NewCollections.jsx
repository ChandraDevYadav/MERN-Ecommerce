import React, { useEffect, useState } from 'react'
import Item from '../Item/Item'

const NewCollections = () => {
  const [new_collection, setNew_collection] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/newcollections')
      .then((response) => response.json())
      .then((data) => setNew_collection(data));
  }, []);

  return (
    <div className="flex flex-col items-center gap-2 mb-24">
      <h1 className="text-gray-900 text-[2rem] font-semibold">NEW COLLECTIONS</h1>
      <hr className="w-52 h-1.5 rounded bg-gray-800" />
      <div className="grid gap-7 mt-12 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
        {new_collection.map((item, i) => (
          <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        ))}
      </div>
    </div>
  )
}

export default NewCollections;
