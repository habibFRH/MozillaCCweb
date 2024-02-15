import React from "react";
import { FaFacebookSquare, FaInstagramSquare, FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 text-gray-300" id="footer">
      <div className="w-full md:w-[90%] mx-auto">
        {" "}
        {/* Apply width here */}
        <h1 className="text-3xl font-bold text-[#fcbf49] hover:cursor-pointer">
          MOZILLACC
        </h1>
        <p className="py-4">
          Thank you for visiting our website! We hope you found the information
          you were looking for. If you have any questions, suggestions, or
          feedback, please don't hesitate to reach out to us. Our club is always
          here to assist you. Stay connected with us on social media to stay
          updated on the latest news, events, and initiatives from our club. We
          look forward to welcoming you as a part of our community!
        </p>
        <div className="flex justify-between">
          <a href="https://www.facebook.com/MCCUV2"  target="_blank" rel="noreferrer">
            <FaFacebookSquare size={30} />
          </a>
          <a href="https://www.instagram.com/mozillacc.uv2/" target="_blank" rel="noreferrer">
            <FaInstagramSquare size={30} />
          </a>
          <a href="www.google.com">
            <FaDiscord size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
