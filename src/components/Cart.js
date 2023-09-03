import React from "react";
import Breadcrumb from "./Breadcrumb";
import { AiOutlineClose } from "react-icons/ai";
import { BiMinus, BiPlus } from "react-icons/bi";
import { BsArrowLeft } from "react-icons/bs";
import { GrUpdate } from "react-icons/gr";

const Cart = () => {
  return (
    <>
      <Breadcrumb />
      <div className="max-w-container mx-auto mt-4">
        <h1 className="text-center font-work font-semibold text-5xl my-12">
          Cart
        </h1>
        <div>
          <table class="table-auto w-full font-work text-base">
            <thead className="bg-bgColor">
              <tr className="border-b border-border">
                <th className="text-start py-2">&nbsp;</th>
                <th className="text-start py-2">PRODUCT</th>
                <th className="text-start py-2">PRICE</th>
                <th className="text-start py-2">QUANTITY</th>
                <th className="text-start py-2">TOTAL</th>
                <th className="text-start py-2">&nbsp;</th>
              </tr>
            </thead>
            <tbody className="[&>tr]:border-b [&>tr]:border-border [&>tr>td]:py-4">
              <tr>
                <td>
                  <div className="w-24">
                    <img src="./assets/images/shirt.jpg" />
                  </div>
                </td>
                <td>Apple Macbook Retina Display 12”</td>
                <td>$625.50</td>
                <td>
                  <div className="relative inline-block">
                    <input
                      className="w-24 h-6 border border-solid border-[#999] text-sm font-semibold text-center p-5"
                      type="text"
                      value="1"
                    />
                    <BiMinus className="text-[#999] hover:text-black text-2xl absolute top-1/2 left-2 translate-y-[-50%]" />
                    <BiPlus className="text-[#999] hover:text-black text-2xl absolute top-1/2 right-2 translate-y-[-50%]" />
                  </div>
                </td>
                <td>$625.50</td>
                <td>
                  <AiOutlineClose />
                </td>
              </tr>
              <tr>
                <td>
                  <div className="w-24">
                    <img src="./assets/images/shirt.jpg" />
                  </div>
                </td>
                <td>Apple Macbook Retina Display 12”</td>
                <td>$625.50</td>
                <td>
                  <div className="relative inline-block">
                    <input
                      className="w-24 h-6 border border-solid border-[#999] text-sm font-semibold text-center p-5"
                      type="text"
                      value="1"
                    />
                    <BiMinus className="text-[#999] hover:text-black text-2xl absolute top-1/2 left-2 translate-y-[-50%]" />
                    <BiPlus className="text-[#999] hover:text-black text-2xl absolute top-1/2 right-2 translate-y-[-50%]" />
                  </div>
                </td>
                <td>$625.50</td>
                <td>
                  <AiOutlineClose />
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={6} className="pt-6">
                  <div className="flex justify-between">
                    <button className="mr-auto bg-primary py-3 px-5 font-semibold flex items-center gap-x-3">
                      <BsArrowLeft /> Back To Top
                    </button>
                    <button className="ml-auto py-3 px-5 font-semibold border border-[#7f7f7f] flex items-center gap-x-3">
                      <GrUpdate /> Update Cart
                    </button>
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className="flex justify-between gap-x-8 mt-10">
          <div className="w-1/3 ">
            <label for="coupon" className="font-work text-xl">
              Coupon Discount
            </label>
            <input
              type="text"
              placeholder="Coupon code"
              id="coupon"
              className="w-full border border-border py-3 px-5 mt-8 mb-6 outline-none"
            />
            <button className="py-3 px-5 font-semibold border border-border flex items-center gap-x-3">
              Apply coupon
            </button>
          </div>
          <div className="w-2/3">
            <div className="bg-bgColor border border-border px-6">
              <div className="flex justify-between py-5 border-b border-border">
                <p className="font-work text-base">Subtotal</p>
                <p className="font-work text-base">$625.50</p>
              </div>
              <div className="flex justify-between py-5">
                <p className="font-work text-xl font-semibold">Total</p>
                <p className="font-work text-xl font-semibold text-red-600">
                  $625.50
                </p>
              </div>
            </div>
            <button className="w-full bg-primary py-3 px-5 font-semibold mt-4">
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
