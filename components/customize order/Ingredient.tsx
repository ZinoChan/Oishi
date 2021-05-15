import React from "react";

const Ingredient = ({ name, price, price_per, quantity, img }) => {
  return (
    <div className="flex max-w-sm mx-auto items-center justify-between mb-4 border border-gray-200 sm:p-2 p-1 flex-wrap">
      <div className="flex space-x-6 items-center">
        <img src={img} className="rounded-full w-20 h-20" alt="pizza" />
        <div>
          <h3 className="font-main capitalize text-xl mb-1">{name}</h3>
          <span className="text-poppins font-bold text-md text-red-500">
            {price} / {price_per}
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between">
        <div className="flex space-x-2">
          <button className="rounded w-6 h-6 flex items-center bg-secondary justify-center text-md font-poppins font-bold">
            +
          </button>
          <span>{quantity}</span>
          <button className="rounded w-6 h-6 flex items-center bg-secondary justify-center text-md font-poppins font-bold">
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ingredient;
