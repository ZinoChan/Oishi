import React from "react";

const SumTotal = () => {
  return (
    <div className="flex items-center max-w-screen-md mx-auto justify-between mt-4 flex-wrap">
      <h2 className="font-poppins text-md font-bold capitalize  text-center">
        Total Price: 30$
      </h2>

      <div className="flex space-x-2">
        <button className="rounded w-6 h-6 flex items-center bg-primary text-white justify-center text-md font-poppins font-bold">
          +
        </button>
        <span>1</span>
        <button className="rounded w-6 h-6 flex items-center bg-primary text-white justify-center text-md font-poppins font-bold">
          -
        </button>
      </div>
      <button className="bg-secondary font-poppins font-bold px-4 py-1 ">
        Place Order
      </button>
    </div>
  );
};

export default SumTotal;
