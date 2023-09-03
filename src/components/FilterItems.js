import React from "react";
import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { RxBox } from "react-icons/rx";
import { AiFillStar } from "react-icons/ai";

const FilterItems = () => {
  return (
    <>
      <div className="bg-bgColor p-4 mt-6 border-b border-border">
        <h3 className="font-work text-lg text-black mb-6">BY BRANDS</h3>
        <div className="relative">
          <input
            type="text"
            className="w-full border border-border p-2 outline-none font-work text-sm text-textColor"
          />
          <IoSearchOutline className="absolute right-2 top-1/2 translate-y-[-50%]" />
        </div>
        <ul className="font-work text-base text-black mt-2">
          <li>
            <Link to="#">
              <span className="flex items-center gap-2">
                <RxBox className="inline-block" /> Adidas
              </span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <span className="flex items-center gap-2">
                <RxBox className="inline-block" /> Amcrest
              </span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <span className="flex items-center gap-2">
                <RxBox className="inline-block" /> Asus
              </span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <span className="flex items-center gap-2">
                <RxBox className="inline-block" /> Samsung
              </span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <span className="flex items-center gap-2">
                <RxBox className="inline-block" /> Baxter
              </span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <span className="flex items-center gap-2">
                <RxBox className="inline-block" /> Casio
              </span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="bg-bgColor p-4 border-b border-border">
        <h3 className="font-work text-lg text-black mb-6">BY REVIEW</h3>
        <ul className="font-work text-base text-black mt-2 flex flex-col gap-2">
          <li>
            <Link to="#">
              <span className="flex items-center gap-2">
                <RxBox className="inline-block" />
                <span className="flex items-center">
                  <AiFillStar className="text-primary" />
                  <AiFillStar className="text-primary" />
                  <AiFillStar className="text-primary" />
                  <AiFillStar className="text-primary" />
                  <AiFillStar className="text-primary" />
                </span>
              </span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <span className="flex items-center gap-2">
                <RxBox className="inline-block" />
                <span className="flex items-center">
                  <AiFillStar className="text-primary" />
                  <AiFillStar className="text-primary" />
                  <AiFillStar className="text-primary" />
                  <AiFillStar className="text-primary" />
                  <AiFillStar className="text-[#ccc]" />
                </span>
              </span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <span className="flex items-center gap-2">
                <RxBox className="inline-block" />
                <span className="flex items-center">
                  <AiFillStar className="text-primary" />
                  <AiFillStar className="text-primary" />
                  <AiFillStar className="text-primary" />
                  <AiFillStar className="text-[#ccc]" />
                  <AiFillStar className="text-[#ccc]" />
                </span>
              </span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <span className="flex items-center gap-2">
                <RxBox className="inline-block" />
                <span className="flex items-center">
                  <AiFillStar className="text-primary" />
                  <AiFillStar className="text-primary" />
                  <AiFillStar className="text-[#ccc]" />
                  <AiFillStar className="text-[#ccc]" />
                  <AiFillStar className="text-[#ccc]" />
                </span>
              </span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <span className="flex items-center gap-2">
                <RxBox className="inline-block" />
                <span className="flex items-center">
                  <AiFillStar className="text-primary" />
                  <AiFillStar className="text-[#ccc]" />
                  <AiFillStar className="text-[#ccc]" />
                  <AiFillStar className="text-[#ccc]" />
                  <AiFillStar className="text-[#ccc]" />
                </span>
              </span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="bg-bgColor p-4">
        <h3 className="font-work text-lg text-black mb-6">BY COLOR</h3>
        <ul className="font-work text-base text-black mt-2">
          <li>
            <Link to="#">
              <span className="flex items-center gap-2">
                <RxBox className="inline-block" /> Black
              </span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <span className="flex items-center gap-2">
                <RxBox className="inline-block" /> Blue
              </span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <span className="flex items-center gap-2">
                <RxBox className="inline-block" /> Green
              </span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <span className="flex items-center gap-2">
                <RxBox className="inline-block" /> Gray
              </span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <span className="flex items-center gap-2">
                <RxBox className="inline-block" /> White
              </span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <span className="flex items-center gap-2">
                <RxBox className="inline-block" /> Purple
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default FilterItems;
