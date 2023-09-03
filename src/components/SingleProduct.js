import { React, useState } from "react";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { BiMinus, BiPlus, BiBarChartSquare } from "react-icons/bi";

const SingleProduct = () => {
  const [value, setValue] = useState(1);

  const handleMinusClick = () => {
    setValue((prevValue) => Math.max(prevValue - 1, 0));
  };

  const handlePlusClick = () => {
    setValue((prevValue) => prevValue + 1);
  };

  return (
    <div className="mt-11">
      <div className="flex">
        <div className="w-[10%] flex flex-col gap-y-3">
          <div className="inline-block w-12 h-12 border border-solid border-[#d9d9d9] hover:border-black p-1">
            <img className="w-full" src="./assets/images/bag.jpg" />
          </div>
          <div className="inline-block w-12 h-12 border border-solid border-[#d9d9d9] hover:border-black p-1">
            <img className="w-full" src="./assets/images/bag.jpg" />
          </div>
          <div className="inline-block w-12 h-12 border border-solid border-[#d9d9d9] hover:border-black p-1">
            <img className="w-full" src="./assets/images/bag.jpg" />
          </div>
          <div className="inline-block w-12 h-12 border border-solid border-[#d9d9d9] hover:border-black p-1">
            <img className="w-full" src="./assets/images/bag.jpg" />
          </div>
        </div>
        <div className="w-2/5 h-auto">
          <img className="w-full" src="./assets/images/bag.jpg" />
        </div>
        <div className="w-1/2">
          <h2 className="font-dm font-regular text-2xl mb-2">
            Western ultra flex shoes petrol blue
          </h2>
          <div className="flex items-center gap-x-2 pb-2 border-b border-solid border-line">
            <p className="font-dm text-[#666] border-r border-solid border-line pr-2">
              Brand: <span className="text-[#0066cc]">Samsung</span>
            </p>
            <div className="flex">
              <AiFillStar className="text-[#F2B309]" />
              <AiFillStar className="text-[#F2B309]" />
              <AiFillStar className="text-[#F2B309]" />
              <AiFillStar className="text-[#CCCCCC]" />
              <AiFillStar className="text-[#CCCCCC]" />
            </div>
            <p className="text-[#666]">( 2 Reviews )</p>
          </div>
          <div className="border-b border-solid border-line pb-3">
            <p className="font-dm font-semibold text-2xl my-5">BDT 3500.00</p>
            <p className="font-dm font-regular text-base">
              Status:{" "}
              <span className="font-semibold text-[#8bc500]">In stock</span>
            </p>
            <ul>
              <li className="marker:text-[#999999] list-disc ml-5 font-dm text-base text-[#666666]">
                Lightweight and very comfortable.
              </li>
              <li className="marker:text-[#999999] list-disc ml-5 font-dm text-base text-[#666666]">
                Best Recommended for raw uses, Running and Gym.
              </li>
              <li className="marker:text-[#999999] list-disc ml-5 font-dm text-base text-[#666666]">
                Fashionable
              </li>
              <li className="marker:text-[#999999] list-disc ml-5 font-dm text-base text-[#666666]">
                Breathable and
              </li>
              <li className="marker:text-[#999999] list-disc ml-5 font-dm text-base text-[#666666]">
                Highly Durable
              </li>
            </ul>
          </div>
          <div className="mt-4 flex items-center gap-x-5 border-b border-solid border-line pb-5">
            <p className="font-dm text-xs text-[#666666]">Quantity :</p>
            <div className="relative inline-block">
              <input
                className="w-24 h-6 border border-solid border-[#999] text-sm font-semibold text-center p-5"
                type="text"
                value={value}
                readOnly
              />
              <BiMinus
                className="text-[#999] hover:text-black text-2xl absolute top-1/2 left-2 translate-y-[-50%]"
                onClick={handleMinusClick}
              />
              <BiPlus
                className="text-[#999] hover:text-black text-2xl absolute top-1/2 right-2 translate-y-[-50%]"
                onClick={handlePlusClick}
              />
            </div>
            <button className="bg-[#3078A6] font-dm font-semibold text-lg px-10 py-3 rounded">
              Add to cart
            </button>
            <AiOutlineHeart className="text-3xl text-[#999] hover:text-black" />
            <BiBarChartSquare className="text-3xl text-[#999] hover:text-black" />
          </div>
          <div className="my-4">
            <p className="font-dm text-sm">
              SKU:{" "}
              <span className="font-dm text-sm text-[#999999]">
                CD987654317
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
