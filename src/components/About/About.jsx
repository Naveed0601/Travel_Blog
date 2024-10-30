import React from "react";
import me from "../../assets/me.jpg";

const About = () => {
  return (
    <div className="flex ml-28 mt-12">
      <div className="w-[500px] mr-5">
        <h1 className="text-4xl font-serif">About Me</h1>
        <p className="mt-10 font-light">
          I'm Mohd Abdul Naveed. Click here to add your own text and edit me.
          It’s easy. Just click “Edit Text” or double click me to add your own
          content and make changes to the font. Feel free to drag and drop me
          anywhere you like on your page. I’m a great place for you to tell a
          story and let your users know a little more about you.
        </p>
        <p className="mt-6 font-light">
          This is a great space to write long text about your company and your
          services. You can use this space to go into a little more detail about
          your company. Talk about your team and what services you provide.
        </p>
        <p className="mt-6 font-light">
          Tell your visitors the story of how you came up with the idea for your
          business and what makes you different from your competitors. Make your
          company stand out and show your visitors who you are.
        </p>
        <p className="mt-10 font-light">Contact Me</p>
        <p className="font-light">Naveed@gmail.com</p>
      </div>
      <div className="w-[500px]">
        <img src={me} alt="me" />
      </div>
    </div>
  );
};

export default About;
