import React, { useContext, useState } from "react";

import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { ShopContext } from "../Context/ShopContext";

const PlaceOrder = () => {
  const { navigate } = useContext(ShopContext);
  const [method, setMethod] = useState("cod");
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-2 pt-5 sm:pt-14 min-h-[80vh] border-t">
      {/* Left Side */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sn:text-2xl my-3">
          <Title Text1={"Delivery"} Text2={"Information"} />
        </div>

        <div className="flex gap-3">
          <input
            type="text"
            name=""
            className="border border-gray-300 rounded py-2 px-3 w-ull"
            placeholder="First Name"
          />
          <input
            type="text"
            name=""
            className="border border-gray-300 rounded py-2 px-3 w-full"
            placeholder="Last Name"
          />
        </div>
        <input
          type="email"
          name=""
          className="border border-gray-300 rounded py-2 px-3 w-full"
          placeholder="Email Address"
        />
        <input
          type="text"
          name=""
          className="border border-gray-300 rounded py-2 px-3 w-full"
          placeholder="Street"
        />
        <div className="flex gap-3">
          <input
            type="text"
            name=""
            className="border border-gray-300 rounded py-2 px-3 w-ull"
            placeholder="City"
          />
          <input
            type="text"
            name=""
            className="border border-gray-300 rounded py-2 px-3 w-full"
            placeholder="State"
          />
        </div>
        <div className="flex gap-3">
          <input
            type="number"
            name=""
            className="border border-gray-300 rounded py-2 px-3 w-ull"
            placeholder="Zipcode"
          />
          <input
            type="text"
            name=""
            className="border border-gray-300 rounded py-2 px-3 w-full"
            placeholder="Country"
          />
        </div>
        <input
          type="number"
          name=""
          className="border border-gray-300 rounded py-2 px-3 w-full"
          placeholder="Phone"
        />
        <div></div>
      </div>

      {/* Right Side */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="mt-12">
          <Title Text1={"Payment"} Text2={"Method"} />
          {/* Text Payment Method Selection */}
          <div className="flex gap-3 flex-col sm:flex-row ">
            <div
              onClick={() => setMethod("stripe")}
              className="flex items-center gap-3 border rounded-md p-2 px-3 cursor-pointer"
            >
              <p
                className={`transition ${
                  method === "stripe" ? "bg-green-500" : ""
                } min-w-4 h-4 border rounded-full`}
              ></p>
              <img
                src={assets.stripe_logo}
                className="h-5 mx-4"
                alt="stripe-payment-logo"
              />
            </div>
            <div
              onClick={() => setMethod("razorpay")}
              className="flex items-center gap-3 border rounded-md p-2 px-3 cursor-pointer"
            >
              <p
                className={`transition ${
                  method === "razorpay" ? "bg-green-500" : ""
                } min-w-4 h-4 border rounded-full`}
              ></p>
              <img
                src={assets.razorpay_logo}
                className="h-5 mx-4"
                alt="stripe-payment-logo"
              />
            </div>
            <div
              onClick={() => setMethod("cod")}
              className="flex items-center gap-3 border rounded-md p-2 px-3 cursor-pointer"
            >
              <p
                className={`transition ${
                  method === "cod" ? "bg-green-500" : ""
                } min-w-4 h-4 border rounded-full`}
              ></p>
              <p className="text-gray-500 text-sm font-medium mx-4">
                Cash on Delivery
              </p>
            </div>
          </div>
          <div className="w-full text-end mt-8">
            <button onClick={()=>navigate('/orders')} className="bg-black text-white px-16 py-2 text-sm">Place Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
