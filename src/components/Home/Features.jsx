import React from "react";
import { GiCommercialAirplane } from "react-icons/gi";
import { FaCloud } from "react-icons/fa6";

const Features = () => {
  return (
    <div className="mt-10 bg-gray-100 h-[150px] flex justify-center items-center space-x-24 cursor-default ">
      <h1 className="text-2xl animate-bounce">As Feature in</h1>
      <span className="border-l-2 border-black h-8 inline-block mx-2 animate-bounce"></span>
      <h1 className="text-3xl font-bold animate-bounce">
        travel <p className="text-2xl font-normal animate-bounce">blog</p>
      </h1>
      <p className="text-3xl font-normal animate-bounce">
        <GiCommercialAirplane />
        Plane<span className="font-bold animate-bounce">TOUR</span>
      </p>
      <h1 className="font-bold text-3xl animate-bounce">
        WORLD<p className="font-bold text-3xl animate-bounce">TRAVEL</p>
      </h1>
      <h1 className="font-bold text-xl animate-bounce">
        <FaCloud />
        skycloud
      </h1>
    </div>
  );
};

export default Features;
