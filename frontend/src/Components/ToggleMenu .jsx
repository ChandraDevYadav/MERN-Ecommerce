import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

const ToggleMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menu, setMenu] = useState("shop");
  const menuRef = useRef();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Toggle Button */}
      <button
        onClick={handleToggle}
        className="text-gray-800 focus:outline-none z-20"
      >
        {isOpen ? (
          <svg
            className="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {/* Menu */}
      {isOpen && (
        <ul
          ref={menuRef}
          className="absolute top-full left-[-20px] bg-white shadow-md text-gray-800 px-4"
        >
            <li onClick={() => setMenu("shop")} className="mb-1">
              <Link to="/" className="no-underline">
                Shop
              </Link>
              {menu === "shop" && (
                <hr className="w-3/4 bg-red-500 h-1 rounded-md" />
              )}
            </li>
            <li onClick={() => setMenu("mens")} className="mb-1">
              <Link to="/mens" className="no-underline">
                Men
              </Link>
              {menu === "mens" && (
                <hr className="w-3/4 bg-red-500 h-1 rounded-md" />
              )}
            </li>
            <li onClick={() => setMenu("womens")} className="mb-1">
              <Link to="/womens" className="no-underline">
                Women
              </Link>
              {menu === "womens" && (
                <hr className="w-3/4 bg-red-500 h-1 rounded-md" />
              )}
            </li>
            <li onClick={() => setMenu("kids")} className="mb-3">
              <Link to="/kids" className="no-underline">
                Kids
              </Link>
              {menu === "kids" && (
                <hr className="w-3/4 bg-red-500 h-1 rounded-md" />
              )}
            </li>
          </ul>
      )}
    </div>
  );
};

export default ToggleMenu;
