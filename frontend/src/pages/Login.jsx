import React, { useState } from "react";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    console.log('form submited')
  }
  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="font-prata text-3xl font-semibold">{currentState}</p>
        <hr className="border-none w-8 h-[2px] bg-gray-800" />
      </div>
      {currentState === "Login" ? (
        ""
      ) : (
        <input
          type="text"
          name=""
          placeholder="Full Name"
          className="w-full px-3 py-2 border border-gray-800 "
          required={true}
          onChange={(e)=>e.target.value}
        />
      )}
      <input
        type="email"
        name=""
        placeholder="Email"
        className="w-full px-3 py-2 border border-gray-800 "
        required={true}
        onChange={(e)=>e.target.value}
      />
      <input
        type="password"
        name=""
        placeholder="Password"
        className="w-full px-3 py-2 border border-gray-800 "
        required={true}
        autoComplete="false"
        onChange={(e)=>e.target.value}
      />
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer text-blue-900">forget your password?</p>
        {currentState === "Login" ? (
          <p
            className="cursor-pointer"
            onClick={() => setCurrentState("Sign Up")}
          >
            Create Account
          </p>
        ) : (
          <p
            className="cursor-pointer"
            onClick={() => setCurrentState("Login")}
          >
            Login Here
          </p>
        )}
      </div>
      <button className="bg-black text-white font-light px-8 py-2 mt-4">
        {currentState === "Login" ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
};

export default Login;
