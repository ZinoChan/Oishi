import Navbar from "@components/Navbar";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  signInWithGoogle,
  signIn,
  createAccount,
  onAuthSuccess,
} from "@slices/authSlice";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { signInValidation } from "@helpers/yupValidation";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@lib/firebase";
import Loader from "@components/Loader";

const Register = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const [user, loading, error] = useAuthState(auth);

  const router = useRouter();

  useEffect(() => {
    if (user && router.route === "/register") {
      dispatch(onAuthSuccess(user));
      router.push("/menu");
    }
  }, [user]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signInValidation),
  });

  const [registerType, setRegisterType] = useState("signin");

  const onSubmit = ({ email, password }) => {
    if (registerType === "signin") {
      dispatch(signIn({ email, password }));
    } else {
      dispatch(createAccount({ email, password }));
    }
  };

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <section
          style={{ backgroundImage: "url(/images/home-bg.jpg)" }}
          className="min-h-screen flex items-center md:py-0 bg-cover bg-center sm:px-0 overflow-x-hidden px-2 py-20"
        >
          <Navbar />
          <div className=" w-full max-w-md bg-white mx-auto border border-gray-200 p-4">
            <h2 className=" text-center font-main sm:text-3xl text-2xl font-bold text-primary mb-6 capitalize">
              Register
            </h2>
            <div className="flex mb-6 justify-between">
              <button
                onClick={() => setRegisterType("signin")}
                className={`${
                  registerType !== "signin" && "opacity-30"
                } font-main text-white bg-black  py-1 px-2 text-md rounded`}
              >
                Sign In
              </button>
              <button
                onClick={() => setRegisterType("signup")}
                className={`${
                  registerType !== "signup" && "opacity-30"
                } font-main text-white bg-black  py-1 px-2 text-md rounded`}
              >
                Sign Up
              </button>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full flex flex-col space-y-4 mb-4"
            >
              <div>
                <input
                  {...register("email")}
                  type="email"
                  className="p-2 bg-gray-50 border w-full border-t-0 border-r-0 border-l-0 text-gray-700 text-md font-poppins "
                  placeholder="Email"
                />
                <span className="text-red-300 text-sm font-main my-2">
                  {errors?.email?.message}
                </span>
              </div>
              <div className="relative">
                <input
                  {...register("password")}
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="p-2 bg-gray-50 w-full border border-t-0 border-r-0 border-l-0  text-gray-700 text-md font-poppins"
                />
                <img
                  onClick={() => setShowPassword(!showPassword)}
                  className="cursor-pointer absolute top-1/2 right-2 transform -translate-y-1/2"
                  src={`${
                    showPassword
                      ? "/images/icons/show.svg"
                      : "/images/icons/hide.svg"
                  }`}
                  alt="show/hide passowrd"
                />
              </div>
              <span className="text-red-300 text-sm my-2 font-main">
                {errors?.password?.message}
              </span>
              <p className="font-poppins text-gray-900 text-sm underline">
                Forgot Password ?
              </p>
              <button
                type="submit"
                className="font-main text-white bg-primary w-full py-2 rounded"
              >
                Submit
              </button>
            </form>
            <button
              onClick={() => dispatch(signInWithGoogle())}
              type="submit"
              className="font-main text-white bg-blue-300 w-full py-2 rounded mb-4"
            >
              Login With Google
            </button>
            <button
              type="submit"
              className="font-main text-white bg-blue-600 w-full py-2 rounded"
            >
              Login With Facebook
            </button>
          </div>
        </section>
      )}
    </>
  );
};

export default Register;
