import React from 'react'
import {GrPrevious} from 'react-icons/gr'

const SliderPrevArrow = (props) => {
    const { className, style, onClick } = props;
  return (
    <span className="bg-white w-10 h-10 drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)] text-[#333] rounded-full !flex justify-center items-center absolute left-[-10px] top-1/2 z-50" style={{ ...style}} onClick={onClick}>
        <GrPrevious/>
    </span>
  )
}

export default SliderPrevArrow