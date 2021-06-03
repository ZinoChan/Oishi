import { addItem } from "@slices/cartSlice";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Alert } from "react-st-modal";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { clearCustomize } from "@slices/customizeSlice";

interface AppProps {
  food_type: string;
}

const SumTotal = ({ food_type }: AppProps) => {
  const dispatch = useDispatch();

  const [qty, setQty] = useState(1);

  const customized = useSelector(
    (state: { customized: any }) => state.customized
  );

  const ingredientsPrice = (): number => {
    if (customized.length !== 0) {
      return customized
        .reduce((sum, i) => {
          return sum + i.price * i.quantity;
        }, 0)
        .toFixed(2);
    } else {
      return 0;
    }
  };

  const backingPrice = 6 * qty;
  const totalPrice = Number(
    (ingredientsPrice() * qty + backingPrice).toFixed(2)
  );

  const onPlaceOrder = () => {
    if (customized.length < 4) {
      Alert(
        `You have to add at least 4 ingredients to your ${food_type}`,
        "insufficient customization"
      );
    } else {
      const order = {
        id: uuidv4(),
        item_name: `customized ${food_type}`,
        item_image: "",
        price: totalPrice,
        category: food_type,
        quantity: qty,
        ingredients: customized,
      };
      dispatch(addItem(order));
      toast.success("order added to basket");
      dispatch(clearCustomize());
    }
  };

  return (
    <div className="flex items-center max-w-screen-md mx-auto justify-between mt-4 flex-wrap">
      <div>
        <h3 className="font-poppins text-md capitalize ">
          Baking Price: {backingPrice}
        </h3>
        <h3 className="font-poppins text-md capitalize ">
          Total Ingredients Price: {(ingredientsPrice() * qty).toFixed(2)}$
        </h3>
        <h3 className="font-poppins text-md capitalize font-bold">
          Total Price: {totalPrice}
        </h3>
      </div>

      <div className="flex space-x-2">
        <button
          onClick={() => setQty(qty + 1)}
          className="rounded w-6 h-6 flex items-center bg-primary text-white justify-center text-md font-poppins font-bold"
        >
          +
        </button>
        <span>{qty}</span>
        <button
          disabled={qty === 1}
          onClick={() => setQty(qty - 1)}
          className="disabled:cursor-not-allowed disabled:opacity-70 rounded w-6 h-6 flex items-center bg-primary text-white justify-center text-md font-poppins font-bold"
        >
          -
        </button>
      </div>
      <button
        onClick={onPlaceOrder}
        className=" bg-secondary font-poppins font-bold px-4 py-1 "
      >
        Place Order
      </button>
    </div>
  );
};

export default SumTotal;
