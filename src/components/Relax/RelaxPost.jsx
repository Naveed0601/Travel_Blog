import React, { useState } from "react";
import { FaCircleUser } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { FaRegCommentAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const RelaxPost = ({ id, image, title, subtitle, author, date, readTime }) => {
  console.log(id);
  const [count, setCount] = useState(7);
  const [flag, setFlag] = useState(false);

  const handleCount = () => {
    setCount((prev) => (flag ? prev - 1 : prev + 1));
    setFlag(!flag);
  };

  return (
    <div className="m-2 p-2 bg-whiteborder  border border-gray-100">
      <Link to={`/relax/blogs/${id}`}>
        <img src={image} alt={title} className="w-[900px] pl-12 pt-2" />
        <div className="m-4 p-4 flex">
          <FaCircleUser className="text-4xl" />
          <div className="text-xs ml-2 cursor-default">
            <p>{author}</p>
            <p>
              {date} . {readTime}
            </p>
          </div>
        </div>
        <div className="mx-8 text-2xl w-[900px] border-b border-gray-300 font-sans cursor-pointer hover:text-blue-500">
          <h1>{title}</h1>
          <p className="text-base font-serif mt-4 mb-6">{subtitle}</p>
        </div>
      </Link>
      <div className="mx-8 mt-4 flex items-center mb-4">
        <IoEyeOutline className="text-2xl hover:text-cyan-700 mt-1 cursor-pointer" />
        <FaRegCommentAlt className="text-lg ml-2 mt-0.4 hover:text-pink-600 mt-1 cursor-pointer" />
        <p className="ml-auto flex cursor-default">
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
  );
};

export default RelaxPost;
