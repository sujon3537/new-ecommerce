import React from "react";
import { Link } from "react-router-dom";
import FilterItems from "./FilterItems";

const SidebarContent = () => {
  return (
    <>
      <div className="bg-bgColor p-4">
        <h3 className="font-work text-lg text-black mb-6">CATEGORIES</h3>
        <ul className="font-work text-sm text-black ml-3">
          <li>
            <Link to="#">Uncategorized</Link>
          </li>
          <li>
            <Link to="#">Babies & Moms</Link>
          </li>
          <li>
            <Link to="#">Books & Office</Link>
          </li>
          <li>
            <Link to="#">Cars & Motocycles</Link>
          </li>
          <li>
            <Link to="#">Clothing & Apparel</Link>
          </li>
          <li>
            <Link to="#">Computers & Technologies</Link>
          </li>
          <li>
            <Link to="#">Consumer Electrics</Link>
          </li>
          <li>
            <Link to="#">Garden & Kitchen</Link>
          </li>
          <li>
            <Link to="#">Health & Beauty</Link>
          </li>
          <li>
            <Link to="#">Jewelry & Watches</Link>
          </li>
          <li>
            <Link to="#">Phones & Accessories</Link>
          </li>
          <li>
            <Link to="#">Sport & Outdoor</Link>
          </li>
        </ul>
      </div>
      <FilterItems />
    </>
  );
};

export default SidebarContent;
