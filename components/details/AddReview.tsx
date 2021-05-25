import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDialog } from "react-st-modal";

const AddReview = () => {
  const dialog = useDialog();

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="p-4">
      <form
        className="flex flex-col space-y-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="text"
          {...register("review")}
          className="p-2 bg-gray-50 border border-t-0 border-r-0 border-l-0  text-gray-700 text-md font-poppins"
        />
        <button
          className="bg-primary text-white"
          type="submit"
          onClick={() => {
            dialog.close();
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddReview;
