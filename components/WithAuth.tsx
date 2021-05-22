import { useSelector } from "react-redux";
import Register from "pages/register";
import { useEffect } from "react";
import { toast } from "react-hot-toast";

const WithAuth = ({ children }) => {
  const userExists = useSelector((state: { auth: any }) => !!state.auth?.id);

  useEffect(() => {
    if (!userExists) {
      toast.error("You need to Login To checkout");
    }
  }, [userExists]);

  return <>{userExists ? children : <Register />}</>;
};

export default WithAuth;
