import { signInWithGoogle } from "@slices/authSlice";
import { useEffect } from "react";
import { useDialog } from "react-st-modal";

const AuthPopup = ({ dispatch, auth }) => {
  const dialog = useDialog();

  const onGoogleRegister = () => {
    dispatch(signInWithGoogle());
    dialog.close();
  };

  return (
    <div className="p-4">
      <form className="w-full flex flex-col space-y-4 mb-4">
        <input
          type="email"
          className="p-2 bg-gray-50 border  border-t-0 border-r-0 border-l-0 text-gray-700 text-md font-poppins "
          placeholder="Email"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 bg-gray-50 border border-t-0 border-r-0 border-l-0  text-gray-700 text-md font-poppins"
        />
        <p className="font-poppins text-gray-900 text-sm underline">
          Forgot Password ?
        </p>
        <button
          type="submit"
          className="font-main text-white bg-primary w-full py-2 rounded"
        >
          Submit
        </button>
      </form>
      <button
        onClick={onGoogleRegister}
        type="submit"
        className="font-main text-white bg-blue-300 w-full py-2 rounded mb-4"
      >
        Login With Google
      </button>
      <button
        type="submit"
        className="font-main text-white bg-blue-600 w-full py-2 rounded"
      >
        Login With Facebook
      </button>
    </div>
  );
};

export default AuthPopup;
