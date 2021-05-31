import React from "react";
import Link from "next/link";

const EmptyCart = () => {
  return (
    <div className="flex items-center flex-col justify-center h-screen">
      <h2 className="font-main text-2xl mb-4">Your Cart is Empty</h2>
      <Link href="/menu">
        <a>
          <button className="font-main text-white bg-primary  px-4 py-1 rounded ">
            Back To Menu
          </button>
        </a>
      </Link>
    </div>
  );
};

export default EmptyCart;
