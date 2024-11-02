import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import { assets } from "../assets/assets";
import { useLocation } from "react-router-dom";
import Collection from "../pages/Collection";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  const [visible, setVisible] = useState(true);

  const location = useLocation();
  useEffect(() => {
    // console.log(location.pathname);

    if (location.pathname.includes("collection")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  return showSearch && visible ? (
    <div className="border-t border-b bg-gray-200 text-center">
      <div className="inline-flex items-center justify-center border border-gray-500 px-5 py-2 mb-1 mt-5 mx-3 rounded-full w-3/4 sm:w-1/2 ">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-none bg-inherit text-sm"
          type="text"
          name=""
          placeholder="Search"
        />
        <img src={assets.search_icon} className="w-4" alt="" />
      </div>
      <img
        onClick={() => setShowSearch(false)}
        src={assets.cross_icon}
        className="inline w-4 cursor-pointer"
        alt=""
      />
    </div>
  ) : null;
};

export default SearchBar;
