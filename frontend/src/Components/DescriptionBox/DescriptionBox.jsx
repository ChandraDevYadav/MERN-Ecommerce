import React, { useState } from 'react';

const DescriptionBox = () => {
  const [activeTag, setActiveTag] = useState('Description');

  const handleTagClick = (tag) => {
    setActiveTag(tag);
  };

  return (
    <div className="mx-4 md:mx-16 my-24">
      <div className="flex">
        <button
          onClick={() => handleTagClick('Description')}
          className={`flex items-center justify-center text-base font-semibold w-40 h-16 border border-gray-300 ${activeTag === 'Description' ? 'bg-gray-100 text-gray-600' : 'bg-white text-gray-700'}`}
        >
          Description
        </button>
        <button
          onClick={() => handleTagClick('Review')}
          className={`flex items-center justify-center text-base font-semibold w-40 h-16 border border-gray-300 ${activeTag === 'Review' ? 'bg-gray-100 text-gray-600' : 'bg-white text-gray-700'}`}
        >
          Review (122)
        </button>
      </div>
      <div className="flex flex-col gap-5 border border-gray-300 p-12 pb-16 mt-4">
        {activeTag === 'Description' && (
          <>
            <p>An e-commerce website is an online platform that facilitates buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals showcase their products, interact with customers, and conduct transactions without the need for physical presence. E-commerce websites have gained immense popularity due to their convenient accessibility, and the global reach they offer.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt minus, aperiam voluptates, necessitatibus dolorum temporibus ipsam accusantium vero molestiae earum, dolorem possimus tempora blanditiis eaque praesentium nesciunt eligendi voluptatem officiis!</p>
          </>
        )}
        {activeTag === 'Review' && (
          <p>Reviews content goes here...</p>
        )}
      </div>
    </div>
  );
};

export default DescriptionBox;

