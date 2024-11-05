import React from "react";
import Title from "../components/Title";
import NewsLetterBox from "../components/NewsLetterBox";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title Text1={"Contact"} Text2={"Us"} />
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          src={assets.contact_img}
          className="w-full md:max-w-[450px]"
          alt="Contact-Page-Image"
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500 ">
            12345 Street <br /> Suite 370, 1204 Stella
          </p>
          <p className="text-gray-500">
            Tell : 11122233344 <br /> forever@gmail.com
          </p>
          <p className="text-gray-600 text-2xl font-semibold">
            Carrers At Forever
          </p>
          <p className=" text-gray-500">
            {" "}
            Learn More About Our Teams and Join us{" "}
          </p>
          <button className="border border-black px-8 py-4 hover:bg-black hover:text-white transition-all duration-500">
            Explore Jobs
          </button>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default Contact;
