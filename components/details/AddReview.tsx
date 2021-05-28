import { serverTimestamp } from "@lib/firebase";
import { addReview } from "@slices/reviewsSlice";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDialog } from "react-st-modal";

const AddReview = ({ dispatch, uid, itemId }) => {
  const dialog = useDialog();

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = ({ review }) => {
    const user_review = {
      content: review,
      user_id: uid,
      item_id: itemId,
      createdAt: serverTimestamp(),
      user_name: "zino",
      id: "lkjdlakzj",
    };

    dispatch(addReview({ uid, review: user_review, item_id: itemId }));

    toast.success("review added successfully");
  };

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
