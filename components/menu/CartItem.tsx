import { addQty, minusQty, removeItem } from "@slices/cartSlice";
import Image from "next/image";
import { useDispatch } from "react-redux";

interface CartItem {
  id: string;
  item_name: string;
  item_image: string;
  price: number;
  quantity: number;
}

const CartItem = ({ id, item_name, item_image, price, quantity }: CartItem) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-white rounded-lg px-2 py-4 flex justify-between  space-x-4 mb-6">
      <Image
        width={80}
        height={80}
        src={item_image}
        className="w-20 h-auto"
        alt="pizza"
      />
      <div>
        <h3 className="font-poppins  text-md mb-1">
          {item_name} x {quantity}
        </h3>
        <span className="text-poppins font-bold text-md text-red-500">
          {(price * quantity).toFixed(2)}$
        </span>
      </div>
      <div className="flex flex-col items-end justify-between">
        <button onClick={() => dispatch(removeItem(id))}>
          <img src="/images/icons/trash.svg" className="w-5 h-auto" />
        </button>
        <div className="flex space-x-2">
          <button
            disabled={quantity === 1}
            onClick={() => dispatch(minusQty(id))}
            className="disabled:cursor-not-allowed disabled:opacity-70 rounded-full w-6 h-6 flex items-center bg-secondary  justify-center text-md font-poppins font-bold"
          >
            -
          </button>
          <button
            onClick={() => dispatch(addQty(id))}
            className="rounded-full w-6 h-6 flex items-center bg-secondary   justify-center text-md font-poppins font-bold"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
