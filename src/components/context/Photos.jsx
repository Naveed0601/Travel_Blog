import React from "react";
import img1 from "../../assets/blog3.jpg";
import img2 from "../../assets/blog2.jpg";
import img3 from "../../assets/eat.jpg";
import img4 from "../../assets/eatPage2.jpg";
import img5 from "../../assets/eatPage3.jpg";

const Photos = () => {
  return (
    <div className="flex cursor-pointer">
      {[img1, img2, img3, img4, img5].map((img, index) => (
        <div key={index} className="relative group w-[250px] h-[250px]">
          <img src={img} alt={`img${index + 1}`} className="w-full h-full" />
          <div className="p-3 absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-70 transition duration-700 flex justify-center items-center">
            <h1 className="text-2xl text-white opacity-0 group-hover:opacity-100 transition duration-300">
              #website, #freewebsite, #websitetemplate, #Lorem Ipsum.com
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Photos;
