import Navbar from "@components/Navbar";

import React from "react";

const Register = () => {
  return (
    <section
      style={{ backgroundImage: "url(/images/home-bg.jpg)" }}
      className="min-h-screen flex items-center md:py-0 bg-cover bg-center sm:px-0 overflow-x-hidden px-2 py-20"
    >
      <Navbar />
      <div className=" w-full max-w-md bg-white mx-auto border border-gray-200 p-4">
        <h2 className=" text-center font-main sm:text-3xl text-2xl font-bold text-primary mb-6 capitalize">
          Register
        </h2>
        <form className="w-full flex flex-col space-y-4 mb-4">
          <input
            type="email"
            className="p-2 bg-gray-50 border  border-t-0 border-r-0 border-l-0 text-gray-700 text-md font-poppins "
            placeholder="Email"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2 bg-gray-50 border border-t-0 border-r-0 border-l-0  text-gray-700 text-md font-poppins"
          />
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
  );
};

export default Register;
