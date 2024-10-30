import React, { useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { FaCircleUser } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
import { useParams } from "react-router-dom";
import blogs from "../../data/blogDetails";

const BlogPage = () => {
  const { id } = useParams();
  const [count, setCount] = useState(7);
  const [flag, setFlag] = useState(false);
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <p>Blog not found</p>;
  }

  const handleCount = () => {
    setCount((prev) => (flag ? prev - 1 : prev + 1));
    setFlag(!flag);
  };

  return (
    <div>
      <div className=" ml-auto mr-auto border border-gray-100 p-12 w-[900px]">
        <div className="flex">
          <FaCircleUser className="text-4xl" />
          <p className="ml-3 mt-1 text-base">
            {blog.author} . {blog.date} . {blog.readTime}
          </p>
          <HiDotsVertical className="ml-auto mt-1 cursor-pointer" />
        </div>
        <div className="mt-10">
          <h1 className="text-3xl font-mono">{blog.title}</h1>
          <h2 className="mt-6 text-lg font-serif">{blog.subtitle}</h2>
          <img src={blog.image} alt={blog.title} className="mt-10" />
          <p className="mt-10 text-lg font-thin">{blog.content1}</p>
          <p className="pl-4 border-l-2 border-blue-500 mt-10 text-2xl font-sans">
            {blog.content2}
          </p>
          <p className="mt-10 text-lg font-light">{blog.content3}</p>
          <h3 className="mt-8 text-xl font-semibold">{blog.heading}</h3>
          <p className="font-light text-lg">
            {blog.content4} . {blog.content5}
          </p>
          <p className="mt-1 font-light text-lg border-b border-gray-200 pb-14">
            {blog.content6}
          </p>
          <div className="mt-6 flex justify-between items-center border-b border-gray-200 pb-6">
            <div className="flex space-x-4">
              <FaFacebookF className="text-xl cursor-pointer text-blue-600 transition-colors duration-300" />
              <FaInstagram className="text-xl cursor-pointer text-pink-500 transition-colors duration-300" />
              <FaPinterestP className="text-xl cursor-pointer text-red-500 transition-colors duration-300" />
              <FaTwitter className="text-xl cursor-pointer text-blue-400 transition-colors duration-300" />
            </div>
            <p className="font-light cursor-pointer text-blue-400 transition-colors">
              Travel
            </p>
          </div>
          <div className="flex">
            <p className="mt-4 font-light">0 Views</p>
            <p className="mt-4 font-light ml-auto flex cursor-default">
              {count}
              <FaHeart
                className={`text-xl ml-2 mt-[3px] cursor-pointer ${
                  flag ? "text-red-500" : "text-gray-300 hover:text-red-400"
                }`}
                onClick={handleCount}
              />
            </p>
          </div>
        </div>
      </div>
      <div className="p-4 border border-gray-100 ml-36 mt-10 w-[900px] pb-5">
        <p className="ml-28 font-light border-b border-gray-200 pb-4 mr-28">
          Comments
        </p>
        <div className="ml-28 mr-28 mt-4 p-4 border border-gray-300 ">
          <input
            type="text"
            placeholder="Write a Comment"
            className="w-full border-b focus:outline-none focus:border-blue-500"
            aria-label="Comment input"
          />
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
