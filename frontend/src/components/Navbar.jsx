import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";

const Navbar = () => {
  const{showSearch,setShowSearch}=useContext(ShopContext)
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      {/* Logo */}
      <Link to={'/'}>
        <img src={assets.logo} alt="site-logo" className="w-32" />
      </Link>
      {/* Navigation Links */}
      <ul className="hidden sm:flex gap-5 text-gray-700">
        <NavLink to="/" className={"flex flex-col items-center gap-1"}>
          <p>Home</p>
          <hr className="w-2/4 border-none h-[2px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink
          to="/collection"
          className={"flex flex-col items-center gap-1"}
        >
          <p>Collection</p>
          <hr className="w-2/4 border-none h-[2px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className={"flex flex-col items-center gap-1"}>
          <p>About</p>
          <hr className="w-2/4 border-none h-[2px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className={"flex flex-col items-center gap-1"}>
          <p>Contact</p>
          <hr className="w-2/4 border-none h-[2px] bg-gray-700 hidden" />
        </NavLink>
      </ul>
      {/*  */}
      <div className="flex items-center gap-6">
        <img onClick={()=>setShowSearch(true)} src={assets.search_icon} className="w-5 cursor-pointer" alt="" />
        <div className="group relative">
          <img
            src={assets.profile_icon}
            className="w-5 cursor-pointer"
            alt=""
          />
          <div className="group-hover:block hidden group-enabled:block absolute dropdown-menu right-8 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Log Out</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-xs ">
            10
          </p>
        </Link>

        {/* Mobile Menu */}
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden block"
          alt=""
        />
      </div>
      {/* SideBar Menu For Small Screens */}
      <div
        className={`absolute h-full top-0 right-0 overflow-hidden bg-gray-300 transition-all duration-700 ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img src={assets.dropdown_icon} className="h-4 rotate-180" alt="" />
            <p>Back</p>
          </div>
          <NavLink
            className={"py-2 pl-6 border-b-2"}
            onClick={() => setVisible(false)}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={"py-2 pl-6 border-b-2"}
            onClick={() => setVisible(false)}
            to="/collection"
          >
            Collection
          </NavLink>
          <NavLink
            className={"py-2 pl-6 border-b-2"}
            onClick={() => setVisible(false)}
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className={"py-2 pl-6 border-b-2"}
            onClick={() => setVisible(false)}
            to="/contact"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
