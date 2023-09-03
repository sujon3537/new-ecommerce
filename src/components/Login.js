import React from "react";
import Breadcrumb from "./Breadcrumb";

const Login = () => {
  return (
    <>
      <Breadcrumb />
      <div className="bg-[#F1F1F1]  py-12">
        <h1 className="text-center font-work font-semibold text-3xl mb-6">
          Log in
        </h1>
        <div className="bg-white w-[430px] mx-auto p-8 rounded border border-border">
          <h2 className="font-work text-base mt-2 mb-4">Log In Your Account</h2>
          <input
            type="text"
            placeholder="Username or email address"
            className="w-full border border-border py-2 px-5 outline-none mb-3 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-border py-2 px-5 outline-none rounded mb-4"
          />
          <div className="flex items-center">
            <input type="checkbox" id="box" />
            <label for="box" className="font-work text-sm ml-3">
              Remember me
            </label>
            <a
              href="#"
              className="font-work text-sm text-secondary ml-auto hover:text-primary transition ease-in"
            >
              Forgot your password?
            </a>
          </div>
          <button className="w-full bg-primary py-3 px-5 font-semibold mt-4">
            Log in
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
