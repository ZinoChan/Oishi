import { editReview } from "@slices/reviewsSlice";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDialog } from "react-st-modal";

const EditReview = ({ dispatch, uid, item_id, review }) => {
  const [showInput, setShowInput] = useState(false);

  const { register, handleSubmit, reset } = useForm();

  const dialog = useDialog();

  const onSubmit = ({ reviewContent }) => {
    dispatch(editReview({ uid, content: reviewContent, item_id }));
  };

  return (
    <div className="p-4">
      <h2 className="text-red-400 font-main">You already added a review</h2>
      <p className="text-poppins text-xl">{review.content}</p>
      <form
        className="flex flex-col space-y-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="text"
          {...register("reviewContent")}
          className={`${
            showInput ? "block" : "hidden"
          } p-2 bg-gray-50 border border-t-0 border-r-0 border-l-0  text-gray-700 text-md font-poppins`}
        />
        <div className="flex justify-between">
          {showInput && (
            <button
              className="bg-primary text-white"
              type="submit"
              onClick={() => {
                dialog.close();
              }}
            >
              Submit
            </button>
          )}

          {!showInput && (
            <button
              className="bg-primary text-white"
              type="submit"
              onClick={() => {
                setShowInput(true);
              }}
            >
              Edit
            </button>
          )}

          <button
            className="bg-black text-white"
            type="submit"
            onClick={() => {
              dialog.close();
            }}
          >
            cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditReview;
