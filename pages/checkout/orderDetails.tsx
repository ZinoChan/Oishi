import Navigation from "@components/checkout/Navigation";
import CartItem from "@components/menu/CartItem";
import React from "react";

const OrderDetails = () => {
  return (
    <>
      <Navigation />
      <section className="min-h-screen sm:py-0 py-20 flex items-center">
        <div className="max-w-2xl px-2 w-full mx-auto">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8 mb-6">
            <CartItem />
            <CartItem />
          </div>
          <div className="flex items-center sm:justify-between flex-wrap sm:space-y-0 justify-center space-y-4">
            <button className="font-main border-2 border-primary text-primary  px-4 py-1 rounded ">
              back to menu
            </button>
            <button className="font-main text-white bg-primary  px-4 py-1 rounded ">
              Billing details
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default OrderDetails;
