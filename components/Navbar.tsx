import { signInWithGoogle, signOut } from "@slices/authSlice";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import styles from "@styles/Menu.module.css";
import { useState } from "react";
import { Divide as Hamburger } from "hamburger-react";

const Navbar = ({ setOpenCart = null }) => {
  const { cartLength, userExists, authLoading } = useSelector(
    (state: { cart: any; auth: any; app: any }) => ({
      cartLength: state.cart.length,
      userExists: !!state.auth?.id,
      authLoading: state.app?.authLoading,
    })
  );

  const [navOpen, setNavOpen] = useState(false);

  const dispatch = useDispatch();

  return (
    <header className="absolute top-0 w-full py-4">
      <nav className="flex max-w-screen-xl px-2 items-center mx-auto justify-between">
        <div className="w-24 h-auto">
          <img src="/images/logo.png" alt="Logo" />
        </div>
        <ul
          className={`
          flex md:flex-row items-center md:space-x-4
          md:h-auto md:text-black md:static md:bg-transparent
          md:space-y-0  md:justify-end
          h-screen z-40 w-full bg-primary 
          text-white fixed top-0 left-0 right-0 flex-col 
          transition-all duration-300
          justify-center space-y-6 transform md:scale-100 ${
            navOpen ? "scale-100" : "scale-0"
          }
          `}
        >
          <li className="font-main font-bold text-xl">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="font-main font-bold text-xl">
            <Link href="/menu">
              <a>Menu</a>
            </Link>
          </li>
          {setOpenCart && (
            <button
              className="focus:outline-none relative"
              onClick={() => setOpenCart(true)}
            >
              <img
                src="/images/icons/cart.svg"
                className={`${styles.cart} w-8 h-auto`}
                alt="cart"
              />

              <span className="absolute -right-2 text-sm -top-2 rounded-full w-5 h-5 bg-secondary text-center block">
                {cartLength}
              </span>
            </button>
          )}
          {!authLoading && userExists && (
            <button
              onClick={() => dispatch(signOut())}
              className="transition-all hover:shadow-btn px-4 py-1 font-bold rounded border md:border-primary md:text-primary font-main uppercase"
            >
              log out
            </button>
          )}
          {!authLoading && !userExists && (
            <Link href="/register">
              <a className="transition-all hover:shadow-btn px-4 py-1 font-bold rounded border md:border-primary md:text-primary font-main uppercase">
                Log in
              </a>
            </Link>
          )}
        </ul>
        <div className="md:hidden z-40">
          <Hamburger
            toggled={navOpen}
            toggle={() => setNavOpen(!navOpen)}
            color={`${navOpen ? "#fff" : "#FF4445"}`}
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
