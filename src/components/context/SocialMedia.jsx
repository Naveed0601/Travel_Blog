import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="bg-blue-600 h-[75px] mt-5 flex justify-evenly items-center text-2xl font-bold">
      <span className="text-base flex text-white cursor-default">
        <FaFacebookF className="text-white text-xl cursor-pointer hover:text-blue-400 transition-colors duration-300 mr-2 mt-[3px]" />
        FaceBook
      </span>
      <span className="text-base flex text-white cursor-default">
        <FaInstagram className="text-white text-xl cursor-pointer hover:text-pink-500 transition-colors duration-300 mr-2 mt-[3px]" />
        Instagram
      </span>
      <span className="text-base flex  text-white cursor-default">
        <FaPinterestP className="text-white text-xl cursor-pointer hover:text-red-500 transition-colors duration-300 mr-2 mt-[3px]" />
        Pinterest
      </span>
      <span className="text-base flex  text-white cursor-default">
        <FaTwitter className="text-white text-xl cursor-pointer hover:text-blue-400 transition-colors duration-300 mr-2 mt-[3px]" />
        Twitter
      </span>
    </div>
  );
};

export default SocialMedia;
