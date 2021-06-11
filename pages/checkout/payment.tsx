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
      <Navigation current="payment" />
      <section className="min-h-screen sm:py-0 py-20 flex items-center">
        <div className="max-w-screen-md px-2 w-full mx-auto">
          <div className="flex sm:justify-between  justify-center space-x-2 sm:space-x-0 items-center flex-wrap">
            {paymentMethods.map((method, index) => (
              <div
                key={`${method.name}-${index}`}
                onClick={() => setPaymentMethod(method.name)}
                className={`${
                  method.name === paymentMethod && "text-white bg-primary"
                } cursor-pointer rounded border-2 mb-2 w-28 h-auto border-primary p-2 flex flex-col items-center space-y-2`}
              >
                <img
                  src={method.icon}
                  className="w-10 h-10"
                  alt={method.name}
                />
                <p className="font-poppins text-sm capitalize ">
                  {method.name}
                </p>
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
              <button className="font-main text-white bg-primary border-2 border-primary px-4 py-1 rounded">
                Confirm
              </button>
            </div>
          )}
        </div>
      </section>
    </WithAuth>
  );
};

export default Payment;
