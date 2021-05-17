import React from "react";

const Paypal = () => {
  return (
    <form className="my-6 ">
      <div className="flex flex-col space-y-2 col-span-3 mb-4">
        <label htmlFor="email" className="font-main text-md">
          Email
        </label>
        <input type="email" className="border border-gray-200 rounded p-2" />
      </div>
      <div className="flex flex-col space-y-2">
        <label htmlFor="password" className="font-main text-md">
          Password
        </label>
        <input type="password" className="border border-gray-200 rounded p-2" />
      </div>
    </form>
  );
};

export default Paypal;
