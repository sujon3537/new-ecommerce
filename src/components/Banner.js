import React from 'react'
import {  AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SliderNextArrow from './SliderNextArrow';
import SliderPrevArrow from './SliderPrevArrow';

const Banner = () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SliderNextArrow className="!right-1"/>,
    prevArrow: <SliderPrevArrow className="!left-1"/>,
    appendDots: dots => (
      <div
        style={{
          position: "absolute",
          bottom: "10px"
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  }
  return (
    <div className="flex justify-between max-w-container mx-auto mt-8">
      <div className="w-2/3 border border-border">
        <Slider {...settings}>
          <div>
            <img src="./assets/images/bannerslider1.jpg" className="w-full h-full block"/>
          </div>
          <div>
            <img src="./assets/images/bannerslider2.jpg" className="w-full h-full block"/>
          </div>
          <div>
            <img src="./assets/images/bannerslider1.jpg" className="w-full h-full block"/>
          </div>
        </Slider> 
      </div>
  
      <div className="max-w-1/3"><img src="./assets/images/banner.png"/></div>
    </div>
  )
}

export default Banner