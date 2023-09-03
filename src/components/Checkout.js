import React from "react";
import Breadcrumb from "./Breadcrumb";

const Checkout = () => {
  return (
    <>
      <Breadcrumb />
      <div className="max-w-container mx-auto py-8">
        <h1 className="text-center font-work font-semibold text-5xl my-12">
          Checkout
        </h1>
        <div className="flex justify-between gap-x-8">
          <div className="w-7/12">
            <h2 className="font-work font-semibold text-xl mb-3">
              Billing details
            </h2>
            <label className="font-work text-sm text-textColor">
              First name
            </label>
            <input
              type="text"
              className="w-full border border-[#ccc] py-2 px-4 outline-none my-3"
            />

            <label className="font-work text-sm text-textColor">
              Last name
            </label>
            <input
              type="text"
              className="w-full border border-[#ccc] py-2 px-4 outline-none my-3"
            />
            <label className="font-work text-sm text-textColor">
              Company name (optional)
            </label>
            <input
              type="text"
              className="w-full border border-[#ccc] py-2 px-4 outline-none my-3"
            />
            <label className="font-work text-sm text-textColor">
              Country / Region
            </label>
            <input
              type="text"
              className="w-full border border-[#ccc] py-2 px-4 outline-none my-3"
            />
            <label className="font-work text-sm text-textColor">
              Street address
            </label>
            <input
              type="text"
              className="w-full border border-[#ccc] py-2 px-4 outline-none my-3"
            />
            <input
              type="text"
              className="w-full border border-[#ccc] py-2 px-4 outline-none my-3"
            />
            <label className="font-work text-sm text-textColor">
              Town / City
            </label>
            <input
              type="text"
              className="w-full border border-[#ccc] py-2 px-4 outline-none my-3"
            />
            <label className="font-work text-sm text-textColor">State</label>
            <input
              type="text"
              className="w-full border border-[#ccc] py-2 px-4 outline-none my-3"
            />
            <label className="font-work text-sm text-textColor">ZIP Code</label>
            <input
              type="text"
              className="w-full border border-[#ccc] py-2 px-4 outline-none my-3"
            />
            <label className="font-work text-sm text-textColor">Phone</label>
            <input
              type="text"
              className="w-full border border-[#ccc] py-2 px-4 outline-none my-3"
            />
            <label className="font-work text-sm text-textColor">
              Email address
            </label>
            <input
              type="text"
              className="w-full border border-[#ccc] py-2 px-4 outline-none my-3"
            />

            <h2 className="font-work font-semibold text-xl my-3">
              Additional information
            </h2>

            <label className="font-work text-sm text-textColor">
              Order notes (optional)
            </label>
            <input
              type="text"
              className="w-full border border-[#ccc] py-2 px-4 outline-none my-3"
            />

            <input type="checkbox" id="box" />
            <label for="box" className="font-work text-sm ml-3">
              Yes, I'm ok with you sending me additional newsletter and email
              content (optional)
            </label>
          </div>
          <div className="w-5/12">
            <h2 className="font-work font-semibold text-xl mb-3">Your order</h2>
            <div className="bg-bgColor p-5 border border-[#ccc]">
              <table className="table-auto w-full">
                <thead>
                  <tr className="font-work font-semibold text-base">
                    <th className="text-start">PRODUCT</th>
                    <th className="text-start">SUBTOTAL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="font-work text-sm">
                    <td className="py-3">
                      Apple Macbook Retina Display 12” × 1
                    </td>
                    <td>$625.50</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td className="font-work font-semibold text-base py-3">
                      Subtotal
                    </td>
                    <td className="font-work font-semibold text-sm text-red-600">
                      $625.50
                    </td>
                  </tr>
                  <tr>
                    <td className="font-work font-semibold text-xl py-3">
                      Total
                    </td>
                    <td className="font-work font-semibold text-xl text-red-600">
                      $625.50
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <button className="w-full bg-primary py-3 px-5 font-semibold mt-4">
              Place order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
