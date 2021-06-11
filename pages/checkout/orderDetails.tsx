import Navigation from "@components/checkout/Navigation";
import CartItem from "@components/menu/CartItem";
import React from "react";
import { useSelector } from "react-redux";
import WithAuth from "@components/WithAuth";
import Link from "next/link";

const OrderDetails = () => {
  const cart = useSelector((state: { cart: any }) => state.cart);

  return (
    <WithAuth>
      <Navigation current="orderDetails" />
      <section className="min-h-screen sm:py-0 py-20 flex items-center">
        <div className="max-w-2xl px-2 w-full mx-auto">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8 mb-6">
            {cart.map(({ item_name, item_image, price, quantity, id }) => (
              <CartItem
                id={id}
                item_name={item_name}
                item_image={item_image}
                price={price}
                quantity={quantity}
                key={id}
              />
            ))}
          </div>
          <div className="flex items-center sm:justify-between flex-wrap sm:space-y-0 justify-center sm:space-x-2">
            <Link href="/menu">
              <a className="font-main border-2 mb-2 border-primary text-primary  px-4 py-1 rounded ">
                back to menu
              </a>
            </Link>
            <Link href="/checkout/billing">
              <a className="font-main text-white bg-primary mb-2 border-2 border-primary px-4 py-1 rounded ">
                Billing details
              </a>
            </Link>
          </div>
        </div>
      </section>
    </WithAuth>
  );
};

export default OrderDetails;
