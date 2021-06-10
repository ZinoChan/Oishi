import { itemSlideUp } from "@helpers/animation";
import { addItem, CartItem } from "@slices/cartSlice";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

interface MenuItems {
  id: string;
  item_name: string;
  item_image: string;
  category: string;
  price: number;
  cart: CartItem[];
}

const MenuItem = ({
  cart,
  id,
  category,
  item_image,
  price,
  item_name,
}: MenuItems) => {
  const inCart = cart.some((item) => item.id === id);

  const dispatch = useDispatch();

  const placeOrder = () => {
    const order = {
      id,
      item_name,
      item_image,
      price,
      category,
      quantity: 1,
      ingredients: null,
    };

    dispatch(addItem(order));

    toast.success("order added to basket");
  };

  return (
    <motion.div
      variants={itemSlideUp}
      className="border border-gray-200  bg-white rounded-lg p-2 text-center"
    >
      <Link href={`/details/${category}/${id}`}>
        <a>
          <div>
            <Image
              src={item_image}
              alt="pizza"
              className="block mb-1 mx-auto"
              width={150}
              height={150}
            />
          </div>
        </a>
      </Link>
      <h3 className="font-main capitalize text-xl mb-1">{item_name}</h3>
      <div className="flex justify-between items-center">
        <span className="text-poppins font-bold text-md text-gray-500">
          Price: {price}$
        </span>
        <button
          disabled={inCart}
          onClick={placeOrder}
          className="disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none flex items-center justify-center font-bold text-white w-6 h-6 rounded-full bg-primary"
        >
          <span>+</span>
        </button>
      </div>
    </motion.div>
  );
};

export default MenuItem;
