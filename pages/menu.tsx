import Cart from "@components/menu/Cart";
import MenuItem from "@components/menu/MenuItem";
import Navbar from "@components/Navbar";
import styles from "@styles/Menu.module.css";
import { useState } from "react";

const Menu = () => {
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
        <h1 className="font-main text-3xl capitalize mb-10">Main menu</h1>
        <div className="flex items-center sm:justify-center sm:space-x-6 justify-between mb-10 sm:flex-no-wrap  flex-wrap">
          {menuIcons.map((icon, index) => (
            <div
              key={`${icon.name}-${index}`}
              className="rounded-xl border border-gray-200 text-center w-16 p-1"
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
        </div>
        <div
          className={`${styles.menu} grid grid-cols-2 md:grid-cols-auto-4 md:gap-8 gap-4   justify-center`}
        >
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
        </div>
      </div>
    </section>
  );
};

export default Menu;
