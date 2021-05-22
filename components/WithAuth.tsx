import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Register from "pages/register";

const WithAuth = ({ children, current_route }) => {
  const userExists = useSelector((state: { auth: any }) => !!state.auth?.id);
  const router = useRouter();

  //   useEffect(() => {
  //     if (!userExists) {
  //       router.replace(current_route, "/register", { shallow: true });
  //     }
  //   }, [userExists]);

  return <>{userExists ? children : <Register />}</>;
};

export default WithAuth;
