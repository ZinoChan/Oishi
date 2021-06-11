import Link from "next/link";
import React from "react";

const Navigation = ({ current }) => {
  return (
    <div className=" w-full bg-gray-100 py-4 flex items-center sm:justify-center flex-col sm:flex-row sm:space-y-0 space-y-2  md:space-x-12">
      <div className="flex items-center space-x-2">
        <div
          className={`${
            current === "orderDetails" && " bg-primary text-white"
          } border-2 border-primary rounded-full flex items-center justify-center w-8 h-8`}
        >
          1
        </div>
        <h4 className="font-main text-lg capitalize text-gray-800">
          Order Details
        </h4>
      </div>

      <div className="flex items-center space-x-2">
        <div
          className={`${
            current === "billing" && " bg-primary text-white"
          } border-2 rounded-full flex items-center justify-center border-primary w-8 h-8`}
        >
          2
        </div>
        <h4 className="font-main text-lg capitalize text-gray-800">
          Billing Details
        </h4>
      </div>

      <div className="flex items-center space-x-2">
        <div
          className={`${
            current === "payment" && " bg-primary text-white"
          } border-2 rounded-full flex items-center justify-center border-primary w-8 h-8`}
        >
          3
        </div>
        <h4 className="font-main text-lg capitalize text-gray-800">Payment</h4>
      </div>
    </div>
  );
};

export default Navigation;
