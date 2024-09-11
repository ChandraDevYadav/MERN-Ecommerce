import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/delete.png";

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

  return (
    <div className="mx-4 md:mx-20 my-8">
      <div className="grid grid-cols-7 items-center gap-12 md:gap-20 font-semibold text-gray-600 text-base md:text-lg py-5">
        <p>Products</p>
        <p className="col-span-2">Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className="border-gray-300 mb-4" />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="grid grid-cols-7 items-center gap-12 md:gap-20 text-sm md:text-base py-4">
                <img className="h-12" src={e.image} alt="" />
                <p className="font-semibold text-md col-span-2">{e.name}</p>
                <p className="font-semibold text-md">Rs {e.new_price}</p>
                <button className="w-16 h-12 border border-gray-300 bg-white text-center font-semibold">{cartItems[e.id]}</button>
                <p className="font-semibold text-md">Rs {e.new_price * cartItems[e.id]}</p>
                <img
                  className="w-8 cursor-pointer"
                  onClick={() => removeFromCart(e.id)}
                  src={remove_icon}
                  alt="Remove"
                />
              </div>
              <hr className="border-gray-300" />
            </div>
          );
        }
        return null;
      })}
      <div className="grid grid-cols-3 gap-12 justify-around mt-16">
        <div className="col-span-2 flex-col gap-6 mb-8 md:mb-0 md:mr-20 w-3/4">
          <h1 className="text-2xl font-bold">Cart Totals</h1>
          <div>
            <div className="flex justify-between py-3">
              <p className="font-semibold text-lg">Subtotal</p>
              <p className="font-semibold text-lg">Rs {getTotalCartAmount()}</p>
            </div>
            <hr className="border-gray-300" />
            <div className="flex justify-between py-3">
              <p className="font-semibold text-lg">Delivery Fee</p>
              <p className="font-semibold text-lg">Rs 50</p>
            </div>
            <hr className="border-gray-300" />
            <div className="flex justify-between py-3">
              <h3 className="font-bold text-xl">Total</h3>
              <h3 className="font-bold text-xl">Rs {getTotalCartAmount()+50}</h3>
            </div>
          </div>
          <button className="bg-red-500 text-white py-3 mt-4 px-6 text-lg rounded-md font-semibold hover:bg-red-600">
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-semibold text-2xl">If you have a promo code, enter it here</p>
          <div className="flex items-center justify-between bg-gray-200 p-2 mt-4 w-3/4 rounded-md">
            <input
              className="bg-transparent outline-none text-sm px-4"
              type="text"
              placeholder="Promo code"
            />
            <button className="bg-black text-white px-4 py-2 text-md font-semibold rounded-md">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
