import axios from "axios";
import React, { useEffect, useState } from "react";
import { currency, backendURL } from "../App";

import { toast } from "react-toastify";

const List = ({ token }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(backendURL + "/api/product/list", {
        headers: { token },
      });

      if (response.data.success) {
        setList(response.data.products);
        // console.log(list)
      } else {
        toast.error(response.data.message);
      }

      //start of catch block
    } catch (error) {
      // console.log(error);
      toast.error(error.message);
    }
  };

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(
        backendURL + "/api/product/remove",
        { id },
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        await fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {}
  };

  useEffect(() => {
    fetchList();
    // console.log(list)
  }, []);

  return (
    <>
      <p className="mb-1">All Products</p>
      <div className="flex flex-col gap-2">
        {/* List Table Title */}
        <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-2 px-3 border bg-gray-300 text-sm">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className="text-cebter">Action</b>
        </div>

        {/* Products List */}

        {list.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-2 px-3 border bg-gray-300 text-sm"
          >
            <img src={item.image[0]} className="w-12" alt="" />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>
              {currency}
              {item.price}
            </p>
            <p
              onClick={() => removeProduct(item._id)}
              className="text-right md:text-center text-lg cursor-pointer"
            >
              X
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default List;
