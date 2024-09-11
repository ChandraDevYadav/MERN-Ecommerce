import React, { useContext, useRef, useState } from "react";
import logo from "../Assets/logo.png";
import basket_after from "../Assets/basket_after.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import nav_dropdown from "../Assets/nav_dropdown.png";
import profile_image from "../Assets/profile_image.png";
import ToggleMenu from "../ToggleMenu ";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };

  return (
    <div className="flex justify-between items-center py-4 px-5 shadow-md">
      <div className="md:hidden">
      <ToggleMenu/>
      </div>
      <div className="flex items-center gap-4">
        <img src={logo} alt="Logo" className="w-10" />
        <p className="text-gray-800 text-2xl font-bold">Trendify</p>
      </div>
      <ul
        ref={menuRef}
        className="hidden md:flex items-center gap-12 text-gray-600 font-medium text-lg"
      >
        <li onClick={() => setMenu("shop")}>
          <Link to="/" className="no-underline">
            Shop
          </Link>
          {menu === "shop" && (
            <hr className="w-3/4 bg-red-500 h-1 rounded-md" />
          )}
        </li>
        <li onClick={() => setMenu("mens")}>
          <Link to="/mens" className="no-underline">
            Men
          </Link>
          {menu === "mens" && (
            <hr className="w-3/4 bg-red-500 h-1 rounded-md" />
          )}
        </li>
        <li onClick={() => setMenu("womens")}>
          <Link to="/womens" className="no-underline">
            Women
          </Link>
          {menu === "womens" && (
            <hr className="w-3/4 bg-red-500 h-1 rounded-md" />
          )}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link to="/kids" className="no-underline">
            Kids
          </Link>
          {menu === "kids" && (
            <hr className="w-3/4 bg-red-500 h-1 rounded-md" />
          )}
        </li>
      </ul>
      <div className="flex items-center gap-12">
        <Link to="cart" className="relative">
          <img src={basket_after} alt="Cart" className="w-12" />
          <div className="absolute -top-2 -right-3 rounded-full bg-red-600 text-white w-4 h-4 flex items-center justify-center text-sm">
            {getTotalCartItems() > 0 ? (
              <span className="text-white font-semibold">{getTotalCartItems()}</span>
            ) : (
              <span className="bg-red-600 w-1 h-1 rounded-full"></span>
            )}
          </div>
        </Link>
        {localStorage.getItem("auth-token") ? (
          <button
            className=""
            onClick={() => {
              localStorage.removeItem("auth-token");
              window.location.replace("/");
            }}
          >
            <img src={profile_image} alt="" className="w-10" />
          </button>
        ) : (
          <Link to="/login">
            <button className="border border-gray-400 rounded-full px-6 py-2 text-gray-600 font-medium">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
