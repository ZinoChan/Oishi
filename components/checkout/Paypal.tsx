import { yupResolver } from "@hookform/resolvers/yup";
import { paypalValidation } from "helpers/yupValidation";
import React from "react";
import { useForm } from "react-hook-form";

const Paypal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(paypalValidation),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="my-6">
      <div className="flex flex-col space-y-2 col-span-3 mb-4">
        <label htmlFor="email" className="font-main text-md">
          Email
        </label>
        <input
          {...register("email")}
          type="email"
          className="border border-gray-200 rounded p-2"
        />
        <span className="text-red-300 text-sm font-main">
          {errors?.email?.message}
        </span>
      </div>
      <div className="flex flex-col space-y-2">
        <label htmlFor="password" className="font-main text-md">
          Password
        </label>
        <input
          {...register("password")}
          type="password"
          className="border border-gray-200 rounded p-2"
        />
        <span className="text-red-300 text-sm font-main">
          {errors?.password?.message}
        </span>
      </div>
      <div className="mt-4 col-span-3 flex items-center sm:justify-between flex-wrap sm:space-x-0 space-x-2 justify-center ">
        <button className="font-main border-2 border-primary text-primary sm:mb-0 mb-4 px-4 py-1 rounded ">
          back to billing
        </button>
        <button
          type="submit"
          className="font-main text-white bg-primary  border-2 border-primary  px-4 py-1 rounded "
        >
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Paypal;
