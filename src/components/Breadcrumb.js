import React from 'react'
import { Link } from 'react-router-dom'
import {FiChevronRight} from 'react-icons/fi'

const Breadcrumb = () => {
  return (
    <div className=" bg-[#F1F1F1]">
        <div className="max-w-container mx-auto py-4">
            <p className="font-work font-regular text-sm text-black flex items-center gap-x-1">
                <Link to="/" className="hover:text-primary">Home</Link> <FiChevronRight/> {window.location.pathname.split("/")[1]}
            </p>
        </div>
    </div>
  )
}

export default Breadcrumb