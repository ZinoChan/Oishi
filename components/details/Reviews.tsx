import AuthPopup from "@components/AuthPopup";
import { deleteReview } from "@slices/reviewsSlice";
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
          uid={auth.id}
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
        uid={auth.id}
        item_id={itemId}
        edit={true}
      />,
      {
        title: "Add Review",
        showCloseIcon: true,
      }
    );
  };

  const onLoginClick = async () => {
    const result = await CustomDialog(
      <AuthPopup dispatch={dispatch} auth={auth} />,
      {
        title: "Register to review",
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
          <button
            onClick={onLoginClick}
            className="focus:outline-none bg-secondary text-black px-4 rounded py-1 text-md font-main"
          >
            login to review
          </button>
        )}
      </div>
      <div>
        {reviews?.length > 0 &&
          reviews.map(({ id, user_name, content, user_id, item_id }) => (
            <div className="flex justify-between mb-2" key={id}>
              <div>
                <h4 className="font-main font-bold text-lg mb-1">
                  {user_name}
                </h4>
                <p className="font-poppins text-md">{content}</p>
              </div>
              {auth.id === user_id && (
                <div className="flex flex-col justify-between">
                  <button
                    onClick={() =>
                      dispatch(deleteReview({ uid: auth?.id, item_id }))
                    }
                    className="focus:outline-none"
                  >
                    <img
                      className="w-4 h-4"
                      src="/images/icons/trash.svg"
                      alt="delete"
                    />
                  </button>
                  <button className="focus:outline-none" onClick={onEditReview}>
                    <img
                      className="w-4 h-4"
                      src="/images/icons/pen.svg"
                      alt="delete"
                    />
                  </button>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Reviews;
