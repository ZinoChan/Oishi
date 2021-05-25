import { useSelector } from "react-redux";
import Register from "pages/register";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@lib/firebase";
import Loader from "./Loader";

const WithAuth = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (!user) {
      toast.error("You need to Login To checkout");
    }
  }, [user]);

  return <>{loading ? <Loader /> : user ? children : <Register />}</>;
};

export default WithAuth;
