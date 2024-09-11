import React, { useContext } from 'react'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 mx-16 justify-center items-center">
            <div className="flex flex-col gap-4 lg:gap-2 sm:flex-col sm:gap-2 sm:items-center">
                <div className="flex flex-col gap-4 lg:gap-2">
                    <img src={product.image} alt="" className="h-40 lg:h-30 sm:h-20" />
                    <img src={product.image} alt="" className="h-40 lg:h-30 sm:h-20" />
                    <img src={product.image} alt="" className="h-40 lg:h-30 sm:h-20" />
                    <img src={product.image} alt="" className="h-40 lg:h-30 sm:h-20" />
                </div>
                <div>
                    <img className="w-[586px] h-[700px] lg:w-auto lg:h-[510px] sm:w-full sm:h-[300px]" src={product.image} alt="" />
                </div>
            </div>
            <div className="flex flex-col ml-16 lg:ml-8 sm:ml-0">
                <h1 className="text-[#3d3d3d] text-4xl font-bold lg:text-3xl sm:text-lg"> {product.name} </h1>
                <div className="flex items-center mt-3 gap-1 text-[#1c1c1c] text-sm lg:text-xs sm:gap-0.5">
                    <img src={star_icon} alt="" className="w-4 lg:w-5 sm:w-2" />
                    <img src={star_icon} alt="" className="w-4 lg:w-5 sm:w-2" />
                    <img src={star_icon} alt="" className="w-4 lg:w-5 sm:w-2" />
                    <img src={star_icon} alt="" className="w-4 lg:w-5 sm:w-2" />
                    <img src={star_dull_icon} alt="" className="w-4 lg:w-5 sm:w-2" />
                    <p className="text-xs lg:text-[16px] font-semibold mx-2">(122)</p>
                </div>
                <div className="flex my-10 gap-8 text-2xl font-bold lg:text-xl sm:gap-4">
                    <div className="text-gray-500 line-through">${product.old_price}</div>
                    <div className="text-red-500">${product.new_price}</div>
                </div>
                <div className="text-gray-600 text-xl font-semibold mb-14 lg:text-xl sm:text-sm">
                    A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.
                </div>
                <div className="mb-14">
                    <h1 className="text-gray-600 text-xl font-semibold lg:text-lg sm:text-base">Select Size</h1>
                    <div className="flex gap-5 mt-7 lg:gap-3 sm:gap-2">
                        <div className="px-6 py-4 bg-gray-100 border border-gray-300 rounded-md cursor-pointer text-center text-sm lg:px-4 lg:py-3 lg:text-lg sm:px-3 sm:py-2">S</div>
                        <div className="px-6 py-4 bg-gray-100 border border-gray-300 rounded-md cursor-pointer text-center text-sm lg:px-4 lg:py-3 lg:text-lg sm:px-3 sm:py-2">M</div>
                        <div className="px-6 py-4 bg-gray-100 border border-gray-300 rounded-md cursor-pointer text-center text-sm lg:px-4 lg:py-3 lg:text-lg sm:px-3 sm:py-2">L</div>
                        <div className="px-6 py-4 bg-gray-100 border border-gray-300 rounded-md cursor-pointer text-center text-sm lg:px-4 lg:py-3 lg:text-lg sm:px-3 sm:py-2">XL</div>
                        <div className="px-6 py-4 bg-gray-100 border border-gray-300 rounded-md cursor-pointer text-center text-sm lg:px-4 lg:py-3 lg:text-lg sm:px-3 sm:py-2">XXL</div>
                    </div>
                </div>
                <button onClick={() => { addToCart(product.id) }} className="px-10 py-5 w-48 font-semibold text-white bg-red-500 mb-10 rounded-md hover:bg-red-600 lg:w-36 lg:px-5 lg:py-3 sm:w-32 sm:px-4 sm:py-2">Add To Cart</button>
                <p className="text-gray-600 text-sm lg:text-lg sm:text-lg"><span className="font-semibold">Category :</span> Women, T-Shirt, Crop Top</p>
                <p className="text-gray-600 text-sm lg:text-lg sm:text-lg"><span className="font-semibold">Tags :</span> Modern, Latest</p>
            </div>
        </div>
    )
}

export default ProductDisplay;
