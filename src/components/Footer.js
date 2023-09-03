import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#F8F8F8] text-black">
      <div className="container mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="text-sm">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h4 className="text-lg font-bold mb-4">Categories</h4>
            <ul className="text-sm">
              <li>
                <a href="#">Business</a>
              </li>
              <li>
                <a href="#">Entertaiment</a>
              </li>
              <li>
                <a href="#">Fashion</a>
              </li>
              <li>
                <a href="#">Life Style</a>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h4 className="text-lg font-bold mb-4">Bussiness</h4>
            <p className="text-sm">Policy</p>
            <p className="text-sm">Term & Conditions</p>
            <p className="text-sm">FAQs</p>
          </div>
          <div className="col-span-1">
            <h4 className="text-lg font-bold mb-4">Newsletter</h4>
            <div className="flex space-x-4">
              <a href="#">
                <FaFacebookF className="text-black" />
              </a>
              <a href="#">
                <FaTwitter className="text-black" />
              </a>
              <a href="#">
                <FaInstagram className="text-black" />
              </a>
              <a href="#">
                <FaLinkedinIn className="text-black" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-border py-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-textColor">
              &copy; 2023 LetsBuy24. All Rights Reserved.
            </p>
            <ul className="text-sm flex space-x-4">
              <li>
                <a href="/terms">Terms of Service</a>
              </li>
              <li>
                <a href="/privacy">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
