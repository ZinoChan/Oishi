import "tailwindcss/tailwind.css";
import "@fontsource/pacifico";
import "@fontsource/poppins";
import "@fontsource/quicksand/700.css";
import { wrapper } from "@store/index";
import { useEffect } from "react";
import { onAuthSuccess } from "@slices/authSlice";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@lib/firebase";
import { useDispatch, useStore } from "react-redux";
import { Toaster } from "react-hot-toast";
import Loader from "@components/Loader";
import { PersistGate } from "redux-persist/integration/react";
import { authLoading } from "@slices/appSlice";

function MyApp({ Component, pageProps }) {
  const [user, loading, error] = useAuthState(auth);

  const dispatch = useDispatch();

  useEffect(() => {
    if (loading) {
      dispatch(authLoading(true));
    } else {
      dispatch(authLoading(false));
    }

    if (user) {
      dispatch(onAuthSuccess(user));
    }
  }, [user, loading]);

  const store = useStore();

  return (
    <PersistGate persistor={store.__persistor} loading={<Loader />}>
      <>
        <Component {...pageProps} />
        <Toaster />
      </>
    </PersistGate>
  );
}

export default wrapper.withRedux(MyApp);
