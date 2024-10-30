import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex items-center justify-between m-2 p-2">
      <div>
        <img src={logo} alt="logo" className="w-[70px] h-auto" />
      </div>

      <div>
        <ul className="flex ml-10 space-x-8">
          {["Home", "About", "Travel", "Eat", "Relax"].map((item, index) => (
            <li key={index}>
              <Link
                to={
                  item === "Home"
                    ? "/"
                    : item === "About"
                    ? "/about"
                    : `/${item.toLowerCase()}`
                }
                className="text-gray-500 hover:text-blue-400 cursor-pointer"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex space-x-4">
        <FaFacebookF className="text-gray-600 text-xl cursor-pointer hover:text-blue-600 transition-colors duration-300" />
        <FaInstagram className="text-gray-600 text-xl cursor-pointer hover:text-pink-500 transition-colors duration-300" />
        <FaPinterestP className="text-gray-600 text-xl cursor-pointer hover:text-red-500 transition-colors duration-300" />
        <FaTwitter className="text-gray-600 text-xl cursor-pointer hover:text-blue-400 transition-colors duration-300" />
      </div>
    </div>
  );
};

export default Header;
