import { yupResolver } from "@hookform/resolvers/yup";
import { cardValidation } from "helpers/yupValidation";
import React from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { CustomDialog } from "react-st-modal";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setOrders } from "@slices/ordersSlice";
import { serverTimestamp } from "@lib/firebase";

const CreditCard = () => {
  const router = useRouter();

  const { cart, uid } = useSelector((state: { cart: any; auth: any }) => ({
    cart: state.cart,
    uid: state.auth?.id,
  }));
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(cardValidation),
  });

  const onSubmit = (data) => {
    dispatch(
      setOrders({ id: uid, orders: { cart, orderAt: serverTimestamp() } })
    );
    CustomDialog(
      <div className="p-4 text-center">
        <h2 className="text-primary text-xl font-bold font-main">
          Payment confirmed successuflly
        </h2>
        <div className="flex justify-between">
          <button
            onClick={() => router.push("/menu")}
            className="font-main text-white bg-primary  border-primary  px-4 py-1 rounded "
          >
            menu
          </button>
          <button
            onClick={() => router.push("/")}
            className="font-main text-white bg-primary  border-primary  px-4 py-1 rounded "
          >
            Orders
          </button>
        </div>
      </div>,
      {
        title: "Done",
        showCloseIcon: true,
      }
    );

    // router.push("/menu");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="my-6 grid sm:grid-cols-3 grid-cols-1 gap-4"
    >
      <div className="flex flex-col space-y-2 sm:col-span-3">
        <label htmlFor="cardNumber" className="font-main text-md">
          Card Number
        </label>
        <input
          {...register("cardNumber")}
          type="text"
          className="border border-gray-200 rounded p-2"
        />
        <span className="text-red-300 text-sm font-main">
          {errors?.cardNumber?.message}
        </span>
      </div>
      <div className="flex flex-col space-y-2">
        <label htmlFor="Country" className="font-main text-md">
          Name on Card
        </label>
        <input
          {...register("nameOnCard")}
          type="text"
          className="border border-gray-200 rounded p-2"
        />
        <span className="text-red-300 text-sm font-main">
          {errors?.nameOnCard?.message}
        </span>
      </div>
      <div className="flex flex-col space-y-2">
        <label htmlFor="Country" className="font-main text-md">
          Cvv Code
        </label>
        <input
          {...register("cvvCode")}
          type="text"
          className="border border-gray-200 rounded p-2"
        />
        <span className="text-red-300 text-sm font-main">
          {errors?.cvvCode?.message}
        </span>
      </div>
      <div className="flex flex-col space-y-2">
        <label htmlFor="Adress" className="font-main text-md">
          Expirity Date
        </label>
        <div className="grid grid-cols-5 items-center justify-center">
          <div className="col-span-2">
            <select
              {...register("monthDate")}
              className="w-full border border-gray-200 rounded p-2"
              defaultValue="MM"
            >
              <option value="january"> 01 </option>
              <option value="february"> 02 </option>
              <option value="march"> 03 </option>
              <option value="april"> 04 </option>
              <option value="may"> 05 </option>
              <option value="june"> 06 </option>
              <option value="july"> 07 </option>
              <option value="august"> 08 </option>
              <option value="september"> 09 </option>
              <option value="october"> 10 </option>
              <option value="novemeber"> 11 </option>
              <option value="december"> 12 </option>
            </select>
            <span className="text-red-300 text-sm font-main">
              {errors?.monthDate?.message}
            </span>
          </div>
          <span className="mx-4 font-main">/</span>

          <div className="col-span-2">
            <select
              {...register("yearDate")}
              className="w-full border border-gray-200 rounded p-2"
              defaultValue="MM"
            >
              <option value="2021"> 2021 </option>
              <option value="2022"> 2022 </option>
              <option value="2023"> 2023 </option>
              <option value="2024"> 2024 </option>
              <option value="2025"> 2025 </option>
              <option value="2026"> 2026 </option>
              <option value="2027"> 2027 </option>
              <option value="2028"> 2028 </option>
              <option value="2029"> 2029 </option>
              <option value="2030"> 2030 </option>
            </select>
            <span className="text-red-300 text-sm font-main">
              {errors?.yearDate?.message}
            </span>
          </div>
        </div>
      </div>
      <div className="mt-4 col-span-3 flex items-center sm:justify-between flex-wrap sm:space-x-0 space-x-2 justify-center ">
        <Link href="/checkout/billing">
          <a className="font-main border-2 border-primary text-primary sm:mb-0 mb-4 px-4 py-1 rounded ">
            back to billing
          </a>
        </Link>
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

export default CreditCard;
