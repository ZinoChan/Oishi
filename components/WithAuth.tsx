import { useSelector } from "react-redux";
import Register from "pages/register";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@lib/firebase";
import Loader from "./Loader";
import EmptyCart from "./checkout/EmptyCart";

const WithAuth = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);

  const cart = useSelector((state: { cart: any }) => state.cart);

  useEffect(() => {
    if (!user) {
      toast.error("You need to Login To checkout");
    }
  }, [user]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : user ? (
        cart.length > 0 ? (
          children
        ) : (
          <EmptyCart />
        )
      ) : (
        <Register />
      )}
    </>
  );
};

export default WithAuth;
