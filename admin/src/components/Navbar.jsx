import React from "react";

import { assets } from "../assets/assets";

const Navbar = ({ setToken }) => {
  return (
    <div className="flex items-center justify-between py-2 px-[4%] ">
      <img src={assets.logo} className="h-10 w-[max(10%,80px)]" alt="admin-logo" />
      <button
        onClick={() => setToken("")}
        className="bg-gray-600 hover:bg-red-400 hover:text-black text-white px-5 sm:px-7 py-2 sm:py-2 sm:text-sm rounded-full"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
