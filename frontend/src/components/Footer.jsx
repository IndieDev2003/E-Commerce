import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full sm:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam eos
            sunt dolor.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">Company</p>
          <ul className="flex flex-col gap-1">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
            <li>Refund Policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">Get In Touch</p>
          <ul className="flex flex-col gap-1">
            <li>+91 1112223334</li>
            <li>contact@forever.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">Copyright 2024 @ Forever.com All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
