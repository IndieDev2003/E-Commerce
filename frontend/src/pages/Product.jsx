import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { products, currency,addToCart } = useContext(ShopContext);
  const { productId } = useParams();
  const [productData, setProductData] = useState();
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");
  // console.log(productId)

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        // console.log(item);
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
          <div className="sm:w-[20%] flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-3/8">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer rounded-md overflow-hidden "
                alt="product-image"
              />
            ))}
          </div>
          <div className="w-full ">
            <img
              src={image}
              alt="main-image"
              className="w-full h-auto rounded-md transition duration-700"
            />
          </div>
        </div>
        {/*----------------- Product Info ----------------- */}
        <div className="flex-1 ">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2 ">
            <img src={assets.star_icon} className="w-3.5" alt="" />
            <img src={assets.star_icon} className="w-3.5" alt="" />
            <img src={assets.star_icon} className="w-3.5" alt="" />
            <img src={assets.star_icon} className="w-3.5" alt="" />
            <img src={assets.star_dull_icon} className="w-3.5" alt="" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 ${
                    item === size ? "border-orange-500 border-2 rounded-lg" : ""
                  } bg-gray-200 active:bg-gray-400 hover:bg-gray-300 hover:rounded-md  `}
                >
                  {item}
                </button>
              ))}
            </div>

            <button onClick={(e)=>addToCart(productData._id,size)} className="sm:max-w-fit bg-black text-white px-8 py-3 text-sm active:bg-gray-700">
              ADD TO CART
            </button>
            <hr className="mt-8 sm:w-4/5 h-[4px]" />
            <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
              <p>100% Original Product</p>
              <p>Cash On Delivery Avaliable</p>
              <p>Easy return and Exchange Policy within 7 Days</p>
            </div>
          </div>
        </div>
      </div>
      {/* Description and Review Section */}
      <div className="mt-20 ">
        <div className="flex ">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews(122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            quaerat asperiores deserunt voluptatum cum itaque debitis, quo dolor
            inventore adipisci fuga totam in sequi facere esse at explicabo
            illum. Eius dignissimos cum, ratione esse soluta ullam fugiat.
            Necessitatibus officia similique impedit esse eum amet ab vero ut
            est? Nemo, quisquam?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
            dicta alias suscipit, nemo reprehenderit eveniet inventore vel sit
            quod sed.
          </p>
        </div>
      </div>
      {/* Display Related Products */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
