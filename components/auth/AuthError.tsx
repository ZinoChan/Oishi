import React from "react";
import { useDialog } from "react-st-modal";

const AuthError = ({ message }) => {
  const dialog = useDialog();

  return (
    <div className="p-2 text-center">
      <h3 className="text-main text-gray-500 text-capitalize">
        Authentication Error
      </h3>
      <p className="text-red-500 text-poppins my-6">{message}</p>
      <button
        onClick={() => dialog.close()}
        className="focus:outline-none px-6 py-1 text-white bg-red-600 rounded"
      >
        Ok
      </button>
    </div>
  );
};

export default AuthError;
