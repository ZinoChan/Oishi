import { generateId, serverTimestamp } from "@lib/firebase";
import { addReview } from "@slices/reviewsSlice";
import { useForm } from "react-hook-form";
import { useDialog } from "react-st-modal";

const AddReview = ({ dispatch, auth, itemId }) => {
  const dialog = useDialog();

  const { register, handleSubmit, reset } = useForm();

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
  };

  return (
    <div className="p-4">
      <form
        className="flex flex-col space-y-4 "
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="text"
          {...register("review")}
          className="p-2 bg-gray-50 border border-t-0 border-r-0 border-l-0  text-gray-700 text-md font-poppins"
        />
        <button
          className="bg-primary text-white px-4 py-2 self-center rounded"
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
