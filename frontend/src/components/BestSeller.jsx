import React, { useContext, useEffect, useState } from "react";

import Title from "./Title";
import ProductItem from "./ProductItem";
import { ShopContext } from "../Context/ShopContext";

const BestSelller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    setBestSeller(products.splice(0,5 ))
  }, []);

  return (
    <div className="my-10">
      {/* Title Here */}
      <div className="text-center py-8 text-3xl">
        <Title Text1={"Best"} Text2={"Seller"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
          tempore!
        </p>
      </div>
      {/* Products Here */}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestSeller.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSelller;
