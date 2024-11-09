import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import axios from "axios";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";
import { currency } from "../App";

const backend = import.meta.env.VITE_BACKEND_URL;

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    if (!token) {
      return null;
    }
    try {
      const response = await axios.post(
        backend + "/api/order/list",
        {},
        { headers: { token } }
      );

      console.log(response.data);
      if (response.data.success) {
        console.log(response.data);
        setOrders(response.data.orders);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const statusHandler = async (event,orderId) => {
    try {
      const response = await axios.post(backend+'/api/order/status',{orderId,status:event.target.value},{headers:{token}})
      if (response.data.success) {
        await fetchAllOrders();
        toast.success('Order Updated')
      }
    } catch (error) {
      console.log(error)
      toast.error(response.data.message)
    }
  }

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  useEffect(() => {
    console.log(orders);
  }, [orders]);

  return (
    <div>
      <h3>Order Page</h3>
      <div className="">
        {orders.map((order, index) => (
          <div
            key={index}
            className="grid grid-cols-5 gap-4 items-start border-2  border-gray-300 py-6 px-4 "
          >
            {/* Image */}
            <img src={assets.parcel_icon} alt="parcel" />
            <div>
              {/* Order Name And Size */}
              <div>
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return (
                      <p className="py-1" key={index}>
                        {item.name} x {item.quantity} <span>{item.size}</span>
                      </p>
                    );
                  } else {
                    return (
                      <p className="py-1" key={index}>
                        {item.name} x {item.quantity} <span>{item.size},</span>
                      </p>
                    );
                  }
                })}
              </div>

              <p className="mt-3 mb-2 font-medium">
                {order.address.firstName + " " + order.address.lastName}
              </p>
              {/* Address div */}
              <div>
                <p>{order.address.street + ", "}</p>
                <p>
                  {order.address.city +
                    ", " +
                    order.address.state +
                    ", " +
                    order.address.country +
                    ", " +
                    order.address.zipcode}
                </p>
                <p>{order.address.phone}</p>
              </div>
            </div>

            {/* Payment Info div */}
            <div>
              <p className="text-sm sm:text-[15px]">
                Items : {order.items.length}
              </p>
              <p className="mt-3">Payment Method: {order.paymentMethod}</p>
              <p>Payment: {order.payment ? "Done" : "Pending"}</p>
              <p>Date: {new Date(order.date).toLocaleDateString()}</p>
            </div>

            {/* Order Amount Div */}
            <p className="text-sm sm:text-[15px]">
              {currency} {order.amount}
            </p>

            {/* Order Status */}
            <select onChange={(event)=>statusHandler(event,order._id)} value={order.status} className="p-2 font-semibold">
              <option value="Order Placed">Order Placed</option>
              <option value="Packing">Packing</option>
              <option value="Shipped">Shipped</option>
              <option value="Out For Delivery">Out For Delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
