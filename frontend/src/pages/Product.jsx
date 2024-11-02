import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import { assets } from "../assets/assets";

const Product = () => {
  const { products ,currency} = useContext(ShopContext);
  const { productId } = useParams();
  const [productData, setProductData] = useState();
  const [image, setImage] = useState("");
  // console.log(productId)

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        console.log(item);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="border-t pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* Product Data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product Images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-3/8">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-[24%]  sm:mb-3 flex-shrink-0 cursor-pointer rounded-md overflow-hidden sm:w-60"
                alt="product-image"
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%] ">
            <img
              src={image}
              alt="main-image"
              className="w-full h-auto rounded-md transition duration-700"
            />
          </div>
        </div>
        {/* '''''''''''''''Product Info'''''''''''''' */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2 ">
            <img src={assets.star_icon} className='w-3.5' alt="" />
            <img src={assets.star_icon} className='w-3.5' alt="" />
            <img src={assets.star_icon} className='w-3.5' alt="" />
            <img src={assets.star_icon} className='w-3.5' alt="" />
            <img src={assets.star_dull_icon} className='w-3.5' alt="" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">{currency}{productData.price}</p>
          <p className="mt-5 text-gray-500 w-4/5">{productData.description}</p>
        </div>
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
