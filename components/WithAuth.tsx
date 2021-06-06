import { useSelector } from "react-redux";
import Register from "pages/register";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@lib/firebase";
import EmptyCart from "./checkout/EmptyCart";
import AuthLoader from "./auth/AuthLoader";

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
        <AuthLoader />
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
