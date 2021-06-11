import { generateId, serverTimestamp } from "@lib/firebase";
import { addReview } from "@slices/reviewsSlice";
import { useForm } from "react-hook-form";
import { useDialog } from "react-st-modal";

const AddReview = ({ dispatch, auth, itemId }) => {
  const dialog = useDialog();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ review }) => {
    const id = generateId();

    const user_review = {
      content: review,
      user_id: auth.id,
      item_id: itemId,
      createdAt: serverTimestamp(),
      user_name: auth.user_name,
      id,
    };

    dispatch(addReview({ uid: auth.id, review: user_review, item_id: itemId }));
    dialog.close();
  };

  return (
    <div className="p-4">
      <form
        className="flex flex-col space-y-4 "
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="text"
          {...register("review", {
            required: {
              value: true,
              message: "this field is required",
            },
            maxLength: {
              value: 130,
              message: "Your review can't be more then 130 characters",
            },
            minLength: {
              value: 5,
              message: "Your review can't be less than 5 characters",
            },
          })}
          className="p-2 bg-gray-50 border border-t-0 border-r-0 border-l-0  text-gray-700 text-md font-poppins"
        />
        <span className="text-red-300 text-sm font-main">
          {errors?.review?.message}
        </span>
        <button
          className="bg-primary text-white px-4 py-2 self-center rounded"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddReview;
