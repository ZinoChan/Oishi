import { addQty, minusQty, removeItem } from "@slices/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ id, item_name, item_image, price, quantity }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-white rounded-lg px-2 py-4 flex justify-between mb-6">
      <img src={item_image} className="w-20 h-auto" alt="pizza" />
      <div>
        <h3 className="font-main capitalize text-xl mb-1">
          {item_name} x {quantity}
        </h3>
        <span className="text-poppins font-bold text-md text-red-500">
          {price}$
        </span>
      </div>
      <div className="flex flex-col items-end justify-between">
        <button onClick={() => dispatch(removeItem(id))}>
          <img src="/images/icons/trash.svg" className="w-5 h-auto" />
        </button>
        <div className="flex space-x-2">
          <button
            onClick={() => dispatch(minusQty(id))}
            className="rounded-full w-6 h-6 flex items-center bg-primary text-white justify-center text-md font-poppins font-bold"
          >
            -
          </button>
          <button
            onClick={() => dispatch(addQty(id))}
            className="rounded-full w-6 h-6 flex items-center bg-primary text-white  justify-center text-md font-poppins font-bold"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
