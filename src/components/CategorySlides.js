import React from 'react'
import { AiFillStar, AiOutlineEye, AiOutlineHeart } from 'react-icons/ai'
import { TbShoppingBag } from 'react-icons/tb'
import { MdInsertChartOutlined } from 'react-icons/md'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SliderNextArrow from './SliderNextArrow';
import SliderPrevArrow from './SliderPrevArrow';

const CategorySlides = (props) => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <SliderNextArrow/>,
        prevArrow: <SliderPrevArrow/>
      };
  return (
    <div className="max-w-container mx-auto mt-8">
      <div className="border-b-2 border-border bg-[#F4F4F4] flex justify-between items-center px-3 py-2">
        <h2 className="font-work text-2xl">{props.title}</h2>
        <ul className="flex gap-x-5">
          <li className="font-work text-sm text-textColor hover:text-black active:text-black"><a href="#">New Arrivals</a></li>
          <li className="font-work text-sm text-textColor hover:text-black active:text-black"><a href="#">Best Seller</a></li>
          <li className="font-work text-sm text-textColor hover:text-black active:text-black"><a href="#">Most Populer</a></li>
          <li className="font-work text-sm text-textColor hover:text-black active:text-black"><a href="#">View All</a></li>
        </ul>
      </div>
      <Slider {...settings} className="mt-8">
        <div className="w-1/5 group">
          <div className="relative overflow-y-hidden mb-4">
            <img src="./assets/images/watch.jpg" className="w-full"/>
            <div className="bg-[rgba(255,255,255,0.7)] flex justify-between w-full px-4 py-3 absolute bottom-[-54px] group-hover:bottom-0 ease-in duration-300">
              <TbShoppingBag className="text-3xl hover:bg-primary transition ease-in-out rounded-full p-1"/>
              <AiOutlineEye className="text-3xl hover:bg-primary transition ease-in-out rounded-full p-1"/>
              <AiOutlineHeart className="text-3xl hover:bg-primary transition ease-in-out rounded-full p-1"/>
              <MdInsertChartOutlined className="text-3xl hover:bg-primary transition ease-in-out rounded-full p-1"/>
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-[#669900] font-work text-lg font-semibold mr-4">$1000</span>
            <span className="line-through text-[#999] text-sm">$1100</span>
          </div>
          <p className="text-secondary text-sm hover:text-primary my-4"><a href="#">Marshall Kilburn Portable Analog Watch</a></p>
          <div className="flex items-center">
            <AiFillStar className="text-primary"/>
            <AiFillStar className="text-primary"/>
            <AiFillStar className="text-primary"/>
            <AiFillStar className="text-primary"/>
            <AiFillStar className="text-[#ccc]"/>
            <span class="text-sm text-textColor ml-4">01</span>
          </div>
        </div>
        <div className="w-1/5 group">
          <div className="relative overflow-y-hidden mb-4">
            <img src="./assets/images/shirt.jpg" className="w-full"/>
            <div className="bg-[rgba(255,255,255,0.7)] flex justify-between w-full px-4 py-3 absolute bottom-[-54px] group-hover:bottom-0 ease-in duration-300">
              <TbShoppingBag className="text-3xl hover:bg-primary transition ease-in-out rounded-full p-1"/>
              <AiOutlineEye className="text-3xl hover:bg-primary transition ease-in-out rounded-full p-1"/>
              <AiOutlineHeart className="text-3xl hover:bg-primary transition ease-in-out rounded-full p-1"/>
              <MdInsertChartOutlined className="text-3xl hover:bg-primary transition ease-in-out rounded-full p-1"/>
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-[#669900] font-work text-lg font-semibold mr-4">$1000</span>
            <span className="line-through text-[#999] text-sm">$1100</span>
          </div>
          <p className="text-secondary text-sm hover:text-primary my-4"><a href="#">Marshall Kilburn Portable Analog Watch</a></p>
          <div className="flex items-center">
            <AiFillStar className="text-primary"/>
            <AiFillStar className="text-primary"/>
            <AiFillStar className="text-primary"/>
            <AiFillStar className="text-primary"/>
            <AiFillStar className="text-[#ccc]"/>
            <span class="text-sm text-textColor ml-4">01</span>
          </div>
        </div>
        <div className="w-1/5 group">
          <div className="relative overflow-y-hidden mb-4">
            <img src="./assets/images/bag.jpg" className="w-full"/>
            <div className="bg-[rgba(255,255,255,0.7)] flex justify-between w-full px-4 py-3 absolute bottom-[-54px] group-hover:bottom-0 ease-in duration-300">
              <TbShoppingBag className="text-3xl hover:bg-primary transition ease-in-out rounded-full p-1"/>
              <AiOutlineEye className="text-3xl hover:bg-primary transition ease-in-out rounded-full p-1"/>
              <AiOutlineHeart className="text-3xl hover:bg-primary transition ease-in-out rounded-full p-1"/>
              <MdInsertChartOutlined className="text-3xl hover:bg-primary transition ease-in-out rounded-full p-1"/>
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-[#669900] font-work text-lg font-semibold mr-4">$1000</span>
            <span className="line-through text-[#999] text-sm">$1100</span>
          </div>
          <p className="text-secondary text-sm hover:text-primary my-4"><a href="#">Marshall Kilburn Portable Analog Watch</a></p>
          <div className="flex items-center">
            <AiFillStar className="text-primary"/>
            <AiFillStar className="text-primary"/>
            <AiFillStar className="text-primary"/>
            <AiFillStar className="text-primary"/>
            <AiFillStar className="text-[#ccc]"/>
            <span class="text-sm text-textColor ml-4">01</span>
          </div>
        </div>
        <div className="w-1/5 group">
          <div className="relative overflow-y-hidden mb-4">
            <img src="./assets/images/gamebox.jpg" className="w-full"/>
            <div className="bg-[rgba(255,255,255,0.7)] flex justify-between w-full px-4 py-3 absolute bottom-[-54px] group-hover:bottom-0 ease-in duration-300">
              <TbShoppingBag className="text-3xl hover:bg-primary transition ease-in-out rounded-full p-1"/>
              <AiOutlineEye className="text-3xl hover:bg-primary transition ease-in-out rounded-full p-1"/>
              <AiOutlineHeart className="text-3xl hover:bg-primary transition ease-in-out rounded-full p-1"/>
              <MdInsertChartOutlined className="text-3xl hover:bg-primary transition ease-in-out rounded-full p-1"/>
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-[#669900] font-work text-lg font-semibold mr-4">$1000</span>
            <span className="line-through text-[#999] text-sm">$1100</span>
          </div>
          <p className="text-secondary text-sm hover:text-primary my-4"><a href="#">Marshall Kilburn Portable Analog Watch</a></p>
          <div className="flex items-center">
            <AiFillStar className="text-primary"/>
            <AiFillStar className="text-primary"/>
            <AiFillStar className="text-primary"/>
            <AiFillStar className="text-primary"/>
            <AiFillStar className="text-[#ccc]"/>
            <span class="text-sm text-textColor ml-4">01</span>
          </div>
        </div>
        <div className="w-1/5 group">
          <div className="relative overflow-y-hidden mb-4">
            <img src="./assets/images/backpack.jpg" className="w-full"/>
            <div className="bg-[rgba(255,255,255,0.7)] flex justify-between w-full px-4 py-3 absolute bottom-[-54px] group-hover:bottom-0 ease-in duration-300">
              <TbShoppingBag className="text-3xl hover:bg-primary transition ease-in-out rounded-full p-1"/>
              <AiOutlineEye className="text-3xl hover:bg-primary transition ease-in-out rounded-full p-1"/>
              <AiOutlineHeart className="text-3xl hover:bg-primary transition ease-in-out rounded-full p-1"/>
              <MdInsertChartOutlined className="text-3xl hover:bg-primary transition ease-in-out rounded-full p-1"/>
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-[#669900] font-work text-lg font-semibold mr-4">$1000</span>
            <span className="line-through text-[#999] text-sm">$1100</span>
          </div>
          <p className="text-secondary text-sm hover:text-primary my-4"><a href="#">Marshall Kilburn Portable Analog Watch</a></p>
          <div className="flex items-center">
            <AiFillStar className="text-primary"/>
            <AiFillStar className="text-primary"/>
            <AiFillStar className="text-primary"/>
            <AiFillStar className="text-primary"/>
            <AiFillStar className="text-[#ccc]"/>
            <span class="text-sm text-textColor ml-4">01</span>
          </div>
        </div>
        <div className="w-1/5 group">
          <div className="relative overflow-y-hidden mb-4">
            <img src="./assets/images/watch.jpg" className="w-full"/>
            <div className="bg-[rgba(255,255,255,0.7)] flex justify-between w-full px-4 py-3 absolute bottom-[-54px] group-hover:bottom-0 ease-in duration-300">
              <TbShoppingBag className="text-3xl hover:bg-primary transition ease-in-out rounded-full p-1"/>
              <AiOutlineEye className="text-3xl hover:bg-primary transition ease-in-out rounded-full p-1"/>
              <AiOutlineHeart className="text-3xl hover:bg-primary transition ease-in-out rounded-full p-1"/>
              <MdInsertChartOutlined className="text-3xl hover:bg-primary transition ease-in-out rounded-full p-1"/>
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-[#669900] font-work text-lg font-semibold mr-4">$1000</span>
            <span className="line-through text-[#999] text-sm">$1100</span>
          </div>
          <p className="text-secondary text-sm hover:text-primary my-4"><a href="#">Marshall Kilburn Portable Analog Watch</a></p>
          <div className="flex items-center">
            <AiFillStar className="text-primary"/>
            <AiFillStar className="text-primary"/>
            <AiFillStar className="text-primary"/>
            <AiFillStar className="text-primary"/>
            <AiFillStar className="text-[#ccc]"/>
            <span class="text-sm text-textColor ml-4">01</span>
          </div>
        </div>
        <div className="w-1/5 group">
          <div className="relative overflow-y-hidden mb-4">
            <img src="./assets/images/shirt.jpg" className="w-full"/>
            <div className="bg-[rgba(255,255,255,0.7)] flex justify-between w-full px-4 py-3 absolute bottom-[-54px] group-hover:bottom-0 ease-in duration-300">
              <TbShoppingBag className="text-3xl hover:bg-primary transition ease-in-out rounded-full p-1"/>
              <AiOutlineEye className="text-3xl hover:bg-primary transition ease-in-out rounded-full p-1"/>
              <AiOutlineHeart className="text-3xl hover:bg-primary transition ease-in-out rounded-full p-1"/>
              <MdInsertChartOutlined className="text-3xl hover:bg-primary transition ease-in-out rounded-full p-1"/>
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-[#669900] font-work text-lg font-semibold mr-4">$1000</span>
            <span className="line-through text-[#999] text-sm">$1100</span>
          </div>
          <p className="text-secondary text-sm hover:text-primary my-4"><a href="#">Marshall Kilburn Portable Analog Watch</a></p>
          <div className="flex items-center">
            <AiFillStar className="text-primary"/>
            <AiFillStar className="text-primary"/>
            <AiFillStar className="text-primary"/>
            <AiFillStar className="text-primary"/>
            <AiFillStar className="text-[#ccc]"/>
            <span class="text-sm text-textColor ml-4">01</span>
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default CategorySlides