import Cart from "@components/menu/Cart";
import MenuItem from "@components/menu/MenuItem";
import Navbar from "@components/Navbar";
import { list, slideDown, slideToLeft, slideToRight } from "@helpers/animation";
import { END } from "@redux-saga/core";
import { getItems } from "@slices/itemsSlice";
import { SagaStore, wrapper } from "@store/index";
import styles from "@styles/Menu.module.css";
import { motion } from "framer-motion";
import Link from "next/link";

import { useState } from "react";
import { useSelector } from "react-redux";

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  if (store.getState().items.length === 0) {
    store.dispatch(getItems());
    store.dispatch(END);
  }
  await (store as SagaStore).sagaTask.toPromise();
});

const Menu = () => {
  const [current_food, setCurrentFood] = useState("pizza");

  const { items, cart } = useSelector((state: { items: any; cart: any }) => ({
    items: state.items,
    cart: state.cart,
  }));

  const food = items?.find((item) => item.type === current_food);

  const menuIcons = [
    { name: "pizza", src: "/images/icons/pizza.svg" },
    { name: "burger", src: "/images/icons/burger.svg" },
    { name: "donut", src: "/images/icons/donut.svg" },
    { name: "drink", src: "/images/icons/drink.svg" },
  ];

  const [openCart, setOpenCart] = useState(false);

  return (
    <section className="min-h-screen flex items-center py-20 bg-light_gray">
      <Cart openCart={openCart} setOpenCart={setOpenCart} />
      <Navbar setOpenCart={setOpenCart} />
      <div className="max-w-screen-xl px-2 mx-auto w-full">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={slideDown}
          className="font-main text-3xl capitalize mb-10"
        >
          Main menu
        </motion.h1>
        <div className="flex justify-between items-center md:space-y-0 space-y-4 md:flex-row flex-col max-w-screen-md mx-auto mb-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideToRight}
            custom={0.9}
            className="flex items-center sm:justify-center sm:space-x-6 justify-between sm:flex-no-wrap  flex-wrap"
          >
            {menuIcons.map((icon, index) => (
              <div
                key={`${icon.name}-${index}`}
                onClick={() => setCurrentFood(icon.name)}
                className={`
                ${current_food === icon.name && "border-primary"}
                rounded-xl border border-gray-200 
                text-center w-16 p-1 hover:border-primary cursor-pointer`}
              >
                <img
                  src={icon.src}
                  className="w-10 h-10 mx-auto"
                  alt={icon.name}
                />
                <span className="text-md text-gray-600 capitalize font-poppins font-bold">
                  {icon.name}
                </span>
              </div>
            ))}
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideToLeft}
            custom={0.9}
          >
            <Link href="/customize">
              <a className=" focus:outline-none transition-all hover:shadow-btn_lg shadow-btn px-4 py-2 font-bold rounded bg-primary text-white font-main text-sm">
                Customize order
              </a>
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={list}
          className={`${styles.menu} grid grid-cols-2 md:grid-cols-auto-4 md:gap-8 gap-4   justify-center`}
        >
          {food?.items.length === 0 && <p>Food Not Available Yet</p>}

          {food?.items &&
            food?.items?.map(({ id, item_name, item_image, price }) => (
              <MenuItem
                key={id}
                cart={cart}
                category={current_food}
                id={id}
                item_name={item_name}
                item_image={item_image}
                price={price}
              />
            ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
