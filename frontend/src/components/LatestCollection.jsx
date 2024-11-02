import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProduct, setLatestProducts] = useState([]);
  // console.log(products);
  useEffect(() => {
    setLatestProducts(products.splice(0, 10));
  }, []);
  return (
    <div className="my-10 ">
      <div className="text-center py-8 text-3xl">
        <Title Text1={"Latest"} Text2={"Collection"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
          tempore!
        </p>
      </div>
      {/* Products Here */}
          <div className="grid grid-cols-2 sm:grid-col-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-2">
              {/* <ProductItem id={products[0]._id} image={products[0].image} name={products[0].name}/> */}
        {latestProduct.map((item,ind) => (
          <ProductItem
            key={ind}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
