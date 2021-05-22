import CreditCard from "@components/checkout/CreditCard";
import Navigation from "@components/checkout/Navigation";
import Paypal from "@components/checkout/Paypal";
import WithAuth from "@components/WithAuth";
import React, { useState } from "react";

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState("credit card");

  const paymentMethods = [
    { name: "credit card", icon: "/images/icons/credit card.svg" },
    { name: "paypal", icon: "/images/icons/paypal.svg" },
    { name: "cash", icon: "/images/icons/cash.svg" },
  ];

  return (
    <WithAuth>
      <Navigation />
      <section className="min-h-screen sm:py-0 py-20 flex items-center">
        <div className="max-w-screen-md px-2 w-full mx-auto">
          <div className="flex justify-between items-center flex-wrap">
            {paymentMethods.map((method, index) => (
              <div
                key={`${method.name}-${index}`}
                onClick={() => setPaymentMethod(method.name)}
                className={`${
                  method.name === paymentMethod && "text-white bg-primary"
                } cursor-pointer rounded border-2 w-32 h-auto border-primary p-2 flex flex-col items-center space-y-2`}
              >
                <img
                  src={method.icon}
                  className="w-10 h-10"
                  alt={method.name}
                />
                <p className="font-poppins capitalize ">{method.name}</p>
              </div>
            ))}
          </div>
          {paymentMethod === "credit card" && <CreditCard />}

          {paymentMethod === "paypal" && <Paypal />}

          {paymentMethod === "cash" && (
            <div>
              <p className="font-main text-md text-center leading-normal py-16">
                Pay to the delivery man at delivery time
              </p>
            </div>
          )}

          <div className="flex items-center sm:justify-between flex-wrap sm:space-x-0 space-x-2 justify-center ">
            <button className="font-main border-2 border-primary text-primary sm:mb-0 mb-4 px-4 py-1 rounded ">
              back to billing
            </button>
            <button className="font-main text-white bg-primary mb-4 border-2 border-primary  px-4 py-1 rounded ">
              Confirm
            </button>
          </div>
        </div>
      </section>
    </WithAuth>
  );
};

export default Payment;
