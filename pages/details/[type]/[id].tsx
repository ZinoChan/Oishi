import Comments from "@components/details/Comments";
import Navbar from "@components/Navbar";
import Image from "next/image";
import { addItem } from "@slices/cartSlice";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Cart from "@components/menu/Cart";
import toast from "react-hot-toast";

const ItemDetails = () => {
  const router = useRouter();

  const { type, id } = router.query;

  const { items, cart } = useSelector((state: { items: any; cart: any }) => ({
    items: state.items,
    cart: state.cart,
  }));

  const item_details = items
    ?.find((item) => item.type === type)
    ?.items?.find((item) => item.id === Number(id));

  const inCart = cart.some((item) => item.id === item_details?.id);

  const dispatch = useDispatch();

  const [openCart, setOpenCart] = useState(false);

  const placeOrder = () => {
    const order = {
      id: item_details.id,
      item_name: item_details.item_name,
      item_image: item_details.item_image,
      price: item_details.price,
      category: item_details.category,
      quantity: 1,
    };

    dispatch(addItem(order));

    toast.success("order added to basket");
  };

  return (
    <>
      {item_details && (
        <section className="min-h-screen flex items-center py-20 bg-light_gray">
          <Navbar setOpenCart={setOpenCart} />
          <Cart openCart={openCart} setOpenCart={setOpenCart} />
          <div className="xl:max-w-screen-xl  px-2 mx-auto">
            <div className="grid lg:grid-cols-2 lg:grid-rows-2 grid-cols-1  gap-8">
              <div className="self-center">
                <h1 className="font-main text-2xl font-bold capitalize mb-2">
                  {item_details.item_name}
                </h1>
                <p className="text-md font-poppins text-gray-500 leading-normal mb-4">
                  {item_details.description}
                </p>
                <h2 className="font-main text-xl font-bold capitalize">
                  Ingredients
                </h2>
                <p className="text-md font-poppins text-gray-500 leading-normal mb-4">
                  {item_details.ingredients}
                </p>
              </div>
              <div className="xl:row-span-2 self-center justify-self-center">
                <Image
                  src={item_details.item_image}
                  alt="pizza"
                  width={400}
                  height={400}
                />
                <div className="flex justify-between items-center mt-6 flex-col sm:flex-row">
                  {/* <div className="flex space-x-6">
                <h2 className="font-main text-xl font-bold capitalize">
                  Size :
                </h2>
                {["M", "L", "XL"].map((size, index) => (
                  <button
                    key={`${size}-${index}`}
                    className="w-8 h-8 bg-secondary font-main font-bold text-md rounded-lg mr-2"
                  >
                    {size}
                  </button>
                ))}
              </div>
              <div className="flex space-x-2 items-center">
                <h2 className="font-main text-xl font-bold capitalize mb-2">
                  Quantity :
                </h2>
                <button className="w-8 h-8 bg-secondary font-main font-bold text-md rounded-lg">
                  +
                </button>
                <p>1</p>
                <button className="w-8 h-8 bg-secondary font-main font-bold text-md rounded-lg">
                  -
                </button>
              </div> */}
                </div>
                <div className="flex items-center justify-between mt-4 flex-col sm:flex-row">
                  <p className="text-md font-main text-xl  text-gray-900 leading-normal ">
                    Price: {item_details.price}$
                  </p>
                  <button
                    disabled={inCart}
                    onClick={placeOrder}
                    className="disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none transition-all hover:shadow-btn_lg shadow-btn  px-4 py-2 font-bold rounded bg-primary text-white font-main uppercase"
                  >
                    {inCart ? "in Cart" : "place order"}
                  </button>
                </div>
              </div>
              <div className="xl:col-span-1 lg:col-span-2">
                <Comments />
              </div>
            </div>
          </div>
        </section>
      )}
      {!items && <div>Loading...</div>}
    </>
  );
};

export default ItemDetails;
