import "tailwindcss/tailwind.css";
import "@fontsource/pacifico";
import "@fontsource/poppins";
import "@fontsource/quicksand/700.css";
import { wrapper } from "store";
import { useEffect } from "react";
import { onAuthSuccess } from "@slices/authSlice";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, serverTimestamp } from "@lib/firebase";
import { useDispatch } from "react-redux";
import { Toaster } from "react-hot-toast";
import Loader from "@components/Loader";
import { addReview } from "@slices/reviewsSlice";

function MyApp({ Component, pageProps }) {
  const [user, loading, error] = useAuthState(auth);

  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      dispatch(onAuthSuccess(user));
    }
  }, [user]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Component {...pageProps} />
          <Toaster />
        </>
      )}
    </>
  );
}

export default wrapper.withRedux(MyApp);
