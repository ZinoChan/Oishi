import Navigation from "@components/checkout/Navigation";
import WithAuth from "@components/WithAuth";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { billingValidation } from "helpers/yupValidation";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "@slices/profileSlice";

const Billing = () => {
  const router = useRouter();

  const dispatch = useDispatch();

  const { profile, uid } = useSelector(
    (state: { profile: any; auth: any }) => ({
      profile: state.profile,
      uid: state.auth?.id,
    })
  );

  const defaultValues = {
    fullname: profile.fullname,
    address: profile.adress,
    postalCode: profile.postalCode,
    mobile: profile.mobile,
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(billingValidation),
    defaultValues,
  });

  const onSubmit = (data) => {
    const profileUpdates = {};
    for (let key in data) {
      if (data[key] !== profile[key]) {
        profileUpdates[key] = data[key];
      }
    }

    if (Object.keys(profileUpdates).length > 0) {
      dispatch(updateProfile({ id: uid, updates: profileUpdates }));
    }

    router.push("/checkout/payment");
  };

  return (
    <WithAuth>
      <Navigation current="billing" />
      <section className="min-h-screen py-20 flex items-center">
        <div className="max-w-screen-md px-2 w-full mx-auto">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="my-6 grid md:grid-cols-2 grid-cols-1 gap-4"
          >
            <div className="flex flex-col space-y-2">
              <label htmlFor="Full Name" className="font-main text-md">
                Full Name
              </label>
              <input
                {...register("fullname")}
                type="text"
                defaultValue={profile.fullname}
                className="border border-gray-200 rounded p-2"
              />
              <span className="text-red-300 text-sm font-main">
                {errors?.fullname?.message}
              </span>
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="Adress" className="font-main text-md">
                Address
              </label>
              <input
                type="text"
                defaultValue={profile.address}
                className="border border-gray-200 rounded p-2"
                {...register("address")}
              />
              <span className="text-red-300 text-sm font-main">
                {errors?.address?.message}
              </span>
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="Zip Code" className="font-main text-md">
                postal code
              </label>
              <input
                {...register("postalCode")}
                type="text"
                defaultValue={profile.postalCode}
                className="border border-gray-200 rounded p-2"
              />
              <span className="text-red-300 text-sm font-main">
                {errors?.postalCode?.message}
              </span>
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="mobile" className="font-main text-md">
                mobile
              </label>
              <input
                type="text"
                {...register("mobile")}
                defaultValue={profile.mobile}
                className="border border-gray-200 rounded p-2"
              />

              <span className="text-red-300 text-sm font-main">
                {errors?.mobile?.message}
              </span>
            </div>

            <div className=" col-span-2 flex items-center sm:justify-between flex-wrap sm:space-x-0 space-x-2 justify-center ">
              <Link href="/checkout/orderDetails">
                <a className="font-main border-2 border-primary text-primary sm:mb-0 mb-4 px-4 py-1 rounded ">
                  back to details
                </a>
              </Link>

              <button
                type="submit"
                className="font-main text-white bg-primary mb-4 border-2 border-primary  px-4 py-1 rounded "
              >
                Payment details
              </button>
            </div>
          </form>
        </div>
      </section>
    </WithAuth>
  );
};

export default Billing;
