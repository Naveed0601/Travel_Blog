import React from "react";
import me from "../../assets/me.jpg";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex bg-gray-700 w-full h-[230px]">
      <img src={me} alt="me" className="w-[200px] h-[200px] pt-10 pl-20 " />
      <h1 className="pt-10 pl-10 text-3xl text-white">
        About Me
        <p className="text-lg ">
          I'm a Mohd Abdul Naveed. Click here to add your own text and edit me.
          It’s easy. Just click “Edit Text” or double click me to add your own
          content and make changes to the font.
        </p>
        <Link to={"/about"}>
          <p className="text-lg  text-white hover:text-blue-500 underline underline-offset-1 mt-2">
            Read More
          </p>
        </Link>
      </h1>
      <p className="pt-10 pl-10 text-white">
        © 2035 by Going Places. Powered and secured by Mohd Abdul Naveed
        <div className="mt-20 flex space-x-4">
          <FaFacebookF className=" text-xl cursor-pointer text-blue-600 transition-colors duration-300" />
          <FaInstagram className="text-xl cursor-pointer text-pink-500 transition-colors duration-300" />
          <FaPinterestP className=" text-xl cursor-pointer text-red-500 transition-colors duration-300" />
          <FaTwitter className="text-xl cursor-pointer text-blue-400 transition-colors duration-300" />
        </div>
      </p>
    </div>
  );
};

export default Footer;
