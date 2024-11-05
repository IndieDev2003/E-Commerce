import React from "react";

const NewsLetterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDeafult();
  };
  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Subscibe Now & get 20% off !
      </p>
      <p className="text-gray-400 mt-3">Lorem ipsum dolor sit amet.</p>
      <form
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto border pl-3"
        onSubmit={onSubmitHandler}
      >
        <input
          className="w-full outline-none sm:flex-1"
          type="email"
          placeholder="Enter Your Email"
          onChange={(e) => e.target.value}
        />
        <button
          type="submit"
          className="bg-black text-white text-xs px-10 py-4"
        >
          Subscibe
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;
