import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

//Placing Order Using COD
const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;

    const orderData = {
      userId,
      items,
      address,
      amount,
      paymenMethod: "COD",
      payment: false,
      date: Date.now(),
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    await userModel.findByIdAndUpdate(userId, { cartData: {} });
    res.json({ success: true, message: "Order Placed" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

//Placing Order Using stripe
const placeOrderStripe = async (req, res) => {};

//Placing Order Using Razorpay
const placeOrderRazorpay = async (req, res) => {};

//All Orders for Admin Panel
const allOrders = async (req, res) => {};

//User Order Data for frontend
const userOrders = async (req, res) => {};

//Update Order Status for Admin Panel
const updateOrderStatus = async (req, res) => {};

export {
  allOrders,
  placeOrder,
  placeOrderRazorpay,
  placeOrderStripe,
  userOrders,
  updateOrderStatus,
};
