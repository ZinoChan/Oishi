import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";
import Image from "next/image";
import { clearCart } from "@slices/cartSlice";

const Cart = ({ openCart, setOpenCart }) => {
  const cart = useSelector((state: { cart: any }) => state.cart);

  const dispatch = useDispatch();

  return (
    <div
      className={`${
        openCart ? "right-0" : "-right-full"
      }  transition-all  fixed duration-500 z-30 top-0 bottom-0 overflow-y-scroll w-96 max-w-100 bg-secondary py-16  px-10`}
    >
      <div className="absolute top-4 left-4">
        <span
          className="hover:text-primary cursor-pointer text-2xl font-bold"
          onClick={() => setOpenCart(false)}
        >
          X
        </span>
      </div>
      {cart.length > 0 && (
        <>
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-main text-2xl capitalize ">Cart Items</h2>
            <button
              onClick={() => dispatch(clearCart())}
              className="px-2 py-1 font-main text-white bg-black rounded text-sm"
            >
              clear cart
            </button>
          </div>
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
          <CartTotal cart={cart} />
        </>
      )}
      {cart.length === 0 && (
        <>
          <h2 className="font-main text-2xl capitalize mb-6">
            Your Cart is Empty
          </h2>
          <div className="absolute top-1/2 transform -translate-y-1/2">
            <Image src="/images/empty cart.png" width={250} height={200} />
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
