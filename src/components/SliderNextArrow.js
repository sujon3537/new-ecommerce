import React from 'react'
import {GrNext} from 'react-icons/gr'

const SliderNextArrow = (props) => {
    const { className, style, onClick } = props;
  return (
    <span className="bg-white w-10 h-10 drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)] text-[#333] rounded-full !flex justify-center items-center absolute right-[-10px] top-1/2" style={{ ...style}} onClick={onClick}>
        <GrNext/>
    </span>
  )
}

export default SliderNextArrow