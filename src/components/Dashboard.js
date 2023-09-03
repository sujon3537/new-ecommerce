import React from "react";
import Breadcrumb from "./Breadcrumb";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <Breadcrumb />
      <div className="max-w-container mx-auto py-8">
        <h1 className="text-center font-work font-semibold text-5xl my-12">
          My Account
        </h1>
        <div className="flex gap-x-4 items-center">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <img
              src="./assets/images/avatar.png"
              alt="avatar"
              className="w-full"
            />
          </div>
          <div>
            <span className="font-work text-lg text-textColor">Hello!</span>
            <h3 className="font-work text-lg font-semibold">Johndoe45</h3>
          </div>
        </div>
        <div className="flex gap-x-8 mt-8">
          <div className="w-72 bg-[#f6f6f6] border border-border">
            <ul className="divide-y divide-border">
              <li className="font-work text-sm hover:text-primary font-semibold py-3 px-5">
                <Link to="/dashboard">DASHBOARD</Link>
              </li>
              <li className="font-work text-sm hover:text-primary font-semibold py-3 px-5">
                <Link to="/dashboard/orders">ORDERS</Link>
              </li>
              <li className="font-work text-sm hover:text-primary font-semibold py-3 px-5">
                <Link to="/dashboard/downloads">DOWNLOADS</Link>
              </li>
              <li className="font-work text-sm hover:text-primary font-semibold py-3 px-5">
                ADDRESSES
              </li>
              <li className="font-work text-sm hover:text-primary font-semibold py-3 px-5">
                ACCOUNT DETAILS
              </li>
              <li className="font-work text-sm hover:text-primary font-semibold py-3 px-5">
                BECOME A VENDOR
              </li>
              <li className="font-work text-sm hover:text-primary font-semibold py-3 px-5">
                LOGOUT
              </li>
            </ul>
          </div>
          <div>
            <h2>laft part</h2>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
