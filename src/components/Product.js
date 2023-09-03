import React from "react";
import { AiFillStar, AiOutlineEye, AiOutlineHeart } from "react-icons/ai";
import { TbShoppingBag } from "react-icons/tb";
import { MdInsertChartOutlined } from "react-icons/md";
import { BsGrid3X3 } from "react-icons/bs";
import { FaList } from "react-icons/fa";

const product = () => {
  return (
    <div className="w-1/4 group">
      <div className="relative overflow-y-hidden mb-4 ">
        <img src="./assets/images/watch.jpg" className="w-full" />
        <div className="bg-[rgba(255,255,255,0.7)] flex justify-between w-full px-4 py-3 absolute bottom-[-54px] group-hover:bottom-0 ease-in duration-300">
          <TbShoppingBag className="text-3xl hover:bg-primary transition ease-in-out rounded-full p-1" />
          <AiOutlineEye className="text-3xl hover:bg-primary transition ease-in-out rounded-full p-1" />
          <AiOutlineHeart className="text-3xl hover:bg-primary transition ease-in-out rounded-full p-1" />
          <MdInsertChartOutlined className="text-3xl hover:bg-primary transition ease-in-out rounded-full p-1" />
        </div>
      </div>
      <div className="flex items-center">
        <span className="text-[#669900] font-work text-lg font-semibold mr-4">
          $1000
        </span>
        <span className="line-through text-[#999] text-sm">$1100</span>
      </div>
      <p className="text-secondary text-sm hover:text-primary my-4">
        <a href="#">Marshall Kilburn Portable Analog Watch</a>
      </p>
      <div className="flex items-center">
        <AiFillStar className="text-primary" />
        <AiFillStar className="text-primary" />
        <AiFillStar className="text-primary" />
        <AiFillStar className="text-primary" />
        <AiFillStar className="text-[#ccc]" />
        <span class="text-sm text-textColor ml-4">01</span>
      </div>
    </div>
  );
};

export default product;
