import { deleteReview } from "@slices/reviewsSlice";
import Link from "next/link";
import { CustomDialog } from "react-st-modal";
import AddReview from "./AddReview";
import EditReview from "./EditReview";

const Reviews = ({ dispatch, auth, reviews, itemId }) => {
  const alreadyReviewed = reviews?.find(
    (review) => review.user_id === auth?.id
  );

  const onAddReview = async () => {
    if (!alreadyReviewed) {
      const result = await CustomDialog(
        <AddReview dispatch={dispatch} auth={auth} itemId={itemId} />,
        {
          title: "Add Review",
          showCloseIcon: true,
        }
      );
    } else {
      const result = await CustomDialog(
        <EditReview
          review={alreadyReviewed}
          dispatch={dispatch}
          uid={auth?.id}
          item_id={itemId}
        />,
        {
          title: "Add Review",
          showCloseIcon: true,
        }
      );
    }
  };

  const onEditReview = async () => {
    const result = await CustomDialog(
      <EditReview
        review={alreadyReviewed}
        dispatch={dispatch}
        uid={auth?.id}
        item_id={itemId}
        edit={true}
      />,
      {
        title: "Add Review",
        showCloseIcon: true,
      }
    );
  };

  return (
    <div className="bg-white border border-gray-200 rounded-md py-6 px-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-main text-md font-bold capitalize mb-2">
          Custumer reviews
        </h3>
        {!!auth?.id && (
          <button
            onClick={onAddReview}
            className="px-4 py-2 self-center bg-secondary text-black px-4 rounded py-1 text-md font-main"
          >
            add review
          </button>
        )}
        {!auth?.id && (
          <button className="focus:outline-none bg-secondary text-black px-4 rounded py-1 text-md font-main">
            <Link href="/register">
              <a>login to review</a>
            </Link>
          </button>
        )}
      </div>
      <div>
        {reviews?.length > 0 &&
          reviews.map(({ id, user_name, content, user_id, item_id }) => (
            <div className="flex justify-between space-x-6 mb-2" key={id}>
              <div className=" overflow-hidden">
                <h4 className=" font-main font-bold text-lg mb-1">
                  {user_name}
                </h4>
                <span className=" font-poppins text-md ">{content}</span>
              </div>
              {auth?.id === user_id && (
                <div className="flex flex-col justify-between">
                  <button
                    onClick={() =>
                      dispatch(deleteReview({ uid: auth?.id, item_id }))
                    }
                    className="focus:outline-none mb-2"
                  >
                    <img
                      className="w-6 h-4"
                      src="/images/icons/trash.svg"
                      alt="delete"
                    />
                  </button>
                  <button className="focus:outline-none" onClick={onEditReview}>
                    <img
                      className="w-6 h-4"
                      src="/images/icons/pen.svg"
                      alt="delete"
                    />
                  </button>
                </div>
              )}
            </div>
          ))}
        {reviews?.length === 0 && (
          <h3 className="text-center fony-poppins text-xl">
            There is no reviews for this food
          </h3>
        )}
      </div>
    </div>
  );
};

export default Reviews;
