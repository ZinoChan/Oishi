import "tailwindcss/tailwind.css";
import "@fontsource/pacifico";
import "@fontsource/poppins";
import "@fontsource/quicksand/700.css";
import { wrapper } from "@store/index";
import { useEffect, useState } from "react";
import { onAuthSuccess } from "@slices/authSlice";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@lib/firebase";
import { useDispatch, useStore } from "react-redux";
import { Toaster } from "react-hot-toast";
import Loader from "@components/Loader";
import { PersistGate } from "redux-persist/integration/react";
import { authLoading } from "@slices/appSlice";
import { Router } from "next/router";

function MyApp({ Component, pageProps }) {
  const [user, loading, error] = useAuthState(auth);
  const [pageLoading, setPageLoading] = useState(false);

  Router.events.on("routeChangeStart", () => setPageLoading(true));
  Router.events.on("routeChangeComplete", () => setPageLoading(false));
  Router.events.on("routeChangeError", () => setPageLoading(false));

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
    <>
      {/*// @ts-ignore */}
      <PersistGate persistor={store.__persistor} loading={<Loader />}>
        <>
          {pageLoading && <Loader />}
          {!pageLoading && (
            <>
              <Component {...pageProps} />
              <Toaster />
            </>
          )}
        </>
      </PersistGate>
    </>
  );
}

export default wrapper.withRedux(MyApp);
