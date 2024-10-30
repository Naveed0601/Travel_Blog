import React from "react";
import RelaxBlog from "./RelaxBlog";

const Relax = () => {
  return (
    <div className=" mt-12">
      <div className="ml-28 mr-28">
        <p className="text-3xl font-serif">Relax</p>
        <p className="mt-10 mr-10 font-light">
          I'm Mohd Abdul Naveed. Click here to add your own text and edit me.
          It’s easy. Just click “Edit Text” or double click me to add your own
          content and make changes to the font.
        </p>
      </div>
      <RelaxBlog />
    </div>
  );
};

export default Relax;
