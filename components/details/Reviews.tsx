import AuthPopup from "@components/AuthPopup";
import { CustomDialog } from "react-st-modal";
import AddReview from "./AddReview";

const Reviews = ({ dispatch, auth, reviews, itemId }) => {
  const onAddReview = async () => {
    const result = await CustomDialog(
      <AddReview dispatch={dispatch} uid={auth.id} itemId={itemId} />,
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

  const alreadyReviewed = reviews?.find(
    (review) => review.user_id === auth?.id
  );

  console.log(alreadyReviewed);

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
            className="bg-secondary text-black px-4 rounded py-1 text-md font-main"
          >
            login to review
          </button>
        )}
      </div>
      <div>
        {reviews?.length > 0 &&
          reviews.map(({ id, user_name, content }) => (
            <div className="flex justify-between mb-2" key={id}>
              <div>
                <h4 className="font-main font-bold text-lg mb-1">
                  {user_name}
                </h4>
                <p className="font-poppins text-md">{content}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Reviews;
