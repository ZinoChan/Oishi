import { signInWithGoogle, signOut } from "@slices/authSlice";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

const Navbar = ({ setOpenCart = null }) => {
  const { cartLength, userExists, authLoading } = useSelector(
    (state: { cart: any; auth: any; app: any }) => ({
      cartLength: state.cart.length,
      userExists: !!state.auth?.id,
      authLoading: state.app?.authLoading,
    })
  );

  const dispatch = useDispatch();

  return (
    <header className="absolute top-0 w-full py-4">
      <nav className="flex max-w-screen-xl px-2 items-center mx-auto justify-between">
        <div className="w-24 h-auto">
          <img src="/images/logo.png" alt="Logo" />
        </div>
        <ul className="flex items-center space-x-4">
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
                className="w-8 h-auto"
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
              className="transition-all hover:shadow-btn px-4 py-1 font-bold rounded border border-primary text-primary font-main uppercase"
            >
              log out
            </button>
          )}
          {!authLoading && !userExists && (
            <button
              onClick={() => dispatch(signInWithGoogle())}
              className="transition-all hover:shadow-btn px-4 py-1 font-bold rounded border border-primary text-primary font-main uppercase"
            >
              Log in
            </button>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
