import Navigation from "@components/checkout/Navigation";
import WithAuth from "@components/WithAuth";
import React from "react";
import { useForm } from "react-hook-form";

const Billing = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <WithAuth>
      <Navigation />
      <section className="min-h-screen py-20 flex items-center">
        <div className="max-w-screen-md px-2 w-full mx-auto">
          <button className="font-main bg-black text-white  px-4 py-1 rounded ">
            Edit
          </button>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="my-6 grid md:grid-cols-2 grid-cols-1 gap-4"
          >
            <div className="flex flex-col space-y-2">
              <label htmlFor="Full Name" className="font-main text-md">
                Full Name
              </label>
              <input
                {...register("name", {
                  required: { value: true, message: "this field is required" },
                })}
                type="text"
                className="border border-gray-200 rounded p-2"
              />
              <span className="text-red-300 text-sm font-main">
                {errors?.name?.message}
              </span>
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="Country" className="font-main text-md">
                Country
              </label>
              <input
                type="text"
                className="border border-gray-200 rounded p-2"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="Adress" className="font-main text-md">
                Address
              </label>
              <input
                type="text"
                className="border border-gray-200 rounded p-2"
                {...register("address", {
                  required: { value: true, message: "this field is required" },
                })}
              />
              <span className="text-red-300 text-sm font-main">
                {errors?.address?.message}
              </span>
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="City" className="font-main text-md">
                City
              </label>
              <input
                type="text"
                {...register("city", {
                  required: { value: true, message: "this field is required" },
                })}
                className="border border-gray-200 rounded p-2"
              />
              <span className="text-red-300 text-sm font-main">
                {errors?.city?.message}
              </span>
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="Zip Code" className="font-main text-md">
                Zip Code
              </label>
              <input
                {...register("zipCode", {
                  required: { value: true, message: "this field is required" },
                })}
                type="text"
                className="border border-gray-200 rounded p-2"
              />
              <span className="text-red-300 text-sm font-main">
                {errors?.zipCode?.message}
              </span>
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="Phone" className="font-main text-md">
                Phone
              </label>
              <input
                type="text"
                {...register("phone", {
                  required: { value: true, message: "this field is required" },
                })}
                className="border border-gray-200 rounded p-2"
              />
              <span className="text-red-300 text-sm font-main">
                {errors?.phone?.message}
              </span>
            </div>
          </form>
          <div className="flex items-center sm:justify-between flex-wrap sm:space-x-0 space-x-2 justify-center ">
            <button className="font-main border-2 border-primary text-primary sm:mb-0 mb-4 px-4 py-1 rounded ">
              back to details
            </button>
            <button className="font-main text-white bg-primary mb-4 border-2 border-primary  px-4 py-1 rounded ">
              Payment details
            </button>
          </div>
        </div>
      </section>
    </WithAuth>
  );
};

export default Billing;
