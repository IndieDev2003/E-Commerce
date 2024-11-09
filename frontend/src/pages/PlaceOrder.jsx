import React, { useContext, useEffect, useState } from "react";

import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { ShopContext } from "../Context/ShopContext";
import { formToJSON } from "axios";

const PlaceOrder = () => {
  const {
    navigate,
    backendUrl,
    token,
    cartItems,
    setCartItems,
    getCartAmount,
    delivery_fee,
    products,
  } = useContext(ShopContext);

  const [method, setMethod] = useState("cod");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    try {
      let orderItems = []
      for (const items in cartItems)  {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          const itemInfo = structuredClone(products.find(product => product._id === items));
          if (itemInfo) {
            itemInfo.size = item;
            itemInfo.quantity = cartItems[items][item];
            orderItems.push(itemInfo);
          }
        }
      }
    }
      console.log(orderItems)
      console.log(formData)

    } catch (error) {
      console.log(error)
    }
    // console.log("hello")
  };

  return (
    <form onSubmit={ onSubmitHandler} className="flex flex-col sm:flex-row justify-between gap-2 pt-5 sm:pt-14 min-h-[80vh] border-t">
      {/* Left Side */}
      <form
        onSubmit={(e)=>onSubmitHandler(e)}
        className="flex flex-col gap-4 w-full sm:max-w-[480px]"
      >
        <div className="text-xl sn:text-2xl my-3">
          <Title Text1={"Delivery"} Text2={"Information"} />
        </div>

        <div className="flex gap-3">
          
          <input
            required
            value={formData.firstName}
            onChange={onChangeHandler}
            type="text"
            name="firstName"
            className="border border-gray-300 rounded py-2 px-3 w-ull"
            placeholder="First Name"
          />
          <input
            required
            value={formData.lastName}
            onChange={onChangeHandler}
            type="text"
            name="lastName"
            className="border border-gray-300 rounded py-2 px-3 w-full"
            placeholder="Last Name"
          />
        </div>
        <input
          required
          value={formData.email}
          onChange={onChangeHandler}
          type="email"
          name="email"
          className="border border-gray-300 rounded py-2 px-3 w-full"
          placeholder="Email Address"
        />
        <input
          required
          value={formData.street}
          onChange={onChangeHandler}
          type="text"
          name="street"
          className="border border-gray-300 rounded py-2 px-3 w-full"
          placeholder="Street"
        />
        <div className="flex gap-3">
          <input
            required
            value={formData.city}
            onChange={onChangeHandler}
            type="text"
            name="city"
            className="border border-gray-300 rounded py-2 px-3 w-ull"
            placeholder="City"
          />
          <input
            required
            value={formData.state}
            onChange={onChangeHandler}
            type="text"
            name="state"
            className="border border-gray-300 rounded py-2 px-3 w-full"
            placeholder="State"
          />
        </div>
        <div className="flex gap-3">
          <input
            required
            value={formData.zipcode}
            onChange={onChangeHandler}
            type="number"
            name="zipcode"
            className="border border-gray-300 rounded py-2 px-3 w-ull"
            placeholder="Zipcode"
          />
          <input
            required
            value={formData.country}
            onChange={onChangeHandler}
            type="text"
            name="country"
            className="border border-gray-300 rounded py-2 px-3 w-full"
            placeholder="Country"
          />
        </div>
        <input
          required
          value={formData.phone}
          onChange={onChangeHandler}
          type="number"
          name="phone"
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
            <button
              type="submit"
              // onClick={() => navigate("/orders")}
              className="bg-black text-white px-16 py-2 text-sm"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
