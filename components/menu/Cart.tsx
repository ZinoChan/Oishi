import { cart } from "data/data";
import React from "react";
import CartItem from "./CartItem";
import Total from "./Total";

const Cart = ({ openCart, setOpenCart }) => {
  return (
    <div
      className={`${
        openCart ? "right-0" : "-right-full"
      }  transition-all  fixed duration-500 z-30 top-0 bottom-0  w-96 bg-secondary py-16  px-10`}
    >
      <div className="absolute top-4 left-4">
        <span
          className="hover:text-primary cursor-pointer text-2xl font-bold"
          onClick={() => setOpenCart(false)}
        >
          X
        </span>
      </div>
      <h2 className="font-main text-2xl capitalize mb-6">Cart Items</h2>
      {cart.map(({ item_name, item_image, price, quantity, id }) => (
        <CartItem
          item_name={item_name}
          item_image={item_image}
          price={price}
          quantity={quantity}
          key={id}
        />
      ))}
      <Total />
    </div>
  );
};

export default Cart;
