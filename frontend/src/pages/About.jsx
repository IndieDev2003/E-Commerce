import React from "react";
import Title from "../components/Title";
import NewsLetterBox from "../components/NewsLetterBox";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title Text1={"About"} Text2={"Us"} />
      </div>
      <div className="my-10 flex flex-col sm:flex-row gap-16">
        <img
          src={assets.about_img}
          alt="About Us Page Image"
          className="w-full md:max-w-[450px]"
        />
        <div className="flex flex-col justify-center gap-6 ms:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde in,
            natus magnam debitis saepe recusandae perspiciatis minima distinctio
            mollitia asperiores soluta numquam nulla! Aspernatur voluptatum
            debitis ex, quas perspiciatis beatae necessitatibus repellendus non
            accusamus quam earum, amet assumenda at eos quo et quae neque ad!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
            earum unde nemo ipsum inventore, aspernatur repellat magni, labore
            eum adipisci molestiae a ipsa obcaecati, est eligendi autem
            perspiciatis distinctio incidunt.
          </p>
          <b className="text-gray-700">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
            quae voluptatibus, saepe nam molestiae velit incidunt sed
            repudiandae tenetur tempore quis nisi? Ea molestiae, ducimus quas
            optio eius corporis recusandae.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title Text1={"Why"} Text2={"Choose Us ?"} />
      </div>
      <div className="flex flex-col sm:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance</b>
          <p className="text-gray-600 ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
            tempore explicabo numquam ullam id tempora provident impedit ab
            placeat sapiente cumque quae, dignissimos beatae praesentium in
            accusantium quaerat natus odit consequuntur eaque nemo, ducimus et.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience</b>
          <p className="text-gray-600 ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
            tempore explicabo numquam ullam id tempora provident impedit ab
            placeat sapiente cumque quae, dignissimos beatae praesentium in
            accusantium quaerat natus odit consequuntur eaque nemo, ducimus et.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Execerptional Customer Services</b>
          <p className="text-gray-600 ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
            tempore explicabo numquam ullam id tempora provident impedit ab
            placeat sapiente cumque quae, dignissimos beatae praesentium in
            accusantium quaerat natus odit consequuntur eaque nemo, ducimus et.
          </p>
        </div>
      </div>
      <NewsLetterBox/>  
    </div>
  );
};

export default About;
