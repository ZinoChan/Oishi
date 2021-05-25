import { CustomDialog } from "react-st-modal";
import AddReview from "./AddReview";

const Reviews = ({ auth }) => {
  const onAddReview = async () => {
    const result = await CustomDialog(<AddReview />, {
      title: "Add Review",
      showCloseIcon: true,
    });
  };

  return (
    <div className="bg-white border border-gray-200 rounded-md py-6 px-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-main text-md font-bold capitalize mb-2">
          Custumer reviews
        </h3>
        {auth && (
          <button
            onClick={onAddReview}
            className="px-4 py-2 self-center bg-secondary text-black px-4 rounded py-1 text-md font-main"
          >
            add review
          </button>
        )}
        {!auth && (
          <button className="bg-secondary text-black px-4 rounded py-1 text-md font-main">
            login to review
          </button>
        )}
      </div>
      <div>
        <div className="flex justify-between mb-2">
          <div>
            <h4 className="font-main font-bold text-lg mb-1">Sakata</h4>
            <p className="font-poppins text-md">
              So delicies and fast delivery thank you
            </p>
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <h4 className="font-main font-bold text-lg mb-1">Hijikata</h4>
            <p className="font-poppins text-md">
              So delicies and fast delivery thank you
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
