import React from "react";

const CreditCard = () => {
  return (
    <form className="my-6 grid sm:grid-cols-3 grid-cols-1 gap-4">
      <div className="flex flex-col space-y-2 sm:col-span-3">
        <label htmlFor="cardNumber" className="font-main text-md">
          Card Number
        </label>
        <input type="text" className="border border-gray-200 rounded p-2" />
      </div>
      <div className="flex flex-col space-y-2">
        <label htmlFor="Country" className="font-main text-md">
          Name on Card
        </label>
        <input type="text" className="border border-gray-200 rounded p-2" />
      </div>
      <div className="flex flex-col space-y-2">
        <label htmlFor="Country" className="font-main text-md">
          Cvv Code
        </label>
        <input type="text" className="border border-gray-200 rounded p-2" />
      </div>
      <div className="flex flex-col space-y-2">
        <label htmlFor="Adress" className="font-main text-md">
          Expirity Date
        </label>
        <input type="text" className="border border-gray-200 rounded p-2" />
      </div>
    </form>
  );
};

export default CreditCard;
