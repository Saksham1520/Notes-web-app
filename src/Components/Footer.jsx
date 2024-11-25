import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className="container mx-auto px-4 md:px-10  min-h-[200px] border-t-2 ">
      <div className="mt-12">
        <div className="flex items-center justify-center gap-6">
          <h1>About us</h1>
          <h1>Contact us</h1>
          <h1>Jobs</h1>
          <h1>Prees kit</h1>
        </div>
        <div className="flex items-center justify-center my-10 gap-4">
          <FaTwitter />
          <FaInstagram />
          <FaFacebook />
          <FaYoutube />
        </div>
        <div>
          <h1 className="text-center">Copyright &copy; All reserved by ME </h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;
