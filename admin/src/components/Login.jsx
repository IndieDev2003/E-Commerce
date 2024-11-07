import axios from "axios";
import React, { useState } from "react";
import { backendURL } from "../App";
import { toast } from "react-toastify";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSumbitHandler = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(backendURL + "/api/user/admin", {
        email,
        password,
      });
      if (response.data.success) {
        toast.success("Welcome Back Admin");
        setToken(response.data.token);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {}
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg px-8 py-6 max-w-sm ">
        <h1 className="text-2xl font-bold mb-2">Akisa Admin Panel</h1>
        <form onSubmit={onSumbitHandler}>
          <div className="mb-3 min-w-72">
            <p className="text-sm font-medium text-black mb-2">Email Address</p>
            <input
              className="rounded w-full px-3 py-2 border text-gray-600 outline-none"
              type="email"
              autoComplete="false"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
            />
          </div>
          <div className="mb-3 min-w-72">
            <p className="text-sm font-medium text-black mb-2">Password</p>
            <input
              className="rounded w-full px-3 py-2 border text-gray-600 outline-none"
              type="password"
              autoComplete="false"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Your Password"
              required
            />
          </div>
          <button
            className="mt-2 w-full py-2 px-4 bg-black text-white rounded-md"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
