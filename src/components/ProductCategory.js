import React from "react";
import Breadcrumb from "./Breadcrumb";
import { BsGrid3X3 } from "react-icons/bs";
import { FaList } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { RxBox } from "react-icons/rx";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";
import SidebarContent from "./SidebarContent";

const ProductCategory = () => {
  return (
    <>
      <Breadcrumb />
      <div className="max-w-container mx-auto flex mt-4">
        <div className="w-1/4 pr-5">
          <SidebarContent />
        </div>
        <div className="w-3/4">
          <div className="bg-bgColor w-full py-4 px-2 flex justify-between">
            <span>35 Products found</span>
            <div className="flex justify-between items-center gap-x-4">
              <select>
                <option>Deafault sorting</option>
              </select>
              <span>View</span>
              <BsGrid3X3 />
              <FaList />
            </div>
          </div>
          <Pagination itemsPerPage={12} />
        </div>
      </div>
    </>
  );
};

export default ProductCategory;
