import React from "react";
import {
  AiOutlineDown,
  AiOutlineLeft,
  AiOutlineRight,
  AiFillStar,
  AiOutlineEye,
  AiOutlineHeart,
} from "react-icons/ai";
import { RxHamburgerMenu, RxCaretDown } from "react-icons/rx";
import { BsHeart } from "react-icons/bs";
import { TbShoppingBag } from "react-icons/tb";
import { IoPersonOutline } from "react-icons/io5";
import { MdInsertChartOutlined } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="bg-bar">
        <div className="max-w-container mx-auto py-4">
          <div className="flex justify-between">
            <p className="font-work text-sm text-textColor">
              Welcome to Online Shopping Store !
            </p>
            <ul className="flex font-work text-sm text-textColor gap-5">
              <li>
                <a
                  href="#"
                  className="border-r-2 border-border pr-5 hover:text-black"
                >
                  English <AiOutlineDown className="inline ml-1" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="border-r-2 border-border pr-5 hover:text-black"
                >
                  US Dollar <AiOutlineDown className="inline ml-1" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="border-r-2 border-border pr-5 hover:text-black"
                >
                  Track Your Order
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Store Location
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-container mx-auto flex justify-between items-center py-5">
        <div className="flex justify-between items-center gap-x-6">
          <img
            src="./assets/images/logo.png"
            alt="letsbuy24-logo"
            className="w-[300px]"
          />
          <RxHamburgerMenu className="text-2xl" />
        </div>
        <div>
          <div>
            <div class="flex rounded-md w-full">
              <span class="px-4 inline-flex items-center min-w-fit rounded-l-md border border-r-0 border-border gap-x-1">
                <span class="text-sm text-black">All</span>
                <RxCaretDown className="text-lg text-textColor" />
              </span>
              <input
                type="text"
                name="search"
                class="py-3 px-4 block w-[450px] border border-border rounded-0 text-sm"
              />
              <button
                type="button"
                class="inline-flex flex-shrink-0 justify-center items-center min-w-fit rounded-r-md px-5 font-bold text-black bg-primary text-sm focus:z-10 focus:outline-none focus:ring-2 transition-all"
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-x-4">
          <Link to="#">
            <BsHeart className="text-2xl" />
          </Link>
          <Link to="/cart">
            <TbShoppingBag className="text-2xl" />
          </Link>
          <Link to="#">
            <IoPersonOutline className="text-2xl" />
          </Link>
          <a href="#" className="font-work text-sm font-bold">
            Log in
          </a>
        </div>
      </div>
      <nav className="bg-primary">
        <div className="max-w-container mx-auto">
          <ul className="flex justify-between items-center py-4">
            <li className="font-work text-base font-semibold">
              <Link to="/product-category">ALL CATEGORIES</Link>
            </li>
            <li className="font-work text-base font-semibold">
              <a href="#">TODAY DEALS</a>
            </li>
            <li className="font-work text-base font-semibold">
              <a href="#">ELECTRONICS</a>
            </li>
            <li className="font-work text-base font-semibold">
              <a href="#">CLOTHING</a>
            </li>
            <li className="font-work text-base font-semibold">
              <a href="#">COMPUTERS</a>
            </li>
            <li className="font-work text-base font-semibold">
              <a href="#">FURNITURES</a>
            </li>
            <li className="font-work text-base font-semibold">
              <a href="#">MOM & BABY</a>
            </li>
            <li className="font-work text-base font-semibold">
              <a href="#">BOOKS & MORE</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
